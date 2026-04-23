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
        <div className="mx-auto max-w-6xl px-6 pb-20 pt-20 text-center md:pt-28">
          <span className="mb-6 inline-block rounded-full border border-teal/20 bg-teal/8 px-4 py-1.5 text-sm font-semibold text-teal">
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
            <Link
              href="/precios"
              className="rounded-full border-2 border-teal px-8 py-3.5 text-base font-semibold text-teal transition hover:bg-teal hover:text-white active:bg-teal-dark"
            >
              Ver planes
            </Link>
          </div>
          <p className="mt-4 text-sm text-text-light">Solicita tu demo por WhatsApp</p>
          <p className="mt-1 text-sm text-text-light">
            14 días de prueba gratis &middot; Sin tarjeta de crédito
          </p>
        </div>
      </section>

      {/* ═══ TRUST BADGES ═══ */}
      <section className="border-y border-border bg-white py-10">
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
            Una plataforma completa para tu clínica
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-text-light">
            Historia clínica digital, agenda de citas, perfil unificado de mascota y tutor, fórmulas en PDF y autorizaciones — todo en un solo lugar.
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
            <div className="rounded-2xl border border-border bg-white p-8 shadow-sm text-center">
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
    </>
  );
}
