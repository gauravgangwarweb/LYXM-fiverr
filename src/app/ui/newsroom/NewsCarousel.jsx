'use client';
import { useRef, useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

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
      } else if (width < 1440) {
        setScreenSize('desktop');
      } else {
        setScreenSize('large');
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
        return 2;
      case 'desktop':
        return 3;
      case 'large':
        return 3;
      default:
        return 1;
    }
  };

  return (
    <div className="w-full relative">
      <Swiper
        ref={swiperRef}
        modules={[Navigation]}
        slidesPerView={getSlidesPerView()}
        spaceBetween={screenSize === 'mobile' ? 20 : 40}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        className="!h-auto relative"
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
                  <h5 className="text-[#1e2022] text-lg md:text-xl lg:text-2xl mb-20 flex-grow">
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
        <button className="swiper-button-prev !w-10 !h-10 !bg-gray-800 !rounded-full after:!text-lg after:!text-white hover:!bg-gray-700 !top-[30%] md:!top-[29%] lg:!top-[40%]">
        </button>
        <button className="swiper-button-next !w-10 !h-10 !bg-gray-800 !rounded-full after:!text-lg after:!text-white hover:!bg-gray-700 !top-[30%] md:!top-[29%] lg:!top-[40%]">
        </button>
      </Swiper>
    </div>
  );
};

export default NewsCarousel;
