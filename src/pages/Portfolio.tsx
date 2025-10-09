
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink, Star, Award, ArrowRight } from 'lucide-react';

export const Portfolio: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const projects = [
    {
      id: 1,
      title: 'Urban Nest',
      category: 'corporate',
      description: 'Bienvenido a Johnpi Plastics LLC. Convertimos sus residuos y materiales obsoletos en valiosas oportunidades para su negocio. Con nuestra experiencia en logística y reciclaje sostenible, le ayudamos a liberar espacio, reducir costes y mejorar la imagen de su empresa.',
      image: '/assets/images/urbannest1.jpg',
      technologies: ['Wordpress'],
      url: 'https://johnpiplastics.com/',
      features: [
        'Logística',
        'Reciclaje sostenible',
        'Optimización de espacio',
        'Mejora de imagen corporativa'
      ],
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
      features: [
        'Historia',
        'Crianza de caballos',
        'Presencia internacional',
        'Comunidad activa'
      ],
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
      features: [
        'Mudanzas',
        'Logística',
        'Servicio al cliente',
        'Reputación de excelencia'
      ],
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
      features: [
        'Logística',
        'Reciclaje sostenible',
        'Optimización de espacio',
        'Mejora de imagen corporativa'
      ],
      duration: '6 semanas',
      year: '2025',
    },
  ];

  const stats = [
    { number: '150+', label: 'Proyectos Completados', description: 'Empresas de diferentes sectores', icon: Award },
    { number: '98%', label: 'Satisfacción del Cliente', description: 'Valoraciones positivas y testimonios', icon: Star },
    { number: '5+', label: 'Años de Experiencia', description: 'Expertos en desarrollo web', icon: Star },
    { number: '24/7', label: 'Soporte Técnico', description: 'Disponibilidad y respuesta inmediata', icon: Star },
  ];

  const filteredProjects = projects;

  return (
    <div className="min-h-screen bg-white text-gray-800 overflow-hidden relative">

      <section className="relative pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-20">
          <div className={`space-y-8 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            <div className="inline-flex items-center bg-blue-100 border border-blue-200 rounded-full px-6 py-3 text-sm font-medium text-blue-800">
              <Award className="w-4 h-4 mr-2" />
              Portafolio de Proyectos Exitosos
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              <span className="text-gray-900">Nuestro</span>
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-400">portafolio</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Descubre algunos de nuestros proyectos más exitosos y los resultados extraordinarios que hemos logrado. Cada sitio web está diseñado y desarrollado con atención al detalle y enfoque en resultados medibles.
            </p>
          </div>
        </div>
      </section>

      <section className="relative pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {filteredProjects.map((project) => (
              <div 
                key={project.id} 
                className="bg-white rounded-3xl overflow-hidden shadow-lg"
              >
                <div className="relative group">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                  
                  <div className="absolute top-4 left-4 right-4 flex justify-between items-start">
                    <div className="bg-gradient-to-r from-blue-600 to-teal-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                      Corporativo
                    </div>
                    <div className="bg-white/30 backdrop-blur-lg text-black px-3 py-1 rounded-full text-sm">
                      {project.year}
                    </div>
                  </div>
                  
                  <a href={project.url} target="_blank" rel="noopener noreferrer" className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white/30 backdrop-blur-lg p-4 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <ExternalLink className="w-6 h-6 text-black" />
                  </a>
                </div>
                
                <div className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-2xl font-bold text-gray-900">{project.title}</h3>
                    <span className="text-gray-500 text-sm">{project.duration}</span>
                  </div>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full border border-blue-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="text-gray-900 font-semibold mb-3">Características principales:</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {project.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center text-gray-600 text-sm">
                          <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-gradient-to-r from-blue-600 to-teal-500 text-white py-4 rounded-xl font-semibold flex items-center justify-center space-x-2"
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

      <section className="relative py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Resultados que hablan por sí solos
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Más de 150 proyectos completados, clientes satisfechos y presencia internacional. Estos números reflejan nuestro compromiso y calidad.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 text-center">
            {stats.map((stat, index) => (
              <div key={index} className="group">
                <div className="w-24 h-24 bg-gradient-to-r from-blue-600 to-teal-500 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-xl">
                  <stat.icon width="48" height="48" fill="none" stroke="white" strokeWidth="2" viewBox="0 0 24 24"/>
                </div>
                <div className="text-4xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-gray-600 mb-2">{stat.label}</div>
                <div className="text-blue-600 text-sm">{stat.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-20">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              ¿Te gustó lo que <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-400">viste?</span>
            </h2>
            <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
              Estos son solo algunos ejemplos de lo que podemos hacer por tu negocio. Cuéntanos tu proyecto y hagamos realidad tu visión digital con resultados extraordinarios.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link to="/contact" className="bg-gradient-to-r from-blue-600 to-teal-500 text-white px-10 py-5 rounded-full text-lg font-bold flex items-center justify-center space-x-2">
                <span>Solicitar cotización</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <a href="https://wa.me/573124549040" target="_blank" rel="noopener noreferrer" className="border-2 border-gray-300 text-gray-700 px-10 py-5 rounded-full text-lg font-bold hover:bg-gray-100 hover:border-gray-400">
                Agendar consulta gratuita
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
