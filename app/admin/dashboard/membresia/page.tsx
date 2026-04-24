export default function MembresiaClinicaPage() {
  const benefits = [
    "Historia clínica digital ilimitada",
    "Agenda de citas integrada",
    "Fórmulas veterinarias en PDF",
    "Autorizaciones y consentimientos digitales",
    "Perfil unificado mascota-tutor",
    "Soporte prioritario por WhatsApp",
    "Onboarding acompañado",
    "Actualizaciones incluidas",
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-text">Membresía de la clínica</h1>
        <p className="mt-1 text-sm text-text-light">Resumen del plan activo, estado y beneficios incluidos</p>
      </div>

      {/* Membership card */}
      <div className="mx-auto max-w-2xl">
        <div className="overflow-hidden rounded-2xl shadow-xl ring-1 ring-gray-100">
          {/* Card header */}
          <div className="relative bg-gradient-to-br from-teal via-teal-dark to-teal px-8 py-8 text-white">
            <div
              className="absolute inset-0 opacity-10"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 20% 50%, white 1px, transparent 1px), radial-gradient(circle at 80% 20%, white 1px, transparent 1px)",
                backgroundSize: "30px 30px",
              }}
            ></div>
            <div className="relative">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <svg className="h-8 w-8 text-white/80" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                  </svg>
                  <div>
                    <span className="text-2xl font-bold tracking-wide">Vetuno</span>
                    <p className="text-sm text-white/60">Plataforma veterinaria</p>
                  </div>
                </div>
                <span className="rounded-full border border-white/30 bg-white/15 px-4 py-1 text-sm font-semibold uppercase tracking-wider backdrop-blur-sm">
                  Plan Equipo
                </span>
              </div>
              <div className="mt-6">
                <div className="flex items-center gap-4">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-white/15 text-2xl backdrop-blur-sm">
                    🏥
                  </div>
                  <div>
                    <h2 className="text-xl font-bold">Clínica PetSalud</h2>
                    <p className="text-sm text-white/70">Bogotá, Colombia · NIT: 901.234.567-8</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Card body */}
          <div className="bg-white p-8">
            <div className="grid gap-6 sm:grid-cols-2">
              {/* Plan details */}
              <div className="space-y-4">
                <h3 className="text-xs font-semibold uppercase tracking-wider text-text-light">Detalles del plan</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex items-center justify-between border-b border-gray-50 pb-2">
                    <span className="text-text-light">Plan</span>
                    <span className="font-semibold text-text">Plan Equipo</span>
                  </div>
                  <div className="flex items-center justify-between border-b border-gray-50 pb-2">
                    <span className="text-text-light">Precio</span>
                    <span className="font-semibold text-text">USD $69/mes</span>
                  </div>
                  <div className="flex items-center justify-between border-b border-gray-50 pb-2">
                    <span className="text-text-light">Usuarios incluidos</span>
                    <span className="font-semibold text-text">Hasta 5</span>
                  </div>
                  <div className="flex items-center justify-between border-b border-gray-50 pb-2">
                    <span className="text-text-light">Fecha de inicio</span>
                    <span className="font-semibold text-text">3 Feb 2026</span>
                  </div>
                  <div className="flex items-center justify-between border-b border-gray-50 pb-2">
                    <span className="text-text-light">Vigencia hasta</span>
                    <span className="font-semibold text-text">3 Feb 2027</span>
                  </div>
                  <div className="flex items-center justify-between border-b border-gray-50 pb-2">
                    <span className="text-text-light">Método de pago</span>
                    <span className="font-semibold text-text">Tarjeta •••• 4532</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-text-light">Estado</span>
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-3 py-1 text-xs font-bold text-emerald-600">
                      <span className="h-2 w-2 rounded-full bg-emerald-500"></span>
                      Activa
                    </span>
                  </div>
                </div>
              </div>

              {/* Usage stats */}
              <div className="space-y-4">
                <h3 className="text-xs font-semibold uppercase tracking-wider text-text-light">Uso actual</h3>
                <div className="space-y-3">
                  <div className="rounded-lg border border-gray-100 bg-gray-50/50 p-3">
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-xs font-medium text-text-light">Usuarios</span>
                      <span className="text-xs font-semibold text-text">3 / 5</span>
                    </div>
                    <div className="h-2 rounded-full bg-gray-200">
                      <div className="h-2 rounded-full bg-teal" style={{ width: "60%" }}></div>
                    </div>
                  </div>
                  <div className="rounded-lg border border-gray-100 bg-gray-50/50 p-3">
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-xs font-medium text-text-light">Pacientes registrados</span>
                      <span className="text-xs font-semibold text-text">47</span>
                    </div>
                    <p className="text-xs text-text-light">Sin límite en este plan</p>
                  </div>
                  <div className="rounded-lg border border-gray-100 bg-gray-50/50 p-3">
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-xs font-medium text-text-light">Documentos este mes</span>
                      <span className="text-xs font-semibold text-text">34</span>
                    </div>
                    <p className="text-xs text-text-light">Sin límite en este plan</p>
                  </div>
                  <div className="rounded-lg border border-gray-100 bg-gray-50/50 p-3">
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-xs font-medium text-text-light">Almacenamiento</span>
                      <span className="text-xs font-semibold text-text">1.2 GB / 10 GB</span>
                    </div>
                    <div className="h-2 rounded-full bg-gray-200">
                      <div className="h-2 rounded-full bg-teal" style={{ width: "12%" }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Benefits */}
          <div className="border-t border-gray-100 bg-white px-8 py-6">
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-wider text-text-light">Beneficios incluidos</h3>
            <div className="grid gap-2 sm:grid-cols-2">
              {benefits.map((b) => (
                <div key={b} className="flex items-center gap-2 text-sm text-text">
                  <svg className="h-4 w-4 shrink-0 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>
                  {b}
                </div>
              ))}
            </div>
          </div>

          {/* Footer */}
          <div className="border-t border-gray-100 bg-gray-50 px-8 py-4">
            <div className="flex flex-col items-center justify-between gap-3 sm:flex-row">
              <p className="text-xs text-text-light">Próxima facturación: 3 May 2026 · USD $69.00</p>
              <div className="flex gap-3">
                <button className="rounded-lg border border-gray-200 bg-white px-4 py-2 text-xs font-medium text-text transition hover:bg-gray-50">
                  Cambiar plan
                </button>
                <button className="rounded-lg border border-gray-200 bg-white px-4 py-2 text-xs font-medium text-text transition hover:bg-gray-50">
                  Ver facturas
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
