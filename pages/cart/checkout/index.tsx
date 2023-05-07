import Button from "components/elements/Button";
import DefaultLayout from "components/layout/DefaultLayout";
import { useState } from "react";
import Image from "next/image";

type CartContentProps = {
  restaurantName: String;
  name: String;
  imageURL: String;
  price: Number;
  quantity: Number;
};

const Checkout: React.FC = (): JSX.Element => {
  const [orderInformation, setOrderInformation] = useState({
    restaurantName: "McDonalds",
    address: "Jl. Raya Bogor KM 30",
    deliveryFee: 5000,
    deliveryTime: 30,
  });
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
    <DefaultLayout location="cart">
      <div className="px-6 flex flex-col justify-between min-h-screen relative">
        <div className="">
          <div className="flex items-center mb-4  pt-6">
            <div className="h-6 w-6 relative"></div>
            <h1 className="text-2xl font-semibold text-neutral-700 ml-4">
              Pembayaran
            </h1>
          </div>
          <p className="text-2xl font-bold mb-3">
            {orderInformation.restaurantName}
          </p>
          <div className="flex justify-between px-4 mb-3">
            <div className="">
              <small>Diantar ke</small>
              <p className="font-bold text-xl">{orderInformation.address}</p>
            </div>
            <div className="rounded-3xl flex p-2 bg-c-orange-200 shadow-card">
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
          <div className="bg-c-orange-200 flex items-center justify-evenly py-2 px-3 rounded-3xl mb-8">
            <div className="relative w-8 h-8">
              <Image
                src="/images/icons/discount.svg"
                alt="discount-icon"
                fill
              />
            </div>
            <p className="text-c-orange-800 text-2xl">
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
      </div>
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
    <div className="flex justify-between mb-2 shadow-card">
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
      <div className="bg-c-red-700 flex items-center">
        <div className="relative w-6 h-6">
          <Image src={"/images/icons/bell.svg"} alt="bell-icon" fill />
        </div>
        <p className="text-neutral-50">Saldo kurang, Top up atau bayar tunai</p>
        <Button text="Top up" className="!w-20 text-base" />
      </div>
    </div>
  );
};

export default Checkout;
