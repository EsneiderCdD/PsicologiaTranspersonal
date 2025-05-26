import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import styles from '../ocupacion/Ocupacion.module.css'; // Reutilizamos el CSS

const SeccionEncabezado = ({ titulo , destacado = "Palabra", descripcion = "Texto descriptivo aquí."  }) => {
  const tituloRef = useRef(null);
  const descripcionRef = useRef(null);

  const tituloEnVista = useInView(tituloRef, { once: false, margin: "-100px" });
  const descripcionEnVista = useInView(descripcionRef, { once: true, margin: "-100px" });

  const variantesColor = {
    oculto: { color: "#000000" },
    visible: {
      color: "#8D2C24",
      transition: { duration: 0.5, ease: "easeInOut" }
    }
  };

  return (
    <div className={styles.servicios}>
      <h2 className={styles.tituloSeccion}>
        {titulo}{" "}
        <motion.span
          ref={tituloRef}
          variants={variantesColor}
          initial="oculto"
          animate={tituloEnVista ? "visible" : "oculto"}
        >
          {destacado}
        </motion.span>
      </h2>

      <motion.p
        ref={descripcionRef}
        className={styles.descripcion}
        initial={{ opacity: 0 }}
        animate={
          descripcionEnVista
            ? { opacity: 1, transition: { duration: 1.2, delay: 0.2 } }
            : {}
        }
      >
        {descripcion}
      </motion.p>
    </div>
  );
};

export default SeccionEncabezado;
