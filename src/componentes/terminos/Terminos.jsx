import React, { useState, useEffect } from 'react';
import styles from './Terminos.module.css';
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useLocation } from "react-router-dom";
import tyc from "../../ss/tyc";

const Terminos = () => {
  const [selectedTab, setSelectedTab] = useState('Pagos');
  const [nombreRef, nombreEnVista] = useInView({ threshold: 0.5, triggerOnce: true });

  const location = useLocation();

  const underlineVariants = {
    hidden: { backgroundSize: '0% 2px' },
    visible: {
      backgroundSize: '100% 2px',
      transition: { duration: 0.6, ease: 'easeOut' }
    }
  };
  
    useEffect(() => {
      if (location.hash === "#tyc") {
        const t = setTimeout(() => {
          const el = document.getElementById("tyc");
          if (el) el.scrollIntoView({ behavior: "smooth" });
        }, 150); 
        return () => clearTimeout(t);
      }
    }, [location.hash]);

  return (
    <div id="tyc" className={styles.contenedor}>
      <div className={styles.texto}>
        <div className={styles.titulo}>
          <motion.h3
            ref={nombreRef}
            initial="hidden"
            animate={nombreEnVista ? "visible" : "hidden"}
            variants={underlineVariants}
            className={styles.underlineEffect}
          >
            Acuerdos
          </motion.h3>
          <h4>
            Para asegurar una experiencia terapéutica óptima, es importante establecer algunos acuerdos claros
          </h4>
        </div>

        <div className={styles.container}>
          <div className={styles.tabButtons}>
            <div className={styles.buttonGroup1}>
              <button
                className={`${styles.tabButton} ${selectedTab === 'Horarios' ? styles.active : ''}`}
                onClick={() => setSelectedTab('Horarios')}
              >
                Horarios
              </button>
              <button
                className={`${styles.tabButton} ${selectedTab === 'Cancelaciones' ? styles.active : ''}`}
                onClick={() => setSelectedTab('Cancelaciones')}
              >
                Cancelaciones
              </button>
            </div>
            <div className={styles.buttonGroup2}>
              <button
                className={`${styles.tabButton} ${selectedTab === 'Pagos' ? styles.active : ''}`}
                onClick={() => setSelectedTab('Pagos')}
              >
                Pagos
              </button>
              <button
                className={`${styles.tabButton} ${selectedTab === 'Confidencialidad' ? styles.active : ''}`}
                onClick={() => setSelectedTab('Confidencialidad')}
              >
                Confidencialidad
              </button>
            </div>
          </div>

          <div className={styles.contentBox}>
            <h3 className={styles.sectionTitle}>{tyc[selectedTab].title}</h3>
            <ul className={styles.list}>
              {tyc[selectedTab].content.map((item, index) => (
                <li key={index} className={styles.listItem}>• {item}</li>
              ))}
            </ul>
          </div>

          <p className={styles.footer}>
            Al agendar una sesión, confirmas que has leído, comprendido y aceptado estos términos y condiciones en su totalidad.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Terminos;
