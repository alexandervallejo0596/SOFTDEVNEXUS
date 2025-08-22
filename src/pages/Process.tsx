import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { MessageSquare, Palette, Code, Rocket, CheckCircle, Users, Target, Zap, Shield, BarChart3, Clock, Award, ArrowRight } from 'lucide-react';

export const Process: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);

    // Create floating code elements
    const createFloatingCode = () => {
      const codeSnippets = [
        'const process = efficient;',
        'function optimize() {}',
        '<Process step="success" />',
        'npm run development',
        'git push origin main',
        'export { Excellence };',
        'import { Quality } from "work";',
        'const delivery = onTime;'
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

  const processSteps = [
    {
      number: '01',
      icon: MessageSquare,
      title: 'Análisis & Estrategia',
      subtitle: 'Definición del proyecto',
      description: 'Comenzamos con un análisis profundo de tu negocio, competencia y objetivos para crear la estrategia digital perfecta que impulse tu crecimiento.',
      details: [
        'Análisis exhaustivo de requerimientos',
        'Investigación de mercado y competencia',
        'Definición de objetivos SMART',
        'Identificación del público objetivo',
        'Arquitectura de información',
        'Propuesta técnica detallada',
        'Timeline y milestones del proyecto'
      ],
      duration: '1-2 semanas',
      deliverables: ['Documento de requerimientos', 'Análisis competitivo', 'Propuesta técnica', 'Cronograma detallado'],
      color: 'from-green-500 to-cyan-500'
    },
    {
      number: '02',
      icon: Palette,
      title: 'Diseño UX/UI',
      subtitle: 'Creación visual y experiencia',
      description: 'Diseñamos experiencias de usuario excepcionales y interfaces visuales impactantes que reflejen tu marca y conviertan visitantes en clientes.',
      details: [
        'Wireframes y arquitectura UX',
        'Diseño de interfaz (UI) personalizado',
        'Prototipo interactivo funcional',
        'Diseño responsive para todos los dispositivos',
        'Guía de estilo y brand guidelines',
        'Testing de usabilidad',
        'Revisiones y refinamientos'
      ],
      duration: '2-3 semanas',
      deliverables: ['Wireframes completos', 'Diseños UI finales', 'Prototipo interactivo', 'Guía de estilo'],
      color: 'from-cyan-500 to-blue-500'
    },
    {
      number: '03',
      icon: Code,
      title: 'Desarrollo & Testing',
      subtitle: 'Construcción técnica',
      description: 'Construimos tu sitio web utilizando las mejores tecnologías y prácticas de desarrollo, con testing exhaustivo para garantizar calidad excepcional.',
      details: [
        'Desarrollo frontend responsivo',
        'Desarrollo backend robusto',
        'Integración de bases de datos',
        'Implementación de funcionalidades',
        'Optimización de rendimiento',
        'Testing automatizado y manual',
        'Integración de herramientas analytics'
      ],
      duration: '3-6 semanas',
      deliverables: ['Código fuente completo', 'Documentación técnica', 'Reportes de testing', 'Sitio en staging'],
      color: 'from-blue-500 to-purple-500'
    },
    {
      number: '04',
      icon: Rocket,
      title: 'Lanzamiento & Optimización',
      subtitle: 'Puesta en producción',
      description: 'Desplegamos tu sitio web con configuraciones optimizadas y realizamos monitoreo continuo para asegurar el máximo rendimiento.',
      details: [
        'Configuración del servidor de producción',
        'Migración segura de datos',
        'Configuración de SSL y seguridad',
        'Optimización de velocidad final',
        'Configuración de analytics y tracking',
        'Entrega y capacitación del cliente',
        'Soporte post-lanzamiento'
      ],
      duration: '1 semana',
      deliverables: ['Sitio web en producción', 'Manual de usuario', 'Accesos y credenciales', 'Plan de mantenimiento'],
      color: 'from-purple-500 to-green-500'
    }
  ];

  const benefits = [
    {
      icon: Target,
      title: 'Transparencia Total',
      description: 'Te mantenemos informado en cada etapa del proceso con reportes regulares, reuniones de seguimiento y comunicación constante.',
      features: ['Reportes semanales', 'Acceso a herramientas de seguimiento', 'Reuniones de checkpoint']
    },
    {
      icon: Award,
      title: 'Calidad Garantizada',
      description: 'Utilizamos las mejores prácticas y estándares de la industria para asegurar un producto de alta calidad y rendimiento excepcional.',
      features: ['Código limpio y documentado', 'Testing exhaustivo', 'Estándares internacionales']
    },
    {
      icon: Clock,
      title: 'Entrega Puntual',
      description: 'Nos comprometemos a cumplir con los plazos establecidos sin sacrificar la calidad del trabajo mediante metodologías ágiles.',
      features: ['Metodología ágil', 'Milestones claros', 'Gestión de riesgos']
    },
    {
      icon: Shield,
      title: 'Soporte Continuo',
      description: 'Ofrecemos soporte técnico especializado después del lanzamiento para asegurar el óptimo funcionamiento de tu sitio web.',
      features: ['Soporte 24/7', 'Actualizaciones incluidas', 'Monitoreo proactivo']
    }
  ];

  const methodologies = [
    {
      name: 'Metodología Ágil',
      description: 'Desarrollo iterativo con entregas frecuentes y feedback continuo',
      icon: Zap
    },
    {
      name: 'DevOps',
      description: 'Integración continua y despliegue automatizado para mayor eficiencia',
      icon: Code
    },
    {
      name: 'Design Thinking',
      description: 'Enfoque centrado en el usuario para crear soluciones innovadoras',
      icon: Users
    },
    {
      name: 'Data-Driven',
      description: 'Decisiones basadas en datos y métricas para optimizar resultados',
      icon: BarChart3
    }
  ];

  const timeline = [
    { week: 'Semana 1-2', phase: 'Análisis', status: 'Investigación y planificación' },
    { week: 'Semana 3-5', phase: 'Diseño', status: 'Creación visual y UX' },
    { week: 'Semana 6-11', phase: 'Desarrollo', status: 'Construcción y testing' },
    { week: 'Semana 12', phase: 'Lanzamiento', status: 'Despliegue y optimización' }
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
              <Rocket className="w-4 h-4 mr-2" />
              Proceso de Desarrollo Profesional
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              <span className="text-white">Nuestro proceso</span>
              <br />
              <span className="gradient-text-green animate-text-glow">probado y eficiente</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Un enfoque estructurado y metodológico que garantiza resultados excepcionales. 
              Cada proyecto sigue un proceso meticuloso diseñado para maximizar el éxito y la satisfacción del cliente.
            </p>
          </div>
        </div>
      </section>

      {/* Timeline Overview */}
      <section className="relative py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Timeline del <span className="gradient-text-green">proyecto</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Cronograma típico para un proyecto de desarrollo web completo
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {timeline.map((item, index) => (
              <div 
                key={index} 
                className="glass p-6 rounded-2xl text-center animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-green-400 font-bold mb-2 neon-glow">{item.week}</div>
                <div className="text-xl font-bold text-white mb-2">{item.phase}</div>
                <div className="text-gray-300 text-sm">{item.status}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="relative py-20 code-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
          <div className="space-y-32">
            {processSteps.map((step, index) => (
              <div key={index} className={`flex flex-col lg:flex-row items-center gap-16 ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}>
                <div className="flex-1 animate-fade-in-up" style={{ animationDelay: `${index * 0.2}s` }}>
                  <div className="flex items-center mb-8">
                    <div className={`w-20 h-20 bg-gradient-to-r ${step.color} rounded-full flex items-center justify-center text-2xl font-bold mr-6 animate-pulse-glow neon-glow`}>
                      {step.number}
                    </div>
                    <div>
                      <h3 className="text-3xl font-bold text-white mb-2">{step.title}</h3>
                      <p className="text-green-400 font-medium text-lg neon-glow">{step.subtitle}</p>
                    </div>
                  </div>
                  
                  <p className="text-xl text-gray-300 mb-8 leading-relaxed">{step.description}</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    <div>
                      <h4 className="text-lg font-bold text-white mb-4">Actividades principales:</h4>
                      <ul className="space-y-3">
                        {step.details.map((detail, detailIndex) => (
                          <li key={detailIndex} className="flex items-start text-gray-300">
                            <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-bold text-white mb-4">Entregables:</h4>
                      <ul className="space-y-3">
                        {step.deliverables.map((deliverable, deliverableIndex) => (
                          <li key={deliverableIndex} className="flex items-start text-gray-300">
                            <div className="w-2 h-2 bg-green-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                            <span>{deliverable}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  <div className="inline-flex items-center glass border border-green-500/30 rounded-full px-6 py-3">
                    <Clock className="w-5 h-5 text-green-400 mr-2" />
                    <span className="text-green-300 font-medium">
                      Duración: {step.duration}
                    </span>
                  </div>
                </div>
                
                <div className="flex-1 animate-fade-in-up" style={{ animationDelay: `${index * 0.2 + 0.1}s` }}>
                  <div className="relative">
                    <div className={`absolute inset-0 bg-gradient-to-r ${step.color} rounded-3xl blur-2xl opacity-20 animate-pulse-glow`}></div>
                    <div className="relative glass p-0 rounded-3xl flex items-center justify-center">
                      <video
                        src={`/assets/videos/video${index + 1}.mp4`}
                        style={{ width: '100%', height: '400px', maxWidth: '700px', objectFit: 'cover', borderRadius: '1.5rem' }}
                        autoPlay
                        loop
                        muted
                        playsInline
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Methodologies Section */}
      <section className="relative py-20 matrix-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Metodologías <span className="gradient-text-green">avanzadas</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Utilizamos las mejores prácticas y metodologías de la industria
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {methodologies.map((methodology, index) => (
              <div 
                key={index} 
                className="glass p-8 rounded-2xl text-center hover-lift card-hover animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 animate-pulse-glow">
                  <methodology.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{methodology.name}</h3>
                <p className="text-gray-300 leading-relaxed">{methodology.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="relative py-20 code-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Beneficios de nuestro <span className="gradient-text-green">proceso estructurado</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Un enfoque metodológico que garantiza resultados excepcionales y una experiencia sin complicaciones
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <div 
                key={index} 
                className="glass p-8 rounded-2xl hover-lift card-hover animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start space-x-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-cyan-500 rounded-2xl flex items-center justify-center flex-shrink-0 animate-pulse-glow">
                    <benefit.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-4">{benefit.title}</h3>
                    <p className="text-gray-300 mb-6 leading-relaxed">{benefit.description}</p>
                    <ul className="space-y-2">
                      {benefit.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-3" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
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
              Inicia tu proyecto con nosotros y experimenta un proceso de desarrollo web 
              profesional, transparente y sin complicaciones que garantiza resultados excepcionales.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link to="/contact" className="bg-gradient-to-r from-green-500 to-cyan-500 text-white px-10 py-5 rounded-full text-lg font-bold hover:from-green-600 hover:to-cyan-600 transition-all duration-300 transform hover:scale-105 btn-glow flex items-center justify-center space-x-2">
                <span>Comienza tu proyecto</span>
                <ArrowRight className="w-5 h-5 animate-arrow" />
              </Link>
              <a
                href="https://wa.me/573124549040"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-green-500 text-green-400 px-10 py-5 rounded-full text-lg font-bold hover:bg-green-500/10 transition-all duration-300 flex items-center justify-center"
              >
                Solicitar consulta gratuita
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};