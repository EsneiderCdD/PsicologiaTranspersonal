
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
import { ocupacionData } from '../../data/data';

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
            <p>
              {ocupacionData.servicioPrincipal}
            </p>
            <ul className={styles.listaBeneficios}>
              <li><FaSpa className={styles.iconoInline} /> Enfoque holístico y consciente</li>

              <li><FaRegLightbulb className={styles.iconoInline} /> Material de apoyo personalizado</li>

              <li><FaDesktop className={styles.iconoInline} /> Virtual, desde tu comodidad</li>
            </ul>
            <div className={styles.botonesCard}>
              <button
                className={styles.botonPrincipal}
                onClick={() => setMostrarPricing(!mostrarPricing)}
              >
                Reservar Sesión
              </button>

              <Link to="/about#servicios">
                <button className={styles.botonPrincipal}>Saber Más</button>
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
            <p>
              {ocupacionData.servicioSecundario}
            </p>

            <ul className={styles.listaBeneficios}>

              <li><FaFemale className={styles.iconoInline} /> Círculo íntimo de mujeres</li>
              <li><FaHandsHelping className={styles.iconoInline} /> Espacio para compartir y reflexionar</li>
              <li><FaMapMarkerAlt className={styles.iconoInline} /> Evento presencial</li>

            </ul>

            <div className={styles.botonesCard}>
              <a
                href="https://wa.me/+573052298710"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.botonSecundario}
              >
                Reservar un cupo
              </a>

              <Link to="/about#circulo">
                <button className={styles.botonSecundario}>Saber Más</button>
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
