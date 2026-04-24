"use client";

import { useState } from "react";
import Link from "next/link";

const mockPets = [
  {
    id: "PAC-001",
    name: "Luna",
    species: "Canino",
    breed: "Labrador Retriever",
    sex: "Hembra",
    age: "4 años",
    weight: "28.5 kg",
    color: "Dorado",
    microchip: "985112345678901",
    tutor: "Andrés Gómez",
    tutorPhone: "+57 310 555 1234",
    allergies: ["Pollo (alimentaria)", "Amoxicilina"],
    vaccines: ["Rabia", "Séxtuple", "Bordetella", "Leptospira"],
    lastVisit: "22 Abr 2026",
    status: "Activo",
    emoji: "🐕",
  },
  {
    id: "PAC-002",
    name: "Milo",
    species: "Felino",
    breed: "Siamés",
    sex: "Macho",
    age: "3 años",
    weight: "4.2 kg",
    color: "Seal point",
    microchip: "985112345678902",
    tutor: "Laura Castillo",
    tutorPhone: "+57 315 444 5678",
    allergies: [],
    vaccines: ["Triple felina", "Rabia", "Leucemia felina"],
    lastVisit: "10 Abr 2026",
    status: "Activo",
    emoji: "🐈",
  },
  {
    id: "PAC-003",
    name: "Rocky",
    species: "Canino",
    breed: "Bulldog Francés",
    sex: "Macho",
    age: "2 años",
    weight: "12.8 kg",
    color: "Atigrado",
    microchip: "985112345678903",
    tutor: "María Rodríguez",
    tutorPhone: "+57 320 333 9012",
    allergies: ["Picadura de pulga"],
    vaccines: ["Rabia", "Séxtuple", "Bordetella"],
    lastVisit: "18 Abr 2026",
    status: "Activo",
    emoji: "🐕",
  },
  {
    id: "PAC-006",
    name: "Canela",
    species: "Canino",
    breed: "Beagle",
    sex: "Hembra",
    age: "1 año",
    weight: "9.4 kg",
    color: "Tricolor",
    microchip: "985112345678906",
    tutor: "Santiago Herrera",
    tutorPhone: "+57 311 222 3456",
    allergies: [],
    vaccines: ["Rabia", "Séxtuple"],
    lastVisit: "23 Abr 2026",
    status: "Activo",
    emoji: "🐕",
  },
  {
    id: "PAC-007",
    name: "Max",
    species: "Canino",
    breed: "Pastor Alemán",
    sex: "Macho",
    age: "6 años",
    weight: "35.2 kg",
    color: "Negro y fuego",
    microchip: "985112345678907",
    tutor: "Juan Pablo Ríos",
    tutorPhone: "+57 318 111 7890",
    allergies: ["Carne de res (alimentaria)"],
    vaccines: ["Rabia", "Séxtuple", "Bordetella", "Leptospira"],
    lastVisit: "22 Mar 2026",
    status: "Activo",
    emoji: "🐕",
  },
  {
    id: "PAC-008",
    name: "Bella",
    species: "Felino",
    breed: "Maine Coon",
    sex: "Hembra",
    age: "5 años",
    weight: "6.1 kg",
    color: "Tabby marrón",
    microchip: "985112345678908",
    tutor: "Valentina Díaz",
    tutorPhone: "+57 314 666 2345",
    allergies: [],
    vaccines: ["Triple felina", "Rabia"],
    lastVisit: "5 Abr 2026",
    status: "Activo",
    emoji: "🐈",
  },
  {
    id: "PAC-009",
    name: "Coco",
    species: "Canino",
    breed: "Poodle Miniatura",
    sex: "Macho",
    age: "8 años",
    weight: "5.6 kg",
    color: "Blanco",
    microchip: "985112345678909",
    tutor: "Camila Vargas",
    tutorPhone: "+57 316 777 8901",
    allergies: ["Ibuprofeno"],
    vaccines: ["Rabia", "Séxtuple", "Bordetella"],
    lastVisit: "15 Mar 2026",
    status: "Activo",
    emoji: "🐕",
  },
  {
    id: "PAC-004",
    name: "Nina",
    species: "Canino",
    breed: "Golden Retriever",
    sex: "Hembra",
    age: "10 años",
    weight: "30.1 kg",
    color: "Dorado oscuro",
    microchip: "985112345678904",
    tutor: "Felipe Ruiz",
    tutorPhone: "+57 312 888 4567",
    allergies: [],
    vaccines: ["Rabia", "Séxtuple"],
    lastVisit: "10 Nov 2025",
    status: "Inactivo",
    emoji: "🐕",
  },
];

export default function MascotasPage() {
  const [selected, setSelected] = useState<string | null>(null);
  const selectedPet = mockPets.find((p) => p.id === selected);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-text">Mascotas / Pacientes</h1>
          <p className="mt-1 text-sm text-text-light">Perfil unificado de mascotas y sus tutores — Clínica PetSalud</p>
        </div>
        <button className="inline-flex items-center gap-2 rounded-lg bg-teal px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-teal-dark">
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" /></svg>
          Registrar mascota
        </button>
      </div>

      {/* Summary */}
      <div className="grid gap-4 sm:grid-cols-4">
        <div className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
          <p className="text-sm font-medium text-text-light">Total mascotas</p>
          <p className="mt-1 text-2xl font-bold text-text">{mockPets.length}</p>
        </div>
        <div className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
          <p className="text-sm font-medium text-text-light">Caninos</p>
          <p className="mt-1 text-2xl font-bold text-teal">{mockPets.filter((p) => p.species === "Canino").length}</p>
        </div>
        <div className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
          <p className="text-sm font-medium text-text-light">Felinos</p>
          <p className="mt-1 text-2xl font-bold text-teal">{mockPets.filter((p) => p.species === "Felino").length}</p>
        </div>
        <div className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
          <p className="text-sm font-medium text-text-light">Con alergias</p>
          <p className="mt-1 text-2xl font-bold text-amber-600">{mockPets.filter((p) => p.allergies.length > 0).length}</p>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {/* Pet list */}
        <div className="lg:col-span-1">
          <div className="rounded-xl border border-gray-200 bg-white shadow-sm">
            <div className="border-b border-gray-100 px-4 py-3">
              <h2 className="text-sm font-semibold text-text">Listado de mascotas</h2>
            </div>
            <div className="divide-y divide-gray-50 max-h-[600px] overflow-y-auto">
              {mockPets.map((pet) => (
                <button
                  key={pet.id}
                  onClick={() => setSelected(pet.id)}
                  className={`flex w-full items-center gap-3 px-4 py-3 text-left transition ${
                    selected === pet.id ? "bg-teal/5 border-l-2 border-teal" : "hover:bg-gray-50/50"
                  }`}
                >
                  <span className="text-2xl">{pet.emoji}</span>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-medium text-text">{pet.name}</span>
                      <span className={`rounded-full px-1.5 py-0.5 text-[10px] font-medium ${
                        pet.status === "Activo" ? "bg-emerald-50 text-emerald-600" : "bg-gray-100 text-gray-500"
                      }`}>{pet.status}</span>
                    </div>
                    <p className="text-xs text-text-light">{pet.species} — {pet.breed}</p>
                    <p className="text-xs text-text-light">Tutor: {pet.tutor}</p>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Pet detail */}
        <div className="lg:col-span-2">
          {selectedPet ? (
            <div className="space-y-4">
              {/* Pet profile card */}
              <div className="rounded-xl border border-gray-200 bg-white shadow-sm">
                <div className="border-b border-gray-100 px-6 py-4">
                  <div className="flex items-center gap-4">
                    <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-teal/10 text-3xl">
                      {selectedPet.emoji}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <h2 className="text-xl font-bold text-text">{selectedPet.name}</h2>
                        <span className="font-mono text-xs text-text-light">{selectedPet.id}</span>
                      </div>
                      <p className="text-sm text-text-light">{selectedPet.species} — {selectedPet.breed} — {selectedPet.sex}</p>
                    </div>
                    <Link
                      href="/admin/dashboard/historia-clinica"
                      className="hidden items-center gap-2 rounded-lg border border-teal bg-teal/5 px-3 py-2 text-xs font-semibold text-teal transition hover:bg-teal/10 sm:inline-flex"
                    >
                      Ver historia clínica
                    </Link>
                  </div>
                </div>
                <div className="grid gap-6 p-6 sm:grid-cols-2">
                  <div className="space-y-3">
                    <h3 className="text-xs font-semibold uppercase tracking-wider text-text-light">Información básica</h3>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between"><span className="text-text-light">Edad</span><span className="font-medium text-text">{selectedPet.age}</span></div>
                      <div className="flex justify-between"><span className="text-text-light">Peso</span><span className="font-medium text-text">{selectedPet.weight}</span></div>
                      <div className="flex justify-between"><span className="text-text-light">Color</span><span className="font-medium text-text">{selectedPet.color}</span></div>
                      <div className="flex justify-between"><span className="text-text-light">Microchip</span><span className="font-mono text-xs font-medium text-text">{selectedPet.microchip}</span></div>
                      <div className="flex justify-between"><span className="text-text-light">Última visita</span><span className="font-medium text-text">{selectedPet.lastVisit}</span></div>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-xs font-semibold uppercase tracking-wider text-text-light">Tutor</h3>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between"><span className="text-text-light">Nombre</span><span className="font-medium text-text">{selectedPet.tutor}</span></div>
                      <div className="flex justify-between"><span className="text-text-light">Teléfono</span><span className="font-medium text-text">{selectedPet.tutorPhone}</span></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Allergies */}
              <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
                <h3 className="mb-3 text-sm font-semibold text-text">Alergias conocidas</h3>
                {selectedPet.allergies.length > 0 ? (
                  <div className="flex flex-wrap gap-2">
                    {selectedPet.allergies.map((a) => (
                      <span key={a} className="rounded-full border border-red-100 bg-red-50 px-3 py-1 text-xs font-medium text-red-600">{a}</span>
                    ))}
                  </div>
                ) : (
                  <p className="text-sm text-text-light">Sin alergias registradas</p>
                )}
              </div>

              {/* Vaccines */}
              <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
                <h3 className="mb-3 text-sm font-semibold text-text">Vacunas aplicadas</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedPet.vaccines.map((v) => (
                    <span key={v} className="rounded-full border border-emerald-100 bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-600">{v}</span>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            <div className="flex h-64 items-center justify-center rounded-xl border border-dashed border-gray-300 bg-white">
              <div className="text-center">
                <span className="text-4xl">🐾</span>
                <p className="mt-2 text-sm text-text-light">Selecciona una mascota para ver su perfil</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
