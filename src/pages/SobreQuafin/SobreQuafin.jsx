import React from "react";
import NavBar from "../../components/NavBar/NavBar";
import FondoHeader from "../../components/ui/FondoHeader/FondoHeader";
import CabeceraSection from "../../components/ui/CabeceraSection/CabeceraSection";
import headerImg from "../../assets/img/sobreQuafin.jpg";
import "./SobreQuafin.scss";

import contador from "../../assets/img/contador.jpg";
import construccion from "../../assets/img/construccion.jpg";
import junta from "../../assets/img/junta.jpg";
import imgVision from "../../assets/img/imgVision.jpg";
import imgMision from "../../assets/img/imgMision.jpg";
import imgCierreNegocio from "../../assets/img/cierreNegocio.jpg";
import { motion } from "framer-motion";

const quienesSomos = [
  {
    icono: (
      <svg
        width="45"
        height="40"
        viewBox="0 0 45 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M33.8568 38.8724H21.2114C20.3752 38.8724 19.6817 38.2471 19.6817 37.493C19.6817 36.7389 20.3752 36.1136 21.2114 36.1136H33.8568C36.0392 36.1136 38.1807 34.4765 38.5479 32.5269L41.2605 17.8867C41.5053 16.5625 40.6896 14.6679 39.5475 13.8402L25.413 3.651C23.7813 2.47389 21.0687 2.47387 19.4574 3.63259L5.32314 13.8402C4.16058 14.6863 3.36514 16.5625 3.60989 17.8867L4.18097 20.9949C4.32374 21.7489 3.75268 22.4662 2.91645 22.5766C2.08023 22.7237 1.30521 22.1904 1.16243 21.4363L0.591352 18.3465C0.16304 16.0659 1.38681 13.1415 3.40599 11.6885L17.5403 1.48061C20.2732 -0.505767 24.5767 -0.487356 27.3302 1.49902L41.4645 11.6885C43.4633 13.1415 44.687 16.0659 44.2791 18.3465L41.5665 32.9867C40.9546 36.2421 37.5077 38.8724 33.8568 38.8724Z"
          fill="#4361EE"
        />
        <path
          d="M8.15865 39.2219C7.32242 39.2219 6.64935 38.6149 6.62896 37.8792C6.56777 35.3963 4.75257 33.7593 1.99913 33.7042C1.1629 33.6858 0.489821 33.0604 0.510217 32.288C0.530613 31.5339 1.20367 30.9453 2.0399 30.9453H2.08067C6.46577 31.0373 9.60675 33.8513 9.68833 37.8057C9.70873 38.5597 9.03564 39.2035 8.19942 39.2219C8.17902 39.2219 8.17904 39.2219 8.15865 39.2219Z"
          fill="#4361EE"
        />
        <path
          d="M14.2774 39.222C13.4411 39.222 12.7477 38.6151 12.7477 37.861C12.7273 36.6471 12.5029 35.4884 12.095 34.4032C11.0548 31.7179 8.83167 29.7314 5.85389 28.775C4.65053 28.3887 3.3656 28.1866 2.01947 28.1866C1.18325 28.1866 0.489809 27.5612 0.510204 26.7888C0.510204 26.0347 1.20366 25.4277 2.03989 25.4277H2.06029C3.75314 25.4461 5.36439 25.7036 6.87368 26.1818C10.7285 27.4141 13.6043 30.0074 14.9708 33.4836C15.5011 34.8446 15.7866 36.316 15.8071 37.8242C15.8071 38.5967 15.134 39.222 14.2774 39.222Z"
          fill="#4361EE"
        />
        <path
          d="M2.03958 39.6818C0.897416 39.6818 0 38.8541 0 37.8425C0 36.831 0.917811 36.0033 2.03958 36.0033C3.16135 36.0033 4.07916 36.831 4.07916 37.8425C4.07916 38.8541 3.18175 39.6818 2.03958 39.6818Z"
          fill="#4361EE"
        />
      </svg>
    ),

    descripcion:
      "Actuamos como un aliado estratégico, priorizando relaciones de largo plazo, operaciones sólidamente estructuradas y un crecimiento ordenado. Nos regimos por principios de responsabilidad, transparencia y disciplina financiera, con el objetivo de generar confianza y valor sostenible en cada relación.",
  },
  {
    icono: (
      <svg
        width="45"
        height="46"
        viewBox="0 0 45 46"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M42.7378 15.62V30.2979C42.7378 32.7013 41.3761 34.933 39.1746 36.1562L25.6934 43.5166C23.4919 44.7183 20.7685 44.7183 18.5443 43.5166L5.06321 36.1562C2.86173 34.9545 1.5 32.7227 1.5 30.2979V15.62C1.5 13.2166 2.86173 10.9848 5.06321 9.76166L18.5443 2.40127C20.7458 1.19958 23.4692 1.19958 25.6934 2.40127L39.1746 9.76166C41.3761 10.9848 42.7378 13.1952 42.7378 15.62Z"
          stroke="#4361EE"
          stroke-width="3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M22.1303 20.8134C25.051 20.8134 27.4183 18.5747 27.4183 15.8133C27.4183 13.0519 25.051 10.8135 22.1303 10.8135C19.2098 10.8135 16.8423 13.0519 16.8423 15.8133C16.8423 18.5747 19.2098 20.8134 22.1303 20.8134Z"
          stroke="#4361EE"
          stroke-width="3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M31.2087 32.9592C31.2087 29.0966 27.1462 25.9636 22.1305 25.9636C17.1148 25.9636 13.0522 29.0966 13.0522 32.9592"
          stroke="#4361EE"
          stroke-width="3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    ),

    descripcion:
      "Nuestro compromiso es impulsar el crecimiento y la estabilidad financiera de nuestros clientes mediante productos financieros , brindando atención cercana, claridad en cada proceso y un acompañamiento profesional. ",
  },
];
const funciones = [
  {
    title: "Nuestra Misión",
    descripcion:
      "Contribuir con productos adaptables, manteniendo un equilibrio entre el bienestar social y el crecimiento de las cadenas productivas en un entorno próspero.",
    img: imgMision,
  },
  {
    title: "Nuestra Visión",
    descripcion:
      "Ser la empresa promotora de cambio, distinguiéndonos por otorgar productos de manera ágil, eficiente y confiable, para el crecimiento y desarrollo de las cadenas productivas y sociales de nuestro país.",
    img: imgVision,
  },
];
const valores = [
  {
    valor: "Confianza",
    descripcion: "La base de toda relación financiera sólida.",
  },
  {
    valor: "Responsabilidad financiera",
    descripcion:
      "Otorgamos crédito con criterio, análisis y conciencia del impacto.",
  },
  {
    valor: "Formalidad",
    descripcion:
      "Operamos bajo estrictos estándares legales, fiscales y contractuales.",
  },
  {
    valor: "Transparencia",
    descripcion:
      "Condiciones claras, información precisa y comunicación directa.",
  },
  {
    valor: "Disciplina",
    descripcion:
      "En la organización, administración y Recuperación del crédito.",
  },
  {
    valor: "Compromiso empresarial",
    descripcion:
      "Creemos en las empresas formales como motor del desarrollo económico.",
  },
];

const SobreQuafin = () => {
  const fadeUp = {
    hidden: {
      opacity: 0,
      y: 80,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
      },
    },
  };

  const stagger = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };
  return (
    <>
      <main>
        <FondoHeader
          imgFondo={headerImg}
          titulo={"Sobre Quafin"}
          subtitulo={"En Quafin ofrecemos servicios financieros orientados..."}
          ruta={"/sobre-Quafin"}
          claseBtn={"btn__primario"}
          texto={"Contáctenos"}
        />

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <CabeceraSection titulo="Conócenos" />
        </motion.div>

        <section className="contenedor">
          <div className="quienesSomos">
            <motion.div
              className="quines"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <h2>¿Quiénes somos?</h2>

              <p>
                En Quafin somos una Sociedad Financiera de Objeto Múltiple,
                Entidad No Regulada (SOFOM, E.N.R.), nos especializamos en
                ofrecer financiamiento empresarial y préstamo de nómina, para
                atender las necesidades de empresas y trabajadores.
              </p>

              <motion.div
                className="quines__cards"
                variants={stagger}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {quienesSomos.map((info) => (
                  <motion.div
                    className="quines__card"
                    key={info.descripcion}
                    variants={fadeUp}
                    whileHover={{
                      y: -10,
                      scale: 1.02,
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="quines__card--icono">{info.icono}</div>

                    <div className="quines__card--descripcion">
                      <p>{info.descripcion}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            <motion.div
              className="imagenes"
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.div className="imagenes__primaria" variants={fadeUp}>
                <img src={junta} alt="Imagen Junta" />
              </motion.div>

              <motion.div className="imagenes__secundarias" variants={stagger}>
                <motion.img
                  src={construccion}
                  alt="Imagen Construcción"
                  variants={fadeUp}
                  whileHover={{ scale: 1.03 }}
                />

                <motion.img
                  src={contador}
                  alt="Imagen contador"
                  variants={fadeUp}
                  whileHover={{ scale: 1.03 }}
                />
              </motion.div>
            </motion.div>
          </div>

          <motion.div
            className="cardsValoresContainer"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {funciones.map((funcion) => (
              <motion.div
                className="cardsValores"
                key={funcion.title}
                variants={fadeUp}
                whileHover={{
                  y: -12,
                  scale: 1.02,
                }}
              >
                <div className="cardsValores__img">
                  <img src={funcion.img} alt="Imagen" />
                </div>

                <div className="cardsValores__descripcion">
                  <h3>{funcion.title}</h3>
                  <p>{funcion.descripcion}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </section>

        <motion.section
          className="nuestroObjetivos"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="contenedor">
            <div className="nuestroObjetivos__contenido">
              <motion.div
                className="nuestroObjetivos__contenido--descripcion"
                variants={fadeUp}
              >
                <h2>Nuestros Objetivos</h2>

                <p>
                  En Quafin, nos tomamos muy en serio el impulso de tus
                  proyectos. Por eso, te ofrecemos soluciones de financiamiento
                  profesionales y seguras, diseñadas tanto para personas que
                  trabajan como para empresas legalmente constituidas.
                </p>
                <p>
                  Nuestro compromiso es trabajar siempre conforme a las
                  normativas apricables a nuestra entidad, asegurándo la
                  transparencia de nuestras operaciones, para proteger tu
                  estabilidad financiera y asegurar tu patrimonio con contratos
                  claros.
                </p>
              </motion.div>

              <motion.div
                className="nuestroObjetivos__contenido--img"
                variants={fadeUp}
                whileHover={{
                  scale: 1.03,
                }}
              >
                <img src={imgCierreNegocio} alt="Imagen" />
              </motion.div>
            </div>
          </div>
        </motion.section>

        <section className="objetivos">
          <div className="contenedor">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <CabeceraSection
                titulo="NUESTROS VALORES"
                subtitulo="Soluciones financieras a tu medida"
                descripcion="Ofrecemos productos que se adaptan a las necesidades reales de las empresas y sobre todo de los trabajadores en México."
              />
            </motion.div>

            <motion.div
              className="valores"
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {valores.map((valor) => (
                <motion.div
                  className="valores__card"
                  key={valor.valor}
                  variants={fadeUp}
                  whileHover={{
                    y: -10,
                    scale: 1.03,
                  }}
                >
                  <h4>{valor.valor}</h4>
                  <p>{valor.descripcion}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      </main>
    </>
  );
};

export default SobreQuafin;
