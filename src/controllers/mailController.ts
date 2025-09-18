// src/controllers/emailController.ts
import { Request, Response, NextFunction } from "express";
import { sendBulkEmails, Recipient } from "../services/sesService";
import { BadRequestError } from "forge-error";

export async function handleJsonUpload(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const { subject, body, recipients } = req.body;

    if (!subject) throw new BadRequestError("Subject is required");
    if (!body) throw new BadRequestError("Email body is required");

    const recipientList: Recipient[] = Array.isArray(recipients)
      ? recipients
      : recipients
      ? [recipients]
      : [];

    if (!recipientList.length)
      throw new BadRequestError(
        "Recipients must be a non-empty object or array"
      );

    // Dynamically validate recipients
    const validRecipients: Recipient[] = recipientList
      .map((r: any) => {
        // Trim string fields dynamically
        const cleaned: Recipient = {};
        Object.keys(r).forEach((key) => {
          const value = r[key];
          cleaned[key] = typeof value === "string" ? value.trim() : value;
        });
        return cleaned;
      })
      .filter((r) => r.email && r.email.includes("@")); // ensure email exists

    if (!validRecipients.length) {
      throw new BadRequestError("No valid recipient emails found");
    }

    const summary = await sendBulkEmails(validRecipients, subject, body);
    return res.json(summary);
  } catch (err) {
    next(err);
  }
}
