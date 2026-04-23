import type { Metadata } from "next";
import FAQ from "../components/FAQ";

export const metadata: Metadata = {
  title: "Precios — Vetuno",
  description: "Planes y precios de Vetuno. Plan Base USD $39/mes, Plan Equipo USD $69/mes, Plan Clínica USD $99/mes. 14 días de prueba gratis.",
};

function CheckIcon() {
  return (
    <svg className="mt-0.5 h-5 w-5 shrink-0 text-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
    </svg>
  );
}

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

export default function PreciosPage() {
  return (
    <>
      {/* ═══ PRICING ═══ */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mx-auto mb-14 max-w-2xl text-center">
            <h1 className="text-3xl font-extrabold text-text md:text-5xl">
              Planes y precios
            </h1>
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
      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mx-auto mb-14 max-w-2xl text-center">
            <h2 className="text-3xl font-extrabold text-text md:text-4xl">
              Preguntas frecuentes
            </h2>
          </div>
          <FAQ />
        </div>
      </section>
    </>
  );
}
