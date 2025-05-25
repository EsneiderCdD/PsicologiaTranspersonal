import { useEffect, useState } from "react";
import { FiCalendar, FiMessageCircle, FiUsers } from "react-icons/fi";
import { FaInstagram, FaUserGraduate } from "react-icons/fa";
import { GiMoon, GiLotus } from "react-icons/gi";
import styles from "./IconCounterSet.module.css";

export default function IconCounterSet() {
  const [experiencia, setExperiencia] = useState(0);
  const [seguidores, setSeguidores] = useState(0);
  const [sesiones, setSesiones] = useState(0);
  const [pacientes, setPacientes] = useState(0);

  useEffect(() => {
    const i1 = setInterval(() => setExperiencia((prev) => (prev < 4 ? prev + 1 : prev)), 500);
    const i2 = setInterval(() => setSeguidores((prev) => (prev < 190000 ? prev + 1250 : prev)), 50);
    const i3 = setInterval(() => setSesiones((prev) => (prev < 500 ? prev + 10 : prev)), 100);
    const i4 = setInterval(() => setPacientes((prev) => (prev < 200 ? prev + 5 : prev)), 100);
    return () => {
      clearInterval(i1);
      clearInterval(i2);
      clearInterval(i3);
      clearInterval(i4);
    };
  }, []);

  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "2rem", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <div className={styles.item}>
          <div className={styles.icon}><FiCalendar /></div>
          <span>   +{experiencia} Años de experiencia </span>
        </div>
        <div className={styles.item}>
          <div className={styles.icon}><FaInstagram /></div>
          <span>+{seguidores >= 1000 ? `${Math.round(seguidores / 1000)}K` : seguidores} Seguidores en Instagram</span>
        </div>
        <div className={styles.item}>
          <div className={styles.icon}><FiMessageCircle /></div>
          <span>+{sesiones} Sesiones realizadas</span>
        </div>
        <div className={styles.item}>
          <div className={styles.icon}><FiUsers /></div>
          <span>+{pacientes} Personas atendidas</span>
        </div>
      </div>
      <div style={{display: "flex",  flexDirection: "row"}} >
        <div className={styles.item}>
          <div className={styles.icon}><GiMoon /></div>
          <span>Certificada en Terapia Menstrual</span>
        </div>
        <div className={styles.item}>
          <div className={styles.icon}><GiLotus /></div>
          <span>Diplomada en Psicología Transpersonal</span>
        </div>
        <div className={styles.item}>
          <div className={styles.icon}><FaUserGraduate /></div>
          <span>Psicologa Profesional</span>
        </div>
      </div >
    </div>
  );
}
