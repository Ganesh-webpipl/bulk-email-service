import { Request, Response } from 'express';
import { sendBulkEmails, Recipient } from '../services/sesService';

export async function handleJsonUpload(req: Request, res: Response) {
  try {
    const { subject, body, recipients } = req.body;

    if (!subject) {
      return res.status(400).json({ error: 'Subject is required' });
    }

    const recipientList: Recipient[] = Array.isArray(recipients)
      ? recipients
      : recipients
      ? [recipients]
      : [];

    if (recipientList.length === 0) {
      return res
        .status(400)
        .json({ error: 'Recipients must be a non-empty object or array' });
    }

    // Clean and validate
    const validRecipients: Recipient[] = recipientList
      .map((r: any) => ({
        name: r?.name?.toString().trim() || '',
        email: r?.email?.toString().trim() || '',
      }))
      .filter((r) => r.email && r.email.includes('@'));

    if (!validRecipients.length) {
      return res.status(400).json({ error: 'No valid recipient emails found' });
    }

    const summary = await sendBulkEmails(validRecipients, subject, body);

    return res.json(summary); // sendBulkEmails already returns success/failure
  } catch (err: any) {
    console.error('handleJsonUpload error', err);
    return res
      .status(500)
      .json({ error: err?.message || 'Internal server error' });
  }
}
