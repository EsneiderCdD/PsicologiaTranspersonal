import { useState } from "react";
import ReactDOM from "react-dom";
import estilos from "./ModalDatos.module.css";

import bandera1 from "../../assets/imagenes/bandera1.png";
import bandera2 from "../../assets/imagenes/bandera2.png";
import bandera3 from "../../assets/imagenes/bandera3.png";



export default function ModalDatos({ abierto, cerrar, onSeleccion }) {
  if (!abierto) return null;

  const [sesion, setSesion] = useState(null);
  const [pais, setPais] = useState(null);
  const [error, setError] = useState("");
  const [confirmacion, setConfirmacion] = useState(false);
  const [aceptaTerminos, setAceptaTerminos] = useState(false);


  const manejarClick = () => {
    if (!sesion || !pais) {
      setError("Por favor selecciona una opción de sesión y país.");
      setConfirmacion(false);
      return;
    }

    if (!aceptaTerminos) {
      setError("Debes aceptar los términos y condiciones para continuar.");
      setConfirmacion(false);
      return;
    }

    onSeleccion({ sesiones: sesion, pais });
    setError("");
    setConfirmacion(true);
  };


  return ReactDOM.createPortal(
    <div className={estilos.modal}>
      <div className={estilos.contenido}>
        <button className={estilos.cerrarX} onClick={cerrar}>×</button>
        <h2 className={estilos.titulo}>Elige tu plan</h2>

        {/* Opciones de sesiones */}
        <div className={estilos.planBox}>
          {/* Sesión Individual */}
          <div
            className={`${estilos.planCard} ${sesion === "1" ? estilos.activo : ""}`}
            onClick={() => setSesion("1")}
          >
            <div className={estilos.planInfo}>
              <div className={estilos.cardHeader}>Sesión Individual</div>
              <div className={estilos.cardPrecio}>1 sesión</div>
              <div className={estilos.planDesc}>
                Un espacio puntual para abordar una necesidad inmediata o conocernos.
              </div>
            </div>
            {sesion === "1" && <div className={estilos.check}></div>}
          </div>

          {/* Sesión Recomendada */}
          <div
            className={`${estilos.planCard} ${sesion === "4" ? estilos.activo : ""}`}
            onClick={() => setSesion("4")}
          >
            <div className={estilos.etiqueta}>Popular</div>
            <div className={estilos.planInfo}>
              <div className={estilos.cardHeader}>Sesión Recomendada</div>
              <div className={estilos.cardPrecio}>4 sesiones</div>
              <div className={estilos.planDesc}>
                Cuatro sesiones para conocerte, trabajar procesos y crear continuidad.
              </div>
            </div>
            {sesion === "4" && <div className={estilos.check}></div>}
          </div>

          {/* Sesión Profunda */}
          <div
            className={`${estilos.planCard} ${sesion === "6" ? estilos.activo : ""}`}
            onClick={() => setSesion("6")}
          >
            <div className={estilos.etiqueta}>Mejor Valor</div>
            <div className={estilos.planInfo}>
              <div className={estilos.cardHeader}>Sesión Profunda</div>
              <div className={estilos.cardPrecio}>6 sesiones</div>
              <div className={estilos.planDesc}>
                Una experiencia profunda y sostenida para trabajar a fondo tu bienestar.
              </div>
            </div>
            {sesion === "6" && <div className={estilos.check}></div>}
          </div>
        </div>

        {/* Región */}
        <h2 className={estilos.subtitulo}>Selecciona tu región</h2>
        <div className={estilos.regionBox}>
         <div className={estilos.regionBox}>
          <button
            className={`${estilos.regionBtn} ${pais === "COL" ? estilos.activo : ""}`}
            onClick={() => setPais("COL")}
          >
            <img src={bandera3} alt="Colombia" className={estilos.bandera} />
            <span>Colombia</span>
          </button>

          <button
            className={`${estilos.regionBtn} ${pais === "EEC" ? estilos.activo : ""}`}
            onClick={() => setPais("EEC")}
          >
            <img src={bandera1} alt="Europa, EEUU o Canadá" className={estilos.bandera2} />
            <span>Europa, EEUU<br />o Canadá</span>
          </button>

          <button
            className={`${estilos.regionBtn} ${pais === "LA" ? estilos.activo : ""}`}
            onClick={() => setPais("LA")}
          >
            <img src={bandera2} alt="Latinoamérica y Australia" className={estilos.bandera2} />
            <span>Latinoamérica<br />y Australia</span>
          </button>
        </div>

        </div>

        <div style={{ marginTop: "1.5rem", display: "flex", alignItems: "center", fontSize: "0.95rem" }}>
          <input
            type="checkbox"
            id="terminos"
            checked={aceptaTerminos}
            onChange={(e) => setAceptaTerminos(e.target.checked)}
            style={{ marginRight: "0.5rem" }}
          />
          <label htmlFor="terminos">
            He leído y acepto los <a href="/about" target="_blank" rel="noopener noreferrer" style={{ color: "#ca66eb", textDecoration: "underline" }}>términos y condiciones</a>.
          </label>
        </div>


        {/* Botón de continuar */}
         <div style={{display: "flex"}}>
           <button  className={estilos.botonCheckout}>
            Pagar con PayPal
                   </button>
                   <button
                      onClick={manejarClick}
                      className={estilos.botonCheckout}
                      disabled={!aceptaTerminos}
                      style={{ opacity: aceptaTerminos ? 1 : 0.5, cursor: aceptaTerminos ? 'pointer' : 'not-allowed' }}
                    >
                      Continuar
                    </button>

         </div>

        {/* Mensajes */}
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
