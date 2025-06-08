import React, { useState } from 'react';
import styles from './Testimonios.module.css';
import Encabezado from '../global/Encabezado';
import { motion } from 'framer-motion';



import mensajeCerrado from '../../assets/imagenes/mensajeCerrado.jpg';
import mensajeAbierto from '../../assets/imagenes/mensajeAbierto.jpg';
import t1 from '../../assets/imagenes/t1.jpeg';
import t2 from '../../assets/imagenes/t2.jpeg';
import t3 from '../../assets/imagenes/t3.jpeg';   
import t4 from '../../assets/imagenes/t4.jpeg';
import t5 from '../../assets/imagenes/t5.jpeg';
import t6 from '../../assets/imagenes/t6.jpeg';
import t7 from '../../assets/imagenes/t7.jpeg';
import t8 from '../../assets/imagenes/t8.jpeg';
import t9 from '../../assets/imagenes/t9.jpeg';
import t10 from '../../assets/imagenes/t10.jpeg';

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

const sobresData = [
  { id: 1, imagenAbierta: t1 },
  { id: 2, imagenAbierta: t2 },
  { id: 3, imagenAbierta: t3 },
  { id: 4, imagenAbierta: t4 },
  { id: 5, imagenAbierta: t5 },
  { id: 6, imagenAbierta: t6 },
  { id: 7, imagenAbierta: t7 },
  { id: 8, imagenAbierta: t8 },
  { id: 9, imagenAbierta: t9 },
  { id: 10, imagenAbierta: t10 },
];

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

  return (
    <div className={styles.Container}>
      <Encabezado
      
        destacado="Mensajes"
        descripcion="Fragmentos de historias y emociones que reflejan el impacto del acompañamiento en sesiones individuales y en grupo."

       />  
      <div className={styles.testimoniosLista}>
        {sobresData.map((sobre, index) => (
  <motion.div
    key={sobre.id}
    className={`${styles.sobreCard} ${abiertoId === sobre.id ? styles.abierto : ''}`}
    onClick={() => abrirSobre(sobre.id)}
    variants={cartaAnimacion}
    initial="hidden"
    animate="visible"
    whileHover={{ scale: 1.05 }}
    transition={{ delay: index * 0.05 }} // entrada en cascada opcional
  >
    <img
      src={abiertoId === sobre.id ? mensajeAbierto : mensajeCerrado}
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
              src={sobresData.find(s => s.id === abiertoId).imagenAbierta}
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
