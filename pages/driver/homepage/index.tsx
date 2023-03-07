import Navbar from "components/elements/Navbar";
import DriverLayout from "components/layout/DriverLayout";
import Image from "next/image";
import React, { useState } from "react";

export default function Homepage() {
    const [setActive, setActiveState] = useState(false);
  return (
    <>
      <DriverLayout location='home'>
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
              <Image
                src="/images/driver/Star.svg"
                width={11}
                height={11}
                alt="star"
              />
              <p className="text-xs">Rating</p>
            </div>
            <h3 className="font-semibold text-center">4.7</h3>
          </div>
          <div className="bg-white rounded-lg p-1 w-[25%] h-[42px] flex-col justify-center items-center">
            <div className="flex justify-evenly">
              <Image
                src="/images/driver/Histogram.svg"
                width={11}
                height={11}
                alt="star"
              />
              <p className="text-xs">Target Harian</p>
            </div>
            <h3 className="font-semibold text-center">0 %</h3>
          </div>
        </div>
        <div className="flex justify-evenly mt-3 border-b-orange-500 border-[1px] pb-3">
          <div className="py-[6px] bg-orange-500 h-14 w-[30%] text-white rounded-[21px] shadow-[-2px_2px_5px_0.1px_rgb(120,30,0,0.7),inset_0_0px_6px_6px_rgb(0,0,0,0.1)]">
            <div className="flex justify-center">
              <Image
                src="/images/driver/Socket.svg"
                width={18}
                height={14}
                alt="star"
              />
              <p className="text-xs ml-2">Saldomu</p>
            </div>
            <h3 className="text-sm mt-1 text-center font-semibold">
              RP 430.000
            </h3>
          </div>
          <div className="py-[6px] bg-orange-500 h-14 w-[30%] text-white rounded-[21px] shadow-[-2px_2px_5px_0.1px_rgb(120,30,0,0.7),inset_0_0px_6px_6px_rgb(0,0,0,0.1)]">
            <div className="flex justify-center">
              <Image
                src="/images/driver/Kendaraan.svg"
                width={18}
                height={14}
                alt="star"
              />
              <p className="text-xs ml-2">Kendaraan</p>
            </div>
            <h3 className="text-sm mt-1 text-center font-semibold">
              Vario Tekno 110
            </h3>
          </div>
          <div className="py-[6px] bg-orange-500 h-14 w-[30%] text-white rounded-[21px] shadow-[-2px_2px_5px_0.1px_rgb(120,30,0,0.7),inset_0_0px_6px_6px_rgb(0,0,0,0.1)]">
            <div className="flex justify-center">
              <Image
                src="/images/driver/Plat.svg"
                width={20}
                height={14}
                alt="star"
              />
              <p className="text-xs ml-1">Plat Nomor</p>
            </div>
            <h3 className="text-sm mt-1 text-center font-semibold">
              Dk 1782 AB
            </h3>
          </div>
        </div>
        <div className="h-11">
            <div></div>
        </div>
      </DriverLayout>
    </>
  );
}
