"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { href: "/", label: "Inicio" },
    { href: "/producto", label: "Producto" },
    { href: "/modulos", label: "Módulos" },
    { href: "/precios", label: "Precios" },
    { href: "/contacto", label: "Contacto" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-2xl font-bold text-teal">
          Vetuno
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition ${
                pathname === link.href ? "text-teal" : "text-text-light hover:text-teal"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/login"
            className="rounded-full border border-teal px-5 py-2.5 text-sm font-semibold text-teal transition hover:bg-teal hover:text-white"
          >
            Inicia sesión
          </Link>
          <a
            href="https://wa.me/573145553305"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-teal px-6 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-teal-dark active:shadow-none"
          >
            Solicitar demo
          </a>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 text-text"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menú"
        >
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <nav className="border-t border-border bg-white px-6 py-4 md:hidden">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={`text-sm font-medium ${
                  pathname === link.href ? "text-teal" : "text-text-light hover:text-teal"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/login"
              onClick={() => setMenuOpen(false)}
              className="rounded-full border border-teal px-5 py-2.5 text-center text-sm font-semibold text-teal transition hover:bg-teal hover:text-white"
            >
              Inicia sesión
            </Link>
            <a
              href="https://wa.me/573145553305"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMenuOpen(false)}
              className="rounded-full bg-teal px-6 py-2.5 text-center text-sm font-semibold text-white shadow-sm transition hover:bg-teal-dark active:shadow-none"
            >
              Solicitar demo
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
