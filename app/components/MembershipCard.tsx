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
          <div className="relative mt-2 flex items-center gap-2 text-sm text-white/70">
            <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 512 512">
              <path d="M226.5 92.9c14.3 42.9-.3 86.2-32.6 96.8s-70.1-15.6-84.4-58.5 .3-86.2 32.6-96.8 70.1 15.6 84.4 58.5zM100.4 198.6c18.9 32.4 14.3 70.1-10.2 84.1s-59.7-.9-78.5-33.3S-2.7 179.3 21.8 165.3s59.7 .9 78.5 33.3zM69.2 401.2C121.6 259.9 214.7 224 256 224s134.4 35.9 186.8 177.2c3.6 9.7 5.2 20.1 5.2 30.5v1.6c0 25.8-20.9 46.7-46.7 46.7-11.5 0-22.9-1.4-34-4.2l-88-22c-15.3-3.8-31.3-3.8-46.6 0l-88 22c-11.1 2.8-22.5 4.2-34 4.2C84.9 480 64 459.1 64 433.3v-1.6c0-10.4 1.6-20.8 5.2-30.5zM421.8 282.7c-24.5-14-29.1-51.7-10.2-84.1s54-47.3 78.5-33.3 29.1 51.7 10.2 84.1-54 47.3-78.5 33.3zM310.1 189.7c-32.3-10.6-46.9-53.9-32.6-96.8s52.1-69.1 84.4-58.5 46.9 53.9 32.6 96.8-52.1 69.1-84.4 58.5z"/>
            </svg>
            <span>Plataforma veterinaria</span>
          </div>
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
              <span className="font-semibold text-text">maria.lopez@elroble.vet</span>
            </div>
            <div className="flex items-center justify-between border-b border-gray-100 pb-2">
              <span className="font-medium text-text-light">Teléfono</span>
              <span className="font-semibold text-text">+57 314 555 3305</span>
            </div>
            <div className="flex items-center justify-between border-b border-gray-100 pb-2">
              <span className="font-medium text-text-light">Sede</span>
              <span className="font-semibold text-text">Bogotá, Colombia</span>
            </div>
            <div className="flex items-center justify-between border-b border-gray-100 pb-2">
              <span className="font-medium text-text-light">
                Fecha de emisión
              </span>
              <span className="font-semibold text-text">
                15 de marzo, 2025
              </span>
            </div>
            <div className="flex items-center justify-between border-b border-gray-100 pb-2">
              <span className="font-medium text-text-light">
                Vigencia hasta
              </span>
              <span className="font-semibold text-text">
                15 de marzo, 2026
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
        {/* QR Code section */}
        <div className="border-t border-gray-100 bg-white px-6 py-5">
          <div className="flex items-center gap-4">
            {/* Simulated QR code */}
            <div className="shrink-0 rounded-lg border border-gray-200 bg-white p-2">
              <svg width="64" height="64" viewBox="0 0 64 64" className="text-text">
                <rect x="0" y="0" width="8" height="8" fill="currentColor"/>
                <rect x="8" y="0" width="8" height="8" fill="currentColor" opacity="0"/>
                <rect x="16" y="0" width="8" height="8" fill="currentColor"/>
                <rect x="24" y="0" width="8" height="8" fill="currentColor"/>
                <rect x="32" y="0" width="8" height="8" fill="currentColor" opacity="0"/>
                <rect x="40" y="0" width="8" height="8" fill="currentColor" opacity="0"/>
                <rect x="48" y="0" width="8" height="8" fill="currentColor"/>
                <rect x="56" y="0" width="8" height="8" fill="currentColor"/>
                <rect x="0" y="8" width="8" height="8" fill="currentColor"/>
                <rect x="16" y="8" width="8" height="8" fill="currentColor"/>
                <rect x="32" y="8" width="8" height="8" fill="currentColor"/>
                <rect x="48" y="8" width="8" height="8" fill="currentColor"/>
                <rect x="56" y="8" width="8" height="8" fill="currentColor" opacity="0"/>
                <rect x="0" y="16" width="8" height="8" fill="currentColor"/>
                <rect x="8" y="16" width="8" height="8" fill="currentColor" opacity="0"/>
                <rect x="16" y="16" width="8" height="8" fill="currentColor"/>
                <rect x="24" y="16" width="8" height="8" fill="currentColor" opacity="0"/>
                <rect x="32" y="16" width="8" height="8" fill="currentColor" opacity="0"/>
                <rect x="40" y="16" width="8" height="8" fill="currentColor"/>
                <rect x="48" y="16" width="8" height="8" fill="currentColor"/>
                <rect x="56" y="16" width="8" height="8" fill="currentColor"/>
                <rect x="0" y="24" width="8" height="8" fill="currentColor" opacity="0"/>
                <rect x="8" y="24" width="8" height="8" fill="currentColor"/>
                <rect x="16" y="24" width="8" height="8" fill="currentColor" opacity="0"/>
                <rect x="24" y="24" width="8" height="8" fill="currentColor"/>
                <rect x="32" y="24" width="8" height="8" fill="currentColor"/>
                <rect x="40" y="24" width="8" height="8" fill="currentColor" opacity="0"/>
                <rect x="48" y="24" width="8" height="8" fill="currentColor"/>
                <rect x="56" y="24" width="8" height="8" fill="currentColor" opacity="0"/>
                <rect x="0" y="32" width="8" height="8" fill="currentColor"/>
                <rect x="8" y="32" width="8" height="8" fill="currentColor" opacity="0"/>
                <rect x="16" y="32" width="8" height="8" fill="currentColor"/>
                <rect x="24" y="32" width="8" height="8" fill="currentColor"/>
                <rect x="32" y="32" width="8" height="8" fill="currentColor" opacity="0"/>
                <rect x="40" y="32" width="8" height="8" fill="currentColor"/>
                <rect x="48" y="32" width="8" height="8" fill="currentColor" opacity="0"/>
                <rect x="56" y="32" width="8" height="8" fill="currentColor"/>
                <rect x="0" y="40" width="8" height="8" fill="currentColor" opacity="0"/>
                <rect x="8" y="40" width="8" height="8" fill="currentColor"/>
                <rect x="16" y="40" width="8" height="8" fill="currentColor"/>
                <rect x="24" y="40" width="8" height="8" fill="currentColor" opacity="0"/>
                <rect x="32" y="40" width="8" height="8" fill="currentColor"/>
                <rect x="40" y="40" width="8" height="8" fill="currentColor"/>
                <rect x="48" y="40" width="8" height="8" fill="currentColor"/>
                <rect x="56" y="40" width="8" height="8" fill="currentColor" opacity="0"/>
                <rect x="0" y="48" width="8" height="8" fill="currentColor"/>
                <rect x="8" y="48" width="8" height="8" fill="currentColor"/>
                <rect x="16" y="48" width="8" height="8" fill="currentColor"/>
                <rect x="24" y="48" width="8" height="8" fill="currentColor" opacity="0"/>
                <rect x="32" y="48" width="8" height="8" fill="currentColor" opacity="0"/>
                <rect x="40" y="48" width="8" height="8" fill="currentColor"/>
                <rect x="48" y="48" width="8" height="8" fill="currentColor" opacity="0"/>
                <rect x="56" y="48" width="8" height="8" fill="currentColor"/>
                <rect x="0" y="56" width="8" height="8" fill="currentColor"/>
                <rect x="8" y="56" width="8" height="8" fill="currentColor" opacity="0"/>
                <rect x="16" y="56" width="8" height="8" fill="currentColor"/>
                <rect x="24" y="56" width="8" height="8" fill="currentColor"/>
                <rect x="32" y="56" width="8" height="8" fill="currentColor"/>
                <rect x="40" y="56" width="8" height="8" fill="currentColor" opacity="0"/>
                <rect x="48" y="56" width="8" height="8" fill="currentColor"/>
                <rect x="56" y="56" width="8" height="8" fill="currentColor"/>
              </svg>
            </div>
            <div className="min-w-0">
              <p className="text-xs font-semibold uppercase tracking-wider text-teal">Código de verificación</p>
              <p className="mt-1 font-mono text-sm font-bold text-text">VET-2025-00142</p>
              <p className="mt-0.5 text-xs text-text-light">Escanea para verificar la membresía</p>
            </div>
          </div>
        </div>
        {/* Action buttons */}
        <div className="border-t border-gray-100 bg-white px-6 py-4">
          <div className="flex items-center justify-center gap-3">
            <button
              type="button"
              className="inline-flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-text transition hover:bg-bg"
            >
              <svg className="h-4 w-4 text-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
              </svg>
              Descargar
            </button>
            <button
              type="button"
              className="inline-flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-text transition hover:bg-bg"
            >
              <svg className="h-4 w-4 text-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z" />
              </svg>
              Compartir
            </button>
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
