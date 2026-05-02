export const locales = ["en", "es"] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";

export const localeNames: Record<Locale, string> = {
  en: "English",
  es: "Español",
};

export const localeLabels: Record<Locale, string> = {
  en: "EN",
  es: "ES",
};

export function isValidLocale(locale: string): locale is Locale {
  return locales.includes(locale as Locale);
}

export function getLocaleFromPathname(pathname: string): Locale {
  return pathname === "/es" || pathname.startsWith("/es/") ? "es" : "en";
}

export function stripLocale(pathname: string): string {
  if (pathname === "/es") return "/";
  if (pathname.startsWith("/es/")) return pathname.slice(3) || "/";
  return pathname || "/";
}

export function localizedPath(pathname: string, locale: Locale): string {
  const cleanPath = stripLocale(pathname);

  if (locale === defaultLocale) {
    return cleanPath;
  }

  return cleanPath === "/" ? "/es" : `/es${cleanPath}`;
}

export function alternateUrls(pathname: string, baseUrl = "https://bmichecks.com") {
  const cleanPath = stripLocale(pathname);
  return {
    en: `${baseUrl}${localizedPath(cleanPath, "en")}`,
    es: `${baseUrl}${localizedPath(cleanPath, "es")}`,
    "x-default": `${baseUrl}${localizedPath(cleanPath, "en")}`,
  };
}

export function toOgLocale(locale: Locale) {
  return locale === "es" ? "es_ES" : "en_US";
}
