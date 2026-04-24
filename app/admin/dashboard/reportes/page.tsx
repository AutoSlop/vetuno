"use client";

import { useState } from "react";

type Period = "hoy" | "semana" | "mes";

const periodLabels: Record<Period, string> = {
  hoy: "Hoy",
  semana: "Esta semana",
  mes: "Este mes",
};

const kpiData: Record<Period, { citasAgendadas: { value: string; trend: string; up: boolean }; pacientesActivos: { value: string; trend: string; up: boolean }; miembrosActivos: { value: string; trend: string; up: boolean }; documentosEmitidos: { value: string; trend: string; up: boolean }; ingresosEstimados: { value: string; trend: string; up: boolean } }> = {
  hoy: {
    citasAgendadas: { value: "18", trend: "+3 vs ayer", up: true },
    pacientesActivos: { value: "1,243", trend: "+5 hoy", up: true },
    miembrosActivos: { value: "68", trend: "Sin cambios", up: true },
    documentosEmitidos: { value: "12", trend: "+4 vs ayer", up: true },
    ingresosEstimados: { value: "$2,340,000", trend: "+12% vs ayer", up: true },
  },
  semana: {
    citasAgendadas: { value: "87", trend: "+14 vs semana anterior", up: true },
    pacientesActivos: { value: "1,243", trend: "+23 esta semana", up: true },
    miembrosActivos: { value: "68", trend: "+2 esta semana", up: true },
    documentosEmitidos: { value: "56", trend: "+8 vs semana anterior", up: true },
    ingresosEstimados: { value: "$12,480,000", trend: "+9% vs semana anterior", up: true },
  },
  mes: {
    citasAgendadas: { value: "342", trend: "+48 vs mes anterior", up: true },
    pacientesActivos: { value: "1,243", trend: "+156 este mes", up: true },
    miembrosActivos: { value: "68", trend: "+8 este mes", up: true },
    documentosEmitidos: { value: "215", trend: "+27 vs mes anterior", up: true },
    ingresosEstimados: { value: "$48,720,000", trend: "+15% vs mes anterior", up: true },
  },
};

const actividadReciente = [
  { type: "cita", icon: "calendar", label: "Nueva cita agendada", detail: "Luna (Labrador) — Dra. Maria Lopez, control vacunacion", time: "Hace 25 min", color: "text-teal bg-teal/10" },
  { type: "formula", icon: "document", label: "Formula emitida", detail: "Apoquel 16mg — Paciente: Canela, Tutor: Santiago Herrera", time: "Hace 1 hora", color: "text-blue-600 bg-blue-50" },
  { type: "paciente", icon: "pet", label: "Nuevo paciente registrado", detail: "Rocky (Pastor Aleman) — Tutor: Laura Gutierrez", time: "Hace 2 horas", color: "text-emerald-600 bg-emerald-50" },
  { type: "autorizacion", icon: "shield", label: "Autorizacion creada", detail: "Consentimiento quirurgico — Esterilizacion de Mia (Felino)", time: "Hace 3 horas", color: "text-amber-600 bg-amber-50" },
  { type: "membresia", icon: "card", label: "Membresia activada", detail: "Plan Equipo — Clinica Veterinaria El Prado, Medellin", time: "Hace 4 horas", color: "text-purple-600 bg-purple-50" },
  { type: "cita", icon: "calendar", label: "Cita reprogramada", detail: "Max (Golden Retriever) — Dr. Felipe Ruiz, dermatologia", time: "Hace 5 horas", color: "text-teal bg-teal/10" },
  { type: "formula", icon: "document", label: "Formula emitida", detail: "Meloxicam 1.5mg — Paciente: Toby, Tutor: Camila Rios", time: "Hace 6 horas", color: "text-blue-600 bg-blue-50" },
  { type: "paciente", icon: "pet", label: "Paciente actualizado", detail: "Luna (Labrador) — Peso actualizado: 29.1 kg", time: "Hace 7 horas", color: "text-emerald-600 bg-emerald-50" },
  { type: "autorizacion", icon: "shield", label: "Autorizacion firmada", detail: "Consentimiento anestesia — Bruno (Bulldog Frances)", time: "Hace 8 horas", color: "text-amber-600 bg-amber-50" },
  { type: "membresia", icon: "card", label: "Membresia renovada", detail: "Plan Clinica — Centro Veterinario San Marcos", time: "Hace 1 dia", color: "text-purple-600 bg-purple-50" },
];

const citasPorDia = [
  { dia: "Lun", valor: 14 },
  { dia: "Mar", valor: 18 },
  { dia: "Mie", valor: 12 },
  { dia: "Jue", valor: 22 },
  { dia: "Vie", valor: 19 },
  { dia: "Sab", valor: 8 },
  { dia: "Dom", valor: 0 },
];

const documentosPorTipo = [
  { tipo: "Formulas", cantidad: 124, porcentaje: 58, color: "bg-teal" },
  { tipo: "Autorizaciones", cantidad: 56, porcentaje: 26, color: "bg-blue-500" },
  { tipo: "Consentimientos", cantidad: 35, porcentaje: 16, color: "bg-amber-500" },
];

const topVeterinarios = [
  { nombre: "Dra. Maria Lopez", citas: 87, pacientes: 64 },
  { nombre: "Dr. Felipe Ruiz", citas: 72, pacientes: 53 },
  { nombre: "Dra. Carolina Mejia", citas: 65, pacientes: 48 },
  { nombre: "Dr. Andres Castillo", citas: 58, pacientes: 41 },
];

const especiesDistribucion = [
  { especie: "Caninos", cantidad: 823, porcentaje: 66 },
  { especie: "Felinos", cantidad: 345, porcentaje: 28 },
  { especie: "Otros", cantidad: 75, porcentaje: 6 },
];

function ActivityIcon({ icon, className }: { icon: string; className?: string }) {
  const cn = className || "h-4 w-4";
  switch (icon) {
    case "calendar":
      return <svg className={cn} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" /></svg>;
    case "document":
      return <svg className={cn} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" /></svg>;
    case "pet":
      return <svg className={cn} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3.75a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 5.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48a4.53 4.53 0 01-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.07 4.167 9.75 5 9.75h.096a.75.75 0 01.753.659 23.034 23.034 0 01.054 8.341z" /></svg>;
    case "shield":
      return <svg className={cn} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" /></svg>;
    case "card":
      return <svg className={cn} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z" /></svg>;
    default:
      return null;
  }
}

export default function ReportesPage() {
  const [period, setPeriod] = useState<Period>("mes");
  const kpis = kpiData[period];

  const maxCitas = Math.max(...citasPorDia.map((d) => d.valor));

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-text">Reportes</h1>
          <p className="mt-1 text-sm text-text-light">
            Metricas operativas y actividad de la clinica
          </p>
        </div>
        {/* Period filter */}
        <div className="flex items-center gap-1 rounded-lg border border-gray-200 bg-white p-1">
          {(Object.keys(periodLabels) as Period[]).map((p) => (
            <button
              key={p}
              onClick={() => setPeriod(p)}
              className={`rounded-md px-3 py-1.5 text-sm font-medium transition ${
                period === p
                  ? "bg-teal text-white shadow-sm"
                  : "text-text-light hover:text-text hover:bg-gray-50"
              }`}
            >
              {periodLabels[p]}
            </button>
          ))}
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {[
          { label: "Citas agendadas", data: kpis.citasAgendadas, icon: "calendar" },
          { label: "Pacientes activos", data: kpis.pacientesActivos, icon: "pet" },
          { label: "Miembros activos", data: kpis.miembrosActivos, icon: "card" },
          { label: "Documentos emitidos", data: kpis.documentosEmitidos, icon: "document" },
          { label: "Ingresos estimados", data: kpis.ingresosEstimados, icon: "chart" },
        ].map((kpi) => (
          <div key={kpi.label} className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
            <div className="flex items-center justify-between">
              <p className="text-sm font-medium text-text-light">{kpi.label}</p>
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-teal/10">
                <ActivityIcon icon={kpi.icon} className="h-4 w-4 text-teal" />
              </div>
            </div>
            <p className="mt-3 text-2xl font-bold text-text">{kpi.data.value}</p>
            <div className="mt-1 flex items-center gap-1">
              {kpi.data.up ? (
                <svg className="h-3.5 w-3.5 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" /></svg>
              ) : (
                <svg className="h-3.5 w-3.5 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 4.5l15 15m0 0V8.25m0 11.25H8.25" /></svg>
              )}
              <span className={`text-xs font-medium ${kpi.data.up ? "text-emerald-600" : "text-red-600"}`}>
                {kpi.data.trend}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Charts Row */}
      <div className="grid gap-6 lg:grid-cols-2">
        {/* Citas por dia - bar chart */}
        <div className="rounded-xl border border-gray-200 bg-white shadow-sm">
          <div className="border-b border-gray-100 px-6 py-4">
            <h2 className="text-base font-semibold text-text">Citas por dia</h2>
            <p className="mt-0.5 text-xs text-text-light">Distribucion semanal de citas agendadas</p>
          </div>
          <div className="p-6">
            <div className="flex items-end gap-3 h-48">
              {citasPorDia.map((d) => (
                <div key={d.dia} className="flex flex-1 flex-col items-center gap-2">
                  <span className="text-xs font-semibold text-text">{d.valor}</span>
                  <div className="w-full relative" style={{ height: "140px" }}>
                    <div
                      className="absolute bottom-0 w-full rounded-t-md bg-teal/80 transition-all hover:bg-teal"
                      style={{ height: maxCitas > 0 ? `${(d.valor / maxCitas) * 100}%` : "0%" }}
                    />
                  </div>
                  <span className="text-xs font-medium text-text-light">{d.dia}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Documentos por tipo */}
        <div className="rounded-xl border border-gray-200 bg-white shadow-sm">
          <div className="border-b border-gray-100 px-6 py-4">
            <h2 className="text-base font-semibold text-text">Documentos por tipo</h2>
            <p className="mt-0.5 text-xs text-text-light">Distribucion de documentos emitidos este mes</p>
          </div>
          <div className="p-6 space-y-5">
            {documentosPorTipo.map((doc) => (
              <div key={doc.tipo}>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-text">{doc.tipo}</span>
                  <span className="text-sm font-semibold text-text">{doc.cantidad} <span className="text-text-light font-normal">({doc.porcentaje}%)</span></span>
                </div>
                <div className="h-2.5 w-full rounded-full bg-gray-100">
                  <div
                    className={`h-2.5 rounded-full ${doc.color} transition-all`}
                    style={{ width: `${doc.porcentaje}%` }}
                  />
                </div>
              </div>
            ))}
            <div className="pt-2 border-t border-gray-100">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-text-light">Total</span>
                <span className="text-sm font-bold text-text">{documentosPorTipo.reduce((a, b) => a + b.cantidad, 0)}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Second row */}
      <div className="grid gap-6 lg:grid-cols-3">
        {/* Top veterinarios */}
        <div className="rounded-xl border border-gray-200 bg-white shadow-sm">
          <div className="border-b border-gray-100 px-6 py-4">
            <h2 className="text-base font-semibold text-text">Top veterinarios</h2>
            <p className="mt-0.5 text-xs text-text-light">Por numero de citas este mes</p>
          </div>
          <div className="divide-y divide-gray-50">
            {topVeterinarios.map((vet, i) => (
              <div key={vet.nombre} className="flex items-center gap-3 px-6 py-3.5">
                <div className={`flex h-8 w-8 items-center justify-center rounded-full text-sm font-bold ${
                  i === 0 ? "bg-amber-100 text-amber-700" : i === 1 ? "bg-gray-100 text-gray-600" : i === 2 ? "bg-orange-100 text-orange-700" : "bg-gray-50 text-gray-500"
                }`}>
                  {i + 1}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-text truncate">{vet.nombre}</p>
                  <p className="text-xs text-text-light">{vet.pacientes} pacientes</p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-bold text-teal">{vet.citas}</p>
                  <p className="text-xs text-text-light">citas</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Distribucion por especie */}
        <div className="rounded-xl border border-gray-200 bg-white shadow-sm">
          <div className="border-b border-gray-100 px-6 py-4">
            <h2 className="text-base font-semibold text-text">Pacientes por especie</h2>
            <p className="mt-0.5 text-xs text-text-light">Distribucion de pacientes registrados</p>
          </div>
          <div className="p-6 space-y-4">
            {especiesDistribucion.map((esp) => (
              <div key={esp.especie} className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-teal/10 text-lg">
                  {esp.especie === "Caninos" ? "🐕" : esp.especie === "Felinos" ? "🐈" : "🐾"}
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm font-medium text-text">{esp.especie}</span>
                    <span className="text-sm font-semibold text-text">{esp.cantidad}</span>
                  </div>
                  <div className="h-2 w-full rounded-full bg-gray-100">
                    <div
                      className="h-2 rounded-full bg-teal transition-all"
                      style={{ width: `${esp.porcentaje}%`, opacity: esp.especie === "Caninos" ? 1 : esp.especie === "Felinos" ? 0.7 : 0.4 }}
                    />
                  </div>
                  <p className="mt-0.5 text-xs text-text-light">{esp.porcentaje}% del total</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Actividad reciente timeline */}
        <div className="rounded-xl border border-gray-200 bg-white shadow-sm lg:row-span-1">
          <div className="border-b border-gray-100 px-6 py-4">
            <h2 className="text-base font-semibold text-text">Actividad reciente</h2>
            <p className="mt-0.5 text-xs text-text-light">Ultimos eventos de la clinica</p>
          </div>
          <div className="overflow-y-auto max-h-80">
            {actividadReciente.map((item, i) => (
              <div key={i} className="flex items-start gap-3 px-6 py-3 border-b border-gray-50 last:border-0">
                <div className={`mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg ${item.color}`}>
                  <ActivityIcon icon={item.icon} className="h-3.5 w-3.5" />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-medium text-text">{item.label}</p>
                  <p className="text-xs text-text-light truncate">{item.detail}</p>
                  <p className="mt-0.5 text-[11px] text-gray-400">{item.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
