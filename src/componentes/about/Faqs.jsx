import React, { useState } from "react";
import estilos from "./Faqs.module.css"; // Cambia esto si tu archivo tiene otro nombre

const PreguntasFrecuentes = () => {
  const [preguntaActiva, setPreguntaActiva] = useState(null);

  const togglePregunta = (index) => {
    setPreguntaActiva((prevIndex) => (prevIndex === index ? null : index));
  };

  const preguntas = [
    {
      pregunta: "¿La terapia transpersonal es para mí?",
      respuesta:
        "La terapia transpersonal es ideal si estás en busca de una comprensión más profunda de ti misma, deseas sanar heridas emocionales o explorar tu propósito vital desde una mirada integral: cuerpo, mente y espíritu.",
    },
    {
      pregunta: "¿Cómo se desarrollan las sesiones virtuales?",
      respuesta:
        "Las sesiones virtuales se realizan por videollamada, en un ambiente seguro y confidencial. Se utilizan diversas herramientas terapéuticas y ejercicios prácticos que puedes aplicar entre sesiones.",
    },
    {
      pregunta: "¿Cuántas sesiones necesitaré?",
      respuesta:
        "La cantidad de sesiones depende de tus objetivos personales. Algunas personas logran avances significativos en pocas sesiones, mientras que otras optan por un acompañamiento más prolongado.",
    },
    {
      pregunta: "¿Qué métodos utilizan en las sesiones?",
      respuesta:
        "Se utilizan técnicas de la psicología transpersonal, meditación guiada, visualización, trabajo con el cuerpo, símbolos y narrativas para acompañarte de forma profunda y respetuosa.",
    },
  ];

  return (
    <div className={estilos.faqSection}>
      <h2 className={estilos.faqTitulo}>Preguntas Frecuentes</h2>
      <div className={estilos.faqContainer}>
        {preguntas.map((item, index) => (
          <div
            key={index}
            className={`${estilos.faqItem} ${
              preguntaActiva === index ? estilos.abierta : ""
            }`}
            onClick={() => togglePregunta(index)}
          >
            <div className={estilos.faqPregunta}>
              <span>{item.pregunta}</span>
              <span>{preguntaActiva === index ? "▲" : "▼"}</span>
            </div>
            {preguntaActiva === index && (
              <div className={estilos.faqRespuesta}>{item.respuesta}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PreguntasFrecuentes;
