import { NextResponse } from "next/server";
import { Resend } from "resend";
import { LEAD_EMAIL } from "@/lib/config";

/* ============================================================
   POST /api/demo-request
   Validates a demo lead server-side and emails it to the team
   via Resend. Reads RESEND_API_KEY (and optional RESEND_FROM)
   from the environment - never hard-coded.
   ============================================================ */

export const runtime = "nodejs";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
// Verified Resend sender. Override with a verified domain sender in prod, e.g.
// "Landcore <demos@send.landcoreai.com>". Defaults to Resend's shared sender.
const FROM = process.env.RESEND_FROM || "Landcore Demo <onboarding@resend.dev>";

function esc(s: string) {
  return s.replace(/[<>&]/g, (c) => ({ "<": "&lt;", ">": "&gt;", "&": "&amp;" })[c] as string);
}

export async function POST(req: Request) {
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const name = String(body.name ?? "").trim();
  const company = String(body.company ?? "").trim();
  const email = String(body.email ?? "").trim();
  const message = String(body.message ?? "").trim();

  if (!name || !company || !email) {
    return NextResponse.json({ error: "Name, company, and email are required." }, { status: 400 });
  }
  if (!EMAIL_RE.test(email)) {
    return NextResponse.json({ error: "Enter a valid email address." }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("RESEND_API_KEY is not set, cannot send demo-request email.");
    return NextResponse.json(
      { error: "Email isn't configured yet. Please email us directly." },
      { status: 500 }
    );
  }

  const resend = new Resend(apiKey);
  const subject = `Demo request: ${name}, ${company}`;
  const text =
    `New Landcore demo request\n\n` +
    `Name:    ${name}\n` +
    `Company: ${company}\n` +
    `Email:   ${email}\n\n` +
    `Message:\n${message || "(none)"}\n`;
  const html =
    `<h2 style="margin:0 0 12px">New Landcore demo request</h2>` +
    `<p style="margin:0 0 4px"><strong>Name:</strong> ${esc(name)}</p>` +
    `<p style="margin:0 0 4px"><strong>Company:</strong> ${esc(company)}</p>` +
    `<p style="margin:0 0 12px"><strong>Email:</strong> ${esc(email)}</p>` +
    `<p style="margin:0 0 4px"><strong>Message:</strong></p>` +
    `<p style="margin:0;white-space:pre-wrap">${esc(message) || "(none)"}</p>`;

  try {
    const { error } = await resend.emails.send({
      from: FROM,
      to: [LEAD_EMAIL],
      replyTo: email,
      subject,
      text,
      html,
    });
    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json({ error: "Could not send your request. Please email us directly." }, { status: 502 });
    }
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Resend threw:", err);
    return NextResponse.json({ error: "Could not send your request. Please email us directly." }, { status: 502 });
  }
}
