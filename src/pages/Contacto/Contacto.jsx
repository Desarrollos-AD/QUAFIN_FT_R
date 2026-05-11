import React from "react";
import FondoHeader from "../../components/ui/FondoHeader/FondoHeader";
import headerImg from "../../assets/img/contacto.jpg";
import CabeceraSection from "../../components/ui/CabeceraSection/CabeceraSection";
import Confianza from "../../components/Confianza/Confianza";
import "./Contacto.scss";
import Redes from "../../components/ui/Redes/Redes";

const Contacto = () => {
  return (
    <>
      <main>
        <FondoHeader
          imgFondo={headerImg}
          titulo={"Hablemos sobre tu necesidad "}
          subtitulo={
            "Nuestro equipo está disponible para brindarte información clara y orientación sobre nuestros productos financieros."
          }
        ></FondoHeader>

        <CabeceraSection
          titulo="¿Tienes Dudas?"
          subtitulo=" Estamos para ayudarte "
          descripcion="Si prefieres una atención más inmediata, puedes comunicarte con nosotros a través de los siguientes medios:"
        ></CabeceraSection>

        <div className="contenedor">
          <div className="cards">
            <div className="cards__card">
              <div className="cards__card--icono"></div>
              <div className="cards__card--informacion">
                <h5>Visítanos en: </h5>
                <p>
                  Quafin, S.A.P.I de C.V., SOFOM, E.N.R Calz. Simon Bolívar
                  #645, Zaragoza, 91910 Veracruz, Ver.
                </p>
              </div>
            </div>

            <div className="cards__card">
              <div className="cards__card--icono"></div>
              <div className="cards__card--informacion">
                <h5>Llámanos el nuestro número de atención: </h5>
                <p>+44 45 7200 8200</p>
              </div>
            </div>
          </div>

          <div className="ubicacion">
            <div className="ubicacion__mapa">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d19588.13399481863!2d-96.13688893295864!3d19.175160012797164!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85c34136a9c18491%3A0xd3d2024401bfe3f!2sCalz.%20Simon%20Bol%C3%ADvar%20629%2C%20Ignacio%20Zaragoza%2C%2091910%20Veracruz%2C%20Ver.!5e1!3m2!1ses-419!2smx!4v1778109841763!5m2!1ses-419!2smx"
                width="600"
                height="450"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <div className="ubicacion__formulario">
              <h3>Formulario de contacto</h3>
              <p>
                La información enviada a través de este formulario será
                utilizada únicamente para atender tu solicitud de contacto.
                Quafin no solicita información sensible ni datos financieros a
                través de este medio.
              </p>

              <form action="" className="form">
                <div className="form__campo">
                  <label htmlFor="nombre">
                    Nombre Completo<span className="form__requerido">*</span>:
                  </label>
                  <input
                    id="nombre"
                    className="form__campo--input"
                    type="text"
                    placeholder="Ingresa tu nombre con apellidos"
                  />
                </div>
                <div className="form__campo">
                  <label htmlFor="email">
                    Email empresarial:
                    <span className="form__requerido">*</span>
                  </label>
                  <input
                    id="email"
                    className="form__campo--input"
                    type="email"
                    placeholder="Ingresa tu correo empresarial"
                  />
                </div>
                <div className="form__campo">
                  <label htmlFor="telefono">
                    Teléfono de contacto:
                    <span className="form__requerido">*</span>
                  </label>
                  <input
                    id="telefono"
                    className="form__campo--input"
                    type="text"
                    placeholder="Ingresa algún número de contacto"
                  />
                </div>
                <div className="form__campo">
                  <label htmlFor="nombre">
                    ¿Qué servicio necesitas?
                    <span className="form__requerido">*</span>
                  </label>
                  <select name="" id="">
                    <option value="" disabled>
                      --Seleccionar--
                    </option>
                    <option value="">Crédito de nómina</option>
                    <option value="">Crédito de simple</option>
                  </select>
                </div>
                <div className="form__campo">
                  <label htmlFor="nombre">
                    ¿Cómo podemos ayudarte?
                    <span className="form__requerido">*</span>
                  </label>
                 <textarea>
                 </textarea>
                </div>
              </form>
            </div>
            <div className="ubicacion__informacion">
              <h5>Horario de atención</h5>
              <p>Lunes a viernes</p>
              <p>9:00 A. M. – 18:00 P. M.</p>

              <Redes />
            </div>
          </div>
        </div>
      </main>

      <Confianza />
    </>
  );
};

export default Contacto;
