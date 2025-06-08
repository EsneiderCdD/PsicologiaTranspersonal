import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import styles from "./ScrollSteps.module.css";
import Encabezado from "../global/Encabezado";
import gl from "../../assets/imagenes/gl.jpg"; // imagen para el círculo izquierdo
import pc from "../../assets/imagenes/pc.jpg"; // imagen para el círculo derecho
import { useRef } from "react";
export default function ScrollSteps() {
  const secciones = [
    {
      pregunta: "¿Qué te diferencia de otros psicólogos transpersonales?",
      respuesta:
        "La confianza que mis pacientes sienten no nace solo de mi formación, sino de cómo sostengo el espacio terapéutico:  Cada historia la recibo con escucha profunda y presencia real. No me detengo en el síntoma, sino que acompaño a la persona a verse de forma más completa y conectada. Cada detalle está pensado con alma y profesionalismo, porque sanar también necesita un entorno que se sienta seguro.",
    },
    {
      pregunta: "¿Es posible profundizar en mí misma a través de sesiones online?",
      respuesta:
        "Sí. La conexión virtual no limita la profundidad del proceso. Creamos un espacio íntimo y seguro desde donde estés, para que puedas abrirte y trabajar en ti.",
    },
    {
      pregunta: " ¿Qué diferencia a la psicología transpersonal de otras psicologías?",
      respuesta:
        "La psicología transpersonal no se enfoca solo en resolver un problema, sino en comprender qué parte de ti está pidiendo ser escuchada. No es misticismo: es una invitación a reconectar con tu esencia y mirar tu proceso desde una perspectiva más profunda y transformadora.",
    },
    {
      pregunta: "¿Cómo sé si la psicología transpersonal es para mí?",
      respuesta:
        "Si sientes que tu proceso personal va más allá de lo racional y deseas integrar cuerpo, mente y espíritu, la psicología transpersonal puede ofrecerte un espacio de transformación profunda.",
    },
  ];
 const [nombreRef, nombreEnVista] = useInView({ threshold: 0.5, triggerOnce: true });

    
    const underlineVariants = {
    hidden: { backgroundSize: '0% 2px' },
    visible: {
      backgroundSize: '100% 2px',
      transition: { duration: 0.6, ease: 'easeOut' }
    }
  };

  return (
    <div style={{backgroundColor: "#FBF8EF"}}>
        <motion.div
    className={styles.borderLine}
    initial={{ width: 0 }}
    animate={{ width: "100%" }}
    transition={{ duration: 1.2, ease: "easeOut" }}
  />

      <div className={styles.contenedor}>

        
        <div className={styles.texto}>
          <div className={styles.titulo}>
      
                      <motion.h3
                        ref={nombreRef}
                        initial="hidden"
                        animate={nombreEnVista ? "visible" : "hidden"}
                        variants={underlineVariants}
                        className={styles.underlineEffect}
                      >
                        Preguntas Importantes
                      </motion.h3>
                      <h4>
                        Explora las preguntas más frecuentes sobre el proceso terapéutico
      
                        </h4>
          </div>
        </div>
        <div className={styles.container}>
          {secciones.map((item, index) => {
            const [ref, inView] = useInView({ threshold: 0.5, triggerOnce: false });
            return (
              <section ref={ref} key={index} className={styles.step}>
                <motion.div
                  className={styles.chatContainer}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.6 }}
                >
                  {/* Pregunta */}
                  <div className={styles.preguntaWrapper}>
                    <div className={styles.burbujaPregunta}>
                      <p>{item.pregunta}</p>
                    </div>
                    <img src={gl} alt="pregunta" className={styles.avatar} />
                  </div>
                  {/* Respuesta */}
                  <div className={styles.respuestaWrapper}>
                    <div className={styles.burbujaRespuesta}>
                      <p>{item.respuesta}</p>
                    </div>
                    <img src={pc} alt="respuesta" className={styles.avatar} />
                  </div>
                </motion.div>
              </section>
            );
          })}
        </div>
      </div>
        <motion.div
    className={styles.borderLine}
    initial={{ width: 0 }}
    animate={{ width: "100%" }}
    transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
  />
</div>

   
  );
}
