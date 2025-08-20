import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-cards";
import styles from "./SwiperCard.module.css";
import { eventoConfig } from "../../ss/evento";

export default function SwiperCards() {
  const [timeLeft, setTimeLeft] = useState(null);

  useEffect(() => {
    if (!eventoConfig.fechaEvento) return;

    const interval = setInterval(() => {
      const eventDate = new Date(eventoConfig.fechaEvento);
      const now = new Date();
      const difference = eventDate - now;

      if (difference <= 0) {
        setTimeLeft(null);
        clearInterval(interval);
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((difference / (1000 * 60)) % 60);
      const seconds = Math.floor((difference / 1000) % 60);

      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.wrapper}>
      <Swiper
        effect="cards"
        grabCursor={true}
        modules={[EffectCards]}
        className={styles.mySwiper}
      >
        {eventoConfig.cards.map(card => (
          <SwiperSlide key={card.id} className={styles.slide}>
            <img src={card.imagen} alt={card.alt} className={styles.image} />
          </SwiperSlide>
        ))}
      </Swiper>
      
      <div className={styles.header}>
        <h2>El próximo evento comenzará en:</h2>
        {eventoConfig.fechaEvento && timeLeft ? (
          <div className={styles.countdown}>
            {timeLeft.days} días, {timeLeft.hours}h {timeLeft.minutes}m {timeLeft.seconds}s
          </div>
        ) : (
          <div className={styles.noEvent}>
            No hay eventos programados por ahora. ¡Espera el próximo!
          </div>
        )}
      </div>
    </div>
  );
}
