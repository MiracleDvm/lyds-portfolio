"use client";

import { BackLink, Eyebrow } from "@/components/ui/primitives";
import { Container, PageShell } from "@/components/chrome/page-shell";
import type { Tool } from "@/components/ui/tools-accordion";
import { ToolsAccordion } from "@/components/ui/tools-accordion";
import { VideoPhoneFrame } from "@/components/ui/video-phone";
import { useSite } from "@/context/site-provider";
import { media } from "@/lib/media";

const TOOLS: Tool[] = [
  { name: "CapCut Pro", role: { fr: "Montage & habillage", en: "Editing & styling" }, logo: media.logos.capcut, gradient: "linear-gradient(160deg, rgba(255,255,255,.55), rgba(42,22,38,.25))" },
];

const DID_FR = ["SÉLECTION DES PLANS", "DÉCOUPE & RYTHME", "TITRES ANIMÉS", "APPEL À L'ABONNEMENT"];
const DID_EN = ["SHOT SELECTION", "CUTTING & PACING", "ANIMATED TITLES", "CALL TO SUBSCRIBE"];

const GRID_VIDEOS = [
  {
    title: { fr: "Qui est Lyd's ?", en: "Who is Lyd's?" },
    desc: { fr: "Vidéo de présentation de la page.", en: "The page's introduction video." },
    video: media.videos.quiEstLyds,
  },
  {
    title: { fr: "Tassi Hangbè", en: "Tassi Hangbè" },
    desc: { fr: "Rubrique « Elle a existé ».", en: "'She existed' series." },
    video: media.videos.tassiHangbe,
  },
  {
    title: { fr: "Sara Baartman", en: "Sara Baartman" },
    desc: { fr: "Rubrique « L'affaire ».", en: "'The case' series." },
    video: media.videos.saraBaartman,
  },
];

export default function MontageVideoPage() {
  const { fr, t } = useSite();
  const did = fr ? DID_FR : DID_EN;

  return (
    <PageShell>
      <Container>
        <BackLink href="/projets">{fr ? "Tous les projets" : "All projects"}</BackLink>

        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <Eyebrow>{fr ? "PROJETS · 06" : "PROJECTS · 06"}</Eyebrow>
            <h1 className="font-display font-extrabold leading-[0.95] tracking-[-.04em]" style={{ fontSize: "clamp(44px,6vw,72px)" }}>
              {fr ? "Montage vidéo" : "Video editing"}
            </h1>
          </div>
          <p className="max-w-[440px] leading-relaxed" style={{ fontSize: "clamp(15px,1.3vw,17px)", color: "var(--muted)" }}>
            {fr
              ? "Je débute en montage vidéo : à partir de mes propres tournages ou des rushs qu'on me confie, je construis le rythme et l'habillage pour les réseaux sociaux."
              : "I am starting out in video editing: from my own footage or the rushes I am given, I build the pace and the styling for social media."}
          </p>
        </div>

        <div className="mt-8">
          <ToolsAccordion tools={TOOLS} label={{ fr: "Mes outils", en: "My tools" }} />
        </div>

        <div
          className="flex flex-wrap items-center gap-7"
          style={{ background: "var(--glass-bg)", border: "1.5px solid var(--glass-border)", borderRadius: 34, padding: "clamp(16px,2.4vw,28px)" }}
        >
          <div className="mx-auto">
            <VideoPhoneFrame src={media.videos.unboxing.src} poster={media.videos.unboxing.poster} maxWidth={320} ariaLabel={fr ? "Vidéo unboxing" : "Unboxing video"} />
          </div>
          <div className="min-w-0 flex-1 basis-[320px]">
            <span className="inline-block rounded-full px-3 py-1 text-xs font-semibold text-white" style={{ background: "#7A1F3D" }}>
              {fr ? "Mes débuts en montage" : "My first editing work"}
            </span>
            <h2 className="font-display mt-3 font-extrabold tracking-[-.02em]" style={{ fontSize: "clamp(24px,2.6vw,32px)", color: "var(--fg)" }}>
              {fr ? "Vidéo unboxing" : "Unboxing video"}
            </h2>
            <p className="mt-1 text-sm" style={{ color: "var(--muted)" }}>
              {fr ? "Vidéo verticale 9:16 · réseaux sociaux" : "Vertical 9:16 video · social media"}
            </p>
            <p className="mt-3 text-[15px] leading-relaxed">
              {fr
                ? "Le tournage a été fait par la personne, qui m'a confié ses rushs. J'ai réalisé tout le montage : sélection des plans, découpe et rythme, titres animés et appel à l'abonnement."
                : "The filming was done by the person, who handed me the raw footage. I did all the editing: shot selection, cutting and pacing, animated titles and a call to subscribe."}
            </p>
            <Eyebrow>
              <span className="mt-4 block">{fr ? "CE QUE J'AI FAIT" : "WHAT I DID"}</span>
            </Eyebrow>
            <div className="flex flex-wrap gap-2">
              {did.map((d) => (
                <span key={d} className="chip-hover inline-flex min-h-[40px] items-center rounded-full px-4 text-[11px] font-semibold tracking-[.08em]" style={{ color: "var(--fg)", background: "var(--glass-bg)", border: "1.5px solid var(--glass-border)" }}>
                  {d}
                </span>
              ))}
            </div>
          </div>
        </div>

        <Eyebrow>
          <span className="mt-10 block">{fr ? "MES MONTAGES POUR LYD'S" : "MY EDITS FOR LYD'S"}</span>
        </Eyebrow>
        <p className="mb-6 max-w-[620px] leading-relaxed" style={{ color: "var(--muted)" }}>
          {fr
            ? "Les vidéos de ma page Lyd's, que je tourne et monte moi-même sur CapCut : découpe, sous-titres, musique et rythme."
            : "The videos from my Lyd's page, which I film and edit myself in CapCut: cutting, subtitles, music and pacing."}
        </p>
        <div className="grid gap-7" style={{ gridTemplateColumns: "repeat(auto-fill, minmax(min(100%,260px),1fr))" }}>
          {GRID_VIDEOS.map((v) => (
            <figure key={v.title.fr} className="m-0 max-w-[280px]">
              <VideoPhoneFrame src={v.video.src} poster={v.video.poster} />
              <figcaption className="mt-3 text-center">
                <p className="font-display text-lg font-extrabold" style={{ color: "var(--fg)" }}>{t(v.title)}</p>
                <p className="text-sm" style={{ color: "var(--muted)" }}>{t(v.desc)}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </Container>
    </PageShell>
  );
}
