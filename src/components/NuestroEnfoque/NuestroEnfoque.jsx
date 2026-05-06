import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import "./NuestroEnfoque.scss";
import Boton from "../ui/Boton/Boton";
import operadora from "../../assets/img/img_operadora.jpg";
import doctores from "../../assets/img/img_doctores.jpg";
import obra from "../../assets/img/img_obra.jpg";
import banco from "../../assets/img/banco.png";

const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8 },
  },
};

const stagger = {
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const NuestroEnfoque = () => {
  return (
    <section className="nuestoEnfoque">
      <div className="contenedor">
        <motion.div
          className="enfoque"
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <motion.div className="enfoque__imagenes" variants={fadeUp}>
            {[operadora, doctores, obra].map((img, i) => (
              <motion.img
                key={i}
                src={img}
                alt="Imagen"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 200 }}
              />
            ))}
          </motion.div>

          <motion.div className="enfoque__descripcion" variants={fadeUp}>
            <h2>Nuestro enfoque</h2>
            <p>
              En Quafin, somos una Sociedad Financiera de Objeto Múltiple
              Entidad No Regulada (SOFOM, E.N.R.) de especialidad empresarial.
              Funcionamos como un aliado estratégico dedicado a ofrecer
              productos financieros a nuestros clientes.
            </p>

            <h3>Nuestra filosofía</h3>
            <p>
              En Quafin nuestra filosofia consiste en ofrecer condiciones reales
              y sostenibles. Buscamos relaciones duraderas con personas y
              empresas que requieren de nuestros productos y servicios
              financieros.
            </p>

            <div className="btn">
              <motion.div whileHover={{ scale: 1.05 }}>
                <Boton
                  ruta="/sobre-nosotros"
                  claseBtn="btn__secundario"
                  texto="¿Quiénes somos?"
                />
              </motion.div>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          className="porque"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <div className="contenedor">
            <div className="porque__contenedor">
              <motion.div
                className="porque__contenedor--descripcion"
                variants={stagger}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
              >
                <motion.h2 variants={fadeUp}>¿Por qué elegir Quafin?</motion.h2>

                <motion.p variants={fadeUp}>
                  Porque otorgamos productos y servicios financieros que merecen
                  un aliado de confianza.
                </motion.p>

                <motion.div
                  className="porque__contenedor--tags"
                  variants={fadeUp}
                >
                  <div className="porque__contenedor--tags">
                    <div className="tags">
                      <div className="tag">
                        <p>Aprobación Ágil</p>
                      </div>
                      <div className="tag">
                        <p>Soluciones Flexibles</p>
                      </div>
                    </div>
                    <div className="tags">
                      <div className="tag">
                        <p>Atención Personalizada</p>
                      </div>
                      <div className="tag">
                        <p>Rapidez</p>
                      </div>
                      <div className="tag">
                        <p>Condiciones Transparentes</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>

              <motion.div
                className="porque__contenedor--img"
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <motion.img
                  src={banco}
                  alt="Imagen banco"
                  whileHover={{ scale: 1.05 }}
                />
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default NuestroEnfoque;
