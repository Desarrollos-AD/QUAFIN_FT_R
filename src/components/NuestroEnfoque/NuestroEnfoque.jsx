import React from "react";
import "./NuestroEnfoque.scss";
import Boton from "../ui/Boton/Boton";
import operadora from "../../assets/img/img_operadora.jpg";
import doctores from "../../assets/img/img_doctores.jpg";
import obra from "../../assets/img/img_obra.jpg";
import banco from "../../assets/img/banco.png";

const NuestroEnfoque = () => {
  return (
    <section className="nuestoEnfoque">
      <div className="contenedor">
        <div className="enfoque">
          <div className="enfoque__imagenes">
            <img src={operadora} alt="Imagen operadora" />
            <img src={doctores} alt="Imagen doctores" />
            <img src={obra} alt="Imagen obra" />
          </div>
          <div className="enfoque__descripcion">
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
              <Boton
                ruta="/sobre-nosotros"
                claseBtn="btn__secundario"
                texto="¿Quiénes somos? "
              />
            </div>
          </div>
        </div>

        <div className="porque">
          <div className="contenedor">
            <div className="porque__contenedor">
              <div className="porque__contenedor--descripcion">
                <h2>¿Por qué elegir Quafin?</h2>
                <p>
                  Porque otorgamos productos y servicios financieros que merecen
                  un aliado de confianza.
                </p>
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
              </div>
              <div className="porque__contenedor--img">
                <img src={banco} alt="Imagen banco" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NuestroEnfoque;
