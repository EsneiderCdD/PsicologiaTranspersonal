import React, { useState } from 'react';
import styles from './Testimonios.module.css';

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
      <div className={styles.servicios}>
        <h2 className={styles.tituloSeccion}>
          Mensajes de <span style={{ color: '#8D2C24' }}>Personas</span>
        </h2>
        <p className={styles.descripcion}>
          Experiencias compartidas por personas que han formado parte de mi práctica terapéutica, tanto en sesiones individuales como grupales.
        </p>
      </div>

      <div className={styles.testimoniosLista}>
        {sobresData.map((sobre) => (
          <div
            key={sobre.id}
            className={`${styles.sobreCard} ${abiertoId === sobre.id ? styles.abierto : ''}`}
            onClick={() => abrirSobre(sobre.id)}
          >
            <img
              src={abiertoId === sobre.id ? mensajeAbierto : mensajeCerrado}
              alt="Mensaje"
              className={styles.sobreImagen}
            />
          </div>
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
