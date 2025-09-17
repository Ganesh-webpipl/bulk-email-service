import { z } from "zod";

export const bulkUploadValidation = {
  body: z.object({
    subject: z.string().min(1, "Subject is required"),

    html: z.string().min(1, "HTML content is required"),
  }),
};

export type BulkUploadBodyType = z.infer<typeof bulkUploadValidation.body>;
