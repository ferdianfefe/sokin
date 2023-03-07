import Image from "next/image";
import React from "react";

export default function Homepage() {
  return (
    <>
      <div className="flex w-full h-20 bg-[#ffa967c9] justify-evenly items-center mt-8">
        <Image
          src={`/images/regis/Person.svg`}
          width={52}
          height={52}
          alt="profile picture"
          className="bg-white rounded-full h-[52px] w-[52px]"
        />
        <div>
          <h2 className="font-extrabold">Ninda Nandita</h2>
          <p className="font-semibold text-sm">+6281238163514</p>
        </div>
        <div className="bg-white rounded-lg p-1 w-[15%] h-[42px] flex-col justify-center items-center ml-2">
          <div className="flex justify-evenly">
            <Image src='/images/driver/Star.svg' width={11} height={11} alt="star" />
            <p className="text-xs">Rating</p>
          </div>
          <h3 className="font-semibold text-center">4.7</h3>
        </div>
        <div className="bg-white rounded-lg p-1 w-[25%] h-[42px] flex-col justify-center items-center">
          <div className="flex justify-evenly">
            <Image src='/images/driver/Histogram.svg' width={11} height={11} alt="star" />
            <p className="text-xs">Target Harian</p>
          </div>
          <h3 className="font-semibold text-center">0 %</h3>
        </div>
      </div>
      <div className="flex justify-evenly mt-3 border-b-orange-500 border-[1px] pb-3">
        <div className="bg-orange-500 h-14 w-[30%] rounded-[21px] shadow-[0_3px_3px_0.1px_rgb(400,100,0,0.3),inset_0_0px_7px_6px_rgb(0,0,0,0.1)]">
            <div>

            </div>
        </div>
        <div className="bg-orange-500 h-14 w-[30%] rounded-[21px] shadow-[0_3px_3px_0.1px_rgb(400,100,0,0.3),inset_0_0px_7px_6px_rgb(0,0,0,0.1)]">
            <div>

            </div>
        </div>
        <div className="bg-orange-500 h-14 w-[30%] rounded-[21px] shadow-[0_3px_3px_0.1px_rgb(400,100,0,0.3),inset_0_0px_7px_6px_rgb(0,0,0,0.1)]">
            <div>

            </div>
        </div>
      </div>
    </>
  );
}
