// PricingModal.jsx
import styles from './PricingModal.module.css';
import React from 'react';

const PricingCard = ({ name, title, description, price, currency, color, label }) => {
  return (
    <div className={`${styles.card} ${styles[color]}`}>
      {label && <span className={styles.cardLabel}>{label}</span>}
      <div className={styles.cardHeader}>
        <h3>{name}</h3>
        <div className={styles.priceLine}>
          <span className={styles.price}>{price}</span>
          <span className={styles.currency}>{currency}</span>
        </div>
        <p className={styles.title}>{title}</p>
      </div>
      <p className={styles.description}>{description}</p>
      <button className={styles.button}>Comprar</button>
    </div>
  );
};


export default function PricingModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeButton} onClick={onClose}>×</button>
        <div className={styles.container}>
          <div className={styles.header}>
            <h2>Elige tu plan</h2>
            <p>Elige el número de sesiones que más se adapte a ti</p>
          </div>
          <div className={styles.plans}>
            <PricingCard
              name="Sesión única"
              title="1 Sesión"
              description="Un espacio puntual para abordar una necesidad inmediata o conocernos."
              price="$40"
              currency="USD"
              color="basic"
            />
            <PricingCard
              name="Sesión estándar"
              title="4 Sesiones"
              description="Cuatro sesiones para conocerte, trabajar procesos y crear continuidad."
              price="$140"
              currency="USD"
              color="standard"
              label="Más vendido"
            />
            <PricingCard
              name="Premium"
              title="6 Sesiones"
              description="Una experiencia profunda y sostenida para trabajar a fondo tu bienestar."
              price="$200"
              currency="USD"
              color="premium"
              label="Recomendado"
            />
            <PricingCard
              name="Sesión Personalizada"
              title="Sesiones Personalizadas"
              description="Precios especiales para quienes ya adquirieron un plan o requieren un proceso más intenso o prolongado."
              price="Cotizar"
              currency=""
              color="custom"
              label="Premium"
            />

          </div>

          <div className={styles.paymentButtons}>
            <button className={styles.payButton}>Pagar con PayPal</button>
            <button className={styles.payButton}>Pagar con PayU</button>
          </div>
        </div>
      </div>
    </div>
  );
}
