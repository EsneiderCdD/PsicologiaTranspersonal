import React, { useState } from "react";
import styles from "./Modal.module.css";
import { FaCheckCircle } from "react-icons/fa";

const Modal = ({
  isOpen,
  onClose,
  showTerms,
  requireTermsAcceptance,
  confirmText = "Continuar",
}) => {
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [termsAccepted, setTermsAccepted] = useState(false);

  const externalLinks = {
    "1 Sesión": "https://www.google.com/",
    "4 Sesiones": "https://www.instagram.com/",
    "6 Sesiones": "https://platzi.com/",
  };

  const handleContinue = () => {
    if (!selectedPlan || (requireTermsAcceptance && !termsAccepted)) return;

    const url = externalLinks[selectedPlan];
    if (url) {
      window.open(url, "_blank");
    }
  };

  if (!isOpen) return null;

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <button className={styles.closeButton} onClick={onClose}>✕</button>
        <h2 className={styles.title}>Selecciona el plan que más te gusta</h2>

        <div className={styles.cardContainer}>
          {[
            {
              title: "1 Sesión",
              description: "Colaboración puntual e inmediata para conocernos.",
              price: "$40",
              highlight: false,
            },
            {
              title: "4 Sesiones",
              description:
                "Cuatro encuentros para conocerte, trabajar procesos y crear continuidad.",
              price: "$140",
              highlight: true,
            },
            {
              title: "6 Sesiones",
              description:
                "Una experiencia profunda y sostenida para trabajar a lo largo del tiempo.",
              price: "$200",
              highlight: false,
            },
          ].map((plan) => (
            <div
              key={plan.title}
              onClick={() => setSelectedPlan(plan.title)}
              className={`${styles.cardWrapper} ${
                selectedPlan === plan.title ? styles.selected : ""
              }`}
            >
              <div className={`${styles.card} ${plan.highlight ? styles.highlighted : ""}`}>
                {plan.highlight && <div className={styles.badge}>MÁS ELEGIDO</div>}
                <div className={styles.iconContainer}>
                  <div className={styles.iconPlaceholder}></div>
                </div>
                <h3 className={styles.title}>{plan.title}</h3>
                <p className={styles.description}>{plan.description}</p>
                <div className={styles.price}>
                  {plan.price} <span className={styles.currency}>USD</span>
                </div>
              </div>

              {selectedPlan === plan.title && (
                <div className={styles.checkmark}>
                  <FaCheckCircle color="#356b43" size={20} />
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
              &nbsp; Acepto los términos y condiciones
            </label>
          </div>
        )}

        <div className={styles.buttonContainer}>
          <button
            className={`${styles.continueButton} ${
              selectedPlan && (!requireTermsAcceptance || termsAccepted)
                ? styles.active
                : styles.disabled
            }`}
            onClick={handleContinue}
            disabled={!selectedPlan || (requireTermsAcceptance && !termsAccepted)}
          >
            {confirmText}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
