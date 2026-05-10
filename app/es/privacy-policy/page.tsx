import { ContentPage } from "@/components/ContentPage";
import { createLocalizedMetadata } from "@/lib/metadata";

export const metadata = createLocalizedMetadata({
  locale: "es",
  path: "/privacy-policy",
  title: "Política de privacidad | BMI Checks",
  description:
    "Política de privacidad de BMI Checks: cookies, Google AdSense, proveedores externos y datos del usuario.",
});

export default function SpanishPrivacyPolicyPage() {
  return (
    <ContentPage
      title="Política de privacidad"
      eyebrow="Última revisión: 25 de abril de 2026"
      sections={[
        {
          title: "Resumen",
          body: (
            <p>
              Esta Política de privacidad explica cómo BMI Checks (bmichecks.com), propiedad de Ricardo
              Diaz, Reino Unido, recoge, utiliza y protege información cuando visitas este sitio. Al usar
              BMI Checks aceptas las prácticas descritas en esta política.
            </p>
          )
        },
        {
          title: "Información que recogemos",
          body: (
            <>
              <p>
                <strong>Datos de la calculadora:</strong> la calculadora de IMC funciona en tu navegador.
                Las medidas que introduces, como edad, altura o peso, no se envían a nuestros servidores.
              </p>
              <p>
                <strong>Datos de uso:</strong> como ocurre en muchos sitios, el proveedor de alojamiento
                Netlify puede recoger registros técnicos estándar, como dirección IP, navegador, página
                de referencia y páginas visitadas, con fines de seguridad y rendimiento.
              </p>
            </>
          )
        },
        {
          title: "Cookies",
          body: (
            <>
              <p>
                BMI Checks puede utilizar cookies o tecnologías similares para recordar preferencias,
                medir funcionamiento técnico y mostrar publicidad cuando corresponda.
              </p>
              <p>
                Puedes controlar o eliminar cookies desde la configuración de tu navegador. Retirar el
                consentimiento puede afectar la personalización o visualización de anuncios.
              </p>
            </>
          )
        },
        {
          title: "Google AdSense y cookies publicitarias",
          body: (
            <>
              <p>
                BMI Checks puede mostrar anuncios mediante Google AdSense. Google y sus socios pueden
                usar cookies, incluida la cookie de DoubleClick, para mostrar anuncios basados en visitas
                previas a este y otros sitios.
              </p>
              <p>
                Puedes gestionar la personalización de anuncios en{" "}
                <a href="https://www.google.com/settings/ads" className="text-teal-700 underline-offset-4 hover:underline" rel="noreferrer">
                  Google Ads Settings
                </a>{" "}
                y consultar cómo Google utiliza datos en{" "}
                <a href="https://policies.google.com/technologies/partner-sites" className="text-teal-700 underline-offset-4 hover:underline" rel="noreferrer">
                  políticas de sitios asociados de Google
                </a>.
              </p>
            </>
          )
        },
        {
          title: "Proveedores externos",
          body: (
            <ul className="list-disc space-y-2 pl-6">
              <li><strong>Netlify:</strong> alojamiento, CDN y registros técnicos.</li>
              <li><strong>Google AdSense / Google LLC:</strong> servicios publicitarios.</li>
            </ul>
          )
        },
        {
          title: "Datos del usuario y derechos",
          body: (
            <p>
              Como la calculadora funciona en el navegador y no almacenamos datos personales de salud en
              servidores propios, la información disponible para nosotros es limitada. Puedes escribir a
              contact@bmichecks.com para consultas relacionadas con privacidad.
            </p>
          )
        },
        {
          title: "Datos de salud y cálculos locales",
          body: (
            <>
              <p>
                BMI Checks no solicita nombre, dirección, número de teléfono ni historial médico para usar
                sus calculadoras. Las medidas introducidas se procesan en el navegador para generar el
                resultado y no se guardan en una base de datos del sitio.
              </p>
              <p>
                Si una función permite guardar un resultado localmente, ese dato queda en el dispositivo
                del usuario mediante almacenamiento del navegador. Borrar datos del navegador o usar modo
                privado puede eliminar esa información local.
              </p>
            </>
          )
        },
        {
          title: "Consentimiento y publicidad",
          body: (
            <>
              <p>
                Antes de la aprobación publicitaria, el sitio puede incluir solo la configuración técnica
                necesaria para verificación, sin mostrar unidades de anuncios. Cuando la publicidad esté
                habilitada, se informará de forma clara y no se colocarán anuncios simulando navegación
                ni junto a botones de calculadoras.
              </p>
              <p>
                Puedes bloquear o eliminar cookies desde el navegador. También puedes revisar las opciones
                de personalización de Google y las políticas de los proveedores externos enlazadas en esta
                página.
              </p>
            </>
          )
        },
        {
          title: "Seguridad y retención",
          body: (
            <p>
              El sitio está alojado en Netlify, que puede conservar registros técnicos durante periodos
              limitados para seguridad, depuración y rendimiento. BMI Checks no vende datos personales ni
              crea perfiles médicos a partir de los resultados de las calculadoras.
            </p>
          )
        },
        {
          title: "Cómo contactar",
          body: (
            <p>
              Para preguntas sobre privacidad, solicitudes de corrección o eliminación de información,
              escribe a{" "}
              <a href="mailto:contact@bmichecks.com" className="font-semibold text-teal-700 underline-offset-4 hover:underline">
                contact@bmichecks.com
              </a>. Revisaremos la solicitud y responderemos dentro de un plazo razonable.
            </p>
          )
        },
        {
          title: "Cambios en esta política",
          body: (
            <p>
              Podemos actualizar esta política cuando sea necesario. Las modificaciones se publicarán en
              esta página con una fecha de revisión actualizada.
            </p>
          )
        }
      ]}
    />
  );
}
