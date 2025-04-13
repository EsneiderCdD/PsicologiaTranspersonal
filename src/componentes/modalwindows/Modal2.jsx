import React from "react";
import estilos from "../modalwindows/Modal2.module.css";

function Modal2({ abierto, cerrar, abrirModal3, precios, seleccionarSesion }) {
  // Mapeo de índice a cantidad de sesiones
  const sesionesMap = {
    0: "1",
    1: "4",
    2: "6",
  };

  return (
    <div className={`${estilos.fondo} ${abierto ? estilos.visible : ""}`} onClick={cerrar}>
      <div className={estilos.contenido} onClick={(e) => e.stopPropagation()}>
        <button className={estilos.cerrar} onClick={cerrar}>
          &times;
        </button>

        <h4>Elige el número de sesiones que más se adapten a ti</h4>

        <div className={estilos.contenedorOpciones}>
          {precios.map((opcion, index) => (
            <div key={index} className={estilos.opcionCard}>
              <img
                src={`https://via.placeholder.com/300x180.png?text=Opcion+${index + 1}`}
                alt={`Imagen ${opcion.nombre}`}
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
              <button
                className={estilos.botonAgendar}
                onClick={() => {
                  seleccionarSesion(sesionesMap[index]); // Guardamos "1", "4", "6"
                  abrirModal3();
                }}
              >
                Agendar
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Modal2;
