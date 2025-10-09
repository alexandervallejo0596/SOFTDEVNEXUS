import React from 'react';
import { Mail, Phone, MapPin, Globe, Linkedin, Twitter, Instagram, Facebook } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

type Page = 'home' | 'services' | 'process' | 'portfolio' | 'contact';

const FooterLogo: React.FC<{ className?: string }> = ({ className = "w-12 h-12" }) => (
  <img src="/logo-optimizado.png" alt="SoftDev Nexus Logo" className={className + " object-contain"} />
);

export const Footer: React.FC = () => {
  const navigate = useNavigate();
  const currentYear = new Date().getFullYear();

  const navigationLinks = [
    { id: 'home' as Page, label: 'Inicio' },
    { id: 'services' as Page, label: 'Servicios' },
    { id: 'process' as Page, label: 'Proceso' },
    { id: 'portfolio' as Page, label: 'Portafolio' },
    { id: 'contact' as Page, label: 'Contacto' }
  ];

  const services = [
    'Desarrollo Web Personalizado',
    'Sitios con WordPress',
    'Mantenimiento y Soporte',
    'Optimización de Velocidad',
    'E-commerce Avanzado',
    'Consultoría Técnica'
  ];

  const socialLinks = [
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Facebook, href: '#', label: 'Facebook' }
  ];

  const handleNavigation = (page: Page) => {
    navigate(`/${page === 'home' ? '' : page}`);
  };

  return (
    <footer className="relative bg-gray-50 text-gray-800">
      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <FooterLogo className="w-12 h-12" />
                <div>
                  <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-400">SoftDev</div>
                  <div className="text-lg text-teal-500 -mt-1">Nexus</div>
                </div>
              </div>
              <p className="text-gray-600 mb-6 max-w-md leading-relaxed">
                Creamos experiencias digitales extraordinarias que impulsan el crecimiento de tu negocio.
              </p>

              <div className="space-y-4">
                <div className="flex items-center space-x-3 text-gray-600 hover:text-blue-600 transition-colors">
                  <Mail className="w-5 h-5 text-blue-600" />
                  <span>contacto@softdevnexus.com</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-600 hover:text-blue-600 transition-colors">
                  <Phone className="w-5 h-5 text-blue-600" />
                  <span>+57 (312) 4549040</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-600 hover:text-blue-600 transition-colors">
                  <MapPin className="w-5 h-5 text-blue-600" />
                  <span>Bogotá, Colombia</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-600 hover:text-blue-600 transition-colors">
                  <Globe className="w-5 h-5 text-blue-600" />
                  <span>Servicio nacional e internacional</span>
                </div>
              </div>

              <div className="flex space-x-4 mt-8">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="w-10 h-10 bg-gray-100 border border-gray-200 rounded-lg flex items-center justify-center text-gray-600 hover:text-white hover:bg-blue-600 transition-all duration-300 hover:scale-110"
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-6">Navegación</h3>
              <ul className="space-y-3">
                {navigationLinks.map((link) => (
                  <li key={link.id}>
                    <button
                      onClick={() => handleNavigation(link.id)}
                      className="text-gray-600 hover:text-blue-600 transition-colors duration-300 hover:translate-x-1 transform"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-6">Servicios</h3>
              <ul className="space-y-3">
                {services.map((service, index) => (
                  <li key={index}>
                    <button
                      onClick={() => handleNavigation('services')}
                      className="text-gray-600 hover:text-blue-600 transition-colors duration-300 text-left hover:translate-x-1 transform"
                    >
                      {service}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="text-gray-500 text-center md:text-left">
                <p>&copy; {currentYear} SoftDev Nexus. Todos los derechos reservados.</p>
                <p className="text-sm mt-1">Desarrollado con ❤️ en Colombia</p>
              </div>
              <div className="flex space-x-6 text-sm">
                <a href="#" className="text-gray-500 hover:text-blue-600 transition-colors">
                  Política de Privacidad
                </a>
                <a href="#" className="text-gray-500 hover:text-blue-600 transition-colors">
                  Términos de Servicio
                </a>
                <a href="#" className="text-gray-500 hover:text-blue-600 transition-colors">
                  Cookies
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};