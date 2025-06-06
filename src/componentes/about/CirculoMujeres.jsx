import React, { useRef } from "react";
import estilos from "./CirculoMujeres.module.css";
import ft0 from "../../assets/imagenes/ft0.jpeg";
import { FaLeaf, FaHeart, FaHandsHelping, FaStar } from 'react-icons/fa';
import Encabezado from "../global/Encabezado";
import { motion, useInView } from "framer-motion";

export default function CirculoMujeres() {
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

  // Ref para el contenedor que engloba los textos e íconos animados
  const animacionRef = useRef(null);
  const estaEnVista = useInView(animacionRef, { once: true, margin: "0px 0px -100px 0px" });

  return (
    <section className={estilos.seccion}>
      <div className={estilos.contenedor}>
  

        <div className={estilos.contenido}>
          <div className={estilos.parallax}>
            <div className={estilos.parallaxImagen}></div>
          </div>

          <h2>
            Circulo de Mujeres
          </h2>
          <h2>
            Del uno al nosotros: tejemos en círculo la piel viva de un sueño que quiso volverse abrazo.
            
            </h2>          

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
            {[
              "Este espacio nació de forma orgánica, como un susurro del corazón. Al principio fue una simple invitación a compartir entre amigas, y con el tiempo, se fue tejiendo algo más profundo. Lo que comenzó como un encuentro casual se transformó en un lugar sagrado, donde las mujeres pueden ser, sentir y expresarse sin miedo ni juicio.",
              "El círculo es un reflejo de lo que anhelo ver más en el mundo: espacios seguros, libres, humanos. Ahí se comparten emociones, pensamientos, silencios y memorias. Es un espacio de entrega, de aprendizaje y de liberación, donde cada mujer suelta lo que ya no le pertenece y recibe aquello que nutre su camino."
            ].map((text, index) => (
              <motion.p key={index} variants={textoVariants}>
                {text}
              </motion.p>
            ))}
          </motion.div>

          <div className={estilos.actividades}>
            <motion.h4
              initial={{ opacity: 0, y: 20 }}
              animate={estaEnVista ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              En los círculos de mujeres vivimos:
            </motion.h4>

            <div className={estilos.tarjetas}>
              {[ 
                { icon: <FaHeart size={30} color="#D16BA5" />, text: "Círculo de Palabra" },
                { icon: <FaLeaf size={30} color="#6CB28E" />, text: "Meditaciones Profundas" },
                { icon: <FaHandsHelping size={30} color="#FF9A8B" />, text: "Actividades Experienciales" },
                { icon: <FaStar size={30} color="#FFD166" />, text: "Rituales de Conexión" }
              ].map((item, i) => (
                <motion.div
                  className={estilos.tarjeta}
                  key={i}
                  custom={i}
                  initial="hidden"
                  animate={estaEnVista ? "visible" : "hidden"}
                  variants={tarjetaVariants}
                >
                  {item.icon}
                  <p>{item.text}</p>
                </motion.div>
              ))}
            </div>

            <motion.div
              className={estilos.infoCita}
              initial={{ opacity: 0, y: 30 }}
              animate={estaEnVista ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: 0.3 }}
            >
              <p><strong>📅 Fecha:</strong> sábados o domingos</p>
              <p><strong>🕒 Hora:</strong> de 3:00 a 7:00 pm</p>
              <p><strong>📍 Lugar:</strong> Barrio Mesa, Envigado</p>
              <p><strong>❣️ Aporte:</strong> $88.000 COP</p>
            </motion.div>
          </div>

         <div className={estilos.botonesContenedor}>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className={estilos.botonReservar}
          >
            Reserva tu espacio ✨
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className={estilos.botonSecundario}
          >
            Ver imágenes
          </motion.button>
        </div>


        </div>
      </div>
    </section>
  );
}
