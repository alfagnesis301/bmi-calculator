"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { getDictionary } from "@/lib/getDictionary";
import { getLocaleFromPathname, localizedPath } from "@/lib/i18n";
import { LanguageSwitcher } from "./LanguageSwitcher";

export function Header() {
  const pathname = usePathname() || "/";
  const locale = getLocaleFromPathname(pathname);
  const t = getDictionary(locale);
  const home = localizedPath("/", locale);
  const tools = localizedPath("/health-calculators", locale);
  const blog = localizedPath("/blog", locale);
  const contact = localizedPath("/contact", locale);

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-4 py-3 sm:px-6 lg:px-8">
        <Link href={home} className="text-lg font-black text-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-teal-600">
          {t.site.name}
        </Link>
        <div className="flex items-center gap-3">
          <nav className="hidden items-center gap-5 text-sm font-semibold text-muted md:flex" aria-label="Primary">
            <Link className="hover:text-ink" href={`${home}#calculator`}>{t.nav.calculator}</Link>
            <Link className="hover:text-ink" href={`${home}#learn`}>{t.nav.learn}</Link>
            <Link className="hover:text-ink" href={`${home}#faq`}>{t.nav.faq}</Link>
            <Link className="hover:text-ink" href={tools}>{t.nav.tools}</Link>
            <Link className="hover:text-ink" href={blog}>{t.nav.blog}</Link>
            <Link className="hover:text-ink" href={contact}>{t.nav.contact}</Link>
          </nav>
          <LanguageSwitcher />
        </div>
      </div>
    </header>
  );
}
