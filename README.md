# backend-ses-excel

Simple Node.js + TypeScript backend that accepts an Excel (.xlsx) upload with `name` and `email` columns,
and sends emails via AWS SES. The frontend provides the email subject and HTML body (template).

## Quick start
1. Copy `.env.example` to `.env` and fill AWS credentials and FROM_EMAIL (must be verified in SES).
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start in dev:
   ```bash
   npm run dev
   ```
4. Upload Excel to `POST /upload` using `form-data`:
   - field `file`: the Excel file (.xlsx)
   - fields `subject` and `html`

## Endpoints
- `GET /health`
- `POST /upload` - multipart/form-data: file, subject, html

Notes:
- Replace `{name}` in HTML to personalize.
- SES sandbox requires verification for sender & recipient in some regions.
