import Link from "next/link";
import { ContentPage } from "@/components/ContentPage";
import { createLocalizedMetadata } from "@/lib/metadata";

export const metadata = createLocalizedMetadata({
  locale: "es",
  path: "/healthy-bmi-range",
  title: "Rango saludable de IMC para adultos: 18.5 a 24.9",
  description:
    "Aprende qué significa el rango saludable de IMC de 18.5 a 24.9 en adultos, con tabla, ejemplos, limitaciones y referencias.",
});

export default function SpanishHealthyBMIRangePage() {
  return (
    <ContentPage
      title="Rango saludable de IMC para adultos"
      intro="Para la mayoría de adultos, el rango de IMC de 18.5 a 24.9 se considera habitualmente dentro de peso saludable. Es una referencia útil, no un diagnóstico."
      sections={[
        {
          title: "Qué significa el rango 18.5 a 24.9",
          body: (
            <p>
              Este rango indica que el peso está en una relación generalmente esperada para la altura
              introducida. A nivel poblacional suele asociarse con menor riesgo de problemas relacionados
              con el peso que los rangos de bajo peso, sobrepeso u obesidad. Aun así, una persona puede
              tener un IMC normal y presentar otros factores de riesgo.
            </p>
          )
        },
        {
          title: "Tabla de categorías adultas",
          body: (
            <table className="w-full border-collapse text-left text-sm">
              <tbody className="divide-y divide-slate-100">
                <tr><td className="py-3 pr-4 font-semibold">Bajo peso</td><td>Por debajo de 18.5</td></tr>
                <tr><td className="py-3 pr-4 font-semibold">Peso normal</td><td>18.5 - 24.9</td></tr>
                <tr><td className="py-3 pr-4 font-semibold">Sobrepeso</td><td>25.0 - 29.9</td></tr>
                <tr><td className="py-3 pr-4 font-semibold">Obesidad</td><td>30.0 o más</td></tr>
              </tbody>
            </table>
          )
        },
        {
          title: "Ejemplo de peso saludable por altura",
          body: (
            <p>
              Para una altura de 1.75 m, el rango de peso que corresponde a un IMC de 18.5 a 24.9 es
              aproximadamente 56.7 kg a 76.3 kg. Esto no significa que todos deban perseguir un punto
              exacto dentro del rango; solo muestra cómo se traduce el IMC a peso para una altura dada.
            </p>
          )
        },
        {
          title: "Por qué no es un objetivo único",
          body: (
            <p>
              El peso saludable no es un número exacto. Edad, masa muscular, embarazo, distribución de
              grasa, medicamentos, enfermedades y antecedentes personales pueden cambiar qué rango es
              realista o adecuado.
            </p>
          )
        },
        {
          title: "Casos donde conviene interpretarlo con cuidado",
          body: (
            <p>
              Deportistas, adultos mayores, personas embarazadas, niños y adolescentes pueden necesitar
              otras medidas o herramientas específicas. El IMC tampoco muestra presión arterial, glucosa,
              colesterol, fuerza o calidad de alimentación.
            </p>
          )
        },
        {
          title: "Cómo usar la calculadora",
          body: (
            <p>
              Calcula tu resultado en la{" "}
              <Link href="/es" className="font-semibold text-teal-700 underline-offset-4 hover:underline">
                calculadora de IMC
              </Link>{" "}
              y compáralo con las{" "}
              <Link href="/es/bmi-categories" className="font-semibold text-teal-700 underline-offset-4 hover:underline">
                categorías de IMC
              </Link>. Si tienes dudas personales, usa el resultado como punto de partida para hablar con un profesional.
            </p>
          )
        },
        {
          title: "Preguntas frecuentes",
          body: (
            <>
              <p><strong>¿18.5 a 24.9 sirve para todos?</strong> Es una referencia adulta general. No sustituye una valoración individual.</p>
              <p><strong>¿Un IMC normal garantiza salud?</strong> No. Otros marcadores también importan.</p>
              <p><strong>¿Qué hago si estoy fuera del rango?</strong> Revisa contexto y consulta si tienes síntomas, cambios rápidos o enfermedades.</p>
            </>
          )
        },
        {
          title: "Referencias y aviso de salud",
          body: (
            <>
              <p>
                Referencias: CDC, NHS y OMS sobre IMC, peso saludable y categorías adultas.
              </p>
              <p className="rounded-2xl border border-coral/30 bg-coral/10 p-4 text-slate-800">
                Esta información es solo para fines informativos generales y no sustituye el consejo
                médico profesional.
              </p>
            </>
          )
        }
      ]}
    />
  );
}
