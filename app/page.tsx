import Link from "next/link";

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
                  href="/registro"
                  className="inline-flex items-center gap-2 rounded-full bg-teal px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-teal-dark active:shadow-none"
                >
                  Crear mi cuenta gratis
                </Link>
                <Link
                  href="/demo"
                  className="inline-flex items-center gap-2 rounded-full border-2 border-teal/30 px-6 py-3 text-sm font-semibold text-teal transition hover:bg-teal/5"
                >
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 010 1.972l-11.54 6.347a1.125 1.125 0 01-1.667-.986V5.653z" /></svg>
                  Ver demo interactivo
                </Link>
              </div>
            </div>
            <div className="rounded-2xl border border-border bg-white p-8 shadow-sm text-center flex flex-col items-center justify-center">
              <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-teal/10">
                <svg className="h-8 w-8 text-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 9.75a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 01.778-.332 48.294 48.294 0 005.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
                </svg>
              </div>
              <h3 className="mb-2 text-xl font-bold text-text">¿Listo para conocer Vetuno?</h3>
              <p className="mb-6 text-text-light">Agenda una demo personalizada y te mostramos cómo organizar tu clínica veterinaria.</p>
              <a
                href="https://wa.me/573145553305"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 rounded-full bg-whatsapp px-8 py-3.5 text-base font-semibold text-white shadow-lg shadow-whatsapp/25 transition hover:bg-whatsapp-dark hover:shadow-xl"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                Solicitar demo por WhatsApp
              </a>
              <p className="mt-4 text-sm text-text-light">
                14 días de prueba gratis &middot; Sin tarjeta de crédito
              </p>
            </div>
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

      {/* ═══ RESUMEN DEL PRODUCTO ═══ */}
      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <h2 className="text-3xl font-extrabold text-text md:text-4xl">
            Todo lo que necesita tu clínica veterinaria, en un solo lugar
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-text-light">
            Historia clínica digital, agenda de citas, perfil unificado de mascota y tutor, fórmulas en PDF y autorizaciones — sin complejidad, sin curva de aprendizaje.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/producto"
              className="inline-flex items-center gap-2 rounded-full bg-teal px-8 py-3.5 text-base font-semibold text-white shadow-sm transition hover:bg-teal-dark active:shadow-none"
            >
              Conocer el producto
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
            <Link
              href="/modulos"
              className="rounded-full border-2 border-teal px-8 py-3.5 text-base font-semibold text-teal transition hover:bg-teal hover:text-white active:bg-teal-dark"
            >
              Ver funcionalidades
            </Link>
          </div>
        </div>
      </section>

      {/* ═══ CTA FINAL ═══ */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-3xl font-extrabold text-text md:text-4xl">
            Solicita una demo para tu clínica
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-text-light">
            Descubre en 20 minutos cómo Vetuno puede simplificar la operación de tu veterinaria. Sin compromiso y con acompañamiento.
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
            <Link
              href="/precios"
              className="rounded-full border-2 border-teal px-8 py-3.5 text-base font-semibold text-teal transition hover:bg-teal hover:text-white active:bg-teal-dark"
            >
              Ver planes y precios
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
