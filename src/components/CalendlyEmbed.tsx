"use client";
/* ============================================================
   Calendly inline embed, styled to sit inside the booking card.
   Mounts the inline widget into our own container so it survives
   client navigation.
   ============================================================ */
import { useEffect, useRef } from "react";
import { CALENDLY_URL } from "@/lib/config";
import { ensureCalendlyAssets } from "@/lib/calendly";

export function CalendlyEmbed() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let cancelled = false;
    ensureCalendlyAssets().then(() => {
      const el = ref.current;
      if (cancelled || !el || !window.Calendly) return;
      el.innerHTML = ""; // guard against double-mount in dev/StrictMode
      window.Calendly.initInlineWidget({ url: CALENDLY_URL, parentElement: el });
    });
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <div className="booking" style={{ padding: 0, overflow: "hidden" }}>
      <div ref={ref} style={{ minWidth: 280, height: 620 }} aria-label="Schedule a Landcore demo" />
    </div>
  );
}
