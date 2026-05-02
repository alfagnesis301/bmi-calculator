import Link from "next/link";
import { ContentPage } from "@/components/ContentPage";
import { createLocalizedMetadata } from "@/lib/metadata";

export const metadata = createLocalizedMetadata({
  locale: "es",
  path: "/bmi-categories",
  title: "Categorías de IMC en adultos - Bajo peso, normal, sobrepeso y obesidad",
  description:
    "Consulta las categorías de IMC para adultos, sus rangos y cómo interpretar el resultado sin usarlo como diagnóstico médico.",
});

export default function SpanishBMICategoriesPage() {
  return (
    <ContentPage
      title="Categorías de IMC en adultos"
      intro="Las categorías de IMC ayudan a interpretar el resultado de una forma rápida, pero deben entenderse como rangos orientativos para adultos."
      sections={[
        {
          title: "Tabla de categorías",
          body: (
            <table className="w-full border-collapse text-left text-sm">
              <thead>
                <tr className="border-b border-slate-200 text-ink">
                  <th className="py-3 pr-4 font-black">Categoría</th>
                  <th className="py-3 font-black">Rango de IMC</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                <tr><td className="py-3 pr-4 font-semibold">Bajo peso</td><td className="py-3">Por debajo de 18.5</td></tr>
                <tr><td className="py-3 pr-4 font-semibold">Peso normal</td><td className="py-3">18.5 - 24.9</td></tr>
                <tr><td className="py-3 pr-4 font-semibold">Sobrepeso</td><td className="py-3">25.0 - 29.9</td></tr>
                <tr><td className="py-3 pr-4 font-semibold">Obesidad</td><td className="py-3">30.0 o más</td></tr>
              </tbody>
            </table>
          )
        },
        {
          title: "Cómo usar estas categorías",
          body: (
            <>
              <p>
                Los rangos de IMC se utilizan como herramienta de cribado en adultos. Sirven para
                identificar cuándo la relación entre peso y altura puede merecer una revisión más
                completa, pero no confirman por sí solos que una persona esté sana o enferma.
              </p>
              <p>
                Una persona con mucha masa muscular puede aparecer en sobrepeso aunque tenga poca grasa
                corporal. Del mismo modo, una persona con IMC normal puede tener otros factores de riesgo.
                Por eso el IMC debe interpretarse junto con cintura, historial médico, análisis y hábitos.
              </p>
            </>
          )
        },
        {
          title: "Siguiente paso",
          body: (
            <p>
              Puedes calcular tu resultado en la{" "}
              <Link href="/es" className="font-semibold text-teal-700 underline-offset-4 hover:underline">
                calculadora de IMC
              </Link>{" "}
              o revisar la{" "}
              <Link href="/es/bmi-chart" className="font-semibold text-teal-700 underline-offset-4 hover:underline">
                tabla visual de IMC
              </Link>.
            </p>
          )
        }
      ]}
    />
  );
}
