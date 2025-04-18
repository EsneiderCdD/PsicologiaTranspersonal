// Ocupacion.jsx
import React from 'react';
import styles from '../ocupacion/Ocupacion.module.css';
import { FaVideo, FaUsers, FaCalendarAlt } from 'react-icons/fa';

const Ocupacion = () => {
  return (
    
    <div>
            <h2 className={styles.tituloSeccion}>Servicios</h2>
                      <p className={styles.descripcion2}>
                        Acompañamientos personalizados desde la Psicología Transpersonal para ayudarte a reconectar con tu esencia, sanar y transformar tu realidad desde una mirada integradora.
                  </p>
        <div className={styles.container}>
        
          <div className={styles.cardPrincipal}>
            <div className={styles.imagePrincipal}></div>
            <div className={styles.contentPrincipal}>
              <span className={styles.etiquetaPrincipal}>Servicio Principal</span>
              <h2><FaVideo className={styles.icon} /> Terapia 1 a 1 Virtual</h2>
              <p>
                Sesiones personalizadas en un espacio seguro y confidencial donde trabajaremos juntos
                para abordar tus desafíos emocionales, construir resiliencia y desarrollar estrategias
                efectivas para mejorar tu bienestar.
              </p>
              <div className={styles.beneficiosBox}>
                <ul>
                  <li>✓ Atención personalizada
                  </li>
                  <li>✓ Comodidad desde casa</li>
                </ul>
                <ul>
                  <li>✓ Flexibilidad horaria</li>
                  <li>✓ Total confidencialidad</li>
                </ul>
              </div>
              <p className={styles.duracion}><strong>Duración: 50 minutos</strong></p>
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
              <p><FaCalendarAlt className={styles.iconSmall} /> <strong>Frecuencia:</strong></p>
              <p>
                Se realiza cada 1-2 meses. Consulta el calendario para las próximas fechas disponibles.
              </p>
            </div>
            <button className={styles.botonSecundario}>Ver Próximas Fechas</button>
            </div>
          </div>
        </div>
    </div>
  );
};

export default Ocupacion;
