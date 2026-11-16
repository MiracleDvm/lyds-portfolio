"use client";

import { useSite } from "@/context/site-provider";

export function LangSwitch() {
  const { fr, toggleLang } = useSite();
  const knobLeft = fr ? "3px" : "67px";

  return (
    <button
      type="button"
      onClick={toggleLang}
      aria-label={fr ? "Passer en anglais" : "Switch to French"}
      className="chip-hover relative h-[60px] w-[136px] shrink-0 cursor-pointer rounded-full border-[1.5px] p-0 backdrop-blur-xl transition-[background,box-shadow] duration-500 max-[480px]:[zoom:.66]"
      style={{
        background: "var(--track-bg)",
        borderColor: "var(--track-border)",
        boxShadow: "var(--track-shadow)",
      }}
    >
      <span
        aria-hidden
        className="absolute top-[3px] h-[51px] w-16 rounded-[26px] border border-white/55 transition-[left] duration-500 ease-[cubic-bezier(.34,1.56,.64,1)]"
        style={{
          left: knobLeft,
          background:
            "linear-gradient(180deg, rgba(142,91,181,.95), rgba(110,63,149,.72))",
          boxShadow:
            "0 6px 16px rgba(142,91,181,.45), inset 0 2px 3px rgba(255,255,255,.55), inset 0 -3px 6px rgba(0,0,0,.18)",
        }}
      >
        <span
          aria-hidden
          className="absolute left-3 top-[6px] h-[10px] w-[30px] -rotate-[8deg] rounded-full"
          style={{
            background:
              "linear-gradient(180deg, rgba(255,255,255,.65), rgba(255,255,255,0))",
          }}
        />
      </span>
      <span
        className="absolute left-1 top-0 flex h-[57px] w-16 items-center justify-center text-base tracking-[.04em] transition-colors duration-400"
        style={{
          fontWeight: fr ? 600 : 500,
          color: fr ? "#ffffff" : "var(--muted)",
        }}
      >
        FR
      </span>
      <span
        className="absolute left-[68px] top-0 flex h-[57px] w-16 items-center justify-center text-base tracking-[.04em] transition-colors duration-400"
        style={{
          fontWeight: fr ? 500 : 600,
          color: fr ? "var(--muted)" : "#ffffff",
        }}
      >
        EN
      </span>
    </button>
  );
}

export function ThemeSwitch() {
  const { dark, toggleTheme, fr } = useSite();
  const knobLeft = dark ? "67px" : "3px";
  const glow = dark
    ? ", inset -8px 0 16px rgba(142,91,181,.8)"
    : ", inset 8px 0 16px rgba(201,166,107,.8)";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={
        fr ? (dark ? "Passer en mode clair" : "Passer en mode sombre") : dark ? "Switch to light mode" : "Switch to dark mode"
      }
      className="chip-hover relative h-[60px] w-[136px] shrink-0 cursor-pointer rounded-full border-[1.5px] p-0 backdrop-blur-xl transition-[background,box-shadow] duration-500 max-[480px]:[zoom:.66]"
      style={{
        background: "var(--track-bg)",
        borderColor: "var(--track-border)",
        boxShadow: `var(--track-shadow)${glow}`,
      }}
    >
      <span
        aria-hidden
        className="absolute top-[3px] h-[51px] w-16 rounded-[26px] border border-white/55 transition-[left,background,box-shadow] duration-500 ease-[cubic-bezier(.34,1.56,.64,1)]"
        style={{
          left: knobLeft,
          background: dark
            ? "linear-gradient(180deg, #5E3786, #3A1E52)"
            : "linear-gradient(180deg, rgba(212,180,125,.98), rgba(185,145,80,.8))",
          boxShadow: dark
            ? "0 6px 16px rgba(142,91,181,.55), inset 0 2px 3px rgba(255,255,255,.4), inset 0 -3px 6px rgba(0,0,0,.25)"
            : "0 6px 16px rgba(201,166,107,.55), inset 0 2px 3px rgba(255,255,255,.6), inset 0 -3px 6px rgba(0,0,0,.15)",
        }}
      >
        <span
          aria-hidden
          className="absolute left-3 top-[6px] h-[10px] w-[30px] -rotate-[8deg] rounded-full"
          style={{
            background:
              "linear-gradient(180deg, rgba(255,255,255,.65), rgba(255,255,255,0))",
          }}
        />
      </span>
      <span
        aria-hidden
        className="absolute left-1 top-0 flex h-[57px] w-16 items-center justify-center transition-[color,filter] duration-400"
        style={{
          color: dark ? "#C9A66B" : "#FFFFFF",
          filter: dark ? "none" : "drop-shadow(0 0 6px rgba(255,214,140,.95))",
        }}
      >
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
          <circle cx="12" cy="12" r="4.5" />
          <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
        </svg>
      </span>
      <span
        aria-hidden
        className="absolute left-[68px] top-0 flex h-[57px] w-16 items-center justify-center transition-[color,filter] duration-400"
        style={{
          color: dark ? "#FFFFFF" : "#8E5BB5",
          filter: dark ? "drop-shadow(0 0 7px rgba(200,170,255,.95))" : "none",
        }}
      >
        <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
          <path d="M20.5 14.2A8.5 8.5 0 1 1 9.8 3.5a6.8 6.8 0 0 0 10.7 10.7z" />
        </svg>
      </span>
    </button>
  );
}
