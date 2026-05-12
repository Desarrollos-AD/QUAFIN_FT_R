import React from "react";
import NavBar from "../../NavBar/NavBar";
import Boton from "../Boton/Boton";
import "./FondoHeader.scss";

const FondoHeader = ({
  imgFondo,
  titulo,
  subtitulo,
  ruta,
  claseBtn,
  texto,
}) => {
  return (
    <header
      className="fondoHeader"
      style={{ backgroundImage: `url(${imgFondo})` }}
    >
      <NavBar />

      <div className="fondoHeader__contenido">
        <h1>{titulo}</h1>
        <h4>{subtitulo}</h4>
        <Boton ruta={ruta} claseBtn={claseBtn} texto={texto} />
      </div>
    </header>
  );
};

export default FondoHeader;
