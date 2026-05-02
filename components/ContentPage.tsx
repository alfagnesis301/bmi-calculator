import type { ReactNode } from "react";

type ContentSection = {
  title: string;
  body: ReactNode;
};

type ContentPageProps = {
  title: string;
  eyebrow?: string;
  intro?: string;
  sections: ContentSection[];
  children?: ReactNode;
};

export function ContentPage({ title, eyebrow, intro, sections, children }: ContentPageProps) {
  return (
    <main className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
      <article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-line sm:p-10">
        {eyebrow ? <p className="text-sm font-semibold text-muted">{eyebrow}</p> : null}
        <h1 className="mt-2 text-4xl font-black leading-tight text-ink">{title}</h1>
        {intro ? <p className="mt-5 leading-8 text-slate-700">{intro}</p> : null}

        <div className="mt-8 space-y-8 leading-8 text-slate-700">
          {sections.map((section) => (
            <section key={section.title}>
              <h2 className="text-2xl font-black text-ink">{section.title}</h2>
              <div className="mt-3 space-y-3">{section.body}</div>
            </section>
          ))}
          {children}
        </div>
      </article>
    </main>
  );
}
