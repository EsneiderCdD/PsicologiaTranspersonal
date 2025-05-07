

import styles from '../ocupacion/Ocupacion.module.css';
import { motion, useInView } from 'framer-motion';
import {
  FaVideo, FaUsers, FaCalendarAlt, FaUserCheck, FaHome,
  FaRegLightbulb, FaSpa, FaFemale, FaHandsHelping, FaPlus
} from 'react-icons/fa';
import React, { useRef } from 'react';
import { Link } from 'react-router-dom';

const Ocupacion = () => {
  const tituloRef = useRef(null);
  const parrafoRef = useRef(null);

  const tituloEnVista = useInView(tituloRef, { once: false, margin: "-100px" });
  const parrafoEnVista = useInView(parrafoRef, { once: true, margin: "-100px" });


  const variantesServicios = {
    oculto: { color: "#000000" },
    visible: {
      color: "#a78bfa",
      transition: { duration: 0.5, ease: "easeInOut" }
    }
  };
  const cardPrincipalRef = useRef(null);
  const cardSecundarioRef = useRef(null);

  const cardPrincipalEnVista = useInView(cardPrincipalRef, { once: true, margin: "-100px" });
  const cardSecundarioEnVista = useInView(cardSecundarioRef, { once: true, margin: "-100px" });


  return (
    <div className={styles.servicios}>
      <h2 className={styles.tituloSeccion}>
        Mis{" "}
        <motion.span
          ref={tituloRef}
          variants={variantesServicios}
          initial="oculto"
          animate={tituloEnVista ? "visible" : "oculto"}
        >
          Servicios
        </motion.span>


      </h2>

        <motion.p
          ref={parrafoRef}
          className={styles.descripcion}
          initial={{ opacity: 0 }}
          animate={parrafoEnVista ? { opacity: 1, transition: { duration: 1.2, delay: 0.2 } } : {}}
        >
          Acompañamientos personalizados desde la Psicología Transpersonal para ayudarte a reconectar con tu esencia, sanar y transformar tu realidad desde una mirada integradora.
        </motion.p>
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
        <h2><FaVideo className={styles.icon} /> Terapia Personalizada Virtual</h2>
        <p>
          Sesiones personalizadas en un espacio seguro y confidencial donde trabajaremos juntos
          para abordar tus desafíos emocionales, construir resiliencia y desarrollar estrategias
          efectivas para mejorar tu bienestar.
        </p>
        <ul className={styles.listaBeneficios}>
        <li><FaSpa className={styles.iconoInline} /> Enfoque holístico y espiritual</li>
          
          <li><FaRegLightbulb className={styles.iconoInline} /> Material de Apoyo Personalizado</li>

          <Link to="/about" className={styles.botonConocerMas}>
            <FaPlus className={styles.iconoInline} /> Conocer Más
          </Link>

        </ul>
        <button className={styles.botonPrincipal}>Reservar Sesión</button>
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
        <h2><FaUsers className={styles.icon} /> Terapia Grupal Presencial</h2>
        <p>
          Sesiones en grupo donde compartirás experiencias con otras personas, aprendiendo juntos
          en un espacio de apoyo mutuo y crecimiento colectivo.
        </p>
        <div className={styles.frecuenciaBox}>
          <ul className={styles.listaBeneficios}>
            
            <li><FaFemale className={styles.iconoInline} /> Círculo íntimo de mujeres</li>
            <li><FaHandsHelping className={styles.iconoInline} /> Espacio para compartir y reflexionar</li>
            <Link to="/about" className={styles.botonConocerMas}>
            <FaPlus className={styles.iconoInline} /> Conocer Más
          </Link>
          </ul>
        </div>
        <button className={styles.botonSecundario}>Ver Próximas Fechas</button>
      </div>
    </motion.div>
  </div>

    </div>
  );
};

export default Ocupacion;
