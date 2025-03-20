'use client';
import { useRef, useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

export default function CustomersCarousel({customers}) {
  const [screenSize, setScreenSize] = useState('mobile');
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
        return 4;
      default:
        return 1;
    }
  };

  const getSpaceBetween = () => {
    return screenSize === 'mobile' ? 20 : 40;
  };

  return (
    <div className="w-full relative">
      <Swiper
        ref={swiperRef}
        modules={[Navigation, Autoplay]}
        slidesPerView={getSlidesPerView()}
        spaceBetween={getSpaceBetween()}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        className="w-full"
      >
        {customers.map((customer, index) => (
          <SwiperSlide key={index}>
            <div className="">
              <img 
                loading="lazy" 
                src={customer.img} 
                alt="gastro-market" 
                className="w-full h-full rounded-lg shadow-md"
              />
              <div className='px-3'>

              <h3 className="text-black font-medium mt-4">
                {customer.challenge}
              </h3>
              <p className='text-[12px] text-[#7e878e] mt-2'>
                {customer.solution}
              </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
        
        {/* Custom Navigation Buttons */}
        <button className="swiper-button-prev !w-10 !h-10 !bg-gray-800 !rounded-full after:!text-lg after:!text-white hover:!bg-gray-700 !top-[30%] md:!top-[29%] lg:!top-[40%]">
        </button>
        <button className="swiper-button-next !w-10 !h-10 !bg-gray-800 !rounded-full after:!text-lg after:!text-white hover:!bg-gray-700 !top-[30%] md:!top-[29%] lg:!top-[40%]">
        </button>
      </Swiper>
    </div>
  );
}