"use client";

import { useState } from "react";

const mockAuthorizations = [
  {
    id: "AUT-019",
    date: "23 Abr 2026",
    type: "Consentimiento quirúrgico",
    pet: "Canela",
    tutor: "Santiago Herrera",
    vet: "Dra. Carolina Mejía",
    procedure: "Esterilización (ovariohisterectomía)",
    status: "Firmada",
    description: "Autorización para realizar procedimiento quirúrgico de esterilización bajo anestesia general. Se informaron riesgos anestésicos, posibles complicaciones postoperatorias y cuidados requeridos.",
    clauses: [
      "El tutor autoriza el procedimiento quirúrgico descrito y la administración de anestesia general.",
      "Se han explicado los riesgos inherentes al procedimiento, incluyendo pero no limitado a: reacciones adversas a la anestesia, hemorragia, infección postquirúrgica.",
      "El tutor se compromete a seguir las indicaciones postoperatorias y asistir a los controles programados.",
      "En caso de emergencia durante el procedimiento, el veterinario queda autorizado a realizar intervenciones adicionales necesarias.",
    ],
  },
  {
    id: "AUT-017",
    date: "18 Abr 2026",
    type: "Autorización de procedimiento",
    pet: "Rocky",
    tutor: "María Rodríguez",
    vet: "Dra. María López",
    procedure: "Lavado ótico bajo sedación",
    status: "Firmada",
    description: "Consentimiento para sedación leve y lavado ótico bilateral por otitis externa crónica.",
    clauses: [
      "El tutor autoriza la sedación y el lavado ótico bilateral del paciente.",
      "Se han informado los riesgos asociados a la sedación y el procedimiento.",
      "El tutor confirma que el paciente está en ayuno de al menos 8 horas.",
    ],
  },
  {
    id: "AUT-015",
    date: "10 Abr 2026",
    type: "Consentimiento diagnóstico",
    pet: "Milo",
    tutor: "Laura Castillo",
    vet: "Dr. Felipe Ruiz",
    procedure: "Endoscopia digestiva alta",
    status: "Firmada",
    description: "Autorización para realizar endoscopia digestiva alta bajo anestesia general con fines diagnósticos.",
    clauses: [
      "El tutor autoriza el procedimiento diagnóstico endoscópico bajo anestesia general.",
      "Se informaron riesgos del procedimiento: perforación, sangrado, reacción anestésica.",
      "En caso de hallazgo de lesión sospechosa, se autoriza toma de biopsia.",
    ],
  },
  {
    id: "AUT-012",
    date: "22 Mar 2026",
    type: "Autorización de hospitalización",
    pet: "Max",
    tutor: "Juan Pablo Ríos",
    vet: "Dra. María López",
    procedure: "Hospitalización por fractura — observación 48h",
    status: "Firmada",
    description: "Autorización para hospitalización y monitoreo del paciente tras fractura de tibia izquierda. Incluye administración de analgesia y fluidoterapia.",
    clauses: [
      "El tutor autoriza la hospitalización del paciente por un período estimado de 48 horas.",
      "Se autoriza la administración de medicamentos según criterio del veterinario tratante.",
      "El tutor será informado de cualquier cambio en el estado del paciente.",
      "Los costos de hospitalización serán facturados según tarifa vigente.",
    ],
  },
  {
    id: "AUT-008",
    date: "15 Feb 2026",
    type: "Consentimiento quirúrgico",
    pet: "Thor",
    tutor: "Diego Moreno",
    vet: "Dr. Felipe Ruiz",
    procedure: "Extracción de cuerpo extraño gástrico",
    status: "Firmada",
    description: "Autorización de emergencia para cirugía exploratoria y extracción de cuerpo extraño (juguete de caucho) detectado por radiografía.",
    clauses: [
      "El tutor autoriza la cirugía exploratoria abdominal de emergencia.",
      "Se informaron riesgos quirúrgicos y anestésicos del procedimiento de urgencia.",
      "Se autoriza al equipo veterinario a realizar procedimientos adicionales si el hallazgo intraoperatorio lo requiere.",
    ],
  },
  {
    id: "AUT-005",
    date: "3 Ene 2026",
    type: "Consentimiento de eutanasia",
    pet: "Pelusa",
    tutor: "Ana María Torres",
    vet: "Dra. Carolina Mejía",
    procedure: "Eutanasia humanitaria",
    status: "Pendiente",
    description: "Consentimiento informado para eutanasia humanitaria. Paciente felino de 18 años con falla renal crónica terminal y deterioro severo de calidad de vida.",
    clauses: [
      "El tutor ha sido informado del diagnóstico terminal y pronóstico del paciente.",
      "Se han discutido todas las opciones terapéuticas disponibles.",
      "El tutor decide voluntariamente la eutanasia humanitaria del paciente.",
      "Se ha informado sobre las opciones de disposición final del cuerpo.",
    ],
  },
];

const statusColors: Record<string, string> = {
  "Firmada": "bg-emerald-50 text-emerald-600",
  "Pendiente": "bg-amber-50 text-amber-600",
};

export default function AutorizacionesPage() {
  const [expanded, setExpanded] = useState<string | null>("AUT-019");

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-text">Autorizaciones y consentimientos</h1>
          <p className="mt-1 text-sm text-text-light">Documentos de consentimiento informado vinculados al expediente del paciente</p>
        </div>
        <button className="inline-flex items-center gap-2 rounded-lg bg-teal px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-teal-dark">
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" /></svg>
          Nueva autorización
        </button>
      </div>

      {/* Summary */}
      <div className="grid gap-4 sm:grid-cols-3">
        <div className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
          <p className="text-sm font-medium text-text-light">Total documentos</p>
          <p className="mt-1 text-2xl font-bold text-text">{mockAuthorizations.length}</p>
        </div>
        <div className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
          <p className="text-sm font-medium text-text-light">Firmadas</p>
          <p className="mt-1 text-2xl font-bold text-emerald-600">{mockAuthorizations.filter((a) => a.status === "Firmada").length}</p>
        </div>
        <div className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
          <p className="text-sm font-medium text-text-light">Pendientes de firma</p>
          <p className="mt-1 text-2xl font-bold text-amber-600">{mockAuthorizations.filter((a) => a.status === "Pendiente").length}</p>
        </div>
      </div>

      {/* Authorization list */}
      <div className="space-y-4">
        {mockAuthorizations.map((auth) => (
          <div key={auth.id} className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
            <button
              onClick={() => setExpanded(expanded === auth.id ? null : auth.id)}
              className="flex w-full items-center justify-between px-6 py-4 text-left hover:bg-gray-50/50 transition"
            >
              <div className="flex items-center gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-teal/10">
                  <svg className="h-5 w-5 text-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" /></svg>
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs text-text-light">{auth.id}</span>
                    <span className="text-sm font-medium text-text">{auth.type}</span>
                  </div>
                  <p className="mt-0.5 text-xs text-text-light">{auth.date} · {auth.pet} — {auth.procedure} · Tutor: {auth.tutor}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${statusColors[auth.status]}`}>{auth.status}</span>
                <svg className={`h-4 w-4 text-text-light transition ${expanded === auth.id ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" /></svg>
              </div>
            </button>

            {expanded === auth.id && (
              <div className="border-t border-gray-100 bg-gray-50/30 p-6">
                <div className="mx-auto max-w-2xl rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
                  {/* Document header */}
                  <div className="mb-6 border-b border-gray-200 pb-4 text-center">
                    <h3 className="text-lg font-bold text-teal">Vetuno</h3>
                    <p className="mt-1 text-sm font-semibold text-text">{auth.type}</p>
                    <p className="text-xs text-text-light">Clínica PetSalud — Bogotá, Colombia</p>
                  </div>
                  {/* Info */}
                  <div className="mb-4 grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="text-xs font-semibold uppercase text-text-light">Paciente</p>
                      <p className="font-medium text-text">{auth.pet}</p>
                      <p className="text-xs text-text-light">Tutor: {auth.tutor}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-xs font-semibold uppercase text-text-light">Veterinario responsable</p>
                      <p className="font-medium text-text">{auth.vet}</p>
                    </div>
                  </div>
                  <div className="mb-4 text-sm">
                    <p className="text-xs font-semibold uppercase text-text-light">Procedimiento</p>
                    <p className="font-medium text-text">{auth.procedure}</p>
                    <p className="mt-1 text-text-light">{auth.description}</p>
                  </div>
                  {/* Clauses */}
                  <div className="mb-6">
                    <p className="mb-2 text-xs font-semibold uppercase text-text-light">Cláusulas del consentimiento</p>
                    <ol className="space-y-2">
                      {auth.clauses.map((clause, i) => (
                        <li key={i} className="flex gap-2 text-sm text-text">
                          <span className="shrink-0 font-mono text-xs text-text-light">{i + 1}.</span>
                          {clause}
                        </li>
                      ))}
                    </ol>
                  </div>
                  {/* Signature area */}
                  <div className="border-t border-gray-200 pt-4">
                    <div className="grid grid-cols-2 gap-8">
                      <div className="text-center">
                        <div className="mb-2 border-b border-gray-300 pb-8">
                          {auth.status === "Firmada" && (
                            <p className="italic text-sm text-text-light">{auth.tutor}</p>
                          )}
                        </div>
                        <p className="text-xs text-text-light">Firma del tutor</p>
                        <p className="text-xs text-text-light">{auth.tutor}</p>
                      </div>
                      <div className="text-center">
                        <div className="mb-2 border-b border-gray-300 pb-8">
                          {auth.status === "Firmada" && (
                            <p className="italic text-sm text-text-light">{auth.vet}</p>
                          )}
                        </div>
                        <p className="text-xs text-text-light">Firma del veterinario</p>
                        <p className="text-xs text-text-light">{auth.vet}</p>
                      </div>
                    </div>
                    <p className="mt-4 text-center text-xs text-text-light">Fecha: {auth.date} · {auth.id}</p>
                  </div>
                </div>
                <div className="mt-4 flex justify-center gap-3">
                  <button className="inline-flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-text transition hover:bg-gray-50">
                    <svg className="h-4 w-4 text-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" /></svg>
                    Descargar PDF
                  </button>
                  <button className="inline-flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-text transition hover:bg-gray-50">
                    <svg className="h-4 w-4 text-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M6.72 13.829c-.24.03-.48.062-.72.096m.72-.096a42.415 42.415 0 0110.56 0m-10.56 0L6.34 18m10.94-4.171c.24.03.48.062.72.096m-.72-.096L17.66 18m0 0l.229 2.523a1.125 1.125 0 01-1.12 1.227H7.231c-.662 0-1.18-.568-1.12-1.227L6.34 18m11.318 0h1.091A2.25 2.25 0 0021 15.75V9.456c0-1.081-.768-2.015-1.837-2.175a48.055 48.055 0 00-1.913-.247M6.34 18H5.25A2.25 2.25 0 013 15.75V9.456c0-1.081.768-2.015 1.837-2.175a48.041 48.041 0 011.913-.247m10.5 0a48.536 48.536 0 00-10.5 0m10.5 0V3.375c0-.621-.504-1.125-1.125-1.125h-8.25c-.621 0-1.125.504-1.125 1.125v3.659M18.75 12h.008v.008h-.008V12zm-8.25 0h.008v.008H10.5V12z" /></svg>
                    Imprimir
                  </button>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
