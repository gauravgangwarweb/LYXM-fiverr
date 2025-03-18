'use client';
import { useRef, useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const NewsCarousel = ({news}) => {
  const [screenSize, setScreenSize] = useState('desktop');
  const swiperRef = useRef(null);

  useEffect(() => {
    const checkScreenSize = () => {
      const width = window.innerWidth;
      if (width < 768) {
        setScreenSize('mobile');
      } else if (width < 1024) {
        setScreenSize('tablet');
      } else {
        setScreenSize('desktop');
      }
    };
    
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  const getSlidesPerView = () => {
    switch (screenSize) {
      case 'mobile':
        return 1;
      case 'tablet':
        return 1.7;
      default:
        return 3;
    }
  };

  return (
    <div className="w-full relative">
      <Swiper
        ref={swiperRef}
        slidesPerView={getSlidesPerView()}
        spaceBetween={screenSize === 'mobile' ? 40 : 50}
        className="!h-auto"
      >
        <div className="swiper-wrapper !h-auto">
          {news.map((news, index) => (
            <SwiperSlide key={index} className="!h-auto">
              <div className="flex flex-col h-full bg-white rounded-2xl overflow-hidden shadow-lg shadow-black relative">
                <div className="relative w-full aspect-video">
                  <img 
                    src={news.image} 
                    alt={news.title}
                    className="absolute inset-0 w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="p-8 flex-1 flex flex-col">
                  <h5 className="text-[#1e2022] text-lg md:text-2xl mb-20 flex-grow">
                    {news.title}
                  </h5>
                  <div className="absolute flex items-center gap-2 bottom-4 left-6">
                    <img 
                      className='w-12 h-12 rounded-full object-cover flex-shrink-0' 
                      src={news.author.image} 
                      alt={news.author.name} 
                    />
                    <p className="text-[#1e2022] text-lg">
                      {news.author.name}
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </div>
      </Swiper>
    </div>
  );
};

export default NewsCarousel;
