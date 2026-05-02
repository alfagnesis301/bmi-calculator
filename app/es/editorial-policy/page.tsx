import { ContentPage } from "@/components/ContentPage";
import { createLocalizedMetadata } from "@/lib/metadata";

export const metadata = createLocalizedMetadata({
  locale: "es",
  path: "/editorial-policy",
  title: "Política editorial y aviso médico | BMI Checks",
  description:
    "Cómo BMI Checks crea, revisa y actualiza contenido de salud, con fuentes, estándares editoriales y aviso médico.",
});

export default function SpanishEditorialPolicyPage() {
  return (
    <ContentPage
      title="Política editorial y aviso médico"
      eyebrow="Última revisión: 25 de abril de 2026"
      sections={[
        {
          title: "Aviso médico",
          body: (
            <div className="rounded-2xl border border-coral/30 bg-coral/10 p-5 text-slate-800">
              <p>
                Todo el contenido de BMI Checks, incluidos resultados de calculadoras, explicaciones de
                categorías, artículos educativos e información relacionada con salud, se ofrece solo con
                fines informativos generales. No constituye consejo médico, diagnóstico clínico ni
                recomendación de tratamiento.
              </p>
              <p className="mt-3">
                Consulta siempre a un profesional sanitario cualificado antes de tomar decisiones sobre
                tu salud, dieta, ejercicio u otro asunto relacionado. Si tienes una emergencia médica,
                contacta inmediatamente con el servicio de emergencias local.
              </p>
            </div>
          )
        },
        {
          title: "Qué es y qué no es BMI Checks",
          body: (
            <p>
              BMI Checks es un sitio independiente de herramientas de salud. Proporciona calculadoras y
              contenido educativo sobre IMC, metabolismo basal, peso ideal, necesidades calóricas y
              estimación de grasa corporal. No es una institución médica ni un proveedor sanitario.
            </p>
          )
        },
        {
          title: "Cómo se crea el contenido",
          body: (
            <ul className="list-disc space-y-2 pl-6">
              <li>Se consultan guías públicas de organizaciones sanitarias reconocidas.</li>
              <li>Las fórmulas se contrastan con referencias clínicas o fuentes publicadas.</li>
              <li>Las explicaciones son originales y evitan promesas médicas o diagnósticos.</li>
              <li>Cada página incluye limitaciones, contexto y avisos médicos cuando corresponde.</li>
            </ul>
          )
        },
        {
          title: "Fuentes y referencias",
          body: (
            <p>
              El sitio se apoya en orientación de organismos como la Organización Mundial de la Salud
              (OMS), Centers for Disease Control and Prevention (CDC), National Health Service (NHS) y
              literatura revisada por pares cuando aplica.
            </p>
          )
        },
        {
          title: "Precisión y limitaciones",
          body: (
            <p>
              Las calculadoras utilizan fórmulas estándar ampliamente publicadas, pero todos los
              resultados son estimaciones. El IMC no distingue grasa, músculo, hueso o agua; las
              calculadoras de calorías y TMB dependen de supuestos generales; y las estimaciones de grasa
              corporal pueden variar según técnica y medidas.
            </p>
          )
        },
        {
          title: "Revisión y correcciones",
          body: (
            <p>
              La lógica de las calculadoras se prueba antes de publicarse. El contenido educativo se
              revisa al menos una vez al año o cuando cambian guías relevantes. Para reportar errores,
              escribe a contact@bmichecks.com.
            </p>
          )
        }
      ]}
    />
  );
}
