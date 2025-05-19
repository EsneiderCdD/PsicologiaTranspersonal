// PricingModal.jsx
import styles from './PricingModal.module.css';
import React, { useState } from 'react';

const PricingCard = ({ name, title, description, ahorro, currency2, price, currency, color, label, isSelected, onSelect }) => {
  return (
    <div
      className={`${styles.card} ${styles[color]} ${isSelected ? styles.selected : ''}`}
      onClick={onSelect}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => { if (e.key === 'Enter') onSelect(); }}
    >
      {label && <span className={styles.cardLabel}>{label}</span>}
      <div className={styles.cardHeader}>
        <h3>{name}</h3>
        
        <p className={styles.title}>{title}</p>
        <div className={styles.priceLine}>
          <span className={styles.price}>{price}</span>
          <span className={styles.currency}>{currency}</span>
          
        </div>
        <div className={styles.priceLine}>
          <span className={styles.ahorro}>{ahorro}</span>
          <span className={styles.currency2}>{currency2}</span>
        </div>
      </div>
      <p className={styles.description}>{description}</p>
      {isSelected && (
  <div className={styles.checkIcon}>
    ✓
  </div>
)}

    </div>
  );
};



export default function PricingModal({ isOpen, onClose }) {
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [termsAccepted, setTermsAccepted] = useState(false);

  if (!isOpen) return null;

  const handleSelect = (planName) => {
    setSelectedPlan(planName);
  };

  const handlePay = (method) => {
  if (!selectedPlan) {
    alert("Por favor selecciona un plan antes de continuar.");
    return;
  }
  
  if (!termsAccepted) {
    alert("Por favor acepta los términos y condiciones.");
    return;
  }

  if (method === "payu") {
    const url = getPayURedirectURL();
    if (url) {
      window.location.href = url;
    }
  } else if (method === "paypal") {
    // Aquí pones la lógica para PayPal, por ejemplo:
    alert("Redirigiendo a PayPal... (aquí va la URL real)");
    // window.location.href = tu_url_de_paypal;
  }
};


  const getPayURedirectURL = () => {
  switch (selectedPlan) {
    case "Sesión única":
      return "https://biz.payulatam.com/L0f9bc3C0F28215";
    case "Sesión estándar":
      return "https://biz.payulatam.com/L0f9bc3390AC10A";
    case "Premium":
      return "https://biz.payulatam.com/L0f9bc3AF3AEF92";
    default:
      return null;
  }
};

const handlePayUClick = () => {
  const url = getPayURedirectURL();
  if (url) {
    window.location.href = url;
  } else {
    alert("Por favor selecciona un plan antes de continuar.");
  }
};


  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeButton} onClick={onClose}>×</button>
        <div className={styles.container}>
          <div className={styles.header}>
            <h2>Elige las sesiones que más te gusten</h2>
          </div>
          <div className={styles.plans}>
            <PricingCard
              name="Única"
              title="1 Sesión"
              description="Un espacio puntual para abordar una necesidad inmediata o conocernos."
              price="$40"
              currency="USD"
              color="basic"
              isSelected={selectedPlan === "Sesión única"}
              onSelect={() => handleSelect("Sesión única")}
            />
            <PricingCard
              name="Estándar"
              title="4 Sesiones"
              description="Cuatro sesiones para conocerte, trabajar procesos y crear continuidad."
              price="$140"
              currency="USD"
              ahorro={"+$40"}
              currency2={"USD"}
              color="standard"
              label="Más vendido"
              isSelected={selectedPlan === "Sesión estándar"}
              onSelect={() => handleSelect("Sesión estándar")}
            />
            <PricingCard
              name="Premium"
              title="6 Sesiones"
              description="Una experiencia profunda y sostenida para trabajar a fondo tu bienestar."
              price="$200"
              currency="USD"
              ahorro={"+$40"}
              currency2={"USD"}
              color="premium"
              label="Recomendado"
              isSelected={selectedPlan === "Premium"}
              onSelect={() => handleSelect("Premium")}
            />
            

          </div>
          <div className={styles.termsNote}>
            <input
              type="checkbox"
              id="termsCheckbox"
              className={styles.termsCheckbox}
              checked={termsAccepted}
              onChange={() => setTermsAccepted(!termsAccepted)}
            />
            <label htmlFor="termsCheckbox" className={styles.warningText}>
              Para un servicio de calidad recuerda leer los acuerdos. Al pagar aceptas todos los{' '}
              <a
                href="/about"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.termsLink}
              >
                Términos y Condiciones
              </a>.
            </label>
          </div>


          <div className={styles.paymentButtons }>
            <button
              className={styles.payButton}
              disabled={!termsAccepted}
              onClick={() => handlePay("paypal")}
            >
              Pagar con PayPal
            </button>
            <button
              className={styles.payButton}
              disabled={!termsAccepted}
              onClick={() => handlePay("payu")}
            >
              Pagar con PayU
            </button>
          </div>


        </div>
      </div>
    </div>
  );
}
