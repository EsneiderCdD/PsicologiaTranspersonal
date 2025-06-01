import React, { useState } from "react";
import styles from "./Modal.module.css";
import { FaCheckCircle } from "react-icons/fa";
import icn1 from "../../assets/imagenes/icn1.jpg";
import icn2 from "../../assets/imagenes/icn2.jpg";
import icn3 from "../../assets/imagenes/icn3.jpg";

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
    "1 Sesión": "https://biz.payulatam.com/L0f9bc36813670A",
    "4 Sesiones": "https://biz.payulatam.com/L0f9bc35454875C",
    "6 Sesiones": "https://biz.payulatam.com/L0f9bc3B6BDDFD6",
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
               
                  <div className={styles.iconPlaceholder}>
                       {plan.title === "1 Sesión" && <img src={icn1} alt="Icono 1 Sesión" className={styles.icon} />}
                  {plan.title === "4 Sesiones" && <img src={icn2} alt="Icono 4 Sesiones" className={styles.icon} />}
                  {plan.title === "6 Sesiones" && <img src={icn3} alt="Icono 6 Sesiones" className={styles.icon} />}

                   
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
                  <span className={styles.checkmarkIcon}> <FaCheckCircle  /></span>
                 
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
