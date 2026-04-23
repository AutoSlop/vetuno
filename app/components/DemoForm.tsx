"use client";

import { useState } from "react";

export default function DemoForm() {
  const [form, setForm] = useState({
    nombre: "",
    clinica: "",
    email: "",
    whatsapp: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/demo", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus("sent");
        setForm({ nombre: "", clinica: "", email: "", whatsapp: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className="rounded-2xl bg-white p-8 text-center shadow-lg">
        <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-teal/10">
          <svg className="h-8 w-8 text-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="mb-2 text-xl font-bold text-text">
          ¡Solicitud recibida!
        </h3>
        <p className="text-text-light">
          Nos pondremos en contacto contigo pronto para agendar tu demo.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl bg-white p-8 shadow-lg space-y-5"
    >
      <div>
        <label htmlFor="nombre" className="mb-1 block text-sm font-medium text-text">
          Nombre completo
        </label>
        <input
          id="nombre"
          name="nombre"
          type="text"
          required
          value={form.nombre}
          onChange={handleChange}
          className="w-full rounded-xl border border-gray-200 px-4 py-3 text-text outline-none transition focus:border-teal focus:ring-2 focus:ring-teal/20"
          placeholder="Tu nombre"
        />
      </div>
      <div>
        <label htmlFor="clinica" className="mb-1 block text-sm font-medium text-text">
          Nombre de la clínica
        </label>
        <input
          id="clinica"
          name="clinica"
          type="text"
          required
          value={form.clinica}
          onChange={handleChange}
          className="w-full rounded-xl border border-gray-200 px-4 py-3 text-text outline-none transition focus:border-teal focus:ring-2 focus:ring-teal/20"
          placeholder="Ej: Clínica Veterinaria Huellitas"
        />
      </div>
      <div>
        <label htmlFor="email" className="mb-1 block text-sm font-medium text-text">
          Correo electrónico
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          value={form.email}
          onChange={handleChange}
          className="w-full rounded-xl border border-gray-200 px-4 py-3 text-text outline-none transition focus:border-teal focus:ring-2 focus:ring-teal/20"
          placeholder="correo@ejemplo.com"
        />
      </div>
      <div>
        <label htmlFor="whatsapp" className="mb-1 block text-sm font-medium text-text">
          WhatsApp
        </label>
        <input
          id="whatsapp"
          name="whatsapp"
          type="tel"
          required
          value={form.whatsapp}
          onChange={handleChange}
          className="w-full rounded-xl border border-gray-200 px-4 py-3 text-text outline-none transition focus:border-teal focus:ring-2 focus:ring-teal/20"
          placeholder="+57 300 000 0000"
        />
      </div>
      <button
        type="submit"
        disabled={status === "sending"}
        className="w-full rounded-xl bg-teal py-3.5 font-semibold text-white transition hover:bg-teal-dark disabled:opacity-60 cursor-pointer"
      >
        {status === "sending" ? "Enviando..." : "Solicitar demo"}
      </button>
      {status === "error" && (
        <p className="text-center text-sm text-red-500">
          Hubo un error. Por favor intenta de nuevo.
        </p>
      )}
    </form>
  );
}
