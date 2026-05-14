import { Link, useLocation } from "react-router-dom";
import "./NavBar.scss";
import logo from "../../assets/logo.svg";
import { useState } from "react";
import Boton from "../ui/Boton/Boton";
import UNE from "/public/UNE.pdf";

const NavBar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const handleClick = () =>{
    if (location.pathname === "/") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  }

  return (
    <div className="navbar">
      <nav className="navbar__nav">
        <div className="navbar__logo">
          <Link to="/" onClick={handleClick}>
            <img  loading="lazy"src={logo} alt="Logo Quafin" />
          </Link>
        </div>

        <button className="navbar__toggle" onClick={() => setOpen(!open)}>
          ☰
        </button>

        <div className={`navbar__links ${open ? "is-open" : ""}`}>
          <a href="/#productos">Productos Financieros</a>
          <Link to="/educacion-financiera">Educación Financiera</Link>
          <Link to="/sobre-quafin">Sobre Quafin</Link>
          <a href={UNE} target="_blank">
            UNE
          </a>
          <Link to="/contacto" className="btn__primario">
            Contacto
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
