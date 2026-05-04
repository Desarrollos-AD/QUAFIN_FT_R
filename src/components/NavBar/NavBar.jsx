import { Link } from "react-router-dom";
import "./NavBar.scss";
import logo from "../../assets/logo.svg";
import { useState } from "react";
import Boton from "../ui/Boton/Boton";

const NavBar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="navbar">
      <nav className="navbar__nav">
        <div className="navbar__logo">
          <Link to="/">
            <img src={logo} alt="Logo Quafin" />
          </Link>
        </div>

        <button className="navbar__toggle" onClick={() => setOpen(!open)}>
          ☰
        </button>

        <div className={`navbar__links ${open ? "is-open" : ""}`}>
          <Link to="/productos-financieros">Productos Financieros</Link>
          <Link to="/educacion-financiera">Educación Financiera</Link>
          <Link to="/sobre-quafin">Sobre Quafin</Link>
          <Link to="/sobre-quafin">UNE</Link>
          <Link to="/contacto" className="btn__primario">
            Contacto
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
