import { useState } from "react";
import ReactDOM from "react-dom";
import estilos from "./ModalDatos.module.css";

export default function ModalDatos({ abierto, cerrar, onSeleccion }) {
  if (!abierto) return null;

  const [sesion, setSesion] = useState(null);
  const [pais, setPais] = useState(null);
  const [error, setError] = useState("");
  const [confirmacion, setConfirmacion] = useState(false);
  const [mostrarOpciones, setMostrarOpciones] = useState(false);


  const manejarClick = () => {
    if (sesion && pais) {
      onSeleccion({ sesiones: sesion, pais });
      setError("");
      setConfirmacion(true);
    } else {
      setError("Por favor selecciona una opción de sesión y país.");
      setConfirmacion(false);
    }
  };

  // 💡 Aquí se crea el portal
  return ReactDOM.createPortal(
    <div className={estilos.modal}>
      <div className={estilos.contenido}>
        <h2>¿Cómo deseas comenzar tu proceso?</h2>
        <p className={estilos.subtitulo}>Selecciona el tipo de acompañamiento</p>

        <div className={estilos.cardsSesion}>
          <div
            className={`${estilos.cardSesion} ${sesion === "1" ? estilos.activoCard : ""}`}
            onClick={() => setSesion("1")}
          >
            <h3>Sesión única</h3>
            <p>Un espacio puntual para abordar una necesidad inmediata o conocernos.</p>
          </div>

          <div
            className={`${estilos.cardSesion} ${sesion === "4" ? estilos.activoCard : ""}`}
            onClick={() => setSesion("4")}
          >
            <h3>Paquete mensual</h3>
            <p>Cuatro sesiones para conocerte, trabajar procesos y crear continuidad.</p>
          </div>

          <div
            className={`${estilos.cardSesion} ${sesion === "6" ? estilos.activoCard : ""}`}
            onClick={() => setSesion("6")}
          >
            <h3>Acompañamiento completo</h3>
            <p>Una experiencia profunda y sostenida para trabajar a fondo tu bienestar.</p>
          </div>
        </div>

        <div className={estilos.acordeonUbicacion}>
  <button
    className={estilos.selectorPrincipal}
    onClick={() => setMostrarOpciones(!mostrarOpciones)}
  >
    {pais === "COL"
      ? "Colombia"
      : pais === "INT"
      ? "Internacional"
      : "Selecciona tu región"}
    <span className={estilos.iconoFlecha}>
      {mostrarOpciones ? "▲" : "▼"}
    </span>
  </button>

  {mostrarOpciones && (
    <div className={estilos.listaOpciones}>
      <div
        className={`${estilos.opcion} ${
          pais === "COL" ? estilos.opcionActiva : ""
        }`}
        onClick={() => {
          setPais("COL");
          setMostrarOpciones(false);
        }}
      >
        <strong>Colombia</strong>
        <p>Colombia</p>
      </div>

      <div className={estilos.opcionGrupo}>
        <strong>Latinoamérica</strong>
        <p>México, Argentina, Chile, Perú, Otros países de Latinoamérica</p>
      </div>

      <div className={estilos.opcionGrupo}>
        <strong>Estados Unidos y Canadá</strong>
        <p>Estados Unidos, Canadá</p>
      </div>

      <div className={estilos.opcionGrupo}>
        <strong>Europa</strong>
        <p>España, Reino Unido, Francia, Alemania, Otros países europeos</p>
      </div>
    </div>
  )}
</div>


        {error && <p className={estilos.error}>{error}</p>}
        {confirmacion && (
          <p className={estilos.confirmacion}>
            ¡Seleccionado correctamente! Serás redirigido para realizar el pago.
          </p>
        )}

        <div className={estilos.botonesFinales}>
          <button onClick={cerrar}>Cancelar</button>
          <button onClick={manejarClick}>Continuar</button>
        </div>
      </div>
    </div>,
    document.getElementById("modal-root")
  );
}
