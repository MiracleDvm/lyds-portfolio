"use client";

import { BackLink, Eyebrow, ExternalLinkIcon, GlassPanel } from "@/components/ui/primitives";
import { Container, PageShell } from "@/components/chrome/page-shell";
import { Logo } from "@/components/chrome/logo";
import type { Tool } from "@/components/ui/tools-accordion";
import { ToolsAccordion } from "@/components/ui/tools-accordion";
import { VideoPhoneFrame } from "@/components/ui/video-phone";
import { floatAnimation } from "@/lib/motion";
import { useSite } from "@/context/site-provider";
import type { Bilingual } from "@/lib/i18n";
import { media } from "@/lib/media";

const FACTS: { big: Bilingual; small: Bilingual }[] = [
  { big: { fr: "3 vidéos", en: "3 videos" }, small: { fr: "par semaine", en: "per week" } },
  { big: { fr: "19h30", en: "7:30 pm" }, small: { fr: "mardi · jeudi · samedi", en: "Tue · Thu · Sat" } },
  { big: { fr: "45 s – 1 min 30", en: "45 s – 1 min 30" }, small: { fr: "vidéos verticales", en: "vertical videos" } },
  { big: { fr: "5 rubriques", en: "5 series" }, small: { fr: "en français", en: "in French" } },
];

const TOOLS: Tool[] = [
  { name: "CapCut", role: { fr: "Montage vidéo", en: "Video editing" }, logo: media.logos.capcut, gradient: "linear-gradient(160deg, rgba(255,255,255,.55), rgba(42,22,38,.25))" },
  { name: "Claude", role: { fr: "Montage assisté par IA", en: "AI-assisted editing" }, logo: media.logos.claude, gradient: "linear-gradient(160deg, rgba(250,249,245,.85), rgba(217,119,87,.25))" },
  { name: "Canva", role: { fr: "Visuels & couvertures", en: "Visuals & covers" }, logo: media.logos.canva, gradient: "linear-gradient(160deg, rgba(0,196,204,.35), rgba(125,42,232,.35))" },
  { name: "Adobe Podcast", role: { fr: "Amélioration du son", en: "Audio enhancement" }, logo: media.logos.adobePodcast, gradient: "linear-gradient(160deg, rgba(255,90,0,.3), rgba(51,0,0,.3))" },
  { name: "Samsung Galaxy A16", role: { fr: "Tournage des vidéos", en: "Filming" }, icon: "phone", gradient: "linear-gradient(160deg, rgba(142,91,181,.3), rgba(42,22,38,.2))" },
  { name: "Micro", role: { fr: "Prise de son", en: "Sound recording" }, icon: "mic", gradient: "linear-gradient(160deg, rgba(201,166,107,.3), rgba(42,22,38,.2))" },
];

const RUBRIQUES_FR = ["VRAI OU FAUX ?", "ELLE A EXISTÉ", "L'AFFAIRE", "POURQUOI ON DIT QUE…", "LE CHIFFRE"];
const RUBRIQUES_EN = ["TRUE OR FALSE?", "SHE EXISTED", "THE CASE", "WHY DO WE SAY…", "THE NUMBER"];

const VIDEOS = [
  {
    pill: { fr: "BIENVENUE CHEZ LYD'S", en: "WELCOME TO LYD'S" },
    pillBg: "#2A1626",
    title: { fr: "Qui est Lyd's ?", en: "Who is Lyd's?" },
    desc: { fr: "La vidéo de présentation de la page : ce qu'on ne te dit pas sur les femmes.", en: "The page's introduction video: what nobody tells you about women." },
    video: media.videos.quiEstLyds,
  },
  {
    pill: { fr: "ELLE A EXISTÉ", en: "SHE EXISTED" },
    pillBg: "#B08A4E",
    title: { fr: "Tassi Hangbè", en: "Tassi Hangbè" },
    desc: { fr: "Le Danxomè aurait eu une reine : l'histoire d'une femme effacée des récits officiels.", en: "Dahomey may have had a queen: the story of a woman erased from official history." },
    video: media.videos.tassiHangbe,
  },
  {
    pill: { fr: "L'AFFAIRE", en: "THE CASE" },
    pillBg: "#7A1F3D",
    title: { fr: "Sara Baartman", en: "Sara Baartman" },
    desc: { fr: "Exposée comme une bête de foire : retour sur une histoire qu'on ne doit pas oublier.", en: "Exhibited like a fairground animal: looking back at a story we must not forget." },
    video: media.videos.saraBaartman,
  },
];

export default function CreatriceContenuPage() {
  const { fr, t } = useSite();
  const rubriques = fr ? RUBRIQUES_FR : RUBRIQUES_EN;

  return (
    <PageShell>
      <Container>
        <BackLink href="/projets">{fr ? "Tous les projets" : "All projects"}</BackLink>

        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <Eyebrow>{fr ? "PROJETS · 02" : "PROJECTS · 02"}</Eyebrow>
            <h1 className="font-display font-extrabold leading-[0.95] tracking-[-.04em]" style={{ fontSize: "clamp(44px,6vw,72px)" }}>
              {fr ? "Créatrice de contenu" : "Content creator"}
            </h1>
          </div>
          <p className="max-w-[440px] leading-relaxed" style={{ fontSize: "clamp(15px,1.3vw,17px)", color: "var(--muted)" }}>
            {fr
              ? "Ma page Lyd's sur Instagram et TikTok : je conçois, écris, tourne et monte chaque vidéo, de l'idée à la publication."
              : "My Lyd's page on Instagram and TikTok: I plan, write, film and edit every video, from idea to publication."}
          </p>
        </div>

        <GlassPanel radius={32} className="mt-8 flex flex-wrap gap-6 p-[clamp(22px,3vw,34px)]">
          <div className="min-w-0 flex-1 basis-[420px]">
            <Logo className="mb-3 h-[75px] w-[132px]" />
            <p className="mb-3 font-semibold" style={{ color: "var(--fg)" }}>@lyds_off12</p>
            <p className="text-[15px] leading-relaxed" style={{ color: "var(--muted)" }}>
              {fr
                ? "Lyd's fait comprendre ce qu'on entend souvent sur les femmes, fait découvrir celles que l'histoire a laissées dans l'ombre et aide à distinguer les faits des idées reçues. Depuis le Bénin, avec une place importante pour l'Afrique francophone."
                : "Lyd's explains what we often hear about women, brings to light those history left in the shadows and helps tell facts from misconceptions. From Benin, with a strong focus on French-speaking Africa."}
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <a
                href="https://www.instagram.com/lyds_off12"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-14 items-center gap-3 rounded-full py-0 pl-2.5 pr-6 text-sm font-semibold no-underline"
                style={{ background: "var(--glass-bg)", border: "1px solid var(--glass-border)", color: "var(--fg)" }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={media.logos.instagram} alt="" className="h-[38px] w-[38px]" />
                {fr ? "Voir sur Instagram" : "See on Instagram"}
                <ExternalLinkIcon size={14} />
              </a>
              <a
                href="https://www.tiktok.com/@lyds_off12"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-14 items-center gap-3 rounded-full py-0 pl-2.5 pr-6 text-sm font-semibold no-underline"
                style={{ background: "var(--glass-bg)", border: "1px solid var(--glass-border)", color: "var(--fg)" }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={media.logos.tiktok} alt="" className="h-[38px] w-[38px]" />
                {fr ? "Voir sur TikTok" : "See on TikTok"}
                <ExternalLinkIcon size={14} />
              </a>
            </div>
          </div>
          <div className="min-w-0 flex-1 basis-[300px]">
            <div className="grid grid-cols-2 gap-3">
              {FACTS.map((f) => (
                <div key={t(f.small)} className="rounded-[20px] px-[18px] py-4" style={{ background: "var(--glass-bg)", border: "1px solid var(--glass-border)" }}>
                  <p className="font-display text-xl font-extrabold" style={{ color: "var(--fg)" }}>{t(f.big)}</p>
                  <p className="text-sm" style={{ color: "var(--muted)" }}>{t(f.small)}</p>
                </div>
              ))}
            </div>
          </div>
        </GlassPanel>

        <div className="mt-8">
          <ToolsAccordion tools={TOOLS} label={{ fr: "Mes outils", en: "My tools" }} />
        </div>

        <Eyebrow>
          <span className="mt-4 block">{fr ? "LES RUBRIQUES" : "THE SERIES"}</span>
        </Eyebrow>
        <div className="flex flex-wrap gap-2">
          {rubriques.map((r, i) => (
            <span
              key={r}
              className="chip-hover relative inline-flex min-h-[44px] items-center rounded-full px-5 text-xs font-semibold tracking-[.1em]"
              style={{ ...floatAnimation(i * 0.45), color: "var(--fg)", background: "var(--glass-bg)", border: "1.5px solid var(--glass-border)" }}
            >
              {r}
            </span>
          ))}
        </div>

        <Eyebrow>
          <span className="mt-10 block">{fr ? "QUELQUES VIDÉOS" : "A FEW VIDEOS"}</span>
        </Eyebrow>
        <div className="grid gap-7" style={{ gridTemplateColumns: "repeat(auto-fill, minmax(min(100%,280px),1fr))" }}>
          {VIDEOS.map((v) => (
            <figure key={v.title.fr} className="m-0 max-w-[300px]">
              <VideoPhoneFrame src={v.video.src} poster={v.video.poster} />
              <figcaption className="mt-3 text-center">
                <span className="mb-1.5 inline-block rounded-full px-3 py-1 text-[11px] font-semibold tracking-[.12em] text-[#FBF6F1]" style={{ background: v.pillBg }}>
                  {t(v.pill)}
                </span>
                <p className="font-display text-xl font-extrabold" style={{ color: "var(--fg)" }}>{t(v.title)}</p>
                <p className="text-sm" style={{ color: "var(--muted)" }}>{t(v.desc)}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </Container>
    </PageShell>
  );
}
