import React from "react";
import estilos from "../modalwindows/Modal.module.css";

function Modal({ abierto, cerrar, precios, abrirModal2 }) {
  return (
    <div className={`${estilos.fondo} ${abierto ? estilos.visible : ""}`} onClick={cerrar}>
      <div className={estilos.contenido} onClick={(e) => e.stopPropagation()}>
        <button className={estilos.cerrar} onClick={cerrar}>
          &times;
        </button>

        <h3>Opciones de Terapia</h3>
        <h4>Selecciona un servicio</h4>

        <div className={estilos.contenedorOpciones}>
          {/* Card: Sesión Personalizada */}
          <div className={estilos.opcionCard}>
            <img
              src="../src/assets/imagenes/gl.jpg "
              alt="Sesión Personalizada"
              className={estilos.imagen}
            />
            <h4>Sesión Personalizada</h4>
            <p className={estilos.descripcion}>
              Atención uno a uno para ti. Descubre una experiencia terapéutica diseñada a tu medida, donde cada minuto cuenta para ayudarte a avanzar.
            </p>
            <button className={estilos.botonAgendar} onClick={abrirModal2}>
              Agendar Cita
            </button>
          </div>

          {/* Card: Sesión Grupal */}
          <div className={estilos.opcionCard}>
            <img
              src="../src/assets/imagenes/rs.jpg "
              alt="Sesión Grupal"
              className={estilos.imagen}
            />
            <h4>Sesión Grupal</h4>
            <p className={estilos.descripcion}>
              Comparte, conecta y crece junto a otros. Una experiencia enriquecedora donde descubrirás que no estás solo y que sanar en grupo también es poderoso.
            </p>
            <button className={estilos.botonAgendar} onClick={abrirModal2}>
              Reservar
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Modal;
