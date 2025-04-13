import React from "react";
import estilos from "../modalwindows/Modal3.module.css";

function Modal3({ abierto, cerrar, seleccionarPais }) {
  const paises = [
    { nombre: "Argentina", codigo: "ARG" },
    { nombre: "México", codigo: "MEX" },
    { nombre: "Colombia", codigo: "COL" },
  ];

  return (
    <div
      className={`${estilos.fondo} ${abierto ? estilos.visible : ""}`}
      onClick={cerrar}
    >
      <div className={estilos.contenido} onClick={(e) => e.stopPropagation()}>
        <button className={estilos.cerrar} onClick={cerrar}>
          &times;
        </button>

        <h3>¿Desde qué país realizarás el pago?</h3>
        <p>Selecciona tu país para continuar con el proceso de reserva.</p>

        <div className={estilos.contenedorPaises}>
          {paises.map((pais, index) => (
            <button
              key={index}
              className={estilos.botonPais}
              onClick={() => {
                seleccionarPais(pais.codigo); // solo actualiza el estado
              }}
            >
              {pais.nombre}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Modal3;
