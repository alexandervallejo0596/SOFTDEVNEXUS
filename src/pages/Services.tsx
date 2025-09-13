import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Code, Shield, Smartphone, Rocket, CheckCircle, Star, Zap, Target, Clock, BarChart3, ArrowRight, Users, Award, TrendingUp, Globe } from 'lucide-react';

export const Services: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);

    // Create floating code elements
    const createFloatingCode = () => {
      const codeSnippets = [
        'const services = premium;',
        'function deliver() {}',
        '<Service quality="high" />',
        'npm install success',
        'git commit -m "excellence"',
        'export { Quality };',
        'import { Results } from "work";',
        'const satisfaction = 100;'
      ];

      const container = document.querySelector('.floating-code-container');
      if (!container) return;

      codeSnippets.forEach((code, index) => {
        setTimeout(() => {
          const element = document.createElement('div');
          element.className = 'floating-code animate-code-float';
          element.textContent = code;
          element.style.left = Math.random() * 100 + '%';
          element.style.animationDelay = Math.random() * 8 + 's';
          element.style.animationDuration = (8 + Math.random() * 4) + 's';
          container.appendChild(element);

          setTimeout(() => {
            element.remove();
          }, 12000);
        }, index * 2000);
      });
    };

    // Create particles
    const createParticles = () => {
      const container = document.querySelector('.particles-container');
      if (!container) return;

      for (let i = 0; i < 15; i++) {
        setTimeout(() => {
          const particle = document.createElement('div');
          particle.className = 'particle animate-particle';
          particle.style.left = Math.random() * 100 + '%';
          particle.style.animationDelay = Math.random() * 15 + 's';
          particle.style.animationDuration = (10 + Math.random() * 10) + 's';
          container.appendChild(particle);

          setTimeout(() => {
            particle.remove();
          }, 25000);
        }, i * 500);
      }
    };

    createFloatingCode();
    createParticles();

    const codeInterval = setInterval(createFloatingCode, 16000);
    const particleInterval = setInterval(createParticles, 10000);

    return () => {
      clearInterval(codeInterval);
      clearInterval(particleInterval);
    };
  }, []);

  const mainServices = [
    {
      icon: Code,
      title: 'Desarrollo Web Personalizado',
      description: 'Sitios web únicos diseñados específicamente para tu negocio con las últimas tecnologías y mejores prácticas de desarrollo.',
      features: [
        'Diseño 100% personalizado',
        'Código limpio y optimizado',
        'Tecnologías modernas',
        'Arquitectura escalable',
        'SEO optimizado desde el inicio',
        'Integración con APIs'
      ],
  // price removed
      duration: '4-8 semanas',
      color: 'from-green-500 to-cyan-500'
    },
    {
      icon: Shield,
      title: 'Mantenimiento y Soporte 24/7',
      description: 'Mantén tu sitio web seguro, actualizado y funcionando perfectamente con nuestro servicio de soporte integral.',
      features: [
        'Monitoreo 24/7',
        'Actualizaciones de seguridad',
        'Backups automáticos',
        'Optimización de rendimiento',
        'Soporte técnico prioritario',
        'Reportes mensuales'
      ],
  // price removed
      duration: 'Servicio continuo',
      color: 'from-cyan-500 to-blue-500'
    },
    {
      icon: Smartphone,
      title: 'Diseño Responsivo Avanzado',
      description: 'Experiencias perfectas en todos los dispositivos y pantallas, desde móviles hasta pantallas 4K.',
      features: [
        'Diseño mobile-first',
        'Optimización para tablets',
        'Experiencia desktop premium',
        'Testing en dispositivos reales',
        'Carga rápida en móviles',
        'Touch-friendly interfaces'
      ],
  // price removed
      duration: '2-3 semanas',
      color: 'from-blue-500 to-purple-500'
    },
    {
      icon: Rocket,
      title: 'Optimización de Rendimiento',
      description: 'Sitios web ultra-rápidos que mejoran tu posicionamiento SEO y la experiencia del usuario.',
      features: [
        'Optimización de imágenes',
        'Minificación de código',
        'CDN global',
        'Caché inteligente',
        'Core Web Vitals optimizados',
        'Análisis de rendimiento'
      ],
  // price removed
      duration: '1-2 semanas',
      color: 'from-purple-500 to-green-500'
    }
  ];

  const additionalServices = [
    {
      icon: Target,
      title: 'E-commerce Avanzado',
      description: 'Tiendas online completas con gestión de inventario, pagos seguros y analytics.',
  // price removed
    },
    {
      icon: BarChart3,
      title: 'Analytics & SEO',
      description: 'Configuración completa de herramientas de análisis y optimización SEO.',
  // price removed
    },
    {
      icon: Clock,
      title: 'Migración de Sitios',
      description: 'Migración segura de tu sitio actual sin pérdida de datos ni posicionamiento.',
  // price removed
    },
    {
      icon: Users,
      title: 'Consultoría Técnica',
      description: 'Asesoría especializada para optimizar tu presencia digital y estrategia web.',
  // price removed
    }
  ];

  const packages = [
    {
      name: 'Básico',
      description: 'Perfecto para pequeños negocios',
      features: [
        'Sitio web de hasta 5 páginas',
        'Diseño responsivo',
        'Formulario de contacto',
        'Optimización SEO básica',
        'Hosting por 1 año incluido',
        'Soporte por 3 meses'
      ],
      popular: false
    },
    {
      name: 'Profesional',
      description: 'Ideal para empresas en crecimiento',
      features: [
        'Sitio web de hasta 10 páginas',
        'Diseño personalizado avanzado',
        'Blog integrado',
        'SEO avanzado',
        'Analytics configurado',
        'Hosting por 1 año incluido',
        'Soporte por 6 meses',
        'Capacitación incluida'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      description: 'Para empresas que buscan lo mejor',
      features: [
        'Sitio web ilimitado',
        'Desarrollo 100% personalizado',
        'E-commerce básico',
        'Integraciones avanzadas',
        'SEO premium',
        'Analytics avanzado',
        'Hosting premium por 1 año',
        'Soporte por 12 meses',
        'Mantenimiento incluido'
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: 'María González',
      company: 'Boutique Luna',
      text: 'El servicio de desarrollo web superó todas nuestras expectativas. Nuestro sitio no solo se ve increíble, sino que ha aumentado nuestras ventas un 300%.',
      rating: 5,
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150',
      result: '300% aumento en ventas'
    },
    {
      name: 'Carlos Rodríguez',
      company: 'Restaurante Sabor',
      text: 'El equipo entendió perfectamente nuestra visión. El sitio web refleja la esencia de nuestro restaurante y ha mejorado significativamente nuestras reservas.',
      rating: 5,
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150',
      result: '150% más reservas'
    },
    {
      name: 'Ana Martínez',
      company: 'Consultora Legal',
      text: 'Profesionalismo y calidad excepcional. El portal ha optimizado nuestros procesos y mejorado la comunicación con nuestros clientes.',
      rating: 5,
      image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150',
      result: '200% más clientes'
    }
  ];

  const stats = [
    { number: '150+', label: 'Proyectos Completados', icon: Award },
    { number: '98%', label: 'Satisfacción del Cliente', icon: Star },
    { number: '5+', label: 'Años de Experiencia', icon: TrendingUp },
    { number: '24/7', label: 'Soporte Técnico', icon: Globe }
  ];

  return (
    <div className="min-h-screen bg-dark-gradient text-white overflow-hidden relative">
      {/* Floating Code Container */}
      <div className="floating-code-container fixed inset-0 pointer-events-none z-10"></div>
      
      {/* Particles Container */}
      <div className="particles-container fixed inset-0 pointer-events-none z-10"></div>

      {/* Animated Background */}
      <div className="fixed inset-0 animated-dark-bg">
        <div className="absolute inset-0 cyber-grid opacity-30"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-green-500/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-20">
          <div className={`space-y-8 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
            <div className="inline-flex items-center glass border border-green-500/30 rounded-full px-6 py-3 text-sm font-medium text-green-300">
              <Zap className="w-4 h-4 mr-2" />
              Servicios de Desarrollo Web Premium
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              <span className="text-white">Servicios que</span>
              <br />
              <span className="gradient-text-green animate-text-glow">transforman negocios</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Ofrecemos soluciones integrales de desarrollo web que van desde sitios corporativos hasta 
              e-commerce avanzado, siempre enfocados en generar resultados medibles para tu negocio.
            </p>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="relative py-20 code-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
          <div className="text-center mb-20 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Nuestros servicios <span className="gradient-text-green">principales</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Servicios especializados diseñados para impulsar tu presencia digital
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {mainServices.map((service, index) => (
              <div 
                key={index} 
                className="glass p-8 rounded-3xl hover-lift card-hover animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start space-x-6">
                  <div className={`w-20 h-20 bg-gradient-to-r ${service.color} rounded-3xl flex items-center justify-center flex-shrink-0 animate-pulse-glow`}>
                    <service.icon className="w-10 h-10 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                    <p className="text-gray-300 mb-6 leading-relaxed">{service.description}</p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                          <span className="text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-4 sm:space-y-0">
                      <div>
                        {/* Precio eliminado */}
                        <div className="text-gray-400 text-sm">{service.duration}</div>
                      </div>
                      <Link to="/contact" className="bg-gradient-to-r from-green-500 to-cyan-500 text-white px-6 py-3 rounded-xl font-medium hover:from-green-600 hover:to-cyan-600 transition-all duration-300 transform hover:scale-105 btn-glow block text-center">
                        Solicitar cotización
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="relative py-20 matrix-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Servicios <span className="gradient-text-green">adicionales</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Complementa tu proyecto con estos servicios especializados
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {additionalServices.map((service, index) => (
              <div 
                key={index} 
                className="glass p-6 rounded-2xl text-center hover-lift card-hover animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-6 animate-pulse-glow">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{service.title}</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">{service.description}</p>
                {/* Precio eliminado */}
                <Link to="/contact" className="w-full bg-gradient-to-r from-green-500 to-cyan-500 text-white py-3 rounded-xl font-medium hover:from-green-600 hover:to-cyan-600 transition-all duration-300 transform hover:scale-105 btn-glow block text-center">
                  Más información
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section className="relative py-20 code-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Paquetes <span className="gradient-text-green">todo incluido</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Elige el paquete que mejor se adapte a las necesidades de tu negocio
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <div 
                key={index} 
                className={`relative glass p-8 rounded-3xl hover-lift card-hover animate-fade-in-up ${
                  pkg.popular ? 'border-2 border-green-500 scale-105' : ''
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-green-500 to-cyan-500 text-white px-6 py-2 rounded-full text-sm font-bold neon-glow">
                    Más Popular
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{pkg.name}</h3>
                  {/* <div className="text-4xl font-bold text-green-400 neon-glow mb-2">{pkg.price}</div> */}
                  <p className="text-gray-300">{pkg.description}</p>
                </div>
                
                <ul className="space-y-4 mb-8">
                  {pkg.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Link to="/contact" className={`w-full py-4 rounded-xl font-bold transition-all duration-300 transform hover:scale-105 ${
                  pkg.popular 
                    ? 'bg-gradient-to-r from-green-500 to-cyan-500 text-white btn-glow' 
                    : 'border-2 border-green-500 text-green-400 hover:bg-green-500/10'
                } block text-center`}>
                  Elegir {pkg.name}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="relative py-20 matrix-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Lo que dicen nuestros <span className="gradient-text-green">clientes</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Testimonios reales de empresas que han transformado su presencia digital
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index} 
                className="glass p-8 rounded-2xl hover-lift card-hover animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 text-lg italic leading-relaxed">"{testimonial.text}"</p>
                <div className="flex items-center space-x-4">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-bold text-white">{testimonial.name}</p>
                    <p className="text-gray-400 text-sm">{testimonial.company}</p>
                    <p className="text-green-400 text-sm font-medium neon-glow">{testimonial.result}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative py-20 bg-gradient-to-r from-green-900/50 to-cyan-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className="group animate-bounce-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 animate-pulse-glow">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-4xl font-bold text-white mb-2 neon-glow">{stat.number}</div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-32 animated-dark-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-20">
          <div className="animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              ¿Listo para comenzar tu <span className="gradient-text-green animate-text-glow">proyecto?</span>
            </h2>
            <p className="text-xl text-gray-200 mb-12 max-w-3xl mx-auto leading-relaxed">
              Contáctanos hoy mismo y recibe una cotización personalizada para tu proyecto. 
              Nuestro equipo está listo para hacer realidad tu visión digital.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link to="/contact" className="bg-gradient-to-r from-green-500 to-cyan-500 text-white px-10 py-5 rounded-full text-lg font-bold hover:from-green-600 hover:to-cyan-600 transition-all duration-300 transform hover:scale-105 btn-glow flex items-center justify-center space-x-2">
                <span>Solicitar Cotización</span>
                <ArrowRight className="w-5 h-5 animate-arrow" />
              </Link>
              <Link to="/portfolio" className="border-2 border-green-500 text-green-400 px-10 py-5 rounded-full text-lg font-bold hover:bg-green-500/10 transition-all duration-300 flex items-center justify-center">
                Ver Portfolio
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
