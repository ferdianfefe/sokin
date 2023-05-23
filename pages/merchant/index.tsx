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
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { useRouter } from "next/router";

type CartContentProps = {
  name: String;
  imageURL: String;
  price: Number;
  quantity: Number;
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

  console.log(user);

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
      });
  }, []);

  const logoutHandler = () => {
    signOut();
  };

  return (
    <MerchantLayout location="home">
      <div className="p-8 h-full">
        <PopupOrder />
        <h1 className="font-bold text-black text-lg mb-3">Informasi Akun</h1>
        <div className="bg-[#FCBF86] w-full h-44 flex rounded-3xl px-2 py-6 mb-3 items-center justify-evenly text-[14px]">
          <div className="w-24">
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
                <div className="">
                  <p className="text-sm">Pemasukan</p>
                  <p className="font-semibold">Rp 200.000</p>
                </div>
              </div>
              <div className="rounded-xl bg-white w-[99px] h-12 pt-1 justify-center items-center text-center">
                <p className="text-sm">Total Transaksi</p>
                <p className="font-semibold">1237</p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-6">
          {/* <div className="rounded-full py-1 px-2 h-8 bg-[#FFE0C0] text-[#FE8304] mb-3 font-bold text-center shadow-md text shadow-[0_3px_3px_0.3px_rgb(400,100,0,0.4),inset_0_3px_7px_6px_rgb(500,500,500,0.3)] w-[45%] md:w-[25%]">
              Antrian Pesanan
            </div>
            <div className="mb-10 flex flex-col gap-4 mt-6">
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
            </div> */}
        </div>
        <div className="absolute justify-center w-[83%] bottom-24">
          <Button text="Tutup Toko" />
        </div>
      </div>
      {/* <div onClick={logoutHandler}>logout</div> */}
    </MerchantLayout>
  );
};

export default Merchant;

const ItemBox: React.FC = ({
  item,
  index,
}: {
  item: CartContentProps;
  index: number;
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
        <p className="font-bold mb-2">{item.name}</p>
        <div className="items-center flex justify-between">
          <p className="font-bold">Rp {item.menu.price * item.quantity}</p>
          <div className="flex justify-evenly items-center">
            <h3 className="font-semibold ml-4">x {item.quantity}</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

const PopupOrder: React.FC = () => {
  const router = useRouter();

  const [cartContent, setCartContent] = useState<CartContentProps[]>([]);
  const { data: session, status } = useSession();
  const user = session?.user;
  console.log(user);

  useEffect(() => {
    if (user) {
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
          console.log(data.menuItems);
          setCartContent(data.menuItems);
        });
    }
  }, [user]);
  return (
    <div className="fixed inset-0 flex flex-col justify-center items-center z-50 backdrop-blur-sm ">
      <div className="w-80 h-[354px] py-4 bg-white rounded-[12px] border-c-orange-300 border-[1px] shadow-lg">
        <div className="px-8 pb-3 flex items-center">
          <h1 className="font-bold text-3xl text-gray-600">X</h1>
          <h2 className="text-center text-[20px] font-extrabold ml-8">
            Orderan Masuk
          </h2>
        </div>
        <div className="w-full h-[1px] bg-c-orange-700"></div>
        <div className="flex flex-col px-8 gap-4">
          <div className="flex mt-3 justify-between items-center">
            <div>
              <h2 className="font-semibold">Pemesan</h2>
              <h2>Rachel Naragifta</h2>
            </div>
            <div className="flex rounded-full bg-[#FFF0E0] w-20 px-1 h-7 drop-shadow-lg items-center justify-center gap-2 drop-shadow-[#FE8304]/20">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.29096 1.51217C8.5488 0.829277 9.52137 0.829277 9.77921 1.51217L11.4426 6.15141C11.5589 6.45948 11.8554 6.66358 12.1867 6.66358H16.2739C17.0286 6.66358 17.3583 7.61045 16.7649 8.07356L13.8561 10.709C13.5883 10.918 13.4844 11.2733 13.5977 11.5923L14.6596 16.1259C14.9182 16.8534 14.0804 17.4793 13.4484 17.0308L9.49702 14.5073C9.22069 14.3113 8.84947 14.3113 8.57315 14.5073L4.62186 17.0308C3.98976 17.4793 3.152 16.8534 3.41053 16.1259L4.47245 11.5923C4.58582 11.2733 4.48188 10.918 4.21403 10.709L1.30529 8.07356C0.711831 7.61045 1.04156 6.66358 1.79628 6.66358H5.88346C6.21474 6.66358 6.51126 6.45948 6.62758 6.15141L8.29096 1.51217Z"
                    fill="#FE8304"
                    stroke="#FE8304"
                    stroke-width="0.803675"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>

                <h2>
                  <span className="font-black">98</span>
                </h2>
              </div>
          </div>
          {/* <div className="flex flex-col gap-2 font-medium">
            <div className="flex justify-between">
              <p>Paket Panas 1</p>
              <p>Rp40.000</p>
            </div>
            <div className="flex justify-between">
              <p>Ongkos Kirim</p>
              <p>Rp10.000</p>
            </div>
            <div className="flex justify-between">
              <p>Biaya Administrasi</p>
              <p>Rp2.500</p>
            </div> */}
              <ItemBox key={1} item={cartContent} index={1} />
            <div className="h-[1px] w-full bg-black/20"></div>
            <div className="flex justify-between font-semibold">
              <p>Total</p>
              <p>Rp52.500</p>
            </div>
          {/* </div> */}

          <div className="w-full flex gap-3">
            {/* <div className='w-1/2 flex' onClick={togglePopUp}> */}
          </div>
        </div>
      </div>
    </div>
  );
};

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
