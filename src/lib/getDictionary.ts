import type en from "@/dictionaries/en.json";

export type Dictionary = typeof en;
export type Lang = "en" | "es";

export const langs: Lang[] = ["en", "es"];

const dictionaries = {
  en: () => import("@/dictionaries/en.json").then((m) => m.default),
  es: () => import("@/dictionaries/es.json").then((m) => m.default),
};

export function toLang(raw: string): Lang {
  return raw === "es" ? "es" : "en";
}

export async function getDictionary(lang: string): Promise<Dictionary> {
  const key = toLang(lang);
  return dictionaries[key]?.() ?? dictionaries.en();
}
