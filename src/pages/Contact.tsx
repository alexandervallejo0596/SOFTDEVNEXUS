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
          setIsSubmitted(false);
          setFormData({ name: '', email: '', country: '', phone: '', message: '' });
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
      color: 'from-brand-logo-blue to-brand-teal-accent'
    },
    {
      icon: Phone,
      title: 'Teléfono',
      details: '+57 312 454 9040',
      description: 'Llámanos para una respuesta más rápida.',
      color: 'from-brand-teal-accent to-brand-logo-dark-blue'
    },
    {
      icon: MapPin,
      title: 'Ubicación',
      details: 'Colombia',
      description: 'Disponibles para reuniones presenciales y remotas.',
      color: 'from-brand-logo-dark-blue to-brand-logo-light-blue'
    },
    {
      icon: Clock,
      title: 'Horario',
      details: 'Lun - Vie, 9am - 6pm (GMT-5)',
      description: 'Nuestro equipo está disponible durante el horario laboral.',
      color: 'from-brand-logo-light-blue to-brand-teal-accent'
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
      <div class="min-h-screen bg-dark-gradient text-white flex items-center justify-center relative overflow-hidden">
        <div class="floating-code-container fixed inset-0 pointer-events-none z-10"></div>
        <div class="particles-container fixed inset-0 pointer-events-none z-10"></div>

        <div class="fixed inset-0 animated-dark-bg">
          <div class="absolute inset-0 cyber-grid opacity-30"></div>
          <div class="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-logo-blue/10 rounded-full blur-3xl animate-float"></div>
          <div class="absolute bottom-1/4 right-1/4 w-96 h-96 bg-brand-teal-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        </div>

        <div class="text-center animate-bounce-in relative z-20">
          <div class="w-24 h-24 bg-gradient-to-r from-brand-logo-blue to-brand-teal-accent rounded-full flex items-center justify-center mx-auto mb-8 animate-pulse-glow">
            <CheckCircle class="w-12 h-12 text-white" />
          </div>
          <h2 class="text-4xl font-bold text-white mb-4 neon-glow">¡Mensaje Enviado!</h2>
          <p class="text-xl text-gray-300 mb-6">
            Gracias por contactarnos. Hemos recibido tu mensaje y te responderemos pronto.
          </p>
          <div class="text-brand-teal-accent font-medium neon-glow">
            Redirigiendo...
          </div>
        </div>
      </div>
    );
  }

  return (
    <div class="min-h-screen bg-dark-gradient text-white overflow-hidden relative">
      <div class="floating-code-container fixed inset-0 pointer-events-none z-10"></div>
      <div class="particles-container fixed inset-0 pointer-events-none z-10"></div>

      <div class="fixed inset-0 animated-dark-bg">
        <div class="absolute inset-0 cyber-grid opacity-30"></div>
        <div class="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-logo-blue/10 rounded-full blur-3xl animate-float"></div>
        <div class="absolute bottom-1/4 right-1/4 w-96 h-96 bg-brand-teal-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div class="absolute top-1/2 left-1/2 w-64 h-64 bg-brand-logo-dark-blue/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      <section class="relative pt-32 pb-20">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-20">
          <div class={`space-y-8 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
            <div class="inline-flex items-center glass border-brand-teal-accent/30 rounded-full px-6 py-3 text-sm font-medium text-brand-teal-accent">
              <MessageSquare class="w-4 h-4 mr-2" />
              Contáctanos
            </div>
            <h1 class="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              <span class="text-white">Hablemos de</span>
              <br />
              <span class="gradient-text-green animate-text-glow">tu Próximo Proyecto</span>
            </h1>
            <p class="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Estamos aquí para responder a tus preguntas, discutir tus ideas y ayudarte a encontrar la mejor solución tecnológica para tu negocio. ¡No dudes en contactarnos!
            </p>
          </div>
        </div>
      </section>

      <section class="relative py-20">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {contactInfo.map((info, index) => (
              <div 
                key={index} 
                class="glass p-8 rounded-2xl text-center hover-lift card-hover animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div class={`w-20 h-20 bg-gradient-to-r ${info.color} rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 animate-pulse-glow`}>
                  <info.icon class="w-10 h-10 text-white" />
                </div>
                <h3 class="text-xl font-bold text-white mb-3">{info.title}</h3>
                <p class="text-lg text-brand-teal-accent font-semibold mb-3 neon-glow">{info.details}</p>
                <p class="text-gray-300 text-sm leading-relaxed">{info.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section class="relative py-20 code-bg">
        <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
          <div class="glass rounded-3xl p-8 md:p-12 animate-fade-in-up">
            <div class="text-center mb-12">
              <h2 class="text-4xl md:text-5xl font-bold text-white mb-6">
                Envíanos <span class="gradient-text-green">un Mensaje</span>
              </h2>
              <p class="text-xl text-gray-300 max-w-3xl mx-auto">
                Completa el formulario y uno de nuestros expertos se pondrá en contacto contigo a la brevedad.
              </p>
            </div>

            <form onSubmit={handleSubmit} class="space-y-8">
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div class="space-y-2">
                  <label htmlFor="name" class="flex items-center text-sm font-medium text-gray-300 mb-3">
                    <User class="w-4 h-4 mr-2" />
                    Nombre Completo *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    class="w-full px-6 py-4 bg-gray-800/50 border-brand-teal-accent/30 rounded-xl focus:ring-2 focus:ring-brand-teal-accent focus:border-brand-teal-accent transition-all duration-300 text-white placeholder-gray-400"
                    placeholder="Tu Nombre Completo"
                  />
                </div>
                <div class="space-y-2">
                  <label htmlFor="email" class="flex items-center text-sm font-medium text-gray-300 mb-3">
                    <Mail class="w-4 h-4 mr-2" />
                    Correo Electrónico *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    class="w-full px-6 py-4 bg-gray-800/50 border-brand-teal-accent/30 rounded-xl focus:ring-2 focus:ring-brand-teal-accent focus:border-brand-teal-accent transition-all duration-300 text-white placeholder-gray-400"
                    placeholder="tu.email@ejemplo.com"
                  />
                </div>
                <div class="space-y-2">
                  <label htmlFor="country" class="flex items-center text-sm font-medium text-gray-300 mb-3">
                    <Globe class="w-4 h-4 mr-2" />
                    País *
                  </label>
                  <input
                    type="text"
                    id="country"
                    name="country"
                    required
                    value={formData.country}
                    onChange={handleInputChange}
                    class="w-full px-6 py-4 bg-gray-800/50 border-brand-teal-accent/30 rounded-xl focus:ring-2 focus:ring-brand-teal-accent focus:border-brand-teal-accent transition-all duration-300 text-white placeholder-gray-400"
                    placeholder="País de Residencia"
                  />
                </div>
                <div class="space-y-2">
                  <label htmlFor="phone" class="flex items-center text-sm font-medium text-gray-300 mb-3">
                    <Phone class="w-4 h-4 mr-2" />
                    Teléfono *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleInputChange}
                    class="w-full px-6 py-4 bg-gray-800/50 border-brand-teal-accent/30 rounded-xl focus:ring-2 focus:ring-brand-teal-accent focus:border-brand-teal-accent transition-all duration-300 text-white placeholder-gray-400"
                    placeholder="Tu número de teléfono"
                  />
                </div>
              </div>

              <div class="space-y-2">
                <label htmlFor="message" class="flex items-center text-sm font-medium text-gray-300 mb-3">
                  <MessageSquare class="w-4 h-4 mr-2" />
                  Tu Mensaje *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={handleInputChange}
                  class="w-full px-6 py-4 bg-gray-800/50 border-brand-teal-accent/30 rounded-xl focus:ring-2 focus:ring-brand-teal-accent focus:border-brand-teal-accent transition-all duration-300 resize-none text-white placeholder-gray-400"
                  placeholder="Cuéntanos sobre tu proyecto, tus ideas y cómo podemos ayudarte..."
                />
              </div>

              <div class="text-center">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  class="bg-gradient-to-r from-brand-logo-blue to-brand-teal-accent text-white px-12 py-5 rounded-full text-lg font-bold hover:from-brand-logo-blue/80 hover:to-brand-teal-accent/80 transition-all duration-300 transform hover:scale-105 btn-glow flex items-center justify-center space-x-3 mx-auto disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div class="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span>Enviando<span class="loading-dots"></span></span>
                    </>
                  ) : (
                    <>
                      <Send class="w-5 h-5" />
                      <span>Enviar Mensaje</span>
                      <ArrowRight class="w-5 h-5 animate-arrow" />
                    </>
                  )}
                </button>
                <p class="text-sm text-gray-400 mt-6">
                  * Nos pondremos en contacto contigo en las próximas 24 horas.
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>

      <section class="relative py-20">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
          <div class="text-center mb-16 animate-fade-in-up">
            <h3 class="text-3xl md:text-4xl font-bold text-white mb-6">
              ¿Por Qué <span class="gradient-text-green">Elegirnos?</span>
            </h3>
          </div>
          
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div 
                key={index} 
                class="flex items-center space-x-4 glass p-6 rounded-xl animate-fade-in-up hover-lift"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CheckCircle class="w-8 h-8 text-brand-teal-accent flex-shrink-0" />
                <span class="text-white font-medium">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section class="relative py-20 bg-gradient-to-r from-brand-dark-teal/30 to-brand-dark-navy/30">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
          <div class="glass rounded-3xl p-12 text-center animate-fade-in-up">
            <h3 class="text-3xl md:text-4xl font-bold text-white mb-6">
              Nuestra <span class="gradient-text-green">Disponibilidad</span>
            </h3>
            <p class="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Estamos ubicados en el corazón de la innovación digital, pero nuestro alcance es global. Nos adaptamos a tus necesidades, ya sea en persona o de forma remota.
            </p>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div class="bg-gradient-to-r from-brand-logo-blue/20 to-brand-teal-accent/20 border-brand-teal-accent/30 p-6 rounded-2xl">
                <MapPin class="w-12 h-12 text-brand-teal-accent mx-auto mb-4" />
                <h4 class="text-white font-bold mb-2">Reuniones en Persona</h4>
                <p class="text-gray-300 text-sm">Podemos coordinar reuniones en nuestras oficinas o en tu ubicación.</p>
              </div>
              <div class="bg-gradient-to-r from-brand-teal-accent/20 to-brand-logo-dark-blue/20 border-brand-teal-accent/30 p-6 rounded-2xl">
                <Globe class="w-12 h-12 text-brand-teal-accent mx-auto mb-4" />
                <h4 class="text-white font-bold mb-2">Colaboración Remota</h4>
                <p class="text-gray-300 text-sm">Trabajamos con clientes de todo el mundo a través de herramientas de colaboración.</p>
              </div>
              <div class="bg-gradient-to-r from-brand-logo-dark-blue/20 to-brand-logo-light-blue/20 border-brand-teal-accent/30 p-6 rounded-2xl">
                <Users class="w-12 h-12 text-brand-logo-light-blue mx-auto mb-4" />
                <h4 class="text-white font-bold mb-2">Proyectos Internacionales</h4>
                <p class="text-gray-300 text-sm">Tenemos experiencia en la gestión de proyectos a nivel internacional.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};