import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowRight } from 'lucide-react';

export const Navigation: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false); // Cierra menú al cambiar de ruta
  }, [location]);

  const navItems = [
    { path: '/', label: 'Inicio' },
    { path: '/services', label: 'Servicios' },
    { path: '/process', label: 'Proceso' },
    { path: '/portfolio', label: 'Portafolio' },
    { path: '/contact', label: 'Contacto' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${isScrolled
      ? 'glass border-b border-green-500/20 shadow-lg shadow-green-500/10'
      : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center space-x-3 cursor-pointer group">
            <div className="relative w-12 h-12 group-hover:scale-110 transition-transform duration-300">
              <img src="/logo-personalizado.png" alt="SoftDev Nexus Logo" className="w-full h-full object-contain" />
              <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-blue-500 rounded-full opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300" />
            </div>
            <div className="text-white">
              <div className="text-xl font-bold gradient-text-green neon-glow">SoftDev</div>
              <div className="text-sm text-cyan-300 -mt-1">Nexus</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map(item => (
              <Link key={item.path} to={item.path}
                className={`relative text-sm font-medium transition-all duration-300 hover:text-green-400 group ${location.pathname === item.path ? 'text-green-400 neon-glow' : 'text-gray-300'}`}>
                {item.label}
                <span className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-green-500 to-cyan-500 transition-all duration-300 ${location.pathname === item.path ? 'w-full' : 'w-0 group-hover:w-full'}`} />
              </Link>
            ))}
            <Link to="/contact"
              className="bg-gradient-to-r from-green-500 to-cyan-500 text-white px-6 py-3 rounded-full text-sm font-medium hover:from-green-600 hover:to-cyan-600 transition-all duration-300 transform hover:scale-105 btn-glow flex items-center space-x-2">
              <span>Comenzar Proyecto</span>
              <ArrowRight className="w-4 h-4 animate-arrow" />
            </Link>
          </div>

          {/* Mobile Menu */}
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden p-2 text-gray-300 hover:text-white">
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden absolute top-20 left-0 right-0 glass border-b border-green-500/20 shadow-lg">
            <div className="px-4 py-6 space-y-4">
              {navItems.map(item => (
                <Link key={item.path} to={item.path}
                  className={`block w-full text-left px-4 py-3 text-sm font-medium rounded-lg transition-all duration-300 ${location.pathname === item.path
                    ? 'text-green-400 bg-green-500/10 neon-glow'
                    : 'text-gray-300 hover:text-green-400 hover:bg-gray-800/50'}`}>
                  {item.label}
                </Link>
              ))}
              <Link to="/contact"
                className="block w-full bg-gradient-to-r from-green-500 to-cyan-500 text-white px-4 py-3 rounded-lg text-sm font-medium hover:from-green-600 hover:to-cyan-600 transition-all duration-300 mt-4 btn-glow">
                Comenzar Proyecto
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
