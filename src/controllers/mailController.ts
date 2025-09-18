import { Request, Response, NextFunction } from "express";
import { sendBulkEmails, Recipient } from "../services/sesService";
import { BadRequestError } from "forge-error";

export async function handleJsonUpload(req: Request, res: Response, next: NextFunction) {
  try {
    const { subject, body, recipients } = req.body;

    if (!subject) {
      throw new BadRequestError("Subject is required");
    }

    const recipientList: Recipient[] = Array.isArray(recipients)
      ? recipients
      : recipients
      ? [recipients]
      : [];

    if (recipientList.length === 0) {
      throw new BadRequestError("Recipients must be a non-empty object or array");
    }

    const validRecipients: Recipient[] = recipientList
      .map((r: any) => ({
        name: r?.name?.toString().trim() || "",
        email: r?.email?.toString().trim() || "",
      }))
      .filter((r) => r.email && r.email.includes("@"));

    if (!validRecipients.length) {
      throw new BadRequestError("No valid recipient emails found");
    }

    const summary = await sendBulkEmails(validRecipients, subject, body);

    return res.json(summary);
  } catch (err) {
    next(err);
  }
}
