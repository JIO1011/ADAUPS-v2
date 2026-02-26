import { Link, Outlet, useLocation } from 'react-router-dom';
import { Menu, X, ChevronRight, ChevronDown } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const navLinks = [
  { name: 'Inicio', path: '/' },
  { 
    name: 'Sobre ADAUPS', 
    path: '/sobre-nosotros',
    dropdown: [
      { name: 'Quiénes Somos', path: '/sobre-nosotros' },
      { name: 'Transparencia', path: '/transparencia' }
    ]
  },
  { name: 'Servicios', path: '/servicios' },
  { name: 'Beneficios y Convenios', path: '/beneficios' },
  { name: 'Contacto', path: '/contacto' },
];

export default function Layout() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const location = useLocation();
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setOpenDropdown(null);
  }, [location.pathname]);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setOpenDropdown(null);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-surface-50 bg-texture">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-surface-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link to="/" className="flex-shrink-0 flex items-center gap-3">
              <img 
                src="https://www.adaups.org/wp-content/uploads/2024/05/Logo-ADAUPS.png" 
                alt="ADAUPS Logo" 
                className="h-10 w-auto object-contain"
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-6" ref={dropdownRef}>
              {navLinks.map((link) => (
                <div key={link.name} className="relative">
                  {link.dropdown ? (
                    <button
                      onClick={() => setOpenDropdown(openDropdown === link.name ? null : link.name)}
                      className={cn(
                        "flex items-center gap-1 text-sm font-medium transition-colors hover:text-brand-600",
                        (location.pathname === link.path || link.dropdown.some(d => location.pathname === d.path)) ? "text-brand-600" : "text-ink-700"
                      )}
                    >
                      {link.name}
                      <ChevronDown className="h-4 w-4" />
                    </button>
                  ) : (
                    <Link
                      to={link.path}
                      className={cn(
                        "text-sm font-medium transition-colors hover:text-brand-600",
                        location.pathname === link.path ? "text-brand-600" : "text-ink-700"
                      )}
                    >
                      {link.name}
                    </Link>
                  )}
                  
                  {/* Dropdown Menu */}
                  {link.dropdown && openDropdown === link.name && (
                    <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-surface-200 py-2 z-50">
                      {link.dropdown.map((dropItem) => (
                        <Link
                          key={dropItem.name}
                          to={dropItem.path}
                          className={cn(
                            "block px-4 py-2 text-sm hover:bg-surface-50 hover:text-brand-600 transition-colors",
                            location.pathname === dropItem.path ? "text-brand-600 bg-brand-50" : "text-ink-700"
                          )}
                        >
                          {dropItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <div className="flex items-center lg:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-ink-700 hover:text-brand-600 p-2"
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-white border-b border-surface-200">
            <div className="px-4 pt-2 pb-4 space-y-1">
              {navLinks.map((link) => (
                <div key={link.name}>
                  {link.dropdown ? (
                    <div className="space-y-1">
                      <div className="px-3 py-2 text-base font-medium text-ink-900">
                        {link.name}
                      </div>
                      <div className="pl-6 space-y-1">
                        {link.dropdown.map((dropItem) => (
                          <Link
                            key={dropItem.name}
                            to={dropItem.path}
                            className={cn(
                              "block px-3 py-2 rounded-md text-base font-medium",
                              location.pathname === dropItem.path 
                                ? "bg-brand-50 text-brand-700" 
                                : "text-ink-700 hover:bg-surface-100 hover:text-ink-900"
                            )}
                          >
                            {dropItem.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <Link
                      to={link.path}
                      className={cn(
                        "block px-3 py-2 rounded-md text-base font-medium",
                        location.pathname === link.path 
                          ? "bg-brand-50 text-brand-700" 
                          : "text-ink-700 hover:bg-surface-100 hover:text-ink-900"
                      )}
                    >
                      {link.name}
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-surface-200 py-12 mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-1">
              <img 
                src="https://www.adaups.org/wp-content/uploads/2024/05/Logo-ADAUPS.png" 
                alt="ADAUPS Logo" 
                className="h-12 w-auto object-contain mb-4 grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all"
              />
              <p className="text-sm text-ink-500 mt-4 leading-relaxed">
                Asociación de Docentes y Administrativos de la Universidad Politécnica Salesiana.
              </p>
            </div>
            
            <div>
              <h3 className="text-sm font-semibold text-ink-900 uppercase tracking-wider mb-4">Navegación</h3>
              <ul className="space-y-3">
                {navLinks.slice(0, 3).map((link) => (
                  <li key={link.name}>
                    <Link to={link.path} className="text-sm text-ink-500 hover:text-brand-600 transition-colors flex items-center gap-1">
                      <ChevronRight className="h-3 w-3" />
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-ink-900 uppercase tracking-wider mb-4">Más Información</h3>
              <ul className="space-y-3">
                {navLinks.slice(3).map((link) => (
                  <li key={link.name}>
                    <Link to={link.path} className="text-sm text-ink-500 hover:text-brand-600 transition-colors flex items-center gap-1">
                      <ChevronRight className="h-3 w-3" />
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-ink-900 uppercase tracking-wider mb-4">Contacto</h3>
              <ul className="space-y-3 text-sm text-ink-500">
                <li>Campus UPS</li>
                <li>Lunes a Viernes</li>
                <li>08:00 - 17:00</li>
                <li className="pt-2">
                  <Link to="/contacto" className="text-brand-600 font-medium hover:underline">
                    Escríbenos
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-surface-200 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-ink-500">
              © {new Date().getFullYear()} ADAUPS. Todos los derechos reservados.
            </p>
            <div className="flex gap-4 text-sm text-ink-500">
              <Link to="/transparencia" className="hover:text-brand-600">Políticas de Privacidad</Link>
              <Link to="/transparencia" className="hover:text-brand-600">Términos de Uso</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
