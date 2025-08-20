import React, { useRef, useState } from "react";
import Modal from "../ocupacion/Modal";

import estilos from "./Servicios.module.css";
import Ps from "../../assets/imagenes/Ps.jpeg";

import { motion, useInView } from "framer-motion";

import { psicotranspersonalData } from "../../ss/data";
import { acompañamientoTerapeuticoData } from "../../ss/data";

export default function Servicios() {
  const [modalAbierto, setModalAbierto] = useState(false);

  const textoRef = useRef(null);
  const textoEnVista = useInView(textoRef, {
    once: true,
    margin: "0px 0px -100px 0px",
  });

  const imagenRef = useRef(null);
  const imagenEnVista = useInView(imagenRef, {
    once: true,
    margin: "0px 0px -100px 0px",
  });

  const nombreRef = useRef(null);
  const nombreEnVista = useInView(nombreRef, { once: true });

  const underlineVariants = {
    hidden: { backgroundSize: "0% 2px" },
    visible: {
      backgroundSize: "100% 2px",
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  // Texto nuevo con saltos de línea
  const textoAcomp = `






`;

  return (
    <div>
      <section className={estilos.seccion}>
        <div className={estilos.contenedor}>
          <div className={estilos.bannerLineLeft}></div>
          <div className={estilos.bannerLineRight}></div>
          <motion.div
            className={estilos.banner}
            ref={imagenRef}

          >
            <img src={Ps} alt="banner" />
          </motion.div>

          <motion.div

            className={estilos.texto}
            ref={textoRef}
            initial="hidden"
            animate={textoEnVista ? "visible" : "hidden"}
            variants={{
              hidden: {},
              visible: {
                transition: { staggerChildren: 0.3 },
              },
            }}
          >
            <div className={estilos.verticalLineLeft}></div>
            <div className={estilos.verticalLineRight}></div>
            <div className={estilos.titulo}>
              <motion.h3
                ref={nombreRef}
                initial="hidden"
                animate={nombreEnVista ? "visible" : "hidden"}
                variants={underlineVariants}
                className={estilos.underlineEffect}
              >
                @psicotranspersonal
              </motion.h3>
              <h4>La semilla que floreció en comunidad</h4>
            </div>

            {Object.values(psicotranspersonalData).map((text, index) => (
              <motion.p
                key={index}
                variants={{
                  hidden: { opacity: 0, x: 30 },
                  visible: { opacity: 1, x: 0 },
                }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className={estilos.textoAnimado}
              >
                {text}
              </motion.p>
            ))}


            {/* NUEVO BLOQUE */}
            <div className={estilos.nuevoBloque}>
              <motion.h4
                id="servicios"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className={estilos.subtitulo}

              >
                Acompañamiento Terapéutico Transpersonal
              </motion.h4>
              <br />

              {Object.values(acompañamientoTerapeuticoData).map((text, index) => (
                <motion.p
                  key={index}
                  variants={{
                    hidden: { opacity: 0, x: 30 },
                    visible: { opacity: 1, x: 0 },
                  }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className={`${estilos.textoAnimado} ${estilos.preserveLines}`}
                >
                  {text}
                </motion.p>
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className={estilos.botonReservar}
              onClick={() => setModalAbierto(true)}
            >
              Reserva tu espacio ✨
            </motion.button>
          </motion.div>
        </div>

        <Modal
          isOpen={modalAbierto}
          onClose={() => setModalAbierto(false)}
          showTerms={true}
          requireTermsAcceptance={true}
        />
      </section>
    </div>
  );
}
