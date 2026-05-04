import React from "react";
import { FloatingWhatsApp } from "react-floating-whatsapp";
import avatar from "../../../assets/img/img_avatar.png";

const WhatsApp = () => {
  return (
    <div>
      <FloatingWhatsApp
        phoneNumber="123456789"
        accountName="Atención al cliente"
        allowEsc
        allowClickAway
        notification="true"
        notificationSound
        statusMessage="En linea"
        avatar={avatar}
        chatMessage="¡Hola! ¿Tienes alguna duda sobré nuestros productos?  
1.-Crédito de nómina               2.-Crédito simple empresarial "
      />
    </div>
  );
};

export default WhatsApp;
