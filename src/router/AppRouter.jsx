import { Routes, Route } from "react-router-dom";
import Inicio from "../pages/Inicio/Inicio";
import EducacionFinanciera from "../pages/EducacionFinanciera/EducacionFinanciera";
import SobreQuafin from "../pages/SobreQuafin/SobreQuafin";
import Contacto from "../pages/Contacto/Contacto";
import ScrollToTop from "../assets/config/ScrollToTop/ScrollToTop";
import ScrollToHash from "../assets/config/ScrollToHash/ScrollToHash";

const AppRouter = () => {
  return (
    <>
      <ScrollToTop />
      <ScrollToHash />

      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/educacion-financiera" element={<EducacionFinanciera />} />
        <Route path="/sobre-Quafin" element={<SobreQuafin />} />
        <Route path="/contacto" element={<Contacto />} />
      </Routes>
    </>
  );
};

export default AppRouter;
