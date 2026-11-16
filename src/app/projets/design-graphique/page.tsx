"use client";

import { useMemo, useState } from "react";
import { BackLink, Eyebrow, GlassPanel, Sparkle } from "@/components/ui/primitives";
import { Container, PageShell } from "@/components/chrome/page-shell";
import { FilterBar } from "@/components/ui/filter-bar";
import { PanelLightbox } from "@/components/ui/lightbox";
import { ProjectCard } from "@/components/ui/project-card";
import type { Tool } from "@/components/ui/tools-accordion";
import { ToolsAccordion } from "@/components/ui/tools-accordion";
import { useSite } from "@/context/site-provider";
import type { Bilingual } from "@/lib/i18n";
import { media } from "@/lib/media";

type ClientKey = "lyds" | "stage" | "oismp" | "oc" | "aprenx" | "pharma";

const CLIENT_LABEL: Record<ClientKey, Bilingual> = {
  lyds: { fr: "Lyd's · projet perso", en: "Lyd's · personal project" },
  stage: { fr: "Stage CodeLab", en: "CodeLab internship" },
  oismp: { fr: "OISMP", en: "OISMP" },
  oc: { fr: "OC Digital · proposition", en: "OC Digital · proposal" },
  aprenx: { fr: "AprenX · proposition", en: "AprenX · proposal" },
  pharma: { fr: "Pharmacie locale", en: "Local pharmacy" },
};

type Project = {
  id: string;
  client: ClientKey;
  imgs: string[];
  top?: boolean;
  dark?: boolean;
  contain?: boolean;
  title: Bilingual;
  type: Bilingual;
  desc: Bilingual;
};

const PROJECTS: Project[] = [
  {
    id: "lyds",
    client: "lyds",
    top: true,
    imgs: media.designGraphique.lyds,
    title: { fr: "Charte graphique Lyd's", en: "Lyd's brand guidelines" },
    type: { fr: "Identité visuelle", en: "Visual identity" },
    desc: {
      fr: "Identité visuelle complète de Lyd's, ma page de créatrice de contenu : nom et logo, palette de couleurs, typographies, mascotte et ses 40 expressions, habillage des vidéos et couvertures.",
      en: "Complete visual identity for Lyd's, my content creator page: name and logo, colour palette, typography, the mascot and her 40 expressions, video overlays and covers.",
    },
  },
  {
    id: "macbook",
    client: "stage",
    imgs: media.designGraphique.macbook,
    title: { fr: "MacBook Pro M1 Pro", en: "MacBook Pro M1 Pro" },
    type: { fr: "Visuel produit", en: "Product visual" },
    desc: {
      fr: "Visuel de vente réalisé pendant mon stage, à la demande de mon responsable : mise en avant d'un MacBook Pro d'occasion, de ses points forts et de ses caractéristiques.",
      en: "Sales visual made during my internship at my manager's request: showcasing a used MacBook Pro, its strengths and its specs.",
    },
  },
  {
    id: "jal",
    client: "oismp",
    imgs: media.designGraphique.jal,
    title: { fr: "La jalousie face à la réussite d'un autre", en: "Jealousy towards someone else's success" },
    type: { fr: "Carrousel Instagram", en: "Instagram carousel" },
    desc: {
      fr: "Carrousel de sensibilisation sur la jalousie et la comparaison, réalisé pour l'Organisation Internationale pour la Santé Mentale et pour la Paix (OISMP), où je suis graphiste bénévole.",
      en: "Awareness carousel about jealousy and comparison, made for the International Organisation for Mental Health and Peace (OISMP), where I volunteer as a graphic designer.",
    },
  },
  {
    id: "brave",
    client: "oismp",
    imgs: media.designGraphique.brave,
    title: { fr: "Je suis brave — les partenaires", en: "Je suis brave — partners" },
    type: { fr: "Affiche événement", en: "Event poster" },
    desc: {
      fr: "Affiche de la marche pour la santé mentale « Je suis brave » de l'OISMP, présentant les institutions et les partenaires qui soutiennent l'événement.",
      en: 'Poster for OISMP\'s "Je suis brave" mental health march, presenting the institutions and partners supporting the event.',
    },
  },
  {
    id: "bravev",
    client: "oismp",
    imgs: media.designGraphique.bravev,
    dark: true,
    contain: true,
    title: { fr: "Je suis brave — habillage vidéo", en: "Je suis brave — video overlay" },
    type: { fr: "Habillage vidéo vertical 9:16", en: "Vertical 9:16 video overlay" },
    desc: {
      fr: "Cadre vidéo vertical pour la marche « Je suis brave » : logos, réseaux de l'OISMP et bandeau des partenaires, prêt à poser sur les vidéos de l'événement.",
      en: 'Vertical video frame for the "Je suis brave" march: logos, OISMP socials and a partners banner, ready to place over the event videos.',
    },
  },
  {
    id: "studio",
    client: "oc",
    imgs: media.designGraphique.studio,
    title: { fr: "Le Studio est ouvert", en: "The Studio is open" },
    type: { fr: "Proposition d'affiche", en: "Poster proposal" },
    desc: {
      fr: "Proposition d'affiche annonçant l'ouverture du studio photo d'OC Digital, studio créatif et agence de marketing digital.",
      en: "Poster proposal announcing the opening of OC Digital's photo studio, a creative studio and digital marketing agency.",
    },
  },
  {
    id: "services",
    client: "oc",
    imgs: media.designGraphique.services,
    title: { fr: "Nos services", en: "Our services" },
    type: { fr: "Proposition d'affiche", en: "Poster proposal" },
    desc: {
      fr: "Proposition d'affiche présentant les trois pôles de services d'OC Digital : stratégie et conseil, image et studio, contenu et communauté.",
      en: "Poster proposal presenting OC Digital's three service areas: strategy and consulting, image and studio, content and community.",
    },
  },
  {
    id: "bilan",
    client: "aprenx",
    imgs: media.designGraphique.bilan,
    title: { fr: "Bilan de la cohorte 3", en: "Cohort 3 results" },
    type: { fr: "Proposition de visuel", en: "Visual proposal" },
    desc: {
      fr: "Proposition de visuel de bilan pour AprenX : les chiffres clés de la cohorte 3, un témoignage d'apprenante et l'ouverture des inscriptions de la cohorte 4.",
      en: "Results visual proposal for AprenX: key figures from cohort 3, a learner testimonial and the opening of cohort 4 registrations.",
    },
  },
  {
    id: "ia",
    client: "aprenx",
    imgs: media.designGraphique.ia,
    title: { fr: "Maîtrisez l'IA appliquée", en: "Master applied AI" },
    type: { fr: "Proposition de visuel", en: "Visual proposal" },
    desc: {
      fr: "Proposition de visuel présentant les compétences pratiques travaillées pendant la formation AprenX.",
      en: "Visual proposal presenting the practical skills covered in the AprenX training.",
    },
  },
  {
    id: "peau",
    client: "pharma",
    imgs: media.designGraphique.peau,
    title: { fr: "Préparez votre peau", en: "Get your skin ready" },
    type: { fr: "Visuel produits", en: "Product visual" },
    desc: {
      fr: "Visuel produits réalisé pour une pharmacie locale, dans le cadre de ma mission de community manager.",
      en: "Product visual made for a local pharmacy, as part of my community manager role there.",
    },
  },
  {
    id: "dentitor",
    client: "pharma",
    imgs: media.designGraphique.dentitor,
    title: { fr: "Dentitor", en: "Dentitor" },
    type: { fr: "Visuel produit", en: "Product visual" },
    desc: {
      fr: "Mise en avant d'un savon pour bébé, avec ses bénéfices et son prix, pour la même pharmacie.",
      en: "Showcasing a baby soap with its benefits and price, for the same pharmacy.",
    },
  },
];

const TOOLS: Tool[] = [
  { name: "Canva", role: { fr: "Visuels & mises en page", en: "Visuals & layouts" }, logo: media.logos.canva, gradient: "linear-gradient(160deg, rgba(0,196,204,.35), rgba(125,42,232,.35))" },
  { name: "Photoshop", role: { fr: "Retouche & photomontage", en: "Retouching & compositing" }, logo: media.logos.photoshop, gradient: "linear-gradient(160deg, rgba(49,168,255,.35), rgba(0,30,54,.35))" },
  { name: "Illustrator", role: { fr: "Vectoriel & illustrations", en: "Vector & illustration" }, logo: media.logos.illustrator, gradient: "linear-gradient(160deg, rgba(255,154,0,.35), rgba(51,0,0,.35))" },
];

export default function DesignGraphiquePage() {
  const { fr, t } = useSite();
  const [filter, setFilter] = useState<"all" | ClientKey>("all");
  const [open, setOpen] = useState<string | null>(null);
  const [idx, setIdx] = useState(0);

  const filtered = useMemo(
    () => (filter === "all" ? PROJECTS : PROJECTS.filter((p) => p.client === filter)),
    [filter]
  );

  const filterOptions = useMemo(() => {
    const keys: ClientKey[] = ["lyds", "stage", "oismp", "oc", "aprenx", "pharma"];
    return [
      { key: "all", label: { fr: "Tous", en: "All" }, count: PROJECTS.length },
      ...keys.map((k) => ({ key: k, label: CLIENT_LABEL[k], count: PROJECTS.filter((p) => p.client === k).length })),
    ];
  }, []);

  const current = PROJECTS.find((p) => p.id === open) ?? null;
  const multi = (current?.imgs.length ?? 0) > 1;

  return (
    <PageShell>
      <Container>
        <BackLink href="/projets">{fr ? "Tous les projets" : "All projects"}</BackLink>

        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <Eyebrow>{fr ? "PROJETS · 03" : "PROJECTS · 03"}</Eyebrow>
            <h1 className="font-display font-extrabold leading-[0.95] tracking-[-.04em]" style={{ fontSize: "clamp(44px,6vw,72px)" }}>
              {fr ? "Design graphique" : "Graphic design"}
            </h1>
          </div>
          <p className="max-w-[440px] leading-relaxed" style={{ fontSize: "clamp(15px,1.3vw,17px)", color: "var(--muted)" }}>
            {fr
              ? "Identité visuelle, affiches, carrousels et visuels pour les réseaux sociaux, réalisés pour ma propre marque, des associations, des entreprises et des commerces. Clique sur un projet pour le voir en grand."
              : "Visual identity, posters, carousels and social media visuals made for my own brand, organisations, companies and local shops. Click a project to see it full size."}
          </p>
        </div>

        <GlassPanel radius={999} className="mt-6 inline-flex items-center gap-2 px-5 py-2.5 text-sm" style={{ color: "var(--fg)" }}>
          <Sparkle size={16} />
          {fr ? "Une sélection de mes réalisations, d'autres arrivent bientôt" : "A selection of my work, more coming soon"}
        </GlassPanel>

        <div className="mt-8">
          <ToolsAccordion tools={TOOLS} label={{ fr: "Mes outils", en: "My tools" }} />
        </div>

        <FilterBar
          options={filterOptions}
          active={filter}
          onChange={(k) => setFilter(k as typeof filter)}
          groupLabel={{ fr: "Filtrer par client", en: "Filter by client" }}
        />

        <div className="mt-8 grid gap-6" style={{ gridTemplateColumns: "repeat(auto-fill, minmax(min(100%,290px),1fr))" }}>
          {filtered.map((p) => (
            <ProjectCard
              key={p.id}
              cover={p.imgs[0]}
              badge={CLIENT_LABEL[p.client][fr ? "fr" : "en"]}
              title={t(p.title)}
              subtitle={p.imgs.length > 1 ? `${t(p.type)} · ${p.imgs.length} ${fr ? "visuels" : "visuals"}` : t(p.type)}
              count={p.imgs.length}
              objectPosition={p.top ? "50% 0%" : "50% 50%"}
              contain={p.contain}
              darkBg={p.dark}
              onClick={() => {
                setOpen(p.id);
                setIdx(0);
              }}
            />
          ))}
        </div>
      </Container>

      {current && (
        <PanelLightbox
          open={!!current}
          onClose={() => setOpen(null)}
          onPrev={() => setIdx((i) => (i - 1 + current.imgs.length) % current.imgs.length)}
          onNext={() => setIdx((i) => (i + 1) % current.imgs.length)}
          multi={multi}
          index={idx}
          total={current.imgs.length}
          src={current.imgs[idx]}
          alt={`${t(current.title)}${multi ? ` — ${idx + 1}/${current.imgs.length}` : ""}`}
          badge={CLIENT_LABEL[current.client][fr ? "fr" : "en"]}
          title={t(current.title)}
          subtitle={t(current.type)}
          description={t(current.desc)}
        />
      )}
    </PageShell>
  );
}
