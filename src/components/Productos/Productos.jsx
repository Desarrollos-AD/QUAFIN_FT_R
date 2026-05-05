import React from "react";
import CabeceraSection from "../ui/CabeceraSection/CabeceraSection";
import Boton from "../ui/Boton/Boton";
import "./Productos.scss";

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

const Productos = () => {
  return (
    <section className="contenedor">
      <CabeceraSection
        titulo="Productos"
        subtitulo="¿Qué necesita financiar?"
        descripcion="Tenemos el crédito para ti, ya seas empleado o dueño de un negocio."
      />

      <div className="productos">
        {prod.map((producto) => (
          <div className="card" key={producto.id}>
            <div className="card__header">
              <div className="card__header--icono"></div>
              <p className="card__header--finalidad btn__primario">
                {producto.tipoProducto}
              </p>
            </div>

            <div className="card__contenido">
              <h2>{producto.nombreProducto}</h2>
              <p>{producto.descripcion}</p>

              <div className="card__contenido--monto">
                <p>Monto disponible</p>
                <h2>
                  ${producto.montoMinimo} - ${producto.montoMaximo}
                </h2>
              </div>
              <div className="separadorLinea__negativo"></div>

              <div className="card__caracteristicas">
                <div className="card__caracteristicas--item">
                  <p>Plazo</p>
                  <p>{producto.plazo}</p>
                </div>
                <div className="card__caracteristicas--item">
                  <p>Pago</p>
                  <p>{producto.pago}</p>
                </div>
                <div className="card__caracteristicas--item">
                  <p>Tasa de interés</p>
                  <p>{producto.tasa}</p>
                </div>
                <div className="card__caracteristicas--item">
                  <p>Destino</p>
                  <p>{producto.destino}</p>
                </div>
                <div className="card__caracteristicas--item">
                  <p>Aval o garantía</p>
                  <p>{producto.garantia}</p>
                </div>
                <div className="card__caracteristicas--item">
                  <p>Cobertura</p>
                  <p>{producto.cobertura}</p>
                </div>
              </div>

              <div className="separadorLinea__negativo"></div>

              <div className="card__requisitos">
                <h5>Requisitos Principales</h5>
                <ul>
                  {producto.requisitos.map((requisito, i) => (
                    <li key={i}>
                      <span> {requisito}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="importante">
                <p>Importante:</p>
                <p className="importante__mensaje">{producto.importante}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Productos;
