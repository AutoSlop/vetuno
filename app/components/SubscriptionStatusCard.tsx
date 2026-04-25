"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

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

export default function SubscriptionStatusCard() {
  const [sub, setSub] = useState<SubscriptionData | null>(null);

  useEffect(() => {
    try {
      const raw = localStorage.getItem("vetuno_subscription");
      if (raw) setSub(JSON.parse(raw));
    } catch {}
  }, []);

  if (!sub) return null;

  const daysLeft = getDaysRemaining(sub.trialEnd);
  const isTrial = sub.status === "trial" && daysLeft > 0;
  const trialExpired = sub.status === "trial" && daysLeft === 0;

  if (!isTrial && !trialExpired) return null;

  return (
    <div className={`rounded-xl border p-5 ${
      trialExpired
        ? "border-amber-200 bg-amber-50"
        : "border-blue-200 bg-blue-50"
    }`}>
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-start gap-3">
          <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full ${
            trialExpired ? "bg-amber-100" : "bg-blue-100"
          }`}>
            {trialExpired ? (
              <svg className="h-5 w-5 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
              </svg>
            ) : (
              <svg className="h-5 w-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            )}
          </div>
          <div>
            <p className={`text-sm font-semibold ${trialExpired ? "text-amber-700" : "text-blue-700"}`}>
              {trialExpired ? "Tu prueba gratis ha terminado" : `Prueba gratis — ${daysLeft} días restantes`}
            </p>
            <p className={`mt-0.5 text-sm ${trialExpired ? "text-amber-600" : "text-blue-600"}`}>
              {trialExpired
                ? `Tu suscripción al ${sub.planName} (USD $${sub.planPrice}/mes) requiere pago para continuar.`
                : `${sub.planName} · Primer cobro de USD $${sub.planPrice} el ${formatDateShort(sub.nextBillingDate)}`}
            </p>
            <div className={`mt-2 flex items-center gap-3 text-xs ${trialExpired ? "text-amber-500" : "text-blue-500"}`}>
              <span className="flex items-center gap-1">
                <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z" />
                </svg>
                {sub.paymentMethod.brand} •••• {sub.paymentMethod.lastFour}
              </span>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2 sm:flex-col sm:items-end">
          {!trialExpired && (
            <div className="flex items-center gap-2">
              <div className="h-2 w-24 rounded-full bg-blue-100">
                <div
                  className="h-2 rounded-full bg-blue-500 transition-all"
                  style={{ width: `${((15 - daysLeft) / 15) * 100}%` }}
                />
              </div>
              <span className="text-xs font-medium text-blue-600">{daysLeft}/15</span>
            </div>
          )}
          <Link
            href="/admin/dashboard/membresia"
            className={`rounded-lg px-4 py-2 text-xs font-semibold transition ${
              trialExpired
                ? "bg-amber-600 text-white hover:bg-amber-700"
                : "bg-blue-600 text-white hover:bg-blue-700"
            }`}
          >
            {trialExpired ? "Activar suscripción" : "Gestionar suscripción"}
          </Link>
        </div>
      </div>
    </div>
  );
}
