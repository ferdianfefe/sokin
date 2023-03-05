import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import "./styles.css";

// import required modules
import { Pagination, FreeMode } from "swiper";
import SwiperCore, { Autoplay } from 'swiper';

export default function KategoriCarousel()  {
  const slides = [
    {
      id: 1,
      nama: 'Bakso',
      imageUrl: 'https://via.placeholder.com/400x200'
    },
    {
      id: 2,
      nama: 'Pizza',
      imageUrl: 'https://via.placeholder.com/400x200'
    },
    {
      id: 3,
      nama: 'Minuman',
      imageUrl: 'https://via.placeholder.com/400x200'
    },
    {
      id: 4,
      nama: 'Camilan',
      imageUrl: 'https://via.placeholder.com/400x200'
    },
    {
      id: 5,
      nama: 'Manisan',
      imageUrl: 'https://via.placeholder.com/400x200'
    },
    {
      id: 6,
      nama: 'Roti',
      imageUrl: 'https://via.placeholder.com/400x200'
    },
  ];

  // SwiperCore.use([Autoplay]);

    return (
      <Swiper
        grabCursor={true}
        freeMode={true}
        slidesPerView={4}
        spaceBetween={20}
        
        onInit={(swiper) => {
          // Remove any margins or padding on SwiperSlide elements
          swiper.slides.forEach((slide) => {
            slide.style.margin = "0";
            slide.style.padding = "0";
          });
        }}
        loop
        autoplay
        modules={[ FreeMode]}
        className="mySwiper h-auto w-[420px] "
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className='rounded-[22px] w-[90px] h-[90px] overflow-hidden'>
              <img className='bg-slate-300 w-full h-full flex flex-col justify-end items-center 'src={slide.imageUrl}/>
              <h3 className='absolute text-sm font-extrabold text-white  mx-2'>{slide.nama}</h3>
          </div>
        </SwiperSlide>
        ))}
      </Swiper>

        
    )
  
}
