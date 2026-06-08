"use client";
/* ============================================================
   Scroll-reveal: fade + 16px rise on .reveal elements via
   IntersectionObserver. Ported from App's effect in bottom.jsx.
   Renders nothing; observes existing DOM nodes after mount.
   Honors reduced-motion through kit.css (.reveal reset).
   ============================================================ */
import { useEffect } from "react";

export function ScrollReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
  return null;
}
