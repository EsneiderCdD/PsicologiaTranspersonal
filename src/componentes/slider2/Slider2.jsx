import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination } from 'swiper/modules';
import { motion, useInView } from 'framer-motion';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import styles from './Slider2.module.css';

// Importa las imágenes locales
import ft0 from '../../assets/imagenes/ft0.jpeg';
import ft1 from '../../assets/imagenes/ft1.jpeg';
import ft2 from '../../assets/imagenes/ft2.jpeg';
import ft3 from '../../assets/imagenes/ft3.jpeg';
import ft4 from '../../assets/imagenes/ft4.jpeg';
import ft5 from '../../assets/imagenes/ft5.jpeg';
import ft6 from '../../assets/imagenes/ft6.jpeg';
import ft7 from '../../assets/imagenes/ft7.jpeg';



const images = [ft0, ft1, ft2, ft3, ft4, ft5, ft6, ft7, ];

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
      <div className={styles.sliderContainer}>
        <div className={styles.servicios}>
          <h2 className={styles.tituloSeccion}>
            Galería de{" "}
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
          {images.map((img, idx) => (
            <SwiperSlide key={idx} className={styles.slide}>
              <img src={img} alt={`experiencia-${idx + 1}`} />
            </SwiperSlide>
          ))}
        </Swiper>
            </div>
      </div>
  );
};

export default Slider2;
