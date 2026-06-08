"use client";
/* ============================================================
   A kit-styled button that opens the Calendly scheduling popup.
   Mirrors core.Button markup (which is server-only and cannot
   carry an onClick handler).
   ============================================================ */
import { Icon } from "./core";
import { openCalendlyPopup } from "@/lib/calendly";

export function CalendlyButton({
  variant = "primary",
  size = "lg",
  icon = "calendar-check",
  children,
}: {
  variant?: string;
  size?: string;
  icon?: string;
  children: React.ReactNode;
}) {
  const cls = `btn btn-${variant}` + (size === "lg" ? " btn-lg" : "");
  return (
    <button type="button" className={cls} onClick={openCalendlyPopup}>
      {children}
      {icon && <Icon name={icon} size={16} />}
    </button>
  );
}
