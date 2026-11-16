"use client";

import { useEffect } from "react";
import { useSite } from "@/context/site-provider";

function CloseButton({ onClose, label }: { onClose: () => void; label: string }) {
  return (
    <button
      type="button"
      onClick={(e) => {
        e.stopPropagation();
        onClose();
      }}
      aria-label={label}
      className="fixed right-4 top-4 z-10 flex h-[52px] w-[52px] items-center justify-center rounded-full border border-white/25 bg-white/10 text-white backdrop-blur-xl hover:bg-white/20 sm:right-6 sm:top-6"
    >
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.3" strokeLinecap="round" aria-hidden>
        <path d="M6 6l12 12M18 6L6 18" />
      </svg>
    </button>
  );
}

function NavButton({ side, onClick, label }: { side: "left" | "right"; onClick: () => void; label: string }) {
  return (
    <button
      type="button"
      onClick={(e) => {
        e.stopPropagation();
        onClick();
      }}
      aria-label={label}
      className="fixed top-1/2 z-10 flex h-[52px] w-[52px] -translate-y-1/2 items-center justify-center rounded-full border border-white/25 bg-white/10 text-white backdrop-blur-xl hover:bg-white/20"
      style={{ [side]: 16 }}
    >
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <path d={side === "left" ? "M15 18l-6-6 6-6" : "M9 18l6-6-6-6"} />
      </svg>
    </button>
  );
}

export type PanelLightboxProps = {
  open: boolean;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
  multi: boolean;
  index: number;
  total: number;
  src: string;
  alt: string;
  badge?: string;
  badgeBg?: string;
  title: string;
  subtitle?: string;
  description?: string;
  highlight?: string;
};

export function PanelLightbox({
  open,
  onClose,
  onPrev,
  onNext,
  multi,
  index,
  total,
  src,
  alt,
  badge,
  badgeBg = "#7A1F3D",
  title,
  subtitle,
  description,
  highlight,
}: PanelLightboxProps) {
  const { fr } = useSite();

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (multi && e.key === "ArrowLeft") onPrev();
      if (multi && e.key === "ArrowRight") onNext();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, onClose, onPrev, onNext, multi]);

  if (!open) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ background: "rgba(42,22,38,.82)", backdropFilter: "blur(14px)", overscrollBehavior: "contain" }}
    >
      <CloseButton onClose={onClose} label={fr ? "Fermer" : "Close"} />
      {multi && <NavButton side="left" onClick={onPrev} label={fr ? "Écran précédent" : "Previous screen"} />}
      {multi && <NavButton side="right" onClick={onNext} label={fr ? "Écran suivant" : "Next screen"} />}

      <div
        onClick={(e) => e.stopPropagation()}
        className="flex max-h-[90vh] w-full max-w-[1100px] flex-col items-center gap-4 overflow-auto lg:flex-row lg:items-stretch lg:gap-9"
      >
        <div className="flex max-h-[54vh] w-full max-w-[84vw] shrink-0 items-center justify-center overflow-hidden rounded-[22px] bg-white lg:max-h-[82vh] lg:max-w-[56vw]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={src} alt={alt} className="h-auto max-h-[54vh] w-auto object-contain lg:max-h-[82vh]" />
        </div>
        <div className="w-full max-w-[520px] shrink-0 text-white lg:w-[300px]">
          {badge && (
            <span className="mb-3 inline-block rounded-full px-3 py-1 text-xs font-semibold tracking-[.08em]" style={{ background: badgeBg }}>
              {badge}
            </span>
          )}
          <h2 className="font-display text-[clamp(26px,3vw,36px)] font-extrabold leading-[1.05] tracking-[-.02em]">{title}</h2>
          {subtitle && <p className="mt-1 text-sm opacity-80">{subtitle}</p>}
          {highlight && <p className="mt-3 font-semibold" style={{ color: "#F2C6D4" }}>{highlight}</p>}
          {description && <p className="mt-3 text-[15px] leading-relaxed opacity-90">{description}</p>}
          {multi && (
            <p className="mt-4 text-sm opacity-60">
              {index + 1} / {total}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export type CaptionLightboxProps = {
  open: boolean;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
  multi: boolean;
  index: number;
  total: number;
  src: string;
  caption: string;
};

export function CaptionLightbox({ open, onClose, onPrev, onNext, multi, index, total, src, caption }: CaptionLightboxProps) {
  const { fr } = useSite();

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (multi && e.key === "ArrowLeft") onPrev();
      if (multi && e.key === "ArrowRight") onNext();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, onClose, onPrev, onNext, multi]);

  if (!open) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      onClick={onClose}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center gap-4 p-4"
      style={{ background: "rgba(20,10,18,.9)", backdropFilter: "blur(14px)", overscrollBehavior: "contain" }}
    >
      <CloseButton onClose={onClose} label={fr ? "Fermer" : "Close"} />
      {multi && <NavButton side="left" onClick={onPrev} label={fr ? "Photo précédente" : "Previous photo"} />}
      {multi && <NavButton side="right" onClick={onNext} label={fr ? "Photo suivante" : "Next photo"} />}
      <div onClick={(e) => e.stopPropagation()} className="flex max-h-[85vh] max-w-[90vw] flex-col items-center">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={src} alt="" className="max-h-[78vh] w-auto rounded-2xl object-contain shadow-2xl" />
        <p className="mt-4 text-center text-white">
          <span className="font-semibold">{caption}</span>
          {multi && <span className="opacity-70"> — {index + 1} / {total}</span>}
        </p>
      </div>
    </div>
  );
}
