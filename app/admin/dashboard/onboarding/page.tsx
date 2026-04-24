"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

interface StepData {
  clinicName: string;
  clinicCity: string;
  clinicAddress: string;
  clinicPhone: string;
  vetName: string;
  vetEmail: string;
  vetRole: string;
  scheduleMonFri: string;
  scheduleSat: string;
  scheduleSun: string;
  patientName: string;
  patientSpecies: string;
  patientBreed: string;
  patientTutor: string;
}

const STORAGE_KEY = "vetuno_onboarding";

const defaultData: StepData = {
  clinicName: "",
  clinicCity: "",
  clinicAddress: "",
  clinicPhone: "",
  vetName: "",
  vetEmail: "",
  vetRole: "Veterinario",
  scheduleMonFri: "08:00 - 18:00",
  scheduleSat: "08:00 - 13:00",
  scheduleSun: "Cerrado",
  patientName: "",
  patientSpecies: "Canino",
  patientBreed: "",
  patientTutor: "",
};

const steps = [
  { id: 1, title: "Perfil de la clínica", description: "Nombre, sede, contacto y ciudad de tu clínica" },
  { id: 2, title: "Primer veterinario", description: "Registra al administrador o veterinario principal" },
  { id: 3, title: "Horarios de atención", description: "Configura los horarios de tu clínica" },
  { id: 4, title: "Primer paciente", description: "Carga tu primera mascota o paciente base" },
  { id: 5, title: "Revisión final", description: "Verifica la configuración y comienza a operar" },
];

function CheckIcon({ className }: { className?: string }) {
  return (
    <svg className={className || "h-5 w-5"} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
    </svg>
  );
}

function StepIcon({ step, completed, active }: { step: number; completed: boolean; active: boolean }) {
  if (completed) {
    return (
      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-500 text-white">
        <CheckIcon className="h-4 w-4" />
      </div>
    );
  }
  return (
    <div
      className={`flex h-8 w-8 items-center justify-center rounded-full border-2 text-sm font-semibold ${
        active ? "border-teal bg-teal text-white" : "border-gray-300 text-gray-400"
      }`}
    >
      {step}
    </div>
  );
}

export default function OnboardingPage() {
  const [activeStep, setActiveStep] = useState(1);
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);
  const [data, setData] = useState<StepData>(defaultData);
  const [loaded, setLoaded] = useState(false);

  // Load from localStorage
  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (parsed.completedSteps) setCompletedSteps(parsed.completedSteps);
        if (parsed.data) setData({ ...defaultData, ...parsed.data });
        if (parsed.activeStep) setActiveStep(parsed.activeStep);
      }
    } catch {
      // ignore
    }
    setLoaded(true);
  }, []);

  // Save to localStorage
  useEffect(() => {
    if (!loaded) return;
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({ completedSteps, data, activeStep })
    );
  }, [completedSteps, data, activeStep, loaded]);

  const progress = Math.round((completedSteps.length / steps.length) * 100);
  const allComplete = completedSteps.length === steps.length;

  function completeStep(stepId: number) {
    if (!completedSteps.includes(stepId)) {
      setCompletedSteps((prev) => [...prev, stepId]);
    }
    if (stepId < 5) {
      setActiveStep(stepId + 1);
    }
  }

  function updateField(field: keyof StepData, value: string) {
    setData((prev) => ({ ...prev, [field]: value }));
  }

  function resetOnboarding() {
    setCompletedSteps([]);
    setData(defaultData);
    setActiveStep(1);
  }

  if (!loaded) {
    return (
      <div className="flex items-center justify-center py-20">
        <div className="h-8 w-8 animate-spin rounded-full border-2 border-teal border-t-transparent" />
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-text">Configuración inicial</h1>
          <p className="mt-1 text-sm text-text-light">
            Completa estos pasos para dejar tu clínica lista en Vetuno
          </p>
        </div>
        {completedSteps.length > 0 && !allComplete && (
          <button
            onClick={resetOnboarding}
            className="self-start rounded-lg border border-gray-200 px-3 py-1.5 text-xs font-medium text-text-light transition hover:border-red-300 hover:text-red-500"
          >
            Reiniciar
          </button>
        )}
      </div>

      {/* Progress bar */}
      <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium text-text">Progreso general</span>
          <span className="text-sm font-semibold text-teal">{progress}%</span>
        </div>
        <div className="h-2.5 w-full rounded-full bg-gray-100">
          <div
            className="h-2.5 rounded-full bg-teal transition-all duration-500"
            style={{ width: `${progress}%` }}
          />
        </div>
        <p className="mt-2 text-xs text-text-light">
          {completedSteps.length} de {steps.length} pasos completados
        </p>
      </div>

      {/* All complete banner */}
      {allComplete && (
        <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-6 text-center shadow-sm">
          <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-emerald-500 text-white">
            <CheckIcon className="h-6 w-6" />
          </div>
          <h2 className="text-lg font-bold text-emerald-800">
            Tu clínica está lista para operar
          </h2>
          <p className="mt-1 text-sm text-emerald-600">
            Has completado toda la configuración inicial. Ya puedes usar Vetuno con tu equipo.
          </p>
          <div className="mt-4 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Link
              href="/admin/dashboard"
              className="inline-flex items-center gap-2 rounded-lg bg-teal px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-teal-dark"
            >
              Ir al dashboard
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
            <button
              onClick={resetOnboarding}
              className="text-sm font-medium text-text-light transition hover:text-text"
            >
              Reiniciar configuración
            </button>
          </div>
        </div>
      )}

      {/* Steps grid */}
      <div className="grid gap-4 lg:grid-cols-5">
        {/* Step indicators - vertical on mobile, horizontal on desktop */}
        <div className="lg:col-span-1">
          <div className="flex gap-2 overflow-x-auto pb-2 lg:flex-col lg:overflow-x-visible lg:pb-0">
            {steps.map((step) => {
              const isCompleted = completedSteps.includes(step.id);
              const isActive = activeStep === step.id;
              return (
                <button
                  key={step.id}
                  onClick={() => setActiveStep(step.id)}
                  className={`flex min-w-[140px] items-center gap-3 rounded-lg border px-3 py-3 text-left transition lg:min-w-0 ${
                    isActive
                      ? "border-teal bg-teal/5"
                      : isCompleted
                      ? "border-emerald-200 bg-emerald-50/50"
                      : "border-gray-200 bg-white hover:border-gray-300"
                  }`}
                >
                  <StepIcon step={step.id} completed={isCompleted} active={isActive} />
                  <div className="min-w-0">
                    <p className={`text-xs font-semibold ${isActive ? "text-teal" : isCompleted ? "text-emerald-600" : "text-text-light"}`}>
                      Paso {step.id}
                    </p>
                    <p className={`truncate text-xs ${isActive ? "text-text" : "text-text-light"}`}>
                      {step.title}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Active step content */}
        <div className="lg:col-span-4">
          <div className="rounded-xl border border-gray-200 bg-white shadow-sm">
            <div className="border-b border-gray-100 px-6 py-4">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-base font-semibold text-text">
                    Paso {activeStep}: {steps[activeStep - 1].title}
                  </h2>
                  <p className="mt-0.5 text-sm text-text-light">
                    {steps[activeStep - 1].description}
                  </p>
                </div>
                {completedSteps.includes(activeStep) && (
                  <span className="flex items-center gap-1 rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-medium text-emerald-600">
                    <CheckIcon className="h-3.5 w-3.5" />
                    Completado
                  </span>
                )}
              </div>
            </div>

            <div className="p-6">
              {activeStep === 1 && (
                <StepClinicProfile data={data} updateField={updateField} />
              )}
              {activeStep === 2 && (
                <StepFirstVet data={data} updateField={updateField} />
              )}
              {activeStep === 3 && (
                <StepSchedule data={data} updateField={updateField} />
              )}
              {activeStep === 4 && (
                <StepFirstPatient data={data} updateField={updateField} />
              )}
              {activeStep === 5 && (
                <StepReview data={data} completedSteps={completedSteps} />
              )}
            </div>

            {/* Step actions */}
            <div className="flex items-center justify-between border-t border-gray-100 px-6 py-4">
              <button
                onClick={() => setActiveStep(Math.max(1, activeStep - 1))}
                disabled={activeStep === 1}
                className="rounded-lg border border-gray-200 px-4 py-2 text-sm font-medium text-text-light transition hover:border-gray-300 hover:text-text disabled:opacity-40 disabled:cursor-not-allowed"
              >
                Anterior
              </button>
              <div className="flex items-center gap-3">
                {!completedSteps.includes(activeStep) && activeStep < 5 && (
                  <button
                    onClick={() => completeStep(activeStep)}
                    className="rounded-lg bg-teal px-5 py-2 text-sm font-semibold text-white transition hover:bg-teal-dark"
                  >
                    Completar y continuar
                  </button>
                )}
                {!completedSteps.includes(activeStep) && activeStep === 5 && (
                  <button
                    onClick={() => completeStep(5)}
                    className="rounded-lg bg-emerald-500 px-5 py-2 text-sm font-semibold text-white transition hover:bg-emerald-600"
                  >
                    Finalizar configuración
                  </button>
                )}
                {completedSteps.includes(activeStep) && activeStep < 5 && (
                  <button
                    onClick={() => setActiveStep(activeStep + 1)}
                    className="rounded-lg bg-teal px-5 py-2 text-sm font-semibold text-white transition hover:bg-teal-dark"
                  >
                    Siguiente
                  </button>
                )}
                {completedSteps.includes(activeStep) && !completedSteps.includes(activeStep) && null}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ---- Step Components ---- */

function InputField({
  label,
  value,
  onChange,
  placeholder,
  type = "text",
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  type?: string;
}) {
  return (
    <div>
      <label className="mb-1.5 block text-sm font-medium text-text">{label}</label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm text-text outline-none transition placeholder:text-gray-400 focus:border-teal focus:ring-1 focus:ring-teal/20"
      />
    </div>
  );
}

function StepClinicProfile({
  data,
  updateField,
}: {
  data: StepData;
  updateField: (field: keyof StepData, value: string) => void;
}) {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      <InputField
        label="Nombre de la clínica"
        value={data.clinicName}
        onChange={(v) => updateField("clinicName", v)}
        placeholder="Ej: Veterinaria PetSalud"
      />
      <InputField
        label="Ciudad"
        value={data.clinicCity}
        onChange={(v) => updateField("clinicCity", v)}
        placeholder="Ej: Bogotá"
      />
      <InputField
        label="Dirección / Sede"
        value={data.clinicAddress}
        onChange={(v) => updateField("clinicAddress", v)}
        placeholder="Ej: Cra 15 #82-30, Chapinero"
      />
      <InputField
        label="Teléfono de contacto"
        value={data.clinicPhone}
        onChange={(v) => updateField("clinicPhone", v)}
        placeholder="Ej: 3145553305"
        type="tel"
      />
    </div>
  );
}

function StepFirstVet({
  data,
  updateField,
}: {
  data: StepData;
  updateField: (field: keyof StepData, value: string) => void;
}) {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      <InputField
        label="Nombre completo"
        value={data.vetName}
        onChange={(v) => updateField("vetName", v)}
        placeholder="Ej: Dr. Carlos Martínez"
      />
      <InputField
        label="Correo electrónico"
        value={data.vetEmail}
        onChange={(v) => updateField("vetEmail", v)}
        placeholder="Ej: carlos@clinica.com"
        type="email"
      />
      <div>
        <label className="mb-1.5 block text-sm font-medium text-text">Rol</label>
        <select
          value={data.vetRole}
          onChange={(e) => updateField("vetRole", e.target.value)}
          className="w-full rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm text-text outline-none transition focus:border-teal focus:ring-1 focus:ring-teal/20"
        >
          <option>Veterinario</option>
          <option>Administrador</option>
          <option>Recepcionista</option>
          <option>Auxiliar</option>
        </select>
      </div>
    </div>
  );
}

function StepSchedule({
  data,
  updateField,
}: {
  data: StepData;
  updateField: (field: keyof StepData, value: string) => void;
}) {
  return (
    <div className="space-y-4">
      <p className="text-sm text-text-light">
        Define los horarios de atención de tu clínica. Puedes ajustarlos después en Configuración.
      </p>
      <div className="grid gap-4 sm:grid-cols-3">
        <InputField
          label="Lunes a viernes"
          value={data.scheduleMonFri}
          onChange={(v) => updateField("scheduleMonFri", v)}
          placeholder="08:00 - 18:00"
        />
        <InputField
          label="Sábado"
          value={data.scheduleSat}
          onChange={(v) => updateField("scheduleSat", v)}
          placeholder="08:00 - 13:00"
        />
        <InputField
          label="Domingo"
          value={data.scheduleSun}
          onChange={(v) => updateField("scheduleSun", v)}
          placeholder="Cerrado"
        />
      </div>
    </div>
  );
}

function StepFirstPatient({
  data,
  updateField,
}: {
  data: StepData;
  updateField: (field: keyof StepData, value: string) => void;
}) {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      <InputField
        label="Nombre de la mascota"
        value={data.patientName}
        onChange={(v) => updateField("patientName", v)}
        placeholder="Ej: Luna"
      />
      <div>
        <label className="mb-1.5 block text-sm font-medium text-text">Especie</label>
        <select
          value={data.patientSpecies}
          onChange={(e) => updateField("patientSpecies", e.target.value)}
          className="w-full rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm text-text outline-none transition focus:border-teal focus:ring-1 focus:ring-teal/20"
        >
          <option>Canino</option>
          <option>Felino</option>
          <option>Ave</option>
          <option>Roedor</option>
          <option>Reptil</option>
          <option>Otro</option>
        </select>
      </div>
      <InputField
        label="Raza"
        value={data.patientBreed}
        onChange={(v) => updateField("patientBreed", v)}
        placeholder="Ej: Labrador Retriever"
      />
      <InputField
        label="Nombre del tutor"
        value={data.patientTutor}
        onChange={(v) => updateField("patientTutor", v)}
        placeholder="Ej: Andrés Gómez"
      />
    </div>
  );
}

function StepReview({
  data,
  completedSteps,
}: {
  data: StepData;
  completedSteps: number[];
}) {
  const sections = [
    {
      step: 1,
      title: "Clínica",
      items: [
        { label: "Nombre", value: data.clinicName },
        { label: "Ciudad", value: data.clinicCity },
        { label: "Dirección", value: data.clinicAddress },
        { label: "Teléfono", value: data.clinicPhone },
      ],
    },
    {
      step: 2,
      title: "Veterinario principal",
      items: [
        { label: "Nombre", value: data.vetName },
        { label: "Email", value: data.vetEmail },
        { label: "Rol", value: data.vetRole },
      ],
    },
    {
      step: 3,
      title: "Horarios",
      items: [
        { label: "Lun-Vie", value: data.scheduleMonFri },
        { label: "Sábado", value: data.scheduleSat },
        { label: "Domingo", value: data.scheduleSun },
      ],
    },
    {
      step: 4,
      title: "Primer paciente",
      items: [
        { label: "Mascota", value: data.patientName },
        { label: "Especie", value: data.patientSpecies },
        { label: "Raza", value: data.patientBreed },
        { label: "Tutor", value: data.patientTutor },
      ],
    },
  ];

  return (
    <div className="space-y-4">
      <p className="text-sm text-text-light">
        Revisa la configuración de tu clínica antes de finalizar. Puedes volver a cualquier paso para editar.
      </p>
      <div className="grid gap-4 sm:grid-cols-2">
        {sections.map((section) => {
          const done = completedSteps.includes(section.step);
          return (
            <div
              key={section.step}
              className={`rounded-lg border p-4 ${
                done ? "border-emerald-200 bg-emerald-50/30" : "border-orange-200 bg-orange-50/30"
              }`}
            >
              <div className="mb-2 flex items-center justify-between">
                <h3 className="text-sm font-semibold text-text">{section.title}</h3>
                {done ? (
                  <span className="flex items-center gap-1 text-xs font-medium text-emerald-600">
                    <CheckIcon className="h-3.5 w-3.5" /> Listo
                  </span>
                ) : (
                  <span className="text-xs font-medium text-orange-500">Pendiente</span>
                )}
              </div>
              <dl className="space-y-1">
                {section.items.map((item) => (
                  <div key={item.label} className="flex items-center gap-2 text-xs">
                    <dt className="text-text-light">{item.label}:</dt>
                    <dd className="font-medium text-text">{item.value || "—"}</dd>
                  </div>
                ))}
              </dl>
            </div>
          );
        })}
      </div>
    </div>
  );
}
