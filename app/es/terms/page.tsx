import { ContentPage } from "@/components/ContentPage";
import { createLocalizedMetadata } from "@/lib/metadata";

export const metadata = createLocalizedMetadata({
  locale: "es",
  path: "/terms",
  title: "Términos de uso | BMI Checks",
  description: "Términos de uso de BMI Checks y responsabilidades al utilizar el sitio.",
});

export default function SpanishTermsPage() {
  return (
    <ContentPage
      title="Términos de uso"
      eyebrow="Última revisión: 25 de abril de 2026"
      sections={[
        {
          title: "Aceptación",
          body: (
            <p>
              Al acceder o utilizar BMI Checks (bmichecks.com), aceptas estos Términos de uso. Si no
              estás de acuerdo, no utilices este sitio. Estos términos se rigen por las leyes de
              Inglaterra y Gales.
            </p>
          )
        },
        {
          title: "Uso informativo solamente",
          body: (
            <>
              <p>
                La calculadora de IMC y el contenido educativo se ofrecen solo con fines informativos
                generales. Nada en este sitio constituye consejo médico, diagnóstico ni tratamiento.
              </p>
              <p>
                Consulta siempre a un profesional sanitario cualificado antes de tomar decisiones sobre
                salud, alimentación o ejercicio. En una emergencia, contacta con el servicio de
                emergencias local.
              </p>
            </>
          )
        },
        {
          title: "Uso permitido",
          body: (
            <ul className="list-disc space-y-2 pl-6">
              <li>Usar el sitio para fines personales, lícitos y no comerciales.</li>
              <li>No intentar acceder sin autorización a la infraestructura del sitio.</li>
              <li>No copiar ni redistribuir contenido de forma masiva sin permiso.</li>
              <li>No usar el sitio de forma contraria a la legislación aplicable.</li>
            </ul>
          )
        },
        {
          title: "Propiedad intelectual",
          body: (
            <p>
              El contenido original de BMI Checks, incluidos textos, diseño y código, pertenece a
              Ricardo Diaz salvo que se indique lo contrario. Las fórmulas estándar de IMC son de uso
              público. Las referencias externas siguen perteneciendo a sus respectivas organizaciones.
            </p>
          )
        },
        {
          title: "Publicidad y enlaces externos",
          body: (
            <p>
              BMI Checks puede mostrar anuncios mediante Google AdSense y enlazar a sitios externos como
              CDC, OMS o NHS. No controlamos el contenido, disponibilidad ni prácticas de privacidad de
              esos sitios externos.
            </p>
          )
        },
        {
          title: "Sin garantías",
          body: (
            <p>
              BMI Checks se ofrece &quot;tal cual&quot; y &quot;según disponibilidad&quot;. Aunque trabajamos para mantener
              la información correcta, no garantizamos que el sitio esté libre de errores o interrupciones.
            </p>
          )
        },
        {
          title: "Contacto",
          body: (
            <p>
              Las preguntas sobre estos términos pueden enviarse a{" "}
              <a href="mailto:contact@bmichecks.com" className="font-semibold text-teal-700 underline-offset-4 hover:underline">
                contact@bmichecks.com
              </a>.
            </p>
          )
        }
      ]}
    />
  );
}
