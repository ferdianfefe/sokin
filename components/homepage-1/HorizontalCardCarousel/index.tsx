import React from 'react'
import Image from 'next/image'
import Kupon from 'public/img/homepage/kupon-solaria.jpg'

const HorizontalCardCarousel = () => {
  
  return (
    <div className='w-full h-full overflow-auto flex no-scrollbar'>
        <div className='w-full pl-7 h-[140px] flex'>
            <div className='flex items-center gap-4'>
                <HorizontalCard img={Kupon.src} />
                <HorizontalCard img={Kupon.src} />
                <HorizontalCard img={Kupon.src} />
                <HorizontalCard img={Kupon.src} />
                <HorizontalCard img={Kupon.src} />
            </div>
        </div>
    </div>
  )
}

export default HorizontalCardCarousel

const HorizontalCard = ({ img }: { img: string }) => {
  return (
    <div>
        <div className='w-[233px] h-[115px] rounded-[14px] bg-slate-200 shadow-card overflow-hidden border-[1px] border-[rgba(215, 134, 50, 0.4)]'>
            <Image 
                src={img}
                alt=''
                width={300}
                height={300}
                className='object-clip'
            />
        </div>

    </div>
  )
}
