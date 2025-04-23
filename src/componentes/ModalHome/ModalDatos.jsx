import { useState } from "react";
import ReactDOM from "react-dom";
import estilos from "./ModalDatos.module.css";
import IconoC11 from "../../assets/imagenes/IconoC11.png";
import IconoC22 from "../../assets/imagenes/IconoC22.png";
import IconoC33 from "../../assets/imagenes/IconoC33.png";

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
        
        <p className={estilos.subtitulo}>Selecciona el numero de sesiones, la region donde te encuentras y dale continuar ...
        </p>

        <div className={estilos.cardsSesion}>
          <div
            className={`${estilos.cardSesion} ${sesion === "1" ? estilos.activoCard : ""}`}
            onClick={() => setSesion("1")}
          >
            
              <img src={IconoC11} alt="Icono" />
            <h3>Sesión Única</h3>
            <p>Un espacio puntual para abordar una necesidad inmediata o conocernos.</p>
          </div>

          <div
            className={`${estilos.cardSesion} ${sesion === "4" ? estilos.activoCard : ""}`}
            onClick={() => setSesion("4")}
          > 
            <img src={IconoC33} alt="Icono" />
            <h3>Sesión Profunda</h3>
            <p>Cuatro sesiones para conocerte, trabajar procesos y crear continuidad.</p>
          </div>

          <div
            className={`${estilos.cardSesion} ${sesion === "6" ? estilos.activoCard : ""}`}
            onClick={() => setSesion("6")}
          >
            <img src = { IconoC22} />
            <h3>Sesión completa</h3>
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
  : pais === "EEC"
  ? "Europa, EE.UU. y Canadá"
  : pais === "LA"
  ? "Latinoamérica"
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

          <div
      className={`${estilos.opcion} ${pais === "EEC" ? estilos.opcionActiva : ""}`}
      onClick={() => {
        setPais("EEC");
        setMostrarOpciones(false);
      }}
    >
      <strong>Europa, EE.UU. y Canadá</strong>
      <p>Incluye España, Reino Unido, Francia, Alemania, EE.UU., Canadá</p>
    </div>


        <div
      className={`${estilos.opcion} ${pais === "LA" ? estilos.opcionActiva : ""}`}
      onClick={() => {
        setPais("LA");
        setMostrarOpciones(false);
      }}
    >
      <strong>Latinoamérica</strong>
      <p>México, Argentina, Chile, Perú, y otros países latinoamericanos</p>
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
