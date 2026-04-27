import { BrowserRouter, Route, Routes } from "react-router-dom";
import Inicios from "./pages/Inicio/Inicio";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Inicios />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
