import { google } from "googleapis";
import type { ContactFormData } from "@/lib/types";

const SHEET_NAME = "Contacts";
const HEADERS = ["Submitted At", "Name", "Email", "Company", "Service", "Message"];

// ─── Auth (singleton) ─────────────────────────────────────────────────────────

function getSheets() {
  const email = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL;
  const key = process.env.GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY;

  if (!email || !key) {
    throw new Error(
      "Missing Google credentials. Set GOOGLE_SERVICE_ACCOUNT_EMAIL and GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY in .env.local."
    );
  }

  const auth = new google.auth.GoogleAuth({
    credentials: {
      client_email: email,
      // env vars store \n as literal \\n — restore real newlines
      private_key: key.replace(/\\n/g, "\n"),
    },
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  });

  return google.sheets({ version: "v4", auth });
}

// ─── Public API ───────────────────────────────────────────────────────────────

export async function appendContactToSheet(data: ContactFormData): Promise<void> {
  const spreadsheetId = process.env.GOOGLE_SHEETS_SPREADSHEET_ID;

  if (!spreadsheetId) {
    throw new Error(
      "Missing GOOGLE_SHEETS_SPREADSHEET_ID in .env.local."
    );
  }

  const sheets = getSheets();
  const range = `${SHEET_NAME}!A1:F1`;

  // Write header row if the sheet is empty
  const existing = await sheets.spreadsheets.values.get({ spreadsheetId, range });
  if (!existing.data.values?.length) {
    await sheets.spreadsheets.values.update({
      spreadsheetId,
      range,
      valueInputOption: "RAW",
      requestBody: { values: [HEADERS] },
    });
  }

  // Append the submission as a new row
  await sheets.spreadsheets.values.append({
    spreadsheetId,
    range: `${SHEET_NAME}!A:F`,
    valueInputOption: "RAW",
    insertDataOption: "INSERT_ROWS",
    requestBody: {
      values: [[
        data.submittedAt.toISOString(),
        data.name,
        data.email,
        data.company,
        data.service,
        data.message,
      ]],
    },
  });
}
