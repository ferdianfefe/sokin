import Image from "next/image";
import React from "react";

interface ImageProps {
    
    source: string;
  }
  
const CardIklan: React.FC<ImageProps> = ({source}) =>{
    return(
        <div className='w-[230px] h-[111px] rounded-xl bg-slate-400 flex border-[#FE8304]/40 border-[1px] object-clip shadow-md shadow-[#FE8304]/25'>
            <Image
                src={source}
                alt=""
                width={500}
                height={500}
            />
        </div>
    )
}

export default CardIklan;