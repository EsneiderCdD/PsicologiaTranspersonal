import React, { useRef, useEffect } from "react";
import estilos from "./CirculoMujeres.module.css";

import { motion, useInView } from "framer-motion";
import { useNavigate } from "react-router-dom";
import SwiperCard from "./SwiperCard";
import { circuloMujeresData } from "../../ss/data";
import { useLocation } from "react-router-dom";
import {
  FaLeaf,
  FaHeart,
  FaHandsHelping,
  FaStar,
  FaClock,
  FaMapMarkerAlt,
  FaCalendarAlt
} from "react-icons/fa";




export default function CirculoMujeres() {

  const location = useLocation();

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


  useEffect(() => {
    if (location.hash === "#circulomujeres") {
      const t = setTimeout(() => {
        const el = document.getElementById("circulomujeres");
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 150);
      return () => clearTimeout(t);
    }
  }, [location.hash]);

  return (
    <section id="circulomujeres" className={estilos.seccion}>
      <div className={estilos.contenedor}>

        <div className={estilos.contenido}>
          <div className={estilos.verticalLineLeft}></div>
          <div className={estilos.verticalLineRight}></div>

          <div className={estilos.parallax}>
            <div className={estilos.banner}></div>
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

          <motion.h4
            initial={{ opacity: 0, y: 20 }}
            animate={estaEnVista ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            En los círculos de mujeres vivimos:
          </motion.h4>

          <div className={estilos.iconContainer}>
            <div className={estilos.iconC}>
              <div className={estilos.item} style={{ "--item-color": "#E5E0FF" }}>
                <div className={estilos.icon}><FaLeaf /></div>
                <span className={estilos.iconText}>Meditaciones Profundas</span>
              </div>


              <div className={estilos.item} style={{ "--item-color": "#E5E0FF" }}>
                <div className={estilos.icon}><FaHandsHelping /></div>
                <span className={estilos.iconText}>Actividades Experienciales</span>
              </div>

              <div className={estilos.item} style={{ "--item-color": "#E5E0FF" }}>
                <div className={estilos.icon}><FaHeart /></div>
                <span className={estilos.iconText}>Círculo de Palabra</span>
              </div>
            </div>

            <div className={estilos.iconC}>
              <div className={estilos.item} style={{ "--item-color": "#E5E0FF" }}>
                <div className={estilos.icon}><FaClock /></div>
                <span className={estilos.iconText}>Hora: de 3:00 a 7:00 pm</span>
              </div>

              <div className={estilos.item} style={{ "--item-color": "#E5E0FF" }}>
                <div className={estilos.icon}><FaMapMarkerAlt /></div>
                <span className={estilos.iconText}>Lugar: Barrio Mesa, Envigado</span>
              </div>

              <div className={estilos.item} style={{ "--item-color": "#E5E0FF" }}>
                <div className={estilos.icon}><FaCalendarAlt /></div>
                <span className={estilos.iconText}>Fecha: sábados o domingos</span>
              </div>

              <div className={estilos.item} style={{ "--item-color": "#E5E0FF" }}>
                <div className={estilos.icon}><FaHeart /></div>
                <span className={estilos.iconText}>Aporte: $88.000 COP</span>
              </div>
            </div>
          </div>



          <div className={estilos.botones}>
            {/* Botón principal animado */}
            <motion.button
              className={estilos.boton}
              onClick={() => {
                window.open("https://wa.me/+573052298710", "_blank");
              }}
              initial={{ boxShadow: "none", backgroundColor: "#321033" }}
              animate={{
               backgroundColor: "#6b21a8",
                boxShadow: "0 0 25px #6b21a8, 0 0 50px #ca66ebaa",
                transition: {
                  delay: 1,
                  duration: 2,
                  ease: "easeInOut",
                },
              }}
        

            >
              Reserva tu espacio ✨
            </motion.button>
            <motion.button
              className={`${estilos.boton} ${estilos.botonSecundario}`}
              onClick={() => {
                navigate("/", { state: { scrollTo: "galeria" } });
              }}
              initial={{ border: "1px solid #000000ff" }}
              animate={{
                backgroundColor: "#f7edff",
                color: "#ca66eb",
                boxShadow: "0 0 70px #6b21a87f ",
                transition: { delay: 0.6, duration: 1.5, ease: "easeInOut" },
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
