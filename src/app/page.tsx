"use client";

import type { MouseEvent } from "react";
import { useCurtain } from "@/components/chrome/curtain-transition";
import { HALO_HOME } from "@/components/chrome/halo-field";
import { PageShell } from "@/components/chrome/page-shell";
import { ArrowRightIcon, FloatingChip, GradientButton, Sparkle } from "@/components/ui/primitives";
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
  const { play } = useCurtain();
  const skills = fr ? SKILLS_FR : SKILLS_EN;

  const handleEnter = (e: MouseEvent) => {
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
    e.preventDefault();
    play("/a-propos");
  };

  return (
    <PageShell halos={HALO_HOME} minimalHeader>
      <div
        className="flex flex-col items-center justify-center overflow-hidden px-4 sm:px-12"
        style={{
          height: "calc(100dvh - var(--header-h, 104px))",
          paddingTop: "clamp(12px, 3vh, 48px)",
          paddingBottom: "clamp(12px, 3vh, 40px)",
        }}
      >
        <h1 className="relative m-0 flex items-end justify-center font-normal">
          <span
            className="font-display relative"
            style={{ fontSize: "min(220px, 15.5vw, 24vh)", lineHeight: 0.88, letterSpacing: "-.05em", fontWeight: 800, color: "var(--fg)", marginBottom: ".07em" }}
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
            style={{ width: "min(320px, 21vw, 35vh)", height: "auto", margin: "0 calc(-1 * min(14px, 1vw))", filter: "drop-shadow(0 18px 30px rgba(42,22,38,.18))" }}
          />
          <span
            className="font-display"
            style={{ fontSize: "min(220px, 15.5vw, 24vh)", lineHeight: 0.88, letterSpacing: "-.05em", fontWeight: 800, color: "var(--fg)", marginBottom: ".07em" }}
          >
            folio
            <span style={{ color: "#8E5BB5" }}>.</span>
          </span>

          <Sparkle size={38} color="#C9A66B" className="absolute left-[35%] -top-10 hidden sm:block" />
          <Sparkle size={28} color="#8E5BB5" className="absolute right-[1%] top-10 hidden sm:block" />
          <Sparkle size={24} color="#8E5BB5" className="absolute -left-[5%] bottom-10 hidden sm:block" />
          <Sparkle size={18} color="#E07F9C" className="absolute -right-[3%] bottom-5 hidden sm:block" />
        </h1>

        <div className="flex max-w-[1000px] flex-wrap justify-center gap-2" style={{ marginTop: "clamp(10px, 2.5vh, 44px)" }}>
          {skills.map((skill, i) => (
            <FloatingChip key={skill} delaySeconds={i * 0.45}>
              {skill}
            </FloatingChip>
          ))}
        </div>

        <div style={{ marginTop: "clamp(10px, 2vh, 32px)" }}>
          <GradientButton href="/a-propos" onClick={handleEnter} icon={<ArrowRightIcon />}>
            {fr ? "Entrer dans mon univers" : "Enter my world"}
          </GradientButton>
        </div>
      </div>
    </PageShell>
  );
}
