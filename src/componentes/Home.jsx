import { useState, useEffect } from "react";
import estilos from "./Home.module.css";
import ModalServicio from "./ModalHome/ModalServicio";
import ModalDatos from "./ModalHome/ModalDatos";
import { obtenerLinkDePago } from "./ModalHome/helpers"; // Importamos el helper
import { useNavigate } from "react-router-dom";


export default function Home() {
  const [modalServicioAbierto, setModalServicioAbierto] = useState(false);
  const [modalDatosAbierto, setModalDatosAbierto] = useState(false);
  const [datosSeleccionados, setDatosSeleccionados] = useState({
    sesiones: null,
    pais: null,
  });
  const navigate = useNavigate();


  const manejarSeleccion = ({ sesiones, pais }) => {
    setDatosSeleccionados({ sesiones, pais });
    setModalDatosAbierto(false);
  };

  // Redirección automática cuando los datos están listos
  useEffect(() => {
    const { sesiones, pais } = datosSeleccionados;
    if (sesiones && pais) {
      const link = obtenerLinkDePago(sesiones, pais);

      if (link) {
        // Redirigir al link correspondiente
        window.location.href = link;
      } else {
        alert("No se encontró un link de pago para esta combinación.");
      }
    }
  }, [datosSeleccionados]);

  return (
    <div className={estilos.layout}>
      <div className={estilos.contenedor}>
        <h1 className={estilos.tituloprincipal}>Psicología Transpersonal</h1>
        <p className={estilos.descripcion}>
          <span className={estilos.resaltado}>Espacio</span> de crecimiento y
          acompañamiento <span className={estilos.resaltado}>terapéutico</span>.
          Empieza una transformación de la mano de un{" "}
          <span className={estilos.resaltado}>enfoque</span> que{" "}
          <span className={estilos.resaltado}>equilibra</span>,{" "}
          <span className={estilos.resaltado}>ciencia</span>,{" "}
          <span className={estilos.resaltado}>humanidad</span> y{" "}
          <span className={estilos.resaltado}>espiritualidad</span>.
        </p>

        <div className={estilos.botones}>
  <button
    className={estilos.boton}
    onClick={() => setModalServicioAbierto(true)}
  >
    Agendar
  </button>

  <button
    className={estilos.botonSecundario}
    onClick={() => navigate("/about")}
  >
    Sobre mí
  </button>
</div>

      </div>

      <div className={estilos.imagen}>
        <img src="/src/assets/imagenes/PsicoT.png" alt="imagen decorativa" />
      </div>

      <ModalServicio
        abierto={modalServicioAbierto}
        cerrar={() => setModalServicioAbierto(false)}
        abrirModalDatos={() => {
          setModalServicioAbierto(false);
          setModalDatosAbierto(true);
        }}
      />

      <ModalDatos
        abierto={modalDatosAbierto}
        cerrar={() => setModalDatosAbierto(false)}
        onSeleccion={manejarSeleccion}
      />
    </div>
  );
}
