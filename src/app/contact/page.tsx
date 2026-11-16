"use client";

import Link from "next/link";
import { AvailabilityPill, Eyebrow, Sparkle } from "@/components/ui/primitives";
import { Container, PageShell } from "@/components/chrome/page-shell";
import { useSite } from "@/context/site-provider";
import { media } from "@/lib/media";
import { floatAnimation } from "@/lib/motion";

function downloadCv() {
  const a = document.createElement("a");
  a.href = media.cv;
  a.download = "CV_Doriane_Atohountoun.pdf";
  a.rel = "noopener";
  a.click();
}

const LINKS = [
  {
    key: "email",
    label: "E-MAIL",
    value: "dodoadbl123@gmail.com",
    href: "mailto:dodoadbl123@gmail.com",
    gradient: "linear-gradient(150deg, #E07F9C, #7A1F3D)",
    aria: { fr: "M'écrire un e-mail", en: "Send me an email" },
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="m22 7-10 6L2 7" />
      </svg>
    ),
  },
  {
    key: "whatsapp",
    label: "WHATSAPP",
    value: "+229 01 47 76 57 48",
    href: "https://wa.me/2290147765748",
    gradient: "linear-gradient(150deg, #3DDC6E, #1A9E4B)",
    aria: { fr: "M'écrire sur WhatsApp", en: "Message me on WhatsApp" },
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="white">
        <path d="M17.5 14.4c-.3-.1-1.7-.8-2-.9-.3-.1-.5-.1-.6.1-.2.3-.6.9-.8 1-.2.2-.3.2-.6.1-1.6-.8-2.6-1.4-3.7-3.1-.3-.4.3-.4.8-1.3.1-.2.1-.4 0-.5-.1-.1-.6-1.5-.8-2-.2-.5-.4-.4-.6-.4-.2 0-.4 0-.6 0s-.6.1-.8.4c-.3.3-1 1-1 2.4 0 1.4 1 2.8 1.2 3 .2.2 2.1 3.2 5.1 4.4 2.5 1 2.5.8 3 .8.5-.1 1.7-.7 1.9-1.4.2-.6.2-1.2.1-1.3 0-.1-.2-.2-.5-.3z" />
        <path d="M12 2a10 10 0 0 0-8.6 15l-1 3.6 3.7-1A10 10 0 1 0 12 2z" fillOpacity="0" stroke="white" strokeWidth="1.6" />
      </svg>
    ),
  },
  {
    key: "linkedin",
    label: "LINKEDIN",
    value: "Doriane Atohountoun",
    href: "https://www.linkedin.com/in/doriane-atohountoun",
    gradient: "linear-gradient(150deg, #1E88D6, #0A5FA8)",
    aria: { fr: "Voir mon profil LinkedIn", en: "See my LinkedIn profile" },
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="white">
        <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9h4v12H3zM9 9h3.8v1.7h.1c.5-1 1.8-2 3.6-2 3.9 0 4.6 2.5 4.6 5.8V21h-4v-5.8c0-1.4 0-3.2-2-3.2s-2.3 1.5-2.3 3.1V21H9z" />
      </svg>
    ),
  },
  {
    key: "instagram",
    label: "INSTAGRAM",
    value: "@lyds_off12",
    href: "https://www.instagram.com/lyds_off12",
    gradient: "transparent",
    aria: { fr: "Voir mon Instagram", en: "See my Instagram" },
    image: media.logos.instagram,
  },
  {
    key: "tiktok",
    label: "TIKTOK",
    value: "@lyds_off12",
    href: "https://www.tiktok.com/@lyds_off12",
    gradient: "transparent",
    aria: { fr: "Voir mon TikTok", en: "See my TikTok" },
    image: media.logos.tiktok,
  },
];

export default function ContactPage() {
  const { fr } = useSite();

  return (
    <PageShell>
      <Container maxWidth={1080}>
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <Eyebrow>CONTACT</Eyebrow>
            <h1 className="font-display font-extrabold leading-[0.95] tracking-[-.04em]" style={{ fontSize: "clamp(42px,6vw,72px)" }}>
              {fr ? "Travaillons ensemble" : "Let's work together"}
            </h1>
          </div>
          <p className="max-w-[420px] leading-relaxed" style={{ fontSize: "clamp(15px,1.3vw,17px)", color: "var(--muted)" }}>
            {fr
              ? "Un projet, une collaboration ou simplement une question ? Choisis le moyen qui te convient, je te réponds avec plaisir."
              : "A project, a collaboration or just a question? Pick whichever way suits you, I'll be happy to reply."}
          </p>
        </div>

        <div className="mt-6 flex flex-wrap items-center gap-3">
          <AvailabilityPill />
          <button
            type="button"
            onClick={downloadCv}
            className="chip-hover inline-flex min-h-10 items-center gap-2 rounded-full px-4 text-[13px] font-semibold backdrop-blur-xl"
            style={{ background: "var(--glass-bg)", border: "1.5px solid var(--glass-border)", color: "var(--fg)" }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
              <path d="M12 3v12M7 10l5 5 5-5M5 21h14" />
            </svg>
            {fr ? "Télécharger mon CV" : "Download my CV"}
          </button>
        </div>

        <div className="mt-10 grid gap-4" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(min(100%,300px),1fr))" }}>
          {LINKS.map((l, i) => (
            <a
              key={l.key}
              href={l.href}
              target={l.key === "email" ? undefined : "_blank"}
              rel={l.key === "email" ? undefined : "noopener noreferrer"}
              aria-label={fr ? l.aria.fr : l.aria.en}
              className="card-hover flex min-h-[92px] items-center gap-4 rounded-[26px] px-5 no-underline"
              style={{ ...floatAnimation(i * 0.5), background: "var(--glass-bg)", border: "1.5px solid var(--glass-border)" }}
            >
              <span className="flex h-[58px] w-[58px] shrink-0 items-center justify-center overflow-hidden rounded-[18px]" style={{ background: l.gradient }}>
                {l.image ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={l.image} alt="" className="h-9 w-9 object-contain" />
                ) : (
                  l.icon
                )}
              </span>
              <span className="min-w-0">
                <span className="block text-xs font-semibold tracking-[.14em]" style={{ color: "var(--muted)" }}>{l.label}</span>
                <span className="block truncate font-semibold" style={{ color: "var(--fg)" }}>{l.value}</span>
              </span>
            </a>
          ))}
        </div>

        <div className="mt-16 flex flex-col items-center text-center sm:mt-20">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={media.mascot}
            alt={fr ? "La mascotte de Lyd's qui flotte" : "The Lyd's mascot floating"}
            className="animate-float-big"
            style={{ width: "min(240px, 52vw)" }}
          />
          <p className="font-script mt-4" style={{ fontSize: "clamp(46px,7vw,72px)", color: "var(--script-rose)" }}>
            {fr ? "Merci pour ta visite !" : "Thanks for visiting!"}
          </p>
          <p className="mt-2 max-w-[520px] leading-relaxed" style={{ color: "var(--muted)" }}>
            {fr
              ? "Merci d'avoir pris le temps de découvrir mon univers. J'espère qu'il t'a inspiré, et à très vite pour créer quelque chose ensemble."
              : "Thank you for taking the time to explore my world. I hope it inspired you, and see you soon to create something together."}
          </p>
          <Link
            href="/projets"
            className="chip-hover mt-5 inline-flex min-h-[44px] items-center gap-2 rounded-full px-5 text-[13px] font-semibold no-underline backdrop-blur-xl"
            style={{ background: "var(--glass-bg)", border: "1.5px solid var(--glass-border)", color: "var(--fg)" }}
          >
            <Sparkle size={14} />
            {fr ? "Revoir mes projets" : "See my projects again"}
          </Link>
        </div>
      </Container>
    </PageShell>
  );
}
