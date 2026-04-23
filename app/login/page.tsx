"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");

    if (!email || !password) {
      setError("Por favor completa todos los campos.");
      return;
    }

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      router.push("/admin/dashboard");
    }, 800);
  }

  return (
    <div className="flex min-h-screen bg-bg">
      {/* Left: Benefits panel (hidden on mobile) */}
      <div className="hidden w-1/2 flex-col justify-between bg-teal p-12 text-white lg:flex">
        <div>
          <Link href="/" className="text-2xl font-bold">
            Vetuno
          </Link>
          <p className="mt-1 text-sm text-white/60">Portal administrativo</p>
        </div>

        <div className="space-y-8">
          <h2 className="text-3xl font-bold leading-tight">
            Gestiona tu clínica veterinaria desde un solo lugar
          </h2>
          <div className="space-y-5">
            {[
              {
                title: "Historia clínica digital",
                desc: "Consultas, vacunas, alergias y evolución de cada paciente.",
              },
              {
                title: "Agenda de citas integrada",
                desc: "Crea, reprograma y visualiza citas fácilmente.",
              },
              {
                title: "Documentos en orden",
                desc: "Fórmulas PDF, autorizaciones y consentimientos vinculados.",
              },
              {
                title: "Implementación simple",
                desc: "Te acompañamos en la configuración de tu clínica.",
              },
            ].map((item) => (
              <div key={item.title} className="flex gap-3">
                <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white/15">
                  <svg
                    className="h-3.5 w-3.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 12.75l6 6 9-13.5"
                    />
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

      {/* Right: Login form */}
      <div className="flex flex-1 items-center justify-center px-6 py-12">
        <div className="w-full max-w-md">
          {/* Logo (mobile only) */}
          <div className="mb-8 text-center lg:hidden">
            <Link href="/" className="inline-block text-3xl font-bold text-teal">
              Vetuno
            </Link>
          </div>

          <div className="mb-8 lg:mb-10">
            <h1 className="text-2xl font-bold text-text">Inicia sesión</h1>
            <p className="mt-2 text-sm text-text-light">
              Ingresa tus credenciales para acceder al portal
            </p>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label
                  htmlFor="email"
                  className="mb-1.5 block text-sm font-medium text-text"
                >
                  Correo electrónico
                </label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="admin@vetuno.co"
                  className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm text-text outline-none transition focus:border-teal focus:ring-2 focus:ring-teal/20"
                />
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="mb-1.5 block text-sm font-medium text-text"
                >
                  Contraseña
                </label>
                <input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm text-text outline-none transition focus:border-teal focus:ring-2 focus:ring-teal/20"
                />
              </div>

              {error && <p className="text-sm text-red-600">{error}</p>}

              <button
                type="submit"
                disabled={loading}
                className="w-full rounded-lg bg-teal py-2.5 text-sm font-semibold text-white transition hover:bg-teal-dark disabled:opacity-60"
              >
                {loading ? "Ingresando..." : "Ingresar"}
              </button>
            </form>

            <div className="mt-4 text-center">
              <a href="#" className="text-sm text-teal hover:underline">
                ¿Olvidaste tu contraseña?
              </a>
            </div>
          </div>

          <p className="mt-6 text-center text-xs text-text-light lg:hidden">
            &copy; {new Date().getFullYear()} Vetuno. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </div>
  );
}
