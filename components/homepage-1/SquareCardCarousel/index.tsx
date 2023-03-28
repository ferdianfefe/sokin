import React from 'react'
import Image from 'next/image'

const SquareCardCarousel = () => {
  const slides = [
    {
      id: 1,
      name: "Camilan",
      img: "/img/homepage/makaroni.jpeg"
    },
    {
      id: 2,
      name: "Minuman",
      img: "/img/homepage/es-teh.jfif"
    },
    {
      id: 3,
      name: "Bakso",
      img: "/img/homepage/bakso.jfif"
    },
    {
      id: 4,
      name: "Cepat Saji",
      img: "/img/homepage/pizza.jpg"
    },
    {
      id: 5,
      name: "Roti",
      img: "/img/homepage/sari-roti.jfif"
    },
    {
      id: 6,
      name: "Indomie",
      img: "/img/homepage/mi-dok-dok.jfif"
    },
  ]

  return (
    <div className='w-full h-full overflow-auto flex no-scrollbar'>
        <div className='w-full pl-7 h-[91px] flex '>
            <div className='flex items-center gap-2'>
                
                {slides.map((slide) => (
                  <div key={slide.id}>
                    <SquareCard img={slide.img} id={slide.id} name={slide.name} />

                  </div>
                ))}
                
            </div>
        </div>
    </div>
  )
}

export default SquareCardCarousel

const SquareCard = ({ id, name, img }: { id:number, name:string, img: string }) => {
  return (
    <div>
        <div className='flex flex-col w-[91px] h-[91px] rounded-[20px] bg-[#FFF]  overflow-hidden relative'>
            <div className='flex h-[178px] w-full overflow-hidden'>
              <Image 
                  src={img}
                  alt=''
                  width={400}
                  height={300}
                  className='object-cover'
              />

            </div>

            <div className='absolute bg-gradient-to-t from-[#000]/40 object-clip w-full h-full pb-2'>
              <div className='w-full h-full flex justify-center items-end'>
                <h2 className='inset-x-0 bottom-1'><span className=' text-[14px] text-[#FFF] font-black'>{name}</span></h2>
              </div>
            </div>
        </div>
    </div>
  )
}
