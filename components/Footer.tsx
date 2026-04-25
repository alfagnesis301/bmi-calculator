export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto grid max-w-6xl gap-6 px-4 py-10 text-sm text-muted sm:px-6 md:grid-cols-[1fr_auto] lg:px-8">
        <div>
          <p className="font-bold text-ink">BMI Calculator</p>
          <p className="mt-2 max-w-2xl leading-6">
            A fast body mass index calculator with original educational content. Results are for
            general information only and are not medical advice.
          </p>
        </div>
        <nav className="flex flex-wrap gap-4 font-semibold" aria-label="Footer">
          <a className="hover:text-ink" href="/about">About</a>
          <a className="hover:text-ink" href="/privacy-policy">Privacy</a>
          <a className="hover:text-ink" href="/terms">Terms</a>
          <a className="hover:text-ink" href="/contact">Contact</a>
        </nav>
      </div>
    </footer>
  );
}
