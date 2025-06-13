import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards } from "swiper/modules";

// Imágenes locales

import c1 from "../../assets/imagenes/c1.jpeg";
import c2 from "../../assets/imagenes/c2.jpeg";
import c3 from "../../assets/imagenes/c3.jpeg";

import c5 from "../../assets/imagenes/c5.jpeg";
import c6 from "../../assets/imagenes/c6.jpeg";
import c7 from "../../assets/imagenes/c7.jpeg";

// Estilos y Swiper CSS
import "swiper/css";
import "swiper/css/effect-cards";
import styles from "./SwiperCard.module.css";

// Fecha del próximo evento (puedes cambiar o dejar como null si no hay evento)
const NEXT_EVENT_DATE = null; //"2025-07-01T00:00:00" Formato ISO (cámbialo o pon null)

export default function SwiperCards() {
  const images = [c1, c2, c3, c5, c6, c7];

  const [timeLeft, setTimeLeft] = useState(null);

  useEffect(() => {
    if (!NEXT_EVENT_DATE) return;

    const interval = setInterval(() => {
      const eventDate = new Date(NEXT_EVENT_DATE);
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
        {images.map((src, index) => (
          <SwiperSlide key={index} className={styles.slide}>
            <img src={src} alt={`slide-${index}`} className={styles.image} />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className={styles.header}>
        <h2>El próximo evento comenzará en:</h2>
        {NEXT_EVENT_DATE && timeLeft ? (
          <div className={styles.countdown}>
            {timeLeft.days} días, {timeLeft.hours}h {timeLeft.minutes}m {timeLeft.seconds}s
          </div>
        ) : (
          <div className={styles.noEvent}>No hay eventos programados por ahora. ¡Espera el próximo!</div>
        )}
      </div>

    </div>
  );
}
