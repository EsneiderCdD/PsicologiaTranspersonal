import React, { useState } from "react";
import "../slider/CoverFlowCarousel.css";

const images = [
  "https://swiperjs.com/demos/images/nature-1.jpg",
  "https://swiperjs.com/demos/images/nature-2.jpg",
  "https://swiperjs.com/demos/images/nature-3.jpg",
  "https://swiperjs.com/demos/images/nature-4.jpg",
  "https://swipejs.com/demos/images/nature-5.jpg",
];

const CoverflowCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(2);

  const prevSlide = () => {
    setActiveIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setActiveIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="carousel-container">
      <button onClick={prevSlide} className="nav-button left">‹</button>
      <div className="carousel">
        {images.map((img, i) => {
          const offset = i - activeIndex;
          return (
            <div
              key={i}
              className={`carousel-slide ${
                offset === 0 ? "active" : offset === -1 || offset === 1 ? "side" : "hidden"
              }`}
              style={{
                transform: `translateX(${offset * 120}%) scale(${offset === 0 ? 1 : 0.8}) rotateY(${offset * 20}deg)`,
                zIndex: images.length - Math.abs(offset),
              }}
            >
              <img src={img} alt={`slide-${i}`} />
            </div>
          );
        })}
      </div>
      <button onClick={nextSlide} className="nav-button right">›</button>
    </div>
  );
};

export default CoverflowCarousel;