"use client";

import { useState } from "react";

const mockAppointments = [
  { id: "CIT-001", time: "08:00", pet: "Luna", species: "Canino", breed: "Labrador Retriever", tutor: "Andrés Gómez", vet: "Dra. María López", reason: "Control vacunación anual", status: "Confirmada" },
  { id: "CIT-002", time: "08:30", pet: "Milo", species: "Felino", breed: "Siamés", tutor: "Laura Castillo", vet: "Dr. Felipe Ruiz", reason: "Vómito recurrente — seguimiento", status: "En curso" },
  { id: "CIT-003", time: "09:15", pet: "Rocky", species: "Canino", breed: "Bulldog Francés", tutor: "María Rodríguez", vet: "Dra. María López", reason: "Dermatitis alérgica — revisión", status: "Confirmada" },
  { id: "CIT-004", time: "10:00", pet: "Canela", species: "Canino", breed: "Beagle", tutor: "Santiago Herrera", vet: "Dra. Carolina Mejía", reason: "Esterilización programada", status: "Confirmada" },
  { id: "CIT-005", time: "10:45", pet: "Simón", species: "Felino", breed: "Persa", tutor: "Carolina Mejía", vet: "Dr. Felipe Ruiz", reason: "Limpieza dental", status: "Pendiente" },
  { id: "CIT-006", time: "11:30", pet: "Max", species: "Canino", breed: "Pastor Alemán", tutor: "Juan Pablo Ríos", vet: "Dra. María López", reason: "Cojera pata trasera derecha", status: "Confirmada" },
  { id: "CIT-007", time: "14:00", pet: "Nala", species: "Felino", breed: "Bengalí", tutor: "Valentina Díaz", vet: "Dra. Carolina Mejía", reason: "Primera consulta — cachorro", status: "Pendiente" },
  { id: "CIT-008", time: "14:45", pet: "Thor", species: "Canino", breed: "Rottweiler", tutor: "Diego Moreno", vet: "Dr. Felipe Ruiz", reason: "Retiro de puntos — cirugía anterior", status: "Cancelada" },
  { id: "CIT-009", time: "15:30", pet: "Lola", species: "Canino", breed: "Poodle", tutor: "Camila Vargas", vet: "Dra. María López", reason: "Ecografía abdominal", status: "Confirmada" },
  { id: "CIT-010", time: "16:00", pet: "Oreo", species: "Felino", breed: "Doméstico", tutor: "Andrés Gómez", vet: "Dra. Carolina Mejía", reason: "Desparasitación interna", status: "Pendiente" },
];

const statusColors: Record<string, string> = {
  "Confirmada": "bg-emerald-50 text-emerald-600",
  "En curso": "bg-blue-50 text-blue-600",
  "Pendiente": "bg-amber-50 text-amber-600",
  "Cancelada": "bg-red-50 text-red-500",
};

const days = ["Lun 21", "Mar 22", "Mié 23", "Jue 24", "Vie 25"];

export default function CitasPage() {
  const [selectedDay, setSelectedDay] = useState(3);

  const confirmed = mockAppointments.filter((a) => a.status === "Confirmada").length;
  const pending = mockAppointments.filter((a) => a.status === "Pendiente").length;
  const inProgress = mockAppointments.filter((a) => a.status === "En curso").length;

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-text">Agenda de citas</h1>
          <p className="mt-1 text-sm text-text-light">Gestiona las citas del día para la clínica</p>
        </div>
        <button className="inline-flex items-center gap-2 rounded-lg bg-teal px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-teal-dark">
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" /></svg>
          Nueva cita
        </button>
      </div>

      {/* Summary cards */}
      <div className="grid gap-4 sm:grid-cols-4">
        <div className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
          <p className="text-sm font-medium text-text-light">Total hoy</p>
          <p className="mt-1 text-2xl font-bold text-text">{mockAppointments.length}</p>
        </div>
        <div className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
          <p className="text-sm font-medium text-text-light">Confirmadas</p>
          <p className="mt-1 text-2xl font-bold text-emerald-600">{confirmed}</p>
        </div>
        <div className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
          <p className="text-sm font-medium text-text-light">En curso</p>
          <p className="mt-1 text-2xl font-bold text-blue-600">{inProgress}</p>
        </div>
        <div className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
          <p className="text-sm font-medium text-text-light">Pendientes</p>
          <p className="mt-1 text-2xl font-bold text-amber-600">{pending}</p>
        </div>
      </div>

      {/* Day selector */}
      <div className="flex gap-2 overflow-x-auto pb-1">
        {days.map((day, i) => (
          <button
            key={day}
            onClick={() => setSelectedDay(i)}
            className={`shrink-0 rounded-lg border px-4 py-2 text-sm font-medium transition ${
              selectedDay === i
                ? "border-teal bg-teal/10 text-teal"
                : "border-gray-200 bg-white text-text-light hover:border-gray-300"
            }`}
          >
            {day} Abr
          </button>
        ))}
      </div>

      {/* Appointments list */}
      <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
        <div className="border-b border-gray-100 bg-gray-50/50 px-6 py-3">
          <h2 className="text-sm font-semibold text-text">Jueves 24 de abril, 2026</h2>
        </div>
        <div className="divide-y divide-gray-50">
          {mockAppointments.map((apt) => (
            <div key={apt.id} className="flex items-start gap-4 px-6 py-4 hover:bg-gray-50/50 transition">
              {/* Time */}
              <div className="w-14 shrink-0 text-center">
                <span className="text-lg font-bold text-text">{apt.time.split(":")[0]}</span>
                <span className="text-sm text-text-light">:{apt.time.split(":")[1]}</span>
              </div>
              {/* Details */}
              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-2">
                  <span className="font-medium text-text">{apt.pet}</span>
                  <span className="text-xs text-text-light">({apt.species} — {apt.breed})</span>
                </div>
                <p className="mt-0.5 text-sm text-text-light">{apt.reason}</p>
                <div className="mt-1 flex flex-wrap items-center gap-3 text-xs text-text-light">
                  <span className="flex items-center gap-1">
                    <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" /></svg>
                    {apt.tutor}
                  </span>
                  <span className="flex items-center gap-1">
                    <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456z" /></svg>
                    {apt.vet}
                  </span>
                </div>
              </div>
              {/* Status */}
              <span className={`shrink-0 rounded-full px-2.5 py-0.5 text-xs font-medium ${statusColors[apt.status]}`}>
                {apt.status}
              </span>
            </div>
          ))}
        </div>
        <div className="border-t border-gray-100 bg-gray-50/50 px-6 py-3 text-sm text-text-light">
          {mockAppointments.length} citas programadas para hoy
        </div>
      </div>
    </div>
  );
}
