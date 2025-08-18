import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination } from 'swiper/modules';
import { motion, useInView } from 'framer-motion';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import Encabezado from '../global/Encabezado';

import styles from './Slider2.module.css';

// Importa las imágenes locales
import ft0 from '../../assets/imagenes/ft0.jpeg';
import ft1 from '../../assets/imagenes/ft1.jpeg';
import ft2 from '../../assets/imagenes/ft2.jpeg';
import Img3 from '../../assets/imagenes/Img3.webp';
import ft4 from '../../assets/imagenes/ft4.jpeg';
import ft5 from '../../assets/imagenes/ft5.jpeg';
import ft6 from '../../assets/imagenes/ft6.jpeg';
import ft7 from '../../assets/imagenes/ft7.jpeg';
import { useNavigate } from 'react-router-dom';
const images = [ft0, Img3, ft5, ft1, ft7, ft4, ft2, ft6];

const Slider2 = () => {
  const location = useLocation();
  const navigate = useNavigate(); // 👈 necesario para limpiar el state

  useEffect(() => {
    if (location.state?.scrollTo === "galeria") {
      const el = document.getElementById("galeria");
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth" });

          // 🧹 Limpieza: resetea el estado después del scroll
          navigate(location.pathname, { replace: true }); 
        }, 300);
      }
    }
  }, [location, navigate]);

  const tituloRef = useRef(null);
  const parrafoRef = useRef(null);
  const [imagenAmpliada, setImagenAmpliada] = useState(null);
  

  const tituloEnVista = useInView(tituloRef, { once: false, margin: "-100px" });
  const parrafoEnVista = useInView(parrafoRef, { once: true, margin: "-100px" });

  const variantesServicios = {
    oculto: { color: "#000000" },
    visible: {
      color: "#8D2C24",
      transition: { duration: 0.5, ease: "easeInOut" }
    }
  };

  const abrirModal = (src) => setImagenAmpliada(src);
  const cerrarModal = () => setImagenAmpliada(null);

  return (
    <div>
      {/* Sección: Mis Servicios */}
      <div id="galeria" className={styles.sliderContainer}>
      <Encabezado

        margen={{marginTop:"2.5%"}}
        ajuste={{marginTop:"0%"}}
        destacado="Experiencias"
        descripcion=" Un recorrido visual por los momentos más significativos de nuestras sesiones grupales: historias de conexión y descubrimiento."
      />
        {/* Instrucciones sutiles */}
    {/* Instrucciones sutiles con iconos animados */}
    <div className={styles.instrucciones}>
      {/* Instrucción: deslizar */}
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

      {/* Instrucción: click para ampliar */}
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
          {images.map((img, idx) => (
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

      {/* Modal de imagen ampliada */}
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
