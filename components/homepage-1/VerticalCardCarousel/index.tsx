import React from 'react'
import Image from 'next/image'
import Kupon from 'public/img/homepage/kupon-solaria.jpg'

const VerticalCardCarousel = () => {
  return (
    <div className='w-full h-full overflow-auto flex no-scrollbar'>
        <div className='w-full pl-7 h-[295px] flex '>
            <div className='flex items-center gap-6'>
                <VerticalCard img={Kupon.src} />
                <VerticalCard img={Kupon.src} />
                <VerticalCard img={Kupon.src} />
                <VerticalCard img={Kupon.src} />
                <VerticalCard img={Kupon.src} />
            </div>
        </div>
    </div>
  )
}

export default VerticalCardCarousel

const VerticalCard = ({ img }: { img: string }) => {
  return (
    <div>
        <div className='flex flex-col w-[160px] min-h-[262px] max-h-[282px] rounded-[20px] bg-[#FFF] shadow-[-3px 2px 5px 1px rgba(255, 183, 109, 0.37)] border-[1px] border-[#FE8304]/10 overflow-hidden shadow-card'>
            <div className='flex h-[178px] w-full overflow-hidden'>
              <Image 
                  src={img}
                  alt=''
                  width={400}
                  height={300}
                  className='object-clip'
              />
            </div>

            {/* <div className='flex flex-col w-full bg-slate-200 p-3'> */}
            <div className='flex flex-col w-full  p-3'>
            
              <p className='text-xs text-[#574E4E]'>testt</p>
              <h2 className='font-bold text-[14px]'>Warung madeeee madeeee </h2>
              
              <div className='flex items-center gap-2 mt-1'>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7.35173 1.44311C7.57636 0.852294 8.42364 0.852294 8.64827 1.44312L10.0973 5.45689C10.1987 5.72342 10.457 5.9 10.7456 5.9H14.3063C14.9638 5.9 15.251 6.71921 14.7341 7.11989L12.2 9.4C11.9667 9.58081 11.8761 9.88825 11.9749 10.1643L12.9 14.0866C13.1253 14.716 12.3954 15.2575 11.8448 14.8695L8.40243 12.6862C8.1617 12.5166 7.8383 12.5166 7.59757 12.6862L4.15529 14.8695C3.60462 15.2575 2.87478 14.716 3.1 14.0866L4.02513 10.1643C4.12389 9.88825 4.03334 9.58081 3.8 9.4L1.26596 7.11989C0.748953 6.71921 1.03621 5.9 1.6937 5.9H5.25437C5.54297 5.9 5.8013 5.72342 5.90263 5.45689L7.35173 1.44311Z" fill="#FE8304" stroke="#FE8304" stroke-width="0.700145" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <p className='text-sm'>
                  testt
                </p>
              </div>
            
            </div>
        </div>
    </div>
  )
}
