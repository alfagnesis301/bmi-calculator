import Link from "next/link";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="text-lg font-black text-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-teal-600">
          BMI Calculator
        </Link>
        <nav className="hidden items-center gap-6 text-sm font-semibold text-muted sm:flex" aria-label="Primary">
          <Link className="hover:text-ink" href="/#calculator">Calculator</Link>
          <Link className="hover:text-ink" href="/#learn">Learn</Link>
          <Link className="hover:text-ink" href="/#faq">FAQ</Link>
          <Link className="hover:text-ink" href="/health-calculators">Tools</Link>
          <Link className="hover:text-ink" href="/blog">Blog</Link>
          <Link className="hover:text-ink" href="/contact">Contact</Link>
        </nav>
      </div>
    </header>
  );
}
