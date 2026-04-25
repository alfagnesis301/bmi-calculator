import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | BMI Calculator",
  description: "About this BMI Calculator website."
};

export default function AboutPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-line sm:p-8">
        <h1 className="text-4xl font-black text-ink">About BMI Calculator</h1>
        <div className="mt-8 space-y-6 leading-8 text-slate-700">
          <p>
            BMI Checks is an independent utility website designed to make body mass index easier
            to calculate and understand. The tool supports metric and US units and presents the
            result with clear adult categories, healthy range context, and plain-language education.
          </p>
          <p>
            The goal is to provide a fast, accessible, mobile-friendly calculator with responsible
            health information. BMI can be useful as a screening measure, but it does not diagnose
            disease or replace professional advice.
          </p>
          <p>
            This page should be edited before launch with accurate details about Ricardo Diaz, the
            website mission, editorial process, update schedule, and contact route for corrections.
          </p>
        </div>
      </div>
    </main>
  );
}
