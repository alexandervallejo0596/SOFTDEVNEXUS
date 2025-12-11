import React from 'react';
import { FloatingWhatsApp } from 'react-floating-whatsapp';

const WhatsAppButton = () => {

  return (
    <FloatingWhatsApp
      phoneNumber="+573245194228"
      accountName={'SoftDev Nexus'}
      avatar="/perfil_nuevo.png"
      statusMessage={'En línea'}
      chatMessage={'¡Hola! ¿En qué podemos ayudarte?'}
      placeholder={'Escribe un mensaje...'}
      allowEsc
      allowClickAway
      notification
      notificationDelay={60}
      darkMode={false}
    />
  );
};

export default WhatsAppButton;
