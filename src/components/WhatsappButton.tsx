import React from 'react';
import { FloatingWhatsApp } from 'react-floating-whatsapp';

const WhatsAppButton = () => {
  return (
    <FloatingWhatsApp
      phoneNumber="+573245194228" // Reemplaza con tu número en formato internacional
      accountName="SoftDev Nexus"
      avatar="/perfil_nuevo.png" // Opcional: imagen de perfil (colócala en /public)
      statusMessage="Disponible"
      chatMessage="¡Hola! Gracias por comunicarte con Softdevnexus ¿En qué puedo ayudarte?"
      placeholder="Escribe tu mensaje..."
      allowEsc
      allowClickAway
      notification
      notificationDelay={60}
      darkMode={false}
    />
  );
};

export default WhatsAppButton;
