import React, { useState, useEffect } from 'react';
import './carousel.css'
const Carousel = ({ banners }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % banners.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [banners.length]);

  return (
    <div className="carousel">
      {banners.map((item, index) => (
        <div key={index} className={index === currentSlide ? 'slide active' : 'slide'}>
          <div>
            <h2>{item.id}</h2>
            <p>{item.text}</p>
          </div>
        </div>
      ))}
      <div className="carousel-dots">
        {banners.map((_, index) => (
          <div
            key={index}
            className={index === currentSlide ? 'carousel-dot active' : 'carousel-dot'}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
