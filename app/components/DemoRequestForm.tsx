"use client";

import { useState } from "react";

export default function DemoRequestForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const nombre = data.get("nombre") as string;
    const clinica = data.get("clinica") as string;
    const ciudad = data.get("ciudad") as string;
    const equipo = data.get("equipo") as string;
    const whatsapp = data.get("whatsapp") as string;

    const mensaje = encodeURIComponent(
      `Hola, quiero agendar una demo de Vetuno.\n\nNombre: ${nombre}\nClínica: ${clinica}\nCiudad: ${ciudad}\nEquipo: ${equipo} veterinarios\nWhatsApp: ${whatsapp}`
    );
    window.open(`https://wa.me/573145553305?text=${mensaje}`, "_blank");
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="rounded-2xl border border-border bg-white p-8 shadow-sm text-center">
        <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-teal/10">
          <svg className="h-7 w-7 text-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
          </svg>
        </div>
        <h3 className="text-xl font-bold text-text">¡Solicitud enviada!</h3>
        <p className="mt-2 text-text-light">
          Te contactaremos por WhatsApp para agendar tu demo personalizada.
        </p>
        <button
          type="button"
          onClick={() => setSubmitted(false)}
          className="mt-6 text-sm font-medium text-teal hover:text-teal-dark transition"
        >
          Enviar otra solicitud
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-2xl border border-border bg-white p-8 shadow-sm">
      <h3 className="text-xl font-bold text-text">Solicita una demo para tu clínica</h3>
      <p className="mt-1 text-sm text-text-light">Te contactamos para agendar una demo personalizada</p>

      <div className="mt-6 space-y-4">
        <div>
          <label htmlFor="demo-nombre" className="block text-sm font-medium text-text">Nombre</label>
          <input
            id="demo-nombre"
            name="nombre"
            type="text"
            required
            placeholder="Tu nombre completo"
            className="mt-1 w-full rounded-lg border border-border bg-bg px-4 py-2.5 text-sm text-text placeholder:text-text-light/60 focus:border-teal focus:outline-none focus:ring-1 focus:ring-teal"
          />
        </div>
        <div>
          <label htmlFor="demo-clinica" className="block text-sm font-medium text-text">Clínica</label>
          <input
            id="demo-clinica"
            name="clinica"
            type="text"
            required
            placeholder="Nombre de tu clínica veterinaria"
            className="mt-1 w-full rounded-lg border border-border bg-bg px-4 py-2.5 text-sm text-text placeholder:text-text-light/60 focus:border-teal focus:outline-none focus:ring-1 focus:ring-teal"
          />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label htmlFor="demo-ciudad" className="block text-sm font-medium text-text">Ciudad</label>
            <input
              id="demo-ciudad"
              name="ciudad"
              type="text"
              required
              placeholder="Ej: Bogotá"
              className="mt-1 w-full rounded-lg border border-border bg-bg px-4 py-2.5 text-sm text-text placeholder:text-text-light/60 focus:border-teal focus:outline-none focus:ring-1 focus:ring-teal"
            />
          </div>
          <div>
            <label htmlFor="demo-equipo" className="block text-sm font-medium text-text">Tamaño del equipo</label>
            <select
              id="demo-equipo"
              name="equipo"
              required
              className="mt-1 w-full rounded-lg border border-border bg-bg px-4 py-2.5 text-sm text-text focus:border-teal focus:outline-none focus:ring-1 focus:ring-teal"
            >
              <option value="">Selecciona</option>
              <option value="1">1 veterinario</option>
              <option value="2-3">2–3 veterinarios</option>
              <option value="4-5">4–5 veterinarios</option>
              <option value="6+">6+ veterinarios</option>
            </select>
          </div>
        </div>
        <div>
          <label htmlFor="demo-whatsapp" className="block text-sm font-medium text-text">WhatsApp</label>
          <input
            id="demo-whatsapp"
            name="whatsapp"
            type="tel"
            required
            placeholder="Ej: 314 555 3305"
            className="mt-1 w-full rounded-lg border border-border bg-bg px-4 py-2.5 text-sm text-text placeholder:text-text-light/60 focus:border-teal focus:outline-none focus:ring-1 focus:ring-teal"
          />
        </div>
      </div>

      <button
        type="submit"
        className="mt-6 w-full rounded-full bg-teal px-6 py-3.5 text-base font-semibold text-white shadow-sm transition hover:bg-teal-dark active:shadow-none"
      >
        Solicitar demo
      </button>

      <p className="mt-3 text-center text-xs text-text-light">
        Ideal para clínicas veterinarias pequeñas
      </p>
    </form>
  );
}
