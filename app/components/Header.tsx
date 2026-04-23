"use client";

import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-gray-100 bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#" className="text-2xl font-bold text-teal">
          Vetuno
        </a>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 md:flex">
          <a href="#modulos" className="text-sm font-medium text-text-light hover:text-teal transition">
            Módulos
          </a>
          <a href="#como-funciona" className="text-sm font-medium text-text-light hover:text-teal transition">
            Cómo funciona
          </a>
          <a href="#precios" className="text-sm font-medium text-text-light hover:text-teal transition">
            Precios
          </a>
          <a href="#faq" className="text-sm font-medium text-text-light hover:text-teal transition">
            FAQ
          </a>
          <a
            href="https://wa.me/573145553305"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-teal px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-teal-dark"
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
        <nav className="border-t border-gray-100 bg-white px-6 py-4 md:hidden">
          <div className="flex flex-col gap-4">
            <a href="#modulos" onClick={() => setMenuOpen(false)} className="text-sm font-medium text-text-light hover:text-teal">
              Módulos
            </a>
            <a href="#como-funciona" onClick={() => setMenuOpen(false)} className="text-sm font-medium text-text-light hover:text-teal">
              Cómo funciona
            </a>
            <a href="#precios" onClick={() => setMenuOpen(false)} className="text-sm font-medium text-text-light hover:text-teal">
              Precios
            </a>
            <a href="#faq" onClick={() => setMenuOpen(false)} className="text-sm font-medium text-text-light hover:text-teal">
              FAQ
            </a>
            <a
              href="https://wa.me/573145553305"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMenuOpen(false)}
              className="rounded-full bg-teal px-6 py-2.5 text-center text-sm font-semibold text-white transition hover:bg-teal-dark"
            >
              Solicitar demo
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
