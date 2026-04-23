const mockUsers = [
  { id: "USR-001", name: "Dra. María López", email: "maria.lopez@vetclinica.co", clinic: "Clínica Veterinaria El Prado", role: "Veterinario", status: "Activo" },
  { id: "USR-002", name: "Dr. Andrés Gómez", email: "andres.gomez@petsalud.co", clinic: "PetSalud Bogotá", role: "Veterinario", status: "Activo" },
  { id: "USR-003", name: "Carolina Mejía", email: "carolina@amigospeludos.co", clinic: "Amigos Peludos", role: "Auxiliar", status: "Activo" },
  { id: "USR-004", name: "Dr. Felipe Ruiz", email: "felipe.ruiz@sanmarcos.co", clinic: "Centro Veterinario San Marcos", role: "Veterinario", status: "Inactivo" },
  { id: "USR-005", name: "Laura Castillo", email: "laura@vetclinica.co", clinic: "Clínica Veterinaria El Prado", role: "Recepcionista", status: "Activo" },
];

export default function UsuariosPage() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-text">Usuarios</h1>
          <p className="mt-1 text-sm text-text-light">Gestiona los usuarios registrados en la plataforma</p>
        </div>
        <button className="inline-flex items-center gap-2 rounded-lg bg-teal px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-teal-dark">
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" /></svg>
          Crear usuario
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
                <th className="px-6 py-3 font-medium text-text-light">Email</th>
                <th className="px-6 py-3 font-medium text-text-light">Clínica</th>
                <th className="px-6 py-3 font-medium text-text-light">Rol</th>
                <th className="px-6 py-3 font-medium text-text-light">Estado</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {mockUsers.map((user) => (
                <tr key={user.id} className="hover:bg-gray-50/50 transition">
                  <td className="px-6 py-4 font-mono text-xs text-text-light">{user.id}</td>
                  <td className="px-6 py-4 font-medium text-text">{user.name}</td>
                  <td className="px-6 py-4 text-text-light">{user.email}</td>
                  <td className="px-6 py-4 text-text-light">{user.clinic}</td>
                  <td className="px-6 py-4 text-text-light">{user.role}</td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex rounded-full px-2 py-0.5 text-xs font-medium ${
                      user.status === "Activo" ? "bg-emerald-50 text-emerald-600" : "bg-gray-100 text-gray-500"
                    }`}>
                      {user.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="border-t border-gray-100 bg-gray-50/50 px-6 py-3 text-sm text-text-light">
          Mostrando {mockUsers.length} de {mockUsers.length} usuarios
        </div>
      </div>
    </div>
  );
}
