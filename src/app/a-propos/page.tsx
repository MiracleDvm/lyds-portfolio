"use client";

import Link from "next/link";
import { Container, PageShell } from "@/components/chrome/page-shell";
import { ArrowRightIcon, Eyebrow, GradientButton, Sparkle } from "@/components/ui/primitives";
import { useSite } from "@/context/site-provider";
import { media } from "@/lib/media";
import { floatAnimation } from "@/lib/motion";

const SKILLS_FR = ["COMMUNITY MANAGER", "CRÉATRICE DE CONTENU", "DESIGN GRAPHIQUE", "WEB & UI/UX", "PHOTOGRAPHIE", "MONTAGE VIDÉO"];
const SKILLS_EN = ["COMMUNITY MANAGER", "CONTENT CREATOR", "GRAPHIC DESIGN", "WEB & UI/UX", "PHOTOGRAPHY", "VIDEO EDITING"];

const SERVICES = [
  {
    href: "/projets/community-manager",
    color: "#7A1F3D",
    title: { fr: "Gestion de réseaux sociaux", en: "Social media management" },
    desc: {
      fr: "Calendrier éditorial, publications, stories et animation de ta communauté.",
      en: "Editorial calendar, posts, stories and community engagement.",
    },
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
      </svg>
    ),
  },
  {
    href: "/projets/creatrice-de-contenu",
    color: "#E07F9C",
    title: { fr: "Création de contenu", en: "Content creation" },
    desc: {
      fr: "Idées, tournage et vidéos courtes pensées pour TikTok et Instagram.",
      en: "Ideas, filming and short videos made for TikTok and Instagram.",
    },
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <rect x="2" y="4" width="15" height="16" rx="3" />
        <path d="m22 8.5-5 3.5 5 3.5z" />
      </svg>
    ),
  },
  {
    href: "/projets/design-graphique",
    color: "#8E5BB5",
    title: { fr: "Design graphique", en: "Graphic design" },
    desc: {
      fr: "Affiches, visuels pour les réseaux, chartes graphiques et logos.",
      en: "Posters, social media visuals, brand guidelines and logos.",
    },
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <path d="M12 19l7-7 3 3-7 7-3-3z" />
        <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
        <path d="M2 2l7.586 7.586" />
        <circle cx="11" cy="11" r="2" />
      </svg>
    ),
  },
  {
    href: "/projets/web-ux",
    color: "#2A1626",
    title: { fr: "Maquettes web & UI/UX", en: "Web & UI/UX mockups" },
    desc: {
      fr: "Interfaces de sites et d'applications claires, sur Figma.",
      en: "Clear website and app interfaces, designed in Figma.",
    },
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <rect x="2" y="3" width="20" height="18" rx="2" />
        <path d="M2 8h20M6 5.5h.01M9 5.5h.01" />
      </svg>
    ),
  },
  {
    href: "/projets/photographie",
    color: "#C9A66B",
    title: { fr: "Photo & montage vidéo", en: "Photo & video editing" },
    desc: {
      fr: "Couverture d'événements, portraits et montage de vidéos courtes.",
      en: "Event coverage, portraits and short-video editing.",
    },
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
        <circle cx="12" cy="13" r="4" />
      </svg>
    ),
  },
];

export default function AboutPage() {
  const { fr } = useSite();
  const skills = fr ? SKILLS_FR : SKILLS_EN;

  return (
    <PageShell>
      <Container maxWidth={1240}>
        <div className="flex flex-wrap items-center gap-10 sm:gap-16">
          <div className="relative mx-auto w-full max-w-[420px] basis-[420px]">
            <div
              className="animate-float-big rounded-t-full p-2"
              style={{
                background: "var(--glass-bg)",
                border: "1.5px solid var(--glass-border)",
                boxShadow: "var(--glass-shadow)",
                borderRadius: "999px 999px 36px 36px",
              }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={media.aboutPortrait}
                alt={
                  fr
                    ? "Portrait de Doriane, en chemise rayée, qui fait le signe V avec les deux mains"
                    : "Portrait of Doriane in a striped shirt, making a peace sign with both hands"
                }
                className="w-full"
                style={{ aspectRatio: "3/4", objectFit: "cover", objectPosition: "50% 30%", borderRadius: "999px 999px 28px 28px" }}
              />
            </div>
            <Sparkle size={26} color="#C9A66B" className="absolute -left-2 -top-2" />
            <Sparkle size={20} color="#E07F9C" className="absolute -right-2 -top-2" />
          </div>

          <div className="min-w-0 flex-1 basis-[460px]">
            <Eyebrow>{fr ? "À PROPOS" : "ABOUT ME"}</Eyebrow>
            <h1 className="font-display font-extrabold leading-[0.95] tracking-[-.04em]" style={{ fontSize: "clamp(42px,5.6vw,76px)" }}>
              {fr ? "Salut, moi c'est" : "Hi, I'm"}{" "}
              <span className="font-script" style={{ fontSize: "1.37em", color: "var(--script-rose)" }}>
                Doriane
              </span>
            </h1>
            <p className="mt-5 max-w-[620px] leading-relaxed" style={{ fontSize: "clamp(16px,1.4vw,19px)", color: "var(--muted)" }}>
              {fr
                ? "Créative dans l'âme et férue de numérique, je navigue avec passion entre le design UI/UX, la création de contenu et la stratégie digitale. Mon truc ? Transformer des idées un peu floues en expériences visuelles percutantes et esthétiques. Toujours curieuse, j'allie sens de l'esthétique et rigueur pour donner vie à des projets qui ont du style et du sens."
                : "Creative at heart and a digital enthusiast, I move passionately between UI/UX design, content creation and digital strategy. My thing? Turning slightly fuzzy ideas into striking, aesthetic visual experiences. Always curious, I combine an eye for aesthetics with rigour to bring to life projects with style and meaning."}
            </p>

            <Eyebrow>
              <span className="mt-8 block">{fr ? "CE QUE JE FAIS" : "WHAT I DO"}</span>
            </Eyebrow>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill, i) => (
                <span
                  key={skill}
                  className="chip-hover relative inline-flex min-h-[44px] items-center rounded-full px-5 text-xs font-semibold tracking-[.1em] backdrop-blur-xl"
                  style={{
                    ...floatAnimation(i * 0.45),
                    color: "var(--fg)",
                    background: "var(--glass-bg)",
                    border: "1.5px solid var(--glass-border)",
                  }}
                >
                  {skill}
                </span>
              ))}
            </div>

            <div className="mt-7 flex flex-wrap items-center gap-4">
              <GradientButton href="/projets" icon={<ArrowRightIcon />}>
                {fr ? "Voir mes projets" : "See my projects"}
              </GradientButton>
              <span className="inline-flex items-center gap-2 text-sm" style={{ color: "var(--muted)" }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 1 1 16 0Z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                {fr ? "Womey Sodo, Abomey-Calavi, Bénin" : "Womey Sodo, Abomey-Calavi, Benin"}
              </span>
            </div>
          </div>
        </div>

        <div className="mt-16 sm:mt-20">
          <Eyebrow>{fr ? "CE QUE JE PROPOSE" : "WHAT I OFFER"}</Eyebrow>
          <h2 className="font-display mb-6 font-extrabold tracking-[-.03em]" style={{ fontSize: "clamp(28px,3.4vw,40px)" }}>
            {fr ? "Mes services" : "My services"}
          </h2>
          <div className="grid gap-4" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(min(100%,210px),1fr))" }}>
            {SERVICES.map((s, i) => (
              <Link
                key={s.title.fr}
                href={s.href}
                className="card-hover block rounded-[26px] p-[22px] no-underline"
                style={{
                  ...floatAnimation(i * 0.4),
                  background: "var(--glass-bg)",
                  border: "1.5px solid var(--glass-border)",
                }}
              >
                <span className="mb-4 flex h-[50px] w-[50px] items-center justify-center rounded-2xl text-white" style={{ background: s.color }}>
                  {s.icon}
                </span>
                <p className="mb-1.5 text-xl font-semibold" style={{ color: "var(--fg)" }}>
                  {fr ? s.title.fr : s.title.en}
                </p>
                <p className="text-[14.5px] leading-relaxed" style={{ color: "var(--muted)" }}>
                  {fr ? s.desc.fr : s.desc.en}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </PageShell>
  );
}
