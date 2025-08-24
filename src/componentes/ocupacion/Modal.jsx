import React, { useState } from "react";
import styles from "./Modal.module.css";
import { FaCheckCircle } from "react-icons/fa";
import { productos } from "../../ss/producto"; // ✅ importamos la data centralizada

const Modal = ({
  isOpen,
  onClose,
  showTerms,
  requireTermsAcceptance,
  confirmTextPayU = "Pagar con tarjeta de débito o crédito",
  confirmTextPayPal = "Pagar con PayPal",
}) => {
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [termsAccepted, setTermsAccepted] = useState(false);

  const handleContinue = (method) => {
    if (!selectedPlan || (requireTermsAcceptance && !termsAccepted)) return;

    const selected = productos.find((p) => p.title === selectedPlan);
    if (selected) {
      const url = selected.links[method];
      if (url) {
        window.open(url, "_blank");
      }
    }
  };

  if (!isOpen) return null;

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <button className={styles.closeButton} onClick={onClose}>✕</button>
        <h2 className={styles.title}>Selecciona el plan que más te gusta</h2>

        <div className={styles.cardContainer}>
          {productos.map((plan) => (
            <div
              key={plan.title}
              onClick={() => setSelectedPlan(plan.title)}
              className={`${styles.cardWrapper} ${selectedPlan === plan.title ? styles.selected : ""}`}
            >
              <div className={styles.card}>
                <div className={styles.iconContainer}>
                  <div className={styles.iconPlaceholder}>
                    <img src={plan.image} alt={`Icono ${plan.title}`} className={styles.icon} />
                  </div>
                </div>
                <h3 className={styles.title}>{plan.title}</h3>
                <p className={styles.description}>{plan.description}</p>
                <div className={styles.price}>
                  {plan.price} <span className={styles.currency}>USD</span>
                </div>
              </div>

              {selectedPlan === plan.title && (
                <div className={styles.checkmark}>
                  <span className={styles.checkmarkIcon}><FaCheckCircle /></span>
                </div>
              )}
            </div>
          ))}
        </div>

        {showTerms && (
          <div className={styles.terms}>
            <label>
              <input
                type="checkbox"
                checked={termsAccepted}
                onChange={(e) => setTermsAccepted(e.target.checked)}
              />
              &nbsp; Acepto{" "}
              <a
                href="https://psicologiatranspersonal.vercel.app/about#terminos"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.termsLink}
              >
                términos y condiciones
              </a>
            </label>
            <p className={styles.reminder}>
              Recuerda enviarme el comprobante de pago para agendar
            </p>
          </div>
        )}

        <div className={styles.buttonContainer}>
          <button
            className={`${styles.continueButton} ${selectedPlan && (!requireTermsAcceptance || termsAccepted)
              ? styles.active
              : styles.disabled}`}
            onClick={() => handleContinue("payu")}
            disabled={!selectedPlan || (requireTermsAcceptance && !termsAccepted)}
          >
            {confirmTextPayU}
          </button>

          <button
            className={`${styles.continueButton} ${selectedPlan && (!requireTermsAcceptance || termsAccepted)
              ? styles.active
              : styles.disabled}`}
            onClick={() => handleContinue("paypal")}
            disabled={!selectedPlan || (requireTermsAcceptance && !termsAccepted)}
          >
            {confirmTextPayPal}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
