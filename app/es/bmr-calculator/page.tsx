import { ContentPage } from "@/components/ContentPage";
import { createLocalizedMetadata } from "@/lib/metadata";

export const metadata = createLocalizedMetadata({
  locale: "es",
  path: "/bmr-calculator",
  title: "Calculadora de TMB | Tasa metabólica basal",
  description: "Información en español sobre la TMB, el gasto energético diario y sus limitaciones.",
});

export default function SpanishBMRCalculatorPage() {
  return (
    <ContentPage
      title="Calculadora de TMB"
      intro="La tasa metabólica basal (TMB) estima las calorías que tu cuerpo utiliza en reposo para mantener funciones esenciales."
      sections={[
        {
          title: "Qué es la TMB",
          body: (
            <p>
              La TMB representa una estimación del gasto energético en reposo. Se usa como base para
              calcular necesidades calóricas diarias al multiplicarla por un factor de actividad.
            </p>
          )
        },
        {
          title: "Limitaciones",
          body: (
            <p>
              Las fórmulas de TMB son estimaciones. La genética, el músculo, las hormonas, medicamentos,
              enfermedades, sueño y nivel de actividad pueden hacer que el gasto real sea diferente.
              Para objetivos clínicos o cambios importantes de peso, consulta a un profesional.
            </p>
          )
        }
      ]}
    />
  );
}
