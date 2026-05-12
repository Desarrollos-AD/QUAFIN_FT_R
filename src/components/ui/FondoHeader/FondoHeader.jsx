import React from "react";
import { motion } from "framer-motion";

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
  const fadeUp = {
    hidden: {
      opacity: 0,
      y: 60,
    },
    visible: (delay = 0) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.9,
        delay,
        ease: "easeOut",
      },
    }),
  };

  return (
    <motion.header
      className="fondoHeader"
      style={{ backgroundImage: `url(${imgFondo})` }}
      initial={{ scale: 1.1, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{
        duration: 1.2,
        ease: "easeOut",
      }}
    >
      <motion.div
        className="fondoHeader__overlay"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 1.5,
        }}
      />

      <motion.div
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 0.8,
        }}
      ></motion.div>
      <NavBar />

      <div className="fondoHeader__contenido">
        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.2}
        >
          {titulo}
        </motion.h1>

        <motion.h4
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.5}
        >
          {subtitulo}
        </motion.h4>

        {texto && (
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.8}
            whileHover={{
              scale: 1.05,
            }}
            whileTap={{
              scale: 0.95,
            }}
          >
            <Boton ruta={ruta} claseBtn={claseBtn} texto={texto} />
          </motion.div>
        )}
      </div>

      <motion.div
        className="fondoHeader__blur"
        animate={{
          x: [0, 30, 0],
          y: [0, -20, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </motion.header>
  );
};

export default FondoHeader;
