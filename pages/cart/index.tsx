import Button from "components/elements/Button";
import DefaultLayout from "components/layout/DefaultLayout";
import Image from "next/image";
import { useEffect, useState } from "react";

type CartContentProps = {
  restaurantName: String;
  name: String;
  imageURL: String;
  price: Number;
  quantity: Number;
};

const Cart: React.FC = (): JSX.Element => {
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
    fetch("/api/cart", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data.menuItems);
        setCartContent(data.menuitems);
      });
  }, []);

  const [isEditing, setIsEditing] = useState(false);

  const changeItemQuantity = (index: number, quantity: number) => {
    console.log(index);
    const newCartContent = [...cartContent];
    newCartContent[index].quantity = quantity;
    setCartContent(newCartContent);
  };

  return (
    <DefaultLayout location="cart">
      {cartContent?.length > 0 ? (
        <div className="px-6 flex flex-col justify-between min-h-screen">
          <div className="">
            <div className="flex items-center mb-4  pt-6">
              <div className="h-6 w-6 relative">
                <Image
                  src="/images/icons/left-arrow.svg"
                  alt="Left arrow"
                  fill
                />
              </div>
              <h1 className="text-2xl font-semibold text-neutral-700 ml-4">
                Keranjang Saya
              </h1>
            </div>
            <div className="">
              <div className="flex justify-between items-center mb-2">
                <p className="font-bold text-2xl">
                  {cartContent[0].restaurantName}
                </p>
                <div className="bg-c-orange-800 p-3 rounded-full">
                  <div
                    className="w-4 h-4 relative"
                    onClick={() => setIsEditing(!isEditing)}
                  >
                    <Image
                      src={`images/icons/${isEditing ? "x" : "pencil"}.svg`}
                      alt="Pencil"
                      fill
                    />
                  </div>
                </div>
              </div>
              {cartContent.map((item, index) => (
                <ItemBox
                  item={item}
                  key={index}
                  index={index}
                  changeItemQuantity={changeItemQuantity}
                  isEditing={isEditing}
                />
              ))}
            </div>
            <div className="flex mt-4 font-bold text-3xl">
              <p className="">Total : </p>
              <p className="text-c-orange-700">
                {" "}
                {cartContent.reduce(
                  (total, item) => total + item.price * item.quantity,
                  0
                )}
              </p>
            </div>
          </div>
          <div className="mb-10">
            <Button text="Lanjut Ke Pembayaran" />
          </div>
        </div>
      ) : (
        <div className="h-screen relative px-6">
          <div className="flex items-center mb-4 pt-6">
            <div className="h-6 w-6 relative">
              <Image src="/images/icons/left-arrow.svg" alt="Left arrow" fill />
            </div>
            <h1 className="text-2xl text-neutral-700 font-semibold ml-4">
              Keranjang Saya
            </h1>
          </div>
          <div className="absolute left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%]">
            <div className="w-80 h-80 relative">
              <Image src="/images/empty-cart-bg.png" alt="Empty cart" fill />
            </div>
            <h1 className="text-2xl font-medium text-neutral-700 mt-6 text-center">
              Keranjangmu Masih Kosong
            </h1>
          </div>
        </div>
      )}
    </DefaultLayout>
  );
};

const ItemBox: React.FC = ({
  item,
  index,
  changeItemQuantity,
  isEditing,
}: {
  item: CartContentProps;
  index: number;
  changeItemQuantity: (index: number, quantity: Number) => void;
  isEditing: boolean;
}): JSX.Element => {
  return (
    <div className="flex justify-between mb-2 shadow-card">
      <div className="h-24 w-24 relative rounded-l-2xl">
        <Image src={item.imageURL} alt="Phone" fill className="rounded-l-2xl" />
      </div>
      <div className="flex-1 mx-4 my-2">
        <p className="font-bold mb-2">{item.name}</p>
        <div className="flex items-center">
          <p className="font-bold">Rp {item.price * item.quantity}</p>
          <div className="flex justify-evenly items-center">
            <div
              className="w-10 h-10 relative"
              onClick={() => {
                if (item.quantity > 1) {
                  changeItemQuantity(index, item.quantity - 1);
                }
              }}
            >
              <Image
                src={"/images/icons/minus-icon.svg"}
                alt="minus-icon"
                fill
              />
            </div>
            <h3 className="font-semibold ml-4">{item.quantity}</h3>
            <div
              className="w-10 h-10 relative ml-4"
              onClick={() => {
                changeItemQuantity(index, item.quantity + 1);
              }}
            >
              <Image src={"/images/icons/plus-icon.svg"} alt="plus-icon" fill />
            </div>
          </div>
        </div>
      </div>
      <div
        className={`bg-c-red-700 h-100 px-8 ${
          isEditing ? "flex" : "hidden"
        } flex-col justify-center items-center w-0`}
      >
        <div className={`w-8 transition-all h-8 relative`}>
          <Image src={"/images/icons/trashcan.svg"} alt="trash-icon" fill />
        </div>
        <p className="font-bold text-neutral-50">Hapus</p>
      </div>
    </div>
  );
};

export default Cart;