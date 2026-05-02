import en from "@/dictionaries/en.json";
import es from "@/dictionaries/es.json";
import { defaultLocale, type Locale } from "./i18n";

const dictionaries = {
  en,
  es,
} as const;

export function getDictionary(locale: Locale = defaultLocale) {
  return dictionaries[locale] ?? dictionaries[defaultLocale];
}
