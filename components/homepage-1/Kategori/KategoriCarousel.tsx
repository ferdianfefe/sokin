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
      imageUrl: 'https://www.goodnewsfromindonesia.id/uploads/images/2020/07/3014562020-Bakso-Solo.jpg'
    },
    {
      id: 2,
      nama: 'Pizza',
      imageUrl: 'https://i.pinimg.com/originals/ed/07/6d/ed076de664d00efb55aa0cde9e869268.jpg'
    },
    {
      id: 3,
      nama: 'Minuman',
      imageUrl: 'https://th.bing.com/th/id/OIP.YXcccCP_6yq3PTiKQ2kJ_AHaJ4?pid=ImgDet&rs=1'
    },
    {
      id: 4,
      nama: 'Camilan',
      imageUrl: 'https://i.pinimg.com/originals/ed/07/6d/ed076de664d00efb55aa0cde9e869268.jpg'
    },
    {
      id: 5,
      nama: 'Manisan',
      imageUrl: 'https://th.bing.com/th/id/R.423efae9c4fbf2836e19f46e32a9d31c?rik=q%2fxkcfPBWUq6dQ&riu=http%3a%2f%2fwww.pengusahasukses.com%2fwp-content%2fuploads%2f2016%2f07%2fPeluang-Bisnis-Manisan-Pepaya-dan-Analisa-Usahanya.jpg&ehk=I13z1rCG6%2fZXaid8SBPLgR9%2b%2fW8RKKH66P%2fgr5pcpOU%3d&risl=&pid=ImgRaw&r=0'
    },
    {
      id: 6,
      nama: 'Roti',
      imageUrl: 'https://th.bing.com/th/id/OIP.YXcccCP_6yq3PTiKQ2kJ_AHaJ4?pid=ImgDet&rs=1'
    },
  ];

  // SwiperCore.use([Autoplay]);

    return (
      <Swiper
        grabCursor={true}
        freeMode={true}
        slidesPerView={4}
        spaceBetween={25}
        
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
            <div className='rounded-[22px] w-[90px] h-[90px] overflow-hidden relative flex justify-center'>
              <img className='object-cover bg-slate-300 w-full h-full flex flex-col justify-end items-center 'src={slide.imageUrl}/>
              <h3 className='absolute text-sm font-extrabold text-white bottom-2 mx-auto flex'>{slide.nama}</h3>
          </div>
        </SwiperSlide>
        ))}
      </Swiper>

        
    )
  
}
