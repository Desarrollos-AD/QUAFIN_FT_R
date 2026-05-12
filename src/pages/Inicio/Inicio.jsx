import React from "react";
import "./Inicio.scss";
import Header from "../../components/Header/Header";
import WhatsApp from "../../components/ui/WhatssApp/WhatssApp";
import Productos from "../../components/Productos/Productos";
import NuestroEnfoque from "../../components/NuestroEnfoque/NuestroEnfoque";
import Confianza from "../../components/Confianza/Confianza";

const Inicio = () => {
  return (
    <>
      <main>
        <Header />
        <WhatsApp />
        <Productos />
      </main>

      <NuestroEnfoque />
      <Confianza />
    </>
  );
};

export default Inicio;
