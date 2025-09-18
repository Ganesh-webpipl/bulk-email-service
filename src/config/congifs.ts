import { z } from "zod";
import dotenv from "dotenv";
import { fromZodError } from "zod-validation-error";

dotenv.config();

const envSchema = z.object({
  PORT: z
    .string()
    .regex(/^\d+$/, "PORT must be a valid number")
    .transform(Number)
    .refine((val) => val > 0 && val < 65536, {
      message: "PORT must be between 1 and 65535",
    })
    .catch(4000),

  FROM_EMAIL: z.string().email(),

  SMTP_HOST: z.string(),
  SMTP_PORT: z
    .string()
    .regex(/^\d+$/, "SMTP_PORT must be a number")
    .transform(Number),

  SMTP_USER: z.string(),
  SMTP_PASS: z.string(),

  MAX_CONCURRENCY: z
    .string()
    .regex(/^\d+$/, "MAX_CONCURRENCY must be a number")
    .transform(Number)
    .default(5),

  NODE_ENV: z
    .enum(["development", "production", "test", "staging", "local"])
    .default("test"),
  LOG_LEVEL: z
    .enum(["error", "warn", "info", "debug", "silly"])
    .default("info"),
});

const parsed = envSchema.safeParse(process.env);

if (!parsed.success) {
  console.error(
    "❌ Invalid environment variables:\n" +
      fromZodError(parsed.error)
        .details.map((err) => `${String(err.path[0])} - ${err.message}`)
        .join("\n")
  );
  process.exit(1);
}

export const envConfig = {
  port: parsed.data.PORT,
  fromEmail: parsed.data.FROM_EMAIL,
  smtp: {
    host: parsed.data.SMTP_HOST,
    port: parsed.data.SMTP_PORT,
    user: parsed.data.SMTP_USER,
    pass: parsed.data.SMTP_PASS,
  },
  maxConcurrency: parsed.data.MAX_CONCURRENCY,
  env: parsed.data.NODE_ENV,
  logLevel: parsed.data.LOG_LEVEL,
};
