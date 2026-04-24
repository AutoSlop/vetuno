"use client";

import { useState, useRef } from "react";
import { useClinicBranding, type ClinicBranding } from "../ClinicBrandingContext";

export default function IdentidadPage() {
  const { branding, setBranding, initials } = useClinicBranding();
  const [form, setForm] = useState<ClinicBranding>(branding);
  const [saved, setSaved] = useState(false);
  const fileRef = useRef<HTMLInputElement>(null);

  function handleChange(field: keyof ClinicBranding, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }));
    setSaved(false);
  }

  function handleLogoUpload(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    if (file.size > 512_000) {
      alert("El logo no debe superar 500 KB");
      return;
    }
    const reader = new FileReader();
    reader.onload = () => {
      handleChange("logo", reader.result as string);
    };
    reader.readAsDataURL(file);
  }

  function handleSave() {
    setBranding(form);
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  }

  function handleReset() {
    const reset: ClinicBranding = {
      name: "Clínica PetSalud",
      logo: "",
      primaryColor: "#0F4C5C",
      secondaryColor: "#6FA3B8",
      phone: "601 234 5678",
      email: "info@petsalud.co",
      address: "Cra 15 #85-20, Consultorio 302",
      city: "Bogotá",
    };
    setForm(reset);
    setBranding(reset);
    setSaved(false);
  }

  const previewInitials = form.name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0]?.toUpperCase() || "")
    .join("");

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-text">Identidad de la clínica</h1>
        <p className="mt-1 text-sm text-text-light">Personaliza la imagen de tu clínica en el portal, documentos y comunicaciones</p>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {/* Form */}
        <div className="space-y-6 lg:col-span-2">
          {/* Basic info */}
          <div className="rounded-xl border border-gray-200 bg-white shadow-sm">
            <div className="border-b border-gray-100 px-6 py-4">
              <h2 className="text-base font-semibold text-text">Información básica</h2>
              <p className="mt-0.5 text-sm text-text-light">Nombre y datos de contacto de la clínica</p>
            </div>
            <div className="space-y-4 p-6">
              <div>
                <label className="mb-1.5 block text-sm font-medium text-text">Nombre comercial</label>
                <input
                  type="text"
                  value={form.name}
                  onChange={(e) => handleChange("name", e.target.value)}
                  className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm text-text outline-none transition focus:border-teal focus:ring-2 focus:ring-teal/20"
                  placeholder="Ej: Clínica Veterinaria MiMascota"
                />
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-text">Teléfono</label>
                  <input
                    type="tel"
                    value={form.phone}
                    onChange={(e) => handleChange("phone", e.target.value)}
                    className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm text-text outline-none transition focus:border-teal focus:ring-2 focus:ring-teal/20"
                    placeholder="Ej: 601 234 5678"
                  />
                </div>
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-text">Email</label>
                  <input
                    type="email"
                    value={form.email}
                    onChange={(e) => handleChange("email", e.target.value)}
                    className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm text-text outline-none transition focus:border-teal focus:ring-2 focus:ring-teal/20"
                    placeholder="Ej: info@miclinica.co"
                  />
                </div>
              </div>
              <div>
                <label className="mb-1.5 block text-sm font-medium text-text">Dirección</label>
                <input
                  type="text"
                  value={form.address}
                  onChange={(e) => handleChange("address", e.target.value)}
                  className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm text-text outline-none transition focus:border-teal focus:ring-2 focus:ring-teal/20"
                  placeholder="Ej: Cra 15 #85-20"
                />
              </div>
              <div>
                <label className="mb-1.5 block text-sm font-medium text-text">Ciudad</label>
                <input
                  type="text"
                  value={form.city}
                  onChange={(e) => handleChange("city", e.target.value)}
                  className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm text-text outline-none transition focus:border-teal focus:ring-2 focus:ring-teal/20"
                  placeholder="Ej: Bogotá"
                />
              </div>
            </div>
          </div>

          {/* Branding */}
          <div className="rounded-xl border border-gray-200 bg-white shadow-sm">
            <div className="border-b border-gray-100 px-6 py-4">
              <h2 className="text-base font-semibold text-text">Marca visual</h2>
              <p className="mt-0.5 text-sm text-text-light">Logo y colores que se aplicarán en el portal y documentos</p>
            </div>
            <div className="space-y-4 p-6">
              {/* Logo upload */}
              <div>
                <label className="mb-1.5 block text-sm font-medium text-text">Logo</label>
                <div className="flex items-center gap-4">
                  <div className="flex h-16 w-16 shrink-0 items-center justify-center overflow-hidden rounded-lg border-2 border-dashed border-gray-300 bg-gray-50">
                    {form.logo ? (
                      <img src={form.logo} alt="Logo" className="h-full w-full object-contain" />
                    ) : (
                      <span
                        className="text-lg font-bold text-white rounded-md flex items-center justify-center h-12 w-12"
                        style={{ backgroundColor: form.primaryColor }}
                      >
                        {previewInitials}
                      </span>
                    )}
                  </div>
                  <div>
                    <input
                      ref={fileRef}
                      type="file"
                      accept="image/png,image/jpeg,image/svg+xml,image/webp"
                      onChange={handleLogoUpload}
                      className="hidden"
                    />
                    <button
                      onClick={() => fileRef.current?.click()}
                      className="rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-text transition hover:bg-gray-50"
                    >
                      Subir logo
                    </button>
                    {form.logo && (
                      <button
                        onClick={() => handleChange("logo", "")}
                        className="ml-2 text-sm text-red-500 hover:text-red-600"
                      >
                        Eliminar
                      </button>
                    )}
                    <p className="mt-1 text-xs text-text-light">PNG, JPG, SVG o WebP. Máx 500 KB.</p>
                  </div>
                </div>
              </div>

              {/* Colors */}
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-text">Color principal</label>
                  <div className="flex items-center gap-3">
                    <input
                      type="color"
                      value={form.primaryColor}
                      onChange={(e) => handleChange("primaryColor", e.target.value)}
                      className="h-10 w-12 cursor-pointer rounded-lg border border-gray-300"
                    />
                    <input
                      type="text"
                      value={form.primaryColor}
                      onChange={(e) => handleChange("primaryColor", e.target.value)}
                      className="w-28 rounded-lg border border-gray-300 px-3 py-2 text-sm font-mono text-text outline-none focus:border-teal focus:ring-2 focus:ring-teal/20"
                    />
                  </div>
                  <p className="mt-1 text-xs text-text-light">Se usa en títulos, botones y acentos</p>
                </div>
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-text">Color secundario</label>
                  <div className="flex items-center gap-3">
                    <input
                      type="color"
                      value={form.secondaryColor}
                      onChange={(e) => handleChange("secondaryColor", e.target.value)}
                      className="h-10 w-12 cursor-pointer rounded-lg border border-gray-300"
                    />
                    <input
                      type="text"
                      value={form.secondaryColor}
                      onChange={(e) => handleChange("secondaryColor", e.target.value)}
                      className="w-28 rounded-lg border border-gray-300 px-3 py-2 text-sm font-mono text-text outline-none focus:border-teal focus:ring-2 focus:ring-teal/20"
                    />
                  </div>
                  <p className="mt-1 text-xs text-text-light">Se usa en badges, enlaces y detalles</p>
                </div>
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-3">
            <button
              onClick={handleSave}
              className="rounded-lg bg-teal px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-teal-dark"
            >
              Guardar cambios
            </button>
            <button
              onClick={handleReset}
              className="rounded-lg border border-gray-300 bg-white px-6 py-2.5 text-sm font-medium text-text-light transition hover:bg-gray-50"
            >
              Restablecer valores demo
            </button>
            {saved && (
              <span className="flex items-center gap-1.5 text-sm font-medium text-emerald-600">
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>
                Guardado
              </span>
            )}
          </div>
        </div>

        {/* Live Preview */}
        <div className="space-y-6">
          {/* Portal preview */}
          <div className="rounded-xl border border-gray-200 bg-white shadow-sm">
            <div className="border-b border-gray-100 px-6 py-4">
              <h2 className="text-base font-semibold text-text">Vista previa — Portal</h2>
            </div>
            <div className="p-6">
              {/* Mini sidebar preview */}
              <div className="overflow-hidden rounded-lg border border-gray-200 bg-gray-50">
                {/* Header */}
                <div className="flex items-center gap-2 border-b border-gray-200 bg-white px-3 py-2">
                  {form.logo ? (
                    <img src={form.logo} alt="" className="h-6 w-6 rounded object-contain" />
                  ) : (
                    <span
                      className="flex h-6 w-6 items-center justify-center rounded text-[10px] font-bold text-white"
                      style={{ backgroundColor: form.primaryColor }}
                    >
                      {previewInitials}
                    </span>
                  )}
                  <span className="text-xs font-bold truncate" style={{ color: form.primaryColor }}>
                    {form.name || "Nombre de clínica"}
                  </span>
                </div>
                {/* Nav items */}
                <div className="space-y-0.5 px-2 py-2">
                  <div
                    className="flex items-center gap-2 rounded px-2 py-1.5 text-[11px] font-medium text-white"
                    style={{ backgroundColor: form.primaryColor }}
                  >
                    <div className="h-3 w-3 rounded-sm bg-white/30" />
                    Inicio
                  </div>
                  {["Pacientes", "Fórmulas", "Configuración"].map((label) => (
                    <div key={label} className="flex items-center gap-2 rounded px-2 py-1.5 text-[11px] text-gray-500">
                      <div className="h-3 w-3 rounded-sm bg-gray-200" />
                      {label}
                    </div>
                  ))}
                </div>
                {/* Badge */}
                <div className="border-t border-gray-200 px-3 py-2">
                  <div className="flex items-center gap-1.5">
                    <div className="h-4 w-4 rounded-full bg-gray-200" />
                    <span className="text-[10px] text-gray-500 truncate">{form.name}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Document preview */}
          <div className="rounded-xl border border-gray-200 bg-white shadow-sm">
            <div className="border-b border-gray-100 px-6 py-4">
              <h2 className="text-base font-semibold text-text">Vista previa — Documento</h2>
            </div>
            <div className="p-6">
              <div className="overflow-hidden rounded-lg border border-gray-200 bg-white p-4">
                {/* Doc header */}
                <div className="mb-3 border-b pb-3 text-center" style={{ borderColor: form.primaryColor + "33" }}>
                  <div className="flex items-center justify-center gap-2">
                    {form.logo ? (
                      <img src={form.logo} alt="" className="h-5 w-5 rounded object-contain" />
                    ) : (
                      <span
                        className="flex h-5 w-5 items-center justify-center rounded text-[8px] font-bold text-white"
                        style={{ backgroundColor: form.primaryColor }}
                      >
                        {previewInitials}
                      </span>
                    )}
                    <span className="text-sm font-bold" style={{ color: form.primaryColor }}>
                      {form.name || "Nombre de clínica"}
                    </span>
                  </div>
                  <p className="mt-0.5 text-[10px] text-gray-500">
                    Fórmula veterinaria — {form.city || "Ciudad"}
                  </p>
                  {(form.phone || form.email) && (
                    <p className="text-[10px] text-gray-400">
                      {[form.phone, form.email].filter(Boolean).join(" · ")}
                    </p>
                  )}
                </div>
                {/* Doc body placeholder */}
                <div className="space-y-1.5">
                  <div className="h-2 w-3/4 rounded bg-gray-100" />
                  <div className="h-2 w-1/2 rounded bg-gray-100" />
                  <div className="mt-2 h-2 w-full rounded bg-gray-100" />
                  <div className="h-2 w-5/6 rounded bg-gray-100" />
                </div>
                {/* Separator */}
                <div className="mt-3 h-px" style={{ backgroundColor: form.primaryColor + "33" }} />
                <p className="mt-1.5 text-center text-[9px] text-gray-400">
                  {form.address && `${form.address} · `}{form.city || "Ciudad"}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
