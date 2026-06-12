import type { ContactFormData } from "@/lib/types";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const ALLOWED_SERVICES = new Set([
  "web-development",
  "app-development",
  "software-development",
  "ui-ux-design",
  "digital-marketing",
  "it-consultancy",
]);

type ValidationResult =
  | { ok: true; data: ContactFormData }
  | { ok: false; errors: string[] };

export function validateContactForm(body: unknown): ValidationResult {
  if (!body || typeof body !== "object" || Array.isArray(body)) {
    return { ok: false, errors: ["Invalid request body."] };
  }

  const raw = body as Record<string, unknown>;
  const errors: string[] = [];

  const name = typeof raw.name === "string" ? raw.name.trim() : "";
  const email = typeof raw.email === "string" ? raw.email.trim().toLowerCase() : "";
  const company = typeof raw.company === "string" ? raw.company.trim() : "";
  const service = typeof raw.service === "string" ? raw.service.trim() : "";
  const message = typeof raw.message === "string" ? raw.message.trim() : "";

  if (!name) errors.push("Name is required.");
  else if (name.length > 100) errors.push("Name must be 100 characters or fewer.");

  if (!email) errors.push("Email is required.");
  else if (!EMAIL_RE.test(email)) errors.push("Email address is invalid.");
  else if (email.length > 254) errors.push("Email address is too long.");

  if (company.length > 150) errors.push("Company name must be 150 characters or fewer.");

  if (service && !ALLOWED_SERVICES.has(service)) {
    errors.push("Selected service is not valid.");
  }

  if (!message) errors.push("Message is required.");
  else if (message.length < 10) errors.push("Message must be at least 10 characters.");
  else if (message.length > 5000) errors.push("Message must be 5,000 characters or fewer.");

  if (errors.length > 0) return { ok: false, errors };

  return {
    ok: true,
    data: {
      name,
      email,
      company,
      service: service || "web-development",
      message,
      submittedAt: new Date(),
    },
  };
}
