import XLSX from 'xlsx';

export function parseExcelBuffer(buffer: Buffer): Array<Record<string, any>> {
  const workbook = XLSX.read(buffer, { type: 'buffer' });
  const sheetName = workbook.SheetNames[0];
  if (!sheetName) return [];
  const sheet = workbook.Sheets[sheetName];
  const raw = XLSX.utils.sheet_to_json<Record<string, any>>(sheet, { defval: '' });
  return raw.map(row => {
    const normalized: Record<string, any> = {};
    for (const k of Object.keys(row)) {
      normalized[k.toString().trim().toLowerCase()] = row[k];
    }
    return normalized;
  });
}
