import { Routes, Route } from "react-router-dom";
import Inicio from "../pages/Inicio/Inicio";
import EducacionFinanciera from "../pages/EducacionFinanciera/EducacionFinanciera";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Inicio />} />
      <Route path="/educacion-financiera" element={<EducacionFinanciera />} />
    </Routes>
  );
};

export default AppRouter;
