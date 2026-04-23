"use client";

import { useState } from "react";

const faqs = [
  {
    q: "¿Vetuno sirve para clínicas veterinarias pequeñas?",
    a: "Sí. Vetuno fue diseñado especialmente para clínicas de 1 a 5 veterinarios en Colombia. No necesitas un equipo de TI ni infraestructura especial para empezar.",
  },
  {
    q: "¿Incluye soporte técnico?",
    a: "Todos los planes incluyen soporte por correo y WhatsApp. Los planes Equipo y Clínica incluyen soporte prioritario con tiempos de respuesta más rápidos.",
  },
  {
    q: "¿Puedo probar Vetuno gratis antes de pagar?",
    a: "Sí. Todos los planes incluyen una prueba gratuita de 14 días sin compromiso. No necesitas tarjeta de crédito para empezar.",
  },
  {
    q: "¿Vetuno genera fórmulas veterinarias en PDF?",
    a: "Sí. Puedes crear fórmulas veterinarias que se generan automáticamente en PDF y quedan guardadas en el expediente digital de cada paciente.",
  },
  {
    q: "¿Me ayudan con la configuración inicial?",
    a: "Por supuesto. Nuestro equipo te acompaña en el onboarding para configurar tu clínica, importar datos si los tienes, y capacitar a tu equipo para que estés operando lo antes posible.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div className="mx-auto max-w-2xl space-y-3">
      {faqs.map((faq, i) => (
        <div
          key={i}
          className="rounded-xl border border-border bg-white transition-shadow hover:shadow-sm"
        >
          <button
            onClick={() => setOpen(open === i ? null : i)}
            className="flex w-full items-center justify-between px-6 py-5 text-left cursor-pointer"
          >
            <span className="pr-4 font-semibold text-text">{faq.q}</span>
            <svg
              className={`h-5 w-5 shrink-0 text-teal transition-transform ${open === i ? "rotate-180" : ""}`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          {open === i && (
            <div className="px-6 pb-5 text-text-light leading-relaxed">
              {faq.a}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
