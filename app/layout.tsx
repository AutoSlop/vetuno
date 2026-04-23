import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import LayoutShell from "./components/LayoutShell";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Vetuno — Software para clínicas veterinarias en Colombia",
  description:
    "Historia clínica, agenda, fórmulas, autorizaciones y perfil de mascota en una plataforma simple para clínicas veterinarias en Colombia.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${geistSans.variable} antialiased`}>
      <body className="min-h-full flex flex-col font-sans">
        <LayoutShell>{children}</LayoutShell>
      </body>
    </html>
  );
}
