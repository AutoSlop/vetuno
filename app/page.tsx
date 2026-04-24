import Link from "next/link";
import DemoRequestForm from "./components/DemoRequestForm";

function CheckIcon() {
  return (
    <svg className="mt-0.5 h-5 w-5 shrink-0 text-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
    </svg>
  );
}

export default function Home() {
  return (
    <>
      {/* ═══ HERO ═══ */}
      <section className="relative overflow-hidden bg-gradient-to-b from-bg-alt via-white to-bg">
        <div className="mx-auto max-w-6xl px-6 pb-12 pt-20 md:pt-28">
          <div className="text-center">
            <span className="mb-6 inline-block rounded-full border border-teal/20 bg-teal/8 px-4 py-1.5 text-sm font-semibold text-teal">
              Para clínicas de 1 a 5 veterinarios en Colombia
            </span>
            <h1 className="mx-auto max-w-4xl text-4xl font-extrabold leading-tight tracking-tight text-text md:text-5xl lg:text-6xl">
              Deja atrás WhatsApp, papel y Excel para manejar tu veterinaria
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-text-light md:text-xl">
              Centraliza historia clínica, agenda de citas, fórmulas, autorizaciones y perfil de mascota en una sola plataforma diseñada para clínicas veterinarias pequeñas.
            </p>
          </div>

          {/* ═══ FORMULARIO DE DEMO + BENEFICIOS ═══ */}
          <div className="mt-10 grid items-start gap-10 md:grid-cols-2">
            <div className="flex flex-col justify-center">
              <h2 className="text-2xl font-bold text-text md:text-3xl">
                Quiero ver cómo Vetuno organiza mi veterinaria
              </h2>
              <p className="mt-3 text-text-light">
                Agenda una demo personalizada y descubre cómo simplificar la operación de tu clínica.
              </p>
              <ul className="mt-8 space-y-4">
                <li className="flex items-start gap-3 text-text-light">
                  <CheckIcon />
                  <span><strong className="text-text">Menos tiempo en tareas manuales</strong> — deja de coordinar por WhatsApp y buscar archivos en papel</span>
                </li>
                <li className="flex items-start gap-3 text-text-light">
                  <CheckIcon />
                  <span><strong className="text-text">Mejor orden clínico y documental</strong> — todo el expediente digital, organizado y accesible</span>
                </li>
                <li className="flex items-start gap-3 text-text-light">
                  <CheckIcon />
                  <span><strong className="text-text">Implementación simple para equipos pequeños</strong> — tu equipo lo adopta rápido, sin complicaciones</span>
                </li>
              </ul>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Link
                  href="/demo"
                  className="inline-flex items-center gap-2 rounded-full bg-teal px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-teal-dark active:shadow-none"
                >
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 010 1.972l-11.54 6.347a1.125 1.125 0 01-1.667-.986V5.653z" /></svg>
                  Ver demo interactivo
                </Link>
                <Link
                  href="/precios"
                  className="rounded-full border-2 border-teal px-6 py-3 text-sm font-semibold text-teal transition hover:bg-teal hover:text-white active:bg-teal-dark"
                >
                  Ver planes
                </Link>
              </div>
              <p className="mt-4 text-sm text-text-light">
                14 días de prueba gratis &middot; Sin tarjeta de crédito
              </p>
            </div>
            <DemoRequestForm />
          </div>
        </div>
      </section>

      {/* ═══ VALOR RÁPIDO — 3 CARDS ═══ */}
      <section className="border-y border-border bg-white py-16">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="mb-10 text-center text-2xl font-bold text-text md:text-3xl">
            ¿Qué resuelve Vetuno en tu clínica?
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                icon: (
                  <svg className="h-7 w-7 text-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                  </svg>
                ),
                title: "Organiza citas sin depender de WhatsApp",
                desc: "Crea, reprograma y visualiza citas desde una agenda centralizada que todo tu equipo puede ver.",
              },
              {
                icon: (
                  <svg className="h-7 w-7 text-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m5.231 13.481L15 17.25m-4.5-15H5.625c-.621 0-1.125.504-1.125 1.125v16.5c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9zm3.75 11.625a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
                  </svg>
                ),
                title: "Encuentra la historia clínica en segundos",
                desc: "Consultas, vacunas, alergias y evolución de cada paciente — todo digital y al instante.",
              },
              {
                icon: (
                  <svg className="h-7 w-7 text-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                  </svg>
                ),
                title: "Emite fórmulas y autorizaciones desde un solo lugar",
                desc: "Genera PDFs de fórmulas veterinarias y consentimientos vinculados al expediente del paciente.",
              },
            ].map((card) => (
              <div key={card.title} className="rounded-2xl border border-border bg-bg p-8 shadow-sm">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-teal/10">
                  {card.icon}
                </div>
                <h3 className="mb-2 text-lg font-bold text-text">{card.title}</h3>
                <p className="text-sm leading-relaxed text-text-light">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ TRUST BADGES ═══ */}
      <section className="bg-bg-alt py-10">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <p className="mb-6 text-sm font-medium uppercase tracking-wider text-text-light">
            Diseñado para clínicas veterinarias colombianas
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 text-text-light">
            {["100% en la nube", "Datos seguros", "Soporte en español", "Sin instalación"].map((badge) => (
              <div key={badge} className="flex items-center gap-2">
                <svg className="h-5 w-5 text-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-sm font-medium">{badge}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ PROBLEMA / SOLUCIÓN ═══ */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="mb-12 text-center text-2xl font-bold text-text md:text-3xl">
            ¿Tu clínica todavía depende de papel, Excel y WhatsApp?
          </h2>
          <div className="grid gap-12 md:grid-cols-2 md:gap-16">
            <div className="rounded-2xl border border-red-200/60 bg-red-50/40 p-8 shadow-sm">
              <h3 className="mb-4 text-lg font-bold text-red-700">Sin Vetuno</h3>
              <ul className="space-y-3 text-red-700/80">
                {[
                  "Historias clínicas en cuadernos o archivos sueltos",
                  "Citas coordinadas por WhatsApp y memoria",
                  "Fórmulas sin respaldo y documentos extraviados",
                  "Tiempo perdido entre papel, Excel y WhatsApp",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <svg className="mt-0.5 h-5 w-5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-teal/20 bg-teal/5 p-8 shadow-sm">
              <h3 className="mb-4 text-lg font-bold text-teal">Con Vetuno</h3>
              <ul className="space-y-3 text-teal-dark">
                {[
                  "Todo el expediente clínico digital y centralizado",
                  "Agenda de citas organizada y visible para todo el equipo",
                  "Fórmulas y autorizaciones en PDF, siempre disponibles",
                  "Una sola plataforma simple que tu equipo adopta rápido",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckIcon />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ RESUMEN DEL PRODUCTO ═══ */}
      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <h2 className="text-3xl font-extrabold text-text md:text-4xl">
            Todo lo que necesita tu clínica veterinaria, en un solo lugar
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-text-light">
            Historia clínica digital, agenda de citas, perfil unificado de mascota y tutor, fórmulas en PDF y autorizaciones — sin complejidad, sin curva de aprendizaje.
          </p>
          <div className="mt-10">
            <Link
              href="/producto"
              className="inline-flex items-center gap-2 rounded-full bg-teal px-8 py-3.5 text-base font-semibold text-white shadow-sm transition hover:bg-teal-dark active:shadow-none"
            >
              Conocer el producto
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ═══ CTA FINAL ═══ */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid items-start gap-12 md:grid-cols-2">
            <div>
              <h2 className="text-3xl font-extrabold text-text md:text-4xl">
                Solicita una demo para tu clínica
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-text-light">
                Descubre en 20 minutos cómo Vetuno puede simplificar la operación de tu veterinaria. Sin compromiso y con acompañamiento.
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
            <DemoRequestForm />
          </div>
        </div>
      </section>
    </>
  );
}
