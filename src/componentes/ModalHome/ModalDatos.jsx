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
      <button className={estilos.cerrarX} onClick={cerrar}>×</button>

        
  
        <div className={estilos.cardsSesion}>
  <div
    className={`${estilos.cardSesion} ${sesion === "1" ? estilos.activoCard : ""}`}
    onClick={() => setSesion("1")}
  >
    <div className={estilos.contenidoCard}>
      <img alt="Icono" className={estilos.icono} />
      <p>Un espacio puntual para abordar una necesidad inmediata o conocernos.</p>
    </div>
  </div>

  <div
    className={`${estilos.cardSesion} ${sesion === "4" ? estilos.activoCard : ""}`}
    onClick={() => setSesion("4")}
  >
    <div className={estilos.contenidoCard}>
      <img alt="Icono" className={estilos.icono} />
      <p>Cuatro sesiones para conocerte, trabajar procesos y crear continuidad.</p>
    </div>
  </div>

  <div
    className={`${estilos.cardSesion} ${sesion === "6" ? estilos.activoCard : ""}`}
    onClick={() => setSesion("6")}
  >
    <div className={estilos.contenidoCard}>
      <img alt="Icono" className={estilos.icono} />
      <p>Una experiencia profunda y sostenida para trabajar a fondo tu bienestar.</p>
    </div>
  </div>
</div>

        
        
        <div className={estilos.filaRegionYContinuar}>
  <div className={estilos.bloqueIzquierdo}>
    <p className={estilos.subtituloPais}>Selecciona tu región</p>
    <div className={estilos.botonesPais}>
      <button
        className={`${estilos.botonRegion} ${pais === "COL" ? estilos.regionActiva : ""}`}
        onClick={() => setPais("COL")}
      >
        Colombia
      </button>
      <button
        className={`${estilos.botonRegion} ${pais === "EEC" ? estilos.regionActiva : ""}`}
        onClick={() => setPais("EEC")}
      >
        Europa, EE.UU. o Canadá
      </button>
      <button
        className={`${estilos.botonRegion} ${pais === "LA" ? estilos.regionActiva : ""}`}
        onClick={() => setPais("LA")}
      >
        Latinoamérica y Australia
      </button>
    </div>
  </div>

  <div className={estilos.bloqueDerecho}>
    
  </div>
  
</div>
<button onClick={manejarClick} className={estilos.botonContinuar}>
      Continuar
    </button>



        {error && <p className={estilos.error}>{error}</p>}
        {confirmacion && (
          <p className={estilos.confirmacion}>
            ¡Seleccionado correctamente! Serás redirigido para realizar el pago.
          </p>
        )}

      
      </div>
    </div>,
    document.getElementById("modal-root")
  );
}
