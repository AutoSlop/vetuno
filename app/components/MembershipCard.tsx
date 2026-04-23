export default function MembershipCard() {
  return (
    <div className="mx-auto max-w-md">
      <div className="overflow-hidden rounded-2xl shadow-xl ring-1 ring-gray-100">
        {/* Card header with gradient */}
        <div className="relative bg-gradient-to-br from-teal via-teal-dark to-teal px-6 py-6 text-white">
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage:
                "radial-gradient(circle at 20% 50%, white 1px, transparent 1px), radial-gradient(circle at 80% 20%, white 1px, transparent 1px)",
              backgroundSize: "30px 30px",
            }}
          ></div>
          <div className="relative flex items-center justify-between">
            <div className="flex items-center gap-2">
              <svg
                className="h-6 w-6 text-accent"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
              </svg>
              <span className="text-xl font-bold tracking-wide">Vetuno</span>
            </div>
            <span className="rounded-full border border-white/30 bg-white/15 px-3 py-0.5 text-xs font-semibold uppercase tracking-wider backdrop-blur-sm">
              Miembro
            </span>
          </div>
          <p className="relative mt-2 text-sm text-white/70">
            Plataforma veterinaria
          </p>
        </div>
        {/* Card body */}
        <div className="bg-white p-6">
          <div className="flex items-center gap-5">
            {/* Avatar with initials */}
            <div className="relative">
              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-teal to-teal-dark text-xl font-bold text-white shadow-md">
                ML
              </div>
              {/* Status badge */}
              <span className="absolute -bottom-0.5 -right-0.5 flex h-5 w-5 items-center justify-center rounded-full border-2 border-white bg-emerald-500">
                <svg
                  className="h-3 w-3 text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
            </div>
            <div className="min-w-0">
              <h3 className="text-lg font-bold text-text">
                Dra. María López Rodríguez
              </h3>
              <p className="text-sm font-medium text-teal">
                Médica Veterinaria
              </p>
              <p className="mt-0.5 text-xs text-text-light">
                Clínica Veterinaria El Roble
              </p>
            </div>
          </div>

          <div className="mt-6 space-y-3 text-sm">
            <div className="flex items-center justify-between border-b border-gray-100 pb-2">
              <span className="font-medium text-text-light">ID de miembro</span>
              <span className="font-mono font-semibold text-text">
                VET-2025-00142
              </span>
            </div>
            <div className="flex items-center justify-between border-b border-gray-100 pb-2">
              <span className="font-medium text-text-light">Correo</span>
              <span className="font-semibold text-text">info@example.com</span>
            </div>
            <div className="flex items-center justify-between border-b border-gray-100 pb-2">
              <span className="font-medium text-text-light">Teléfono</span>
              <span className="font-semibold text-text">+00 000 000 0000</span>
            </div>
            <div className="flex items-center justify-between border-b border-gray-100 pb-2">
              <span className="font-medium text-text-light">Dirección</span>
              <span className="font-semibold text-text">123 Main Street</span>
            </div>
            <div className="flex items-center justify-between border-b border-gray-100 pb-2">
              <span className="font-medium text-text-light">
                Fecha de emisión
              </span>
              <span className="font-semibold text-text">
                15 de marzo, 2025
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="font-medium text-text-light">Estado</span>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-3 py-1 text-xs font-bold text-emerald-600">
                <span className="h-2 w-2 rounded-full bg-emerald-500"></span>
                Activa
              </span>
            </div>
          </div>
        </div>
        {/* Card footer */}
        <div className="border-t border-gray-100 bg-bg px-6 py-3">
          <div className="flex items-center justify-between text-xs text-text-light">
            <span>Plan Equipo</span>
            <span className="font-medium text-accent">Membresía vigente</span>
          </div>
        </div>
      </div>
    </div>
  );
}
