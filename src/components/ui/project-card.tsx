"use client";

export function ProjectCard({
  cover,
  badge,
  title,
  subtitle,
  count,
  objectPosition = "50% 50%",
  contain = false,
  darkBg = false,
  onClick,
}: {
  cover: string;
  badge?: string;
  title: string;
  subtitle: string;
  count?: number;
  objectPosition?: string;
  contain?: boolean;
  darkBg?: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="proj-hover block w-full rounded-[28px] p-2.5 pb-[18px] text-left"
      style={{ background: "var(--glass-bg)", border: "1.5px solid var(--glass-border)" }}
    >
      <div
        className="proj-thumb relative overflow-hidden rounded-[20px]"
        style={{ aspectRatio: "4/5", background: darkBg ? "linear-gradient(160deg, #0B6FB8, #2A1626)" : "var(--stripe)" }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={cover}
          alt=""
          className="h-full w-full"
          style={{ objectFit: contain ? "contain" : "cover", objectPosition }}
        />
        {badge && (
          <span
            className="absolute left-2.5 top-2.5 rounded-full px-3 py-1 text-[11px] font-semibold text-white"
            style={{ background: "rgba(42,22,38,.75)", backdropFilter: "blur(6px)" }}
          >
            {badge}
          </span>
        )}
        {count && count > 1 && (
          <span
            className="absolute right-2.5 top-2.5 flex items-center gap-1 rounded-full px-2.5 py-1 text-[11px] font-semibold text-white"
            style={{ background: "rgba(42,22,38,.75)", backdropFilter: "blur(6px)" }}
          >
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
              <rect x="3" y="3" width="14" height="14" rx="2" />
              <path d="M7 21h14V7" />
            </svg>
            {count}
          </span>
        )}
      </div>
      <p className="font-display mt-3 text-[21px] font-extrabold leading-[1.15] tracking-[-.02em]" style={{ color: "var(--fg)" }}>
        {title}
      </p>
      <p className="text-sm" style={{ color: "var(--muted)" }}>
        {subtitle}
      </p>
    </button>
  );
}
