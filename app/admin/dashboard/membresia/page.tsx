"use client";

import { useState, useEffect } from "react";

interface SubscriptionData {
  planId: string;
  planName: string;
  planPrice: string;
  status: string;
  trialStart: string;
  trialEnd: string;
  nextBillingDate: string;
  paymentMethod: {
    type: string;
    lastFour: string;
    brand: string;
    expiry: string;
    name: string;
  };
  createdAt: string;
}

function formatDateShort(iso: string): string {
  const d = new Date(iso);
  const months = ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"];
  return `${d.getDate()} ${months[d.getMonth()]} ${d.getFullYear()}`;
}

function getDaysRemaining(endDate: string): number {
  const end = new Date(endDate);
  const now = new Date();
  const diff = end.getTime() - now.getTime();
  return Math.max(0, Math.ceil(diff / (1000 * 60 * 60 * 24)));
}

function getSubscriptionStatus(sub: SubscriptionData): { label: string; color: string; bgColor: string; dotColor: string } {
  const daysLeft = getDaysRemaining(sub.trialEnd);
  if (sub.status === "trial" && daysLeft > 0) {
    return { label: "En prueba", color: "text-blue-600", bgColor: "bg-blue-50", dotColor: "bg-blue-500" };
  }
  if (sub.status === "trial" && daysLeft === 0) {
    return { label: "Pago pendiente", color: "text-amber-600", bgColor: "bg-amber-50", dotColor: "bg-amber-500" };
  }
  if (sub.status === "active") {
    return { label: "Activa", color: "text-emerald-600", bgColor: "bg-emerald-50", dotColor: "bg-emerald-500" };
  }
  return { label: "Activa", color: "text-emerald-600", bgColor: "bg-emerald-50", dotColor: "bg-emerald-500" };
}

export default function MembresiaClinicaPage() {
  const [sub, setSub] = useState<SubscriptionData | null>(null);

  useEffect(() => {
    try {
      const raw = localStorage.getItem("vetuno_subscription");
      if (raw) setSub(JSON.parse(raw));
    } catch {}
  }, []);

  const benefits = [
    "Historia clínica digital ilimitada",
    "Agenda de citas integrada",
    "Fórmulas veterinarias en PDF",
    "Autorizaciones y consentimientos digitales",
    "Perfil unificado mascota-tutor",
    "Soporte prioritario por WhatsApp",
    "Onboarding acompañado",
    "Actualizaciones incluidas",
  ];

  // Use subscription data if available, otherwise use defaults
  const planName = sub?.planName || "Plan Equipo";
  const planPrice = sub?.planPrice || "69";
  const statusInfo = sub ? getSubscriptionStatus(sub) : { label: "Activa", color: "text-emerald-600", bgColor: "bg-emerald-50", dotColor: "bg-emerald-500" };
  const daysLeft = sub ? getDaysRemaining(sub.trialEnd) : 0;
  const isTrial = sub?.status === "trial" && daysLeft > 0;

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-text">Membresía de la clínica</h1>
        <p className="mt-1 text-sm text-text-light">Resumen del plan activo, estado y beneficios incluidos</p>
      </div>

      {/* Trial banner */}
      {isTrial && (
        <div className="rounded-xl border border-blue-200 bg-blue-50 p-4">
          <div className="flex items-start gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-100">
              <svg className="h-5 w-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <p className="text-sm font-semibold text-blue-700">Periodo de prueba gratis</p>
              <p className="mt-0.5 text-sm text-blue-600">
                Te quedan <strong>{daysLeft} días</strong> de prueba. Tu prueba termina el <strong>{sub ? formatDateShort(sub.trialEnd) : ""}</strong>.
              </p>
              <p className="mt-0.5 text-xs text-blue-500">
                Primer cobro de USD ${planPrice} el {sub ? formatDateShort(sub.nextBillingDate) : ""}. Puedes cancelar antes sin costo.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Membership card */}
      <div className="mx-auto max-w-2xl">
        <div className="overflow-hidden rounded-2xl shadow-xl ring-1 ring-gray-100">
          {/* Card header */}
          <div className="relative bg-gradient-to-br from-teal via-teal-dark to-teal px-8 py-8 text-white">
            <div
              className="absolute inset-0 opacity-10"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 20% 50%, white 1px, transparent 1px), radial-gradient(circle at 80% 20%, white 1px, transparent 1px)",
                backgroundSize: "30px 30px",
              }}
            ></div>
            <div className="relative">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <svg className="h-8 w-8 text-white/80" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                  </svg>
                  <div>
                    <span className="text-2xl font-bold tracking-wide">Vetuno</span>
                    <p className="text-sm text-white/60">Plataforma veterinaria</p>
                  </div>
                </div>
                <span className="rounded-full border border-white/30 bg-white/15 px-4 py-1 text-sm font-semibold uppercase tracking-wider backdrop-blur-sm">
                  {planName}
                </span>
              </div>
              <div className="mt-6">
                <div className="flex items-center gap-4">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-white/15 text-2xl backdrop-blur-sm">
                    🏥
                  </div>
                  <div>
                    <h2 className="text-xl font-bold">Clínica PetSalud</h2>
                    <p className="text-sm text-white/70">Bogotá, Colombia</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Card body */}
          <div className="bg-white p-8">
            <div className="grid gap-6 sm:grid-cols-2">
              {/* Plan details */}
              <div className="space-y-4">
                <h3 className="text-xs font-semibold uppercase tracking-wider text-text-light">Detalles del plan</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex items-center justify-between border-b border-gray-50 pb-2">
                    <span className="text-text-light">Plan</span>
                    <span className="font-semibold text-text">{planName}</span>
                  </div>
                  <div className="flex items-center justify-between border-b border-gray-50 pb-2">
                    <span className="text-text-light">Precio</span>
                    <span className="font-semibold text-text">USD ${planPrice}/mes</span>
                  </div>
                  <div className="flex items-center justify-between border-b border-gray-50 pb-2">
                    <span className="text-text-light">Usuarios incluidos</span>
                    <span className="font-semibold text-text">Hasta 5</span>
                  </div>
                  <div className="flex items-center justify-between border-b border-gray-50 pb-2">
                    <span className="text-text-light">Fecha de inicio</span>
                    <span className="font-semibold text-text">{sub ? formatDateShort(sub.createdAt) : "3 Feb 2026"}</span>
                  </div>
                  <div className="flex items-center justify-between border-b border-gray-50 pb-2">
                    <span className="text-text-light">{isTrial ? "Fin de prueba" : "Vigencia hasta"}</span>
                    <span className="font-semibold text-text">{sub ? formatDateShort(sub.trialEnd) : "3 Feb 2027"}</span>
                  </div>
                  <div className="flex items-center justify-between border-b border-gray-50 pb-2">
                    <span className="text-text-light">Método de pago</span>
                    <span className="font-semibold text-text">
                      {sub ? `${sub.paymentMethod.brand} •••• ${sub.paymentMethod.lastFour}` : "Tarjeta •••• 4532"}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-text-light">Estado</span>
                    <span className={`inline-flex items-center gap-1.5 rounded-full ${statusInfo.bgColor} px-3 py-1 text-xs font-bold ${statusInfo.color}`}>
                      <span className={`h-2 w-2 rounded-full ${statusInfo.dotColor}`}></span>
                      {statusInfo.label}
                    </span>
                  </div>
                </div>
              </div>

              {/* Usage stats / Subscription info */}
              <div className="space-y-4">
                <h3 className="text-xs font-semibold uppercase tracking-wider text-text-light">
                  {isTrial ? "Estado de suscripción" : "Uso actual"}
                </h3>
                <div className="space-y-3">
                  {isTrial && (
                    <>
                      <div className="rounded-lg border border-blue-100 bg-blue-50/50 p-3">
                        <div className="flex items-center justify-between mb-1.5">
                          <span className="text-xs font-medium text-blue-600">Dias restantes de prueba</span>
                          <span className="text-xs font-semibold text-blue-700">{daysLeft} de 15</span>
                        </div>
                        <div className="h-2 rounded-full bg-blue-100">
                          <div className="h-2 rounded-full bg-blue-500 transition-all" style={{ width: `${((15 - daysLeft) / 15) * 100}%` }}></div>
                        </div>
                      </div>
                      <div className="rounded-lg border border-gray-100 bg-gray-50/50 p-3">
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-medium text-text-light">Próximo cobro</span>
                          <span className="text-xs font-semibold text-text">{sub ? formatDateShort(sub.nextBillingDate) : ""}</span>
                        </div>
                        <p className="mt-1 text-xs text-text-light">USD ${planPrice} al finalizar la prueba</p>
                      </div>
                      <div className="rounded-lg border border-gray-100 bg-gray-50/50 p-3">
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-medium text-text-light">Método guardado</span>
                          <span className="text-xs font-semibold text-text">
                            {sub ? `${sub.paymentMethod.brand} •••• ${sub.paymentMethod.lastFour}` : "—"}
                          </span>
                        </div>
                        <p className="mt-1 text-xs text-text-light">Puedes cambiar antes del primer cobro</p>
                      </div>
                    </>
                  )}
                  {!isTrial && (
                    <>
                      <div className="rounded-lg border border-gray-100 bg-gray-50/50 p-3">
                        <div className="flex items-center justify-between mb-1.5">
                          <span className="text-xs font-medium text-text-light">Usuarios</span>
                          <span className="text-xs font-semibold text-text">3 / 5</span>
                        </div>
                        <div className="h-2 rounded-full bg-gray-200">
                          <div className="h-2 rounded-full bg-teal" style={{ width: "60%" }}></div>
                        </div>
                      </div>
                      <div className="rounded-lg border border-gray-100 bg-gray-50/50 p-3">
                        <div className="flex items-center justify-between mb-1.5">
                          <span className="text-xs font-medium text-text-light">Pacientes registrados</span>
                          <span className="text-xs font-semibold text-text">47</span>
                        </div>
                        <p className="text-xs text-text-light">Sin límite en este plan</p>
                      </div>
                      <div className="rounded-lg border border-gray-100 bg-gray-50/50 p-3">
                        <div className="flex items-center justify-between mb-1.5">
                          <span className="text-xs font-medium text-text-light">Documentos este mes</span>
                          <span className="text-xs font-semibold text-text">34</span>
                        </div>
                        <p className="text-xs text-text-light">Sin límite en este plan</p>
                      </div>
                      <div className="rounded-lg border border-gray-100 bg-gray-50/50 p-3">
                        <div className="flex items-center justify-between mb-1.5">
                          <span className="text-xs font-medium text-text-light">Almacenamiento</span>
                          <span className="text-xs font-semibold text-text">1.2 GB / 10 GB</span>
                        </div>
                        <div className="h-2 rounded-full bg-gray-200">
                          <div className="h-2 rounded-full bg-teal" style={{ width: "12%" }}></div>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Benefits */}
          <div className="border-t border-gray-100 bg-white px-8 py-6">
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-wider text-text-light">Beneficios incluidos</h3>
            <div className="grid gap-2 sm:grid-cols-2">
              {benefits.map((b) => (
                <div key={b} className="flex items-center gap-2 text-sm text-text">
                  <svg className="h-4 w-4 shrink-0 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>
                  {b}
                </div>
              ))}
            </div>
          </div>

          {/* Footer */}
          <div className="border-t border-gray-100 bg-gray-50 px-8 py-4">
            <div className="flex flex-col items-center justify-between gap-3 sm:flex-row">
              <p className="text-xs text-text-light">
                {isTrial
                  ? `Primer cobro: ${sub ? formatDateShort(sub.nextBillingDate) : ""} · USD $${planPrice}.00`
                  : `Próxima facturación: ${sub ? formatDateShort(sub.nextBillingDate) : "3 May 2026"} · USD $${planPrice}.00`}
              </p>
              <div className="flex gap-3">
                <button className="rounded-lg border border-gray-200 bg-white px-4 py-2 text-xs font-medium text-text transition hover:bg-gray-50">
                  Cambiar plan
                </button>
                <button className="rounded-lg border border-gray-200 bg-white px-4 py-2 text-xs font-medium text-text transition hover:bg-gray-50">
                  {isTrial ? "Gestionar suscripción" : "Ver facturas"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
