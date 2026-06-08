"use client";
/* ============================================================
   Demo-request form. Client-side validation, posts to
   /api/demo-request which emails the lead via Resend. Shows
   success / error inline without a page reload. mailto fallback.
   ============================================================ */
import { useState } from "react";
import { Icon } from "./core";
import { LEAD_EMAIL, LEAD_MAILTO } from "@/lib/config";

type Fields = { name: string; company: string; email: string; message: string };
type Errors = Partial<Record<keyof Fields, string>>;
type Status = { kind: "idle" | "sending" | "ok" | "error"; message?: string };

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validate(f: Fields): Errors {
  const e: Errors = {};
  if (!f.name.trim()) e.name = "Your name is required.";
  if (!f.company.trim()) e.company = "Company is required.";
  if (!f.email.trim()) e.email = "Email is required.";
  else if (!EMAIL_RE.test(f.email.trim())) e.email = "Enter a valid email address.";
  return e;
}

export function DemoForm() {
  const [fields, setFields] = useState<Fields>({ name: "", company: "", email: "", message: "" });
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<Status>({ kind: "idle" });

  const set = (k: keyof Fields) => (ev: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFields((prev) => ({ ...prev, [k]: ev.target.value }));
    if (errors[k]) setErrors((prev) => ({ ...prev, [k]: undefined }));
  };

  async function onSubmit(ev: React.FormEvent) {
    ev.preventDefault();
    const found = validate(fields);
    setErrors(found);
    if (Object.keys(found).length > 0) return;

    setStatus({ kind: "sending" });
    try {
      const res = await fetch("/api/demo-request", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: fields.name.trim(),
          company: fields.company.trim(),
          email: fields.email.trim(),
          message: fields.message.trim(),
        }),
      });
      const data = (await res.json().catch(() => ({}))) as { error?: string };
      if (!res.ok) throw new Error(data.error || "Something went wrong.");
      setStatus({
        kind: "ok",
        message: "Thanks — we got it. Brandon will reach out to schedule your site review.",
      });
      setFields({ name: "", company: "", email: "", message: "" });
    } catch (err) {
      setStatus({
        kind: "error",
        message: err instanceof Error ? err.message : "Something went wrong.",
      });
    }
  }

  const sending = status.kind === "sending";

  return (
    <form className="demo-form" onSubmit={onSubmit} noValidate>
      <h4>Request a demo by email</h4>
      <p className="sub">Tell us about a parcel and we&apos;ll get back within one business day.</p>

      <div className="lc-field">
        <label htmlFor="df-name">Name</label>
        <input
          id="df-name"
          className="lc-input"
          type="text"
          value={fields.name}
          onChange={set("name")}
          placeholder="Jane Developer"
          aria-invalid={!!errors.name}
          autoComplete="name"
        />
        {errors.name && <span className="err">{errors.name}</span>}
      </div>

      <div className="lc-field">
        <label htmlFor="df-company">Company</label>
        <input
          id="df-company"
          className="lc-input"
          type="text"
          value={fields.company}
          onChange={set("company")}
          placeholder="Acme Development"
          aria-invalid={!!errors.company}
          autoComplete="organization"
        />
        {errors.company && <span className="err">{errors.company}</span>}
      </div>

      <div className="lc-field">
        <label htmlFor="df-email">Work email</label>
        <input
          id="df-email"
          className="lc-input"
          type="email"
          value={fields.email}
          onChange={set("email")}
          placeholder="jane@acme.com"
          aria-invalid={!!errors.email}
          autoComplete="email"
        />
        {errors.email && <span className="err">{errors.email}</span>}
      </div>

      <div className="lc-field">
        <label htmlFor="df-message">What are you evaluating? (optional)</label>
        <textarea
          id="df-message"
          className="lc-textarea"
          value={fields.message}
          onChange={set("message")}
          placeholder="2240 Harbor Blvd — multifamily, ~1.2 ac…"
        />
      </div>

      <button type="submit" className="btn btn-primary btn-lg" disabled={sending}>
        {sending ? "Sending…" : "Request a demo"}
        {!sending && <Icon name="arrow-right" size={16} />}
      </button>

      {status.kind === "ok" && <p className="form-status ok">{status.message}</p>}
      {status.kind === "error" && <p className="form-status bad">{status.message}</p>}

      <p className="form-fallback">
        Prefer to email us directly? <a href={LEAD_MAILTO}>{LEAD_EMAIL}</a>
      </p>
    </form>
  );
}
