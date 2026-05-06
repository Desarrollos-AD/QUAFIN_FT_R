import React from "react";
import FondoHeader from "../../components/ui/FondoHeader/FondoHeader";
import headerImg from "../../assets/img/contacto.jpg";
import CabeceraSection from "../../components/ui/CabeceraSection/CabeceraSection";

const Contacto = () => {
  return (
    <>
      <main>
        <FondoHeader
          imgFondo={headerImg}
          titulo={"Hablemos sobre tu necesidad "}
          subtitulo={
            "Nuestro equipo está disponible para brindarte información clara y orientación sobre nuestros productos financieros."
          }
        ></FondoHeader>

        <CabeceraSection
          titulo="¿Tienes Dudas?"
          subtitulo=" Estamos para ayudarte "
          descripcion="Si prefieres una atención más inmediata, puedes comunicarte con nosotros a través de los siguientes medios:"
        ></CabeceraSection>
      </main>

      {/* <Confianza /> */}
    </>
  );
};

export default Contacto;
