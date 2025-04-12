import { FaWhatsapp, FaInstagram } from "react-icons/fa";
import styles from "../footer/Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.container}>
      <div className={styles.content}>
        <div className={styles.image}></div>
        <div className={styles.text}>
          <h3>¿En qué te puedo servir?</h3>
          <p>
            Tal vez no buscabas exactamente una terapia, sino una guía, un consejo, o
            simplemente alguien que pueda escucharte y orientarte.
          </p>
          <p>
            Si tienes dudas o necesitas más información sobre cómo puedo ayudarte,
            no dudes en escribirme. ¡Estoy aquí para acompañarte!
          </p>
        </div>
        <div className={styles.socialButtons}>
          <a
            href="https://wa.me/123456789"
            target="_blank"
            className={styles.socialButton}
            rel="noopener noreferrer"
          >
            <FaWhatsapp size={30} />
          </a>
          <a
            href="https://www.instagram.com/tuInstagram"
            target="_blank"
            className={styles.socialButton}
            rel="noopener noreferrer"
          >
            <FaInstagram size={30} />
          </a>
        </div>
      </div>
      <div className={styles.bottom}>
        <p>&copy; {new Date().getFullYear()} Tu Nombre o Empresa. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}
