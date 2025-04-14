// Slider.jsx
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "../../componentes/slider/Slider.module.css"; // Asegúrate que este archivo esté junto al componente o ajusta la ruta

import { EffectCoverflow, Pagination } from "swiper/modules";

const Slider = () => {
  return (
    <Swiper
      effect={"coverflow"}
      grabCursor={true}
      centeredSlides={true}
      slidesPerView={"auto"}
      coverflowEffect={{
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      }}
      pagination={true}
      modules={[EffectCoverflow, Pagination]}
      className="mySwiper"
    >
      {[
        "nature-1", "nature-2", "nature-3",
        "nature-4", "nature-5", "nature-6",
        "nature-7", "nature-8", "nature-9"
      ].map((img, idx) => (
        <SwiperSlide key={idx}>
          <img src={`https://swiperjs.com/demos/images/${img}.jpg`} alt={`Nature ${idx + 1}`} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Slider;
