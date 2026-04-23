import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Funcionalidades — Vetuno",
  description: "Conoce los módulos de Vetuno: historia clínica digital, agenda de citas, perfil unificado, fórmulas en PDF y autorizaciones.",
};

/* ─── Icon helpers ─── */

function IconClinica() {
  return (
    <svg className="h-8 w-8 text-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15a2.25 2.25 0 012.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
    </svg>
  );
}

function IconCalendar() {
  return (
    <svg className="h-8 w-8 text-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z" />
    </svg>
  );
}

function IconPet() {
  return (
    <svg className="h-8 w-8 text-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z" />
    </svg>
  );
}

function IconDocument() {
  return (
    <svg className="h-8 w-8 text-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
    </svg>
  );
}

function IconShield() {
  return (
    <svg className="h-8 w-8 text-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
    </svg>
  );
}

/* ─── Data ─── */

const modules = [
  {
    icon: <IconClinica />,
    title: "Historia clínica digital",
    desc: "Consultas, vacunas, alergias y evolución de cada paciente en un solo expediente digital.",
  },
  {
    icon: <IconCalendar />,
    title: "Agenda de citas",
    desc: "Crea, reprograma y visualiza citas de tu clínica de forma rápida y centralizada.",
  },
  {
    icon: <IconPet />,
    title: "Perfil unificado",
    desc: "Toda la información de la mascota y su tutor conectada en un mismo perfil.",
  },
  {
    icon: <IconDocument />,
    title: "Fórmulas en PDF",
    desc: "Genera fórmulas veterinarias en PDF que se guardan automáticamente en el expediente.",
  },
  {
    icon: <IconShield />,
    title: "Autorizaciones y consentimientos",
    desc: "Documentos de autorización vinculados al paciente, siempre accesibles y ordenados.",
  },
];

export default function FuncionalidadesPage() {
  return (
    <>
      {/* ═══ HERO ═══ */}
      <section className="bg-gradient-to-b from-bg-alt via-white to-bg py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <h1 className="text-3xl font-extrabold text-text md:text-5xl">
            Funcionalidades de Vetuno
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-text-light">
            Módulos pensados para la operación diaria de tu clínica veterinaria.
          </p>
        </div>
      </section>

      {/* ═══ MÓDULOS ═══ */}
      <section className="bg-bg-alt py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {modules.map((m, i) => (
              <div
                key={i}
                className="rounded-2xl border border-border bg-white p-7 shadow-sm transition hover:shadow-md"
              >
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-teal/10">
                  {m.icon}
                </div>
                <h3 className="mb-2 text-lg font-bold text-text">{m.title}</h3>
                <p className="leading-relaxed text-text-light">{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ CTA ═══ */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="text-3xl font-extrabold text-text md:text-4xl">
            ¿Quieres ver estas funcionalidades en acción?
          </h2>
          <p className="mt-4 text-lg text-text-light">
            Solicita una demo personalizada y te mostramos cómo Vetuno puede transformar la operación de tu clínica.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="https://wa.me/573145553305"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 rounded-full bg-whatsapp px-8 py-3.5 text-base font-semibold text-white shadow-lg shadow-whatsapp/25 transition hover:bg-whatsapp-dark hover:shadow-xl"
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              Solicitar demo por WhatsApp
            </a>
            <Link
              href="/precios"
              className="rounded-full border-2 border-teal px-8 py-3.5 text-base font-semibold text-teal transition hover:bg-teal hover:text-white active:bg-teal-dark"
            >
              Ver planes
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
