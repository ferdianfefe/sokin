import { Switch } from "@headlessui/react";
import Button from "components/elements/Button";
import MapContainer from "components/elements/MapContainer";
import HorizontalCardCarousel from "components/homepage-1/HorizontalCardCarousel";
import SquareCardCarousel from "components/homepage-1/SquareCardCarousel";
import VerticalCardCarousel from "components/homepage-1/VerticalCardCarousel";
import DefaultLayout from "components/layout/DefaultLayout";
import Image from "next/image";
import React, { useState } from "react";
import Search from "public/img/homepage/icon-search.png";
import router from "next/router";

export default function Pesan() {
  const [showLocation, setShowLocation] = useState(false);
  const [showPopUp, setShowPopup] = useState("z-50 backdrop-blur-sm fixed w-full h-full translate-y-10 transition duration-300 hidden");
  const [cartItemNumber, setCartItemNumber] = useState(0);

  const toggleShowLocation = () => {
    setShowLocation(!showLocation);
  };
  const togglePopUp = () => {
    if (showPopUp === "z-50 backdrop-blur-sm fixed w-full h-full translate-y-10 transition duration-300 hidden") {
      setShowPopup("z-50 backdrop-blur-sm fixed w-full h-full transition duration-300");
    } else {
        setShowPopup("z-50 backdrop-blur-sm fixed w-full h-full translate-y-10 transition duration-300 hidden");
    }
    // setShowPopup(!showPopUp);
  };

  const tes = async () => {
    await fetch('api/profile/merchant', {
      method: 'GET',
    }).then((res) => 
      res.json()).then((data) => {
        console.log(data);
    })
  }
  return (
    <DefaultLayout location="pesan">
      <div className="fixed p-4 bottom-20 right-6 bg-c-orange-800 rounded-full shadow-2xl shadow-neutral-900">
        {/* <div className="w-6 h-6 absolute bg-c-red-700 -left-[10%] -top-[10%] rounded-full text-neutral-50 flex justify-center items-center">
          <small className="text-xs">{cartItemNumber}</small>
        </div> */}
        <div
          className="relative w-8 h-8"
          onClick={() => {
            router.push("/cart");
          }}
        >
          <Image src="/images/icons/cart.svg" alt="cart-icon" fill />
        </div>
      </div>
      <div className="min-h-screen py-4">
        {showPopUp && (
          <PopupLocation
            showLocation={showLocation}
            setShowLocation={setShowLocation}
            togglePopup={togglePopUp}
            showPopUp={showPopUp}
          />
        )}
        <div className="pl-5 flex items-center">
          <Image
            src="/images/icons/location.svg"
            height={41}
            width={27}
            alt={""}
          />
          <div className="ml-3" onClick={togglePopUp}>
            <div className="flex">
              <p className="text-sm font-semibold">Lokasi Saat Ini</p>
              <Image
                src="/images/pesan/down.svg"
                width={12}
                height={5}
                className="ml-2"
                alt={""}
              />
            </div>
            <h2 className="font-extrabold">Tempo Gelato</h2>
          </div>
        </div>
        <div className="mt-6 px-4">
          <SearchBar />
        </div>
        <div className="flex justify-between mt-7 px-6">
          <div className="flex flex-col items-center gap-2">
            <Image
              src={"/images/pesan/Terdekat.svg"}
              height={61}
              width={61}
              alt={""}
            />
            <p className="text-sm font-semibold text-c-orange-800">Terdekat</p>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Image
              src={"/images/pesan/Terlaris.svg"}
              height={61}
              width={61}
              alt={""}
            />
            <p className="text-sm font-semibold text-c-orange-800">Terlaris</p>
          </div>
          <div className="flex flex-col items-center gap-1 w-[61px] text-center">
            <Image
              src={"/images/pesan/Diskon-makanan.svg"}
              height={61}
              width={61}
              alt={""}
            />
            <p className="text-sm font-semibold text-c-orange-800">
              Diskon Makanan
            </p>
          </div>
          <div className="flex flex-col items-center gap-1 w-[61px] text-center">
            <Image
              src={"/images/pesan/Gratis-ongkir.png"}
              height={61}
              width={61}
              alt={""}
            />
            <p className="text-sm font-semibold text-c-orange-800">
              Gratis Ongkir
            </p>
          </div>
        </div>
        <div className="mt-4 w-full h-full flex flex-col gap-3 px-7">
          <div className="flex justify-between">
            <h2 className="font-bold">Penawaran Kami</h2>

            <div className="flex relative">
              <button className="bg-[#FFE0C0] h-5 rounded-full text-[9px] font-bold text-[#FE8304] px-2 pr-5 drop-shadow-lg shadow-[#FEB26] shadow-inner-white shadow-inner-xl">
                Lihat semuanya
              </button>
              <svg
                className="absolute top-[7px] right-2 items-center align-center"
                width="5"
                height="9"
                viewBox="0 0 5 9"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.16211 8.10828L4.05877 4.64876L1.16211 1.18925"
                  stroke="#FE8304"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>

        <div className="flex -mt-4">
          <HorizontalCardCarousel />
        </div>
        <div className="mt-4 flex px-7 justify-between">
          <div className="flex-col flex gap-3">
            <h2 className="font-bold">Terlaris</h2>
          </div>
          <div className="flex relative">
            <button className="bg-[#FFE0C0] h-5 rounded-full text-[9px] font-bold text-[#FE8304] px-2 pr-5 drop-shadow-lg shadow-[#FEB26] shadow-inner-white shadow-inner-xl">
              Lihat semuanya
            </button>
            <svg
              className="absolute top-[7px] right-2 items-center align-center"
              width="5"
              height="9"
              viewBox="0 0 5 9"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.16211 8.10828L4.05877 4.64876L1.16211 1.18925"
                stroke="#FE8304"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        </div>

        <div className="flex -mt-2">
          <VerticalCardCarousel />
        </div>
        <div className="mt-4 flex px-7">
          <div className="flex-col flex gap-3">
            <h2 className="font-bold">Kategori</h2>
          </div>
        </div>

        <div className="flex mt-2">
          <SquareCardCarousel />
        </div>
      </div>
      {/* <div onClick={tes}>tes</div> */}
    </DefaultLayout>
  );
}

const SearchBar: React.FunctionComponent = (): JSX.Element => {
    return (
      <>
        <div className="relative flex">
          {/* ICON */}
          <span className="absolute inset-y-0 left-0 flex items-center pl-3">
            <Image src={Search} alt={""} />
          </span>
          <input
            placeholder="Cari makananmu"
            type="text"
            className="bg-[#FE8304] rounded-full bg-opacity-40 w-full py-[6px] px-14 font-bold text-sm placeholder-[#817A7A] bg-auto focus:outline-none"
          ></input>
        </div>
      </>
    );
  };

const PopupLocation = ({
  setShowLocation,
  showLocation,
  togglePopup,
  showPopUp,
}: {
  setShowLocation: any;
  showLocation: boolean;
  togglePopup: () => void;
  showPopUp: string;
}) => {
  return (
    <div className={showPopUp}>
      <div className="w-full px-5 pt-5 h-[650px] bg-white rounded-b-3xl drop-shadow-lg">
        <div className="w-full h-20 bg-white justify-between items-center flex px-5 rounded-2xl shadow-[0_0_5px_1px_rgb(400,100,0,0.3)]">
          <div className="flex">
            <Image
              src="/images/icons/location.svg"
              height={41}
              width={27}
              alt={""}
            />
            <div className="ml-3">
              <h3 className="font-semibold">Aktifkan lokasi?</h3>
              <p className="text-sm">Agar lokasimu lebih akurat</p>
            </div>
          </div>
          <Switch
            checked={showLocation}
            onChange={setShowLocation}
            className={`${
              showLocation ? "bg-c-green-700" : "bg-c-red-700"
            } relative inline-flex items-center h-6 rounded-full w-12 shadow-[inset_0_6px_10px_7px_rgb(500,500,500,0.4)]`}
          >
            <span
              className={`${
                showLocation ? "translate-x-1" : "translate-x-7"
              } inline-block h-4 w-4 transform rounded-full bg-white transition`}
            />
          </Switch>
        </div>
        <div className="w-full h-8 mt-6 rounded-full items-center flex px-5 border-c-orange-700 border-[1px] shadow-[-1px_2px_4px_1px_rgb(100,100,100,0.2)]">
          <Image
            src="/images/icons/location.svg"
            width={12}
            height={18}
            alt={""}
          />
          <input className="mx-2 w-full bg-white"></input>
          {/* <Image src="/images/Search.svg" width={14} height={15} alt={""} /> */}
        </div>
        <div className="mt-3 border-gray-400 border-[1px]">
          <MapContainer />
        </div>
        <Button text="Atur Lokasi" className="mt-4"/>
      </div>
      <div className="h-full w-full" onClick={togglePopup}></div>
    </div>
  );
};
