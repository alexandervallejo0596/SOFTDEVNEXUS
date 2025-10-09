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
        '<div className="professional">',
        'npm install trust',
        'git commit -m "solution"',
        'export default Scalability;',
        'import { Impact } from "business";',
        'const client = partner;'
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
      color: 'from-blue-600 to-teal-500'
    },
    {
      icon: Shield,
      title: 'Mantenimiento y Soporte 24/7',
      description: 'Mantén tu sitio web seguro, actualizado y funcionando perfectamente',
      color: 'from-blue-600 to-teal-500'
    },
    {
      icon: Smartphone,
      title: 'Diseño Responsivo Avanzado',
      description: 'Experiencias perfectas en todos los dispositivos y pantallas',
      color: 'from-blue-600 to-teal-500'
    },
    {
      icon: Rocket,
      title: 'Optimización de Rendimiento',
      description: 'Sitios web ultra-rápidos que mejoran tu posicionamiento SEO',
      color: 'from-blue-600 to-teal-500'
    }
  ];

  const technologies = [
    { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
    { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
    { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
    { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
    { name: 'HTML5', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
    { name: 'CSS3', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
    { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
    { name: 'WordPress', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain.svg' },
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
    <div className="min-h-screen bg-white text-gray-800 overflow-hidden relative">
      {/* Floating Code Container */}
      <div className="floating-code-container fixed inset-0 pointer-events-none z-10"></div>
      
      {/* Particles Container */}
      <div className="particles-container fixed inset-0 pointer-events-none z-10"></div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className={`space-y-8 ${isVisible ? 'animate-slide-in-left' : 'opacity-0'}`}> 
              <div className="space-y-6">
                <div className="inline-flex items-center bg-blue-100 border border-blue-200 rounded-full px-6 py-3 text-sm font-medium text-blue-800">
                  <Zap className="w-4 h-4 mr-2" />
                  Desarrollo Web de Nueva Generación
                </div>
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                  <span className="text-gray-900">Creación de páginas web y</span>
                  <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-400">soluciones tecnológicas para empresas</span>
                </h1>
                <p className="text-xl text-gray-600 max-w-2xl leading-relaxed">
                  Desarrollamos experiencias digitales extraordinarias que convierten visitantes en clientes. 
                  Desde el concepto hasta el lanzamiento, creamos sitios web que generan resultados reales.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact" className="bg-gradient-to-r from-blue-600 to-teal-500 text-white px-10 py-5 rounded-full text-lg font-bold hover:from-blue-700 hover:to-teal-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/30 flex items-center justify-center space-x-2">
                  <span>Comenzar Proyecto</span>
                  <ArrowRight className="w-5 h-5 animate-arrow" />
                </Link>

                <Link to="/portfolio" className="border-2 border-gray-400 text-gray-700 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 hover:border-gray-500 transition-all duration-300">
                  Ver Portfolio
                </Link>
              </div>

              <div className="flex items-center space-x-8 pt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-gray-900">150+</div>
                  <div className="text-sm text-gray-500">Proyectos</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-gray-900">98%</div>
                  <div className="text-sm text-gray-500">Satisfacción</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-gray-900">24/7</div>
                  <div className="text-sm text-gray-500">Soporte</div>
                </div>
              </div>
            </div>

            <div className={`relative mt-24 ${isVisible ? 'animate-slide-in-right' : 'opacity-0'}`}> 
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-teal-400 rounded-3xl blur-2xl opacity-10"></div>
                <video
                  src="/assets/videos/videp-home.mp4"
                  style={{ width: '100%', height: '550px', maxWidth: '700px', objectFit: 'cover', borderRadius: '1.5rem' }}
                  className="relative shadow-2xl hover-lift"
                  autoPlay
                  loop
                  muted
                  playsInline
                />
                <div className="absolute -bottom-6 -right-6 bg-white/50 backdrop-blur-lg p-6 rounded-2xl shadow-lg">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-8 h-8 text-blue-500" />
                    <div>
                      <div className="text-gray-800 font-semibold">100% Garantizado</div>
                      <div className="text-gray-600 text-sm">Satisfacción total</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="relative py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
          <div className="text-center mb-20 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Servicios que <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-400">marcan la diferencia</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ofrecemos soluciones integrales de desarrollo web que transforman ideas en experiencias digitales exitosas
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div 
                key={index} 
                className="group bg-white p-8 rounded-2xl hover-lift card-hover animate-fade-in-up shadow-lg"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="relative py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
          <div className="text-center mb-20 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Tecnologías que <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-400">dominamos</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Utilizamos las herramientas más modernas y potentes para construir soluciones robustas y escalables.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-8">
            {technologies.map((tech, index) => (
              <div 
                key={index}
                className="flex flex-col items-center justify-center space-y-2 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <img src={tech.icon} alt={tech.name} className="w-16 h-16" />
                <p className="text-gray-600">{tech.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="relative py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
          <div className="text-center mb-20 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Nuestro proceso <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-400">probado</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
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
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-teal-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <step.icon className="w-8 h-8 text-white" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{step.description}</p>
              </div>
            ))}\
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="relative py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
          <div className="text-center mb-20 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Lo que dicen nuestros <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-400">clientes</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Testimonios reales de empresas que han transformado su presencia digital con nosotros
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index} 
                className="bg-white p-8 rounded-2xl hover-lift card-hover animate-fade-in-up shadow-lg"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}\
                </div>
                <p className="text-gray-600 mb-6 text-lg italic leading-relaxed">"{testimonial.text}"</p>
                <div className="flex items-center space-x-4">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-bold text-gray-900">{testimonial.name}</p>
                    <p className="text-gray-500 text-sm">{testimonial.company}</p>
                    <p className="text-blue-600 text-sm font-medium">{testimonial.result}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className="group animate-bounce-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-teal-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-4xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-gray-600\">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section (Contacto) */}
      <section id="contact" className="relative py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-20">
          <div className="animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              ¿Listo para <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-400">transformar</span> tu negocio?
            </h2>
            <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
              Únete a más de 150 empresas que han confiado en nosotros para crear experiencias digitales extraordinarias. 
              Tu proyecto está a un clic de distancia.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link to="/contact" className="bg-gradient-to-r from-blue-600 to-teal-500 text-white px-10 py-5 rounded-full text-lg font-bold hover:from-blue-700 hover:to-teal-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/30 flex items-center justify-center space-x-2">
                <span>Comenzar Proyecto</span>
                <ArrowRight className="w-5 h-5 animate-arrow" />
              </Link>
              <Link to="/portfolio" className="border-2 border-gray-400 text-gray-700 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 hover:border-gray-500 transition-all duration-300">
                Ver Portfolio
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
