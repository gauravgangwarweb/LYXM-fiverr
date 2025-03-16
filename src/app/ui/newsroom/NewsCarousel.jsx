'use client';
import { useRef, useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const NewsCarousel = ({news}) => {
  const [isMobile, setIsMobile] = useState(false);
  const swiperRef = useRef(null);

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  return (
    <div className="w-full relative">
      <Swiper
        ref={swiperRef}
        slidesPerView={isMobile ? 1 : 2.90}
        spaceBetween={isMobile ? 40 : 50}
        className="w-full"
      >
        {news.map((news, index) => (
          <SwiperSlide key={index}>
            <div 
            className="h-[470px] md:h-[540px] bg-white rounded-2xl overflow-hidden shadow-lg shadow-black"
            >
              <img 
                src={news.image} 
                alt={news.title}
                className="w-full object-cover"
                loading="lazy"
              />
              <div className="p-8">
                <h5 className="text-[#1e2022] text-lg md:text-2xl mb-2">{news.title}</h5>
                <div className="flex items-center gap-2 mt-20">
                    <img className='w-12 rounded-full' src={news.author.image} alt="demo-person" />
                    <p className="text-[#1e2022] text-lg">{news.author.name}</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default NewsCarousel;
