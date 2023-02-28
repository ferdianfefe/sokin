import Image from "next/image";
import React from "react";

type Props = {
  text?: string;
  side?: string;
};

const Input: React.FC<Props> = ({ text, side }: Props) => {
  return (
    <div className="w-full">
      <p className='font-semibold text-xs'>{text}</p>

      <div className="mt-1 relative">
        <input className={` bg-[#FFF0E0] text-orange-800 font-semibold px-8 w-full rounded-[20px] h-8 shadow-[-2px_2px_3px_0.1px_rgb(100,100,0,0.3)]`}></input>
        <Image className="absolute top-[8px] left-3" src={`${side}`} alt='person' width={16} height={16} />
      </div>
    </div>
  );
};

export default Input;
