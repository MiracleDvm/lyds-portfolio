"use client";

import { useState } from "react";
import { BackLink, Eyebrow, ExternalLinkIcon, GlassPanel, Sparkle } from "@/components/ui/primitives";
import { Container, PageShell } from "@/components/chrome/page-shell";
import { PanelLightbox } from "@/components/ui/lightbox";
import type { Tool } from "@/components/ui/tools-accordion";
import { ToolsAccordion } from "@/components/ui/tools-accordion";
import { useSite } from "@/context/site-provider";
import type { Bilingual } from "@/lib/i18n";
import { media } from "@/lib/media";

type Screen = { img: string; caption: Bilingual };

type CaseStudy = {
  id: string;
  name: string;
  badge: Bilingual;
  badgeBg: string;
  year: string;
  tagline: Bilingual;
  problem: Bilingual;
  solution: Bilingual;
  role: Bilingual;
  type: Bilingual;
  links: { href: string; label: Bilingual }[];
  screens: Screen[];
};

const CASES: CaseStudy[] = [
  {
    id: "mammonet",
    name: "MammoNet",
    badge: { fr: "2e place · Kondo Youth Innovation Awards 2026", en: "2nd place · Kondo Youth Innovation Awards 2026" },
    badgeBg: "#7A1F3D",
    year: "2026",
    tagline: {
      fr: "Plateforme béninoise d'aide au dépistage et au diagnostic du cancer du sein",
      en: "A Beninese platform supporting breast cancer screening and diagnosis",
    },
    problem: {
      fr: "Au Bénin, beaucoup de femmes découvrent un cancer du sein trop tard : manque d'information, peur, centres éloignés et plusieurs semaines d'attente pour un diagnostic.",
      en: "In Benin, many women discover breast cancer too late: lack of information, fear, distant centres and weeks of waiting for a diagnosis.",
    },
    solution: {
      fr: "Une plateforme web multilingue qui accompagne la femme du premier doute au diagnostic : s'informer, évaluer son risque avec un chat IA, trouver un centre ou un spécialiste, et aider les laboratoires à lire les biopsies.",
      en: "A multilingual web platform that guides women from first doubt to diagnosis: learn, assess their risk with an AI chat, find a centre or specialist, and help labs read biopsies.",
    },
    role: {
      fr: "UI/UX designer de l'équipe : j'ai conçu l'interface et l'expérience utilisateur de la plateforme, sur ordinateur, tablette et téléphone, et contribué au développement.",
      en: "UI/UX designer on the team: I designed the platform's interface and user experience across desktop, tablet and mobile, and contributed to development.",
    },
    type: { fr: "Plateforme web · ordinateur, tablette et mobile", en: "Web platform · desktop, tablet and mobile" },
    links: [
      { href: "https://mammonet.netlify.app", label: { fr: "Voir le site", en: "Visit the site" } },
      {
        href: "https://www.linkedin.com/posts/serge-sewa-3b1678218_sommetjeunesse-kyia-innovation-activity-7477797927093010433-IWRV",
        label: { fr: "Annonce du prix (LinkedIn)", en: "Award announcement (LinkedIn)" },
      },
    ],
    screens: [
      { img: media.webux.mammonet[0], caption: { fr: "Aperçu ordinateur, tablette et mobile", en: "Desktop, tablet and mobile overview" } },
      { img: media.webux.mammonet[1], caption: { fr: "Carte des centres de dépistage", en: "Screening centres map" } },
      { img: media.webux.mammonet[2], caption: { fr: "Évaluation du risque — chat IA", en: "Risk assessment — AI chat" } },
      { img: media.webux.mammonet[3], caption: { fr: "Évaluation du risque — résultat", en: "Risk assessment — result" } },
      { img: media.webux.mammonet[4], caption: { fr: "Annuaire des spécialistes", en: "Specialists directory" } },
      { img: media.webux.mammonet[5], caption: { fr: "Les bons gestes", en: "Good habits" } },
      { img: media.webux.mammonet[6], caption: { fr: "Connexion", en: "Sign in" } },
      { img: media.webux.mammonet[7], caption: { fr: "Créer un compte", en: "Create an account" } },
      { img: media.webux.mammonet[8], caption: { fr: "Accueil — tablette", en: "Home — tablet" } },
      { img: media.webux.mammonet[9], caption: { fr: "Accueil — mobile", en: "Home — mobile" } },
      { img: media.webux.mammonet[10], caption: { fr: "S'informer — mobile", en: "Learn — mobile" } },
    ],
  },
  {
    id: "meditrace",
    name: "MediTrace",
    badge: { fr: "2e prix · Hackathon 21 Days of Y'ello Care · MTN Innovation Lab", en: "2nd prize · 21 Days of Y'ello Care hackathon · MTN Innovation Lab" },
    badgeBg: "#2E8B7A",
    year: "2026",
    tagline: { fr: "Sécuriser la gestion hospitalière, tracer chaque flux", en: "Securing hospital management, tracing every flow" },
    problem: {
      fr: "Dans de nombreux centres de santé, la caisse, la facturation et le stock se gèrent encore à la main : paiements difficiles à tracer, factures modifiables, stocks déconnectés des soins.",
      en: "In many health centres, cash, billing and stock are still managed by hand: payments hard to trace, editable invoices, stock disconnected from care.",
    },
    solution: {
      fr: "Une plateforme qui relie patient, facturation, stock et paiement, avec un espace dédié à chaque métier : direction, caisse, magasin, médecin et ressources humaines.",
      en: "A platform linking patient, billing, stock and payment, with a dedicated space for each role: management, cashier, store, doctor and HR.",
    },
    role: {
      fr: "Responsable du design dans une équipe de six : j'ai créé l'identité visuelle et le logo de MediTrace, puis conçu les interfaces de chaque espace, pensées pour des agents qui ne sont pas informaticiens. Notre équipe a remporté le 2e prix parmi les trois équipes lauréates.",
      en: "Design lead in a team of six: I created MediTrace's visual identity and logo, then designed the interfaces for each space, built for staff who are not IT specialists. Our team won 2nd prize among the three winning teams.",
    },
    type: { fr: "Identité visuelle et application web de gestion hospitalière", en: "Visual identity and hospital management web app" },
    links: [
      { href: "https://meditrace-bj.vercel.app", label: { fr: "Voir l'application", en: "Open the app" } },
      { href: "https://lnkd.in/p/eKPiHcDk", label: { fr: "Le hackathon (LinkedIn)", en: "The hackathon (LinkedIn)" } },
    ],
    screens: [
      { img: media.webux.meditrace[0], caption: { fr: "Aperçu des interfaces", en: "Interfaces overview" } },
      { img: media.webux.meditrace[1], caption: { fr: "Logo et identité visuelle", en: "Logo and visual identity" } },
      { img: media.webux.meditrace[2], caption: { fr: "Page d'accueil", en: "Home page" } },
      { img: media.webux.meditrace[3], caption: { fr: "Espace médecin — prescription", en: "Doctor space — prescription" } },
      { img: media.webux.meditrace[4], caption: { fr: "Magasin central — gestion du stock", en: "Central store — stock management" } },
      { img: media.webux.meditrace[5], caption: { fr: "Espace ressources humaines", en: "HR space" } },
      { img: media.webux.meditrace[6], caption: { fr: "Le problème", en: "The problem" } },
      { img: media.webux.meditrace[7], caption: { fr: "Le problème en chiffres (enquête terrain)", en: "The problem in figures (field survey)" } },
      { img: media.webux.meditrace[8], caption: { fr: "Fonctionnalités clés", en: "Key features" } },
    ],
  },
];

const TOOLS: Tool[] = [
  { name: "Figma", role: { fr: "Maquettes & prototypes", en: "Mockups & prototypes" }, logo: media.logos.figma, gradient: "linear-gradient(160deg, rgba(255,255,255,.75), rgba(162,89,255,.2))" },
  { name: "Claude", role: { fr: "Maquettes assistées par IA", en: "AI-assisted mockups" }, logo: media.logos.claude, gradient: "linear-gradient(160deg, rgba(250,249,245,.85), rgba(217,119,87,.25))" },
];

export default function WebUxPage() {
  const { fr, t } = useSite();
  const [open, setOpen] = useState<string | null>(null);
  const [idx, setIdx] = useState(0);

  const current = CASES.find((c) => c.id === open) ?? null;
  const multi = (current?.screens.length ?? 0) > 1;

  return (
    <PageShell>
      <Container>
        <BackLink href="/projets">{fr ? "Tous les projets" : "All projects"}</BackLink>

        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <Eyebrow>{fr ? "PROJETS · 04" : "PROJECTS · 04"}</Eyebrow>
            <h1 className="font-display font-extrabold leading-[0.95] tracking-[-.04em]" style={{ fontSize: "clamp(44px,6vw,72px)" }}>
              Web & UI/UX
            </h1>
          </div>
          <p className="max-w-[440px] leading-relaxed" style={{ fontSize: "clamp(15px,1.3vw,17px)", color: "var(--muted)" }}>
            {fr
              ? "Des interfaces pensées pour de vrais usages, du problème de terrain jusqu'aux maquettes sur ordinateur, tablette et téléphone."
              : "Interfaces designed for real use, from the field problem to mockups on desktop, tablet and phone."}
          </p>
        </div>

        <GlassPanel radius={999} className="mt-6 inline-flex items-center gap-2 px-5 py-2.5 text-sm" style={{ color: "var(--fg)" }}>
          <Sparkle size={16} />
          {fr ? "Une sélection de mes réalisations, d'autres arrivent bientôt" : "A selection of my work, more coming soon"}
        </GlassPanel>

        <div className="mt-8">
          <ToolsAccordion tools={TOOLS} label={{ fr: "Mes outils", en: "My tools" }} />
        </div>

        <div className="flex flex-col gap-10">
          {CASES.map((c) => (
            <article
              key={c.id}
              className="flex flex-wrap items-stretch gap-7"
              style={{ background: "var(--glass-bg)", border: "1.5px solid var(--glass-border)", borderRadius: 34, padding: "clamp(16px,2.4vw,28px)" }}
            >
              <button
                type="button"
                onClick={() => {
                  setOpen(c.id);
                  setIdx(0);
                }}
                aria-label={fr ? `Voir les écrans de ${c.name}` : `See the screens of ${c.name}`}
                className="relative block min-w-0 flex-1 basis-[520px] overflow-hidden rounded-[24px] p-0"
                style={{ aspectRatio: "16/10" }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={c.screens[0].img} alt={t(c.screens[0].caption)} className="h-full w-full object-cover" />
                <span className="absolute right-3 top-3 flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-semibold text-white" style={{ background: "rgba(42,22,38,.75)" }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                    <rect x="3" y="3" width="14" height="14" rx="2" />
                    <path d="M7 21h14V7" />
                  </svg>
                  {c.screens.length} {fr ? "écrans" : "screens"}
                </span>
              </button>

              <div className="min-w-0 flex-1 basis-[380px]">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="rounded-full px-3 py-1 text-xs font-semibold text-white" style={{ background: c.badgeBg }}>
                    {t(c.badge)}
                  </span>
                  <span className="rounded-full px-3 py-1 text-xs font-semibold" style={{ background: "var(--glass-bg)", border: "1px solid var(--glass-border)", color: "var(--fg)" }}>
                    {c.year}
                  </span>
                </div>
                <h2 className="font-display mt-3 font-extrabold tracking-[-.03em]" style={{ fontSize: "clamp(32px,3.6vw,44px)" }}>
                  {c.name}
                </h2>
                <p className="mt-1 font-medium" style={{ color: "var(--muted)" }}>{t(c.tagline)}</p>

                <dl className="mt-5 flex flex-col gap-4">
                  <div>
                    <dt className="text-xs font-semibold tracking-[.18em]" style={{ color: "var(--muted)" }}>{fr ? "LE PROBLÈME" : "THE PROBLEM"}</dt>
                    <dd className="mt-1 text-[15px] leading-relaxed">{t(c.problem)}</dd>
                  </div>
                  <div>
                    <dt className="text-xs font-semibold tracking-[.18em]" style={{ color: "var(--muted)" }}>{fr ? "LA SOLUTION" : "THE SOLUTION"}</dt>
                    <dd className="mt-1 text-[15px] leading-relaxed">{t(c.solution)}</dd>
                  </div>
                  <div>
                    <dt className="text-xs font-semibold tracking-[.18em]" style={{ color: "var(--muted)" }}>{fr ? "MON RÔLE" : "MY ROLE"}</dt>
                    <dd className="mt-1 text-[15px] leading-relaxed">{t(c.role)}</dd>
                  </div>
                </dl>

                <div className="mt-6 flex flex-wrap items-center gap-3">
                  <button
                    type="button"
                    onClick={() => {
                      setOpen(c.id);
                      setIdx(0);
                    }}
                    className="cta-hover inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-white animate-shine"
                    style={{
                      background: "linear-gradient(100deg, #8E5BB5 0%, #B45FB0 30%, #E07F9C 55%, #F2A37E 75%, #8E5BB5 100%)",
                      backgroundSize: "200% 100%",
                    }}
                  >
                    {fr ? "Voir les écrans" : "See the screens"}
                  </button>
                  {c.links.map((l) => (
                    <a
                      key={l.href}
                      href={l.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-full px-4 py-2.5 text-sm font-semibold no-underline"
                      style={{ background: "var(--glass-bg)", border: "1px solid var(--glass-border)", color: "var(--fg)" }}
                    >
                      {t(l.label)}
                      <ExternalLinkIcon size={14} />
                    </a>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </Container>

      {current && (
        <PanelLightbox
          open={!!current}
          onClose={() => setOpen(null)}
          onPrev={() => setIdx((i) => (i - 1 + current.screens.length) % current.screens.length)}
          onNext={() => setIdx((i) => (i + 1) % current.screens.length)}
          multi={multi}
          index={idx}
          total={current.screens.length}
          src={current.screens[idx].img}
          alt={t(current.screens[idx].caption)}
          badge={t(current.badge)}
          badgeBg={current.badgeBg}
          title={current.name}
          subtitle={t(current.type)}
          highlight={t(current.screens[idx].caption)}
          description={t(current.solution)}
        />
      )}
    </PageShell>
  );
}
