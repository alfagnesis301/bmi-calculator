import { ContentPage } from "@/components/ContentPage";
import { createLocalizedMetadata } from "@/lib/metadata";

export const metadata = createLocalizedMetadata({
  locale: "es",
  path: "/contact",
  title: "Contacto | Calculadora de IMC",
  description: "Información de contacto de BMI Checks para correcciones, comentarios y consultas generales.",
});

export default function SpanishContactPage() {
  return (
    <ContentPage
      title="Contacto"
      intro="¿Tienes una pregunta, una corrección o un comentario sobre BMI Checks? Puedes escribir al correo indicado abajo."
      sections={[
        {
          title: "Datos de contacto",
          body: (
            <div className="rounded-2xl bg-mist p-5">
              <p><strong className="text-ink">Propietario:</strong> Ricardo Diaz</p>
              <p>
                <strong className="text-ink">Email:</strong>{" "}
                <a href="mailto:contact@bmichecks.com" className="text-teal-700 underline-offset-4 hover:underline">
                  contact@bmichecks.com
                </a>
              </p>
              <p><strong className="text-ink">Sitio web:</strong> bmichecks.com</p>
            </div>
          )
        },
        {
          title: "Importante",
          body: (
            <p className="text-sm leading-7 text-muted">
              No envíes consultas médicas urgentes a través de este sitio. Para problemas personales
              de salud, contacta con un profesional sanitario cualificado o con el servicio de
              emergencias local.
            </p>
          )
        }
      ]}
    />
  );
}
