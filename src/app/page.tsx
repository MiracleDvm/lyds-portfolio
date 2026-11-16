"use client";

import { HALO_HOME } from "@/components/chrome/halo-field";
import { PageShell } from "@/components/chrome/page-shell";
import { AvailabilityPill, ArrowRightIcon, FloatingChip, GradientButton, Sparkle } from "@/components/ui/primitives";
import { useSite } from "@/context/site-provider";
import { media } from "@/lib/media";

const SKILLS_FR = [
  "COMMUNITY MANAGER",
  "CRÉATRICE DE CONTENU",
  "DESIGN GRAPHIQUE",
  "WEB & UI/UX",
  "PHOTOGRAPHIE",
  "MONTAGE VIDÉO",
];
const SKILLS_EN = [
  "COMMUNITY MANAGER",
  "CONTENT CREATOR",
  "GRAPHIC DESIGN",
  "WEB & UI/UX",
  "PHOTOGRAPHY",
  "VIDEO EDITING",
];

export default function HomePage() {
  const { fr } = useSite();
  const skills = fr ? SKILLS_FR : SKILLS_EN;

  return (
    <PageShell halos={HALO_HOME} minimalHeader>
      <div
        className="flex min-h-[calc(100vh-104px)] flex-col items-center justify-center px-4 sm:px-12"
        style={{ paddingTop: "clamp(56px, 9vh, 96px)", paddingBottom: "clamp(32px, 6vh, 64px)" }}
      >
        <div className="relative flex items-end justify-center">
          <span
            className="font-display relative"
            style={{ fontSize: "min(220px, 15.5vw)", lineHeight: 0.88, letterSpacing: "-.05em", fontWeight: 800, color: "var(--fg)", marginBottom: ".07em" }}
          >
            port
            <span
              className="font-script absolute -left-[.2em] -top-[.66em] whitespace-nowrap"
              style={{ fontSize: ".7em", lineHeight: 1, transform: "rotate(-7deg)", color: "var(--script)" }}
            >
              Creative
            </span>
          </span>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={media.mascot}
            alt={fr ? "Mascotte de Lyd's qui fait coucou" : "Lyd's mascot waving hello"}
            className="relative z-[2] block"
            style={{ width: "min(320px, 21vw)", height: "auto", margin: "0 calc(-1 * min(14px, 1vw))", filter: "drop-shadow(0 18px 30px rgba(42,22,38,.18))" }}
          />
          <span
            className="font-display"
            style={{ fontSize: "min(220px, 15.5vw)", lineHeight: 0.88, letterSpacing: "-.05em", fontWeight: 800, color: "var(--fg)", marginBottom: ".07em" }}
          >
            folio
            <span style={{ color: "#8E5BB5" }}>.</span>
          </span>

          <Sparkle size={38} color="#C9A66B" className="absolute left-[35%] -top-10 hidden sm:block" />
          <Sparkle size={28} color="#8E5BB5" className="absolute right-[1%] top-10 hidden sm:block" />
          <Sparkle size={24} color="#8E5BB5" className="absolute -left-[5%] bottom-10 hidden sm:block" />
          <Sparkle size={18} color="#E07F9C" className="absolute -right-[3%] bottom-5 hidden sm:block" />
        </div>

        <div className="mt-8 flex max-w-[1000px] flex-wrap justify-center gap-2 sm:mt-11">
          {skills.map((skill, i) => (
            <FloatingChip key={skill} delaySeconds={i * 0.45}>
              {skill}
            </FloatingChip>
          ))}
        </div>

        <div className="mt-6 sm:mt-8">
          <GradientButton href="/a-propos" icon={<ArrowRightIcon />}>
            {fr ? "Entrer dans mon univers" : "Enter my world"}
          </GradientButton>
        </div>

        <div className="mt-4">
          <AvailabilityPill />
        </div>
      </div>
    </PageShell>
  );
}
