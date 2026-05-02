import { ContentPage } from "@/components/ContentPage";
import { createLocalizedMetadata } from "@/lib/metadata";

export const metadata = createLocalizedMetadata({
  locale: "es",
  path: "/body-fat-calculator",
  title: "Calculadora de grasa corporal | BMI Checks",
  description: "Guía en español sobre estimaciones de grasa corporal, método de circunferencias y diferencias con el IMC.",
});

export default function SpanishBodyFatCalculatorPage() {
  return (
    <ContentPage
      title="Calculadora de grasa corporal"
      intro="El porcentaje de grasa corporal estima qué parte del peso corresponde a tejido graso."
      sections={[
        {
          title: "Diferencia entre grasa corporal e IMC",
          body: (
            <p>
              El IMC compara peso y altura, mientras que el porcentaje de grasa corporal intenta estimar
              composición corporal. La grasa corporal puede aportar más detalle, pero su precisión depende
              del método y de la calidad de las medidas.
            </p>
          )
        },
        {
          title: "Limitaciones",
          body: (
            <p>
              Los métodos con cinta métrica son prácticos, pero menos precisos que pruebas clínicas como
              DEXA. Usa el resultado como orientación y no como diagnóstico.
            </p>
          )
        }
      ]}
    />
  );
}
