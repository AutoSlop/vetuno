import Link from "next/link";
import MembershipCard from "../../components/MembershipCard";
import OnboardingStatus from "../../components/OnboardingStatus";

const kpis = [
  { label: "Citas del día", value: "18", change: "4 pendientes", color: "bg-teal/10 text-teal" },
  { label: "Pacientes activos", value: "1,243", change: "+156 este mes", color: "bg-emerald-50 text-emerald-600" },
  { label: "Miembros activos", value: "68", change: "+8 este mes", color: "bg-blue-50 text-blue-600" },
  { label: "Documentos emitidos", value: "342", change: "+27 este mes", color: "bg-orange/10 text-orange" },
];

const recentActivity = [
  { action: "Nueva clínica registrada", detail: "Clínica Veterinaria El Prado — Medellín", time: "Hace 2 horas" },
  { action: "Usuario creado", detail: "Dra. Carolina Mejía — Veterinaria Amigos Peludos", time: "Hace 4 horas" },
  { action: "Membresía activada", detail: "Plan Equipo — Clínica PetSalud Bogotá", time: "Hace 6 horas" },
  { action: "Paciente registrado", detail: "Luna (Labrador) — Tutor: Andrés Gómez", time: "Hace 8 horas" },
  { action: "Membresía renovada", detail: "Plan Clínica — Centro Veterinario San Marcos", time: "Hace 1 día" },
];

const quickActions = [
  { label: "Crear usuario", href: "/admin/dashboard/usuarios", icon: "user-plus" },
  { label: "Registrar paciente", href: "/admin/dashboard/pacientes", icon: "pet-plus" },
  { label: "Configurar membresía", href: "/admin/dashboard/membresias", icon: "card-plus" },
];

function QuickIcon({ icon }: { icon: string }) {
  const cn = "h-5 w-5";
  switch (icon) {
    case "user-plus":
      return <svg className={cn} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z" /></svg>;
    case "pet-plus":
      return <svg className={cn} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" /></svg>;
    case "card-plus":
      return <svg className={cn} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" /></svg>;
    default:
      return null;
  }
}

export default function AdminDashboard() {
  return (
    <div className="space-y-8">
      {/* Page header */}
      <div>
        <h1 className="text-2xl font-bold text-text">Panel de control</h1>
        <p className="mt-1 text-sm text-text-light">Resumen general de la plataforma Vetuno</p>
      </div>

      {/* Onboarding Status */}
      <OnboardingStatus />

      {/* KPI Cards */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {kpis.map((kpi) => (
          <div key={kpi.label} className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
            <p className="text-sm font-medium text-text-light">{kpi.label}</p>
            <p className="mt-2 text-3xl font-bold text-text">{kpi.value}</p>
            <p className={`mt-1 text-xs font-medium ${kpi.color.split(" ")[1]}`}>{kpi.change}</p>
          </div>
        ))}
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {/* Recent Activity */}
        <div className="lg:col-span-2 rounded-xl border border-gray-200 bg-white shadow-sm">
          <div className="border-b border-gray-100 px-6 py-4">
            <h2 className="text-base font-semibold text-text">Actividad reciente</h2>
          </div>
          <div className="divide-y divide-gray-50">
            {recentActivity.map((item, i) => (
              <div key={i} className="flex items-start justify-between px-6 py-4">
                <div>
                  <p className="text-sm font-medium text-text">{item.action}</p>
                  <p className="mt-0.5 text-sm text-text-light">{item.detail}</p>
                </div>
                <span className="shrink-0 text-xs text-gray-400">{item.time}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="rounded-xl border border-gray-200 bg-white shadow-sm">
          <div className="border-b border-gray-100 px-6 py-4">
            <h2 className="text-base font-semibold text-text">Accesos rápidos</h2>
          </div>
          <div className="space-y-2 p-4">
            {quickActions.map((action) => (
              <Link
                key={action.label}
                href={action.href}
                className="flex items-center gap-3 rounded-lg border border-gray-200 px-4 py-3 text-sm font-medium text-text transition hover:border-teal hover:bg-teal/5 hover:text-teal"
              >
                <QuickIcon icon={action.icon} />
                {action.label}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Mi membresía */}
      <div className="rounded-xl border border-gray-200 bg-white shadow-sm">
        <div className="border-b border-gray-100 px-6 py-4">
          <h2 className="text-base font-semibold text-text">Tu membresía</h2>
          <p className="mt-1 text-sm text-text-light">
            Consulta tu credencial digital de Vetuno. Puedes descargarla o compartirla en cualquier momento.
          </p>
        </div>
        <div className="p-6">
          <MembershipCard />
        </div>
      </div>
    </div>
  );
}
