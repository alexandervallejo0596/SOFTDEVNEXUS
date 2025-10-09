import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowRight } from 'lucide-react';

export const Navigation: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const navItems = [
    { path: '/', label: 'Inicio' },
    { path: '/services', label: 'Servicios' },
    { path: '/process', label: 'Proceso' },
    { path: '/portfolio', label: 'Portafolio' },
    { path: '/contact', label: 'Contacto' },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-lg border-b border-gray-200 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center space-x-3 cursor-pointer">
            <div className="relative w-12 h-12">
              <img src="/logo-optimizado.png" alt="SoftDev Nexus Logo" className="w-full h-full object-contain" />
            </div>
            <div className="text-gray-900">
              <div className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-400">SoftDev</div>
              <div className="text-sm text-teal-500 -mt-1">Nexus</div>
            </div>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            {navItems.map(item => (
              <Link key={item.path} to={item.path}
                className={`relative text-sm font-medium ${location.pathname === item.path ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'}`}>
                {item.label}
                <span className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-blue-600 to-teal-400 transition-all duration-300 ${location.pathname === item.path ? 'w-full' : 'w-0'}`} />
              </Link>
            ))}
            <Link to="/contact"
              className="bg-gradient-to-r from-blue-600 to-teal-500 text-white px-6 py-3 rounded-full text-sm font-medium flex items-center space-x-2 hover:from-blue-700 hover:to-teal-600 transition-all duration-300 transform hover:scale-105 shadow-md">
              <span>Comenzar Proyecto</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden p-2 text-gray-800 hover:text-gray-900">
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden absolute top-20 left-0 right-0 bg-white border-b border-gray-200 shadow-lg">
            <div className="px-4 py-6 space-y-4">
              {navItems.map(item => (
                <Link key={item.path} to={item.path}
                  className={`block w-full text-left px-4 py-3 text-sm font-medium rounded-lg ${location.pathname === item.path
                    ? 'text-blue-600 bg-blue-100'
                    : 'text-gray-700'}`}>
                  {item.label}
                </Link>
              ))}
              <Link to="/contact"
                className="block w-full bg-gradient-to-r from-blue-600 to-teal-500 text-white px-4 py-3 rounded-lg text-sm font-medium mt-4 text-center">
                Comenzar Proyecto
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};