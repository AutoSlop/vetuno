const mockPatients = [
  { id: "PAC-001", name: "Luna", species: "Canino", breed: "Labrador Retriever", tutor: "Andrés Gómez", clinic: "PetSalud Bogotá", status: "Activo" },
  { id: "PAC-002", name: "Milo", species: "Felino", breed: "Siamés", tutor: "Laura Castillo", clinic: "Clínica Veterinaria El Prado", status: "Activo" },
  { id: "PAC-003", name: "Rocky", species: "Canino", breed: "Bulldog Francés", tutor: "María Rodríguez", clinic: "Amigos Peludos", status: "Activo" },
  { id: "PAC-004", name: "Nina", species: "Canino", breed: "Golden Retriever", tutor: "Felipe Ruiz", clinic: "Centro Veterinario San Marcos", status: "Inactivo" },
  { id: "PAC-005", name: "Simón", species: "Felino", breed: "Persa", tutor: "Carolina Mejía", clinic: "Amigos Peludos", status: "Activo" },
];

export default function PacientesPage() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-text">Pacientes</h1>
          <p className="mt-1 text-sm text-text-light">Registro de pacientes y mascotas en la plataforma</p>
        </div>
        <button className="inline-flex items-center gap-2 rounded-lg bg-teal px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-teal-dark">
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" /></svg>
          Registrar paciente
        </button>
      </div>

      {/* Table */}
      <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b border-gray-100 bg-gray-50/50">
                <th className="px-6 py-3 font-medium text-text-light">ID</th>
                <th className="px-6 py-3 font-medium text-text-light">Nombre</th>
                <th className="px-6 py-3 font-medium text-text-light">Especie</th>
                <th className="px-6 py-3 font-medium text-text-light">Raza</th>
                <th className="px-6 py-3 font-medium text-text-light">Tutor</th>
                <th className="px-6 py-3 font-medium text-text-light">Clínica</th>
                <th className="px-6 py-3 font-medium text-text-light">Estado</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {mockPatients.map((patient) => (
                <tr key={patient.id} className="hover:bg-gray-50/50 transition">
                  <td className="px-6 py-4 font-mono text-xs text-text-light">{patient.id}</td>
                  <td className="px-6 py-4 font-medium text-text">{patient.name}</td>
                  <td className="px-6 py-4 text-text-light">{patient.species}</td>
                  <td className="px-6 py-4 text-text-light">{patient.breed}</td>
                  <td className="px-6 py-4 text-text-light">{patient.tutor}</td>
                  <td className="px-6 py-4 text-text-light">{patient.clinic}</td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex rounded-full px-2 py-0.5 text-xs font-medium ${
                      patient.status === "Activo" ? "bg-emerald-50 text-emerald-600" : "bg-gray-100 text-gray-500"
                    }`}>
                      {patient.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="border-t border-gray-100 bg-gray-50/50 px-6 py-3 text-sm text-text-light">
          Mostrando {mockPatients.length} de {mockPatients.length} pacientes
        </div>
      </div>
    </div>
  );
}
