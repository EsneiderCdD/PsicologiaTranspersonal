import React from "react";
import estilos from "./PsicologiaTranspersonal.module.css";
import meditacion from "../../assets/imagenes/meditacion.png";

export default function PsicologiaTranspersonal() {
  return (
    <section className={estilos.seccion}>
      <div className={estilos.contenido}>
        <div className={estilos.texto}>
          <h2 className={estilos.titulo}>Psicología Transpersonal</h2>
          <p className={estilos.parrafo}>
            La psicología transpersonal es una rama de la psicología que se enfoca en los aspectos espirituales y trascendentales de la experiencia humana. A diferencia de las corrientes tradicionales, la transpersonal busca integrar la dimensión espiritual como parte esencial del desarrollo personal y emocional.
          </p>
          <p className={estilos.parrafo}>
            Este enfoque reconoce que la salud mental no solo depende de sanar heridas emocionales, sino también de conectar con un sentido profundo de propósito y con lo que nos trasciende como seres humanos. A través de técnicas como la meditación, la visualización, el trabajo con sueños y el acompañamiento consciente, se promueve la expansión de la conciencia y la integración del ser en todas sus dimensiones.
          </p>
          <p className={estilos.parrafo}>
            En terapia, se crea un espacio seguro y sagrado para explorar heridas profundas, patrones inconscientes y dimensiones espirituales. Esto facilita procesos de transformación interior que conducen a mayor autenticidad, paz y conexión consigo misma y con la vida.
          </p>
        </div>
        <div className={estilos.imagen}>
          <img src={meditacion} alt="Meditación" />
        </div>
      </div>
    </section>
  );
}
