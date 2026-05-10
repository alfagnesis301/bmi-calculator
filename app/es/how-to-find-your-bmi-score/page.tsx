import Link from "next/link";
import { ContentPage } from "@/components/ContentPage";
import { createLocalizedMetadata } from "@/lib/metadata";

export const metadata = createLocalizedMetadata({
  locale: "es",
  path: "/how-to-find-your-bmi-score",
  title: "Cómo encontrar tu puntuación de IMC paso a paso",
  description:
    "Guía sencilla para encontrar tu puntuación de IMC usando altura y peso, con unidades métricas o estadounidenses.",
});

export default function SpanishHowToFindBMIScorePage() {
  return (
    <ContentPage
      title="Cómo encontrar tu puntuación de IMC"
      intro="Puedes encontrar tu puntuación de IMC con una fórmula manual o con una calculadora online."
      sections={[
        {
          title: "Paso 1: mide altura y peso",
          body: (
            <p>
              Usa una medida de altura actual y un peso reciente. Si puedes, mídete sin zapatos y pesa
              en condiciones similares para que la comparación sea más consistente con el tiempo.
            </p>
          )
        },
        {
          title: "Paso 2: elige las unidades",
          body: (
            <p>
              Con sistema métrico usarás centímetros y kilogramos. Con sistema estadounidense usarás
              pies, pulgadas y libras. La calculadora permite cambiar entre ambos sistemas sin modificar
              la interpretación final.
            </p>
          )
        },
        {
          title: "Paso 3: interpreta el resultado",
          body: (
            <p>
              Después de calcular, compara tu número con las categorías de adultos: bajo peso, peso
              normal, sobrepeso u obesidad. Recuerda que el resultado es orientativo y no diagnostica
              condiciones médicas.
            </p>
          )
        },
        {
          title: "Fórmula manual",
          body: (
            <p>
              En unidades métricas, el IMC se calcula como peso en kilogramos dividido entre altura en
              metros al cuadrado. Por ejemplo, 70 kg y 1.75 m dan 70 / 1.75^2 = 22.9. En unidades
              estadounidenses se usa IMC = 703 x peso en libras / altura en pulgadas al cuadrado.
            </p>
          )
        },
        {
          title: "Errores frecuentes",
          body: (
            <ul className="list-disc space-y-2 pl-6">
              <li>Usar centímetros directamente sin convertirlos a metros.</li>
              <li>No convertir pies y pulgadas a pulgadas totales.</li>
              <li>Redondear demasiado pronto en resultados cercanos a un límite.</li>
              <li>Usar rangos adultos para niños o adolescentes.</li>
            </ul>
          )
        },
        {
          title: "Aviso de salud",
          body: (
            <p>
              El IMC es una herramienta de cribado para adultos. No mide grasa corporal directamente
              ni sustituye una valoración sanitaria. Consulta a un profesional cualificado si el resultado
              te preocupa, si hubo cambios de peso inesperados o si tienes una condición médica.
            </p>
          )
        },
        {
          title: "Calcula tu IMC ahora",
          body: (
            <p>
              Ve a la{" "}
              <Link href="/es" className="font-semibold text-teal-700 underline-offset-4 hover:underline">
                calculadora de IMC
              </Link>{" "}
              para obtener el resultado con un decimal, categoría y rango aproximado de peso saludable.
            </p>
          )
        }
      ]}
    />
  );
}
