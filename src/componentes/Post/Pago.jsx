import React from 'react';
import styles from './Pago.module.css';

const Pago = () => {
return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.iconWrapper}>
          <svg
            className={styles.checkIcon}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>

        <h1 className={styles.title}>Tu compra ha sido exitosa</h1>

        <p className={styles.message}>
          Me alegra profundamente que hayas decidido dar este paso.  
          Espero encontrarte en la sesión para comenzar juntas este recorrido de autodescubrimiento.
        </p>

        <p className={styles.note}>
          Por favor, no olvides enviarme el comprobante de pago para que podamos agendar tu espacio.
        </p>

        <div className={styles.buttons}>
          <a href="/" className={`${styles.button} ${styles.secondary}`}>Volver al inicio</a>
          <a href="/contacto" className={`${styles.button} ${styles.primary}`}>Contactarme</a>
        </div>
      </div>
    </div>
  );
};

export default Pago;
