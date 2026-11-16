"use client";

import Link from "next/link";
import type { CSSProperties, ReactNode } from "react";
import { useSite } from "@/context/site-provider";
import { floatAnimation } from "@/lib/motion";

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <p
      className="mb-2 text-[13px] font-semibold tracking-[.22em]"
      style={{ color: "var(--muted)" }}
    >
      {children}
    </p>
  );
}

export function Sparkle({ size = 22, color = "#C9A66B", className = "" }: { size?: number; color?: string; className?: string }) {
  return (
    <svg aria-hidden width={size} height={size} viewBox="0 0 24 24" className={className}>
      <path fill={color} d="M12 0C13 8 16 11 24 12C16 13 13 16 12 24C11 16 8 13 0 12C8 11 11 8 12 0Z" />
    </svg>
  );
}

export function BackLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <Link
      href={href}
      className="chip-hover mb-6 inline-flex min-h-[44px] items-center gap-2 rounded-full px-5 text-[13px] font-semibold no-underline backdrop-blur-xl"
      style={{
        background: "var(--glass-bg)",
        border: "1.5px solid var(--glass-border)",
        boxShadow: "var(--glass-shadow)",
        color: "var(--fg)",
      }}
    >
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <path d="M19 12H5M12 19l-7-7 7-7" />
      </svg>
      {children}
    </Link>
  );
}

export function FloatingChip({
  children,
  delaySeconds = 0,
  active = false,
  onClick,
  style,
}: {
  children: ReactNode;
  delaySeconds?: number;
  active?: boolean;
  onClick?: () => void;
  style?: CSSProperties;
}) {
  const { dark } = useSite();
  const Comp = onClick ? "button" : "span";
  return (
    <Comp
      type={onClick ? "button" : undefined}
      onClick={onClick}
      className="chip-hover relative inline-flex min-h-[44px] items-center overflow-hidden rounded-full px-5 text-xs font-semibold tracking-[.1em] backdrop-blur-xl"
      style={{
        ...floatAnimation(delaySeconds),
        color: active ? (dark ? "#2A1626" : "#FBF6F1") : "var(--fg)",
        background: active
          ? dark
            ? "linear-gradient(180deg, #FBF6F1, #EADFD6)"
            : "linear-gradient(180deg, #3D2238, #2A1626)"
          : dark
            ? "linear-gradient(180deg, rgba(255,255,255,.16), rgba(255,255,255,.04))"
            : "linear-gradient(180deg, rgba(255,255,255,.62), rgba(255,255,255,.18))",
        border: `1.5px solid ${active ? "rgba(255,255,255,.4)" : "var(--glass-border)"}`,
        boxShadow: dark
          ? "0 10px 22px rgba(0,0,0,.35), inset 0 1.5px 1px rgba(255,255,255,.25), inset 0 -2px 6px rgba(0,0,0,.25)"
          : "0 10px 22px rgba(42,22,38,.12), inset 0 1.5px 1px rgba(255,255,255,.95), inset 0 -2px 6px rgba(42,22,38,.06)",
        ...style,
      }}
    >
      <span aria-hidden className="absolute left-3.5 right-3.5 top-[3px] h-3 rounded-full" style={{ background: "linear-gradient(180deg, rgba(255,255,255,.55), rgba(255,255,255,0))" }} />
      <span className="relative">{children}</span>
    </Comp>
  );
}

export function GlassPanel({
  children,
  className = "",
  style,
  radius = 32,
}: {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  radius?: number;
}) {
  return (
    <div
      className={className}
      style={{
        background: "var(--glass-bg)",
        border: "1.5px solid var(--glass-border)",
        boxShadow: "var(--glass-shadow)",
        borderRadius: radius,
        backdropFilter: "blur(20px) saturate(150%)",
        WebkitBackdropFilter: "blur(20px) saturate(150%)",
        ...style,
      }}
    >
      {children}
    </div>
  );
}

export function AvailabilityPill() {
  const { fr } = useSite();
  return (
    <GlassPanel radius={999} className="inline-flex min-h-10 items-center gap-2.5 px-4 pl-3.5 text-[13px] font-semibold" style={{ color: "var(--fg)" }}>
      <span aria-hidden className="h-2.5 w-2.5 rounded-full animate-pulse-dot" style={{ background: "#2EB46E" }} />
      {fr ? "Disponible pour missions & stages" : "Available for projects & internships"}
    </GlassPanel>
  );
}

export function GradientButton({
  href,
  onClick,
  children,
  icon,
}: {
  href?: string;
  onClick?: () => void;
  children: ReactNode;
  icon?: ReactNode;
}) {
  const className =
    "cta-hover inline-flex items-center gap-3 rounded-full px-9 py-[19px] text-lg font-semibold text-white no-underline animate-shine";
  const style: CSSProperties = {
    background: "linear-gradient(100deg, #8E5BB5 0%, #B45FB0 30%, #E07F9C 55%, #F2A37E 75%, #8E5BB5 100%)",
    backgroundSize: "200% 100%",
    textShadow: "0 1px 2px rgba(42,22,38,.25)",
    border: "1.5px solid rgba(255,255,255,.55)",
    boxShadow:
      "0 14px 36px rgba(224,127,156,.45), 0 6px 16px rgba(142,91,181,.35), inset 0 2px 2px rgba(255,255,255,.5), inset 0 -3px 8px rgba(42,22,38,.18)",
  };
  if (href) {
    return (
      <Link href={href} className={className} style={style}>
        {children}
        {icon}
      </Link>
    );
  }
  return (
    <button type="button" onClick={onClick} className={className} style={style}>
      {children}
      {icon}
    </button>
  );
}

export function ArrowRightIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

export function ExternalLinkIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14 21 3" />
    </svg>
  );
}
