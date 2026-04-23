"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminLogin() {
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
    // Demo: simulate login delay
    setTimeout(() => {
      setLoading(false);
      router.push("/admin/dashboard");
    }, 800);
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-bg px-4">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="mb-8 text-center">
          <a href="/" className="inline-block text-3xl font-bold text-teal">
            Vetuno
          </a>
          <h1 className="mt-4 text-xl font-semibold text-text">
            Portal administrativo
          </h1>
          <p className="mt-1 text-sm text-text-light">
            Ingresa tus credenciales para acceder
          </p>
        </div>

        {/* Card */}
        <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-text">
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
              <label htmlFor="password" className="mb-1.5 block text-sm font-medium text-text">
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

            {error && (
              <p className="text-sm text-red-600">{error}</p>
            )}

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

        <p className="mt-6 text-center text-xs text-text-light">
          &copy; {new Date().getFullYear()} Vetuno. Todos los derechos reservados.
        </p>
      </div>
    </div>
  );
}
