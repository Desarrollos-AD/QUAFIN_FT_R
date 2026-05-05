import React from "react";
import "./CabeceraSection.scss";

const CabeceraSection = ({titulo, subtitulo, descripcion}) => {
  return (

    <div className="cabecera">
        <h2>{titulo}</h2>
        <h3>{subtitulo}</h3>
        <p>{descripcion}</p>
    </div>
  );
};

export default CabeceraSection;
