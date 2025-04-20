import { FaWhatsapp, FaInstagram } from "react-icons/fa";
import styles from "../footer/Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.container}>
      <div className={styles.content}>
        <div className={styles.column}>
          <h3 className={styles.title}>Psyche<span>Trans</span></h3>
          <p className={styles.description}>
            Un espacio para la transformación personal a través del acompañamiento terapéutico
            y herramientas de psicología transpersonal.
          </p>
          <div className={styles.social}>
            <a href="https://wa.me/123456789" target="_blank" rel="noopener noreferrer">
              <FaWhatsapp />
            </a>
            <a href="https://www.instagram.com/tuInstagram" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
          </div>
        </div>

        <div className={styles.column}>
          <h4 className={styles.subtitle}>¿En qué te puedo servir?</h4>
          <p className={styles.helper}>
            Tal vez no encontraste justo lo que buscabas. Podés escribirme un mensaje, compartir tu inquietud o simplemente saludar. Estoy aquí para acompañarte.
          </p>
          <p className={styles.contacto}>📱 WhatsApp: +123 456 789</p>
          <p className={styles.contacto}>📷 Instagram: @tuInstagram</p>
        </div>

        <div className={styles.column}>
          <h4 className={styles.subtitle}>Horario de atención</h4>
          <p>Lunes a Viernes: 9:00 - 19:00</p>
          <p>Sábados: 10:00 - 14:00</p>
          <p>Domingos: Cerrado</p>
          <small className={styles.nota}>Las sesiones grupales se programan mensualmente. Consulta el calendario.</small>
        </div>
      </div>

      <div className={styles.bottom}>
      <small>&copy; {new Date().getFullYear()} PsycheTrans. Todos los derechos reservados.</small>
        <small>Hecho con 💜 </small>
      </div>
    </footer>
  );
}
