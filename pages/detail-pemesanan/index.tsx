import MerchantLayout from "components/layout/MerchantLayout";
import Image from "next/image";
import React, { useState } from "react";

type CartContentProps = {
    restaurantName: String;
    name: String;
    imageURL: String;
    price: Number;
    quantity: Number;
  };

const DetailPemesanan: React.FC = (): JSX.Element => {
    const [cartContent, setCartContent] = useState<CartContentProps[]>([
        {
          restaurantName: "McDonalds",
          imageURL: "/images/pesan/nasgor-enak.jpg",
          name: "Paket Panas 1",
          price: 35000,
          quantity: 1,
        },
      ]);
      
  return (
    <MerchantLayout location="riwayat">
      <div className="w-full min-h-screen">
        <div className="flex mx-4 mt-4 items-center mb-2">
          <Image
            src="/images/icons/left-arrow.svg"
            width={26}
            height={26}
            alt=""
          />
          <h1 className="font-semibold text-gray-500 text-3xl ml-8">
            Detail Pemesanan
          </h1>
        </div>
        <div className="w-full h-32 bg-[url('/images/yummy.jpg')] bg-cover bg-center flex items-end justify-between px-8 pb-3 shadow-[inset_0_-10px_14px_12px_rgb(20,20,20,0.6)]">
          <div className="flex h-10">
            <Image
              src="/images/Profil.svg"
              width={36}
              height={36}
              alt=""
              className="bg-white rounded-full"
            />
            <div className="ml-3 text-white">
              <h2 className="font-semibold">Ninda Nandita</h2>
              <p className="text-sm">+6281234567890</p>
            </div>
          </div>
          <div className="text-white flex flex-col items-end">
            <Image
              src="/images/icons/Calender.svg"
              width={25}
              height={25}
              alt=""
            />
            <p className="text-sm">Sunday, 13 May 2023</p>
          </div>
        </div>
        <div className="mt-6 mx-8 flex flex-col">
          <div className="flex mb-6">
            <Image
              src="/images/icons/Location.svg"
              width={27}
              height={42}
              alt=""
            />
            <div className="ml-3">
              <p className="text-sm">Alamat</p>
              <h2 className="font-semibold">Jalan Selalu Bahagia No 41.</h2>
            </div>
          </div>
          <p className="font-bold text-sm mb-2">Rincian Pesanan</p>
          {cartContent.map((item, index) => (
              <ItemBox key={index} item={item} index={index} />
            ))}
        </div>
      </div>
    </MerchantLayout>
  );
};

const ItemBox: React.FC = ({
    item,
    index,
    isEditing,
  }: {
    item: CartContentProps;
    index: number;
    isEditing: boolean;
  }): JSX.Element => {
    return (
      <div className="flex justify-between mb-2 shadow-card rounded-2xl">
        <div className="h-24 w-24 relative rounded-l-2xl">
          <Image src={item.imageURL} alt="Phone" fill className="rounded-l-2xl" />
        </div>
        <div className="flex-1 mx-4 my-2">
          <p className="font-bold mb-2">{item.name}</p>
          <div className="items-center flex justify-between">
            <p className="font-bold">Rp {item.price * item.quantity}</p>
            <div className="flex justify-evenly items-center">
              <h3 className="font-semibold ml-4">x {item.quantity}</h3>
            </div>
          </div>
        </div>
      </div>
    );
  };

export default DetailPemesanan;
