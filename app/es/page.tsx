import Link from "next/link";
import { BMICalculator } from "@/components/BMICalculator";
import { FAQ } from "@/components/FAQ";
import { InContentAd, ResponsiveAdSlot, SidebarAd } from "@/components/AdPlaceholder";
import { RelatedTools } from "@/components/RelatedTools";
import { createLocalizedMetadata } from "@/lib/metadata";
import { faqItemsEs, siteConfig } from "@/lib/seo";

export const metadata = createLocalizedMetadata({
  locale: "es",
  path: "/",
  title: "Calculadora de IMC - Calcula tu Índice de Masa Corporal Online",
  description:
    "Calcula tu IMC con unidades métricas o estadounidenses, consulta tu categoría de IMC en adultos y obtén una estimación clara de peso saludable.",
});

const references = [
  { label: "CDC: categorías de IMC en adultos", href: "https://www.cdc.gov/bmi/adult-calculator/bmi-categories.html" },
  { label: "CDC: información sobre el índice de masa corporal", href: "https://www.cdc.gov/bmi/about/index.html" },
  { label: "OMS: obesidad y sobrepeso", href: "https://www.who.int/news-room/fact-sheets/detail/obesity-and-overweight" },
  { label: "NHS: calculadora de peso saludable por IMC", href: "https://www.nhs.uk/health-assessment-tools/calculate-your-body-mass-index/calculate-bmi-for-adults" }
];

export default function SpanishHomePage() {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      name: "Calculadora de IMC",
      applicationCategory: "HealthApplication",
      operatingSystem: "Any",
      url: `${siteConfig.url}/es`,
      description:
        "Calculadora gratuita de Índice de Masa Corporal con unidades métricas y estadounidenses.",
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD"
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqItemsEs.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.answer
        }
      }))
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Inicio",
          item: `${siteConfig.url}/es`
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Calculadora de IMC",
          item: `${siteConfig.url}/es`
        }
      ]
    }
  ];

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="relative overflow-hidden bg-[radial-gradient(circle_at_12%_18%,#c8f5ee_0,transparent_30%),radial-gradient(circle_at_88%_8%,#ffe1d4_0,transparent_26%),linear-gradient(135deg,#f8fffd_0%,#f4f8f8_50%,#fff7f1_100%)]">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-teal-300 to-transparent" />
        <div className="mx-auto max-w-7xl px-4 pb-12 pt-10 sm:px-6 sm:pb-16 sm:pt-14 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,0.95fr)_420px] lg:items-end">
            <div>
              <p className="inline-flex rounded-full border border-teal-200 bg-white/80 px-4 py-2 text-xs font-black uppercase tracking-[0.16em] text-teal-700 shadow-line">
                Herramienta de salud online gratuita
              </p>
              <h1 className="mt-5 max-w-3xl text-4xl font-black leading-tight text-ink sm:text-6xl">
                Calculadora de Índice de Masa Corporal
              </h1>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-700 sm:text-xl">
                Calcula tu IMC con unidades métricas o estadounidenses, consulta tu categoría de IMC
                para adultos y obtén una estimación clara de peso saludable sin crear una cuenta.
              </p>
              <div className="mt-8 grid max-w-2xl gap-3 text-sm sm:grid-cols-3">
                <div className="rounded-2xl border border-white bg-white/85 p-4 shadow-line backdrop-blur">
                  <strong className="block text-2xl text-ink">2 unidades</strong>
                  <span className="font-semibold text-muted">Métricas y estadounidenses</span>
                </div>
                <div className="rounded-2xl border border-white bg-white/85 p-4 shadow-line backdrop-blur">
                  <strong className="block text-2xl text-ink">1 decimal</strong>
                  <span className="font-semibold text-muted">Resultado de IMC preciso</span>
                </div>
                <div className="rounded-2xl border border-white bg-white/85 p-4 shadow-line backdrop-blur">
                  <strong className="block text-2xl text-ink">Privado</strong>
                  <span className="font-semibold text-muted">Guardado local opcional</span>
                </div>
              </div>
            </div>

            <div className="hidden rounded-3xl border border-white bg-white/75 p-5 shadow-soft backdrop-blur lg:block">
              <div className="flex items-center justify-between">
                <p className="text-sm font-black uppercase tracking-[0.12em] text-teal-700">
                  Rangos para adultos
                </p>
                <span className="rounded-full bg-teal-50 px-3 py-1 text-xs font-bold text-teal-800">
                  Solo orientativo
                </span>
              </div>
              <div className="mt-5 space-y-3">
                {[
                  ["Bajo peso", "Por debajo de 18.5", "bg-sky-500"],
                  ["Normal", "18.5 - 24.9", "bg-teal-500"],
                  ["Sobrepeso", "25 - 29.9", "bg-amber-500"],
                  ["Obesidad", "30 o más", "bg-rose-500"]
                ].map(([label, range, color]) => (
                  <div key={label} className="flex items-center justify-between rounded-2xl bg-white p-3 shadow-line">
                    <span className="flex items-center gap-3 font-bold text-ink">
                      <span className={`h-3 w-3 rounded-full ${color}`} aria-hidden="true" />
                      {label}
                    </span>
                    <span className="text-sm font-bold text-muted">{range}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-10">
            <BMICalculator locale="es" />
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
        <ResponsiveAdSlot slot="3333333333" className="min-h-28" />
      </div>

      <div className="mx-auto grid max-w-6xl gap-8 px-4 pb-14 sm:px-6 lg:grid-cols-[minmax(0,1fr)_300px] lg:px-8">
        <article id="learn" className="space-y-10">
          <section className="rounded-3xl border border-teal-200 bg-white p-6 shadow-line sm:p-8">
            <p className="text-sm font-bold uppercase tracking-[0.12em] text-teal-700">
              Guía de IMC para adultos
            </p>
            <h2 className="mt-2 text-3xl font-black text-ink">
              Rango saludable de IMC para adultos: 18.5 a 24.9
            </h2>
            <p className="mt-4 leading-8 text-slate-700">
              Para la mayoría de adultos, un IMC entre 18.5 y 24.9 se considera habitualmente
              dentro del rango saludable. Un IMC por debajo de 18.5 suele clasificarse como bajo
              peso, de 25 a 29.9 como sobrepeso y de 30 o más como obesidad. Estas categorías son
              rangos de cribado utilizados por organizaciones de salud pública; no son un diagnóstico
              personal.
            </p>
            <p className="mt-4 leading-8 text-slate-700">
              Usa el resultado como una forma rápida de entender la relación entre tu peso y tu
              altura. Si tu IMC está fuera del rango saludable, o si tu peso ha cambiado sin una
              razón clara, un profesional sanitario cualificado puede interpretar el número junto
              con la medida de cintura, composición corporal, historial médico y otros indicadores.
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <Link
                href="/es/healthy-bmi-range"
                className="inline-flex rounded-2xl bg-teal-700 px-5 py-3 text-sm font-black text-white transition hover:bg-teal-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-700"
              >
                Leer sobre el rango saludable de IMC
              </Link>
              <Link className="inline-flex rounded-2xl border border-teal-200 px-5 py-3 text-sm font-black text-teal-800 hover:bg-teal-50" href="/es/bmi-categories">
                Ver categorías de IMC
              </Link>
            </div>
          </section>

          <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-line sm:p-8">
            <h2 className="text-3xl font-black text-ink">¿Qué es el IMC?</h2>
            <p className="mt-4 leading-8 text-slate-700">
              El Índice de Masa Corporal, normalmente abreviado como IMC, es un cálculo sencillo que
              compara el peso de una persona con su altura. Se utiliza ampliamente porque es rápido,
              económico y fácil de repetir con el tiempo. El resultado de IMC coloca a los adultos
              dentro de una categoría general: bajo peso, peso normal, sobrepeso u obesidad. Estas
              categorías pueden ser útiles para estudios de salud pública y como punto de partida
              para hablar sobre posibles riesgos relacionados con el peso, pero el IMC no ofrece una
              imagen completa de la salud.
            </p>
            <p className="mt-4 leading-8 text-slate-700">
              Esta calculadora está diseñada para ayudarte a entender mejor el número. Muestra tu
              IMC con un decimal, la categoría correspondiente para adultos, el rango de IMC
              considerado saludable y una estimación aproximada del peso saludable para la altura
              introducida. Trata el resultado como una orientación inicial, no como un diagnóstico.
              Un profesional de la salud puede tener en cuenta la medida de cintura, presión arterial,
              colesterol, glucosa, historial médico, antecedentes familiares, condición física,
              sueño, medicamentos y otros factores antes de hacer recomendaciones personales.
            </p>
          </section>

          <section className="grid gap-5 md:grid-cols-2">
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-line sm:p-8">
              <h2 className="text-2xl font-black text-ink">Fórmula del IMC</h2>
              <div className="mt-5 space-y-4">
                <div className="rounded-2xl bg-mist p-5">
                  <h3 className="font-black text-ink">Unidades métricas</h3>
                  <p className="mt-2 font-mono text-sm text-slate-800">
                    IMC = pesoKg / (alturaM * alturaM)
                  </p>
                </div>
                <div className="rounded-2xl bg-mist p-5">
                  <h3 className="font-black text-ink">Unidades estadounidenses</h3>
                  <p className="mt-2 font-mono text-sm text-slate-800">
                    IMC = 703 * pesoLb / (alturaPulgadas * alturaPulgadas)
                  </p>
                </div>
              </div>
              <p className="mt-5 leading-7 text-slate-700">
                Ambas fórmulas producen el mismo tipo de resultado. La diferencia está en el factor
                de conversión que se necesita cuando se usan libras y pulgadas en lugar de kilogramos
                y metros.
              </p>
              <Link href="/es/bmi-formula" className="mt-4 inline-flex text-sm font-black text-teal-700 underline-offset-4 hover:underline">
                Ver explicación completa de la fórmula
              </Link>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-line sm:p-8">
              <h2 className="text-2xl font-black text-ink">Categorías de IMC en adultos</h2>
              <div className="mt-5 overflow-x-auto">
                <table className="w-full border-collapse text-left text-sm">
                  <caption className="sr-only">Tabla de clasificación de IMC para adultos</caption>
                  <thead>
                    <tr className="border-b border-slate-200 text-ink">
                      <th className="py-3 pr-4 font-black">Categoría</th>
                      <th className="py-3 font-black">Rango de IMC</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 text-slate-700">
                    <tr><td className="py-3 pr-4 font-semibold">Bajo peso</td><td className="py-3">Por debajo de 18.5</td></tr>
                    <tr><td className="py-3 pr-4 font-semibold">Peso normal</td><td className="py-3">18.5 - 24.9</td></tr>
                    <tr><td className="py-3 pr-4 font-semibold">Sobrepeso</td><td className="py-3">25.0 - 29.9</td></tr>
                    <tr><td className="py-3 pr-4 font-semibold">Obesidad</td><td className="py-3">30.0 o más</td></tr>
                  </tbody>
                </table>
              </div>
              <p className="mt-5 leading-7 text-slate-700">
                Las categorías para adultos son rangos generales. Por eso el mismo IMC puede tener
                significados distintos en dos personas con composición corporal, edad e historial de
                salud diferentes.
              </p>
              <Link href="/es/bmi-chart" className="mt-4 inline-flex text-sm font-black text-teal-700 underline-offset-4 hover:underline">
                Ver tabla visual de IMC
              </Link>
            </div>
          </section>

          <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-line sm:p-8">
            <h2 className="text-3xl font-black text-ink">Cómo interpretar tu IMC</h2>
            <p className="mt-4 leading-8 text-slate-700">
              Un IMC por debajo de 18.5 suele clasificarse como bajo peso en adultos. Entre 18.5 y
              24.9 se considera peso normal. Entre 25 y 29.9 entra en el rango de sobrepeso, y 30 o
              más entra en el rango de obesidad. Estas etiquetas no buscan juzgar a una persona: son
              una forma abreviada de señalar cuándo el peso podría merecer una revisión más completa.
            </p>
            <p className="mt-4 leading-8 text-slate-700">
              La estimación de peso saludable se basa en el mismo rango de IMC de 18.5 a 24.9.
              Responde a una pregunta práctica: para la altura introducida, qué peso aproximado
              estaría dentro de ese rango. No debe interpretarse como un objetivo único ni obligatorio.
            </p>
          </section>

          <InContentAd />

          <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-line sm:p-8">
            <h2 className="text-3xl font-black text-ink">Limitaciones del IMC</h2>
            <p className="mt-4 leading-8 text-slate-700">
              El IMC no mide directamente la grasa corporal. Tampoco muestra dónde se acumula la
              grasa, algo que puede influir en el riesgo para la salud. Como usa el peso total, no
              distingue grasa, músculo, hueso, agua u órganos. Una persona deportista puede tener un
              IMC alto por mayor masa muscular, mientras que una persona mayor puede tener un IMC en
              rango normal y aun así presentar poca masa muscular.
            </p>
            <p className="mt-4 leading-8 text-slate-700">
              Las personas embarazadas no deberían usar categorías estándar de IMC para evaluar los
              cambios de peso durante el embarazo. Los niños y adolescentes también requieren una
              interpretación distinta, basada en percentiles por edad y sexo.
            </p>
          </section>

          <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-line sm:p-8">
            <h2 className="text-3xl font-black text-ink">IMC y riesgos para la salud</h2>
            <p className="mt-4 leading-8 text-slate-700">
              Un IMC fuera del rango habitual puede asociarse con determinados problemas de salud,
              pero no cuenta toda la historia. Un IMC alto puede relacionarse con mayor probabilidad
              de presión arterial alta, alteraciones del colesterol, apnea del sueño, diabetes tipo 2
              o molestias articulares. Un IMC bajo puede relacionarse con problemas nutricionales o
              menor reserva ante enfermedades. La palabra clave es &quot;puede&quot;: el riesgo personal
              depende de muchos factores que una calculadora online no puede evaluar.
            </p>
            <p className="mt-4 leading-8 text-slate-700">
              Habla con un profesional sanitario cualificado si tu IMC cambia rápidamente sin una
              explicación clara, si tienes síntomas, si estás manejando una enfermedad o si necesitas
              un plan adaptado a tu situación.
            </p>
          </section>

          <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-line sm:p-8">
            <h2 className="text-3xl font-black text-ink">Consejos para mantener un peso saludable</h2>
            <p className="mt-4 leading-8 text-slate-700">
              Los hábitos sostenibles suelen ser más útiles que las restricciones extremas. Muchas
              personas se benefician de comidas regulares con alimentos saciantes, suficiente proteína,
              frutas, verduras, cereales integrales y una hidratación adecuada. El movimiento también
              importa: caminar, entrenar fuerza, practicar deporte, desplazarse de forma activa o
              cualquier actividad que encaje con tu vida.
            </p>
            <p className="mt-4 leading-8 text-slate-700">
              El sueño, el estrés, los medicamentos, los horarios de trabajo, el acceso a alimentos y
              la salud mental también pueden influir en el peso. Si tu objetivo es cambiar de peso,
              suele ser más útil observar tendencias que reaccionar a una sola medición.
            </p>
          </section>

          <section className="rounded-3xl border border-coral/30 bg-coral/10 p-6 sm:p-8">
            <h2 className="text-2xl font-black text-ink">Aviso de salud</h2>
            <p className="mt-4 leading-8 text-slate-800">
              This calculator is for general informational purposes only and does not replace
              professional medical advice. Always consult a qualified healthcare provider for
              personal health concerns.
            </p>
            <p className="mt-3 leading-8 text-slate-800">
              Esta calculadora es solo para fines informativos generales y no sustituye el consejo
              médico profesional. Consulta siempre a un profesional sanitario cualificado si tienes
              dudas personales sobre tu salud.
            </p>
          </section>

          <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-line sm:p-8">
            <h2 className="text-3xl font-black text-ink">IMC en adultos vs. IMC en niños</h2>
            <p className="mt-4 leading-8 text-slate-700">
              Las categorías de IMC para adultos usan puntos de corte fijos. En niños y adolescentes
              la interpretación cambia porque el cuerpo sigue creciendo. En edades de 2 a 19 años,
              el IMC se compara con percentiles por edad y sexo mediante gráficas de crecimiento.
              Si revisas el IMC de una persona menor de 20 años, utiliza una herramienta pediátrica
              específica o consulta a un profesional sanitario infantil.
            </p>
          </section>

          <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-line sm:p-8">
            <h2 className="text-3xl font-black text-ink">Referencias</h2>
            <p className="mt-4 leading-8 text-slate-700">
              El contenido educativo de esta página es original y está alineado con guías de salud
              pública ampliamente utilizadas. Puedes ampliar información en estos recursos externos:
            </p>
            <ul className="mt-5 grid gap-3 text-sm font-semibold text-teal-800">
              {references.map((reference) => (
                <li key={reference.href}>
                  <a className="underline-offset-4 hover:underline" href={reference.href} rel="noreferrer">
                    {reference.label}
                  </a>
                </li>
              ))}
            </ul>
          </section>

          <div id="faq">
            <FAQ locale="es" />
          </div>

          <RelatedTools locale="es" />
        </article>

        <SidebarAd />
      </div>

      <div className="mx-auto max-w-6xl px-4 pb-12 sm:px-6 lg:px-8">
        <ResponsiveAdSlot slot="4444444444" className="min-h-28" />
      </div>
    </main>
  );
}
