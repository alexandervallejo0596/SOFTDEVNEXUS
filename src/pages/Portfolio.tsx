import React, { useState, useEffect } from 'react';
import { ExternalLink, Star, Award, ArrowRight } from 'lucide-react';

export const Portfolio: React.FC = () => {
  // ...existing code...
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);

    // Create floating code elements
    const createFloatingCode = () => {
      const codeSnippets = [
        'const portfolio = amazing;',
        'function showcase() {}',
        '<Project status="success" />',
        'npm run showcase',
        'git push origin portfolio',
        'export { Excellence };',
        'import { Results } from "work";',
        'const clients = satisfied;'
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

  // ...existing code...

  const projects = [
    {
      id: 1,
      title: 'Urban Nest',
      category: 'corporate',
      description: 'Bienvenido a Johnpi Plastics LLC. Convertimos sus residuos y materiales obsoletos en valiosas oportunidades para su negocio. Con nuestra experiencia en logística y reciclaje sostenible, le ayudamos a liberar espacio, reducir costes y mejorar la imagen de su empresa.',
      image: '/assets/images/urbannest1.jpg',
      technologies: ['Wordpress'],
      url: 'https://johnpiplastics.com/',
      features: ['Logística', 'Reciclaje sostenible', 'Optimización de espacio', 'Mejora de imagen corporativa'],
      duration: '6 semanas',
      year: '2025',
    },
    {
      id: 2,
      title: 'Asociación del Caballo Iberoamericano USA',
      category: 'corporate',
      description: 'La Asociación Centroamericana de Criadores del Caballo de Raza Iberoamericana (Asoibero) se fundó en Costa Rica hace más de tres décadas.',
      image: '/assets/images/asociación2.jpg',
      technologies: ['Wordpress'],
      url: 'https://asociaciondelcaballoiberoamericanousa.com/',
      features: ['Historia', 'Crianza de caballos', 'Presencia internacional', 'Comunidad activa'],
      duration: '5 semanas',
      year: '2025',
    },
    {
      id: 3,
      title: 'SRV relocation and logistics',
      category: 'corporate',
      description: 'En SVR Relocations and Logistics, somos más que una simple empresa de mudanzas: somos un equipo dedicado y comprometido a que cada mudanza sea fluida, eficiente y sin estrés. Con años de experiencia en el sector, nos hemos forjado una reputación de excelencia, confiabilidad y servicio al cliente.',
      image: '/assets/images/srv3.jpg',
      technologies: ['Wordpress'],
      url: 'https://svrrelocationsandlogistics.com/',
      features: ['Mudanzas', 'Logística', 'Servicio al cliente', 'Reputación de excelencia'],
      duration: '7 semanas',
      year: '2025',
    },
    {
      id: 4,
      title: 'Cap Innovation',
      category: 'corporate',
      description: 'Bienvenido a Johnpi Plastics LLC. Convertimos sus residuos y materiales obsoletos en valiosas oportunidades para su negocio. Con nuestra experiencia en logística y reciclaje sostenible, le ayudamos a liberar espacio, reducir costes y mejorar la imagen de su empresa.',
      image: '/assets/images/capinnovation4.jpg',
      technologies: ['Wordpress'],
      url: 'https://capinnovationllc.com/',
      features: ['Logística', 'Reciclaje sostenible', 'Optimización de espacio', 'Mejora de imagen corporativa'],
      duration: '6 semanas',
      year: '2025',
    },
  ];

  const stats = [
    { number: '150+', label: 'Proyectos Completados', icon: Award },
    { number: '98%', label: 'Satisfacción del Cliente', icon: Star },
    // Removed TrendingUp and Globe to avoid undefined icon errors
  ];

  // Render all projects directly
  const filteredProjects = projects;

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
              <Award className="w-4 h-4 mr-2" />
              Portafolio de Proyectos Exitosos
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              <span className="text-white">Nuestro</span>
              <br />
              <span className="gradient-text-green animate-text-glow">portafolio</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Descubre algunos de nuestros proyectos más exitosos y los resultados extraordinarios que hemos logrado. 
              Cada sitio web está diseñado y desarrollado con atención al detalle y enfoque en resultados medibles.
            </p>
          </div>
        </div>
      </section>

  // ...existing code...

      {/* Projects Grid */}
      <section className="relative pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {filteredProjects.map((project, index) => (
              <div 
                key={project.id} 
                className="glass rounded-3xl overflow-hidden hover-lift card-hover animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                  
                  {/* Project Info Overlay */}
                  <div className="absolute top-4 left-4 right-4 flex justify-between items-start">
                    <div className="bg-gradient-to-r from-green-500 to-cyan-500 text-white px-4 py-2 rounded-full text-sm font-medium neon-glow">
                      Corporativo
                    </div>
                    <div className="glass text-white px-3 py-1 rounded-full text-sm">
                      {project.year}
                    </div>
                  </div>
                  
                  {/* No results badges for real projects */}
                  
                  <button className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 glass p-4 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <ExternalLink className="w-6 h-6 text-white" />
                  </button>
                </div>
                
                <div className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                    <span className="text-gray-400 text-sm">{project.duration}</span>
                  </div>
                  
                  <p className="text-gray-300 mb-6 leading-relaxed">{project.description}</p>
                  
                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="bg-green-500/20 text-green-300 text-xs px-3 py-1 rounded-full border border-green-500/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  {/* Features */}
                  <div className="mb-6">
                    <h4 className="text-white font-semibold mb-3">Características principales:</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {project.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center text-gray-300 text-sm">
                          <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* No testimonial for real projects */}
                  
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-gradient-to-r from-green-500 to-cyan-500 text-white py-4 rounded-xl font-semibold hover:from-green-600 hover:to-cyan-600 transition-all duration-300 transform hover:scale-105 btn-glow flex items-center justify-center space-x-2"
                  >
                    <span>Ver proyecto completo</span>
                    <ExternalLink className="w-5 h-5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section Mejorada */}
      <section className="relative py-20 bg-gradient-to-r from-green-900/50 to-cyan-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Resultados que <span className="gradient-text-green">hablan por sí solos</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Más de 150 proyectos completados, clientes satisfechos y presencia internacional. Estos números reflejan nuestro compromiso y calidad.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 text-center">
            <div className="group animate-bounce-in" style={{ animationDelay: '0s' }}>
              <div className="w-24 h-24 bg-gradient-to-r from-green-500 to-cyan-500 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 animate-pulse-glow shadow-xl">
                <svg width="48" height="48" fill="none" stroke="white" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 17l-5 3V5a2 2 0 012-2h6a2 2 0 012 2v15l-5-3z"/></svg>
              </div>
              <div className="text-4xl font-bold text-white mb-2 neon-glow">150+</div>
              <div className="text-gray-300 mb-2">Proyectos Completados</div>
              <div className="text-green-400 text-sm">Empresas de diferentes sectores</div>
            </div>
            <div className="group animate-bounce-in" style={{ animationDelay: '0.1s' }}>
              <div className="w-24 h-24 bg-gradient-to-r from-green-500 to-cyan-500 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 animate-pulse-glow shadow-xl">
                <svg width="48" height="48" fill="none" stroke="white" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 17.75A5.75 5.75 0 1 0 12 6.25a5.75 5.75 0 0 0 0 11.5z"/><path d="M12 2v2m0 16v2m8-10h2M2 12H4m15.07 7.07l-1.41-1.41M6.34 6.34L4.93 4.93m12.73 0l-1.41 1.41M6.34 17.66l-1.41 1.41"/></svg>
              </div>
              <div className="text-4xl font-bold text-white mb-2 neon-glow">98%</div>
              <div className="text-gray-300 mb-2">Satisfacción del Cliente</div>
              <div className="text-green-400 text-sm">Valoraciones positivas y testimonios</div>
            </div>
            <div className="group animate-bounce-in" style={{ animationDelay: '0.2s' }}>
              <div className="w-24 h-24 bg-gradient-to-r from-green-500 to-cyan-500 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 animate-pulse-glow shadow-xl">
                <svg width="48" height="48" fill="none" stroke="white" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 2v20"/><path d="M5 12h14"/><circle cx="12" cy="12" r="10"/></svg>
              </div>
              <div className="text-4xl font-bold text-white mb-2 neon-glow">5+</div>
              <div className="text-gray-300 mb-2">Años de Experiencia</div>
              <div className="text-green-400 text-sm">Expertos en desarrollo web</div>
            </div>
            <div className="group animate-bounce-in" style={{ animationDelay: '0.3s' }}>
              <div className="w-24 h-24 bg-gradient-to-r from-green-500 to-cyan-500 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 animate-pulse-glow shadow-xl">
                <svg width="48" height="48" fill="none" stroke="white" strokeWidth="2" viewBox="0 0 24 24"><path d="M17 2a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h10z"/><path d="M12 8v4l3 3"/></svg>
              </div>
              <div className="text-4xl font-bold text-white mb-2 neon-glow">24/7</div>
              <div className="text-gray-300 mb-2">Soporte Técnico</div>
              <div className="text-green-400 text-sm">Disponibilidad y respuesta inmediata</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-32 animated-dark-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-20">
          <div className="animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              ¿Te gustó lo que <span className="gradient-text-green animate-text-glow">viste?</span>
            </h2>
            <p className="text-xl text-gray-200 mb-12 max-w-3xl mx-auto leading-relaxed">
              Estos son solo algunos ejemplos de lo que podemos hacer por tu negocio. 
              Cuéntanos tu proyecto y hagamos realidad tu visión digital con resultados extraordinarios.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="bg-gradient-to-r from-green-500 to-cyan-500 text-white px-10 py-5 rounded-full text-lg font-bold hover:from-green-600 hover:to-cyan-600 transition-all duration-300 transform hover:scale-105 btn-glow flex items-center justify-center space-x-2">
                <span>Solicitar cotización</span>
                <ArrowRight className="w-5 h-5 animate-arrow" />
              </button>
              <button className="border-2 border-green-500 text-green-400 px-10 py-5 rounded-full text-lg font-bold hover:bg-green-500/10 transition-all duration-300">
                Agendar consulta gratuita
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};