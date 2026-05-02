"use client";

import { usePathname } from "next/navigation";
import { siteConfig } from "@/lib/seo";
import { getLocaleFromPathname } from "@/lib/i18n";

const clientId = siteConfig.adsenseClientId;

type AdProps = {
  slot?: string;
  className?: string;
  label?: string;
};

function useAdLabel(label?: string) {
  const pathname = usePathname() || "/";
  const locale = getLocaleFromPathname(pathname);
  return label ?? (locale === "es" ? "Publicidad" : "Advertisement");
}

function DevPlaceholder({ className = "", label }: AdProps) {
  const resolvedLabel = useAdLabel(label);
  if (process.env.NODE_ENV !== "development") return null;
  return (
    <div
      className={`flex min-h-28 items-center justify-center rounded-xl border border-dashed border-slate-300 bg-slate-50 text-center text-xs font-semibold uppercase tracking-[0.18em] text-slate-400 ${className}`}
      aria-label={resolvedLabel}
    >
      {resolvedLabel}
    </div>
  );
}

export function AdPlaceholder({ className = "", label }: AdProps) {
  return <DevPlaceholder className={className} label={label} />;
}

export function ResponsiveAdSlot({ slot, className = "", label }: AdProps) {
  const resolvedLabel = useAdLabel(label);
  if (!clientId) return <DevPlaceholder className={className} label={label} />;

  return (
    <div className={`rounded-xl border border-slate-200 bg-white p-3 ${className}`}>
      <p className="mb-2 text-center text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-slate-400">
        {resolvedLabel}
      </p>
      <ins
        className="adsbygoogle block"
        style={{ display: "block" }}
        data-ad-client={clientId}
        data-ad-slot={slot ?? "0000000000"}
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
    </div>
  );
}

export function SidebarAd() {
  return (
    <aside className="hidden lg:block">
      <div className="sticky top-24">
        <ResponsiveAdSlot slot="1111111111" className="min-h-[280px]" />
      </div>
    </aside>
  );
}

export function InContentAd() {
  return <ResponsiveAdSlot slot="2222222222" className="my-10 min-h-36" />;
}
