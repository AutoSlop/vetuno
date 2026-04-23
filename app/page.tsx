import Header from "./components/Header";

import FAQ from "./components/FAQ";

/* ─── Icon helpers (inline SVGs to avoid external deps) ─── */

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

const plans = [
  {
    name: "Plan Base",
    price: "39",
    desc: "Para clínicas con 1 veterinario",
    features: [
      "1 usuario veterinario",
      "Historia clínica digital",
      "Agenda de citas",
      "Perfil de mascota y tutor",
      "Soporte por correo",
    ],
    highlighted: false,
  },
  {
    name: "Plan Equipo",
    price: "69",
    desc: "Para clínicas con 2-3 veterinarios",
    features: [
      "Hasta 3 usuarios",
      "Todo del Plan Base",
      "Fórmulas veterinarias en PDF",
      "Autorizaciones y consentimientos",
      "Soporte prioritario por WhatsApp",
    ],
    highlighted: true,
  },
  {
    name: "Plan Clínica",
    price: "99",
    desc: "Para clínicas con 4-5 veterinarios",
    features: [
      "Hasta 5 usuarios",
      "Todo del Plan Equipo",
      "Onboarding personalizado",
      "Configuración asistida",
      "Soporte prioritario dedicado",
    ],
    highlighted: false,
  },
];

/* ─── Page ─── */

export default function Home() {
  return (
    <>
      <Header />

      {/* ═══ HERO ═══ */}
      <section className="relative overflow-hidden bg-gradient-to-b from-white to-bg">
        <div className="mx-auto max-w-6xl px-6 pb-20 pt-20 text-center md:pt-28">
          <span className="mb-6 inline-block rounded-full bg-teal/10 px-4 py-1.5 text-sm font-semibold text-teal">
            Plataforma para veterinarias en Colombia
          </span>
          <h1 className="mx-auto max-w-3xl text-4xl font-extrabold leading-tight tracking-tight text-text md:text-5xl lg:text-6xl">
            Todo lo que tu veterinaria necesita, en un solo lugar
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-text-light md:text-xl">
            Historia clínica, agenda, fórmulas, autorizaciones y perfil de
            mascota en una plataforma simple para clínicas veterinarias en
            Colombia.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="https://wa.me/573145553305"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 rounded-full bg-whatsapp px-8 py-3.5 text-base font-semibold text-white shadow-lg shadow-whatsapp/25 transition hover:bg-whatsapp-dark hover:shadow-xl"
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              Hablar por WhatsApp
            </a>
            <a
              href="#precios"
              className="rounded-full border-2 border-teal px-8 py-3.5 text-base font-semibold text-teal transition hover:bg-teal/5"
            >
              Ver planes
            </a>
          </div>
          <p className="mt-5 text-sm text-text-light">
            14 días de prueba gratis &middot; Sin tarjeta de crédito
          </p>
        </div>
      </section>

      {/* ═══ TRUST BADGES ═══ */}
      <section className="border-y border-gray-100 bg-white py-10">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <p className="mb-6 text-sm font-medium uppercase tracking-wider text-text-light">
            Diseñado para clínicas veterinarias colombianas
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 text-text-light">
            <div className="flex items-center gap-2">
              <svg className="h-5 w-5 text-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-sm font-medium">100% en la nube</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="h-5 w-5 text-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-sm font-medium">Datos seguros</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="h-5 w-5 text-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-sm font-medium">Soporte en español</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="h-5 w-5 text-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-sm font-medium">Sin instalación</span>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ PROBLEMA / SOLUCIÓN ═══ */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-12 md:grid-cols-2 md:gap-16">
            <div className="rounded-2xl border border-red-100 bg-red-50/50 p-8">
              <h3 className="mb-4 text-lg font-bold text-red-700">Sin Vetuno</h3>
              <ul className="space-y-3 text-red-700/80">
                <li className="flex items-start gap-3">
                  <svg className="mt-0.5 h-5 w-5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  Historias clínicas en cuadernos o archivos sueltos
                </li>
                <li className="flex items-start gap-3">
                  <svg className="mt-0.5 h-5 w-5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  Citas coordinadas por WhatsApp y memoria
                </li>
                <li className="flex items-start gap-3">
                  <svg className="mt-0.5 h-5 w-5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  Fórmulas sin respaldo y documentos extraviados
                </li>
                <li className="flex items-start gap-3">
                  <svg className="mt-0.5 h-5 w-5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  Tiempo perdido entre papel, Excel y WhatsApp
                </li>
              </ul>
            </div>
            <div className="rounded-2xl border border-teal/20 bg-teal/5 p-8">
              <h3 className="mb-4 text-lg font-bold text-teal">Con Vetuno</h3>
              <ul className="space-y-3 text-teal-dark">
                <li className="flex items-start gap-3">
                  <CheckIcon />
                  Todo el expediente clínico digital y centralizado
                </li>
                <li className="flex items-start gap-3">
                  <CheckIcon />
                  Agenda de citas organizada y visible para todo el equipo
                </li>
                <li className="flex items-start gap-3">
                  <CheckIcon />
                  Fórmulas y autorizaciones en PDF, siempre disponibles
                </li>
                <li className="flex items-start gap-3">
                  <CheckIcon />
                  Una sola plataforma simple que tu equipo adopta rápido
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ MÓDULOS ═══ */}
      <section id="modulos" className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mx-auto mb-14 max-w-2xl text-center">
            <h2 className="text-3xl font-extrabold text-text md:text-4xl">
              Lo que incluye Vetuno
            </h2>
            <p className="mt-4 text-lg text-text-light">
              Módulos pensados para la operación diaria de tu clínica veterinaria.
            </p>
          </div>
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
      <section id="como-funciona" className="py-20 md:py-28">
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

      {/* ═══ PRICING ═══ */}
      <section id="precios" className="py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mx-auto mb-14 max-w-2xl text-center">
            <h2 className="text-3xl font-extrabold text-text md:text-4xl">
              Planes y precios
            </h2>
            <p className="mt-4 text-lg text-text-light">
              Elige el plan que se ajusta a tu clínica. Todos incluyen 14 días de prueba gratis.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`relative rounded-2xl border p-8 transition ${
                  plan.highlighted
                    ? "border-teal bg-white shadow-xl shadow-teal/10 ring-2 ring-teal"
                    : "border-gray-200 bg-white hover:shadow-md"
                }`}
              >
                {plan.highlighted && (
                  <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-orange px-4 py-1 text-xs font-bold text-white">
                    Más popular
                  </span>
                )}
                <h3 className="text-lg font-bold text-text">{plan.name}</h3>
                <p className="mt-1 text-sm text-text-light">{plan.desc}</p>
                <div className="mt-6 flex items-baseline gap-1">
                  <span className="text-4xl font-extrabold text-text">
                    ${plan.price}
                  </span>
                  <span className="text-text-light">USD/mes</span>
                </div>
                <ul className="mt-8 space-y-3">
                  {plan.features.map((f, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-text-light">
                      <CheckIcon />
                      {f}
                    </li>
                  ))}
                </ul>
                <a
                  href="https://wa.me/573145553305"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`mt-8 block rounded-xl py-3 text-center font-semibold transition ${
                    plan.highlighted
                      ? "bg-teal text-white hover:bg-teal-dark"
                      : "border-2 border-teal text-teal hover:bg-teal/5"
                  }`}
                >
                  Solicitar demo
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ FAQ ═══ */}
      <section id="faq" className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mx-auto mb-14 max-w-2xl text-center">
            <h2 className="text-3xl font-extrabold text-text md:text-4xl">
              Preguntas frecuentes
            </h2>
          </div>
          <FAQ />
        </div>
      </section>

      {/* ═══ MI MEMBRESÍA ═══ */}
      <section id="membresia" className="py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mx-auto mb-14 max-w-2xl text-center">
            <h2 className="text-3xl font-extrabold text-text md:text-4xl">
              Mi membresía
            </h2>
            <p className="mt-4 text-lg text-text-light">
              Cada usuario de Vetuno cuenta con su tarjeta de membresía digital.
            </p>
          </div>
          <div className="mx-auto max-w-md">
            <div className="overflow-hidden rounded-2xl shadow-xl ring-1 ring-gray-100">
              {/* Card header with gradient */}
              <div className="relative bg-gradient-to-br from-teal via-teal-dark to-teal px-6 py-6 text-white">
                <div className="absolute inset-0 opacity-10" style={{backgroundImage: 'radial-gradient(circle at 20% 50%, white 1px, transparent 1px), radial-gradient(circle at 80% 20%, white 1px, transparent 1px)', backgroundSize: '30px 30px'}}></div>
                <div className="relative flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <svg className="h-6 w-6 text-accent" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>
                    <span className="text-xl font-bold tracking-wide">Vetuno</span>
                  </div>
                  <span className="rounded-full border border-white/30 bg-white/15 px-3 py-0.5 text-xs font-semibold uppercase tracking-wider backdrop-blur-sm">
                    Miembro
                  </span>
                </div>
                <p className="relative mt-2 text-sm text-white/70">Plataforma veterinaria</p>
              </div>
              {/* Card body */}
              <div className="bg-white p-6">
                <div className="flex items-center gap-5">
                  {/* Avatar with initials */}
                  <div className="relative">
                    <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-teal to-teal-dark text-xl font-bold text-white shadow-md">
                      ML
                    </div>
                    {/* Status badge */}
                    <span className="absolute -bottom-0.5 -right-0.5 flex h-5 w-5 items-center justify-center rounded-full border-2 border-white bg-emerald-500">
                      <svg className="h-3 w-3 text-white" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg>
                    </span>
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-lg font-bold text-text">Dra. María López Rodríguez</h3>
                    <p className="text-sm font-medium text-teal">Médica Veterinaria</p>
                    <p className="mt-0.5 text-xs text-text-light">Clínica Veterinaria El Roble</p>
                  </div>
                </div>

                <div className="mt-6 space-y-3 text-sm">
                  <div className="flex items-center justify-between border-b border-gray-100 pb-2">
                    <span className="font-medium text-text-light">ID de miembro</span>
                    <span className="font-mono font-semibold text-text">VET-2025-00142</span>
                  </div>
                  <div className="flex items-center justify-between border-b border-gray-100 pb-2">
                    <span className="font-medium text-text-light">Cargo</span>
                    <span className="font-semibold text-text">Directora clínica</span>
                  </div>
                  <div className="flex items-center justify-between border-b border-gray-100 pb-2">
                    <span className="font-medium text-text-light">Clínica</span>
                    <span className="font-semibold text-text">Veterinaria El Roble</span>
                  </div>
                  <div className="flex items-center justify-between border-b border-gray-100 pb-2">
                    <span className="font-medium text-text-light">Fecha de emisión</span>
                    <span className="font-semibold text-text">15 de marzo, 2025</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-medium text-text-light">Estado</span>
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-3 py-1 text-xs font-bold text-emerald-600">
                      <span className="h-2 w-2 rounded-full bg-emerald-500"></span>
                      Activo
                    </span>
                  </div>
                </div>
              </div>
              {/* Card footer */}
              <div className="border-t border-gray-100 bg-bg px-6 py-3">
                <div className="flex items-center justify-between text-xs text-text-light">
                  <span>Plan Equipo</span>
                  <span className="font-medium text-accent">Membresía vigente</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ CTA + DEMO FORM ═══ */}
      <section id="demo" className="py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <div>
              <h2 className="text-3xl font-extrabold text-text md:text-4xl">
                Lleva tu clínica al siguiente nivel
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-text-light">
                Solicita una demo personalizada y descubre cómo Vetuno puede
                simplificar la operación de tu veterinaria. Sin compromiso.
              </p>
              <ul className="mt-8 space-y-3">
                <li className="flex items-center gap-3 text-text-light">
                  <CheckIcon />
                  Demo personalizada de 20 minutos
                </li>
                <li className="flex items-center gap-3 text-text-light">
                  <CheckIcon />
                  14 días de prueba gratis
                </li>
                <li className="flex items-center gap-3 text-text-light">
                  <CheckIcon />
                  Onboarding acompañado
                </li>
              </ul>
            </div>
            <div className="rounded-2xl bg-white p-8 shadow-lg text-center">
              <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-teal/10">
                <svg className="h-8 w-8 text-teal" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              </div>
              <h3 className="mb-2 text-xl font-bold text-text">¿Listo para empezar?</h3>
              <p className="mb-6 text-text-light">Agenda una demo por WhatsApp y conoce cómo Vetuno puede ayudar a tu veterinaria.</p>
              <a
                href="https://wa.me/573145553305"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 rounded-full bg-whatsapp px-8 py-3.5 text-base font-semibold text-white shadow-lg shadow-whatsapp/25 transition hover:bg-whatsapp-dark hover:shadow-xl"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                Solicitar demo por WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ FOOTER ═══ */}
      <footer className="border-t border-gray-200 bg-white py-12">
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
            <div>
              <span className="text-xl font-bold text-teal">Vetuno</span>
              <p className="mt-1 text-sm text-text-light">
                Software para clínicas veterinarias en Colombia
              </p>
            </div>
            <div className="flex flex-col items-center gap-2 text-sm text-text-light md:items-end">
              <span>info@example.com</span>
              <a href="https://wa.me/573145553305" target="_blank" rel="noopener noreferrer" className="hover:text-teal transition">+57 314 555 3305</a>
            </div>
          </div>
          <div className="mt-8 border-t border-gray-100 pt-6 text-center text-sm text-text-light">
            &copy; {new Date().getFullYear()} Vetuno. Todos los derechos reservados.
          </div>
        </div>
      </footer>
    </>
  );
}
