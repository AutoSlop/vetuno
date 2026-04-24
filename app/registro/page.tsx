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
}

export default function RegistroPage() {
  const router = useRouter();
  const [clinicName, setClinicName] = useState("");
  const [adminName, setAdminName] = useState("");
  const [email, setEmail] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState<FormErrors>({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  function validate(): FormErrors {
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

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) return;

    setLoading(true);

    // Simulate account creation — store clinic data in localStorage
    setTimeout(() => {
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

      // Save branding with clinic name
      localStorage.setItem(
        "vetuno_clinic_branding",
        JSON.stringify(clinicData)
      );

      // Mark as registered session (not demo)
      localStorage.removeItem("vetuno_demo");
      localStorage.setItem("vetuno_session", JSON.stringify({
        clinicName: clinicData.name,
        adminName: clinicData.adminName,
        email: clinicData.email,
        createdAt: new Date().toISOString(),
      }));

      setSuccess(true);

      // Redirect to dashboard after brief success message
      setTimeout(() => {
        router.push("/admin/dashboard");
      }, 1500);
    }, 1000);
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
                title: "Sin instalación ni tarjeta de crédito",
                desc: "100% en la nube, empieza gratis por 14 días.",
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

          <div className="mb-8 lg:mb-10">
            <h1 className="text-2xl font-bold text-text">Crea tu cuenta</h1>
            <p className="mt-2 text-sm text-text-light">
              Registra tu clínica veterinaria y empieza a operar en minutos.
            </p>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Clinic name */}
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

              {/* Admin name */}
              <div>
                <label htmlFor="adminName" className="mb-1.5 block text-sm font-medium text-text">
                  Nombre del administrador principal
                </label>
                <input
                  id="adminName"
                  type="text"
                  value={adminName}
                  onChange={(e) => setAdminName(e.target.value)}
                  placeholder="Ej: Juan Pérez"
                  className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm text-text outline-none transition focus:border-teal focus:ring-2 focus:ring-teal/20"
                />
                {errors.adminName && <p className="mt-1 text-xs text-red-600">{errors.adminName}</p>}
              </div>

              {/* Email */}
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

              {/* WhatsApp */}
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

              {/* Password */}
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

              {/* Confirm password */}
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

              <p className="text-xs text-text-light">
                Te contactamos para agendar una demo personalizada. Ideal para clínicas veterinarias pequeñas.
              </p>

              <button
                type="submit"
                disabled={loading}
                className="w-full rounded-lg bg-teal py-3 text-sm font-semibold text-white transition hover:bg-teal-dark disabled:opacity-60"
              >
                {loading ? "Creando tu cuenta..." : "Crear mi cuenta"}
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

          <p className="mt-4 text-center text-xs text-text-light">
            14 días de prueba gratis &middot; Sin tarjeta de crédito
          </p>

          <p className="mt-4 text-center text-xs text-text-light lg:hidden">
            &copy; {new Date().getFullYear()} Vetuno. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </div>
  );
}
