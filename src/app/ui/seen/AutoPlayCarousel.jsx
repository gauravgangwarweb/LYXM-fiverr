'use client';
import { useState, useEffect, useRef } from 'react';

const AutoPlayCarousel = ({ carouselData }) => {
  const [position, setPosition] = useState(0);
  const carouselRef = useRef(null);
  const slideWidth = 120; // Adjust based on image width + margin
  const speed = 30; // Adjust speed of movement
  const totalWidth = carouselData.length * slideWidth;

  useEffect(() => {
    carouselRef.current = setInterval(() => {
      setPosition((prev) => (prev - 1));
    }, speed);

    return () => clearInterval(carouselRef.current);
  }, []);

  useEffect(() => {
    if (position <= -totalWidth) {
      setPosition(0);
    }
  }, [position, totalWidth]);

  return (
    <div
      className="w-[70%] xl:w-[85%] mx-auto overflow-hidden relative"
      onMouseEnter={() => clearInterval(carouselRef.current)}
      onMouseLeave={() => {
        carouselRef.current = setInterval(() => {
          setPosition((prev) => (prev - 1));
        }, speed);
      }}
    >
      <div
        className="flex items-center space-x-8"
        style={{ transform: `translateX(${position}px)`, transition: 'transform 0.1s linear' }}
      >
        {[...carouselData, ...carouselData].map((slide, index) => (
          <div key={index} className="flex-shrink-0" style={{ width: `${slideWidth}px` }}>
            <img src={slide.img} alt="slide" className="h-10 w-auto" loading="lazy" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AutoPlayCarousel;
