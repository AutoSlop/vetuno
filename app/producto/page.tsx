import type { Metadata } from "next";
import MembershipCard from "../components/MembershipCard";

export const metadata: Metadata = {
  title: "Producto — Vetuno",
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

function CheckIcon() {
  return (
    <svg className="mt-0.5 h-5 w-5 shrink-0 text-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
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
            Lo que incluye Vetuno
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-text-light">
            Módulos pensados para la operación diaria de tu clínica veterinaria.
          </p>
        </div>
      </section>

      {/* ═══ MÓDULOS ═══ */}
      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {modules.map((m, i) => (
              <div
                key={i}
                className="rounded-2xl border border-gray-100 bg-bg p-7 transition hover:shadow-md"
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
