import React, { useState, useRef } from 'react';
import styles from './Testimonios.module.css';
import Encabezado from '../global/Encabezado';
import { motion, useInView } from 'framer-motion';
import { mensajeData } from '../../ss/data.js';
import { mensajesConfig } from '../../ss/mensajes';
const cartaAnimacion = {
  hidden: { opacity: 0, y: -50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 10,
      delay: 0.1
    }
  }
};

const Testimonios = () => {
  const [abiertoId, setAbiertoId] = useState(null);
  const [modalAbierto, setModalAbierto] = useState(false);

  const abrirSobre = (id) => {
    setAbiertoId(id);
    setModalAbierto(true);
  };

  const cerrarModal = () => {
    setModalAbierto(false);
  };

  const containerRef = useRef(null);
  const estaEnVista = useInView(containerRef, { once: true, margin: '-100px' });

  return (
    <div className={styles.Container} ref={containerRef}>
      <Encabezado
        destacado="Mensajes"
        descripcion={mensajeData.mensajes}
      />

      <div className={styles.testimoniosLista}>
        {mensajesConfig.sobres.map((sobre, index) => (
          <motion.div
            key={sobre.id}
            className={`${styles.sobreCard} ${abiertoId === sobre.id ? styles.abierto : ''}`}
            onClick={() => abrirSobre(sobre.id)}
            variants={cartaAnimacion}
            initial="hidden"
            animate={estaEnVista ? "visible" : "hidden"}
            whileHover={{ scale: 1.05 }}
            transition={{ delay: index * 0.05 }}
          >
            <img
              src={abiertoId === sobre.id ? mensajesConfig.sobreAbierto : mensajesConfig.sobreCerrado}
              alt="Mensaje"
              className={styles.sobreImagen}
            />
          </motion.div>
        ))}
      </div>

      {modalAbierto && (
        <div className={styles.modalOverlay}>
          <div className={styles.modalContent}>
            <button className={styles.cerrarModal} onClick={cerrarModal}>
              ×
            </button>
            <img
              src={mensajesConfig.sobres.find(s => s.id === abiertoId).imagenAbierta}
              alt="Mensaje abierto"
              className={styles.imagenModal}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Testimonios;
