import nodemailer from "nodemailer";
import pLimit from "p-limit";
import { InternalServerError, BadRequestError } from "forge-error";
import { envConfig } from "../config/congifs";

const FROM_EMAIL = envConfig.fromEmail;
const MAX_CONCURRENCY = envConfig.maxConcurrency;

const transporter = nodemailer.createTransport({
  host: envConfig.smtp.host,
  port: envConfig.smtp.port,
  secure: envConfig.smtp.port === 465,
  auth: {
    user: envConfig.smtp.user,
    pass: envConfig.smtp.pass,
  },
});

export type Recipient = { name?: string; email: string };

function replacePlaceholders(template: string, data: Recipient) {
  return template
    .replace(/\/\/name\/\//g, data.name || "")
    .replace(/\/\/email\/\//g, data.email ? `<a href="mailto:${data.email}">${data.email}</a>` : "");
}

export async function sendEmail(
  recipient: Recipient,
  subject: string,
  body?: string
) {
  try {
    if (!body) {
      throw new BadRequestError("Email body is required");
    }

    // Always replace placeholders in the provided body
    const html = replacePlaceholders(body, recipient);

    const mailOptions = {
      from: FROM_EMAIL,
      to: recipient.email,
      subject,
      html,
    };

    return await transporter.sendMail(mailOptions);
  } catch (err: any) {
    throw new InternalServerError(
      `Failed to send email to ${recipient.email}: ${err.message}`
    );
  }
}

export async function sendBulkEmails(
  recipients: Recipient | Recipient[],
  subject: string,
  body?: string
) {
  const recipientList = Array.isArray(recipients) ? recipients : [recipients];
  const limit = pLimit(MAX_CONCURRENCY);

  const results: Array<{
    to: string;
    ok: boolean;
    error?: string;
    messageId?: string;
  }> = [];

  await Promise.all(
    recipientList.map((recipient) =>
      limit(async () => {
        try {
          const info = await sendEmail(recipient, subject, body);
          results.push({
            to: recipient.email,
            ok: true,
            messageId: info.messageId,
          });
        } catch (err: any) {
          results.push({
            to: recipient.email,
            ok: false,
            error: err?.message || String(err),
          });
        }
      })
    )
  );

  const allSuccess = results.every((r) => r.ok);

  return allSuccess
    ? {
        success: true,
        message: "All emails sent successfully!",
        total: recipientList.length,
        details: results,
      }
    : {
        success: false,
        message: "Some emails failed to send.",
        total: recipientList.length,
        sent: results.filter((r) => r.ok).length,
        failed: results.filter((r) => !r.ok).length,
        details: results,
      };
}
