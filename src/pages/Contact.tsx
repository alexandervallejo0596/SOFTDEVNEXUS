import React, { useState, useEffect, useRef } from 'react';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle, User, MessageSquare, ArrowRight, Globe, Users, XCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import emailjs from '@emailjs/browser';

export const Contact: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    country: '',
    phone: '',
    message: ''
  });
  const navigate = useNavigate();
  const form = useRef<HTMLFormElement>(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.current) return;
    setIsSubmitting(true);

    // Use emailjs.send instead of sendForm for more robust submission
    emailjs.send('service_qrx5fjf', 'template_yb41bsm', formData, 'ozzuEiUYlTlsP62w-')
      .then((result) => {
          console.log('Admin email sent successfully:', result.text);

          // Also, send the auto-response email to the user who filled the form
          emailjs.send('service_qrx5fjf', 'template_l8inkyo', formData, 'ozzuEiUYlTlsP62w-')
            .then((response) => {
              console.log('Auto-response email sent successfully:', response.text);
            }, (err) => {
              console.error('Failed to send auto-response email:', err.text);
            });
          
          setSubmissionStatus('success');
          setIsSubmitting(false);
          setTimeout(() => {
            navigate('/');
        }, 4000);
      }, (error) => {
          console.error('Failed to send admin email:', error.text);
          setSubmissionStatus('error');
          setIsSubmitting(false);
      });
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
      title: 'Teléfono / WhatsApp',
      details: '+57 324 519 4228',
      description: 'Llámanos o escríbenos para una respuesta más rápida.',
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

  if (submissionStatus !== 'idle') {
    const isSuccess = submissionStatus === 'success';
    return (
      <div className="min-h-screen bg-white text-gray-800 flex items-center justify-center relative overflow-hidden">
        <div className="text-center animate-bounce-in relative z-20 p-4">
          <div className={`w-24 h-24 bg-gradient-to-r ${isSuccess ? 'from-blue-600 to-teal-500' : 'from-red-500 to-orange-500'} rounded-full flex items-center justify-center mx-auto mb-8 shadow-lg`}>
            {isSuccess ? <CheckCircle className="w-12 h-12 text-white" /> : <XCircle className="w-12 h-12 text-white" />}
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            {isSuccess ? '¡Mensaje Enviado con Éxito!' : '¡Hubo un Error!'}
          </h2>
          <p className="text-xl text-gray-600 mb-6">
            {isSuccess ? 'Gracias por contactarnos. Hemos enviado una confirmación a tu correo.' : 'No se pudo enviar tu mensaje. Por favor, inténtalo de nuevo más tarde.'}
          </p>
          <button 
            onClick={() => isSuccess ? navigate('/') : setSubmissionStatus('idle')} 
            className={`text-white px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg ${isSuccess ? 'bg-gradient-to-r from-blue-600 to-teal-500 hover:from-blue-700 hover:to-teal-600' : 'bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600'}`}>
            {isSuccess ? 'Volver al Inicio' : 'Intentar de Nuevo'}
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white text-gray-800 overflow-hidden relative">
        <section className="relative py-20 bg-gray-50">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
                <div className="bg-white rounded-3xl p-8 md:p-12 animate-fade-in-up shadow-lg">
                    <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                        Envíanos <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-400">un Mensaje</span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Completa el formulario y te enviaremos una respuesta a tu correo electrónico a la brevedad.
                    </p>
                    </div>

                    <form ref={form} onSubmit={handleSubmit} className="space-y-8">
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
                            País
                        </label>
                        <input
                            type="text"
                            id="country"
                            name="country"
                            value={formData.country}
                            onChange={handleInputChange}
                            className="w-full px-6 py-4 bg-gray-100 border-transparent rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 text-gray-900 placeholder-gray-500"
                            placeholder="País de Residencia"
                        />
                        </div>
                        <div className="space-y-2">
                        <label htmlFor="phone" className="flex items-center text-sm font-medium text-gray-700 mb-3">
                            <Phone className="w-4 h-4 mr-2" />
                            Teléfono
                        </label>
                        <input
                            type="tel"
                            id="phone"
                            name="phone"
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
    </div>
  );
};
