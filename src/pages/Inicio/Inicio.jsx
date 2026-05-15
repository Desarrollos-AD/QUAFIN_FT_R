import React from "react";
import "./Inicio.scss";
import Header from "../../components/Header/Header";
import WhatsApp from "../../components/ui/WhatssApp/WhatssApp";
import Productos from "../../components/Productos/Productos";
import NuestroEnfoque from "../../components/NuestroEnfoque/NuestroEnfoque";
import Confianza from "../../components/Confianza/Confianza";
import { motion } from "framer-motion";

import conducef from "../../assets/img/conducef.png";
import cnbv from "../../assets/img/cnbv.svg";
import buro from "../../assets/img/buro.jpg";
import { a } from "framer-motion/client";

const instituciones = [
  {
    url: "https://www.gob.mx/cnbv",
    icono: cnbv,
    descripcion:
      "Los productos financieros de Quafin están sujetos a evaluación y aprobación. Quafin, S.A. de C.V., SOFOM, E.N.R., no requiere autorización de la SHCP para operar y está sujeta a supervisión de la CNBV conforme al artículo 56 de la LGOAAC.",
  },
  {
    url: "https://www.condusef.gob.mx/",
    icono: conducef,
    descripcion:
      "Consulta nuestra información institucional en SIPRES CONDUSEF. Quafin no solicita pagos anticipados, acceso a dispositivos ni información confidencial por medios no oficiales. Toda comunicación se realiza únicamente a través de canales autorizados.",
  },
  {
    url: "https://www.buro.gob.mx/",
    icono: buro,
    descripcion:
      "Consulta la información de Quafin en el Buró de Entidades Financieras de CONDUSEF, donde podrás conocer información relacionada con nuestros productos, transparencia y desempeño institucional.",
  },
];

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 60,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
    },
  },
};

const stagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const Inicio = () => {
  return (
    <>
      <main>
        <Header />
        <WhatsApp />

        <section className="contenedor">
          <motion.div
            className="instituciones"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {instituciones.map((institucion, index) => (
              <motion.a
                href={institucion.url}
                className="instituciones__institucion"
                key={index}
                variants={fadeUp}
                whileHover={{
                  y: -10,
                  scale: 1.03,
                }}
                transition={{
                  duration: 0.3,
                }}
              >
                <motion.div
                  className="instituciones__institucion--logo"
                  whileHover={{
                    rotate: 5,
                    scale: 1.08,
                  }}
                >
                  <img src={institucion.icono} alt="" />
                </motion.div>
                <div className="instituciones__institucion--descripcion">
                  <p>{institucion.descripcion}</p>
                </div>
              </motion.a>
            ))}
          </motion.div>
        </section>

        <motion.div
          className="separador"
          initial={{
            scaleX: 0,
            opacity: 0,
          }}
          whileInView={{
            scaleX: 1,
            opacity: 1,
          }}
          transition={{
            duration: 1,
            ease: "easeInOut",
          }}
          viewport={{ once: true }}
          style={{ originX: 0 }}
        ></motion.div>

        <Productos />
      </main>

      <NuestroEnfoque />
      <Confianza />
    </>
  );
};

export default Inicio;
