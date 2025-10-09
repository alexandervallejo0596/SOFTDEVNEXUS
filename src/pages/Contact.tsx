import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle, User, MessageSquare, ArrowRight, Globe, Users } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const API_URL = import.meta.env.VITE_API_URL || '';

export const Contact: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    country: '',
    phone: '',
    message: ''
  });
  const navigate = useNavigate();

  useEffect(() => {
    setIsVisible(true);

    const createFloatingCode = () => {
      const codeSnippets = [
        'const contact = await send();',
        'function connectWithUs() {}',
        '<Contact success={true} />',
        'npm start collaboration',
        'git push origin success',
        'export { YourProject };',
        'import { Dreams } from "reality";',
        'const partnership = true;'
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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch(`${API_URL}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setIsSubmitted(true);
        setIsSubmitting(false);
        setTimeout(() => {
          navigate('/');
        }, 3000);
      } else {
        const errorData = await response.json();
        setIsSubmitting(false);
        alert(`Error: ${errorData.message}`);
      }
    } catch (error) {
      setIsSubmitting(false);
      alert(`Error al enviar el formulario: ${error.message}`);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      details: 'contacto@softdevnexus.com',
      description: 'Envíanos un correo para consultas generales.',
      color: 'from-blue-600 to-teal-500'
    },
    {
      icon: Phone,
      title: 'Teléfono',
      details: '+57 312 454 9040',
      description: 'Llámanos para una respuesta más rápida.',
      color: 'from-blue-600 to-teal-500'
    },
    {
      icon: MapPin,
      title: 'Ubicación',
      details: 'Colombia',
      description: 'Disponibles para reuniones presenciales y remotas.',
      color: 'from-blue-600 to-teal-500'
    },
    {
      icon: Clock,
      title: 'Horario',
      details: 'Lun - Vie, 9am - 6pm (GMT-5)',
      description: 'Nuestro equipo está disponible durante el horario laboral.',
      color: 'from-blue-600 to-teal-500'
    }
  ];

  const benefits = [
    'Consulta inicial gratuita',
    'Equipo de expertos dedicado',
    'Soluciones a medida',
    'Soporte post-lanzamiento'
  ];

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-white text-gray-800 flex items-center justify-center relative overflow-hidden">
        <div className="floating-code-container fixed inset-0 pointer-events-none z-10"></div>
        <div className="particles-container fixed inset-0 pointer-events-none z-10"></div>

        <div className="text-center animate-bounce-in relative z-20 p-4">
          <div className="w-24 h-24 bg-gradient-to-r from-blue-600 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-8 shadow-lg">
            <CheckCircle className="w-12 h-12 text-white" />
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">¡Mensaje Enviado!</h2>
          <p className="text-xl text-gray-600 mb-6">
            Gracias por contactarnos. Hemos recibido tu mensaje y te responderemos pronto.
          </p>
          <button 
            onClick={() => navigate('/')} 
            className="bg-gradient-to-r from-blue-600 to-teal-500 text-white px-8 py-3 rounded-full text-lg font-semibold hover:from-blue-700 hover:to-teal-600 transition-all duration-300 transform hover:scale-105 shadow-lg">
            Volver al Inicio
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white text-gray-800 overflow-hidden relative">
      <div className="floating-code-container fixed inset-0 pointer-events-none z-10"></div>
      <div className="particles-container fixed inset-0 pointer-events-none z-10"></div>

      <section className="relative pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-20">
          <div className={`space-y-8 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
            <div className="inline-flex items-center bg-blue-100 border border-blue-200 rounded-full px-6 py-3 text-sm font-medium text-blue-800">
              <MessageSquare className="w-4 h-4 mr-2" />
              Contáctanos
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              <span className="text-gray-900">Hablemos de</span>
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-400">tu Próximo Proyecto</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Estamos aquí para responder a tus preguntas, discutir tus ideas y ayudarte a encontrar la mejor solución tecnológica para tu negocio. ¡No dudes en contactarnos!
            </p>
          </div>
        </div>
      </section>

      <section className="relative py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {contactInfo.map((info, index) => (
              <div 
                key={index} 
                className="bg-white p-8 rounded-2xl text-center hover-lift card-hover animate-fade-in-up shadow-lg"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`w-20 h-20 bg-gradient-to-r ${info.color} rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <info.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{info.title}</h3>
                <p className="text-lg text-blue-600 font-semibold mb-3">{info.details}</p>
                <p className="text-gray-600 text-sm leading-relaxed">{info.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
          <div className="bg-white rounded-3xl p-8 md:p-12 animate-fade-in-up shadow-lg">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Envíanos <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-400">un Mensaje</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Completa el formulario y uno de nuestros expertos se pondrá en contacto contigo a la brevedad.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="flex items-center text-sm font-medium text-gray-700 mb-3">
                    <User className="w-4 h-4 mr-2" />
                    Nombre Completo *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-6 py-4 bg-gray-100 border-transparent rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 text-gray-900 placeholder-gray-500"
                    placeholder="Tu Nombre Completo"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="flex items-center text-sm font-medium text-gray-700 mb-3">
                    <Mail className="w-4 h-4 mr-2" />
                    Correo Electrónico *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-6 py-4 bg-gray-100 border-transparent rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 text-gray-900 placeholder-gray-500"
                    placeholder="tu.email@ejemplo.com"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="country" className="flex items-center text-sm font-medium text-gray-700 mb-3">
                    <Globe className="w-4 h-4 mr-2" />
                    País *
                  </label>
                  <input
                    type="text"
                    id="country"
                    name="country"
                    required
                    value={formData.country}
                    onChange={handleInputChange}
                    className="w-full px-6 py-4 bg-gray-100 border-transparent rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 text-gray-900 placeholder-gray-500"
                    placeholder="País de Residencia"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="phone" className="flex items-center text-sm font-medium text-gray-700 mb-3">
                    <Phone className="w-4 h-4 mr-2" />
                    Teléfono *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-6 py-4 bg-gray-100 border-transparent rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 text-gray-900 placeholder-gray-500"
                    placeholder="Tu número de teléfono"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="flex items-center text-sm font-medium text-gray-700 mb-3">
                  <MessageSquare className="w-4 h-4 mr-2" />
                  Tu Mensaje *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-6 py-4 bg-gray-100 border-transparent rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 resize-none text-gray-900 placeholder-gray-500"
                  placeholder="Cuéntanos sobre tu proyecto, tus objetivos y cómo podemos ayudarte a tener éxito..."
                />
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-gradient-to-r from-blue-600 to-teal-500 text-white px-12 py-5 rounded-full text-lg font-bold hover:from-blue-700 hover:to-teal-600 transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center space-x-3 mx-auto disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span>Enviando...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>Enviar Mensaje</span>
                      <ArrowRight className="w-5 h-5 animate-arrow" />
                    </>
                  )}
                </button>
                <p className="text-sm text-gray-500 mt-6">
                  * Nos pondremos en contacto contigo en las próximas 24 horas.
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>

      <section className="relative py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
          <div className="text-center mb-16 animate-fade-in-up">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              ¿Por Qué <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-400">Elegirnos?</span>
            </h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div 
                key={index} 
                className="flex items-center space-x-4 bg-white p-6 rounded-xl animate-fade-in-up hover-lift shadow-lg"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CheckCircle className="w-8 h-8 text-blue-500 flex-shrink-0" />
                <span className="text-gray-800 font-medium">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
          <div className="bg-white rounded-3xl p-12 text-center animate-fade-in-up shadow-lg">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Nuestra <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-400">Disponibilidad</span>
            </h3>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Estamos ubicados en el corazón de la innovación digital, pero nuestro alcance es global. Nos adaptamos a tus necesidades, ya sea en persona o de forma remota.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gray-100 p-6 rounded-2xl">
                <MapPin className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h4 className="text-gray-900 font-bold mb-2">Reuniones en Persona</h4>
                <p className="text-gray-600 text-sm">Podemos coordinar reuniones en nuestras oficinas o en tu ubicación.</p>
              </div>
              <div className="bg-gray-100 p-6 rounded-2xl">
                <Globe className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h4 className="text-gray-900 font-bold mb-2">Colaboración Remota</h4>
                <p className="text-gray-600 text-sm">Trabajamos con clientes de todo el mundo a través de herramientas de colaboración.</p>
              </div>
              <div className="bg-gray-100 p-6 rounded-2xl">
                <Users className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h4 className="text-gray-900 font-bold mb-2">Proyectos Internacionales</h4>
                <p className="text-gray-600 text-sm">Tenemos experiencia en la gestión de proyectos a nivel internacional.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
