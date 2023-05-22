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
          <div className="w-full h-48 rounded-lg shadow-card mt-9 flex flex-col items-center">
            <p className="font-semibold text-base">Driver</p>
            <Image
              src="/images/Profil.svg"
              width={62}
              height={62}
              alt=""
              className="bg-white rounded-full"
            />
            <h2 className="text-xl font-bold">Budi Suryadi</h2>
            <p className="text-sm">+6281234567890</p>
            <div className="w-16 h-7 bg-c-orange-100 flex items-center justify-center gap-2 rounded-full shadow-[1px_3px_2px_1px_rgb(500,150,0,0.3)]">
              <Image src={'/images/icons/star.svg'} width={16} height={16}/>
              <p className="font-semibold">98</p>
            </div>
          </div>
          <div className="text-lg font-semibold">
            <p className="mb-4 font-extrabold mt-7">Ringkasan Pembayaran</p>
            <div className="flex justify-between mb-4">
              <p className="">Total Pesanan</p>
              <p className="">
                Rp55.750
                {/* {cartContent.reduce(
                  (total, item) => total + item.price * item.quantity,
                  0
                )} */}
              </p>
            </div>
            <div className="flex justify-between mb-4">
              <p className="">Diskon</p>
              <p className="">
                -Rp15.000
                {/* {cartContent.reduce(
                  (total, item) => total + item.price * item.quantity,
                  0
                )} */}
              </p>
            </div>
            <div className="flex justify-between mb-4">
              <p className="">Ongkos Kirim</p>
              <p className="">Rp0</p>
            </div>
            <div className="flex justify-between mb-4">
              <p className="">Biaya Layanan</p>
              <p className="">Rp2.500</p>
            </div>
            <hr className="border-[1.5px] border-[#000000] mb-4" />
            <div className="flex justify-between mb-4 font-extrabold">
              <p className="">Total</p>
              <p className="">
                Rp55.750
              </p>
            </div>
          </div>
        </div>
        <div className="w-full h-28 bg-c-orange-800 px-8 py-3">
          <p className="text-white">Metode Pembayaran</p>
          <div className="w-full h-14 bg-white flex items-center gap-5 rounded-3xl shadow-[2px_3px_10px_2px_rgb(70,70,0,0.4)] px-6">
              <Image src={'/images/icons/SocketOrange.svg'} width={41} height={31}/>
              <div className="text-sm">
                <p className="font-semibold">Soket</p>
                <h3 className="font-extrabold text-c-orange-800">Rp55.750</h3>
              </div>
          </div>
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
