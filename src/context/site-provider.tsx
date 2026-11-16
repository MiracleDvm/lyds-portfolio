"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import type { Bilingual, Lang } from "@/lib/i18n";

type Theme = "clair" | "sombre";

type SiteContextValue = {
  theme: Theme;
  dark: boolean;
  toggleTheme: () => void;
  lang: Lang;
  fr: boolean;
  toggleLang: () => void;
  t: <T>(value: Bilingual<T>) => T;
};

const SiteContext = createContext<SiteContextValue | null>(null);

const THEME_KEY = "lyds-theme";
const LANG_KEY = "lyds-lang";

export function SiteProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>("clair");
  const [lang, setLang] = useState<Lang>("fr");

  // Reads localStorage once after mount to avoid a server/client hydration
  // mismatch (localStorage isn't available during SSR), then syncs state.
  useEffect(() => {
    try {
      const storedTheme = window.localStorage.getItem(THEME_KEY);
      if (storedTheme === "clair" || storedTheme === "sombre") {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setTheme(storedTheme);
      }
      const storedLang = window.localStorage.getItem(LANG_KEY);
      if (storedLang === "fr" || storedLang === "en") {
        setLang(storedLang);
      }
    } catch {
      // localStorage unavailable (private mode, SSR) — keep defaults
    }
  }, []);

  useEffect(() => {
    document.documentElement.dataset.theme = theme === "sombre" ? "dark" : "light";
  }, [theme]);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const toggleTheme = useCallback(() => {
    setTheme((prev) => {
      const next = prev === "sombre" ? "clair" : "sombre";
      try {
        window.localStorage.setItem(THEME_KEY, next);
      } catch {
        // ignore
      }
      return next;
    });
  }, []);

  const toggleLang = useCallback(() => {
    setLang((prev) => {
      const next: Lang = prev === "fr" ? "en" : "fr";
      try {
        window.localStorage.setItem(LANG_KEY, next);
      } catch {
        // ignore
      }
      return next;
    });
  }, []);

  const value = useMemo<SiteContextValue>(() => {
    const dark = theme === "sombre";
    const fr = lang === "fr";
    return {
      theme,
      dark,
      toggleTheme,
      lang,
      fr,
      toggleLang,
      t: <T,>(value: Bilingual<T>) => (fr ? value.fr : value.en),
    };
  }, [theme, lang, toggleTheme, toggleLang]);

  return <SiteContext.Provider value={value}>{children}</SiteContext.Provider>;
}

export function useSite() {
  const ctx = useContext(SiteContext);
  if (!ctx) {
    throw new Error("useSite must be used within a SiteProvider");
  }
  return ctx;
}
