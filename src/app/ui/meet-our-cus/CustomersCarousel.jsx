'use client';
import { useRef, useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

export default function CustomersCarousel({customers}) {
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
        modules={[Navigation, Autoplay]}
        slidesPerView={isMobile ? 1 : 3.5}
        spaceBetween={isMobile ? 0 : 40}
        // loop={true}
        // speed={1000}
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
        <button className="swiper-button-prev !w-10 !h-10 !bg-gray-800 !rounded-full after:!text-lg after:!text-white hover:!bg-gray-700 !top-[38%] md:!top-[20%] lg:!top-[40%]">
        </button>
        <button className="swiper-button-next !w-10 !h-10 !bg-gray-800 !rounded-full after:!text-lg after:!text-white hover:!bg-gray-700 !top-[38%] md:!top-[20%] lg:!top-[40%]">
        </button>
      </Swiper>
    </div>
  );
}