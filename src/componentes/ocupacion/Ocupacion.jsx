// Ocupacion.jsx
import React from 'react';
import styles from '../ocupacion/Ocupacion.module.css';
import { FaVideo, FaUsers, FaCalendarAlt, } from 'react-icons/fa';
import { FaUserCheck, FaHome, FaRegLightbulb } from 'react-icons/fa';
import {FaSpa,
  FaFemale,
  FaHandsHelping} from 'react-icons/fa';



const Ocupacion = () => {
  return ( 
    <div className={styles.servicios}>
      <h2 className={styles.tituloSeccion}>Mis Servicios</h2>
        <p className={styles.descripcion}>
            Acompañamientos personalizados desde la Psicología Transpersonal para ayudarte a reconectar con tu esencia, sanar y transformar tu realidad desde una mirada integradora.
        </p>
      <div className={styles.container}>
      
        <div className={styles.cardPrincipal}>
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
              <li><FaUserCheck className={styles.iconoInline} /> Atención Profesional</li>
              <li><FaHome className={styles.iconoInline} /> Desde casa </li>
              <li><FaRegLightbulb className={styles.iconoInline} /> Material de Apoyo Personalzia</li>
            </ul>

            
            <button className={styles.botonPrincipal}>Reservar Sesión</button>
          </div>
        </div>
        <div className={styles.cardSecundario}>
        <div className={styles.secundaria}></div>
        <div className={styles.contentPrincipal}>
          <span className={styles.etiquetaSecundaria}>Servicio Eventual</span>
          <h3><FaUsers className={styles.icon} /> Terapia Grupal Presencial</h3>
          <p>
            Sesiones en grupo donde compartirás experiencias con otras personas, aprendiendo juntos
            en un espacio de apoyo mutuo y crecimiento colectivo.
          </p>
          <div className={styles.frecuenciaBox}>
  <ul className={styles.listaBeneficios}>
    <li><FaSpa className={styles.iconoInline} /> Enfoque holístico y espiritual</li>
    <li><FaFemale className={styles.iconoInline} /> Círculo íntimo de mujeres</li>
    <li><FaHandsHelping className={styles.iconoInline} /> Espacio para compartir y reflexionar</li>
  </ul>
</div>

          <button className={styles.botonSecundario}>Ver Próximas Fechas</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ocupacion;
