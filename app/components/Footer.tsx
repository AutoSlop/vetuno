export default function Footer() {
  return (
    <footer className="border-t border-border bg-footer-bg py-12">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div>
            <span className="text-xl font-bold text-white">Vetuno</span>
            <p className="mt-1 text-sm text-footer-text">
              Software para clínicas veterinarias en Colombia
            </p>
          </div>
          <div className="flex flex-col items-center gap-4 text-sm text-footer-text md:items-end">
            <div className="flex flex-wrap items-center justify-center gap-6 md:justify-end">
              <a href="/" className="hover:text-white transition">Inicio</a>
              <a href="/producto" className="hover:text-white transition">Producto</a>
              <a href="/modulos" className="hover:text-white transition">Funcionalidades</a>
              <a href="/precios" className="hover:text-white transition">Precios</a>
              <a href="/contacto" className="hover:text-white transition">Contacto</a>
              <a href="/admin" className="hover:text-white transition">Admin</a>
            </div>
            <div className="flex flex-col items-center gap-1 md:items-end">
              <span>info@example.com</span>
              <a href="https://wa.me/573145553305" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">+57 314 555 3305</a>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-white/10 pt-6 text-center text-sm text-footer-text/60">
          &copy; {new Date().getFullYear()} Vetuno. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
}
