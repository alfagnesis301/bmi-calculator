"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { getDictionary } from "@/lib/getDictionary";
import {
  getLocaleFromPathname,
  localeLabels,
  localeNames,
  localizedPath,
  locales,
  type Locale,
} from "@/lib/i18n";

export function LanguageSwitcher() {
  const pathname = usePathname() || "/";
  const activeLocale = getLocaleFromPathname(pathname);
  const dictionary = getDictionary(activeLocale);

  function rememberLanguage(locale: Locale) {
    try {
      window.localStorage.setItem("languagePreference", locale);
    } catch {
      // Ignore storage failures; navigation still works.
    }
  }

  return (
    <nav
      className="flex rounded-full border border-slate-200 bg-slate-50 p-1 text-xs font-black"
      aria-label={dictionary.site.changeLanguage}
    >
      {locales.map((locale) => {
        const isActive = locale === activeLocale;
        return (
          <Link
            key={locale}
            href={localizedPath(pathname, locale)}
            aria-label={`${dictionary.site.changeLanguage}: ${localeNames[locale]}`}
            aria-current={isActive ? "page" : undefined}
            onClick={() => rememberLanguage(locale)}
            className={`rounded-full px-3 py-2 transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600 ${
              isActive
                ? "bg-teal-700 text-white shadow-line"
                : "text-muted hover:bg-white hover:text-ink"
            }`}
          >
            {localeLabels[locale]}
          </Link>
        );
      })}
    </nav>
  );
}
