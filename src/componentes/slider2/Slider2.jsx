import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import styles from './Slider2.module.css'; // Asegúrate que este archivo esté junto al componente o ajusta la ruta

const Slider2 = () => {
  return (
    <Swiper
      effect={'coverflow'}
      grabCursor={true}
      centeredSlides={true}
      slidesPerView={'auto'}
      coverflowEffect={{
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      }}
      pagination={true}
      modules={[EffectCoverflow, Pagination]}
      className={styles.sliderWrapper}
    >
      {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
        <SwiperSlide key={num} className={styles.slide}>
        <img
            src={`https://swiperjs.com/demos/images/nature-${num}.jpg`}
            alt={`nature-${num}`}
        />
        </SwiperSlide>

      ))}
    </Swiper>
  );
};

export default Slider2;
