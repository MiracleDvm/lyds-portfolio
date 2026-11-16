"use client";

import Link from "next/link";
import { useState } from "react";
import { Container, PageShell } from "@/components/chrome/page-shell";
import { ArrowRightIcon, Eyebrow } from "@/components/ui/primitives";
import { useSite } from "@/context/site-provider";
import { media } from "@/lib/media";
import { floatAnimation } from "@/lib/motion";

const CATEGORIES = [
  {
    href: "/projets/community-manager",
    title: { fr: "Community manager", en: "Community manager" },
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
      </svg>
    ),
  },
  {
    href: "/projets/creatrice-de-contenu",
    title: { fr: "Créatrice de contenu", en: "Content creator" },
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="4" width="15" height="16" rx="3" />
        <path d="m22 8.5-5 3.5 5 3.5z" />
      </svg>
    ),
  },
  {
    href: "/projets/design-graphique",
    title: { fr: "Design graphique", en: "Graphic design" },
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 19l7-7 3 3-7 7-3-3z" />
        <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
        <circle cx="11" cy="11" r="2" />
      </svg>
    ),
  },
  {
    href: "/projets/web-ux",
    title: { fr: "Web & UI/UX", en: "Web & UI/UX" },
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="18" rx="2" />
        <path d="M2 8h20M6 5.5h.01M9 5.5h.01" />
      </svg>
    ),
  },
  {
    href: "/projets/photographie",
    title: { fr: "Photographie", en: "Photography" },
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
        <circle cx="12" cy="13" r="4" />
      </svg>
    ),
  },
  {
    href: "/projets/montage-video",
    title: { fr: "Montage vidéo", en: "Video editing" },
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="18" rx="2" />
        <path d="M7 3v18M17 3v18M2 8h5M2 16h5M17 8h5M17 16h5" />
      </svg>
    ),
  },
];

const FEATURED = [
  {
    href: "/projets/web-ux",
    img: media.webux.mammonet[0],
    title: "MammoNet",
    badge: { fr: "2e place · KYIA 2026", en: "2nd place · KYIA 2026" },
    badgeBg: "#7A1F3D",
    alt: { fr: "Interfaces de MammoNet sur ordinateur, tablette et mobile", en: "MammoNet interfaces on desktop, tablet and mobile" },
  },
  {
    href: "/projets/web-ux",
    img: media.webux.meditrace[0],
    title: "MediTrace",
    badge: { fr: "2e prix · MTN Innovation Lab", en: "2nd prize · MTN Innovation Lab" },
    badgeBg: "#2E8B7A",
    alt: { fr: "Aperçu des interfaces de MediTrace", en: "MediTrace interfaces overview" },
  },
  {
    href: "/projets/design-graphique",
    img: media.designGraphique.lyds[0],
    title: { fr: "Charte graphique Lyd's", en: "Lyd's brand guidelines" },
    badge: { fr: "Projet personnel", en: "Personal project" },
    badgeBg: "#8E5BB5",
    alt: { fr: "Couverture de la charte graphique Lyd's", en: "Cover of the Lyd's brand guidelines" },
  },
];

export default function ProjetsPage() {
  const { fr } = useSite();
  const [open, setOpen] = useState(false);

  return (
    <PageShell>
      <Container>
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <Eyebrow>{fr ? "MES RÉALISATIONS" : "MY WORK"}</Eyebrow>
            <h1 className="font-display font-extrabold leading-[0.95] tracking-[-.04em]" style={{ fontSize: "clamp(48px,6vw,72px)" }}>
              {fr ? "Projets" : "Projects"}
            </h1>
          </div>
          <p className="max-w-[420px] leading-relaxed" style={{ fontSize: "clamp(15px,1.3vw,17px)", color: "var(--muted)" }}>
            {fr
              ? "Choisis une catégorie pour découvrir mes réalisations et les outils que j'utilise pour chacune."
              : "Pick a category to discover my work and the tools I use for each one."}
          </p>
        </div>

        <div className="mt-8">
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="featured-panel"
            className="chip-hover inline-flex min-h-[58px] items-center gap-3 rounded-full px-5 pr-6 font-semibold text-white animate-float"
            style={{ background: "linear-gradient(120deg, #7A1F3D, #B4456A 55%, #C9A66B)" }}
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                <path d="M12 2l2.9 6.3 6.9.8-5.2 4.7 1.5 6.8L12 17l-6.1 3.6 1.5-6.8L2.2 9.1l6.9-.8z" />
              </svg>
            </span>
            {fr ? "Projets à la une" : "Featured projects"}
            <span className="flex h-6.5 min-w-[26px] items-center justify-center rounded-full bg-white/25 px-1.5 text-xs">3</span>
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.3"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="transition-transform duration-300"
              style={{ transform: open ? "rotate(180deg)" : "none" }}
            >
              <path d="M6 9l6 6 6-6" />
            </svg>
          </button>

          <div id="featured-panel" className="overflow-hidden transition-[max-height] duration-500" style={{ maxHeight: open ? 600 : 0 }}>
            <div className="mt-5 flex flex-wrap gap-4">
              {FEATURED.map((item, i) => (
                <Link
                  key={typeof item.title === "string" ? item.title : item.title.fr}
                  href={item.href}
                  className="proj-hover flex min-w-0 flex-1 basis-[300px] items-center gap-4 rounded-full py-2.5 pl-2.5 pr-5 no-underline"
                  style={{
                    maxWidth: 380,
                    background: "var(--glass-bg)",
                    border: "1.5px solid var(--glass-border)",
                    animation: open ? `fadeScaleIn .4s ease ${0.1 + i * 0.1}s both` : "none",
                  }}
                >
                  <span className="proj-thumb h-16 w-16 shrink-0 overflow-hidden rounded-full">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={item.img} alt={fr ? item.alt.fr : item.alt.en} className="h-full w-full object-cover" />
                  </span>
                  <div className="min-w-0">
                    <p className="font-display truncate text-lg font-extrabold" style={{ color: "var(--fg)" }}>
                      {typeof item.title === "string" ? item.title : fr ? item.title.fr : item.title.en}
                    </p>
                    <span className="mt-1 inline-block rounded-full px-2.5 py-0.5 text-[11px] font-semibold text-white" style={{ background: item.badgeBg }}>
                      {fr ? item.badge.fr : item.badge.en}
                    </span>
                  </div>
                  <ArrowRightIcon size={18} />
                </Link>
              ))}
            </div>
          </div>
        </div>

        <Eyebrow>
          <span className="mt-10 block">{fr ? "TOUTES LES CATÉGORIES" : "ALL CATEGORIES"}</span>
        </Eyebrow>

        <div className="grid gap-[22px]" style={{ gridTemplateColumns: "repeat(auto-fill, minmax(min(100%,300px),1fr))" }}>
          {CATEGORIES.map((cat, i) => (
            <Link
              key={cat.href}
              href={cat.href}
              className="card-hover relative block overflow-hidden rounded-[30px] px-7 py-[26px] no-underline"
              style={{
                minHeight: 206,
                ...floatAnimation(i * 0.4),
                background: "var(--card-bg)",
                boxShadow: "var(--card-shadow)",
              }}
            >
              <span aria-hidden className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full" style={{ background: "var(--tint1)" }} />
              <span aria-hidden className="pointer-events-none absolute -bottom-10 -left-10 h-40 w-40 rounded-full" style={{ background: "var(--tint2)" }} />
              <div className="relative flex items-start justify-between">
                <span
                  className="flex h-[60px] w-[60px] items-center justify-center rounded-full"
                  style={{ background: "var(--glass-bg)", border: "1px solid var(--glass-border)", color: "var(--fg)" }}
                >
                  {cat.icon}
                </span>
                <span className="text-sm font-semibold" style={{ color: "var(--muted)" }}>
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <p className="font-display relative mt-6 font-extrabold" style={{ fontSize: "clamp(26px,2.4vw,30px)", color: "var(--fg)" }}>
                {fr ? cat.title.fr : cat.title.en}
              </p>
              <span className="go-arrow relative mt-2 inline-flex items-center gap-2 font-semibold" style={{ color: "var(--fg)" }}>
                {fr ? "Voir les projets" : "See projects"}
                <ArrowRightIcon size={16} />
              </span>
            </Link>
          ))}
        </div>
      </Container>
    </PageShell>
  );
}
