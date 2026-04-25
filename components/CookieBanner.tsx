"use client";

import { useEffect, useState } from "react";

const CONSENT_KEY = "cookie-consent";

export type ConsentValue = "accepted" | "declined" | null;

export function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(CONSENT_KEY);
    if (!stored) setVisible(true);
  }, []);

  function accept() {
    localStorage.setItem(CONSENT_KEY, "accepted");
    setVisible(false);
    window.dispatchEvent(new Event("cookie-consent-accepted"));
  }

  function decline() {
    localStorage.setItem(CONSENT_KEY, "declined");
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-label="Cookie consent"
      aria-live="polite"
      className="fixed bottom-0 left-0 right-0 z-50 border-t border-slate-200 bg-white shadow-soft"
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
        <p className="text-sm leading-7 text-slate-700">
          We use cookies to serve relevant advertisements and improve your experience. You can
          accept or decline non-essential cookies. See our{" "}
          <a href="/privacy-policy" className="font-semibold text-teal-700 underline underline-offset-4">
            Privacy Policy
          </a>{" "}
          for details.
        </p>
        <div className="flex shrink-0 gap-3">
          <button
            onClick={decline}
            className="rounded-xl border border-slate-300 px-5 py-2.5 text-sm font-bold text-slate-700 transition hover:bg-slate-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600"
          >
            Decline
          </button>
          <button
            onClick={accept}
            className="rounded-xl bg-teal-700 px-5 py-2.5 text-sm font-bold text-white transition hover:bg-teal-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600"
          >
            Accept all
          </button>
        </div>
      </div>
    </div>
  );
}
