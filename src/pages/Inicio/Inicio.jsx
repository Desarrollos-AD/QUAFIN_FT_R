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

const instituciones = [
  {
    icono: cnbv,
    descripcion:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
  },
  {
    icono: conducef,
    descripcion:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
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
              <motion.div
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
                  <img
                    src={institucion.icono}
                    alt={`Icono ${institucion.icono}`}
                  />
                </motion.div>

                <motion.div
                  className="instituciones__institucion--descripcion"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{
                    delay: index * 0.2,
                    duration: 0.6,
                  }}
                >
                  {institucion.descripcion}
                </motion.div>
              </motion.div>
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
