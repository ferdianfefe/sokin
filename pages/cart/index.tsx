import Button from "components/elements/Button";
import DefaultLayout from "components/layout/DefaultLayout";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

type CartContentProps = {
  restaurantName: String;
  name: String;
  image: String;
  price: Number;
  quantity: Number;
};

const Cart: React.FC = (): JSX.Element => {
  const [cartContent, setCartContent] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const { data: session, status } = useSession();
  const user = session?.user;
  const router = useRouter();

  useEffect(() => {
    if (user) {
      setIsLoading(true);
      fetch(
        "/api/cart?" +
          new URLSearchParams({
            userId: user.id,
          }),
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
        .then((res) => res.json())
        .then((data) => {
          setIsLoading(false);
          setCartContent(data.menuItems);
        });
    }
  }, [user]);

  const [isEditing, setIsEditing] = useState(false);

  const changeItemQuantity = (index: number, quantity: number) => {
    const newCartContent = [...cartContent];
    newCartContent[index].quantity = quantity;
    setCartContent(newCartContent);
  };

  const bayar = (x: number) => {
    let id = router.query.merchant;
    // return alert (x)
    // console.log(id);
    router.push({
      pathname: "/cart/checkout",
      query: {
        total: x,
        merchantId: id,
      },
    });
  };

  return (
    <DefaultLayout location="cart" isLoading={isLoading}>
      {cartContent?.length > 0 ? (
        <div className="px-6 flex flex-col justify-between min-h-screen">
          <div className="">
            <div className="flex items-center mb-4  pt-6">
              <div className="h-6 w-6 relative">
                <div onClick={() => router.back()}>
                  <Image
                    src="/images/icons/left-arrow.svg"
                    alt="Left arrow"
                    fill
                  />
                </div>
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
                <div className="bg-c-orange-800 flex items-center justify-center w-8 h-8 rounded-full">
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
                  set={setCartContent}
                  content={cartContent}
                />
              ))}
            </div>
            <div className="flex mt-4 font-bold text-3xl">
              <p className="">Total : </p>
              <p className="text-c-orange-700">
                Rp{" "}
                {cartContent.reduce(
                  (total, item) => total + item.menu.price * item.quantity,
                  0
                )}
              </p>
            </div>
          </div>
          <div className="mb-10">
            <div
              onClick={() => {
                let totalHarga = cartContent.reduce(
                  (total, item) => total + item.menu.price * item.quantity,
                  0
                );
                bayar(totalHarga);
              }}
            >
              <Button text="Lanjut Ke Pembayaran" />
            </div>
          </div>
        </div>
      ) : (
        <div className="h-screen relative px-6">
          <div className="flex items-center mb-4 pt-6">
            <div onClick={() => router.back()}>
              <div className="h-6 w-6 relative">
                <Image
                  src="/images/icons/left-arrow.svg"
                  alt="Left arrow"
                  fill
                />
              </div>
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
  set,
  content,
}: {
  item: CartContentProps;
  index: number;
  changeItemQuantity: (index: number, quantity: number) => void;
  isEditing: boolean;
  set: any;
  content: any;
}): JSX.Element => {
  const delMenu = (item) => {
    let newCart = [...content];
    for (let i = 0; i < newCart.length; i++) {
      if (newCart[i].menu.id === item.menu.id) {
        newCart.splice(i, 1);
      }
    }
    set(newCart);
    // alert(item.id)
    fetch("/api/cart", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        menuId: item.id,
      }),
    });
  };

  return (
    <div className="flex justify-between mb-2 shadow-card rounded-3xl">
      <div className="h-24 w-24 relative rounded-2xl">
        <Image
          src={item.menu.image}
          alt="Phone"
          fill
          className="rounded-l-2xl"
        />
      </div>
      <div className="flex-1 mx-4 my-2">
        <p className="font-bold mb-2">{item.menu.name}</p>
        <div className="flex items-center">
          <p className="font-bold">Rp {item.menu.price * item.quantity}</p>
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
        className={`bg-c-red-700 h-100 px-8 rounded-r-3xl ${
          isEditing ? "flex" : "hidden"
        } flex-col justify-center items-center w-0`}
        onClick={() => delMenu(item)}
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
