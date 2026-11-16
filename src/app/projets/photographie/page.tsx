"use client";

import { useMemo, useState } from "react";
import { BackLink, Eyebrow, GlassPanel, Sparkle } from "@/components/ui/primitives";
import { Container, PageShell } from "@/components/chrome/page-shell";
import { FilterBar } from "@/components/ui/filter-bar";
import { CaptionLightbox } from "@/components/ui/lightbox";
import type { Tool } from "@/components/ui/tools-accordion";
import { ToolsAccordion } from "@/components/ui/tools-accordion";
import { useSite } from "@/context/site-provider";
import type { Bilingual } from "@/lib/i18n";
import { media } from "@/lib/media";

type SeriesKey = "dip" | "indaba" | "sout" | "perso";

const SERIES: Record<SeriesKey, { label: Bilingual; desc: Bilingual; imgs: string[] }> = {
  dip: {
    label: { fr: "Remise de diplômes", en: "Graduation ceremony" },
    desc: {
      fr: "Couverture photo d'une cérémonie de remise de diplômes : portraits, émotions et moments forts de la journée.",
      en: "Photo coverage of a graduation ceremony: portraits, emotions and highlights of the day.",
    },
    imgs: media.photographie.dip,
  },
  indaba: {
    label: { fr: "IndabaX Bénin 2026", en: "IndabaX Benin 2026" },
    desc: {
      fr: "Reportage photo à IndabaX Bénin 2026, l'événement sur l'intelligence artificielle organisé à Sèmè City.",
      en: "Photo report at IndabaX Benin 2026, the artificial intelligence event held at Sèmè City.",
    },
    imgs: media.photographie.indaba,
  },
  sout: {
    label: { fr: "Soutenance à l'IFRI", en: "Thesis defence at IFRI" },
    desc: { fr: "Portraits pris lors d'une soutenance à l'IFRI, mon école.", en: "Portraits taken during a thesis defence at IFRI, my school." },
    imgs: media.photographie.sout,
  },
  perso: {
    label: { fr: "Projet personnel", en: "Personal work" },
    desc: { fr: "Une photo personnelle, pour le plaisir du détail et de la couleur.", en: "A personal photo, for the love of detail and colour." },
    imgs: media.photographie.perso,
  },
};

const ORDER: SeriesKey[] = ["dip", "indaba", "sout", "perso"];

const ALL_PHOTOS = ORDER.flatMap((key) => SERIES[key].imgs.map((src) => ({ src, series: key })));

const TOOLS: Tool[] = [
  { name: "Lightroom", role: { fr: "Développement & colorimétrie", en: "Editing & colour grading" }, logo: media.logos.lightroom, gradient: "linear-gradient(160deg, rgba(49,168,255,.3), rgba(0,30,54,.3))" },
  { name: "Photoshop", role: { fr: "Retouche & finitions", en: "Retouching & finishing" }, logo: media.logos.photoshop, gradient: "linear-gradient(160deg, rgba(49,168,255,.35), rgba(0,30,54,.35))" },
];

export default function PhotographiePage() {
  const { fr, t } = useSite();
  const [filter, setFilter] = useState<"all" | SeriesKey>("all");
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  const shown = useMemo(
    () => (filter === "all" ? ALL_PHOTOS : ALL_PHOTOS.filter((p) => p.series === filter)),
    [filter]
  );

  const filterOptions = useMemo(
    () => [
      { key: "all", label: { fr: "Toutes", en: "All" }, count: ALL_PHOTOS.length },
      ...ORDER.map((k) => ({ key: k, label: SERIES[k].label, count: SERIES[k].imgs.length })),
    ],
    []
  );

  const activeSeries = filter !== "all" ? SERIES[filter] : null;
  const current = openIdx !== null ? shown[openIdx] : null;

  return (
    <PageShell>
      <Container>
        <BackLink href="/projets">{fr ? "Tous les projets" : "All projects"}</BackLink>

        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <Eyebrow>{fr ? "PROJETS · 05" : "PROJECTS · 05"}</Eyebrow>
            <h1 className="font-display font-extrabold leading-[0.95] tracking-[-.04em]" style={{ fontSize: "clamp(44px,6vw,72px)" }}>
              {fr ? "Photographie" : "Photography"}
            </h1>
          </div>
          <p className="max-w-[440px] leading-relaxed" style={{ fontSize: "clamp(15px,1.3vw,17px)", color: "var(--muted)" }}>
            {fr
              ? "Événements, portraits et moments de vie : clique sur une photo pour la voir en grand."
              : "Events, portraits and moments of life: click a photo to see it full size."}
          </p>
        </div>

        <GlassPanel radius={999} className="mt-6 inline-flex items-center gap-2 px-5 py-2.5 text-sm" style={{ color: "var(--fg)" }}>
          <Sparkle size={16} />
          {fr ? "Une sélection de mes photos, d'autres arrivent bientôt" : "A selection of my photos, more coming soon"}
        </GlassPanel>

        <div className="mt-8">
          <ToolsAccordion tools={TOOLS} label={{ fr: "Mes outils", en: "My tools" }} />
        </div>

        <FilterBar
          options={filterOptions}
          active={filter}
          onChange={(k) => {
            setFilter(k as typeof filter);
            setOpenIdx(null);
          }}
          groupLabel={{ fr: "Filtrer par série", en: "Filter by series" }}
        />

        {activeSeries && <p className="mt-4 max-w-[560px] text-[15px] leading-relaxed" style={{ color: "var(--muted)" }}>{t(activeSeries.desc)}</p>}

        <div className="mt-8" style={{ columns: "3 300px", columnGap: 18 }}>
          {shown.map((photo, i) => (
            <button
              key={photo.src}
              type="button"
              onClick={() => setOpenIdx(i)}
              aria-label={fr ? `Agrandir la photo — ${t(SERIES[photo.series].label)}` : `Enlarge photo — ${t(SERIES[photo.series].label)}`}
              className="mb-[18px] block w-full rounded-[24px] p-2"
              style={{ breakInside: "avoid", background: "var(--glass-bg)", border: "1.5px solid var(--glass-border)" }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={photo.src} alt="" loading="lazy" className="w-full rounded-[17px]" />
            </button>
          ))}
        </div>
      </Container>

      {current && (
        <CaptionLightbox
          open={openIdx !== null}
          onClose={() => setOpenIdx(null)}
          onPrev={() => setOpenIdx((i) => ((i ?? 0) - 1 + shown.length) % shown.length)}
          onNext={() => setOpenIdx((i) => ((i ?? 0) + 1) % shown.length)}
          multi={shown.length > 1}
          index={openIdx ?? 0}
          total={shown.length}
          src={current.src}
          caption={t(SERIES[current.series].label)}
        />
      )}
    </PageShell>
  );
}
