import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle, User, MessageSquare, ArrowRight, Globe, Users } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export const Contact: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const navigate = useNavigate();

  useEffect(() => {
    setIsVisible(true);

    // Create floating code elements
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
  const response = await fetch('https://softdevnexus.com/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setIsSubmitted(true);
        setIsSubmitting(false);
        setTimeout(() => {
          setIsSubmitted(false);
          setFormData({ name: '', email: '', message: '' });
        }, 3000);
      } else {
        setIsSubmitting(false);
        alert('Hubo un error al enviar el mensaje. Intenta nuevamente.');
      }
    } catch {
      setIsSubmitting(false);
      alert('Hubo un error al enviar el mensaje. Intenta nuevamente.');
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email Corporativo',
      details: 'contacto@softdevnexus.com',
      description: 'Respuesta garantizada en menos de 2 horas',
      color: 'from-green-500 to-cyan-500'
    },
    {
      icon: Phone,
      title: 'Teléfono Directo',
      details: '+57 312 454 9040',
      description: 'Lunes a viernes de 9:00 AM a 7:00 PM',
      color: 'from-cyan-500 to-blue-500'
    },
    {
      icon: MapPin,
      title: 'Ubicación',
      details: 'Colombia',
      description: 'Servicio presencial y remoto disponible',
      color: 'from-blue-500 to-purple-500'
    },
    {
      icon: Clock,
      title: 'Horarios de Atención',
      details: 'Lun - Vie: 9:00 AM - 7:00 PM',
      description: 'Sábados: 10:00 AM - 3:00 PM',
      color: 'from-purple-500 to-green-500'
    }
  ];

  const benefits = [
    'Consulta inicial gratuita',
    'Propuesta detallada en 24 horas',
    'Precios transparentes sin sorpresas',
    'Garantía de satisfacción 100%'
  ];

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-dark-gradient text-white flex items-center justify-center relative overflow-hidden">
        {/* Floating Code Container */}
        <div className="floating-code-container fixed inset-0 pointer-events-none z-10"></div>
        
        {/* Particles Container */}
        <div className="particles-container fixed inset-0 pointer-events-none z-10"></div>

        {/* Animated Background */}
        <div className="fixed inset-0 animated-dark-bg">
          <div className="absolute inset-0 cyber-grid opacity-30"></div>
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-green-500/10 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        </div>

        <div className="text-center animate-bounce-in relative z-20">
          <div className="w-24 h-24 bg-gradient-to-r from-green-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-8 animate-pulse-glow">
            <CheckCircle className="w-12 h-12 text-white" />
          </div>
          <h2 className="text-4xl font-bold text-white mb-4 neon-glow">¡Mensaje enviado exitosamente!</h2>
          <p className="text-xl text-gray-300 mb-6">
            Gracias por contactarnos. Te responderemos en menos de 2 horas.
          </p>
          <div className="text-green-400 font-medium neon-glow">
            Redirigiendo automáticamente...
          </div>
        </div>
      </div>
    );
  }

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
              <MessageSquare className="w-4 h-4 mr-2" />
              Contacto Directo con Expertos
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              <span className="text-white">Hablemos de tu</span>
              <br />
              <span className="gradient-text-green animate-text-glow">proyecto</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              ¿Tienes un proyecto en mente? Nos encantaría conocer los detalles y ayudarte a 
              convertir tu visión en una realidad digital extraordinaria que impulse tu negocio.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="relative py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {contactInfo.map((info, index) => (
              <div 
                key={index} 
                className="glass p-8 rounded-2xl text-center hover-lift card-hover animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`w-20 h-20 bg-gradient-to-r ${info.color} rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 animate-pulse-glow`}>
                  <info.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{info.title}</h3>
                <p className="text-lg text-green-300 font-semibold mb-3 neon-glow">{info.details}</p>
                <p className="text-gray-300 text-sm leading-relaxed">{info.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="relative py-20 code-bg">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
          <div className="glass rounded-3xl p-8 md:p-12 animate-fade-in-up">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Cuéntanos sobre tu <span className="gradient-text-green">proyecto</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Completa el formulario y te contactaremos para una consulta gratuita personalizada
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Personal Information */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="flex items-center text-sm font-medium text-gray-300 mb-3">
                    <User className="w-4 h-4 mr-2" />
                    Nombre completo *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-6 py-4 bg-gray-800/50 border border-green-500/30 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-300 text-white placeholder-gray-400"
                    placeholder="Tu nombre completo"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="flex items-center text-sm font-medium text-gray-300 mb-3">
                    <Mail className="w-4 h-4 mr-2" />
                    Email corporativo *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-6 py-4 bg-gray-800/50 border border-green-500/30 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-300 text-white placeholder-gray-400"
                    placeholder="tu@empresa.com"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="flex items-center text-sm font-medium text-gray-300 mb-3">
                  <MessageSquare className="w-4 h-4 mr-2" />
                  Descripción detallada del proyecto *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-6 py-4 bg-gray-800/50 border border-green-500/30 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-300 resize-none text-white placeholder-gray-400"
                  placeholder="Cuéntanos más detalles sobre tu proyecto: objetivos, funcionalidades necesarias, público objetivo, referencias de diseño, etc. Mientras más información nos proporciones, mejor podremos ayudarte."
                />
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-gradient-to-r from-green-500 to-cyan-500 text-white px-12 py-5 rounded-full text-lg font-bold hover:from-green-600 hover:to-cyan-600 transition-all duration-300 transform hover:scale-105 btn-glow flex items-center justify-center space-x-3 mx-auto disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span>Enviando mensaje<span className="loading-dots"></span></span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>Enviar mensaje</span>
                      <ArrowRight className="w-5 h-5 animate-arrow" />
                    </>
                  )}
                </button>
                <p className="text-sm text-gray-400 mt-6">
                  * Te responderemos en menos de 2 horas durante horario laboral
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="relative py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
          <div className="text-center mb-16 animate-fade-in-up">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
              ¿Por qué elegir <span className="gradient-text-green">SoftDev Nexus?</span>
            </h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div 
                key={index} 
                className="flex items-center space-x-4 glass p-6 rounded-xl animate-fade-in-up hover-lift"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CheckCircle className="w-8 h-8 text-green-400 flex-shrink-0" />
                <span className="text-white font-medium">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="relative py-20 bg-gradient-to-r from-green-900/30 to-cyan-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
          <div className="glass rounded-3xl p-12 text-center animate-fade-in-up">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Trabajamos en toda <span className="gradient-text-green">Colombia</span>
            </h3>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Ofrecemos nuestros servicios de desarrollo web de forma remota en todo el país 
              y presencial en las principales ciudades. ¡También atendemos clientes internacionales!
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gradient-to-r from-green-500/20 to-cyan-500/20 border border-green-500/30 p-6 rounded-2xl">
                <MapPin className="w-12 h-12 text-green-400 mx-auto mb-4" />
                <h4 className="text-white font-bold mb-2">Servicio Presencial</h4>
                <p className="text-gray-300 text-sm">Principales ciudades de Colombia</p>
              </div>
              <div className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 p-6 rounded-2xl">
                <Globe className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                <h4 className="text-white font-bold mb-2">Servicio Remoto</h4>
                <p className="text-gray-300 text-sm">Todo el territorio colombiano</p>
              </div>
              <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 p-6 rounded-2xl">
                <Users className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                <h4 className="text-white font-bold mb-2">Clientes Internacionales</h4>
                <p className="text-gray-300 text-sm">Estados Unidos, España, México</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
  {/* Se eliminó el espacio vacío para que el contenido llegue al footer */}
    </div>
  );
};