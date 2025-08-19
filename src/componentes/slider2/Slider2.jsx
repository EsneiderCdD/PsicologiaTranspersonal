import React, { useRef, useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination } from 'swiper/modules';
import { motion, useInView } from 'framer-motion';
import { useLocation, useNavigate } from 'react-router-dom';
import { experienciasData } from '../../ss/data';
import { experienciasImages } from '../../ss/experiencias'; // 👈 importamos el array

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import Encabezado from '../global/Encabezado';
import styles from './Slider2.module.css';

const Slider2 = () => {
  const location = useLocation();
  const navigate = useNavigate(); 
  const [imagenAmpliada, setImagenAmpliada] = useState(null);

  useEffect(() => {
    if (location.state?.scrollTo === "galeria") {
      const el = document.getElementById("galeria");
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth" });
          navigate(location.pathname, { replace: true });
        }, 300);
      }
    }
  }, [location, navigate]);

  const abrirModal = (src) => setImagenAmpliada(src);
  const cerrarModal = () => setImagenAmpliada(null);

  return (
    <div>
      <div id="galeria" className={styles.sliderContainer}>
        <Encabezado
          margen={{ marginTop: "2.5%" }}
          ajuste={{ marginTop: "0%" }}
          destacado="Experiencias"
          descripcion={experienciasData.experiencias}
        />

        <div className={styles.instrucciones}>
          <div className={styles.instruccionItem}>
            <motion.span
              className={styles.iconoMano}
              animate={{ x: [0, 15, -15, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            >
              🤚
            </motion.span>
            <small>Desliza para ver imágenes</small>
          </div>

          <div className={styles.instruccionItem}>
            <motion.span
              className={styles.iconoMano}
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
            >
              👉
            </motion.span>
            <small>Click para ampliar imagen</small>
          </div>
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
          {experienciasImages.map((img, idx) => (
            <SwiperSlide
              key={idx}
              className={styles.slide}
              onClick={() => abrirModal(img)}
            >
              <img src={img} alt={`experiencia-${idx + 1}`} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {imagenAmpliada && (
        <div className={styles.modalOverlay} onClick={cerrarModal}>
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <button className={styles.cerrarModal} onClick={cerrarModal}>×</button>
            <img src={imagenAmpliada} alt="Imagen ampliada" className={styles.imagenAmpliada} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Slider2;

