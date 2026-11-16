export type Lang = "fr" | "en";

export type Bilingual<T = string> = {
  fr: T;
  en: T;
};

export function pick<T>(lang: Lang, value: Bilingual<T>): T {
  return lang === "fr" ? value.fr : value.en;
}
