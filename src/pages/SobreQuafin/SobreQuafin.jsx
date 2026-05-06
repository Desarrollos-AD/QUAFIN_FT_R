import React from "react";
import NavBar from "../../components/NavBar/NavBar";
import FondoHeader from "../../components/ui/FondoHeader/FondoHeader";
import headerImg from "../../assets/img/sobreQuafin.jpg";

const SobreQuafin = () => {
  return (
    <>
      <FondoHeader
        imgFondo={headerImg}
        titulo={"Sobre  Quafin"}
        subtitulo={
          "En Quafin ofrecemos servicios financieros orientados a impulsar el crecimiento de personas y empresas, incluyendo créditos de nómina y financiamiento empresarial, siempre bajo principios de responsabilidad, transparencia y disciplina financiera."
        }
        ruta={"/sobre-Quafin"}
        claseBtn={"btn__primario"}
        texto={"Contáctenos"}
      ></FondoHeader>
    </>
  );
};

export default SobreQuafin;
