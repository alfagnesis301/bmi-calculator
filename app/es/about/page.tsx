import { ContentPage } from "@/components/ContentPage";
import { createLocalizedMetadata } from "@/lib/metadata";

export const metadata = createLocalizedMetadata({
  locale: "es",
  path: "/about",
  title: "Acerca de BMI Checks | bmichecks.com",
  description:
    "Conoce qué es BMI Checks, quién mantiene el sitio y cómo se revisa el contenido de salud publicado.",
});

export default function SpanishAboutPage() {
  return (
    <ContentPage
      title="Acerca de BMI Checks"
      eyebrow="Última revisión: 25 de abril de 2026"
      sections={[
        {
          title: "Qué es BMI Checks",
          body: (
            <>
              <p>
                BMI Checks es una herramienta online gratuita de salud que ayuda a adultos a calcular
                rápidamente su Índice de Masa Corporal (IMC) usando unidades métricas o estadounidenses.
                El sitio muestra el número de IMC, la categoría orientativa para adultos y una estimación
                aproximada del rango de peso saludable para la altura introducida.
              </p>
              <p>
                El objetivo es ofrecer una herramienta rápida, accesible y respetuosa con la privacidad,
                acompañada de contenido educativo claro sobre qué significa el IMC, cómo se calcula y
                cuáles son sus limitaciones.
              </p>
            </>
          )
        },
        {
          title: "Quién mantiene este sitio",
          body: (
            <p>
              BMI Checks es propiedad y está gestionado por Ricardo Diaz, desarrollador web independiente
              con base en el Reino Unido. El sitio está construido con Next.js y alojado en Netlify. No
              existe un equipo médico detrás del sitio; el contenido de salud se redacta para reflejar
              guías públicas ampliamente aceptadas de organizaciones como la OMS, CDC y NHS.
            </p>
          )
        },
        {
          title: "Cómo se redacta y revisa el contenido",
          body: (
            <>
              <p>
                Todo el contenido educativo se escribe de forma original y se contrasta con recursos
                públicos de organismos de salud reconocidos. Las páginas se revisan antes de publicarse
                para evitar afirmaciones médicas exageradas y para dejar claras las limitaciones de cada
                cálculo.
              </p>
              <p>
                BMI Checks no ofrece consejo médico personalizado. Cada página incluye avisos para que
                los usuarios consulten a un profesional sanitario cualificado ante dudas personales.
              </p>
            </>
          )
        },
        {
          title: "Correcciones y contacto",
          body: (
            <p>
              Si detectas un error, información desactualizada o una forma de mejorar el sitio, escribe a{" "}
              <a href="mailto:contact@bmichecks.com" className="font-semibold text-teal-700 underline-offset-4 hover:underline">
                contact@bmichecks.com
              </a>.
            </p>
          )
        },
        {
          title: "Aviso médico",
          body: (
            <p className="rounded-2xl border border-coral/30 bg-coral/10 p-4 text-slate-800">
              El contenido de BMI Checks es solo para información general. No constituye consejo médico,
              diagnóstico ni tratamiento. Consulta siempre a un profesional sanitario cualificado antes
              de tomar decisiones sobre tu salud.
            </p>
          )
        }
      ]}
    />
  );
}
