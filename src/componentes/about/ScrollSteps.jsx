import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import styles from "./ScrollSteps.module.css";
import Encabezado from "../global/Encabezado";

import { FiCalendar, FiMessageCircle, FiUsers } from "react-icons/fi";
import { FaInstagram, FaUserGraduate } from "react-icons/fa";
import { GiMoon, GiLotus } from "react-icons/gi";

export default function ScrollSteps() {
  const [experiencia, setExperiencia] = useState(0);
  const [sesiones, setSesiones] = useState(0);
  const [pacientes, setPacientes] = useState(0);
  const [seguidores, setSeguidores] = useState(0);

  // Secciones con placeholders (animados y estáticos)
  const secciones = [
    [
      { icono: <FiCalendar />, texto: `+${experiencia} años de experiencia`, key: "experiencia" },
      {
        icono: <FaInstagram />,
        texto: seguidores >= 1000 ? `${Math.round(seguidores / 1000)}K+ seguidores en Instagram` : `${seguidores} seguidores en Instagram`,
        key: "seguidores",
      },
    ],
    [
      { icono: <FiMessageCircle />, texto: `${sesiones} sesiones realizadas`, key: "sesiones" },
      { icono: <FiUsers />, texto: `${pacientes} personas distintas atendidas`, key: "pacientes" },
    ],
    [
      { icono: <GiMoon />, texto: "Certificada en Terapia Menstrual" },
      { icono: <GiLotus />, texto: "Diplomada en Psicología Transpersonal" },
      { icono: <FaUserGraduate />, texto: "Profesional en Psicología" },
    ],
  ];

  // Función para iniciar la animación de conteo
  const animarContadores = (index) => {
    if (index === 0) {
      const i1 = setInterval(() => setExperiencia((prev) => (prev < 4 ? prev + 1 : prev)), 500);
      const i2 = setInterval(() => setSeguidores((prev) => (prev < 190000 ? prev + 1250 : prev)), 50);
      return () => {
        clearInterval(i1);
        clearInterval(i2);
      };
    } else if (index === 1) {
      const i1 = setInterval(() => setSesiones((prev) => (prev < 500 ? prev + 10 : prev)), 100);
      const i2 = setInterval(() => setPacientes((prev) => (prev < 200 ? prev + 5 : prev)), 100);
      return () => {
        clearInterval(i1);
        clearInterval(i2);
      };
    }
    return () => {};
  };

  return (
    <div>
      <Encabezado />
      <div className={styles.container}>
        {secciones.map((grupo, index) => {
          const [ref, inView] = useInView({ threshold: 0.5, triggerOnce: false });

          // Animar solo si entra en vista
          useEffect(() => {
            if (inView) {
              const stop = animarContadores(index);
              return stop;
            }
          }, [inView]);

          return (
            <section ref={ref} key={index} className={styles.step}>
              <motion.div
                className={styles.card}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6 }}
              >
                <div className={styles.itemsGroup}>
                  {grupo.map((item, idx) => (
                    <div key={idx} className={styles.item}>
                      <div className={styles.icon}>{item.icono}</div>
                      <span>{item.texto}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </section>
          );
        })}
      </div>
    </div>
  );
}
