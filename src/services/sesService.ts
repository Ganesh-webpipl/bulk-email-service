import nodemailer from "nodemailer";
import pLimit from "p-limit";
import { envConfig } from "../config/config";
import { renderTemplate, TemplateData } from "./templateService";

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
    .replace(/\/\/email\/\//g, data.email || "");
}

export async function sendEmail(
  recipient: Recipient,
  subject: string,
  body?: string
) {
  const html = body
    ? replacePlaceholders(body, recipient)
    : renderTemplate(recipient);

  const mailOptions = {
    from: FROM_EMAIL,
    to: recipient.email,
    subject,
    html,
  };

  return transporter.sendMail(mailOptions);
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
          console.error(`Email error for ${recipient.email}`, err);
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

  if (allSuccess) {
    return {
      success: true,
      message: "All emails sent successfully!",
      total: recipientList.length,
      details: results,
    };
  } else {
    return {
      success: false,
      message: "Some emails failed to send.",
      total: recipientList.length,
      sent: results.filter((r) => r.ok).length,
      failed: results.filter((r) => !r.ok).length,
      details: results,
    };
  }
}
