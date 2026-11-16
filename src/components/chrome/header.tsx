"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { useSite } from "@/context/site-provider";
import { media } from "@/lib/media";
import { Logo } from "./logo";
import { LangSwitch, ThemeSwitch } from "./switches";

const NAV = [
  { href: "/a-propos", fr: "À propos", en: "About" },
  { href: "/projets", fr: "Projets", en: "Projects" },
  { href: "/parcours", fr: "Parcours", en: "Journey" },
  { href: "/contact", fr: "Contact", en: "Contact" },
];

function downloadCv() {
  const a = document.createElement("a");
  a.href = media.cv;
  a.download = "CV_Doriane_Atohountoun.pdf";
  a.rel = "noopener";
  a.click();
}

export function Header({ minimal = false }: { minimal?: boolean }) {
  const { fr, dark } = useSite();
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const isActive = (href: string) => pathname === href || pathname.startsWith(`${href}/`);

  const navPillStyle = (active: boolean) => ({
    color: active ? (dark ? "#2A1626" : "#FBF6F1") : "var(--fg)",
    background: active
      ? dark
        ? "linear-gradient(180deg, #FBF6F1, #EADFD6)"
        : "linear-gradient(180deg, #3D2238, #2A1626)"
      : "transparent",
    boxShadow: active ? "0 6px 16px rgba(42,22,38,.28), inset 0 2px 3px rgba(255,255,255,.35)" : "none",
    fontWeight: active ? 600 : 500,
  });

  return (
    <header
      className="relative z-20 flex items-center justify-between gap-4 border-b px-0 py-[26px] pb-[18px]"
      style={{ margin: "0 clamp(20px, 4.5vw, 64px)", borderColor: "var(--rule)" }}
    >
      <Link href="/" aria-label={fr ? "Lyd's — accueil" : "Lyd's — home"} className="block shrink-0 leading-none">
        <Logo className="h-[57px] w-[100px] max-[640px]:h-auto max-[640px]:w-[74px]" />
      </Link>

      {!minimal && (
        <nav
          aria-label={fr ? "Navigation principale" : "Main navigation"}
          className="hidden items-center gap-1 rounded-full p-[5px] backdrop-blur-xl min-[1141px]:flex"
          style={{ background: "var(--track-bg)", border: "1.5px solid var(--track-border)", boxShadow: "var(--track-shadow)" }}
        >
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={isActive(item.href) ? "page" : undefined}
              className="inline-flex min-h-[46px] items-center whitespace-nowrap rounded-full px-[22px] text-[15px] no-underline transition-colors duration-300"
              style={navPillStyle(isActive(item.href))}
            >
              {fr ? item.fr : item.en}
            </Link>
          ))}
          <button
            type="button"
            onClick={downloadCv}
            aria-label={fr ? "Télécharger mon CV" : "Download my CV"}
            className="inline-flex min-h-[46px] cursor-pointer items-center gap-[7px] whitespace-nowrap rounded-full border border-white/50 px-4 pl-4 text-[15px] font-semibold text-[#FBF6F1] shadow-[0_6px_14px_rgba(122,31,61,.3),inset_0_2px_3px_rgba(255,255,255,.35)]"
            style={{ background: "linear-gradient(120deg, #7A1F3D, #B4456A 55%, #C9A66B)" }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
              <path d="M12 3v12M7 10l5 5 5-5M5 21h14" />
            </svg>
            {fr ? "Mon CV" : "My CV"}
          </button>
        </nav>
      )}

      <div className="flex items-center gap-3">
        <LangSwitch />
        <ThemeSwitch />
        {!minimal && (
          <button
            type="button"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={fr ? (menuOpen ? "Fermer le menu" : "Ouvrir le menu") : menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            className="flex h-[58px] w-[58px] shrink-0 cursor-pointer items-center justify-center rounded-full backdrop-blur-xl min-[1141px]:hidden"
            style={{
              color: "var(--fg)",
              background: "var(--glass-bg)",
              border: "1.5px solid var(--glass-border)",
              boxShadow: "var(--glass-shadow)",
            }}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" aria-hidden>
              <path d={menuOpen ? "M6 6l12 12M18 6L6 18" : "M4 7h16M4 12h16M4 17h16"} />
            </svg>
          </button>
        )}
      </div>

      {!minimal && menuOpen && (
        <nav
          aria-label={fr ? "Navigation principale" : "Main navigation"}
          className="absolute top-[104px] z-30 flex flex-col gap-1.5 rounded-[28px] p-3 backdrop-blur-xl min-[1141px]:hidden"
          style={{
            left: "clamp(20px, 4.5vw, 64px)",
            right: "clamp(20px, 4.5vw, 64px)",
            background: "var(--glass-bg)",
            border: "1.5px solid var(--glass-border)",
            boxShadow: "var(--glass-shadow)",
            animation: "lydsDrop .35s ease",
          }}
        >
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={isActive(item.href) ? "page" : undefined}
              onClick={() => setMenuOpen(false)}
              className="flex min-h-[54px] items-center justify-between rounded-[18px] px-5 text-lg no-underline"
              style={navPillStyle(isActive(item.href))}
            >
              {fr ? item.fr : item.en}
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </Link>
          ))}
          <button
            type="button"
            onClick={downloadCv}
            className="flex min-h-[54px] w-full cursor-pointer items-center justify-between rounded-[18px] border-none px-5 text-lg font-semibold text-[#FBF6F1]"
            style={{ background: "linear-gradient(120deg, #7A1F3D, #B4456A 55%, #C9A66B)" }}
          >
            {fr ? "Télécharger mon CV" : "Download my CV"}
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
              <path d="M12 3v12M7 10l5 5 5-5M5 21h14" />
            </svg>
          </button>
        </nav>
      )}
    </header>
  );
}
