const mockMemberships = [
  { id: "MBR-001", clinic: "Clínica Veterinaria El Prado", plan: "Plan Clínica", price: "$99/mes", startDate: "15 Ene 2026", status: "Activa" },
  { id: "MBR-002", clinic: "PetSalud Bogotá", plan: "Plan Equipo", price: "$69/mes", startDate: "03 Feb 2026", status: "Activa" },
  { id: "MBR-003", clinic: "Amigos Peludos", plan: "Plan Base", price: "$39/mes", startDate: "20 Mar 2026", status: "Activa" },
  { id: "MBR-004", clinic: "Centro Veterinario San Marcos", plan: "Plan Clínica", price: "$99/mes", startDate: "10 Dic 2025", status: "Vencida" },
  { id: "MBR-005", clinic: "VetCare Cali", plan: "Plan Equipo", price: "$69/mes", startDate: "01 Abr 2026", status: "Prueba gratuita" },
];

export default function MembresiasPage() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-text">Membresías</h1>
          <p className="mt-1 text-sm text-text-light">Gestión de membresías y suscripciones de clínicas</p>
        </div>
        <button className="inline-flex items-center gap-2 rounded-lg bg-teal px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-teal-dark">
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" /></svg>
          Nueva membresía
        </button>
      </div>

      {/* Table */}
      <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b border-gray-100 bg-gray-50/50">
                <th className="px-6 py-3 font-medium text-text-light">ID</th>
                <th className="px-6 py-3 font-medium text-text-light">Clínica</th>
                <th className="px-6 py-3 font-medium text-text-light">Plan</th>
                <th className="px-6 py-3 font-medium text-text-light">Precio</th>
                <th className="px-6 py-3 font-medium text-text-light">Fecha inicio</th>
                <th className="px-6 py-3 font-medium text-text-light">Estado</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {mockMemberships.map((m) => (
                <tr key={m.id} className="hover:bg-gray-50/50 transition">
                  <td className="px-6 py-4 font-mono text-xs text-text-light">{m.id}</td>
                  <td className="px-6 py-4 font-medium text-text">{m.clinic}</td>
                  <td className="px-6 py-4 text-text-light">{m.plan}</td>
                  <td className="px-6 py-4 text-text-light">{m.price}</td>
                  <td className="px-6 py-4 text-text-light">{m.startDate}</td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex rounded-full px-2 py-0.5 text-xs font-medium ${
                      m.status === "Activa"
                        ? "bg-emerald-50 text-emerald-600"
                        : m.status === "Prueba gratuita"
                        ? "bg-blue-50 text-blue-600"
                        : "bg-red-50 text-red-500"
                    }`}>
                      {m.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="border-t border-gray-100 bg-gray-50/50 px-6 py-3 text-sm text-text-light">
          Mostrando {mockMemberships.length} de {mockMemberships.length} membresías
        </div>
      </div>
    </div>
  );
}
