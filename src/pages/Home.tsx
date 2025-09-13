import React, { useEffect, useState } from 'react';
import { ArrowRight, Code, Shield, Smartphone, CheckCircle, Star, Rocket, Users, Award, TrendingUp, Globe, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Home: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    
    // Create floating code elements
    const createFloatingCode = () => {
      const codeSnippets = [
        'const success = true;',
        'function innovate() {}',
        '<div className="modern">',
        'npm install excellence',
        'git commit -m "perfect"',
        'export default Quality;',
        'import { Success } from "results";',
        'const client = satisfied;'
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

      for (let i = 0; i < 20; i++) {
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

  const services = [
    {
      icon: Code,
      title: 'Desarrollo Web Personalizado',
      description: 'Sitios web únicos diseñados específicamente para tu negocio con las últimas tecnologías',
      color: 'from-green-500 to-cyan-500'
    },
    {
      icon: Shield,
      title: 'Mantenimiento y Soporte 24/7',
      description: 'Mantén tu sitio web seguro, actualizado y funcionando perfectamente',
      color: 'from-cyan-500 to-blue-500'
    },
    {
      icon: Smartphone,
      title: 'Diseño Responsivo Avanzado',
      description: 'Experiencias perfectas en todos los dispositivos y pantallas',
      color: 'from-blue-500 to-purple-500'
    },
    {
      icon: Rocket,
      title: 'Optimización de Rendimiento',
      description: 'Sitios web ultra-rápidos que mejoran tu posicionamiento SEO',
      color: 'from-purple-500 to-green-500'
    }
  ];

  const processSteps = [
    {
      number: '01',
      title: 'Análisis & Estrategia',
      description: 'Definimos objetivos, analizamos competencia y creamos la estrategia digital perfecta',
      icon: Users
    },
    {
      number: '02',
      title: 'Diseño UX/UI',
      description: 'Creamos experiencias visuales impactantes y funcionales que convierten',
      icon: Zap
    },
    {
      number: '03',
      title: 'Desarrollo & Testing',
      description: 'Construimos con código limpio y realizamos pruebas exhaustivas',
      icon: Code
    },
    {
      number: '04',
      title: 'Lanzamiento & Optimización',
      description: 'Desplegamos tu sitio y optimizamos continuamente el rendimiento',
      icon: Rocket
    }
  ];

  const testimonials = [
    {
      name: 'María González',
      company: 'Boutique Luna',
      text: 'SoftDev Nexus no solo creó nuestro sitio web, transformó completamente nuestro negocio. La atención al detalle y el enfoque en resultados es excepcional.',
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
    { number: '150+', label: 'Proyectos Exitosos', icon: Award },
    { number: '98%', label: 'Satisfacción Cliente', icon: Star },
    { number: '5+', label: 'Años Experiencia', icon: TrendingUp },
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
      <section className="relative min-h-screen flex items-center justify-center pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className={`space-y-8 ${isVisible ? 'animate-slide-in-left' : 'opacity-0'}`}> 
              <div className="space-y-6">
                <div className="inline-flex items-center glass border border-green-500/30 rounded-full px-6 py-3 text-sm font-medium text-green-300">
                  <Zap className="w-4 h-4 mr-2" />
                  Desarrollo Web de Nueva Generación
                </div>
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                  <span className="text-white">Creación de páginas web y</span>
                  <br />
                  <span className="gradient-text-green animate-text-glow">soluciones tecnológicas para empresas</span>
                </h1>
                <p className="text-xl text-gray-300 max-w-2xl leading-relaxed">
                  Desarrollamos experiencias digitales extraordinarias que convierten visitantes en clientes. 
                  Desde el concepto hasta el lanzamiento, creamos sitios web que generan resultados reales.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                {/* Botón para redirigir a la sección de Contacto */}
                <Link to="/contact" className="bg-gradient-to-r from-green-500 to-cyan-500 text-white px-10 py-5 rounded-full text-lg font-bold hover:from-green-600 hover:to-cyan-600 transition-all duration-300 transform hover:scale-105 btn-glow flex items-center justify-center space-x-2">
                  <span>Comenzar Proyecto</span>
                  <ArrowRight className="w-5 h-5 animate-arrow" />
                </Link>

                {/* Botón para redirigir a la sección de Portfolio */}
                <Link to="/portfolio" className="border-2 border-green-500 text-green-400 px-8 py-4 rounded-full text-lg font-semibold hover:bg-green-500/10 transition-all duration-300 hover:shadow-lg hover:shadow-green-500/25">
                  Ver Portfolio
                </Link>
              </div>

              <div className="flex items-center space-x-8 pt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-white neon-glow">150+</div>
                  <div className="text-sm text-gray-400">Proyectos</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white neon-glow">98%</div>
                  <div className="text-sm text-gray-400">Satisfacción</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white neon-glow">24/7</div>
                  <div className="text-sm text-gray-400">Soporte</div>
                </div>
              </div>
            </div>

            <div className={`relative ${isVisible ? 'animate-slide-in-right' : 'opacity-0'}`}> 
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-cyan-500 rounded-3xl blur-2xl opacity-20 animate-pulse-glow"></div>
                <video
                  src="/assets/videos/video5.mp4"
                  style={{ width: '100%', height: '400px', maxWidth: '700px', objectFit: 'cover', borderRadius: '1.5rem' }}
                  className="relative shadow-2xl hover-lift"
                  autoPlay
                  loop
                  muted
                  playsInline
                />
                <div className="absolute -bottom-6 -right-6 glass p-6 rounded-2xl animate-bounce-in">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-8 h-8 text-green-400" />
                    <div>
                      <div className="text-white font-semibold">100% Garantizado</div>
                      <div className="text-gray-300 text-sm">Satisfacción total</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="relative py-32 code-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
          <div className="text-center mb-20 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Servicios que <span className="gradient-text-green">marcan la diferencia</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Ofrecemos soluciones integrales de desarrollo web que transforman ideas en experiencias digitales exitosas
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div 
                key={index} 
                className="group glass p-8 rounded-2xl hover-lift card-hover animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 animate-pulse-glow`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-green-300 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="relative py-32 matrix-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
          <div className="text-center mb-20 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Nuestro proceso <span className="gradient-text-green">probado</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Un enfoque metodológico que garantiza resultados excepcionales en cada proyecto
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div 
                key={index} 
                className="text-center group animate-fade-in-up flex flex-col items-center justify-center"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="mb-8 flex flex-col items-center justify-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-cyan-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 animate-pulse-glow">
                    <step.icon className="w-8 h-8 text-white" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-green-300 transition-colors">
                  {step.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="relative py-32 matrix-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
          <div className="text-center mb-20 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Lo que dicen nuestros <span className="gradient-text-green">clientes</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Testimonios reales de empresas que han transformado su presencia digital con nosotros
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

      {/* CTA Section (Contacto) */}
      <section id="contact" className="relative py-32 animated-dark-bg"> {/* Agregado id="contact" */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-20">
          <div className="animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              ¿Listo para <span className="gradient-text-green animate-text-glow">transformar</span> tu negocio?
            </h2>
            <p className="text-xl text-gray-200 mb-12 max-w-3xl mx-auto leading-relaxed">
              Únete a más de 150 empresas que han confiado en nosotros para crear experiencias digitales extraordinarias. 
              Tu proyecto está a un clic de distancia.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              {/* Botón para redirigir a la sección de Contacto */}
              <Link to="/contact" className="bg-gradient-to-r from-green-500 to-cyan-500 text-white px-10 py-5 rounded-full text-lg font-bold hover:from-green-600 hover:to-cyan-600 transition-all duration-300 transform hover:scale-105 btn-glow flex items-center justify-center space-x-2">
                <span>Comenzar Proyecto</span>
                <ArrowRight className="w-5 h-5 animate-arrow" />
              </Link>
              {/* Botón para redirigir a la sección de Portfolio */}
              <Link to="/portfolio" className="border-2 border-green-500 text-green-400 px-8 py-4 rounded-full text-lg font-semibold hover:bg-green-500/10 transition-all duration-300 hover:shadow-lg hover:shadow-green-500/25">
                Ver Portfolio
              </Link>

            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
