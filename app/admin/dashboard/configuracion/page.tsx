export default function ConfiguracionPage() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-text">Configuración</h1>
        <p className="mt-1 text-sm text-text-light">Ajustes generales de la plataforma</p>
      </div>

      {/* Settings sections */}
      <div className="space-y-6">
        {/* General */}
        <div className="rounded-xl border border-gray-200 bg-white shadow-sm">
          <div className="border-b border-gray-100 px-6 py-4">
            <h2 className="text-base font-semibold text-text">General</h2>
            <p className="mt-0.5 text-sm text-text-light">Información básica de la plataforma</p>
          </div>
          <div className="space-y-4 p-6">
            <div>
              <label className="mb-1.5 block text-sm font-medium text-text">Nombre de la plataforma</label>
              <input
                type="text"
                defaultValue="Vetuno"
                className="w-full max-w-md rounded-lg border border-gray-300 px-4 py-2.5 text-sm text-text outline-none transition focus:border-teal focus:ring-2 focus:ring-teal/20"
                readOnly
              />
            </div>
            <div>
              <label className="mb-1.5 block text-sm font-medium text-text">Email de soporte</label>
              <input
                type="email"
                defaultValue="soporte@vetuno.co"
                className="w-full max-w-md rounded-lg border border-gray-300 px-4 py-2.5 text-sm text-text outline-none transition focus:border-teal focus:ring-2 focus:ring-teal/20"
                readOnly
              />
            </div>
            <div>
              <label className="mb-1.5 block text-sm font-medium text-text">Zona horaria</label>
              <input
                type="text"
                defaultValue="América/Bogotá (UTC-5)"
                className="w-full max-w-md rounded-lg border border-gray-300 px-4 py-2.5 text-sm text-text outline-none transition focus:border-teal focus:ring-2 focus:ring-teal/20"
                readOnly
              />
            </div>
          </div>
        </div>

        {/* Notifications */}
        <div className="rounded-xl border border-gray-200 bg-white shadow-sm">
          <div className="border-b border-gray-100 px-6 py-4">
            <h2 className="text-base font-semibold text-text">Notificaciones</h2>
            <p className="mt-0.5 text-sm text-text-light">Preferencias de notificaciones y alertas</p>
          </div>
          <div className="space-y-4 p-6">
            {[
              { label: "Nuevas clínicas registradas", desc: "Recibir alerta cuando se registre una nueva clínica" },
              { label: "Membresías por vencer", desc: "Notificar 7 días antes del vencimiento" },
              { label: "Reportes semanales", desc: "Resumen semanal de actividad de la plataforma" },
            ].map((item, i) => (
              <div key={i} className="flex items-center justify-between rounded-lg border border-gray-100 px-4 py-3">
                <div>
                  <p className="text-sm font-medium text-text">{item.label}</p>
                  <p className="text-xs text-text-light">{item.desc}</p>
                </div>
                <div className="h-6 w-10 rounded-full bg-teal/80 relative cursor-pointer">
                  <div className="absolute right-0.5 top-0.5 h-5 w-5 rounded-full bg-white shadow-sm" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Save button */}
        <div className="flex justify-end">
          <button className="rounded-lg bg-teal px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-teal-dark">
            Guardar cambios
          </button>
        </div>
      </div>
    </div>
  );
}
