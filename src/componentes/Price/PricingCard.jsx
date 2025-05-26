import React from "react";
import styles from "./PricingCard.module.css";

const PricingCard = ({
  title,
  description,
  price,
  highlight,
  iconSrc,
  iconAlt,
  footerNote
}) => {
  return (
   
        
      <div className={`${styles.card} ${highlight ? styles.highlighted : ""}`}>
        {highlight && <div className={styles.badge}>MÁS ELEGIDO</div>}
        <div className={styles.iconContainer}>
          {iconSrc ? (
            <img src={iconSrc} alt={iconAlt} className={styles.icon} />
          ) : (
            <div className={styles.iconPlaceholder}></div>
          )}
        </div>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
        <div className={styles.price}>
          {price} <span className={styles.currency}>USD</span>
        </div>
        {footerNote && <div className={styles.footerNote}>✅ {footerNote}</div>}
      </div>
    
  );
};

export default PricingCard;
