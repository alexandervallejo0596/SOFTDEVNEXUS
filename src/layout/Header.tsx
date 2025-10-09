
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const linkClasses = "text-brand-text-light hover:text-brand-text-accent transition-colors duration-300";

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-brand-bg-dark/80 backdrop-blur-lg border-b border-brand-primary/10">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link to="/">
            <img src="/logo-optimizado.png" alt="Logo" className="h-10" />
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className={linkClasses}>Inicio</Link>
            <Link to="/process" className={linkClasses}>Proceso</Link>
            <Link to="/services" className={linkClasses}>Servicios</Link>
            <Link to="/portfolio" className={linkClasses}>Portfolio</Link>
            <Link to="/contact" className={linkClasses}>Contacto</Link>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="ml-4 text-white">
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-brand-bg-dark/95 backdrop-blur-lg">
          <div className="flex flex-col items-center space-y-4 py-4">
            <Link to="/" className={linkClasses} onClick={() => setIsMenuOpen(false)}>Inicio</Link>
            <Link to="/process" className={linkClasses} onClick={() => setIsMenuOpen(false)}>Proceso</Link>
            <Link to="/services" className={linkClasses} onClick={() => setIsMenuOpen(false)}>Servicios</Link>
            <Link to="/portfolio" className={linkClasses} onClick={() => setIsMenuOpen(false)}>Portfolio</Link>
            <Link to="/contact" className={linkClasses} onClick={() => setIsMenuOpen(false)}>Contacto</Link>
          </div>
        </div>
      )}
    </header>
  );
};
