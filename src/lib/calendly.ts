/* ============================================================
   Calendly widget loader (client-only).
   Lazily injects Calendly's CSS + JS, then exposes inline-embed
   and popup helpers. Import only from client components.
   ============================================================ */
import { CALENDLY_URL } from "./config";

const WIDGET_JS = "https://assets.calendly.com/assets/external/widget.js";
const WIDGET_CSS = "https://assets.calendly.com/assets/external/widget.css";

declare global {
  interface Window {
    Calendly?: {
      initInlineWidget: (opts: { url: string; parentElement: HTMLElement }) => void;
      initPopupWidget: (opts: { url: string }) => void;
    };
  }
}

export function ensureCalendlyAssets(): Promise<void> {
  return new Promise((resolve) => {
    if (typeof window === "undefined") return resolve();
    if (!document.querySelector(`link[href="${WIDGET_CSS}"]`)) {
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = WIDGET_CSS;
      document.head.appendChild(link);
    }
    if (window.Calendly) return resolve();
    const existing = document.querySelector<HTMLScriptElement>(`script[src="${WIDGET_JS}"]`);
    if (existing) {
      existing.addEventListener("load", () => resolve(), { once: true });
      return;
    }
    const script = document.createElement("script");
    script.src = WIDGET_JS;
    script.async = true;
    script.addEventListener("load", () => resolve(), { once: true });
    document.head.appendChild(script);
  });
}

export function openCalendlyPopup() {
  ensureCalendlyAssets().then(() => {
    window.Calendly?.initPopupWidget({ url: CALENDLY_URL });
  });
}
