import React from "react";
import "./Header.scss";
import trabajador from "../../assets/img/img_trabajador.png";
import NavBar from "../NavBar/NavBar";
import Boton from "../ui/Boton/Boton";
import WhatsApp from "../ui/WhatssApp/WhatssApp";

const svgPaths = {
  formaHeader:
    "M1071.79 0H377.106C367.648 0 358.295 1.97291 349.643 5.79268L194 74.5065C185.348 78.3263 175.994 80.2992 166.537 80.2992H0V109H1440V80.2992H1280.64C1271.09 80.2992 1261.65 78.2867 1252.92 74.3928L1099.51 5.90639C1090.79 2.0125 1081.34 0 1071.79 0Z",
};

const Header = () => {
  return (
    <header className="header__fondo">
      <div className="contenedor">
        <NavBar />

        <div className="header">
          <div className="header__izquierda">
            <h1>Financiamiento responsable para empresas con visión</h1>
            <h4>
              En Quafin, creamos estructuras financieras de alto impacto y
              relaciones de confianza para asegurar la estabilidad y el
              crecimiento de tu negocio a largo plazo.
            </h4>

            <div className="header__botones">
              <Boton
                ruta="/servicios"
                claseBtn="btn__primario"
                texto="Explora nuestros servicios"
              />
              <Boton
                ruta="/contacto"
                claseBtn="btn__secundario"
                texto="Solicita tu crédito"
              />
            </div>
          </div>
          <div className="header__derecha">
            <img src={trabajador} alt="Hombre negocios" />
          </div>
        </div>
      </div>
      <div className="recorte__fondo">
        <svg viewBox="0 0 1440 100" preserveAspectRatio="none">
          <path
            d={svgPaths.formaHeader}
            fill="var(--fill-0, white)"
            id="Vector 5"
          />
        </svg>
      </div>
    </header>

  );
};

export default Header;
