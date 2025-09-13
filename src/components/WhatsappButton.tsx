import React from 'react';
import { FloatingWhatsApp } from 'react-floating-whatsapp';

const WhatsAppButton = () => {

  return (
    <FloatingWhatsApp
      phoneNumber="+573245194228"
      accountName={'whatsapp.accountName'}
      avatar="/perfil_nuevo.png"
      statusMessage={'whatsapp.statusMessage'}
      chatMessage={'whatsapp.chatMessage'}
      placeholder={'whatsapp.placeholder'}
      allowEsc
      allowClickAway
      notification
      notificationDelay={60}
      darkMode={false}
    />
  );
};

export default WhatsAppButton;
