import Link from "next/link";
import { ContentPage } from "@/components/ContentPage";
import { createLocalizedMetadata } from "@/lib/metadata";

export const metadata = createLocalizedMetadata({
  locale: "es",
  path: "/ideal-weight-calculator",
  title: "Calculadora de peso ideal | BMI Checks",
  description: "Guía en español para estimar peso ideal y entender sus límites junto con el IMC.",
});

export default function SpanishIdealWeightCalculatorPage() {
  return (
    <ContentPage
      title="Calculadora de peso ideal"
      intro="El peso ideal es una estimación orientativa, no un objetivo médico universal."
      sections={[
        {
          title: "Qué significa peso ideal",
          body: (
            <p>
              Las fórmulas de peso ideal usan principalmente altura y sexo para estimar un rango de
              referencia. Pueden ser útiles como punto de partida, pero no contemplan masa muscular,
              edad, estructura corporal, embarazo, historial médico ni preferencias personales.
            </p>
          )
        },
        {
          title: "Cómo usarlo junto con el IMC",
          body: (
            <p>
              El IMC y el peso ideal son medidas generales. Úsalas para orientar conversaciones y
              observar tendencias, no como diagnóstico. Para una estimación basada en tu altura, puedes
              empezar con la{" "}
              <Link href="/es" className="font-semibold text-teal-700 underline-offset-4 hover:underline">
                calculadora de IMC
              </Link>.
            </p>
          )
        }
      ]}
    />
  );
}
