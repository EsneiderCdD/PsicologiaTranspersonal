import React from "react";
import estilos from "../modalwindows/Modal2.module.css";

function Modal2({ abierto, cerrar, precios }) {
  return (
    <div className={`${estilos.fondo} ${abierto ? estilos.visible : ""}`} onClick={cerrar}>
      <div className={estilos.contenido} onClick={(e) => e.stopPropagation()}>
        <button className={estilos.cerrar} onClick={cerrar}>
          &times;
        </button>

       
        <h4>Elige el numero de sesiones que mas se adapten a tí</h4>

        <div className={estilos.contenedorOpciones}>
          {precios.map((opcion, index) => (
            <div key={index} className={estilos.opcionCard}>
              <img
                src={opcion.imagen}
                alt={`Imagen de ${opcion.nombre}`}
                className={estilos.imagen}
              />

              <h4>{opcion.nombre}</h4>
              <p className={estilos.descripcion}>
                {index === 0 &&
                  "Sesión individual perfecta para una catarsis emocional o una consulta rápida en momentos de crisis."}
                {index === 1 &&
                  "Un proceso más profundo con sesiones que te permiten desarrollar estrategias y generar cambios sólidos en tu bienestar emocional."}
                {index === 2 &&
                  "El acompañamiento ideal para una transformación completa, con sesiones diseñadas para guiarte paso a paso en tu crecimiento personal."}
              </p>
              <button className={estilos.botonAgendar}>Agendar</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Modal2;