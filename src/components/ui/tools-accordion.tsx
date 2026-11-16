"use client";

import { useState } from "react";
import { useSite } from "@/context/site-provider";
import type { Bilingual } from "@/lib/i18n";

export type Tool = {
  name: string;
  role: Bilingual;
  logo?: string;
  gradient: string;
  icon?: "wave" | "phone" | "mic";
};

function ToolIcon({ icon }: { icon: "wave" | "phone" | "mic" }) {
  if (icon === "wave") {
    return (
      <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden>
        <path d="M3 12h2v4H3zM7 8h2v10H7zM11 4h2v16h-2zM15 8h2v10h-2zM19 12h2v4h-2z" />
      </svg>
    );
  }
  if (icon === "phone") {
    return (
      <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
        <rect x="6" y="2" width="12" height="20" rx="2" />
        <path d="M11 18h2" strokeLinecap="round" />
      </svg>
    );
  }
  return (
    <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden>
      <path d="M12 19v3M8 22h8" />
      <rect x="9" y="2" width="6" height="12" rx="3" />
      <path d="M5 10a7 7 0 0 0 14 0" />
    </svg>
  );
}

export function ToolCard({ tool, index }: { tool: Tool; index: number }) {
  const { fr } = useSite();
  return (
    <div
      className="flex min-w-0 flex-1 basis-[240px] items-center gap-4 rounded-[22px] py-3.5 pl-3.5 pr-5"
      style={{
        background: "var(--glass-bg)",
        border: "1.5px solid var(--glass-border)",
        maxWidth: 320,
        opacity: 1,
        animation: `toolSlideIn .5s ease ${0.12 + index * 0.1}s both`,
      }}
    >
      <div
        className="flex h-16 w-16 shrink-0 items-center justify-center rounded-[20px]"
        style={{ background: tool.gradient }}
      >
        {tool.logo ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={tool.logo} alt={fr ? `Logo ${tool.name}` : `Logo of ${tool.name}`} className="h-[46px] w-[46px] object-contain" />
        ) : (
          <span style={{ color: "var(--fg)" }}>{tool.icon && <ToolIcon icon={tool.icon} />}</span>
        )}
      </div>
      <div>
        <p className="font-semibold leading-tight" style={{ color: "var(--fg)" }}>{tool.name}</p>
        <p className="text-sm" style={{ color: "var(--muted)" }}>{fr ? tool.role.fr : tool.role.en}</p>
      </div>
    </div>
  );
}

export function ToolsAccordion({ tools, label }: { tools: Tool[]; label: Bilingual }) {
  const { fr } = useSite();
  const [open, setOpen] = useState(false);

  return (
    <div className="mb-8">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="chip-hover inline-flex min-h-[56px] items-center gap-3 rounded-full px-5 pr-6 text-[15px] font-semibold backdrop-blur-xl"
        style={{
          background: "var(--glass-bg)",
          border: "1.5px solid var(--glass-border)",
          boxShadow: "var(--glass-shadow)",
          color: "var(--fg)",
        }}
      >
        <span
          className="flex h-10 w-10 items-center justify-center rounded-full"
          style={{ background: "linear-gradient(160deg, rgba(142,91,181,.35), rgba(224,127,156,.35))" }}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" aria-hidden>
            <circle cx="11" cy="11" r="7" />
            <path d="M21 21l-4.3-4.3" />
          </svg>
        </span>
        {fr ? label.fr : label.en}
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.3"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden
          className="transition-transform duration-300"
          style={{ transform: open ? "rotate(180deg)" : "none" }}
        >
          <path d="M6 9l6 6 6-6" />
        </svg>
      </button>

      <div
        className="overflow-hidden transition-[max-height] duration-500"
        style={{ maxHeight: open ? 640 : 0 }}
      >
        <div className="mt-4 flex flex-wrap gap-4">
          {tools.map((tool, i) => (
            <ToolCard key={tool.name} tool={tool} index={i} />
          ))}
        </div>
      </div>
    </div>
  );
}
