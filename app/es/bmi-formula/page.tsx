import Link from "next/link";
import { ContentPage } from "@/components/ContentPage";
import { createLocalizedMetadata } from "@/lib/metadata";

export const metadata = createLocalizedMetadata({
  locale: "es",
  path: "/bmi-formula",
  title: "Fórmula del IMC - Cómo calcular el Índice de Masa Corporal",
  description:
    "Aprende la fórmula del IMC en unidades métricas y estadounidenses, con explicación clara y ejemplos prácticos.",
});

export default function SpanishBMIFormulaPage() {
  return (
    <ContentPage
      title="Fórmula del IMC"
      intro="El IMC compara el peso con la altura. La fórmula cambia ligeramente según uses unidades métricas o estadounidenses."
      sections={[
        {
          title: "Fórmula en unidades métricas",
          body: (
            <>
              <p className="rounded-2xl bg-mist p-4 font-mono text-sm text-ink">
                IMC = peso en kg / (altura en metros * altura en metros)
              </p>
              <p>
                Si una persona mide 1.75 m y pesa 70 kg, el cálculo es 70 / (1.75 * 1.75), lo que
                da un IMC aproximado de 22.9.
              </p>
            </>
          )
        },
        {
          title: "Fórmula en unidades estadounidenses",
          body: (
            <>
              <p className="rounded-2xl bg-mist p-4 font-mono text-sm text-ink">
                IMC = 703 * peso en lb / (altura en pulgadas * altura en pulgadas)
              </p>
              <p>
                El factor 703 ajusta la fórmula cuando se usan libras y pulgadas. El resultado final
                sigue interpretándose con las mismas categorías de adultos.
              </p>
            </>
          )
        },
        {
          title: "Precisión y límites",
          body: (
            <p>
              La fórmula del IMC es útil por su sencillez, pero no mide grasa corporal directamente.
              Para una interpretación más completa conviene considerar composición corporal, cintura,
              edad, embarazo, entrenamiento, medicación e historial médico.
            </p>
          )
        },
        {
          title: "Calcular sin hacer la cuenta manual",
          body: (
            <p>
              Usa la{" "}
              <Link href="/es" className="font-semibold text-teal-700 underline-offset-4 hover:underline">
                calculadora de IMC
              </Link>{" "}
              para obtener el resultado, la categoría y el rango aproximado de peso saludable.
            </p>
          )
        }
      ]}
    />
  );
}
