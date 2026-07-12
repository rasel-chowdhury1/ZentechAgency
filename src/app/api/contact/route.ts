import { NextResponse } from "next/server";
import { validateContactForm } from "@/lib/utils/validation";
import { sendThankYouEmail, sendNotificationEmail } from "@/lib/services/email.service";
import { appendContactToSheet } from "@/lib/services/storage.service";

export async function POST(req: Request) {
  // ── 1. Parse body ──────────────────────────────────────────────────────────
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json(
      { ok: false, message: "Invalid JSON body." },
      { status: 400 }
    );
  }

  // ── 2. Validate ────────────────────────────────────────────────────────────
  const validation = validateContactForm(body);
  if (!validation.ok) {
    return NextResponse.json(
      { ok: false, message: validation.errors[0], errors: validation.errors },
      { status: 422 }
    );
  }

  const { data } = validation;

  // ── 3. Run all side-effects in parallel ────────────────────────────────────
  const [thankYouResult, notificationResult, storageResult] =
    await Promise.allSettled([
      sendThankYouEmail(data),
      sendNotificationEmail(data),
      appendContactToSheet(data),
    ]);

  // Log individual failures server-side without blocking the response
  if (thankYouResult.status === "rejected") {
    console.error("[contact] thank-you email failed:", thankYouResult.reason);
  }
  if (notificationResult.status === "rejected") {
    console.error("[contact] notification email failed:", notificationResult.reason);
  }
  if (storageResult.status === "rejected") {
    console.error("[contact] excel storage failed:", storageResult.reason);
  }

  // ── 4. Respond ─────────────────────────────────────────────────────────────
  // Return success as long as the submission itself was valid.
  // Side-effect failures are logged but do not surface to the user.
  return NextResponse.json({ ok: true }, { status: 200 });
}
