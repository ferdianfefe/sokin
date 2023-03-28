import React from 'react'
import Image from 'next/image'
import Kupon from 'public/img/homepage/kupon-solaria.jpg'

const HorizontalCardCarousel = () => {
  const slides = [
    {
      id: 1,
      alt: "kupon indomaret",
      img: "/img/homepage/kupon-indomaret.jpg",
    },
    {
      id: 2,
      alt: "kupon solaria",
      img: "/img/homepage/kupon-solaria.jpg",
    },
    {
      id: 3,
      alt: "kupon fruit tea",
      img: "/img/homepage/kupon-fruit-tea.jpg",
    },
    {
      id: 4,
      alt: "kupon bakso",
      img: "/img/homepage/kupon-bakso.png",
    },

  ]
  return (
    <div className='w-full h-full overflow-auto flex no-scrollbar mt-2'>
        <div className='w-full pl-7 h-[140px] flex'>
            <div className='flex items-center gap-3'>
                
                {slides.map((slide) => (
                  <div key={slide.id}>
                    <HorizontalCard
                      id={slide.id}
                      alt={slide.alt}
                      img={slide.img}
                    />
                  </div>
                ))}

            </div>
        </div>
    </div>
  )
}

export default HorizontalCardCarousel

const HorizontalCard = ({ id, alt, img }: { id:number, alt:string, img: string }) => {
  return (
    <div>
        <div className='w-[233px] h-[115px] rounded-[14px] bg-slate-200 shadow-card overflow-hidden border-[1px] border-[rgba(215, 134, 50, 0.4)]'>
            <Image 
                src={img}
                alt={alt}
                width={300}
                height={300}
                className='object-clip'
            />
        </div>

    </div>
  )
}
