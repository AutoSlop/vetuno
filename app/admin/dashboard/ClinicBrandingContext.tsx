"use client";

import { createContext, useContext, useState, useEffect, type ReactNode } from "react";

export interface ClinicBranding {
  name: string;
  logo: string;
  primaryColor: string;
  secondaryColor: string;
  phone: string;
  email: string;
  address: string;
  city: string;
}

const defaultBranding: ClinicBranding = {
  name: "Clínica PetSalud",
  logo: "",
  primaryColor: "#0F4C5C",
  secondaryColor: "#6FA3B8",
  phone: "601 234 5678",
  email: "info@petsalud.co",
  address: "Cra 15 #85-20, Consultorio 302",
  city: "Bogotá",
};

const STORAGE_KEY = "vetuno_clinic_branding";

interface ClinicBrandingContextValue {
  branding: ClinicBranding;
  setBranding: (b: ClinicBranding) => void;
  initials: string;
}

const ClinicBrandingContext = createContext<ClinicBrandingContextValue>({
  branding: defaultBranding,
  setBranding: () => {},
  initials: "CP",
});

export function useClinicBranding() {
  return useContext(ClinicBrandingContext);
}

function getInitials(name: string): string {
  return name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0].toUpperCase())
    .join("");
}

export function ClinicBrandingProvider({ children }: { children: ReactNode }) {
  const [branding, setBrandingState] = useState<ClinicBranding>(defaultBranding);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        setBrandingState({ ...defaultBranding, ...JSON.parse(stored) });
      }
    } catch {}
    setLoaded(true);
  }, []);

  function setBranding(b: ClinicBranding) {
    setBrandingState(b);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(b));
    } catch {}
  }

  if (!loaded) return null;

  return (
    <ClinicBrandingContext.Provider
      value={{
        branding,
        setBranding,
        initials: getInitials(branding.name),
      }}
    >
      {children}
    </ClinicBrandingContext.Provider>
  );
}

export { defaultBranding };
