import Link from "next/link";
import { createLocalizedMetadata } from "@/lib/metadata";

export const metadata = createLocalizedMetadata({
  locale: "es",
  path: "/bmi-chart",
  title: "Tabla de IMC para adultos - Rangos por altura y peso",
  description:
    "Consulta una tabla de IMC para adultos, aprende a leer rangos por altura y peso, y entiende sus limitaciones.",
});

const rows = [
  ["152 cm", "43-58 kg", "59-69 kg", "70 kg o mas"],
  ["163 cm", "49-66 kg", "67-79 kg", "80 kg o mas"],
  ["173 cm", "55-74 kg", "75-89 kg", "90 kg o mas"],
  ["183 cm", "62-83 kg", "84-100 kg", "101 kg o mas"],
  ["193 cm", "69-92 kg", "93-111 kg", "112 kg o mas"]
];

export default function SpanishBMIChartPage() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
      <article className="space-y-8">
        <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-line sm:p-8">
          <p className="text-sm font-bold uppercase tracking-[0.12em] text-teal-700">Referencia de IMC adulto</p>
          <h1 className="mt-2 text-4xl font-black leading-tight text-ink">Tabla de IMC para adultos</h1>
          <p className="mt-4 leading-8 text-slate-700">
            Una tabla de IMC permite comparar altura y peso con rangos adultos. Es util para una
            vista rapida, aunque una calculadora ofrece un resultado mas preciso.
          </p>
        </section>

        <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-line sm:p-8">
          <h2 className="text-3xl font-black text-ink">Ejemplo de tabla de IMC</h2>
          <div className="mt-5 overflow-x-auto">
            <table className="w-full min-w-[720px] border-collapse text-left text-sm">
              <caption className="sr-only">Rangos aproximados de IMC adulto por altura</caption>
              <thead className="border-b border-slate-200 text-ink">
                <tr>
                  <th className="py-3 pr-4 font-black">Altura</th>
                  <th className="py-3 pr-4 font-black">Peso saludable</th>
                  <th className="py-3 pr-4 font-black">Sobrepeso</th>
                  <th className="py-3 font-black">Obesidad</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-700">
                {rows.map(([height, healthy, overweight, obesity]) => (
                  <tr key={height}>
                    <td className="py-3 pr-4 font-semibold">{height}</td>
                    <td className="py-3 pr-4">{healthy}</td>
                    <td className="py-3 pr-4">{overweight}</td>
                    <td className="py-3">{obesity}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-sm leading-7 text-slate-600">
            Los rangos son aproximados y redondeados. Usa la calculadora para valores exactos.
          </p>
        </section>

        <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-line sm:p-8">
          <h2 className="text-3xl font-black text-ink">Tabla frente a calculadora</h2>
          <p className="mt-4 leading-8 text-slate-700">
            La tabla es facil de revisar, pero puede ocultar diferencias por redondeo. La calculadora
            aplica la formula directamente a tus medidas y reduce errores de lectura.
          </p>
          <p className="mt-4 leading-8 text-slate-700">
            Ninguna tabla diagnostica salud. El IMC no contempla musculo, embarazo, edad, origen
            etnico ni condiciones medicas individuales.
          </p>
          <Link href="/es" className="mt-5 inline-flex rounded-2xl bg-teal-700 px-5 py-3 text-sm font-black text-white">
            Usar calculadora de IMC
          </Link>
        </section>
      </article>
    </main>
  );
}
