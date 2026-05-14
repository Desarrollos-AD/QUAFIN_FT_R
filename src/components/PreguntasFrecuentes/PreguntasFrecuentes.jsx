import React, { useState } from "react";
import "./PreguntasFrecuentes.scss";
import CardItem from "../ui/CardItem/CardItem";

const preguntas = [
  {
    id: 1,
    numero: "01",
    pregunta: "¿Quafin es un préstamo Quafinom?",
    descripcion:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,",
  },
  {
    id: 2,
    numero: "02",
    pregunta: "¿Quiénes pueden solicitar préstamo Quafinom?",
    descripcion:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,",
  },
  {
    id: 3,
    numero: "03",
    pregunta: "¿Qué requisitos se necesitan?",
    descripcion:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,",
  },
  {
    id: 4,
    numero: "04",
    pregunta: "¿Qué es Quafin?",
    descripcion:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,",
  },
  {
    id: 5,
    numero: "05",
    pregunta: "¿Qué es una SOFOM, E.N.R.?",
    descripcion:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,",
  },
  {
    id: 6,
    numero: "06",
    pregunta: "¿Quafin es un préstamo Quaficredit?",
    descripcion:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,",
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
