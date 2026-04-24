"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const STORAGE_KEY = "vetuno_onboarding";
const TOTAL_STEPS = 5;

const stepLabels = [
  "Perfil de la clínica",
  "Primer veterinario",
  "Horarios de atención",
  "Primer paciente",
  "Revisión final",
];

export default function OnboardingStatus() {
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (parsed.completedSteps) setCompletedSteps(parsed.completedSteps);
      }
    } catch {
      // ignore
    }
    setLoaded(true);
  }, []);

  if (!loaded) return null;

  const progress = Math.round((completedSteps.length / TOTAL_STEPS) * 100);
  const allComplete = completedSteps.length === TOTAL_STEPS;

  if (allComplete) {
    return (
      <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-4 shadow-sm">
        <div className="flex items-center gap-3">
          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-emerald-500 text-white">
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
            </svg>
          </div>
          <div className="min-w-0 flex-1">
            <p className="text-sm font-semibold text-emerald-800">
              Clínica lista para operar
            </p>
            <p className="text-xs text-emerald-600">
              Toda la configuración inicial ha sido completada exitosamente.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-2 mb-1">
            <svg className="h-5 w-5 text-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.63 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
            </svg>
            <h3 className="text-sm font-semibold text-text">Configuración inicial</h3>
            <span className="rounded-full bg-teal/10 px-2 py-0.5 text-xs font-medium text-teal">
              {progress}%
            </span>
          </div>
          <p className="text-xs text-text-light mb-3">
            Completa {TOTAL_STEPS - completedSteps.length} paso{TOTAL_STEPS - completedSteps.length !== 1 ? "s" : ""} restante{TOTAL_STEPS - completedSteps.length !== 1 ? "s" : ""} para dejar tu clínica lista
          </p>
          {/* Progress bar */}
          <div className="h-1.5 w-full rounded-full bg-gray-100">
            <div
              className="h-1.5 rounded-full bg-teal transition-all duration-500"
              style={{ width: `${progress}%` }}
            />
          </div>
          {/* Step checklist mini */}
          <div className="mt-3 flex flex-wrap gap-2">
            {stepLabels.map((label, i) => {
              const done = completedSteps.includes(i + 1);
              return (
                <span
                  key={i}
                  className={`inline-flex items-center gap-1 rounded-md px-2 py-0.5 text-xs font-medium ${
                    done
                      ? "bg-emerald-50 text-emerald-600 line-through"
                      : "bg-gray-50 text-text-light"
                  }`}
                >
                  {done && (
                    <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                  )}
                  {label}
                </span>
              );
            })}
          </div>
        </div>
        <Link
          href="/admin/dashboard/onboarding"
          className="shrink-0 self-start rounded-lg bg-teal px-4 py-2 text-sm font-semibold text-white transition hover:bg-teal-dark sm:self-center"
        >
          Continuar
        </Link>
      </div>
    </div>
  );
}
