import Image from "next/image";
import MerchantLayout from "components/layout/MerchantLayout";
import Button from "components/elements/Button";
import {
  useSession,
  UseSessionOptions,
  getSession,
  signOut,
} from "next-auth/react";
import Navbar from "components/elements/Navbar";
import React, { useEffect, useState } from "react";
import { io } from "socket.io-client";

// const PopUpOrderMerchant: React.FC<{
//   orderNumber: number;
//   customerName: string;
//   menuName: string;
//   image:String;
//   menuCount: number;
//   totalPrice: number;
//   customerRate: number;
// }> = ({
//   orderNumber,
//   customerName,
//   menuName,
//   image,
//   menuCount,
//   totalPrice,
//   customerRate,
// }): JSX.Element => {
//   return(
//     <div>

//     </div>
//   )
// }

const PopUpOrderMerchant: React.FC<{
  orderNumber?: number;
  customerName?: string;
  menuName?: string;
  image?: String;
  menuCount?: number;
  totalPrice?: number;
  customerRate?: number;
}> = ({
  orderNumber,
  customerName,
  menuName,
  image,
  menuCount,
  totalPrice,
  customerRate,
}): JSXStyle.Element => {
  const [isOpen, setIsOpen] = useState(true);

  const handleClose = () => {
    setIsOpen(false);
  };
  return isOpen ? (
    <div className="hidden">
      <div className="w-full">
        <div className="absolute inset-0 m-auto rounded-[20px] w-[352px] h-[375px] bg-[#FFF] z-50 p-8">
          <div className="flex gap-10 items-center border-b-2 border-c-orange-500 pb-2">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              onClick={handleClose}
            >
              <path
                d="M19.7208 2.41357L17.8073 0.5L10.2208 8.08643L2.6344 0.5L0.720825 2.41357L8.30725 10L0.720825 17.5864L2.6344 19.5L10.2208 11.9136L17.8073 19.5L19.7208 17.5864L12.1344 10L19.7208 2.41357Z"
                fill="#565351"
              />
            </svg>
            <h1 className="font-black text-3xl">Orderan Masuk</h1>
          </div>

          <div className="flex h-14 justify-between">
            <div className="flex gap-4 items-center">
              <p className="text-3xl font-bold text-[#FE860B]">#123</p>
              <div className="flex flex-col">
                <p className="font-bold text-base">Pemesan</p>
                <p className="text-base">Rachel Naragifta</p>
              </div>
            </div>
            <div className="w-[61px] py-[2px] flex my-auto rounded-full bg-c-orange-200 shadow-[0px_4px_4px_#FBC48A] justify-center items-center gap-[2px]">
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.01178 1.42135C8.26963 0.738456 9.24219 0.738456 9.50004 1.42135L11.1634 6.06059C11.2797 6.36866 11.5762 6.57276 11.9075 6.57276H15.9947C16.7495 6.57276 17.0791 7.51962 16.4857 7.98274L13.577 10.6182C13.3091 10.8272 13.2052 11.1825 13.3186 11.5015L14.3805 16.0351C14.639 16.7626 13.8012 17.3885 13.1692 16.94L9.21785 14.4165C8.94152 14.2204 8.5703 14.2204 8.29397 14.4165L4.34268 16.94C3.71058 17.3885 2.87282 16.7626 3.13135 16.0351L4.19328 11.5015C4.30664 11.1825 4.2027 10.8272 3.93486 10.6182L1.02611 7.98274C0.432657 7.51962 0.762384 6.57276 1.5171 6.57276H5.60428C5.93556 6.57276 6.23208 6.36866 6.34841 6.06059L8.01178 1.42135Z"
                  fill="#FE8304"
                  stroke="#FE8304"
                  stroke-width="0.803675"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <h3 className="flex font-extrabold text-xl">98</h3>
            </div>
          </div>

          <div>
            <h1 className="font-bold text-2xl mt-2">Pesanan</h1>
            <div className="mt-2 w-full h-20 shadow-[0px_4.35606px_3.48485px_rgba(215, 134, 50, 0.4)] radius-[18px] overflow-hidden border-2 rounded-[16px] flex">
              <div className="bg-slate-200 w-[40%] h-full object-cover"></div>
              <div className="flex flex-col items-center text-lg mx-6 font-bold justify-center gap-4 w-full">
                <p className="flex w-full justify-start">Nama Menu</p>
                <div className="flex w-full justify-between">
                  <p className="flex">Rp20.000</p>
                  <p className="flex justify-end">x2</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex w-full justify-between mt-4 font-bold">
            <p>Total</p>
            <p>Rp35.000</p>
          </div>

          <div className="mt-4">
            <Button text="Pesanan diproses" />
          </div>
        </div>
      </div>
    </div>
  ) : null;
};

const OrderItem: React.FC<{
  orderNumber: number;
  customerName: string;
  menuCount: number;
  totalPrice: number;
  time: string;
}> = ({
  orderNumber,
  customerName,
  menuCount,
  totalPrice,
  time,
}): JSX.Element => {
  return (
    <div className="flex px-4 py-2 items-center justify-between shadow-md shadow-list-order rounded-full border-[#b85f00]/15 border-[1px] border-opacity-30">
      <div className="flex items-center">
        <p className="text-3xl font-bold text-[#FE860B]">#{orderNumber}</p>
        <div className="ml-4">
          <p className="text-sm font-bold md:text-lg">{customerName}</p>
          <div className="text-xs flex gap-1 md:text-base">
            <p className="text-[#535353] font-semibold">{menuCount} Menu</p>
            <p className="text-[#B3A5A5]">|</p>
            <p className="text-[#535353] font-semibold">Rp{totalPrice}</p>
          </div>
        </div>
      </div>
      <div className="bg-[#FF7272] rounded-full text-white text-[10px] md:text-base font-bold px-2 py-2 md:px-4 flex gap-1 relative">
        <svg
          className="flex md:mr-2 md:my-auto"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7.992 0C3.576 0 0 3.584 0 8C0 12.416 3.576 16 7.992 16C12.416 16 16 12.416 16 8C16 3.584 12.416 0 7.992 0ZM8 14.4C4.464 14.4 1.6 11.536 1.6 8C1.6 4.464 4.464 1.6 8 1.6C11.536 1.6 14.4 4.464 14.4 8C14.4 11.536 11.536 14.4 8 14.4Z"
            fill="white"
          />
          <path
            d="M8.4002 4H7.2002V8.8L11.4002 11.32L12.0002 10.336L8.4002 8.2V4Z"
            fill="white"
          />
        </svg>

        {time}
      </div>
    </div>
  );
};

const orderData = [
  {
    orderNumber: 1,
    customerName: "Rizky",
    menuCount: 2,
    totalPrice: 20000,
    time: "12:00",
  },
  {
    orderNumber: 2,
    customerName: "Rizky",
    menuCount: 2,
    totalPrice: 20000,
    time: "12:00",
  },
  {
    orderNumber: 3,
    customerName: "Rachel Naragifta",
    menuCount: 2,
    totalPrice: 20000,
    time: "14:50",
  },
];

const Merchant: React.FC = () => {
  const { data: session, status } = useSession();
  // console.log(session?.user);
  const user = session?.user;

  const [logo, setLogo] = useState<string>("/images/preksu.png");
  const [name, setName] = useState<string>("");
  const [merchantId, setMerchantId] = useState<string>("");
  const [active, setActive] = useState<number>(1);
  const [statusOrder, setStatusOrder] = useState<string>("");
  const [order, setOrder] = useState<any>([]);

  //untuk detail order
  const [detailOpen, setDetailOpen] = useState<boolean>(false);
  const [destination, setDestination] = useState<string>("");
  const [username, setUsername] = useState<string>("");
  const [cartContent, setCartContent] = useState<any[]>([]);
  const [driverName, setDriverName] = useState<string>("");
  const [driverPhone, setDriverPhone] = useState<string>("");
  const [orderTotal, setOrderTotal] = useState<number>(0);
  const [merchantLogo, setMerchantLogo] = useState<string>("");

  const [newOrderData, setNewOrderData] = useState<any[]>([]);

  let merId = "";

  useEffect(() => {
    fetch("/api/profile/merchant/merchantInfo", {
      method: "POST",
      body: JSON.stringify({
        id: user?.id,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setLogo(data.merchantLogo);
        setName(data.name);
        setMerchantId(data.id);
        setMerchantLogo(data.merchantLogo);
        merId = data.id;
      })
      .then(() => {
        fetch("/api/order/getOrder", {
          method: "POST",
          body: JSON.stringify({
            id: merId,
            // id: '641f459cf632f91b866b4807'
          }),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            setOrder(data);
          });
      });
  }, []);

  useEffect(() => {
    const socket = io();
    socket.on("newOrder", (data) => {
      setNewOrderData(data);
      let newOrders = [...order];
      newOrders.push(data);
      setOrder(newOrders);
    });
  }, [merId]);

  const logoutHandler = () => {
    signOut();
  };

  return (
    <MerchantLayout
      location="home"
      setNewOrderData={setNewOrderData}
      order={order}
      setOrder={setOrder}
    >
      <div
        className={`fixed w-full min-h-screen bg-white ${
          detailOpen ? "" : "hidden"
        }`}
      >
        <div className="w-full min-h-screen">
          <div className="flex mx-4 mt-4 items-center mb-2">
            <div onClick={() => setDetailOpen(false)}>
              <Image
                src="/images/icons/left-arrow.svg"
                width={26}
                height={26}
                alt=""
              />
            </div>
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
                <h2 className="font-semibold">{username}</h2>
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
              <p className="text-sm">{Date().toString().slice(0, 10)}</p>
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
                <h2 className="font-semibold">{destination}</h2>
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
              <h2 className="text-xl font-bold">{driverName}</h2>
              <p className="text-sm">{driverPhone}</p>
              <div className="w-16 h-7 bg-c-orange-100 flex items-center justify-center gap-2 rounded-full shadow-[1px_3px_2px_1px_rgb(500,150,0,0.3)]">
                <Image src={"/images/icons/star.svg"} width={16} height={16} />
                <p className="font-semibold">98</p>
              </div>
            </div>
            <div className="text-lg font-semibold">
              <p className="mb-4 font-extrabold mt-7">Ringkasan Pembayaran</p>
              <div className="flex justify-between mb-4">
                <p className="">Total Pesanan</p>
                <p className="">
                  Rp {orderTotal}
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
                <p className="">Rp {orderTotal}</p>
              </div>
            </div>
          </div>
          <div className="w-full h-28 bg-c-orange-800 px-8 py-3">
            <p className="text-white">Metode Pembayaran</p>
            <div className="w-full h-14 bg-white flex items-center gap-5 rounded-3xl shadow-[2px_3px_10px_2px_rgb(70,70,0,0.4)] px-6">
              <Image
                src={"/images/icons/SocketOrange.svg"}
                width={41}
                height={31}
              />
              <div className="text-sm">
                <p className="font-semibold">Soket</p>
                <h3 className="font-extrabold text-c-orange-800">Rp55.750</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="p-8 h-full">
        <PopUpOrderMerchant />
        <h1 className="font-bold text-black text-lg mb-3">Informasi Akun</h1>
        <div className="bg-[#FCBF86] w-full h-44 flex rounded-3xl px-2 py-6 mb-3 items-center justify-evenly text-[14px]">
          <div className="w-[94px] h-[94px] rounded-full overflow-hidden shadow-[inset_0px_2.70504px_2.70504px_rgba(255, 255, 255, 0.25)]">
            <Image alt="preksu-logo" src={logo} width={94} height={94}></Image>
          </div>
          <div className="mx-2 w-52">
            <h3 className="font-semibold mb-2">{name}</h3>
            <div className="bg-white py-[6px] mb-2 flex rounded-xl w-full pl-4">
              <Image
                alt="wallet-icon"
                src={"/images/icons/wallet.svg"}
                width={26}
                height={21}
                className="mr-4"
              ></Image>
              <div className="ml-1">
                <p className="text-semibold text-sm">Total Penjualan</p>
                <p className="font-bold">Rp 20.000.000</p>
              </div>
            </div>
            <div className="flex w-full">
              <div className="bg-white flex rounded-xl w-[99px] h-12 justify-evenly items-center mr-1">
                <Image
                  alt="up arrow icon"
                  src={"/images/icons/up-arrow.svg"}
                  width={12}
                  height={22}
                  className=""
                ></Image>
                <div className="text-sm">
                  <p>Pemasukan</p>
                  <p className="font-semibold">Rp 200.000</p>
                </div>
              </div>
              <div className="rounded-xl bg-white w-[99px] h-12 justify-center items-center text-center text-[12px] flex flex-col">
                <p>Total Transaksi</p>
                <p className="font-semibold">1237</p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-6">
          <div className="flex justify-between font-bold mb-4">
            <div
              className={`cursor-pointer ${
                active == 1
                  ? "text-[#FE8304] border-b-2 border-[#FE8304]"
                  : "text-gray-400"
              }`}
              onClick={() => {
                setActive(1);
              }}
            >
              All Order
            </div>
            <div
              className={`cursor-pointer ${
                active == 2
                  ? "text-[#FE8304] border-b-2 border-[#FE8304]"
                  : "text-gray-400"
              }`}
              onClick={() => {
                setActive(2);
                setStatusOrder("RECEIVED");
              }}
            >
              Received
            </div>
            <div
              className={`cursor-pointer ${
                active == 3
                  ? "text-[#FE8304] border-b-2 border-[#FE8304]"
                  : "text-gray-400"
              }`}
              onClick={() => {
                setActive(3);
                setStatusOrder("PROCESSING");
              }}
            >
              Processing
            </div>
            <div
              className={`cursor-pointer ${
                active == 4
                  ? "text-[#FE8304] border-b-2 border-[#FE8304]"
                  : "text-gray-400"
              }`}
              onClick={() => {
                setActive(4);
                setStatusOrder("DELIVERY");
              }}
            >
              On Delivery
            </div>
          </div>
          <div className="min-h-[70vh]">
            {order.length > 0 ? (
              order.map((order, i) => {
                return (
                  <div
                    className={`${
                      order.status == statusOrder || active == 1 ? "" : "hidden"
                    } flex w-full hover:cursor-pointer hover:scale-[.975] h-[15vw] ${
                      order.status == "DELIVERY" ? "bg-[url('/Del.png')]" : ""
                    } ${
                      order.status == "PROCESSING" ? "bg-[url('/Pro.png')]" : ""
                    } ${
                      order.status == "RECEIVED" ? "bg-[url('/Rec.png')]" : ""
                    } bg-contain bg-no-repeat`}
                    onClick={() => {
                      setDestination(order.destination);
                      setUsername(order.user.name);
                      setCartContent(order.cart.menuItems);
                      // console.log(order.cart.menuItems);
                      setDriverName(order.driver.name);
                      setDriverPhone(order.driver.phoneNumber);
                      setOrderTotal(
                        parseInt(order.foodFee) + parseInt(order.costFee)
                      );
                      setDetailOpen(true);
                    }}
                  >
                    <div className="px-10 flex font-bold text-[#FE8304] h-[10vw] items-center text-2xl">
                      #{i + 1}
                    </div>
                    <div className="flex flex-col justify-evenly h-[10vw]">
                      <div className="font-bold text-lg">{order.user.name}</div>
                      <div className="font-bold text-gray-400 text-sm">
                        {order.cart.menuItems.length} Menu | Rp{" "}
                        {parseInt(order.foodFee) + parseInt(order.costFee)}
                      </div>
                    </div>
                  </div>
                );
              })
            ) : (
              <div className="flex justify-center items-center h-[70vh]">
                <h1 className="text-2xl font-bold text-gray-400">
                  Belum ada pesanan
                </h1>
              </div>
            )}
          </div>
          <div className="hidden rounded-full py-1 px-2 h-8 bg-[#FFE0C0] text-[#FE8304] mb-3 font-bold text-center shadow-md text shadow-[0_3px_3px_0.3px_rgb(400,100,0,0.4),inset_0_3px_7px_6px_rgb(500,500,500,0.3)] w-[45%] md:w-[25%]">
            Antrian Pesanan
          </div>
          <div className="hidden mb-10 flex flex-col gap-4 mt-6">
            {orderData.map((order) => {
              return (
                <OrderItem
                  orderNumber={order.orderNumber}
                  customerName={order.customerName}
                  menuCount={order.menuCount}
                  totalPrice={order.totalPrice}
                  time={order.time}
                />
              );
            })}
          </div>
        </div>
        <div className="absolute justify-center w-[83%] bottom-24">
          <Button text="Tutup Toko" />
        </div>
      </div>
      {/* <div onClick={logoutHandler}>logout</div> */}
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
        <Image
          src={item.menu.image}
          alt="Phone"
          fill
          className="rounded-l-2xl"
        />
      </div>
      <div className="flex-1 mx-4 my-2">
        <p className="font-bold mb-2">{item.menu.name}</p>
        <div className="items-center flex justify-between">
          <p className="font-bold">
            Rp {parseInt(item.menu.price) * parseInt(item.quantity)}
          </p>
          <div className="flex justify-evenly items-center">
            <h3 className="font-semibold ml-4">x {item.quantity}</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Merchant;

export const getServerSideProps = async ({ req }: { req: any }) => {
  const session = await getSession({ req });
  // console.log(session);
  if (!session) {
    return {
      redirect: {
        destination: "/merchant/signin",
        permanent: false,
      },
    };
  }
  return {
    props: { session },
  };
};
