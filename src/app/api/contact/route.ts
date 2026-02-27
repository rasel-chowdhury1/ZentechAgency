import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const name = String(body?.name || "").trim();
    const email = String(body?.email || "").trim();
    const company = String(body?.company || "").trim();
    const service = String(body?.service || "").trim();
    const message = String(body?.message || "").trim();

    if (!name || !email || !message) {
      return NextResponse.json(
        { message: "Name, email and message are required." },
        { status: 400 }
      );
    }

    // TODO: send email / store to DB / store to Google Sheet.
    return NextResponse.json({ ok: true, data: { name, email, company, service, message } });
  } catch {
    return NextResponse.json({ message: "Invalid request." }, { status: 400 });
  }
}
