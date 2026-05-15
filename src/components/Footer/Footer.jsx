import React from "react";
import logoPositivo from "../../assets/logoPositivo.png";
import "./Footer.scss";
import Redes from "../ui/Redes/Redes";
import { Link } from "react-router-dom";

const navbar = [
  {
    titulo: "Productos Financieros",
    links: [
      {
        texto: "Crédito de nómina",
        url: "/#productos",
      },
      {
        texto: "Crédito simple empresarial",
        url: "/#productos",
      },
    ],
  },
  {
    titulo: "Sobre Quafin",
    links: [
      {
        texto: "¿Quiénes somos?",
        url: "/sobre-quafin#quienes",
      },
      {
        texto: "Nuestra misión",
        url: "/sobre-quafin#mision",
      },
      {
        texto: "Nuestra visión",
        url: "/sobre-quafin#vision",
      },
      {
        texto: "Nuestro objetivo",
        url: "/sobre-quafin#objetivo",
      },
      {
        texto: "Nuestros valores",
        url: "/sobre-quafin#valores",
      },
    ],
  },
  {
    titulo: "Contacto",
    links: [
      {
        texto: "Teléfono:",
      },
      {
        texto: "152852255",
      },
      {
        texto: "Correo:",
      },
      {
        texto: "contacto@quafin.com.mx",
      },
    ],
  },
  {
    titulo: "Formatos",
    links: [
      {
        texto: "Formato Arco",
        url: "Formato-Arco.pdf",
      },
      {
        texto: "Aviso de privacidad",
        url: "Aviso-provacidad.pdf",
      },
      {
        texto: "Educación Financiera",
        url: "/educacion-financiera",
      },
    ],
  },
];

const Footer = () => {
  return (
    <footer>
      <div className="contenedor">
        <div className="footer">
          <div className="footer__fondo">
            <h5>Quafin</h5>
          </div>

          <div className="footer__navbar">
            <div className="footer__navbar--quafin">
              <div className="logo">
                <Link to="/">
                  <img
                    loading="lazy"
                    src={logoPositivo}
                    alt="Logo Quafin positivo"
                  />
                </Link>
              </div>
              <p>
                Quafin, S.A.P.I de C.V., SOFOM, E.N.R Calz. Simon Bolívar #645,
                Zaragoza, 91910 Veracruz, Ver.
              </p>

              <Redes />
            </div>
            {navbar.map((section, index) => (
              <div className="footer__navbar--links" key={index}>
                <div className="footer__navbar--title">
                  <a href="#">{section.titulo}</a>
                </div>

                {section.links.map((link, i) => (
                  <div className="footer__navbar--link" key={i}>
                    <a href={link.url}>{link.texto}</a>
                  </div>
                ))}
              </div>
            ))}
          </div>

          <div className="separadorLinea__positivo"></div>

          <div className="footer__leyenda">
            <p>
              Quafin, S.A. de C.V., SOFOM, E.N.R., es una Sociedad Financiera de
              Objeto Múltiple, Entidad No Regulada. Las SOFOM E.N.R. no
              requieren autorización de la Secretaría de Hacienda y Crédito
              Público para su constitución y operación, sin embargo se
              encuentran sujetas a la supervisión de la Comisión Nacional para
              la Protección y Defensa de los Usuarios de Servicios Financieros
              para efectos de transparencia y protección al usuario. Para mayor
              información consulte el Sistema de Registro de Prestadores de
              Servicios Financieros (SIPRES). El Costo Anual Total (CAT) se
              muestra únicamente con fines informativos y de comparación.
            </p>
            <p>
              © Todos los derechos reservados. Prohibida la reproducción total o
              parcial del contenido de este sitio.
              <br />
              {/* <a href="#"> Términos y condiciones</a> */}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
