import nodemailer, { type Transporter } from "nodemailer";
import type { ContactFormData } from "@/lib/types";

// ─── Transporter (singleton) ──────────────────────────────────────────────────

let _transporter: Transporter | null = null;

function getTransporter(): Transporter {
  if (_transporter) return _transporter;

  const { SMTP_HOST, SMTP_PORT, SMTP_SECURE, SMTP_USER, SMTP_PASS } = process.env;

  if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS) {
    throw new Error(
      "Missing SMTP configuration. Set SMTP_HOST, SMTP_USER, and SMTP_PASS in .env.local."
    );
  }

  _transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port: Number(SMTP_PORT ?? 587),
    secure: SMTP_SECURE === "true",
    auth: { user: SMTP_USER, pass: SMTP_PASS },
  });

  return _transporter;
}

// ─── Helpers ──────────────────────────────────────────────────────────────────

const FROM = () =>
  process.env.CONTACT_FROM_EMAIL ?? "ZentechPoint <zentechpoint@gmail.com>";

function formatDate(d: Date): string {
  return d.toLocaleString("en-US", {
    dateStyle: "long",
    timeStyle: "short",
    timeZone: "UTC",
  }) + " UTC";
}

function serviceLabel(slug: string): string {
  const map: Record<string, string> = {
    "web-development": "Web Development",
    "app-development": "App Development",
    "software-development": "Software Development",
    "ui-ux-design": "UI / UX Design",
    "digital-marketing": "Digital Marketing",
    "it-consultancy": "IT Consultancy",
  };
  return map[slug] ?? slug;
}

// ─── Shared layout wrapper ────────────────────────────────────────────────────

function emailShell(bodyContent: string): string {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>ZentechPoint</title>
</head>
<body style="margin:0;padding:0;background:#f4f4f5;font-family:'Segoe UI',Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f4f4f5;padding:32px 16px;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background:#ffffff;border-radius:12px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.08);">

          <!-- Header -->
          <tr>
            <td style="background:linear-gradient(135deg,#047857,#059669);padding:28px 36px;">
              <p style="margin:0;font-size:22px;font-weight:700;color:#ffffff;letter-spacing:-0.3px;">ZentechPoint</p>
              <p style="margin:4px 0 0;font-size:12px;color:rgba(255,255,255,0.75);letter-spacing:0.5px;text-transform:uppercase;">Digital Agency</p>
            </td>
          </tr>

          <!-- Body -->
          <tr>
            <td style="padding:36px 36px 28px;">
              ${bodyContent}
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background:#f9fafb;border-top:1px solid #e5e7eb;padding:20px 36px;">
              <p style="margin:0;font-size:12px;color:#9ca3af;line-height:1.6;">
                ZentechPoint · Bangladesh · Remote worldwide<br />
                <a href="mailto:zentechpoint@gmail.com" style="color:#059669;text-decoration:none;">zentechpoint@gmail.com</a>
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

// ─── Template: thank-you email to user ───────────────────────────────────────

function buildThankYouHtml(data: ContactFormData): string {
  const body = `
    <h1 style="margin:0 0 8px;font-size:24px;font-weight:700;color:#111827;">Thanks, ${data.name}!</h1>
    <p style="margin:0 0 24px;font-size:15px;color:#6b7280;line-height:1.6;">
      We've received your inquiry and will get back to you within <strong style="color:#111827;">24 hours</strong>.
      Here's a summary of what you sent us:
    </p>

    <!-- Summary card -->
    <table width="100%" cellpadding="0" cellspacing="0" style="background:#f9fafb;border:1px solid #e5e7eb;border-radius:8px;margin-bottom:28px;">
      <tr>
        <td style="padding:20px 24px;">
          ${summaryRow("Service", serviceLabel(data.service))}
          ${data.company ? summaryRow("Company", data.company) : ""}
          ${summaryRow("Message", `<span style="white-space:pre-wrap;">${escapeHtml(data.message)}</span>`)}
          ${summaryRow("Submitted", formatDate(data.submittedAt))}
        </td>
      </tr>
    </table>

    <p style="margin:0 0 20px;font-size:15px;color:#374151;line-height:1.7;">
      While you wait, feel free to explore our
      <a href="https://zentechpoint.com/portfolio" style="color:#059669;text-decoration:none;font-weight:600;">portfolio</a>
      or check out our
      <a href="https://zentechpoint.com/services" style="color:#059669;text-decoration:none;font-weight:600;">services</a>.
    </p>

    <!-- CTA button -->
    <table cellpadding="0" cellspacing="0" style="margin-bottom:24px;">
      <tr>
        <td style="background:#059669;border-radius:8px;">
          <a href="https://zentechpoint.com" style="display:inline-block;padding:12px 28px;font-size:14px;font-weight:600;color:#ffffff;text-decoration:none;">Visit ZentechPoint →</a>
        </td>
      </tr>
    </table>

    <p style="margin:0;font-size:14px;color:#9ca3af;">
      Best regards,<br />
      <strong style="color:#374151;">The ZentechPoint Team</strong>
    </p>`;

  return emailShell(body);
}

// ─── Template: admin notification ────────────────────────────────────────────

function buildNotificationHtml(data: ContactFormData): string {
  const body = `
    <h1 style="margin:0 0 4px;font-size:22px;font-weight:700;color:#111827;">New Contact Submission</h1>
    <p style="margin:0 0 24px;font-size:13px;color:#9ca3af;">Received ${formatDate(data.submittedAt)}</p>

    <!-- Details card -->
    <table width="100%" cellpadding="0" cellspacing="0" style="background:#f9fafb;border:1px solid #e5e7eb;border-radius:8px;margin-bottom:24px;">
      <tr>
        <td style="padding:20px 24px;">
          ${summaryRow("Name", data.name)}
          ${summaryRow("Email", `<a href="mailto:${data.email}" style="color:#059669;text-decoration:none;">${data.email}</a>`)}
          ${data.company ? summaryRow("Company", data.company) : ""}
          ${summaryRow("Service", serviceLabel(data.service))}
          ${summaryRow("Message", `<span style="white-space:pre-wrap;">${escapeHtml(data.message)}</span>`)}
        </td>
      </tr>
    </table>

    <!-- Reply CTA -->
    <table cellpadding="0" cellspacing="0">
      <tr>
        <td style="background:#059669;border-radius:8px;">
          <a href="mailto:${data.email}?subject=Re: Your inquiry to ZentechPoint" style="display:inline-block;padding:12px 28px;font-size:14px;font-weight:600;color:#ffffff;text-decoration:none;">Reply to ${data.name} →</a>
        </td>
      </tr>
    </table>`;

  return emailShell(body);
}

// ─── Shared mini helpers ──────────────────────────────────────────────────────

function summaryRow(label: string, value: string): string {
  return `
    <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:14px;">
      <tr>
        <td style="font-size:11px;font-weight:600;text-transform:uppercase;letter-spacing:0.5px;color:#9ca3af;padding-bottom:3px;">${label}</td>
      </tr>
      <tr>
        <td style="font-size:14px;color:#111827;line-height:1.6;">${value}</td>
      </tr>
    </table>`;
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

// ─── Public API ───────────────────────────────────────────────────────────────

export async function sendThankYouEmail(data: ContactFormData): Promise<void> {
  const transporter = getTransporter();
  await transporter.sendMail({
    from: FROM(),
    to: data.email,
    subject: `Thanks for reaching out, ${data.name}! — ZentechPoint`,
    html: buildThankYouHtml(data),
  });
}

export async function sendNotificationEmail(data: ContactFormData): Promise<void> {
  const recipient =
    process.env.CONTACT_RECIPIENT_EMAIL ?? "zentechpoint@gmail.com";
  const transporter = getTransporter();
  await transporter.sendMail({
    from: FROM(),
    to: recipient,
    replyTo: data.email,
    subject: `New Inquiry from ${data.name} — ${serviceLabel(data.service)}`,
    html: buildNotificationHtml(data),
  });
}
