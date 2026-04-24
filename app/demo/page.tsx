"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function DemoEntryPage() {
  const router = useRouter();

  useEffect(() => {
    localStorage.setItem("vetuno_demo", "true");
    router.replace("/admin/dashboard");
  }, [router]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50">
      <div className="text-center">
        <div className="mx-auto mb-4 h-10 w-10 animate-spin rounded-full border-4 border-gray-200 border-t-teal" />
        <p className="text-sm text-text-light">Cargando demo...</p>
      </div>
    </div>
  );
}
