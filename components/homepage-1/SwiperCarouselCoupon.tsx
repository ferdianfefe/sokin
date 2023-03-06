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



export default function SwiperCarouselCoupon() {
    SwiperCore.use([Autoplay]);

    const slides = [
        {
          id: 1,
          title: 'Slide 1',
          description: 'Description for slide 1',
          imageUrl: 'https://via.placeholder.com/400x200',
        },
        {
          id: 2,
          title: 'Slide 2',
          description: 'Description for slide 2',
          imageUrl: 'https://via.placeholder.com/400x200',
        },
        {
          id: 3,
          title: 'Slide 3',
          description: 'Description for slide 3',
          imageUrl: 'https://via.placeholder.com/400x200',
        },
        {
          id: 4,
          title: 'Slide 3',
          description: 'Description for slide 3',
          imageUrl: 'https://via.placeholder.com/400x200',
        },
      ];

    return (
    <>
            
      <Swiper
        freeMode={true}
        // slidesPerView={2}
        // spaceBetween={160}
        breakpoints={{
          420: {
            slidesPerView: 2,
            spaceBetween: 100,
          },
          0: {
            slidesPerView: 2,
            spaceBetween: 160,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 60,
          },
        }}

        pagination={{
          clickable: true,
        }}
        loop
        autoplay
        modules={[Pagination, FreeMode]}
        className="mySwiper h-[150px] w-[400px]"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="h-[180px] w-[200px] overflow-visible">
              <img
                  src={slide.imageUrl}
                  alt=""
                  className="min-w-[80px] h-[111px] rounded-[14px] bg-slate-200 overflow-hidden flex shadow-md shadow-[#D78632]/40"
              />
            </div>
        </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
