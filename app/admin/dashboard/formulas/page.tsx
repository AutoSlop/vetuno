"use client";

import { useState } from "react";

const mockFormulas = [
  {
    id: "FRM-024",
    date: "22 Abr 2026",
    pet: "Luna",
    tutor: "Andrés Gómez",
    vet: "Dra. María López",
    diagnosis: "Dermatitis atópica leve",
    medications: [
      { name: "Apoquel (Oclacitinib) 16mg", dosage: "1 tableta vía oral cada 24 horas", duration: "14 días", notes: "Administrar con alimento" },
      { name: "Shampoo Clorhexidina 2%", dosage: "Baño medicado semanal", duration: "4 semanas", notes: "Dejar actuar 10 minutos antes de enjuagar" },
    ],
    status: "Emitida",
  },
  {
    id: "FRM-023",
    date: "18 Abr 2026",
    pet: "Rocky",
    tutor: "María Rodríguez",
    vet: "Dra. María López",
    diagnosis: "Otitis externa bilateral",
    medications: [
      { name: "Otomax (Gentamicina/Betametasona/Clotrimazol)", dosage: "5 gotas en cada oído cada 12 horas", duration: "10 días", notes: "Limpiar canal antes de aplicar" },
      { name: "Solución ótica limpiadora", dosage: "Limpieza auricular cada 48 horas", duration: "2 semanas", notes: "Uso previo a la medicación" },
    ],
    status: "Emitida",
  },
  {
    id: "FRM-021",
    date: "10 Abr 2026",
    pet: "Milo",
    tutor: "Laura Castillo",
    vet: "Dr. Felipe Ruiz",
    diagnosis: "Gastritis crónica",
    medications: [
      { name: "Omeprazol 10mg", dosage: "1 cápsula vía oral cada 24 horas en ayunas", duration: "21 días", notes: "Administrar 30 min antes del alimento" },
      { name: "Sucralfato 500mg", dosage: "½ tableta vía oral cada 8 horas", duration: "14 días", notes: "No administrar junto con otros medicamentos" },
      { name: "Dieta gastrointestinal húmeda", dosage: "Raciones pequeñas 3 veces al día", duration: "Indefinido", notes: "Transición gradual desde dieta actual" },
    ],
    status: "Emitida",
  },
  {
    id: "FRM-018",
    date: "1 Abr 2026",
    pet: "Luna",
    tutor: "Andrés Gómez",
    vet: "Dra. María López",
    diagnosis: "Dermatitis atópica moderada",
    medications: [
      { name: "Apoquel (Oclacitinib) 16mg", dosage: "1 tableta vía oral cada 12 horas", duration: "14 días, luego cada 24h", notes: "Administrar con alimento" },
      { name: "Shampoo Clorhexidina 2%", dosage: "Baño medicado 2 veces por semana", duration: "3 semanas", notes: "Dejar actuar 10 minutos" },
    ],
    status: "Emitida",
  },
  {
    id: "FRM-015",
    date: "5 Dic 2025",
    pet: "Luna",
    tutor: "Andrés Gómez",
    vet: "Dr. Felipe Ruiz",
    diagnosis: "Gastroenteritis aguda",
    medications: [
      { name: "Metronidazol 250mg", dosage: "1 tableta vía oral cada 12 horas", duration: "7 días", notes: "Administrar con alimento para reducir náuseas" },
      { name: "Omeprazol 20mg", dosage: "1 cápsula vía oral cada 24 horas", duration: "5 días", notes: "En ayunas, 30 min antes del alimento" },
    ],
    status: "Emitida",
  },
];

export default function FormulasPage() {
  const [expanded, setExpanded] = useState<string | null>("FRM-024");

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-text">Fórmulas veterinarias</h1>
          <p className="mt-1 text-sm text-text-light">Prescripciones médicas emitidas y guardadas en el expediente</p>
        </div>
        <button className="inline-flex items-center gap-2 rounded-lg bg-teal px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-teal-dark">
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" /></svg>
          Nueva fórmula
        </button>
      </div>

      {/* Formulas list */}
      <div className="space-y-4">
        {mockFormulas.map((f) => (
          <div key={f.id} className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
            {/* Formula header */}
            <button
              onClick={() => setExpanded(expanded === f.id ? null : f.id)}
              className="flex w-full items-center justify-between px-6 py-4 text-left hover:bg-gray-50/50 transition"
            >
              <div className="flex items-center gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-teal/10">
                  <svg className="h-5 w-5 text-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" /></svg>
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs text-text-light">{f.id}</span>
                    <span className="text-sm font-medium text-text">{f.pet} — {f.diagnosis}</span>
                  </div>
                  <p className="mt-0.5 text-xs text-text-light">{f.date} · {f.vet} · Tutor: {f.tutor}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="rounded-full bg-emerald-50 px-2.5 py-0.5 text-xs font-medium text-emerald-600">{f.status}</span>
                <svg className={`h-4 w-4 text-text-light transition ${expanded === f.id ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" /></svg>
              </div>
            </button>

            {/* Formula detail - simulated document */}
            {expanded === f.id && (
              <div className="border-t border-gray-100 bg-gray-50/30 p-6">
                <div className="mx-auto max-w-2xl rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
                  {/* Document header */}
                  <div className="mb-6 border-b border-gray-200 pb-4 text-center">
                    <h3 className="text-lg font-bold text-teal">Vetuno</h3>
                    <p className="text-xs text-text-light">Fórmula veterinaria — Clínica PetSalud, Bogotá</p>
                    <p className="mt-1 text-xs text-text-light">NIT: 901.234.567-8 · Reg. ICA: VET-BOG-2024-0156</p>
                  </div>
                  {/* Patient & vet info */}
                  <div className="mb-4 grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="text-xs font-semibold uppercase text-text-light">Paciente</p>
                      <p className="font-medium text-text">{f.pet}</p>
                      <p className="text-xs text-text-light">Tutor: {f.tutor}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-xs font-semibold uppercase text-text-light">Profesional</p>
                      <p className="font-medium text-text">{f.vet}</p>
                      <p className="text-xs text-text-light">M.V. — T.P. 12345</p>
                    </div>
                  </div>
                  <div className="mb-4 text-sm">
                    <p className="text-xs font-semibold uppercase text-text-light">Diagnóstico</p>
                    <p className="font-medium text-text">{f.diagnosis}</p>
                  </div>
                  {/* Medications */}
                  <div className="mb-4">
                    <p className="mb-2 text-xs font-semibold uppercase text-text-light">Medicamentos prescritos</p>
                    <div className="space-y-3">
                      {f.medications.map((m, i) => (
                        <div key={i} className="rounded-lg border border-gray-100 bg-gray-50/50 p-3">
                          <p className="text-sm font-semibold text-text">{i + 1}. {m.name}</p>
                          <p className="mt-1 text-sm text-text-light">Posología: {m.dosage}</p>
                          <p className="text-sm text-text-light">Duración: {m.duration}</p>
                          {m.notes && <p className="mt-1 text-xs italic text-text-light">{m.notes}</p>}
                        </div>
                      ))}
                    </div>
                  </div>
                  {/* Footer */}
                  <div className="border-t border-gray-200 pt-4 text-center">
                    <p className="text-xs text-text-light">Fecha de emisión: {f.date} · {f.id}</p>
                    <p className="mt-1 text-xs text-text-light">Documento generado digitalmente por Vetuno</p>
                  </div>
                </div>
                {/* Action buttons */}
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
