import React from 'react'
import Image from 'next/image'
import Kupon from 'public/img/homepage/kupon-solaria.jpg'

const SquareCardCarousel = () => {
  const slides = [
    {
      id: 1,
      name: "Camilan",
      image: ""
    },
  ]

  return (
    <div className='w-full h-full overflow-auto flex no-scrollbar'>
        <div className='w-full pl-7 h-[91px] flex '>
            <div className='flex items-center gap-4'>
                <SquareCard img={Kupon.src} />
                <SquareCard img={Kupon.src} />
                <SquareCard img={Kupon.src} />
                <SquareCard img={Kupon.src} />
                <SquareCard img={Kupon.src} />
            </div>
        </div>
    </div>
  )
}

export default SquareCardCarousel

const SquareCard = ({ img }: { img: string }) => {
  return (
    <div>
        <div className='flex flex-col w-[91px] h-[91px] rounded-[20px] bg-[#FFF]  overflow-hidden relative'>
            <div className='flex h-[178px] w-full overflow-hidden'>
              <Image 
                  src={img}
                  alt=''
                  width={400}
                  height={300}
                  className='object-clip'
              />

            </div>

            <div className='absolute bg-gradient-to-t from-[#000]/40 object-clip w-full h-full pb-2'>
              <div className='w-full h-full flex justify-center items-end'>
                <h2 className='inset-x-0 bottom-1'><span className=' text-[14px] text-[#FFF] font-black'>Cemilan</span></h2>
              </div>
            </div>
        </div>
    </div>
  )
}
