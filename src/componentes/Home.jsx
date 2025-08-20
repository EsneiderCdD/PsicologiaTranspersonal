import { useState, useEffect } from "react";
import estilos from "./Home.module.css";
import Modal from "../componentes/ocupacion/Modal";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import imagenHome from "../assets/imagenes/imagenHome.webp";
import { homeData } from "../ss/data";

export default function Home() {

  const [modalPricingAbierto, setModalPricingAbierto] = useState(false);

  const navigate = useNavigate();

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
          {homeData.home}
        </motion.p>

        <motion.div
          className={`${estilos.imagen} ${estilos.imagenMobile}`}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
          viewport={{ once: true }}
        >
          <img src={imagenHome} alt="imagen decorativa" />
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
            onClick={() => setModalPricingAbierto(true)}
            initial={{ boxShadow: "none", backgroundColor: "#321033" }}
            animate={{
              boxShadow: "0 0 20px #6b21a8, 0 0 40px #ca66eb66",
              backgroundColor: "#800089",
              transition: {
                delay: 1,
                duration: 2,
                ease: "easeInOut",
              },
            }}
            whileHover={{
              backgroundColor: "#6b21a8",
              boxShadow: "0 0 25px #6b21a8, 0 0 50px #ca66ebaa",
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
        </motion.div>
      </motion.div>
      <motion.div
        className={`${estilos.imagen} ${estilos.imagenDesktop}`}
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
        viewport={{ once: true }}
      >
        <img src={imagenHome} alt="imagen decorativa" />
      </motion.div>

      {modalPricingAbierto && (
        <Modal
          isOpen={modalPricingAbierto}
          onClose={() => setModalPricingAbierto(false)}
          showTerms={true}
          requireTermsAcceptance={true}
          confirmText="Agendar ahora"
        />
      )}

    </motion.div>

  );
}  