import Image from "next/image";
import Dummy from "public/img/homepage/kupon.jpg"
import {Swiper, SwiperSlide} from 'swiper/react';

interface Props {
    img: typeof Image;
}

const CarouselIklan = () => {
    return(
        <Swiper
            direction="horizontal"
            pagination={true}
            spaceBetween={200}
            slidesPerView={3}
            onSlideChange={() => console.log('slide change')}
            onSwiper={() => console.log('swiper')}
        >
            <SwiperSlide><CardIklan /></SwiperSlide>
            <SwiperSlide><CardIklan /></SwiperSlide>
            <SwiperSlide><CardIklan /></SwiperSlide>
            
            
            

        </Swiper>



        // <div className="flex">
        //     {/* <CardIklan 
        //         img = {Dummy}
        //     /> */}
        //     <div className="flex gap-4">
        //         <CardIklan />
        //         <CardIklan />
        //         <CardIklan />

        //     </div>
        // </div>
    )
}

export default CarouselIklan;

const CardIklan = () => {
    return(
        <div className="min-w-[190px] h-[111px] rounded-[14px] bg-slate-200 overflow-hidden flex shadow-md shadow-[#D78632]/40">
            <Image
                src={Dummy}
                alt=""
                className="object-cover"
            />
        </div>
    )
}