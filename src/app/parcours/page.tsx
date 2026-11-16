"use client";

import { useState } from "react";
import Link from "next/link";
import { Eyebrow } from "@/components/ui/primitives";
import { Container, PageShell } from "@/components/chrome/page-shell";
import { useSite } from "@/context/site-provider";
import type { Bilingual } from "@/lib/i18n";
import { media } from "@/lib/media";

type TabKey = "form" | "exp" | "event" | "cert";

const G = { gold: "#C9A66B", rose: "#E07F9C", bord: "#7A1F3D", orch: "#8E5BB5", green: "#2E8B7A" };

type Entry = {
  period: Bilingual;
  title: Bilingual | string;
  place: Bilingual | string;
  desc: Bilingual;
  badge?: { label: Bilingual; bg: string };
  dot: string;
  link?: { href: string; label: Bilingual };
};

const FORM: Entry[] = [
  {
    period: { fr: "2024 — AUJOURD'HUI", en: "2024 — PRESENT" },
    title: { fr: "Licence en Internet et Multimédia", en: "Bachelor's in Internet & Multimedia" },
    place: { fr: "IFRI — Institut de Formation et de Recherche en Informatique, Université d'Abomey-Calavi", en: "IFRI — Institute of Computer Science Training and Research, University of Abomey-Calavi" },
    desc: { fr: "Design web, multimédia, création de contenus numériques et bases de l'informatique.", en: "Web design, multimedia, digital content creation and computer science foundations." },
    badge: { label: { fr: "En cours · 2e année", en: "Ongoing · 2nd year" }, bg: G.green },
    dot: G.rose,
  },
  {
    period: { fr: "JUSQU'EN 2024", en: "UNTIL 2024" },
    title: { fr: "Baccalauréat série D", en: "Baccalauréat, science track (série D)" },
    place: "Complexe Scolaire Abbé Florent Nascimento",
    desc: {
      fr: "Toute ma scolarité, de la maternelle à la terminale, couronnée par le bac D obtenu en 2024 avec la mention Bien (14/20).",
      en: "My whole schooling, from kindergarten to final year, crowned by my série D baccalauréat in 2024 with honours (mention Bien, 14/20).",
    },
    badge: { label: { fr: "Mention Bien", en: "With honours" }, bg: G.bord },
    dot: G.gold,
  },
];

const EXP: Entry[] = [
  {
    period: { fr: "DEPUIS OCTOBRE 2026", en: "SINCE OCTOBER 2026" },
    title: "Community manager",
    place: { fr: "ADEMO · Instagram", en: "ADEMO · Instagram" },
    desc: { fr: "Publication des vidéos, animation de la communauté en story et tournage de vidéos backstage.", en: "Publishing videos, engaging the community through stories and filming behind-the-scenes videos." },
    badge: { label: { fr: "En cours", en: "Ongoing" }, bg: G.green },
    dot: G.rose,
    link: { href: "/projets/community-manager", label: { fr: "Voir la mission", en: "See the work" } },
  },
  {
    period: { fr: "MARS — JUILLET 2026", en: "MARCH — JULY 2026" },
    title: { fr: "Community manager & créatrice de contenu", en: "Community manager & content creator" },
    place: { fr: "Pharmacie Les Grâces Divines de Ouèdo · TikTok & Facebook", en: "Les Grâces Divines pharmacy · TikTok & Facebook" },
    desc: {
      fr: "Gestion complète : création des pages, calendrier éditorial, tournage et montage des vidéos, visuels produits. +458 abonnés gagnés sur TikTok en cinq mois.",
      en: "Full management: page creation, editorial calendar, filming and editing videos, product visuals. +458 TikTok followers gained in five months.",
    },
    dot: G.orch,
    link: { href: "/projets/community-manager", label: { fr: "Voir la mission", en: "See the work" } },
  },
  {
    period: { fr: "JANVIER — JUILLET 2026", en: "JANUARY — JULY 2026" },
    title: { fr: "Stage · Community manager & UX designer", en: "Internship · Community manager & UX designer" },
    place: "CodeLab",
    desc: {
      fr: "Six mois de stage : animation du compte LinkedIn de l'entreprise, travail en UX design et création de visuels, dont le visuel MacBook Pro M1 Pro.",
      en: "Six-month internship: running the company's LinkedIn account, UX design work and visuals, including the MacBook Pro M1 Pro visual.",
    },
    badge: { label: { fr: "Stage", en: "Internship" }, bg: G.bord },
    dot: G.gold,
    link: { href: "/projets/design-graphique", label: { fr: "Voir le visuel", en: "See the visual" } },
  },
  {
    period: { fr: "DEPUIS 2025", en: "SINCE 2025" },
    title: { fr: "Graphiste bénévole", en: "Volunteer graphic designer" },
    place: { fr: "OISMP · ONG santé mentale et paix", en: "OISMP · mental health & peace NGO" },
    desc: {
      fr: "Visuels de communication de l'ONG, dont les annonces des partenaires de la marche « Je suis brave ».",
      en: 'Communication visuals for the NGO, including the partner announcements for the "Je suis brave" march.',
    },
    badge: { label: { fr: "Bénévolat", en: "Volunteering" }, bg: G.orch },
    dot: G.rose,
    link: { href: "/projets/design-graphique", label: { fr: "Voir les visuels", en: "See the visuals" } },
  },
];

const EVENT: Entry[] = [
  {
    period: { fr: "OCTOBRE 2026", en: "OCTOBER 2026" },
    title: "Kondo Youth Innovation Awards 2026",
    place: { fr: "Hackathon · projet MammoNet", en: "Hackathon · MammoNet project" },
    desc: {
      fr: "Participante, en charge du design web de MammoNet, une plateforme d'aide au diagnostic du cancer du sein. Notre équipe a remporté la 2e place.",
      en: "Participant, in charge of the web design of MammoNet, a breast cancer diagnosis support platform. Our team won 2nd place.",
    },
    badge: { label: { fr: "2e place", en: "2nd place" }, bg: G.bord },
    dot: G.gold,
    link: { href: "/projets/web-ux", label: { fr: "Voir le projet", en: "See the project" } },
  },
  {
    period: { fr: "11 — 12 SEPTEMBRE 2026", en: "11 — 12 SEPTEMBER 2026" },
    title: "IndabaX Bénin 2026",
    place: { fr: "Sèmè City · événement sur l'intelligence artificielle", en: "Sèmè City · artificial intelligence event" },
    desc: { fr: "Participante pendant les deux jours de l'événement, appareil photo en main.", en: "Participant over the two days of the event, camera in hand." },
    badge: { label: { fr: "Participante", en: "Participant" }, bg: G.orch },
    dot: G.orch,
    link: { href: "/projets/photographie", label: { fr: "Voir les photos", en: "See the photos" } },
  },
  {
    period: { fr: "JUIN 2026", en: "JUNE 2026" },
    title: "Hackathon 21 Days of Y'ello Care",
    place: { fr: "MTN Innovation Lab · projet MediTrace", en: "MTN Innovation Lab · MediTrace project" },
    desc: {
      fr: "Participante et responsable design : identité visuelle, logo et interfaces de MediTrace. 2e prix parmi les trois équipes lauréates.",
      en: "Participant and design lead: MediTrace's visual identity, logo and interfaces. 2nd prize among the three winning teams.",
    },
    badge: { label: { fr: "2e prix", en: "2nd prize" }, bg: G.bord },
    dot: G.rose,
    link: { href: "/projets/web-ux", label: { fr: "Voir le projet", en: "See the project" } },
  },
];

const CERTS: { img: string; org: string; year: string; title: Bilingual }[] = [
  { img: media.parcoursCerts[0], org: "ADOBE · COURSERA", year: "2026", title: { fr: "Adobe Graphic Designer", en: "Adobe Graphic Designer" } },
  { img: media.parcoursCerts[1], org: "ADOBE · COURSERA", year: "2026", title: { fr: "Adobe Content Creator", en: "Adobe Content Creator" } },
  { img: media.parcoursCerts[2], org: "GOOGLE · COURSERA", year: "2025", title: { fr: "Google UX Design", en: "Google UX Design" } },
  { img: media.parcoursCerts[3], org: "FORCE-N", year: "2026", title: { fr: "Marketing digital", en: "Digital marketing" } },
  { img: media.parcoursCerts[4], org: "FORCE-N", year: "2026", title: { fr: "Informatique et Internet", en: "Computing and the Internet" } },
  { img: media.parcoursCerts[5], org: "MTN SKILLS ACADEMY", year: "2026", title: { fr: "Les fondamentaux d'Internet", en: "Internet fundamentals" } },
  { img: media.parcoursCerts[6], org: "MTN SKILLS ACADEMY", year: "2026", title: { fr: "Compétences Internet pour une utilisation quotidienne", en: "Internet skills for everyday use" } },
  { img: media.parcoursCerts[7], org: "MTN SKILLS ACADEMY", year: "2026", title: { fr: "Essentiels numériques : meilleures applications et compétences Internet", en: "Digital essentials: top apps and Internet skills" } },
];

const TABS: { key: TabKey; label: Bilingual; entries: Entry[] | null }[] = [
  { key: "form", label: { fr: "Formation", en: "Formation" }, entries: FORM },
  { key: "exp", label: { fr: "Expériences", en: "Experience" }, entries: EXP },
  { key: "event", label: { fr: "Événements", en: "Events" }, entries: EVENT },
  { key: "cert", label: { fr: "Certifications", en: "Certifications" }, entries: null },
];

function Timeline({ entries }: { entries: Entry[] }) {
  const { t } = useSite();
  return (
    <ol className="relative m-0 list-none pl-[34px]">
      <span aria-hidden className="absolute left-[9px] top-2.5 bottom-2.5 w-0.5 rounded-full" style={{ background: "linear-gradient(180deg, #C9A66B, #E07F9C, rgba(142,91,181,.15))" }} />
      {entries.map((e, i) => (
        <li key={i} className="relative mb-5">
          <span aria-hidden className="absolute -left-8 top-[26px] h-[18px] w-[18px] rounded-full border-[3px]" style={{ background: e.dot, borderColor: "var(--bg)", boxShadow: `0 0 0 1.5px ${e.dot}` }} />
          <article
            className="rounded-[28px]"
            style={{ background: "var(--glass-bg)", border: "1.5px solid var(--glass-border)", padding: "clamp(18px,2.4vw,26px) clamp(18px,2.6vw,30px)" }}
          >
            <p className="text-xs font-semibold tracking-[.14em]" style={{ color: "var(--script)" }}>{t(e.period)}</p>
            {e.badge && (
              <span className="mt-1.5 inline-block rounded-full px-2.5 py-1 text-[11px] font-semibold text-white" style={{ background: e.badge.bg }}>
                {t(e.badge.label)}
              </span>
            )}
            <h3 className="font-display mt-2 font-extrabold" style={{ fontSize: "clamp(22px,2.4vw,28px)", color: "var(--fg)" }}>
              {typeof e.title === "string" ? e.title : t(e.title)}
            </h3>
            <p className="font-medium" style={{ color: "var(--muted)" }}>{typeof e.place === "string" ? e.place : t(e.place)}</p>
            <p className="mt-2 text-[15px] leading-relaxed">{t(e.desc)}</p>
            {e.link && (
              <Link href={e.link.href} className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold no-underline" style={{ color: "var(--script)" }}>
                {t(e.link.label)} →
              </Link>
            )}
          </article>
        </li>
      ))}
    </ol>
  );
}

export default function ParcoursPage() {
  const { fr, t } = useSite();
  const [tab, setTab] = useState<TabKey>("form");
  const active = TABS.find((x) => x.key === tab)!;

  return (
    <PageShell>
      <Container maxWidth={980}>
        <Eyebrow>{fr ? "MON PARCOURS" : "MY JOURNEY"}</Eyebrow>
        <h1 className="font-display font-extrabold leading-[0.95] tracking-[-.04em]" style={{ fontSize: "clamp(42px,6vw,72px)" }}>
          {fr ? "Parcours" : "Journey"}
        </h1>
        <p className="mt-4 max-w-[420px] leading-relaxed" style={{ color: "var(--muted)" }}>
          {fr
            ? "Ma formation, mes expériences, les événements qui ont compté et mes certifications. Clique sur un certificat pour le voir en grand."
            : "My education, experience, the events that mattered and my certifications. Click a certificate to see it full size."}
        </p>

        <div role="group" aria-label={fr ? "Choisir une section" : "Choose a section"} className="mt-8 flex flex-wrap gap-2.5">
          {TABS.map((tb) => {
            const isActive = tb.key === tab;
            const count = tb.entries ? tb.entries.length : CERTS.length;
            return (
              <button
                key={tb.key}
                type="button"
                onClick={() => setTab(tb.key)}
                className="chip-hover inline-flex min-h-[44px] items-center gap-2 rounded-full px-[18px] text-sm font-semibold"
                style={{
                  color: isActive ? "#FBF6F1" : "var(--fg)",
                  background: isActive ? "linear-gradient(180deg, #3D2238, #2A1626)" : "var(--glass-bg)",
                  border: "1.5px solid var(--glass-border)",
                }}
              >
                {t(tb.label)}
                <span className="opacity-70">{count}</span>
              </button>
            );
          })}
        </div>

        <div className="mt-8">
          {active.entries ? (
            <Timeline entries={active.entries} />
          ) : (
            <div className="grid gap-5" style={{ gridTemplateColumns: "repeat(auto-fill, minmax(min(100%,280px),1fr))" }}>
              {CERTS.map((c) => (
                <a
                  key={c.title.fr}
                  href={c.img}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={fr ? `Voir le certificat: ${c.title.fr}` : `View certificate: ${c.title.en}`}
                  className="block overflow-hidden rounded-[26px] no-underline"
                  style={{ background: "var(--glass-bg)", border: "1.5px solid var(--glass-border)" }}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={c.img} alt="" style={{ aspectRatio: "1.36/1", objectFit: "cover", objectPosition: "50% 30%" }} className="w-full" />
                  <div className="p-4">
                    <p className="text-xs font-semibold tracking-[.1em]" style={{ color: "var(--muted)" }}>
                      {c.org} · {c.year}
                    </p>
                    <p className="font-display mt-1 font-bold" style={{ color: "var(--fg)" }}>{t(c.title)}</p>
                  </div>
                </a>
              ))}
            </div>
          )}
        </div>
      </Container>
    </PageShell>
  );
}
