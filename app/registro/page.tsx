"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

interface FormErrors {
  clinicName?: string;
  adminName?: string;
  email?: string;
  whatsapp?: string;
  password?: string;
  confirmPassword?: string;
  plan?: string;
  cardNumber?: string;
  cardExpiry?: string;
  cardCvc?: string;
  cardName?: string;
}

const plans = [
  {
    id: "base",
    name: "Plan Base",
    price: "39",
    desc: "Para clínicas con 1 veterinario",
    features: ["1 usuario veterinario", "Historia clínica digital", "Agenda de citas", "Perfil de mascota y tutor", "Soporte por correo"],
    highlighted: false,
  },
  {
    id: "equipo",
    name: "Plan Equipo",
    price: "69",
    desc: "Para clínicas con 2-3 veterinarios",
    features: ["Hasta 3 usuarios", "Todo del Plan Base", "Fórmulas veterinarias en PDF", "Autorizaciones y consentimientos", "Soporte prioritario por WhatsApp"],
    highlighted: true,
  },
  {
    id: "clinica",
    name: "Plan Clínica",
    price: "99",
    desc: "Para clínicas con 4-5 veterinarios",
    features: ["Hasta 5 usuarios", "Todo del Plan Equipo", "Onboarding personalizado", "Configuración asistida", "Soporte prioritario dedicado"],
    highlighted: false,
  },
];

function formatDate(date: Date): string {
  const day = date.getDate().toString().padStart(2, "0");
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const year = date.getFullYear();
  return `${day}/${month}/${year}`;
}

export default function RegistroPage() {
  const router = useRouter();
  const [step, setStep] = useState<1 | 2 | 3>(1);

  // Step 1: Account info
  const [clinicName, setClinicName] = useState("");
  const [adminName, setAdminName] = useState("");
  const [email, setEmail] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // Step 2: Plan selection
  const [selectedPlan, setSelectedPlan] = useState("equipo");

  // Step 3: Payment method
  const [cardNumber, setCardNumber] = useState("");
  const [cardExpiry, setCardExpiry] = useState("");
  const [cardCvc, setCardCvc] = useState("");
  const [cardName, setCardName] = useState("");

  const [errors, setErrors] = useState<FormErrors>({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const trialEnd = new Date();
  trialEnd.setDate(trialEnd.getDate() + 15);
  const trialEndFormatted = formatDate(trialEnd);

  const selectedPlanData = plans.find((p) => p.id === selectedPlan)!;

  function validateStep1(): FormErrors {
    const e: FormErrors = {};
    if (!clinicName.trim()) e.clinicName = "El nombre de la clínica es obligatorio.";
    if (!adminName.trim()) e.adminName = "El nombre del administrador es obligatorio.";
    if (!email.trim()) {
      e.email = "El correo electrónico es obligatorio.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      e.email = "Ingresa un correo electrónico válido.";
    }
    if (!whatsapp.trim()) e.whatsapp = "El número de WhatsApp es obligatorio.";
    if (!password) {
      e.password = "La contraseña es obligatoria.";
    } else if (password.length < 8) {
      e.password = "La contraseña debe tener al menos 8 caracteres.";
    }
    if (!confirmPassword) {
      e.confirmPassword = "Confirma tu contraseña.";
    } else if (password !== confirmPassword) {
      e.confirmPassword = "Las contraseñas no coinciden.";
    }
    return e;
  }

  function validateStep3(): FormErrors {
    const e: FormErrors = {};
    const cleanCard = cardNumber.replace(/\s/g, "");
    if (!cleanCard) {
      e.cardNumber = "El número de tarjeta es obligatorio.";
    } else if (!/^\d{13,19}$/.test(cleanCard)) {
      e.cardNumber = "Ingresa un número de tarjeta válido.";
    }
    if (!cardExpiry.trim()) {
      e.cardExpiry = "La fecha de vencimiento es obligatoria.";
    } else if (!/^\d{2}\/\d{2}$/.test(cardExpiry.trim())) {
      e.cardExpiry = "Formato MM/AA.";
    }
    if (!cardCvc.trim()) {
      e.cardCvc = "El CVC es obligatorio.";
    } else if (!/^\d{3,4}$/.test(cardCvc.trim())) {
      e.cardCvc = "CVC inválido.";
    }
    if (!cardName.trim()) {
      e.cardName = "El nombre del titular es obligatorio.";
    }
    return e;
  }

  function handleStep1(e: React.FormEvent) {
    e.preventDefault();
    const validationErrors = validateStep1();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) return;
    setStep(2);
  }

  function handleStep2() {
    setErrors({});
    setStep(3);
  }

  function handleStep3(e: React.FormEvent) {
    e.preventDefault();
    const validationErrors = validateStep3();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) return;

    setLoading(true);

    setTimeout(() => {
      const now = new Date();
      const trialEndDate = new Date();
      trialEndDate.setDate(trialEndDate.getDate() + 15);

      const clinicData = {
        name: clinicName.trim(),
        adminName: adminName.trim(),
        email: email.trim(),
        whatsapp: whatsapp.trim(),
        primaryColor: "#0F4C5C",
        secondaryColor: "#5F7D8A",
        phone: whatsapp.trim(),
        logo: "",
        address: "",
        city: "",
      };

      localStorage.setItem("vetuno_clinic_branding", JSON.stringify(clinicData));
      localStorage.removeItem("vetuno_demo");
      localStorage.setItem("vetuno_session", JSON.stringify({
        clinicName: clinicData.name,
        adminName: clinicData.adminName,
        email: clinicData.email,
        createdAt: now.toISOString(),
      }));

      // Save subscription data
      const lastFour = cardNumber.replace(/\s/g, "").slice(-4);
      localStorage.setItem("vetuno_subscription", JSON.stringify({
        planId: selectedPlan,
        planName: selectedPlanData.name,
        planPrice: selectedPlanData.price,
        status: "trial",
        trialStart: now.toISOString(),
        trialEnd: trialEndDate.toISOString(),
        nextBillingDate: trialEndDate.toISOString(),
        paymentMethod: {
          type: "card",
          lastFour,
          brand: "Visa",
          expiry: cardExpiry.trim(),
          name: cardName.trim(),
        },
        createdAt: now.toISOString(),
      }));

      setSuccess(true);

      setTimeout(() => {
        router.push("/admin/dashboard");
      }, 2000);
    }, 1200);
  }

  function formatCardNumber(value: string) {
    const digits = value.replace(/\D/g, "").slice(0, 16);
    return digits.replace(/(\d{4})(?=\d)/g, "$1 ");
  }

  function formatExpiry(value: string) {
    const digits = value.replace(/\D/g, "").slice(0, 4);
    if (digits.length > 2) return digits.slice(0, 2) + "/" + digits.slice(2);
    return digits;
  }

  // Success state
  if (success) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-bg">
        <div className="w-full max-w-md text-center px-6">
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100">
            <svg className="h-8 w-8 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
            </svg>
          </div>
          <h1 className="text-2xl font-bold text-text">¡Cuenta creada exitosamente!</h1>
          <p className="mt-3 text-text-light">
            Bienvenido, <strong>{adminName}</strong>. Estamos preparando el portal de <strong>{clinicName}</strong>...
          </p>
          <div className="mt-4 rounded-xl border border-emerald-200 bg-emerald-50 p-4">
            <p className="text-sm font-medium text-emerald-700">Hoy no se cobra</p>
            <p className="mt-1 text-sm text-emerald-600">
              Tu prueba gratis de 15 días termina el <strong>{trialEndFormatted}</strong>.
              <br />
              Primer cobro: <strong>USD ${selectedPlanData.price}</strong> el {trialEndFormatted}.
            </p>
          </div>
          <div className="mt-6 mx-auto h-8 w-8 animate-spin rounded-full border-4 border-gray-200 border-t-teal" />
        </div>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen bg-bg">
      {/* Left panel — benefits (desktop only) */}
      <div className="hidden w-1/2 flex-col justify-between bg-teal p-12 text-white lg:flex">
        <div>
          <Link href="/" className="text-2xl font-bold">
            Vetuno
          </Link>
          <p className="mt-1 text-sm text-white/60">Plataforma para clínicas veterinarias</p>
        </div>

        <div className="space-y-8">
          <h2 className="text-3xl font-bold leading-tight">
            Empieza a organizar tu clínica veterinaria hoy
          </h2>
          <p className="text-white/70">
            Crea tu cuenta en menos de un minuto y accede a todas las herramientas que necesitas.
          </p>
          <div className="space-y-5">
            {[
              {
                title: "Configura tu clínica rápidamente",
                desc: "Nombre, equipo y horarios listos en minutos.",
              },
              {
                title: "15 días de prueba gratis",
                desc: "Hoy no se cobra. Tu prueba empieza al crear la cuenta.",
              },
              {
                title: "Soporte en español",
                desc: "Te acompañamos en cada paso de la implementación.",
              },
            ].map((item) => (
              <div key={item.title} className="flex gap-3">
                <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white/15">
                  <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-semibold">{item.title}</p>
                  <p className="text-sm text-white/70">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Trial info box */}
          <div className="rounded-xl border border-white/20 bg-white/10 p-4 backdrop-blur-sm">
            <div className="flex items-center gap-2 text-sm font-semibold">
              <svg className="h-5 w-5 text-emerald-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
              </svg>
              Pago seguro
            </div>
            <p className="mt-1 text-xs text-white/60">
              Tu método de pago se guarda de forma segura. No se realiza ningún cobro hasta que termine tu periodo de prueba de 15 días.
            </p>
          </div>
        </div>

        <p className="text-xs text-white/40">
          &copy; {new Date().getFullYear()} Vetuno. Todos los derechos reservados.
        </p>
      </div>

      {/* Right panel — form */}
      <div className="flex flex-1 items-center justify-center px-6 py-12">
        <div className="w-full max-w-md">
          {/* Logo (mobile only) */}
          <div className="mb-8 text-center lg:hidden">
            <Link href="/" className="inline-block text-3xl font-bold text-teal">
              Vetuno
            </Link>
          </div>

          {/* Step indicator */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-4">
              {[
                { num: 1, label: "Tu cuenta" },
                { num: 2, label: "Elige plan" },
                { num: 3, label: "Método de pago" },
              ].map((s, i) => (
                <div key={s.num} className="flex items-center">
                  <div className="flex flex-col items-center">
                    <div
                      className={`flex h-8 w-8 items-center justify-center rounded-full text-sm font-bold transition ${
                        step >= s.num
                          ? "bg-teal text-white"
                          : "border-2 border-gray-300 text-gray-400"
                      }`}
                    >
                      {step > s.num ? (
                        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                        </svg>
                      ) : (
                        s.num
                      )}
                    </div>
                    <span className={`mt-1 text-xs ${step >= s.num ? "text-teal font-medium" : "text-gray-400"}`}>
                      {s.label}
                    </span>
                  </div>
                  {i < 2 && (
                    <div className={`mx-2 mb-5 h-0.5 w-8 sm:w-12 ${step > s.num ? "bg-teal" : "bg-gray-200"}`} />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Step 1: Account info */}
          {step === 1 && (
            <>
              <div className="mb-6">
                <h1 className="text-2xl font-bold text-text">Crea tu cuenta</h1>
                <p className="mt-2 text-sm text-text-light">
                  Registra tu clínica veterinaria y empieza a operar en minutos.
                </p>
              </div>

              <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
                <form onSubmit={handleStep1} className="space-y-4">
                  <div>
                    <label htmlFor="clinicName" className="mb-1.5 block text-sm font-medium text-text">
                      Nombre de la clínica
                    </label>
                    <input
                      id="clinicName"
                      type="text"
                      value={clinicName}
                      onChange={(e) => setClinicName(e.target.value)}
                      placeholder="Ej: Clínica Veterinaria PetSalud"
                      className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm text-text outline-none transition focus:border-teal focus:ring-2 focus:ring-teal/20"
                    />
                    {errors.clinicName && <p className="mt-1 text-xs text-red-600">{errors.clinicName}</p>}
                  </div>

                  <div>
                    <label htmlFor="adminName" className="mb-1.5 block text-sm font-medium text-text">
                      Nombre del administrador principal
                    </label>
                    <input
                      id="adminName"
                      type="text"
                      value={adminName}
                      onChange={(e) => setAdminName(e.target.value)}
                      placeholder="Ej: Juan Perez"
                      className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm text-text outline-none transition focus:border-teal focus:ring-2 focus:ring-teal/20"
                    />
                    {errors.adminName && <p className="mt-1 text-xs text-red-600">{errors.adminName}</p>}
                  </div>

                  <div>
                    <label htmlFor="regEmail" className="mb-1.5 block text-sm font-medium text-text">
                      Correo electrónico
                    </label>
                    <input
                      id="regEmail"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="admin@tuclinica.co"
                      className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm text-text outline-none transition focus:border-teal focus:ring-2 focus:ring-teal/20"
                    />
                    {errors.email && <p className="mt-1 text-xs text-red-600">{errors.email}</p>}
                  </div>

                  <div>
                    <label htmlFor="whatsapp" className="mb-1.5 block text-sm font-medium text-text">
                      WhatsApp
                    </label>
                    <input
                      id="whatsapp"
                      type="tel"
                      value={whatsapp}
                      onChange={(e) => setWhatsapp(e.target.value)}
                      placeholder="Ej: 3001234567"
                      className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm text-text outline-none transition focus:border-teal focus:ring-2 focus:ring-teal/20"
                    />
                    {errors.whatsapp && <p className="mt-1 text-xs text-red-600">{errors.whatsapp}</p>}
                  </div>

                  <div>
                    <label htmlFor="regPassword" className="mb-1.5 block text-sm font-medium text-text">
                      Contraseña
                    </label>
                    <input
                      id="regPassword"
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Mínimo 8 caracteres"
                      className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm text-text outline-none transition focus:border-teal focus:ring-2 focus:ring-teal/20"
                    />
                    {errors.password && <p className="mt-1 text-xs text-red-600">{errors.password}</p>}
                  </div>

                  <div>
                    <label htmlFor="confirmPassword" className="mb-1.5 block text-sm font-medium text-text">
                      Confirmar contraseña
                    </label>
                    <input
                      id="confirmPassword"
                      type="password"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      placeholder="Repite tu contraseña"
                      className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm text-text outline-none transition focus:border-teal focus:ring-2 focus:ring-teal/20"
                    />
                    {errors.confirmPassword && <p className="mt-1 text-xs text-red-600">{errors.confirmPassword}</p>}
                  </div>

                  <button
                    type="submit"
                    className="w-full rounded-lg bg-teal py-3 text-sm font-semibold text-white transition hover:bg-teal-dark"
                  >
                    Continuar
                  </button>
                </form>

                <div className="mt-5 text-center">
                  <p className="text-sm text-text-light">
                    ¿Ya tienes cuenta?{" "}
                    <Link href="/login" className="font-medium text-teal hover:underline">
                      Inicia sesión
                    </Link>
                  </p>
                </div>
              </div>
            </>
          )}

          {/* Step 2: Plan selection */}
          {step === 2 && (
            <>
              <div className="mb-6">
                <h1 className="text-2xl font-bold text-text">Elige tu plan</h1>
                <p className="mt-2 text-sm text-text-light">
                  Todos los planes incluyen 15 días de prueba gratis. Hoy no se cobra.
                </p>
              </div>

              <div className="space-y-3">
                {plans.map((plan) => (
                  <button
                    key={plan.id}
                    onClick={() => setSelectedPlan(plan.id)}
                    className={`relative w-full rounded-xl border-2 p-5 text-left transition ${
                      selectedPlan === plan.id
                        ? "border-teal bg-teal/5 shadow-md"
                        : "border-gray-200 bg-white hover:border-gray-300 hover:shadow-sm"
                    }`}
                  >
                    {plan.highlighted && (
                      <span className="absolute -top-2.5 right-4 rounded-full bg-teal px-3 py-0.5 text-[10px] font-bold text-white uppercase">
                        Popular
                      </span>
                    )}
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-base font-bold text-text">{plan.name}</h3>
                        <p className="mt-0.5 text-sm text-text-light">{plan.desc}</p>
                      </div>
                      <div className="text-right">
                        <span className="text-2xl font-extrabold text-text">${plan.price}</span>
                        <span className="text-sm text-text-light"> USD/mes</span>
                      </div>
                    </div>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {plan.features.slice(0, 3).map((f) => (
                        <span key={f} className="inline-flex items-center gap-1 rounded-full bg-gray-100 px-2.5 py-1 text-xs text-text-light">
                          <svg className="h-3 w-3 text-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                          </svg>
                          {f}
                        </span>
                      ))}
                    </div>
                    {/* Radio indicator */}
                    <div className="absolute right-5 top-1/2 -translate-y-1/2">
                      <div className={`h-5 w-5 rounded-full border-2 flex items-center justify-center ${
                        selectedPlan === plan.id ? "border-teal" : "border-gray-300"
                      }`}>
                        {selectedPlan === plan.id && (
                          <div className="h-3 w-3 rounded-full bg-teal" />
                        )}
                      </div>
                    </div>
                  </button>
                ))}
              </div>

              {/* Trial info */}
              <div className="mt-4 rounded-xl border border-emerald-200 bg-emerald-50 p-4">
                <div className="flex items-start gap-2">
                  <svg className="mt-0.5 h-5 w-5 shrink-0 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                  </svg>
                  <div>
                    <p className="text-sm font-semibold text-emerald-700">Hoy no se cobra</p>
                    <p className="mt-0.5 text-xs text-emerald-600">
                      Tu prueba gratis termina el <strong>{trialEndFormatted}</strong>.
                      Primer cobro de <strong>USD ${selectedPlanData.price}</strong> el {trialEndFormatted}.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-6 flex gap-3">
                <button
                  onClick={() => setStep(1)}
                  className="flex-1 rounded-lg border-2 border-gray-200 py-3 text-sm font-semibold text-text-light transition hover:bg-gray-50"
                >
                  Atrás
                </button>
                <button
                  onClick={handleStep2}
                  className="flex-1 rounded-lg bg-teal py-3 text-sm font-semibold text-white transition hover:bg-teal-dark"
                >
                  Continuar
                </button>
              </div>
            </>
          )}

          {/* Step 3: Payment method */}
          {step === 3 && (
            <>
              <div className="mb-6">
                <h1 className="text-2xl font-bold text-text">Método de pago</h1>
                <p className="mt-2 text-sm text-text-light">
                  Guardamos tu método de pago de forma segura. No se realiza ningún cobro hoy.
                </p>
              </div>

              {/* Selected plan summary */}
              <div className="mb-4 rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-semibold text-text">{selectedPlanData.name}</p>
                    <p className="text-xs text-text-light">{selectedPlanData.desc}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-lg font-bold text-text">USD ${selectedPlanData.price}/mes</p>
                    <p className="text-xs text-emerald-600 font-medium">15 días gratis</p>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
                <div className="mb-5 flex items-center gap-2">
                  <svg className="h-5 w-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
                  </svg>
                  <span className="text-sm font-medium text-text-light">Pago seguro con encriptación SSL</span>
                </div>

                <form onSubmit={handleStep3} className="space-y-4">
                  <div>
                    <label htmlFor="cardName" className="mb-1.5 block text-sm font-medium text-text">
                      Nombre del titular
                    </label>
                    <input
                      id="cardName"
                      type="text"
                      value={cardName}
                      onChange={(e) => setCardName(e.target.value)}
                      placeholder="Como aparece en la tarjeta"
                      className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm text-text outline-none transition focus:border-teal focus:ring-2 focus:ring-teal/20"
                    />
                    {errors.cardName && <p className="mt-1 text-xs text-red-600">{errors.cardName}</p>}
                  </div>

                  <div>
                    <label htmlFor="cardNumber" className="mb-1.5 block text-sm font-medium text-text">
                      Número de tarjeta
                    </label>
                    <div className="relative">
                      <input
                        id="cardNumber"
                        type="text"
                        value={cardNumber}
                        onChange={(e) => setCardNumber(formatCardNumber(e.target.value))}
                        placeholder="1234 5678 9012 3456"
                        maxLength={19}
                        className="w-full rounded-lg border border-gray-300 px-4 py-2.5 pr-12 text-sm text-text outline-none transition focus:border-teal focus:ring-2 focus:ring-teal/20"
                      />
                      <div className="absolute right-3 top-1/2 -translate-y-1/2 flex gap-1">
                        <svg className="h-6 w-4 text-gray-400" viewBox="0 0 24 16" fill="currentColor">
                          <rect width="24" height="16" rx="2" opacity="0.15"/>
                          <text x="12" y="11" textAnchor="middle" fontSize="7" fill="currentColor">VISA</text>
                        </svg>
                      </div>
                    </div>
                    {errors.cardNumber && <p className="mt-1 text-xs text-red-600">{errors.cardNumber}</p>}
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="cardExpiry" className="mb-1.5 block text-sm font-medium text-text">
                        Vencimiento
                      </label>
                      <input
                        id="cardExpiry"
                        type="text"
                        value={cardExpiry}
                        onChange={(e) => setCardExpiry(formatExpiry(e.target.value))}
                        placeholder="MM/AA"
                        maxLength={5}
                        className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm text-text outline-none transition focus:border-teal focus:ring-2 focus:ring-teal/20"
                      />
                      {errors.cardExpiry && <p className="mt-1 text-xs text-red-600">{errors.cardExpiry}</p>}
                    </div>
                    <div>
                      <label htmlFor="cardCvc" className="mb-1.5 block text-sm font-medium text-text">
                        CVC
                      </label>
                      <input
                        id="cardCvc"
                        type="text"
                        value={cardCvc}
                        onChange={(e) => setCardCvc(e.target.value.replace(/\D/g, "").slice(0, 4))}
                        placeholder="123"
                        maxLength={4}
                        className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm text-text outline-none transition focus:border-teal focus:ring-2 focus:ring-teal/20"
                      />
                      {errors.cardCvc && <p className="mt-1 text-xs text-red-600">{errors.cardCvc}</p>}
                    </div>
                  </div>

                  {/* Trial reminder */}
                  <div className="rounded-lg border border-emerald-200 bg-emerald-50 p-3">
                    <p className="text-sm text-emerald-700">
                      <strong>Hoy no se cobra.</strong> Tu prueba gratis termina el <strong>{trialEndFormatted}</strong>.
                    </p>
                    <p className="mt-0.5 text-xs text-emerald-600">
                      Primer cobro: USD ${selectedPlanData.price} el {trialEndFormatted}. Puedes cancelar antes sin costo.
                    </p>
                  </div>

                  <div className="flex gap-3 pt-2">
                    <button
                      type="button"
                      onClick={() => setStep(2)}
                      className="flex-1 rounded-lg border-2 border-gray-200 py-3 text-sm font-semibold text-text-light transition hover:bg-gray-50"
                    >
                      Atrás
                    </button>
                    <button
                      type="submit"
                      disabled={loading}
                      className="flex-1 rounded-lg bg-teal py-3 text-sm font-semibold text-white transition hover:bg-teal-dark disabled:opacity-60"
                    >
                      {loading ? "Creando tu cuenta..." : "Crear mi cuenta"}
                    </button>
                  </div>
                </form>
              </div>

              <p className="mt-4 text-center text-xs text-text-light">
                Al crear tu cuenta aceptas los términos de servicio de Vetuno.
              </p>
            </>
          )}

          <p className="mt-4 text-center text-xs text-text-light lg:hidden">
            &copy; {new Date().getFullYear()} Vetuno. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </div>
  );
}
