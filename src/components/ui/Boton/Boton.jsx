import React from "react";
import "./Boton.scss";

const Boton = ({ ruta, claseBtn, texto }) => {
  return (
    <a href={ruta} className={claseBtn}>
      {texto}
    </a>
  );
};

export default Boton;
