import { FaWhatsapp, FaInstagram } from "react-icons/fa";
import styles from "../footer/Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.container}>
      <div className={styles.content}>
        <div className={styles.column}>
          <h3 className={styles.title}>Psicologia <span>Transpersonal</span></h3>
          <p className={styles.description}>
            Un espacio para la transformación personal a través del acompañamiento terapéutico
            y herramientas de psicología transpersonal.
          </p>
          <div className={styles.social}>
            <a className={styles.wpp} href="https://wa.me/+573052298710" target="_blank" rel="noopener noreferrer">
              <FaWhatsapp />
            </a>
            <a  className={styles.instagram} href="https://www.instagram.com/psicotranspersonal?igsh=MXZ3ZTIxeXh3MGI5Nw==" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
          </div>
        </div>

      </div>

      <div className={styles.bottom}>
      <small>&copy; {new Date().getFullYear()} @psicologiatranspersonal. Todos los derechos reservados.</small>
        <small>Hecho con 💜 </small>
      </div>
    </footer>
  );
}
