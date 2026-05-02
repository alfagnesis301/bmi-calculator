import Link from "next/link";
import { BMIChart } from "@/components/BMIChart";
import { ContentPage } from "@/components/ContentPage";
import { createLocalizedMetadata } from "@/lib/metadata";

export const metadata = createLocalizedMetadata({
  locale: "es",
  path: "/bmi-chart",
  title: "Tabla de IMC - Rangos visuales para adultos",
  description:
    "Consulta una tabla visual de IMC para adultos con rangos de bajo peso, peso normal, sobrepeso y obesidad.",
});

export default function SpanishBMIChartPage() {
  return (
    <ContentPage
      title="Tabla de IMC"
      intro="La tabla de IMC muestra de forma visual cómo se distribuyen los rangos usados para adultos."
      sections={[
        {
          title: "Rangos visuales",
          body: (
            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-line">
              <BMIChart locale="es" />
            </div>
          )
        },
        {
          title: "Interpretación",
          body: (
            <p>
              La tabla puede ayudarte a ubicar rápidamente un resultado. Bajo peso está por debajo de
              18.5; el rango normal va de 18.5 a 24.9; sobrepeso va de 25 a 29.9; y obesidad se ubica
              en 30 o más. Estos rangos son orientativos y no sustituyen una evaluación médica.
            </p>
          )
        },
        {
          title: "Usar la tabla con la calculadora",
          body: (
            <p>
              Calcula tu resultado en la{" "}
              <Link href="/es" className="font-semibold text-teal-700 underline-offset-4 hover:underline">
                calculadora de IMC
              </Link>{" "}
              para ver el indicador dinámico dentro de la barra de rangos.
            </p>
          )
        }
      ]}
    />
  );
}
