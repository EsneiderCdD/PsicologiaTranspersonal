import { useState } from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import styles from "./ScrollSteps.module.css";
import Encabezado from "../global/Encabezado"

const preguntas = [
  {
    pregunta: "¿La terapia transpersonal es para mí?",
    respuesta:
      "La terapia transpersonal es ideal si estás en busca de una comprensión más profunda de ti misma, deseas sanar heridas emocionales o explorar tu propósito vital desde una mirada integral: cuerpo, mente y espíritu.",
  },
  
  {
    pregunta: "¿Cómo se desarrollan las sesiones virtuales?",
    respuesta:
      "Las sesiones virtuales se realizan por videollamada, en un ambiente seguro y confidencial. Se utilizan diversas herramientas terapéuticas y ejercicios prácticos que puedes aplicar entre sesiones.",
  },
  {
    pregunta: "¿Cuántas sesiones necesitaré?",
    respuesta:
      "La cantidad de sesiones depende de tus objetivos personales. Algunas personas logran avances significativos en pocas sesiones, mientras que otras optan por un acompañamiento más prolongado.",
  },
  
];

export default function ScrollSteps() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div>
      <Encabezado />
      <div className={styles.container}>
        {preguntas.map((item, index) => {
          const [ref, inView] = useInView({
            threshold: 0.6, // más del 60% visible
            triggerOnce: false,
          });
          if (inView && activeIndex !== index) {
            setActiveIndex(index);
          }
          return (
            <section ref={ref} key={index} className={styles.step}>
              <motion.div
                className={styles.card}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6 }}
              >
                <h2>{item.pregunta}</h2>
                <p>{item.respuesta}</p>
              </motion.div>
            </section>
          );
        })}
      </div>
    </div>
  );
}
