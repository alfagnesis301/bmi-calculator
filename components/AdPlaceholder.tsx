"use client";

import { useEffect, useState } from "react";
import Script from "next/script";

const clientId = process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID;

function useAdConsent() {
  const [consented, setConsented] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("cookie-consent") === "accepted") {
      setConsented(true);
    }
    function onAccept() { setConsented(true); }
    window.addEventListener("cookie-consent-accepted", onAccept);
    return () => window.removeEventListener("cookie-consent-accepted", onAccept);
  }, []);

  return consented;
}

type AdProps = {
  slot?: string;
  className?: string;
  label?: string;
};

function DevPlaceholder({ className = "", label = "Advertisement" }: AdProps) {
  if (process.env.NODE_ENV !== "development") return null;
  return (
    <div
      className={`flex min-h-28 items-center justify-center rounded-xl border border-dashed border-slate-300 bg-slate-50 text-center text-xs font-semibold uppercase tracking-[0.18em] text-slate-400 ${className}`}
      aria-label={label}
    >
      {label}
    </div>
  );
}

export function AdPlaceholder({ className = "", label = "Advertisement" }: AdProps) {
  return <DevPlaceholder className={className} label={label} />;
}

export function ResponsiveAdSlot({ slot, className = "", label = "Advertisement" }: AdProps) {
  const consented = useAdConsent();

  if (!clientId) return <DevPlaceholder className={className} label={label} />;
  if (!consented) return null;

  return (
    <div className={`rounded-xl border border-slate-200 bg-white p-3 ${className}`}>
      <Script
        id="adsense-init"
        strategy="afterInteractive"
        src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${clientId}`}
        crossOrigin="anonymous"
      />
      <p className="mb-2 text-center text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-slate-400">
        {label}
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
