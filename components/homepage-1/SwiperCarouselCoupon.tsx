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
          imageUrl: 'https://th.bing.com/th/id/OIP.5PMK3lsRazcKqgMX9lt0hgHaJr?pid=ImgDet&rs=1',
        },
        {
          id: 2,
          title: 'Slide 2',
          description: 'Description for slide 2',
          imageUrl: 'https://katalogpromosi.com/wp-content/uploads/2022/08/matahari_bonus_29082022.jpg',
        },
        {
          id: 3,
          title: 'Slide 3',
          description: 'Description for slide 3',
          imageUrl: 'https://th.bing.com/th/id/OIP.JbexSZ0EsGUTkHxyKImyigHaHa?pid=ImgDet&w=1280&h=1280&rs=1',
        },
        {
          id: 4,
          title: 'Slide 4',
          description: 'Description for slide 4',
          imageUrl: 'https://ik.imagekit.io/carro/jualo/original/31316205/holdak-special-disc-u-kupon-makanan-dan-minuman-31316205.jpg?v=1635953964',
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
            <div className="h-[180px] w-[200px] ">
              <div className="min-w-[80px] h-[111px] rounded-[14px] overflow-hidden bg-slate-200 object-cover flex shadow-md shadow-[#D78632]/40">
                <img
                    src={slide.imageUrl}
                    alt=""
                    className="w-full h-full object-cover"
                />

              </div>
            </div>
        </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
