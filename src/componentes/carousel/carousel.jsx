// src/components/Carousel.jsx
import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Thumbs } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

import styles from './carousel.module.css';

// Imágenes (reemplazar con las reales)

import img3 from '../../assets/imagenes/Img3.jpeg';


const images = [img1, img2, img3, img4, img5];

export default function Carousel() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <div className={styles.carouselContainer}>
        <div className={styles.text}>
            <h2>Galeria de Experiencias</h2>
            <p>Un recorrido visual por los momentos más significativos de nuestras sesiones grupales. Cada imagen cuenta una historia de transformación, conexión y descubrimiento personal.</p>
        </div>
      {/* Carrusel principal */}
      <Swiper
        modules={[Navigation, Thumbs]}
        navigation
        loop
        centeredSlides
        slidesPerView={1.8}
        spaceBetween={40}
        className={styles.swiper}
        thumbs={{ swiper: thumbsSwiper }}
      >
        {images.map((src, index) => (
          <SwiperSlide key={index} className={styles.slide}>
            <img src={src} alt={`Slide ${index}`} />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Thumbnails */}
      <Swiper
        onSwiper={setThumbsSwiper}
        modules={[Thumbs]}
        spaceBetween={10}
        slidesPerView={5}
        watchSlidesProgress
        className={styles.thumbsSwiper}
      >
        {images.map((src, index) => (
          <SwiperSlide key={`thumb-${index}`} className={styles.thumbSlide}>
            <img src={src} alt={`Thumb ${index}`} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
