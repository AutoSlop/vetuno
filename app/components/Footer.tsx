export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white py-12">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div>
            <span className="text-xl font-bold text-teal">Vetuno</span>
            <p className="mt-1 text-sm text-text-light">
              Software para clínicas veterinarias en Colombia
            </p>
          </div>
          <div className="flex flex-col items-center gap-4 text-sm text-text-light md:items-end">
            <div className="flex flex-wrap items-center justify-center gap-6 md:justify-end">
              <a href="/producto" className="hover:text-teal transition">Producto</a>
              <a href="/precios" className="hover:text-teal transition">Precios</a>
              <a href="/contacto" className="hover:text-teal transition">Contacto</a>
            </div>
            <div className="flex flex-col items-center gap-1 md:items-end">
              <span>info@example.com</span>
              <a href="https://wa.me/573145553305" target="_blank" rel="noopener noreferrer" className="hover:text-teal transition">+57 314 555 3305</a>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-100 pt-6 text-center text-sm text-text-light">
          &copy; {new Date().getFullYear()} Vetuno. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
}
