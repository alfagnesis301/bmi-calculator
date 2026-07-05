import { CalorieCalculator } from "./CalorieCalculator";
import { createLocalizedMetadata } from "@/lib/metadata";
import { StructuredData } from "@/components/StructuredData";

const PAGE_PATH = "/calorie-calculator";
const PAGE_TITLE = "Calorie Calculator: Daily Calorie Needs (TDEE, 2026)";
const PAGE_DESCRIPTION =
  "Free calorie calculator: find your daily calorie needs (TDEE) to maintain, lose, or gain weight, based on age, sex, height, weight, and activity level.";

export const metadata = createLocalizedMetadata({
  locale: "en",
  path: PAGE_PATH,
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  type: "article",
});

const faq = [
  {
    q: "How many calories do I need to lose weight?",
    a: "A common guideline is a deficit of 500 kcal per day below your TDEE, which is associated with approximately 0.5 kg of fat loss per week. A smaller deficit of 250 kcal/day may be more sustainable and easier to maintain over time. Avoid eating below your BMR without medical supervision."
  },
  {
    q: "Why do my actual results differ from the calculator?",
    a: "Calorie formulas are population estimates and can vary ±20% or more from an individual's true energy needs. Factors like gut microbiome, metabolic adaptation, sleep quality, stress hormones, and medication all affect how many calories your body actually uses."
  },
  {
    q: "What happens if I eat too few calories?",
    a: "Very low calorie intake for extended periods can reduce muscle mass, slow your metabolism, cause nutrient deficiencies, affect hormonal balance, and reduce bone density. Weight loss is rarely linear and sustainable change usually involves gradual, modest adjustments."
  },
  {
    q: "Is it possible to eat too many calories on a 'healthy' diet?",
    a: "Yes. Calorie balance matters regardless of food quality. Nutritious foods can still contribute to weight gain if consumed in excess of your energy needs. Food quality and calorie intake both matter for long-term health."
  },
  {
    q: "How does activity level affect my calorie needs?",
    a: "Physical activity can significantly increase calorie needs. The difference between a sedentary and very active lifestyle can be 600–1,000 kcal or more per day for the same person. Choosing the right activity multiplier is important for an accurate TDEE estimate."
  },
  {
    q: "Should I eat the same calories every day?",
    a: "Not necessarily. Some people find it more practical to aim for a weekly average rather than a strict daily target. On days with high activity, eating more is reasonable. Consistency over time matters more than perfection on any single day."
  }
];

const references = [
  { label: "Mifflin MD et al. (1990) — BMR equation used in this calculator", href: "https://pubmed.ncbi.nlm.nih.gov/2305711/" },
  { label: "NHS — Calories: how to get the balance right", href: "https://www.nhs.uk/live-well/healthy-weight/managing-your-weight/understanding-calories/" },
  { label: "CDC — How to use fruits and vegetables to help manage your weight", href: "https://www.cdc.gov/healthy-weight/healthy-eating/index.html" },
  { label: "WHO — Healthy diet fact sheet", href: "https://www.who.int/news-room/fact-sheets/detail/healthy-diet" }
];

export default function CaloriePage() {
  const faqSchema = faq.map((item) => ({ question: item.q, answer: item.a }));

  return (
    <main>
      <StructuredData
        path={PAGE_PATH}
        title={PAGE_TITLE}
        description={PAGE_DESCRIPTION}
        faq={faqSchema}
        includeWebApp
      />
      <section className="bg-gradient-to-br from-amber-50 via-white to-teal-50 px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <p className="inline-flex rounded-full border border-amber-200 bg-white/80 px-4 py-1.5 text-xs font-black uppercase tracking-[0.16em] text-amber-700">
            Free health tool
          </p>
          <h1 className="mt-4 text-4xl font-black leading-tight text-ink sm:text-5xl">
            Calorie Calculator: How Many Calories Do You Need Per Day? (2026)
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-700">
            Estimate your daily calorie needs for weight maintenance, loss, or gain based on your
            personal measurements and activity level.
          </p>
          <div className="mt-5 rounded-2xl border border-teal-200 bg-white/80 p-5">
            <p className="text-sm font-black uppercase tracking-[0.12em] text-teal-700">Quick answer</p>
            <p className="mt-2 leading-8 text-slate-800">
              <strong>Most adults need roughly 1,600–2,400 calories a day to maintain weight</strong>,
              but your exact number depends on age, sex, height, weight, and activity. This tool uses
              the Mifflin-St Jeor equation for your BMR, multiplies it by an activity factor to get
              your daily needs (TDEE), then adjusts by about 500 calories to lose or gain around
              0.45 kg (1 lb) per week.
            </p>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6 lg:px-8 space-y-8">
        <CalorieCalculator />

        <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-line sm:p-8">
          <h2 className="text-2xl font-black text-ink">How to use this calculator</h2>
          <ol className="mt-4 list-decimal space-y-2 pl-6 leading-8 text-slate-700">
            <li>Select your gender.</li>
            <li>Enter your age, height in cm, and current weight in kg.</li>
            <li>Choose the activity level that best reflects your typical week — be honest, most people overestimate activity.</li>
            <li>Click <strong>Calculate Calories</strong>.</li>
            <li>The table shows calorie targets for different goals: maintenance, mild loss (−0.25 kg/week), loss (−0.5 kg/week), mild gain, and gain.</li>
          </ol>
        </section>

        <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-line sm:p-8">
          <h2 className="text-2xl font-black text-ink">How daily calorie needs are calculated</h2>
          <p className="mt-4 leading-8 text-slate-700">
            Your daily calorie need is estimated by multiplying your Basal Metabolic Rate (BMR) by
            an activity factor. BMR is calculated using the Mifflin-St Jeor equation, widely
            considered the most accurate for most adults.
          </p>
          <div className="mt-5 rounded-2xl bg-mist p-5">
            <h3 className="font-black text-ink">Example (female, 28 years, 165 cm, 65 kg, lightly active)</h3>
            <p className="mt-2 font-mono text-sm leading-7 text-slate-800">
              BMR = 10×65 + 6.25×165 − 5×28 − 161 = 650 + 1031.25 − 140 − 161 = <strong>1,380 kcal</strong><br />
              TDEE = 1,380 × 1.375 (lightly active) = <strong>1,898 kcal/day</strong>
            </p>
          </div>
          <p className="mt-4 leading-8 text-slate-700">
            To lose approximately 0.5 kg per week, a deficit of ~500 kcal/day is commonly used:
            1,898 − 500 = <strong>1,398 kcal/day</strong> target.
          </p>
        </section>

        <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-line sm:p-8">
          <h2 className="text-2xl font-black text-ink">Activity multipliers</h2>
          <p className="mt-4 leading-8 text-slate-700">
            Your BMR is multiplied by an activity factor to estimate your TDEE — the calories you burn
            in a full day. Most people overestimate their activity, so choose conservatively.
          </p>
          <div className="mt-5 overflow-x-auto">
            <table className="w-full min-w-[560px] border-collapse text-left text-sm">
              <caption className="sr-only">Activity level multipliers for TDEE</caption>
              <thead className="border-b border-slate-200 text-ink">
                <tr>
                  <th className="py-3 pr-4 font-black">Activity level</th>
                  <th className="py-3 pr-4 font-black">Description</th>
                  <th className="py-3 font-black">Multiplier</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-700">
                {[
                  ["Sedentary", "Little or no exercise", "1.2"],
                  ["Lightly active", "Light exercise 1–3 days/week", "1.375"],
                  ["Moderately active", "Moderate exercise 3–5 days/week", "1.55"],
                  ["Very active", "Hard exercise 6–7 days/week", "1.725"],
                  ["Extra active", "Physical job or twice-daily training", "1.9"]
                ].map(([level, desc, mult]) => (
                  <tr key={level}>
                    <td className="py-3 pr-4 font-semibold">{level}</td>
                    <td className="py-3 pr-4">{desc}</td>
                    <td className="py-3">{mult}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-line sm:p-8">
          <h2 className="text-2xl font-black text-ink">Calories to lose or gain weight</h2>
          <p className="mt-4 leading-8 text-slate-700">
            A pound of body fat is roughly 3,500 calories, so a daily change of about 500 calories
            shifts weight by around 0.45 kg (1 lb) per week. Adjust from your maintenance TDEE:
          </p>
          <div className="mt-5 overflow-x-auto">
            <table className="w-full min-w-[520px] border-collapse text-left text-sm">
              <caption className="sr-only">Daily calorie adjustment by goal</caption>
              <thead className="border-b border-slate-200 text-ink">
                <tr>
                  <th className="py-3 pr-4 font-black">Goal</th>
                  <th className="py-3 pr-4 font-black">Daily adjustment</th>
                  <th className="py-3 font-black">Weekly change</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-700">
                {[
                  ["Slow loss", "−250 cal", "~0.25 kg (0.5 lb)"],
                  ["Standard loss", "−500 cal", "~0.45 kg (1 lb)"],
                  ["Slow gain", "+250 cal", "~0.25 kg"],
                  ["Standard gain", "+500 cal", "~0.45 kg"]
                ].map(([goal, adj, change]) => (
                  <tr key={goal}>
                    <td className="py-3 pr-4 font-semibold">{goal}</td>
                    <td className="py-3 pr-4">{adj}</td>
                    <td className="py-3">{change}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 leading-8 text-slate-700">
            Avoid dropping below about 1,200 cal/day (women) or 1,500 cal/day (men) without medical
            supervision, and recalculate every 4–6 kg of weight change since TDEE falls as you lose
            weight. Your weight target depends on the{" "}
            <a href="/healthy-bmi-range" className="font-semibold text-teal-700 underline-offset-4 hover:underline">
              healthy BMI range of 18.5 to 24.9
            </a>
            .
          </p>
        </section>

        <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-line sm:p-8">
          <h2 className="text-2xl font-black text-ink">Limitations</h2>
          <ul className="mt-4 list-disc space-y-2 pl-6 leading-8 text-slate-700">
            <li>Calorie estimates can vary ±20% from actual individual needs due to metabolic variation.</li>
            <li>Activity multipliers are broad categories — actual calorie burn varies with exercise intensity, body composition, and fitness level.</li>
            <li>The formula does not account for metabolic adaptation — the body adjusts energy use in response to sustained calorie restriction.</li>
            <li>Certain medical conditions (thyroid disorders, PCOS, diabetes) and medications significantly affect calorie metabolism.</li>
            <li>This calculator should not be used to set calorie targets below 1,200 kcal/day (women) or 1,500 kcal/day (men) without medical supervision.</li>
          </ul>
        </section>

        <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-line sm:p-8">
          <h2 className="text-2xl font-black text-ink">Frequently asked questions</h2>
          <div className="mt-5 space-y-4">
            {faq.map((item) => (
              <details key={item.q} className="group rounded-2xl border border-slate-200 p-5">
                <summary className="cursor-pointer list-none text-base font-bold text-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-teal-600">
                  <span className="inline-flex w-full items-center justify-between gap-4">
                    {item.q}
                    <span className="shrink-0 rounded-full bg-mist px-2.5 py-1 text-sm text-teal-700 group-open:hidden">+</span>
                    <span className="hidden shrink-0 rounded-full bg-mist px-3 py-1 text-sm text-teal-700 group-open:inline">−</span>
                  </span>
                </summary>
                <p className="mt-3 text-sm leading-7 text-slate-700">{item.a}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-line sm:p-8">
          <h2 className="text-2xl font-black text-ink">References</h2>
          <ul className="mt-4 space-y-3 text-sm font-semibold text-teal-800">
            {references.map((r) => (
              <li key={r.href}>
                <a href={r.href} className="underline-offset-4 hover:underline" rel="noreferrer" target="_blank">{r.label}</a>
              </li>
            ))}
          </ul>
        </section>

        <section className="rounded-3xl border border-coral/30 bg-coral/10 p-6 sm:p-8">
          <h2 className="text-xl font-black text-ink">Health disclaimer</h2>
          <p className="mt-3 leading-8 text-slate-800">
            This calculator is for general informational purposes only and does not replace
            professional medical advice. Always consult a qualified healthcare provider before
            making significant changes to your diet or calorie intake.
          </p>
        </section>

        <nav className="rounded-2xl border border-slate-200 bg-white p-6 shadow-line">
          <h2 className="text-lg font-black text-ink">Related tools</h2>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            {[
              { name: "BMI Calculator", href: "/" },
              { name: "Ideal Weight Calculator", href: "/ideal-weight-calculator" },
              { name: "BMR Calculator", href: "/bmr-calculator" },
              { name: "Body Fat Calculator", href: "/body-fat-calculator" }
            ].map((t) => (
              <a key={t.href} href={t.href}
                className="rounded-xl border border-slate-200 bg-mist px-4 py-3 font-semibold text-ink transition hover:border-teal-300 hover:bg-teal-50">
                {t.name}
              </a>
            ))}
          </div>
        </nav>
      </div>
    </main>
  );
}
