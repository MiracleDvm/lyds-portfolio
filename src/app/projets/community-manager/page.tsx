"use client";

import { BackLink, Eyebrow, ExternalLinkIcon } from "@/components/ui/primitives";
import { Container, PageShell } from "@/components/chrome/page-shell";
import type { Tool } from "@/components/ui/tools-accordion";
import { ToolsAccordion } from "@/components/ui/tools-accordion";
import { useSite } from "@/context/site-provider";
import { media } from "@/lib/media";
import { floatAnimation } from "@/lib/motion";

const TOOLS: Tool[] = [
  { name: "Canva", role: { fr: "Visuels & stories", en: "Visuals & stories" }, logo: media.logos.canva, gradient: "linear-gradient(160deg, rgba(0,196,204,.35), rgba(125,42,232,.35))" },
  { name: "CapCut Pro", role: { fr: "Montage des vidéos", en: "Video editing" }, logo: media.logos.capcut, gradient: "linear-gradient(160deg, rgba(255,255,255,.55), rgba(42,22,38,.25))" },
  { name: "Photoshop", role: { fr: "Retouche des visuels", en: "Visual retouching" }, logo: media.logos.photoshop, gradient: "linear-gradient(160deg, rgba(49,168,255,.35), rgba(0,30,54,.35))" },
  { name: "Illustrator", role: { fr: "Éléments graphiques", en: "Graphic elements" }, logo: media.logos.illustrator, gradient: "linear-gradient(160deg, rgba(255,154,0,.35), rgba(51,0,0,.35))" },
];

export default function CommunityManagerPage() {
  const { fr } = useSite();

  return (
    <PageShell>
      <Container>
        <BackLink href="/projets">{fr ? "Tous les projets" : "All projects"}</BackLink>

        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <Eyebrow>{fr ? "PROJETS · 01" : "PROJECTS · 01"}</Eyebrow>
            <h1 className="font-display font-extrabold leading-[0.95] tracking-[-.04em]" style={{ fontSize: "clamp(44px,6vw,72px)" }}>
              Community manager
            </h1>
          </div>
          <p className="max-w-[440px] leading-relaxed" style={{ fontSize: "clamp(15px,1.3vw,17px)", color: "var(--muted)" }}>
            {fr
              ? "Les pages que j'anime ou que j'ai fait grandir : publications, stories, vidéos et calendrier éditorial."
              : "The pages I run or have grown: posts, stories, videos and editorial calendar."}
          </p>
        </div>

        <div className="mt-8">
          <ToolsAccordion tools={TOOLS} label={{ fr: "Mes outils", en: "My tools" }} />
        </div>

        <div className="flex flex-col gap-8">
          {/* ADEMO */}
          <article
            className="flex flex-wrap items-center gap-7"
            style={{ background: "var(--glass-bg)", border: "1.5px solid var(--glass-border)", borderRadius: 34, padding: "clamp(16px,2.4vw,28px)" }}
          >
            <div className="relative mx-auto w-full max-w-[300px] basis-[300px] rounded-[40px] p-2.5" style={{ background: "var(--card-bg)", boxShadow: "var(--card-shadow)" }}>
              <span className="absolute left-5 top-5 z-[1] rounded-full px-3 py-1 text-[11px] font-semibold tracking-[.1em] text-white" style={{ background: "rgba(42,22,38,.75)" }}>
                BACKSTAGE
              </span>
              <video
                src={media.videos.ademo.src}
                poster={media.videos.ademo.poster}
                controls
                playsInline
                preload="metadata"
                aria-label={fr ? "Vidéo backstage d'un tournage ADEMO" : "Behind-the-scenes video from an ADEMO shoot"}
                className="w-full rounded-[30px] object-cover"
                style={{ aspectRatio: "9/16", background: "#2A1626" }}
              />
            </div>
            <div className="min-w-0 flex-1 basis-[380px]">
              <div className="flex items-center gap-2 text-sm" style={{ color: "var(--muted)" }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={media.logos.instagram} alt="" className="h-5 w-5" />
                Instagram · @ademo.bj
              </div>
              <span className="mt-2 inline-block rounded-full px-3 py-1 text-xs font-semibold text-white" style={{ background: "#2E8B7A" }}>
                {fr ? "En cours" : "Ongoing"}
              </span>
              <h2 className="font-display mt-2 font-extrabold tracking-[-.03em]" style={{ fontSize: "clamp(30px,3.4vw,42px)", color: "var(--fg)" }}>
                ADEMO
              </h2>
              <p className="mt-2 text-[15px] leading-relaxed">
                {fr
                  ? "J'anime la page Instagram d'ADEMO : je publie les vidéos, je fais vivre la communauté en story et je tourne des vidéos backstage pendant les tournages."
                  : "I run ADEMO's Instagram page: I publish the videos, keep the community engaged through stories and film behind-the-scenes clips during shoots."}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {(fr
                  ? ["PUBLICATION DES VIDÉOS", "ANIMATION EN STORY", "VIDÉOS BACKSTAGE"]
                  : ["VIDEO PUBLISHING", "STORY ENGAGEMENT", "BEHIND-THE-SCENES VIDEOS"]
                ).map((c, i) => (
                  <span
                    key={c}
                    className="chip-hover inline-flex min-h-[44px] items-center rounded-full px-5 text-xs font-semibold tracking-[.1em]"
                    style={{ ...floatAnimation(i * 0.45), color: "var(--fg)", background: "var(--glass-bg)", border: "1.5px solid var(--glass-border)" }}
                  >
                    {c}
                  </span>
                ))}
              </div>
              <a
                href="https://www.instagram.com/ademo.bj"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex items-center gap-1.5 rounded-full px-5 py-3 text-sm font-semibold no-underline"
                style={{ background: "var(--glass-bg)", border: "1px solid var(--glass-border)", color: "var(--fg)" }}
              >
                {fr ? "Voir la page Instagram" : "See the Instagram page"}
                <ExternalLinkIcon size={14} />
              </a>
            </div>
          </article>

          {/* Pharmacie */}
          <article
            className="flex flex-wrap items-center gap-7"
            style={{ background: "var(--glass-bg)", border: "1.5px solid var(--glass-border)", borderRadius: 34, padding: "clamp(16px,2.4vw,28px)" }}
          >
            <div className="relative mx-auto aspect-square w-full max-w-[420px] basis-[420px]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={media.designGraphique.peau[0]}
                alt={fr ? "Visuel produits : soins de la peau" : "Product visual: skincare"}
                className="absolute left-0 top-0 w-[68%] -rotate-[4deg] rounded-2xl border-[6px] border-white object-cover shadow-xl"
              />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={media.designGraphique.dentitor[0]}
                alt={fr ? "Visuel produit : savon Dentitor" : "Product visual: Dentitor soap"}
                className="absolute bottom-0 right-0 w-[58%] rotate-[5deg] rounded-2xl border-[6px] border-white object-cover shadow-xl"
              />
            </div>
            <div className="min-w-0 flex-1 basis-[380px]">
              <div className="flex items-center gap-2 text-sm" style={{ color: "var(--muted)" }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={media.logos.tiktok} alt="" className="h-5 w-5" />
                TikTok &amp; Facebook
              </div>
              <span className="mt-2 inline-block rounded-full px-3 py-1 text-xs font-semibold text-white" style={{ background: "#7A1F3D" }}>
                {fr ? "Gestion complète" : "Full management"}
              </span>
              <h2 className="font-display mt-2 font-extrabold tracking-[-.03em]" style={{ fontSize: "clamp(30px,3.4vw,42px)", color: "var(--fg)" }}>
                Pharmacie Les Grâces Divines de Ouèdo
              </h2>
              <p className="font-display mt-3 font-extrabold" style={{ fontSize: "clamp(38px,4vw,48px)", color: "var(--fg)" }}>+458</p>
              <p className="text-[14.5px]" style={{ color: "var(--muted)" }}>
                {fr ? "abonnés gagnés sur TikTok de mars à juillet 2026" : "TikTok followers gained from March to July 2026"}
              </p>
              <p className="mt-3 text-[15px] leading-relaxed">
                {fr
                  ? "J'ai tout pris en charge : création des pages TikTok et Facebook, calendrier éditorial, tournage et montage de toutes les vidéos, et visuels des produits. Les statistiques sont visibles directement sur la page."
                  : "I handled everything: creating the TikTok and Facebook pages, the editorial calendar, filming and editing every video, and the product visuals. The stats are visible directly on the page."}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {(fr
                  ? ["CRÉATION DE LA PAGE", "CALENDRIER ÉDITORIAL", "TOURNAGE & MONTAGE", "VISUELS PRODUITS"]
                  : ["PAGE CREATION", "EDITORIAL CALENDAR", "FILMING & EDITING", "PRODUCT VISUALS"]
                ).map((c, i) => (
                  <span
                    key={c}
                    className="chip-hover inline-flex min-h-[44px] items-center rounded-full px-5 text-xs font-semibold tracking-[.1em]"
                    style={{ ...floatAnimation(i * 0.45), color: "var(--fg)", background: "var(--glass-bg)", border: "1.5px solid var(--glass-border)" }}
                  >
                    {c}
                  </span>
                ))}
              </div>
              <a
                href="https://www.tiktok.com/@pharmacie.les.grc"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex items-center gap-1.5 rounded-full px-5 py-3 text-sm font-semibold no-underline"
                style={{ background: "var(--glass-bg)", border: "1px solid var(--glass-border)", color: "var(--fg)" }}
              >
                {fr ? "Voir la page TikTok" : "See the TikTok page"}
                <ExternalLinkIcon size={14} />
              </a>
            </div>
          </article>
        </div>
      </Container>
    </PageShell>
  );
}
