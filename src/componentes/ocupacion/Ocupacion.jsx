
import styles from '../ocupacion/Ocupacion.module.css';
import { motion, useInView } from 'framer-motion';
import {
  FaVideo, FaUsers, FaCalendarAlt, FaUserCheck, FaHome,
  FaRegLightbulb, FaSpa, FaFemale, FaHandsHelping, FaPlus, FaDesktop, FaMapMarkerAlt
} from 'react-icons/fa';
import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import Modal from '../ocupacion/Modal';
import Encabezado from '../global/Encabezado';
import { ocupacionData } from '../../ss/data';

const Ocupacion = () => {

  const [mostrarPricing, setMostrarPricing] = useState(false);


  const tituloRef = useRef(null);
  const parrafoRef = useRef(null);

  const cardPrincipalRef = useRef(null);
  const cardSecundarioRef = useRef(null);

  const cardPrincipalEnVista = useInView(cardPrincipalRef, { once: true, margin: "-100px" });
  const cardSecundarioEnVista = useInView(cardSecundarioRef, { once: true, margin: "-100px" });


  return (
    <div className={styles.servicios}>
      <Encabezado
        titulo=""
        destacado="Servicios"
        descripcion={ocupacionData.servicios}>
      </Encabezado>

      <div className={styles.container}>
        <motion.div
          ref={cardPrincipalRef}
          className={styles.cardPrincipal}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={cardPrincipalEnVista ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
        >

          <div className={styles.imagePrincipal}></div>
          <div className={styles.contentPrincipal}>
            <span className={styles.etiquetaPrincipal}>Servicio Principal</span>
            <h2><FaVideo className={styles.icon} /> Acompañamiento Terapéutico  </h2>
            <br />
            <p>
              {ocupacionData.servicioPrincipal}
            </p>
            <ul className={styles.listaBeneficios}>
              <li><FaSpa className={styles.iconoInline} /> Enfoque holístico y consciente</li>

              <li><FaRegLightbulb className={styles.iconoInline} /> Material de apoyo personalizado</li>

              <li><FaDesktop className={styles.iconoInline} /> Virtual, desde tu comodidad</li>
            </ul>
            <div className={styles.botonesCard}>
              <motion.button
                className={styles.botonPrincipal}
                onClick={() => setMostrarPricing(!mostrarPricing)}
                initial={{ boxShadow: "none", backgroundColor: "#321033" }}
                animate={{
                  boxShadow: "0 0 20px #6b21a8, 0 0 40px #ca66eb66",
                  backgroundColor: "#6b21a8",
                  transition: {
                    delay: 1,
                    duration: 2,
                    ease: "easeInOut",
                  },
                }}
     

              >
                Reservar Sesión
              </motion.button>

              <Link to="/Psicotranspersonal">
                <motion.button className={styles.botonPrincipal}
                  initial={{ backgroundColor: "transparent", color: "#999" }}
                  animate={{
                    backgroundColor: "#f7edff",
                    color: "#ca66eb",
                    boxShadow: "0 0 70px #6b21a87f ",
                    transition: { delay: 0.6, duration: 1.5, ease: "easeInOut" },
                  }}
                >
                  Saber Más</motion.button>
              </Link>

            </div>
          </div>
        </motion.div>

        <motion.div
          ref={cardSecundarioRef}
          className={styles.cardSecundario}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={cardSecundarioEnVista ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.4 }}
        >

          <div className={styles.secundaria}></div>
          <div className={styles.contentPrincipal}>
            <span className={styles.etiquetaSecundaria}>Servicio Eventual</span>
            <h2><FaUsers className={styles.icon} /> Circulo de Mujeres</h2>
            <br />
            <p>
              {ocupacionData.servicioSecundario}
            </p>

            <ul className={styles.listaBeneficios}>

              <li><FaFemale className={styles.iconoInline} /> Círculo íntimo de mujeres</li>
              <li><FaHandsHelping className={styles.iconoInline} /> Espacio para compartir y reflexionar</li>
              <li><FaMapMarkerAlt className={styles.iconoInline} /> Evento presencial</li>

            </ul>

            <div className={styles.botonesCard}>
              <motion.button
                onClick={() => window.open("https://wa.me/+573052298710", "_blank", "noopener,noreferrer")}
                className={styles.botonSecundario}
                initial={{ boxShadow: "none", backgroundColor: "#7c261eff" }}
                animate={{
                  boxShadow: "0 0 20px #b91c1c, 0 0 40px #ef444466",
                  backgroundColor: "#ab1f1fe3",
                  transition: {
                    delay: 1,
                    duration: 2,
                    ease: "easeInOut",
                  },
                }}
                whileHover={{
                  backgroundColor: "#b91c1c",
                  boxShadow: "0 0 25px #b91c1c, 0 0 50px #ef4444aa",
                  transition: { duration: 1.5 },
                }}
              >
                Reservar un cupo
              </motion.button>



              <Link to="/circuloMujeres">
                <motion.button className={styles.botonSecundario}
                  initial={{ backgroundColor: "transparent", color: "#000000ff" }}
                  animate={{
                    backgroundColor: "#ffedf4ff",
                    color: "#8d2d24e5",
                    boxShadow: "0 0 35px #b91c1c92 ",
                    transition: { delay: 0.6, duration: 1.5, ease: "easeInOut" },
                  }}
                >
                  Saber Más</motion.button>
              </Link>
            </div>

          </div>
        </motion.div>
      </div>

      <Modal
        isOpen={mostrarPricing}
        onClose={() => setMostrarPricing(false)}
        showTerms={true}
        requireTermsAcceptance={true}
        confirmText="Reservar ahora"
      />
    </div>
  );
};

export default Ocupacion;
