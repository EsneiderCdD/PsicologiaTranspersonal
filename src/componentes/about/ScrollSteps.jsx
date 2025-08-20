import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import styles from "./ScrollSteps.module.css";
import gl from "../../assets/imagenes/gl.jpg";
import pc from "../../assets/imagenes/pc.jpg";
import { preguntasData } from "../../ss/preguntas"; // 👈 importamos las preguntas

export default function ScrollSteps() {
  const [nombreRef, nombreEnVista] = useInView({ threshold: 0.5, triggerOnce: true });

  const underlineVariants = {
    hidden: { backgroundSize: "0% 2px" },
    visible: {
      backgroundSize: "100% 2px",
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <div style={{ backgroundColor: "#FBF8EF" }}>
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
            <h4>Explora las preguntas más frecuentes sobre el proceso terapéutico</h4>
          </div>
        </div>

        <div className={styles.container}>
          {preguntasData.map((item, index) => {
            const [ref, inView] = useInView({ threshold: 0.5, triggerOnce: false });
            return (
              <section ref={ref} key={index} className={styles.step}>
                <motion.div
                  className={styles.chatContainer}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.6 }}
                >
                  <div className={styles.preguntaWrapper}>
                    <div className={styles.burbujaPregunta}>
                      <p>{item.pregunta}</p>
                    </div>
                    <img src={gl} alt="pregunta" className={styles.avatar} />
                  </div>

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
