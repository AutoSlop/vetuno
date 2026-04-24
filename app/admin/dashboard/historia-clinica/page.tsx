"use client";

import { useState } from "react";
import Link from "next/link";

const patient = {
  name: "Luna",
  species: "Canino",
  breed: "Labrador Retriever",
  sex: "Hembra",
  age: "4 años",
  weight: "28.5 kg",
  color: "Dorado",
  microchip: "985112345678901",
  tutor: "Andrés Gómez",
  tutorPhone: "+57 310 555 1234",
  tutorEmail: "andres.gomez@email.com",
  allergies: ["Pollo (alimentaria)", "Amoxicilina (medicamentosa)"],
  vaccines: [
    { name: "Rabia", date: "15 Mar 2026", next: "15 Mar 2027", vet: "Dra. María López" },
    { name: "Séxtuple", date: "10 Ene 2026", next: "10 Ene 2027", vet: "Dra. María López" },
    { name: "Bordetella", date: "20 Nov 2025", next: "20 May 2026", vet: "Dr. Felipe Ruiz" },
    { name: "Leptospira", date: "10 Ene 2026", next: "10 Ene 2027", vet: "Dra. María López" },
  ],
};

const consultations = [
  {
    id: "CON-012",
    date: "22 Abr 2026",
    vet: "Dra. María López",
    reason: "Dermatitis alérgica — control",
    diagnosis: "Dermatitis atópica leve en zona ventral. Mejoría significativa respecto a consulta anterior. Lesiones en remisión parcial.",
    evolution: "Paciente presenta menos prurito. Piel ventral con eritema leve residual. Sin lesiones activas en extremidades. Pelo en fase de recuperación.",
    treatment: "Continuar con dieta hipoalergénica. Apoquel 16mg cada 24h por 14 días más. Baño medicado semanal con clorhexidina 2%. Control en 3 semanas.",
    notes: "Tutor reporta buena adherencia al tratamiento. Recomendar evitar contacto con pasto húmedo.",
  },
  {
    id: "CON-009",
    date: "1 Abr 2026",
    vet: "Dra. María López",
    reason: "Dermatitis alérgica — primera consulta",
    diagnosis: "Dermatitis atópica moderada. Eritema y prurito intenso en zona ventral, axilas y entre los dedos. Descartada infección secundaria.",
    evolution: "Paciente llega con rascado constante hace 2 semanas. Lesiones eritematosas en abdomen y axilas. Raspado de piel negativo para ácaros. Citología sin evidencia de Malassezia.",
    treatment: "Iniciar Apoquel 16mg cada 12h por 14 días, luego cada 24h. Baño medicado con clorhexidina al 2% dos veces por semana. Dieta hipoalergénica con proteína novel (salmón). Control en 3 semanas.",
    notes: "Se descarta alimentación con pollo por alergia conocida. Solicitar hemograma de control en próxima visita.",
  },
  {
    id: "CON-005",
    date: "15 Mar 2026",
    vet: "Dra. María López",
    reason: "Vacunación anual — rabia",
    diagnosis: "Paciente clínicamente sano. Apto para vacunación.",
    evolution: "Examen físico general sin hallazgos relevantes. FC: 90 lpm, FR: 22 rpm, T: 38.4°C. Mucosas rosadas, TRC < 2s. Ganglios sin alteración.",
    treatment: "Aplicación vacuna antirrábica lote VR-2026-045. Observación 20 minutos post-vacunación sin reacciones adversas.",
    notes: "Programar refuerzo de séxtuple para enero 2027. Peso estable.",
  },
  {
    id: "CON-001",
    date: "5 Dic 2025",
    vet: "Dr. Felipe Ruiz",
    reason: "Gastroenteritis aguda",
    diagnosis: "Gastroenteritis aguda de origen alimentario. Deshidratación leve (5%).",
    evolution: "Paciente presenta vómito x3 y diarrea acuosa desde ayer. Tutor reporta ingestión de huesos de pollo hace 48h. Abdomen levemente distendido y doloroso a palpación.",
    treatment: "Fluidoterapia IV con Ringer Lactato 500ml. Ondansetrón 0.5mg/kg IV dosis única. Omeprazol 1mg/kg VO cada 24h por 5 días. Dieta blanda (arroz y carne magra) por 5 días. Metronidazol 15mg/kg VO cada 12h por 7 días.",
    notes: "Radiografía abdominal sin evidencia de obstrucción. Indicar al tutor no dar huesos cocidos. Control telefónico en 48h.",
  },
];

export default function HistoriaClinicaPage() {
  const [expandedConsult, setExpandedConsult] = useState<string | null>("CON-012");

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-text">Historia clínica</h1>
          <p className="mt-1 text-sm text-text-light">Expediente clínico digital del paciente</p>
        </div>
        <Link
          href="/admin/dashboard/pacientes"
          className="inline-flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-4 py-2.5 text-sm font-medium text-text-light transition hover:border-gray-300 hover:text-text"
        >
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" /></svg>
          Volver a pacientes
        </Link>
      </div>

      {/* Patient info card */}
      <div className="rounded-xl border border-gray-200 bg-white shadow-sm">
        <div className="border-b border-gray-100 px-6 py-4">
          <div className="flex items-center gap-4">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-teal/10 text-2xl">
              🐕
            </div>
            <div>
              <h2 className="text-xl font-bold text-text">{patient.name}</h2>
              <p className="text-sm text-text-light">{patient.species} — {patient.breed} — {patient.sex} — {patient.age} — {patient.weight}</p>
            </div>
          </div>
        </div>
        <div className="grid gap-6 p-6 md:grid-cols-2">
          {/* Left: Patient details */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-text-light">Datos del paciente</h3>
            <div className="space-y-2.5 text-sm">
              <div className="flex justify-between border-b border-gray-50 pb-2">
                <span className="text-text-light">Color</span>
                <span className="font-medium text-text">{patient.color}</span>
              </div>
              <div className="flex justify-between border-b border-gray-50 pb-2">
                <span className="text-text-light">Microchip</span>
                <span className="font-mono text-xs font-medium text-text">{patient.microchip}</span>
              </div>
              <div className="flex justify-between border-b border-gray-50 pb-2">
                <span className="text-text-light">Tutor</span>
                <span className="font-medium text-text">{patient.tutor}</span>
              </div>
              <div className="flex justify-between border-b border-gray-50 pb-2">
                <span className="text-text-light">Teléfono tutor</span>
                <span className="font-medium text-text">{patient.tutorPhone}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-text-light">Email tutor</span>
                <span className="font-medium text-text">{patient.tutorEmail}</span>
              </div>
            </div>
            {/* Allergies */}
            <div>
              <h4 className="mb-2 text-sm font-semibold text-red-600">Alergias conocidas</h4>
              <div className="flex flex-wrap gap-2">
                {patient.allergies.map((a) => (
                  <span key={a} className="rounded-full bg-red-50 px-3 py-1 text-xs font-medium text-red-600 border border-red-100">
                    {a}
                  </span>
                ))}
              </div>
            </div>
          </div>
          {/* Right: Vaccines */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-text-light">Vacunas</h3>
            <div className="space-y-3">
              {patient.vaccines.map((v) => (
                <div key={v.name} className="flex items-center justify-between rounded-lg border border-gray-100 bg-gray-50/50 px-4 py-3">
                  <div>
                    <p className="text-sm font-medium text-text">{v.name}</p>
                    <p className="text-xs text-text-light">Aplicada: {v.date} — {v.vet}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-text-light">Próxima</p>
                    <p className="text-xs font-medium text-teal">{v.next}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Consultations */}
      <div className="rounded-xl border border-gray-200 bg-white shadow-sm">
        <div className="border-b border-gray-100 px-6 py-4">
          <h2 className="text-base font-semibold text-text">Consultas ({consultations.length})</h2>
        </div>
        <div className="divide-y divide-gray-100">
          {consultations.map((c) => (
            <div key={c.id} className="px-6 py-4">
              <button
                onClick={() => setExpandedConsult(expandedConsult === c.id ? null : c.id)}
                className="flex w-full items-center justify-between text-left"
              >
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs text-text-light">{c.id}</span>
                  <span className="text-sm font-medium text-text">{c.date}</span>
                  <span className="hidden text-sm text-text-light sm:inline">— {c.reason}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs text-text-light">{c.vet}</span>
                  <svg className={`h-4 w-4 text-text-light transition ${expandedConsult === c.id ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" /></svg>
                </div>
              </button>
              {expandedConsult === c.id && (
                <div className="mt-4 space-y-4 rounded-lg border border-gray-100 bg-gray-50/50 p-4 text-sm">
                  <div>
                    <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-text-light">Motivo</p>
                    <p className="text-text">{c.reason}</p>
                  </div>
                  <div>
                    <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-text-light">Diagnóstico</p>
                    <p className="text-text">{c.diagnosis}</p>
                  </div>
                  <div>
                    <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-text-light">Evolución</p>
                    <p className="text-text">{c.evolution}</p>
                  </div>
                  <div>
                    <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-text-light">Tratamiento</p>
                    <p className="text-text">{c.treatment}</p>
                  </div>
                  <div>
                    <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-text-light">Notas</p>
                    <p className="text-text-light italic">{c.notes}</p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
