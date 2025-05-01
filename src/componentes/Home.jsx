import { useState, useEffect } from "react";
import estilos from "./Home.module.css";
import ModalServicio from "./ModalHome/ModalServicio";
import ModalDatos from "./ModalHome/ModalDatos";
import { obtenerLinkDePago } from "./ModalHome/helpers";
import { useNavigate } from "react-router-dom";
import PalabraAnimada from "./home/PalabraAnimada";
import { motion } from "framer-motion";

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

  useEffect(() => {
    const { sesiones, pais } = datosSeleccionados;
    if (sesiones && pais) {
      const link = obtenerLinkDePago(sesiones, pais);
      if (link) {
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
          <PalabraAnimada texto="Espacio" delay={1.43} /> de crecimiento y
          acompañamiento <PalabraAnimada texto="terapéutico" delay={3} />. Empieza
          una transformación de la mano de un <PalabraAnimada texto="enfoque" delay={5} />{" "}
          que <PalabraAnimada texto="equilibra, ciencia, humanidad y espiritualidad." delay={6} />
        </p>

        <div className={estilos.botones}>
          <motion.button
            className={estilos.boton}
            onClick={() => setModalServicioAbierto(true)}
            initial={{ boxShadow: "none", backgroundColor: "#321033" }}
            animate={{
              boxShadow: "0 0 20px #ca66eb, 0 0 40px #ca66eb66",
              backgroundColor: "#800089",
              transition: {
                delay: 7,
                duration: 2,
                ease: "easeInOut",
              },
            }}
            whileHover={{
              backgroundColor: "#9b02a0",
              boxShadow: "0 0 25px #ca66eb, 0 0 50px #ca66ebaa",
              transition: { duration: 1.5 },
            }}
          >
            Agendar
          </motion.button>

          <button
            className={estilos.botonSecundario}
            onClick={() => navigate("/about")}
          >
            Sobre mí
          </button>
        </div>
      </div>

      <div className={estilos.imagen}>
        <img src="/src/assets/imagenes/susana1.png" alt="imagen decorativa" />
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
