"use client";

import { useSite } from "@/context/site-provider";
import type { Bilingual } from "@/lib/i18n";

export type FilterOption = {
  key: string;
  label: Bilingual;
  count: number;
};

export function FilterBar({
  options,
  active,
  onChange,
  groupLabel,
}: {
  options: FilterOption[];
  active: string;
  onChange: (key: string) => void;
  groupLabel: Bilingual;
}) {
  const { fr, dark } = useSite();

  return (
    <div role="group" aria-label={fr ? groupLabel.fr : groupLabel.en} className="flex flex-wrap gap-2.5">
      {options.map((opt) => {
        const isActive = opt.key === active;
        return (
          <button
            key={opt.key}
            type="button"
            onClick={() => onChange(opt.key)}
            className="chip-hover inline-flex min-h-[44px] items-center gap-2 rounded-full px-[18px] text-[13px] font-semibold backdrop-blur-xl"
            style={{
              color: isActive ? (dark ? "#2A1626" : "#FBF6F1") : "var(--fg)",
              background: isActive
                ? dark
                  ? "linear-gradient(180deg, #FBF6F1, #EADFD6)"
                  : "linear-gradient(180deg, #3D2238, #2A1626)"
                : "var(--glass-bg)",
              border: "1.5px solid var(--glass-border)",
              boxShadow: isActive ? "0 6px 16px rgba(42,22,38,.28)" : "none",
            }}
          >
            {fr ? opt.label.fr : opt.label.en}
            <span className="opacity-70">{opt.count}</span>
          </button>
        );
      })}
    </div>
  );
}
