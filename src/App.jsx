import { BrowserRouter, Route, Routes } from "react-router-dom";
import Inicios from "./pages/Inicio/Inicio";
import AppRouter from "./router/AppRouter";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
        <AppRouter />
        <Footer/>
    </>
  );
}

export default App;
