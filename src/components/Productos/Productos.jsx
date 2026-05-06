import React from "react";
import CabeceraSection from "../ui/CabeceraSection/CabeceraSection";
import Boton from "../ui/Boton/Boton";
import "./Productos.scss";
import { motion } from "framer-motion";

const prod = [
  {
    tipoProducto: "Para empleados",
    nombreProducto: "Crédito de nómina",
    descripcion: "Dinero en tu cuenta, rápido y sin complicaciones.",
    montoMinimo: "1,000",
    montoMaximo: "30,000",
    plazo: "3 a 18 meses",
    pago: "Semanal, quincenal o mensual",
    tasa: "Fija desde 36% anual",
    destino: "Libre (Para lo que necesites)",
    garantia: "Aval o garantía",
    cobertura: "Estado de Veracruz",
    requisitos: [
      "Ser empleado de 18 a 65 años",
      "Mínimo 12 meses trabajando",
      "Ingreso mensual desde $8,000",
      "Buen historial crediticio",
      "INE, comprobante de domicilio y recibo de nómina",
    ],
    importante:
      "La documentación deberá presentarse en físico al momento de solicitar el crédito.",
  },
  {
    tipoProducto: "Para empresas",
    nombreProducto: "Crédito de simple",
    descripcion: "Capital para hacer crecer tu negocio.",
    montoMinimo: "100,000",
    montoMaximo: "2,000,000",
    plazo: "3 a 60 meses",
    pago: "Mensual",
    tasa: "Fija desde 36% anual",
    destino: "Libre (Para lo que necesites)",
    garantia: "No se requiere",
    cobertura: "Estado de Veracruz",
    requisitos: [
      "Empresa con mínimo 2 años de operación",
      "Ingreso mensual desde $200,000",
      "Buen historial crediticio",
      "Acta constitutiva, estados financieros y RFC",
      "Garantía (líquida, real o hipotecaria)",
    ],
    importante:
      "La documentación deberá presentarse en físico al momento de solicitar el crédito.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

const stagger = {
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const Productos = () => {
  return (
    <section className="contenedor">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <CabeceraSection
          titulo="Productos"
          subtitulo="¿Qué necesita financiar?"
          descripcion="Tenemos el crédito para ti, ya seas empleado o dueño de un negocio."
        />
      </motion.div>

      <motion.div
        className="productos"
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        {prod.map((producto, index) => (
          <motion.div
            className="card"
            key={index}
            variants={fadeUp}
            whileHover={{
              y: -10,
              scale: 1.02,
              transition: { type: "spring", stiffness: 200 },
            }}
          >
            <div className="card__header">
              <div className="card__header--icono"></div>

              <motion.p
                className="card__header--finalidad btn__primario"
                whileHover={{ scale: 1.05 }}
              >
                {producto.tipoProducto}
              </motion.p>
            </div>

            <div className="card__contenido">
              <motion.h2 variants={fadeUp}>{producto.nombreProducto}</motion.h2>

              <motion.p variants={fadeUp}>{producto.descripcion}</motion.p>

              <motion.div className="card__contenido--monto" variants={fadeUp}>
                <p>Monto disponible</p>
                <h2>
                  ${producto.montoMinimo} - ${producto.montoMaximo}
                </h2>
              </motion.div>

              <div className="separadorLinea__negativo"></div>

              <motion.div className="card__caracteristicas" variants={stagger}>
                {[
                  ["Plazo", producto.plazo],
                  ["Pago", producto.pago],
                  ["Tasa de interés", producto.tasa],
                  ["Destino", producto.destino],
                  ["Aval o garantía", producto.garantia],
                  ["Cobertura", producto.cobertura],
                ].map(([label, value], i) => (
                  <motion.div
                    key={i}
                    className="card__caracteristicas--item"
                    variants={fadeUp}
                    whileHover={{ x: 5 }}
                  >
                    <p>{label}</p>
                    <p>{value}</p>
                  </motion.div>
                ))}
              </motion.div>

              <div className="separadorLinea__negativo"></div>

              <motion.div className="card__requisitos" variants={fadeUp}>
                <h5>Requisitos Principales</h5>

                <ul>
                  {producto.requisitos.map((requisito, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05 }}
                      viewport={{ once: true }}
                    >
                      <span>{requisito}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>

              <motion.div className="importante" variants={fadeUp}>
                <p>Importante:</p>
                <p className="importante__mensaje">{producto.importante}</p>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Productos;
