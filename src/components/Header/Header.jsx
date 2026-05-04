import React from "react";
import "./Header.scss";
import persona from "../../assets/img/persona_header.png";
import NavBar from "../NavBar/NavBar";
import Boton from "../ui/Boton/Boton";

const svgPaths = {
  p238303e0:
    "M1063.42 0H376.576C365.685 0 354.953 2.61605 345.283 7.62802L194.717 85.6712C185.047 90.6832 174.315 93.2992 163.424 93.2992H0V190H1440V93.2992H1276.58C1265.68 93.2992 1254.95 90.6832 1245.28 85.6712L1094.72 7.62802C1085.05 2.61605 1074.32 0 1063.42 0Z",
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
              <Boton ruta="/servicios" claseBtn="btn__primario" texto="Explora nuestros servicios" />
              <Boton ruta="/contacto" claseBtn="btn__secundario" texto="Solicita tu crédito" />
            </div>
          </div>
          <div className="header__derecha">
            <img src={persona} alt="Hombre negocios" />
          </div>
        </div>
      </div>
      <div className="recorte__fondo">
        <div className="relative size-full">
          <svg
            className="absolute block inset-0 size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 1440 190"
          >
            <path
              d={svgPaths.p238303e0}
              fill="var(--fill-0, white)"
              id="Vector 5"
            />
          </svg>
        </div>
      </div>
    </header>
  );
};

export default Header;
