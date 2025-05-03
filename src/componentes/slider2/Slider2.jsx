import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination } from 'swiper/modules';
import { motion, useInView } from 'framer-motion';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import styles from './Slider2.module.css'; // Asegúrate que este CSS contenga también las clases de "ocupacion"

const Slider2 = () => {
  const tituloRef = useRef(null);
  const parrafoRef = useRef(null);

  const tituloEnVista = useInView(tituloRef, { once: false, margin: "-100px" });
  const parrafoEnVista = useInView(parrafoRef, { once: true, margin: "-100px" });

  const variantesServicios = {
    oculto: { color: "#000000" },
    visible: {
      color: "#a78bfa",
      transition: { duration: 0.5, ease: "easeInOut" }
    }
  };

  return (
    <div>
      {/* Sección: Mis Servicios */}
      <div className={styles.servicios}>
        <h2 className={styles.tituloSeccion}>
          Galeria de{" "}
          <motion.span
            ref={tituloRef}
            variants={variantesServicios}
            initial="oculto"
            animate={tituloEnVista ? "visible" : "oculto"}
          >
            Experiencias
          </motion.span>
        </h2>

        <motion.p
          ref={parrafoRef}
          className={styles.descripcion}
          initial={{ opacity: 0 }}
          animate={
            parrafoEnVista
              ? { opacity: 1, transition: { duration: 1.2, delay: 0.2 } }
              : {}
          }
        >
          Un recorrido visual por los momentos más significativos de nuestras sesiones grupales. Cada imagen cuenta una historia de transformación, conexión y descubrimiento personal.
        </motion.p>
      </div>

      {/* Swiper Slider */}
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
    </div>
  );
};

export default Slider2;
