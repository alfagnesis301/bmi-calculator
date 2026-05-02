import { ContentPage } from "@/components/ContentPage";
import { createLocalizedMetadata } from "@/lib/metadata";

export const metadata = createLocalizedMetadata({
  locale: "es",
  path: "/calorie-calculator",
  title: "Calculadora de calorías diarias | BMI Checks",
  description: "Aprende cómo se estiman las calorías diarias para mantenimiento, pérdida o ganancia de peso.",
});

export default function SpanishCalorieCalculatorPage() {
  return (
    <ContentPage
      title="Calculadora de calorías"
      intro="Las necesidades calóricas diarias dependen de tu metabolismo, tamaño corporal, actividad y objetivo."
      sections={[
        {
          title: "Cómo se estiman las calorías",
          body: (
            <p>
              Normalmente se estima primero la TMB y luego se aplica un factor de actividad para obtener
              el gasto energético diario total. A partir de ahí se puede plantear mantenimiento, pérdida
              gradual o ganancia de peso.
            </p>
          )
        },
        {
          title: "Uso responsable",
          body: (
            <p>
              Las cifras de calorías son aproximadas. Evita dietas extremas sin supervisión y busca
              orientación profesional si tienes una enfermedad, antecedentes de trastornos alimentarios,
              embarazo, medicación relevante o cambios de peso inesperados.
            </p>
          )
        }
      ]}
    />
  );
}
