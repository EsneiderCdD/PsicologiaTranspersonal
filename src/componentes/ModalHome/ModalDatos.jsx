import { useState } from "react";
import estilos from "./ModalDatos.module.css";

export default function ModalDatos({ abierto, cerrar, onSeleccion }) {
  if (!abierto) return null;

  const [sesion, setSesion] = useState(null);
  const [pais, setPais] = useState(null);
  const [error, setError] = useState("");
  const [confirmacion, setConfirmacion] = useState(false);

  const manejarClick = () => {
    if (sesion && pais) {
      onSeleccion({ sesiones: sesion, pais });
      setError("");
      setConfirmacion(true); // Mostrar mensaje de confirmación
    } else {
      setError("Por favor selecciona una opción de sesión y país.");
      setConfirmacion(false);
    }
  };

  return (
    <div className={estilos.modal}>
      <div className={estilos.contenido}>
        <h2>Selecciona el tipo de sesión</h2>
        <div className={estilos.botones}>
          <button
            className={sesion === "1" ? estilos.activo : ""}
            onClick={() => setSesion("1")}
          >
            Sesión única
          </button>
          <button
            className={sesion === "4" ? estilos.activo : ""}
            onClick={() => setSesion("4")}
          >
            Paquete mensual
          </button>
          <button
            className={sesion === "6" ? estilos.activo : ""}
            onClick={() => setSesion("6")}
          >
            Acompañamiento completo
          </button>
        </div>

        <h3>Selecciona tu país de residencia</h3>
        <div className={estilos.botones}>
          <button
            className={pais === "COL" ? estilos.activo : ""}
            onClick={() => setPais("COL")}
          >
            Colombia
          </button>
          <button
            className={pais === "INT" ? estilos.activo : ""}
            onClick={() => setPais("INT")}
          >
            Internacional
          </button>
        </div>

        {error && <p className={estilos.error}>{error}</p>}

        {/* Mostrar mensaje de confirmación */}
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
    </div>
  );
}
