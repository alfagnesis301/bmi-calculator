"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { getDictionary } from "@/lib/getDictionary";
import { getLocaleFromPathname, localizedPath } from "@/lib/i18n";

export function Footer() {
  const pathname = usePathname() || "/";
  const locale = getLocaleFromPathname(pathname);
  const t = getDictionary(locale);

  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto grid max-w-6xl gap-6 px-4 py-10 text-sm text-muted sm:px-6 md:grid-cols-[1fr_auto] lg:px-8">
        <div>
          <p className="font-bold text-ink">{t.site.name}</p>
          <p className="mt-2 max-w-2xl leading-6">
            {t.footer.description}
          </p>
        </div>
        <nav className="flex flex-wrap gap-4 font-semibold" aria-label="Footer">
          <Link className="hover:text-ink" href={localizedPath("/about", locale)}>{t.footer.about}</Link>
          <Link className="hover:text-ink" href={localizedPath("/editorial-policy", locale)}>{t.footer.editorialPolicy}</Link>
          <Link className="hover:text-ink" href={localizedPath("/privacy-policy", locale)}>{t.footer.privacy}</Link>
          <Link className="hover:text-ink" href={localizedPath("/terms", locale)}>{t.footer.terms}</Link>
          <Link className="hover:text-ink" href={localizedPath("/contact", locale)}>{t.footer.contact}</Link>
        </nav>
      </div>
    </footer>
  );
}
