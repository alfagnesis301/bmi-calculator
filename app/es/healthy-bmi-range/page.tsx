import Link from "next/link";
import { ContentPage } from "@/components/ContentPage";
import { createLocalizedMetadata } from "@/lib/metadata";

export const metadata = createLocalizedMetadata({
  locale: "es",
  path: "/healthy-bmi-range",
  title: "Rango saludable de IMC para adultos: 18.5 a 24.9",
  description:
    "Aprende qué significa el rango saludable de IMC de 18.5 a 24.9 en adultos y cuándo conviene consultar a un profesional.",
});

export default function SpanishHealthyBMIRangePage() {
  return (
    <ContentPage
      title="Rango saludable de IMC para adultos"
      intro="Para la mayoría de adultos, el rango de IMC de 18.5 a 24.9 se considera habitualmente dentro de peso saludable."
      sections={[
        {
          title: "Qué significa 18.5 a 24.9",
          body: (
            <p>
              Este rango indica que el peso se encuentra en una relación generalmente esperada para la
              altura introducida. No garantiza buena salud por sí solo, pero suele asociarse con menor
              riesgo poblacional de problemas relacionados con peso que los rangos de bajo peso,
              sobrepeso u obesidad.
            </p>
          )
        },
        {
          title: "Por qué no es un objetivo único",
          body: (
            <p>
              El peso saludable no es un número exacto. La edad, la masa muscular, el embarazo, la
              distribución de grasa, enfermedades, medicamentos y antecedentes personales pueden cambiar
              qué rango es realista o adecuado para una persona concreta.
            </p>
          )
        },
        {
          title: "Cuándo pedir orientación",
          body: (
            <p>
              Consulta a un profesional sanitario si tu peso cambia sin explicación, si tienes síntomas,
              si tu IMC está fuera del rango saludable o si necesitas un plan personal. También puedes
              empezar calculando tu resultado en la{" "}
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
