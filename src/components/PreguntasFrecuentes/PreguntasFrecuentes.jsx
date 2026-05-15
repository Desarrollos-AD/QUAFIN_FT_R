import React, { useState } from "react";
import "./PreguntasFrecuentes.scss";
import CardItem from "../ui/CardItem/CardItem";

const preguntas = [
  {
    id: 1,
    numero: "01",
    pregunta: "¿Qué es Quafin?",
    descripcion:
      "En Quafin somos una Sociedad Financiera de Objeto Múltiple, Entidad No Regulada (SOFOM, E.N.R.), nos especializamos en ofrecer financiamiento empresarial y préstamo de nómina, para atender las necesidades de empresas y trabajadores.",
  },
  {
    id: 2,
    numero: "02",
    pregunta: "¿Qué es una SOFOM, E.N.R.?",
    descripcion:
      " Una SOFOM, E.N.R. es una entidad financiera especializada en otorgar soluciones de crédito y financiamiento de forma ágil, flexible y estratégica. En QUAFIN impulsamos a las empresas con soluciones financieras diseñadas para brindar mayor liquidez, crecimiento y proyección, ofreciendo una atención más cercana y personalizada que la banca tradicional.",
  },
  {
    id: 3,
    numero: "03",
    pregunta: "¿Qué es un préstamo Quafinom?",
    descripcion:
      "Quafinom es la línea de crédito de nómina de QUAFIN, diseñada para brindar apoyo financiero rápido, accesible y sin complicaciones a empleados que necesitan liquidez para cubrir objetivos, imprevistos o necesidades personales.",
  },
  {
    id: 4,
    numero: "04",
    pregunta: "¿Quiénes pueden solicitar préstamo Quafinom?",
    descripcion:
      "Ser empleado de 18 a 65 años Mínimo, 12 meses trabajando, Ingreso mensual desde $8,000, Buen historial crediticio, INE, comprobante de domicilio y recibo de nómina",
  },
  {
    id: 5,
    numero: "05",
    pregunta: "¿Quiénes pueden solicitar préstamo Quaficredit?",
    descripcion:
      "Es una solución financiera de QUAFIN enfocada en empresas que buscan impulsar su crecimiento, fortalecer operaciones o acceder a capital de trabajo mediante un financiamiento flexible y estratégico.",
  },
  {
    id: 6,
    numero: "06",
    pregunta: "¿Quiénes pueden solicitar préstamo Quaficredit?",
    descripcion:
      "Empresa con mínimo 2 años de operación,Ingreso mensual desde $200,000, Buen historial crediticio Acta constitutiva, estados financieros y RFC Garantía (líquida, real o hipotecaria).",
  },
];

const PreguntasFrecuentes = () => {
  const [openId, setOpenId] = useState(null);
  const columnaIzquierda = preguntas.filter((_, i) => i % 2 === 0);
  const columnaDerecha = preguntas.filter((_, i) => i % 2 !== 0);

  return (
    <section className="preguntasFrecuentes">
      <div className="contenedor">
        <h2>Preguntas Frecuentes</h2>
        <p className="preguntasFrecuentes__subtitulo">
          En esta sección encontrarás respuestas a las preguntas más comunes
          sobre nuestras soluciones de financiamiento, procesos y servicios. Si
          necesitas más información, puedes contactar a nuestro equipo de
          atención.
        </p>

        <div className="preguntas">
          <div className="preguntas__columna">
            {columnaIzquierda.map((pregunta) => (
              <CardItem
                key={pregunta.id}
                pregunta={pregunta}
                openId={openId}
                setOpenId={setOpenId}
              />
            ))}
          </div>
          <div className="preguntas__columna">
            {columnaDerecha.map((pregunta) => (
              <CardItem
                key={pregunta.id}
                pregunta={pregunta}
                openId={openId}
                setOpenId={setOpenId}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PreguntasFrecuentes;
