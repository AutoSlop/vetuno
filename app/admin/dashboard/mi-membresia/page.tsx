import MembershipCard from "../../../components/MembershipCard";

export default function MiMembresiaPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-text">Mi membresía</h1>
        <p className="mt-1 text-sm text-text-light">
          Aquí puedes consultar tu credencial digital de Vetuno. Descárgala o compártela cuando la necesites.
        </p>
      </div>

      <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm md:p-8">
        <MembershipCard />
      </div>

      <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
        <h2 className="text-base font-semibold text-text">Acerca de tu credencial</h2>
        <ul className="mt-3 space-y-2 text-sm text-text-light">
          <li className="flex items-start gap-2">
            <svg className="mt-0.5 h-4 w-4 shrink-0 text-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>
            Tu tarjeta de membresía es válida mientras tu plan esté activo.
          </li>
          <li className="flex items-start gap-2">
            <svg className="mt-0.5 h-4 w-4 shrink-0 text-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>
            El código QR permite verificar tu membresía de forma rápida y segura.
          </li>
          <li className="flex items-start gap-2">
            <svg className="mt-0.5 h-4 w-4 shrink-0 text-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>
            Puedes descargar tu credencial en cualquier momento desde esta sección.
          </li>
        </ul>
      </div>
    </div>
  );
}
