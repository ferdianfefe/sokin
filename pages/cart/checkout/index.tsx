import Button from "components/elements/Button";
import DefaultLayout from "components/layout/DefaultLayout";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

type CartContentProps = {
  restaurantName: String;
  name: String;
  imageURL: String;
  price: Number;
  quantity: Number;
};

interface Promo {
  id: string;
  promoType: string;
  title: string;
  discPercentage: number;
  discValue: any;
  minOrder: number;
  maxDisc: number;
}

const Checkout: React.FC = (): JSX.Element => {
  const [promo, setPromo] = useState<Promo[]>([]);
  const [orderInformation, setOrderInformation] = useState({
    restaurantName: "McDonalds",
    address: "Jl. Raya Bogor KM 30",
    deliveryFee: 5000,
    deliveryTime: 30,
  });
  const [show, setShow] = useState(false);
  
  const [cartContent, setCartContent] = useState<CartContentProps[]>([
    {
      restaurantName: "McDonalds",
      imageURL: "/images/pesan/nasgor-enak.jpg",
      name: "Paket Panas 1",
      price: 35000,
      quantity: 1,
    },
  ]);

  useEffect(() => {
    fetch("http://localhost:3000/api/promo", {
      method: "GET",
    }).then((res) => 
      res.json()
    ).then((data) => {
      setPromo(data)
    })
  }, [])

  const showPromo = () => {
    setShow(true)
  }

  const hidePromo = () => {
    setShow(false)
  }

  return (
    <DefaultLayout location="pesan">
      {show && (
        <div className="w-full min-h-full z-10 bg-[#FFFFFF] fixed">
          <div className="flex items-center px-6 pt-6 mb-4">
            <h1 className="flex items-center text-2xl font-bold text-neutral-700 ml-4">
              <p className="hover:cursor-pointer" onClick={hidePromo}>X</p>
              {/* <p>-</p> */}
            </h1>
            <h1 className="text-2xl font-semibold text-neutral-700 ml-4">
              Gunakan Promo
            </h1>
          </div>
          <div className="px-[5%] font-bold">
            <p className="mb-4">Promo Ongkos Kirim</p>
            {promo.length > 0 && (promo.map((item) => {
              if (item.promoType === "ongkir"){
                return (
                  <div className="w-full h-[25vw] bg-[url('/ongkirPromo.png')] bg-contain bg-no-repeat text-[#FFFFFF] px-[30%] pt-[1.5vh]">
                    <p>{item.title}</p>
                    <p className="text-lg font-light">- Sampai dengan</p>
                    <p className="text-lg font-light">- Minimal order</p>
                  </div>
                )
              }
            })
            )}
          </div>
          <div className="px-[5%] font-bold">
            <p className="mb-4">Promo Makanan atau Minuman</p>
            {promo.length > 0 && (promo.map((item) => {
              if (item.promoType === "makanan"){
                return (
                  <div className="w-full h-[25vw] bg-[url('/foodPromo.png')] bg-contain bg-no-repeat text-[#FE8304] px-[30%] pt-[1.5vh]">
                    <p>{item.title}</p>
                    <p className="text-lg font-light">- Sampai dengan</p>
                    <p className="text-lg font-light">- Minimal order</p>
                  </div>
                )
              }
            })
            )}
          </div>
        </div>
      )}
      <div className="flex flex-col justify-between min-h-screen relative">
        <div className="px-4">
          <div className="flex items-center mb-4  pt-6">
            <div className="h-6 w-6 relative">
              <Link href={"/cart"}>
                <Image
                  src="/images/icons/left-arrow.svg"
                  alt="Left arrow"
                  fill
                />
              </Link>
            </div>
            <h1 className="text-2xl font-semibold text-neutral-700 ml-4">
              Pembayaran
            </h1>
          </div>
          <p className="text-2xl font-bold mb-3">
            {orderInformation.restaurantName}
          </p>
          <div className="flex mb-3 justify-between">
            <div className="flex items-center">
              <Image
                src="/images/icons/location.svg"
                alt="food-image"
                width={29}
                height={41}
              />
              <div className="ml-2">
                <small>Diantar ke</small>
                <p className="font-bold text-lg">{orderInformation.address}</p>
              </div>
            </div>
            <div className="rounded-full flex p-2 bg-c-orange-200 shadow-[0_3px_3px_0.1px_rgb(400,100,0,0.3),inset_0_3px_6px_10px_rgb(500,500,500,0.4)]">
              <div className="relative h-6 w-6 m-2">
                <Image
                  src="/images/icons/scooter.svg"
                  fill
                  alt="scooter-icon"
                />
              </div>
              <div className="">
                <p className="text-neutral-700 text-sm">Estimasi tiba</p>
                <p className="font-semibold text-sm">
                  {orderInformation.deliveryTime} menit
                </p>
              </div>
            </div>
          </div>
          <div className="mb-8">
            <p className="font-semibold text-xl mb-3">Rincian Pesanan</p>
            {cartContent.map((item, index) => (
              <ItemBox key={index} item={item} index={index} />
            ))}
          </div>
          <div className="bg-c-orange-200 flex items-center justify-evenly py-2 px-3 rounded-3xl mb-8 shadow-[0_3px_3px_0.1px_rgb(400,100,0,0.3),inset_0_3px_6px_10px_rgb(500,500,500,0.3)]" onClick={showPromo}>
            <div className="relative w-8 h-8">
              <Image
                src="/images/icons/discount.svg"
                alt="discount-icon"
                fill
              />
            </div>
            <p className="text-c-orange-800 text-2xl hover:cursor-pointer font-semibold ">
              Jangan lupa pakai promo
            </p>
            <div className="relative w-4 h-4">
              <Image
                src={"/images/icons/chevron-right.svg"}
                fill
                alt="right-arrow-icon"
              />
            </div>
          </div>
          <div className="text-2xl font-semibold">
            <p className="mb-4">Ringkasan Pembayaran</p>
            <div className="flex justify-between mb-4">
              <p className="">Total Pesanan</p>
              <p className="">
                Rp{" "}
                {cartContent.reduce(
                  (total, item) => total + item.price * item.quantity,
                  0
                )}
              </p>
            </div>
            <div className="flex justify-between mb-4">
              <p className="">Ongkos Kirim</p>
              <p className="">Rp 10000</p>
            </div>
            <div className="flex justify-between mb-4">
              <p className="">Biaya Layanan</p>
              <p className="">Rp 2500</p>
            </div>
            <hr className="border-[1.5px] border-[#000000] mb-4" />
            <div className="flex justify-between mb-4">
              <p className="">Total</p>
              <p className="">
                Rp{" "}
                {cartContent.reduce(
                  (total, item) => total + item.price * item.quantity,
                  0
                ) +
                  10000 +
                  2500}
              </p>
            </div>
          </div>
        </div>
        <PaymentPopup />
        <div className="w-full h-40 bg-c-orange-300 px-7 pb-3 pt-6 shadow-[inset_0_0px_15px_7px_rgb(500,500,500,0.2)]">
          <div className="flex justify-between mb-8">
            <div className="flex">
              <Image src={"/images/icons/SocketOrange.svg"} alt={""} width={41} height={31}/>
              <div className="ml-5">
                <p className="text-lg font-semibold">Soket</p>
                <h3 className="font-extrabold text-red-600">83.500</h3>
              </div>
            </div>
            <div className="w-20 h-6 bg-c-orange-400"></div>
          </div>
          <Button text={"Pesan dan Bayar Sekarang"} type="gray"/>
        </div>
      </div>
      <PaymentPopup />
    </DefaultLayout>
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

const PaymentPopup: React.FC = (): JSX.Element => {
  const [saldo, setSaldo] = useState(0);
  return (
    <div className="sticky bottom-0 left-0">
      <div className="bg-c-red-700 flex items-center h-12 justify-evenly shadow-[inset_0_0px_15px_7px_rgb(500,500,500,0.2)]">
        <div className="relative w-6 h-6">
          <Image src={"/images/icons/bell.svg"} alt="bell-icon" fill />
        </div>
        <p className="text-neutral-50">Saldo kurang, Top up atau bayar tunai</p>
        <Button text="Top up" className="!w-16 !h-8 text-base font-semibold" />
      </div>
      <div className="bg-c-orange-200">
        <div className="flex items-center justify-between py-8">
          <div className="flex">
            <div className="relative h-6 w-6">
              <Image src="/images/icons/wallet.svg" alt="wallet-icon" fill />
            </div>
            <div className="flex-2">
              <p>Soket</p>
              <p>Rp {100000}</p>
            </div>
          </div>
          <Button
            text="Ganti Opsi"
            className="!w-20 bg-c-orange-200 text-base font-light !text-c-orange-800"
          />
        </div>
        <Button
          text="Pesan dan Bayar Sekarang"
          className="bg-neutral-600 font-semibold"
        />
      </div>
    </div>
  );
};

export default Checkout;
