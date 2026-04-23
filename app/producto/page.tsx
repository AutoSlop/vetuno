import type { Metadata } from "next";
import Link from "next/link";
import MembershipCard from "../components/MembershipCard";

export const metadata: Metadata = {
  title: "Producto — Vetuno",
  description: "Vetuno es la plataforma all-in-one para clínicas veterinarias en Colombia. Centraliza tu operación clínica sin complejidad.",
};

/* ─── Data ─── */

const steps = [
  {
    num: "1",
    title: "Agenda una demo",
    desc: "Escríbenos por WhatsApp y te contactamos para mostrarte la plataforma en acción.",
  },
  {
    num: "2",
    title: "Configuramos tu clínica",
    desc: "Nuestro equipo te acompaña para dejar todo listo: usuarios, datos y preferencias.",
  },
  {
    num: "3",
    title: "Empieza a operar",
    desc: "Tu clínica funcionando con Vetuno desde el primer día. Sin complicaciones.",
  },
];

const benefits = [
  "Menos tiempo entre WhatsApp, papel y Excel",
  "Mejor trazabilidad clínica de cada paciente",
  "Documentos ordenados y siempre accesibles",
  "Implementación simple, sin dolores de cabeza",
];

export default function ProductoPage() {
  return (
    <>
      {/* ═══ HERO PRODUCTO ═══ */}
      <section className="bg-gradient-to-b from-white to-bg py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <h1 className="text-3xl font-extrabold text-text md:text-5xl">
            Una plataforma all-in-one para tu veterinaria
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-text-light">
            Vetuno centraliza toda la operación de tu clínica veterinaria en Colombia: expedientes, citas, fórmulas y documentos en un solo lugar, sin complejidad.
          </p>
          <div className="mt-8">
            <Link
              href="/funcionalidades"
              className="inline-flex items-center gap-2 rounded-full bg-teal px-8 py-3.5 text-base font-semibold text-white transition hover:bg-teal-dark"
            >
              Ver funcionalidades
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ═══ CÓMO FUNCIONA ═══ */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mx-auto mb-14 max-w-2xl text-center">
            <h2 className="text-3xl font-extrabold text-text md:text-4xl">
              Cómo funciona
            </h2>
            <p className="mt-4 text-lg text-text-light">
              En tres pasos sencillos, tu clínica está operando con Vetuno.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {steps.map((s) => (
              <div key={s.num} className="text-center">
                <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-teal text-2xl font-bold text-white">
                  {s.num}
                </div>
                <h3 className="mb-2 text-xl font-bold text-text">{s.title}</h3>
                <p className="text-text-light leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ BENEFICIOS ═══ */}
      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <div>
              <h2 className="text-3xl font-extrabold text-text md:text-4xl">
                Beneficios para tu clínica
              </h2>
              <p className="mt-4 text-lg text-text-light">
                Vetuno simplifica la operación diaria para que te concentres en lo que importa: tus pacientes.
              </p>
            </div>
            <ul className="space-y-5">
              {benefits.map((b, i) => (
                <li key={i} className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-orange/15">
                    <svg className="h-5 w-5 text-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                  </div>
                  <span className="pt-1.5 text-lg text-text">{b}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ═══ CARNET DIGITAL ═══ */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mx-auto mb-14 max-w-2xl text-center">
            <h2 className="text-3xl font-extrabold text-text md:text-4xl">
              Carnet digital
            </h2>
            <p className="mt-4 text-lg text-text-light">
              Cada usuario de Vetuno cuenta con su tarjeta de membresía digital, accesible desde cualquier dispositivo.
            </p>
          </div>
          <MembershipCard />
        </div>
      </section>
    </>
  );
}
