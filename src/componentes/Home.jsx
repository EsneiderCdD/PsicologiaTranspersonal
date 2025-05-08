import { useState, useEffect } from "react";
import estilos from "./Home.module.css";
import ModalServicio from "./ModalHome/ModalServicio";
import ModalDatos from "./ModalHome/ModalDatos";
import { obtenerLinkDePago } from "./ModalHome/helpers";
import { useNavigate } from "react-router-dom";

import { motion } from "framer-motion";
import SusanaSantamaria from "../assets/imagenes/SusanaSantamaria.png";

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
    <motion.div 
      className={estilos.layout}
      initial="hidden"
      animate="visible"
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: 0.3,
          },
        },
      }}
    >
  
      <motion.div 
        className={estilos.contenedor}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <motion.h1 
          className={estilos.tituloprincipal}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          Psicología Transpersonal
        </motion.h1>
  
        <motion.p 
          className={estilos.descripcion}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
        >
          Espacio de crecimiento y acompañamiento terapéutico. Empieza
          una transformación de la mano de un enfoque que equilibra, ciencia, humanidad y espiritualidad.
        </motion.p>
  
        <motion.div 
          className={`${estilos.imagen} ${estilos.imagenMobile}`}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
          viewport={{ once: true }}
        >
          <img src={SusanaSantamaria} alt="imagen decorativa" />
        </motion.div>
  
        <motion.div 
          className={estilos.botones}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
          viewport={{ once: true }}
        >
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
            Sobre la terapeuta
          </button>
        </motion.div>
      </motion.div>
  
      <motion.div 
        className={`${estilos.imagen} ${estilos.imagenDesktop}`}
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
        viewport={{ once: true }}
      >
        <img src={SusanaSantamaria} alt="imagen decorativa" />
      </motion.div>
  
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
    </motion.div>
  );
}  