"use client";

import { useSite } from "@/context/site-provider";

export function Footer() {
  const { fr } = useSite();

  return (
    <footer
      className="relative z-[2] flex flex-wrap items-center justify-between gap-2 gap-x-6 border-t py-[18px] text-xs font-medium tracking-[.18em] transition-colors duration-500"
      style={{ margin: "0 clamp(20px, 4.5vw, 64px)", paddingBottom: 26, borderColor: "var(--rule)", color: "var(--muted)" }}
    >
      <span>PORTFOLIO 2026</span>
      <span className="text-sm font-light tracking-normal">
        {fr ? "Doriane — créatrice multidisciplinaire" : "Doriane — multidisciplinary creative"}
      </span>
      <span>{fr ? "WOMEY SODO, ABOMEY-CALAVI, BÉNIN" : "WOMEY SODO, ABOMEY-CALAVI, BENIN"}</span>
    </footer>
  );
}
