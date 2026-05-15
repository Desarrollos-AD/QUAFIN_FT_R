import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import "./Header.scss";
import trabajador from "../../assets/img/img_trabajador.webp";
import NavBar from "../NavBar/NavBar";
import Boton from "../ui/Boton/Boton";
import WhatsApp from "../ui/WhatssApp/WhatssApp";

const svgPaths = {
  formaHeader:
    "M1071.79 0H377.106C367.648 0 358.295 1.97291 349.643 5.79268L194 74.5065C185.348 78.3263 175.994 80.2992 166.537 80.2992H0V109H1440V80.2992H1280.64C1271.09 80.2992 1261.65 78.2867 1252.92 74.3928L1099.51 5.90639C1090.79 2.0125 1081.34 0 1071.79 0Z",
};

const fadeLeft = {
  hidden: { opacity: 0, x: -60 },
  show: { opacity: 1, x: 0, transition: { duration: 0.8 } },
};

const fadeRight = {
  hidden: { opacity: 0, x: 60 },
  show: { opacity: 1, x: 0, transition: { duration: 0.8 } },
};

const stagger = {
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const Header = () => {
  const { scrollYProgress } = useScroll();
  const yImage = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const yText = useTransform(scrollYProgress, [0, 1], [0, -40]);

  return (
    <header className="header__fondo">
      <div className="contenedor">
        <NavBar />

        <div className="header">
          <motion.div
            className="header__izquierda"
            variants={stagger}
            initial="hidden"
            animate="show"
            style={{ y: yText }}
          >
            <motion.h1 variants={fadeLeft}>
              Financiamiento responsable para empresas con visión
            </motion.h1>

            <motion.h4 variants={fadeLeft}>
              En Quafin, creamos estructuras financieras de alto impacto y
              relaciones de confianza para asegurar la estabilidad y el
              crecimiento de tu negocio a largo plazo.
            </motion.h4>

            <motion.div className="header__botones" variants={fadeLeft}>
              <motion.div whileHover={{ scale: 1.05 }}>
                <Boton
                  ruta="/#productos"
                  claseBtn="btn__primario"
                  texto="Explora nuestros servicios"
                />
              </motion.div>

              <motion.div whileHover={{ scale: 1.05 }}>
                <Boton
                  ruta="/contacto"
                  claseBtn="btn__secundario"
                  texto="Solicita tu crédito"
                />
              </motion.div>
            </motion.div>
          </motion.div>

          <motion.div
            className="header__derecha"
            variants={fadeRight}
            initial="hidden"
            animate="show"
            style={{ y: yImage }}
          >
            <motion.img
              src={trabajador}
              alt="Hombre negocios"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              whileHover={{ scale: 1.03 }}
            />
          </motion.div>
        </div>
      </div>

      <motion.div
        className="recorte__fondo"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <svg viewBox="0 0 1440 100" preserveAspectRatio="none">
          <motion.path
            d={svgPaths.formaHeader}
            fill="var(--fill-0, white)"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.5 }}
          />
        </svg>
      </motion.div>

      <WhatsApp />
    </header>
  );
};

export default Header;
