import Image from "next/image";
import DefaultLayout from "components/layout/DefaultLayout";
import Button from "components/elements/Button";

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
    <div className="flex px-4 items-center justify-between">
      <div className="flex items-center">
        <p className="text-3xl font-bold text-[#FE860B]">#{orderNumber}</p>
        <div className="ml-4">
          <p className="text-lg font-bold">{customerName}</p>
          <div className="flex text-[#535353]">
            <p className="">{menuCount} Menu</p>
            <p>Rp {totalPrice}</p>
          </div>
        </div>
      </div>
      <div className="">{time}</div>
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
  return (
    <DefaultLayout>
      <div className="p-8 h-full">
        <h1 className="font-bold text-black text-lg mb-3">Informasi Akun</h1>
        <div className="bg-[#FCBF86] w-full flex rounded-3xl px-3 py-6 mb-3">
          <div className="w-[94px] h-[94px] relative ">
            <Image alt="preksu-logo" src={"/images/preksu.png"} fill></Image>
          </div>
          <div className="mx-2">
            <h1>Preksu: Ayam Geprek & Susu</h1>
            <div className="bg-white p-2 mb-2 flex rounded-xl">
              <div className="relative w-8 h-8">
                <Image
                  alt="wallet-icon"
                  src={"/images/icons/wallet.svg"}
                  fill
                ></Image>
              </div>
              <div className="ml-1">
                <p>Total Penjualan</p>
                <p>Rp 20.000.000</p>
              </div>
            </div>
            <div className="flex">
              <div className="bg-white flex flex-1 rounded-xl">
                <div className="relative w-8 h-8">
                  <Image
                    alt="wallet-icon"
                    src={"/images/icons/up-arrow.svg"}
                    fill
                  ></Image>
                </div>
                <div className="">
                  <p>Pemasukan</p>
                  <p>Rp. 200.000,-</p>
                </div>
              </div>
              <div className="bg-white flex ml-1 flex-1 rounded-xl">
                <div className="">
                  <p>Total Transaksi</p>
                  <p>Rp. 1237</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="">
          <div className="rounded-lg p-2 bg-[#FFE0C0] text-[#FE8304] mb-3">
            Antrian Pesanan
          </div>
          <div className="mb-10">
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
        <div className="w-full flex justify-center">
          <Button text="Tutup Toko" />
        </div>
      </div>
    </DefaultLayout>
  );
};

export default Merchant;
