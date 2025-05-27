import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import styles from "./ScrollSteps.module.css";
import Encabezado from "../global/Encabezado";
import gl from "../../assets/imagenes/gl.jpg"; // imagen para el círculo izquierdo
import pc from "../../assets/imagenes/pc.jpg"; // imagen para el círculo derecho


export default function ScrollSteps() {
const secciones = [
  {
    pregunta: "¿Cómo sé si la psicología transpersonal es para mí?",
    respuesta:
      "Si sientes que tu proceso personal va más allá de lo racional y deseas integrar cuerpo, mente y espíritu, la psicología transpersonal puede ofrecerte un espacio de transformación profunda.",
  },
  {
    pregunta: "¿Qué diferencia a esta terapia de otras?",
    respuesta:
      "Integra herramientas como meditación, visualización, respiración y símbolos, para acompañarte no solo desde lo mental, sino desde lo espiritual, emocional y corporal.",
  },
  {
    pregunta: "¿Es posible profundizar en mí misma a través de sesiones online?",
    respuesta:
      "Sí. La conexión virtual no limita la profundidad del proceso. Creamos un espacio íntimo y seguro desde donde estés, para que puedas abrirte y trabajar en ti.",
  },
  {
    pregunta: "¿Cuánto dura el proceso terapéutico?",
    respuesta:
      "Cada camino es único. Algunas personas trabajan un tema en pocas sesiones, otras se abren a un viaje más prolongado. Tú marcas el ritmo.",
  },
  {
    pregunta: "¿Qué tipo de temas se pueden abordar?",
    respuesta:
      "Desde procesos de autoconocimiento, heridas de la infancia, patrones repetitivos, hasta preguntas existenciales y conexión espiritual.",
  },
  {
    pregunta: "¿att neider -> que te diferencia de otros psicolog@s?",
    respuesta:
      "Desde procesos de autoconocimiento, heridas de la infancia, patrones repetitivos, hasta preguntas existenciales y conexión espiritual.",
  },
  {
    pregunta: "¿att neider -> que incluye la terapia?",
    respuesta:
      "Desde procesos de autoconocimiento, heridas de la infancia, patrones repetitivos, hasta preguntas existenciales y conexión espiritual.",
  },
  

];

return (
  <div>
    <Encabezado 
      titulo="Preguntas"
      destacado="Importantes"
      descripcion="Explora las preguntas más frecuentes sobre el proceso terapéutico"
    />
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
);
}