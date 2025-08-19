import React, { useRef } from "react";
import estilos from "./CirculoMujeres.module.css";
import ft0 from "../../assets/imagenes/ft0.jpeg";
import { FaLeaf, FaHeart, FaHandsHelping, FaStar } from 'react-icons/fa';
import Encabezado from "../global/Encabezado";
import { motion, useInView } from "framer-motion";
import { useNavigate } from "react-router-dom";
import SwiperCard from "./SwiperCard";
import { circuloMujeresData } from "../../ss/data";

export default function CirculoMujeres() {

  const navigate = useNavigate();

  const textoVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: "easeOut" } }
  };

  const tarjetaVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: i => ({
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, delay: i * 0.2 }
    })
  };

  const nombreRef = useRef(null);
  const nombreEnVista = useInView(nombreRef, { once: true });

  const underlineVariants = {
    hidden: { backgroundSize: '0% 2px' },
    visible: {
      backgroundSize: '100% 2px',
      transition: { duration: 0.6, ease: 'easeOut' }
    }
  };

  const animacionRef = useRef(null);
  const estaEnVista = useInView(animacionRef, { once: true, margin: "0px 0px -100px 0px" });

  return (
    <section className={estilos.seccion}>
      <div className={estilos.contenedor}>

        <div className={estilos.contenido}>
          <div className={estilos.verticalLineLeft}></div>
          <div className={estilos.verticalLineRight}></div>

          <div className={estilos.parallax}>
            <div className={estilos.parallaxImagen}></div>
          </div>

          <motion.div
            className={estilos.texto}
            ref={animacionRef}
            initial="hidden"
            animate={estaEnVista ? "visible" : "hidden"}
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.4
                }
              }
            }}
          >
            <div className={estilos.titulo}>
              <motion.h3
                id="circulo"
                ref={nombreRef}
                initial="hidden"
                animate={nombreEnVista ? "visible" : "hidden"}
                variants={underlineVariants}
                className={estilos.underlineEffect}
              >
                Circulo de Mujeres
              </motion.h3>
              <h4>
                Del uno al nosotros: tejemos en círculo la piel viva de un sueño que quiso volverse abrazo.
              </h4>
            </div>

            <motion.p variants={textoVariants}>
              {circuloMujeresData.parrafo1}
            </motion.p>
            <motion.p variants={textoVariants}>
              {circuloMujeresData.parrafo2}
            </motion.p>
          </motion.div>

          <SwiperCard></SwiperCard>

          <div className={estilos.actividades}>
            <motion.h5
              initial={{ opacity: 0, y: 20 }}
              animate={estaEnVista ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              En los círculos de mujeres vivimos:
            </motion.h5>

            <div className={estilos.tarjetas}>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginBottom: "0.5rem" }}>

              </div>

              <div style={{ display: "flex", flexDirection: "row" }}>
                <motion.div
                  className={estilos.tarjeta}
                  custom={1}
                  initial="hidden"
                  animate={estaEnVista ? "visible" : "hidden"}
                  variants={tarjetaVariants}
                >
                  <FaLeaf size={30} color="#6CB28E" />
                  <p>Meditaciones Profundas</p>
                </motion.div>
                <motion.div
                  className={estilos.tarjeta}
                  custom={2}
                  initial="hidden"
                  animate={estaEnVista ? "visible" : "hidden"}
                  variants={tarjetaVariants}
                >
                  <FaHandsHelping size={30} color="#FF9A8B" />
                  <p>Actividades Experienciales</p>
                </motion.div>
                <motion.div
                  className={estilos.tarjeta}
                  custom={3}
                  initial="hidden"
                  animate={estaEnVista ? "visible" : "hidden"}
                  variants={tarjetaVariants}
                >
                  <FaHeart size={30} color="#D16BA5" />
                  <p>Círculo de Palabra</p>
                </motion.div>
              </div>
            </div>
            <motion.div
              className={estilos.infoCita}
              initial={{ opacity: 0, y: 30 }}
              animate={estaEnVista ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: 0.2 }}
            >
              <div style={{ display: "flex", flexDirection: "row", justifyContent: "center", marginBottom: "0.5rem" }}>
                <div className={estilos.tarjeta}>
                  <p><strong>🕒 Hora:</strong> de 3:00 a 7:00 pm</p>
                </div>
                <div className={estilos.tarjeta}>
                  <p><strong>📍 Lugar:</strong> Barrio Mesa, Envigado</p>
                </div>

                <div className={estilos.tarjeta}>
                  <p><strong>📅 Fecha:</strong> sábados o domingos</p>
                </div>
              </div>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <div >
                  <p><strong>❣️ Aporte:</strong> $88.000 COP</p>
                </div>

              </div>


            </motion.div>
          </div>


          <div className={estilos.botonesContenedor}>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className={estilos.botonReservar}
              onClick={() => {
                window.open("https://wa.me/+573052298710", "_blank");
              }}
            >
              Reserva tu espacio ✨
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className={estilos.botonSecundario}
              onClick={() => {
                navigate("/", { state: { scrollTo: "galeria" } });
              }}
            >
              Ver imágenes
            </motion.button>
          </div>

        </div>
      </div>
    </section>
  );
}
