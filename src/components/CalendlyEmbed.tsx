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
    const el = ref.current;
    if (!el) return;
    let cancelled = false;
    let mounted = false;

    const mount = () => {
      if (mounted) return;
      mounted = true;
      ensureCalendlyAssets().then(() => {
        if (cancelled || !el || !window.Calendly) return;
        el.innerHTML = ""; // guard against double-mount in dev/StrictMode
        window.Calendly.initInlineWidget({ url: CALENDLY_URL, parentElement: el });
      });
    };

    // Defer Calendly until the embed scrolls into view. Initializing it on page
    // load makes its iframe auto-focus and yank the page to the bottom (the
    // embed lives in the footer-adjacent demo section). Lazy-mounting also keeps
    // the heavy third-party iframe off the initial load.
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          mount();
          io.disconnect();
        }
      },
      { rootMargin: "200px" }
    );
    io.observe(el);

    return () => {
      cancelled = true;
      io.disconnect();
    };
  }, []);

  return (
    <div className="booking" style={{ padding: 0, overflow: "hidden" }}>
      <div ref={ref} style={{ minWidth: 280, height: 620 }} aria-label="Schedule a Landcore demo" />
    </div>
  );
}
