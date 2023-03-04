import Image from "next/image";
import MerchantLayout from "components/layout/MerchantLayout";
import Button from "components/elements/Button";
import Navbar from "components/elements/Navbar";

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
        <svg className='flex md:mr-2 md:my-auto' width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M7.992 0C3.576 0 0 3.584 0 8C0 12.416 3.576 16 7.992 16C12.416 16 16 12.416 16 8C16 3.584 12.416 0 7.992 0ZM8 14.4C4.464 14.4 1.6 11.536 1.6 8C1.6 4.464 4.464 1.6 8 1.6C11.536 1.6 14.4 4.464 14.4 8C14.4 11.536 11.536 14.4 8 14.4Z" fill="white"/>
          <path d="M8.4002 4H7.2002V8.8L11.4002 11.32L12.0002 10.336L8.4002 8.2V4Z" fill="white"/>
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
  return (
    <MerchantLayout location="home">
      <div className="p-8 h-full">
        <h1 className="font-bold text-black text-lg mb-3">Informasi Akun</h1>
        <div className="bg-[#FCBF86] w-full flex rounded-3xl px-3 py-6 mb-3 items-center justify-evenly">
          <div className="">
            <Image alt="preksu-logo" src={"/images/preksu.png"} width={94} height={94}></Image>
          </div>
          <div className="mx-2">
            <h1 className="font-semibold">Preksu: Ayam Geprek & Susu</h1>
            <div className="bg-white p-2 mb-2 flex rounded-xl">
              <div className="relative w-8 h-8 mr-4">
                <Image
                  alt="wallet-icon"
                  src={"/images/icons/wallet.svg"}
                  fill
                ></Image>
              </div>
              <div className="ml-1">
                <p className="">Total Penjualan</p>
                <p className="font-semibold">Rp 20.000.000</p>
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
                  <p className="font-semibold">Rp. 200.000,-</p>
                </div>
              </div>
              <div className="bg-white flex ml-1 flex-1 rounded-xl">
                <div className="flex flex-col justify-center items-center text-sm">
                  <p>Total Transaksi</p>
                  <p className="font-semibold">1237</p>
                </div>
                <div className="flex justify-between gap-2 items-center h-full">
                  <div className="flex rounded-xl bg-white w-full px-4 py-2 gap-4">
                    <div className="flex relative w-7 h-7  my-auto mx-0">
                      <Image
                        alt="up-arrow"
                        src={"/images/icons/up-arrow.svg"}
                        fill
                      ></Image>
                    </div>
                    <div className="flex flex-col text-sm">
                      <p className="">Pemasukan</p>
                      <p className="font-extrabold">Rp200.000,-</p>
                    </div>
                  </div>
                  <div className="flex rounded-xl bg-white w-full px-4 py-2 justify-center">
                    <div className="text-center text-sm  flex flex-col">
                      <p>Total Transaksi</p>
                      <p className="font-extrabold">Rp1237</p>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>

          {/* <div className="bg-[#FCBF86] flex rounded-3xl p-5 mb-3 justify-between w-full">
            <div className="hidden md:visible relative md:flex flex-1 object-cover bg-slate-200">
              <Image className="w-full h-full shrink-0" alt="preksu-logo" src={"/images/preksu.png"} width={300} height={300}></Image>
            </div>

            <div className="mx-2 text-xs items-center flex flex-grow flex-2 justify-around">
              <div className="flex flex-col">
                <span className="text-sm font-extrabold flex">
                  <h1>Preksu: Ayam Geprek & Susu</h1>
                </span>

                <div className="bg-white my-2 p-2 px-3 flex rounded-xl items-center gap-2">
                  <div className="relative w-5 h-5">
                    <Image
                      alt="wallet-icon"
                      src={"/images/icons/wallet.svg"}
                      fill
                    ></Image>
                  </div>
                  <div className="ml-1">
                    <p className="font-bold">Total Penjualan</p>
                    <p className="font-black">Rp 20.000.000</p>
                  </div>
                </div>

                <div className="flex">
                  <div className="bg-white flex flex-1 rounded-xl items-center p-2 px-3 gap-2 w-1/2">
                    <div className="flex relative w-5 h-5">
                      <Image
                        alt="up-arrow"
                        src={"/images/icons/up-arrow.svg"}
                        fill
                      ></Image>
                    </div>
                    <div className="flex flex-col">
                      <p className="text-[10px]">Pemasukan</p>
                      <p className="font-extrabold">Rp. 200.000,-</p>
                    </div>
                  </div>
                  <div className="bg-white flex ml-1 flex-1 rounded-xl items-center justify-center">
                    <div className="text-center">
                      <p>Total Transaksi</p>
                      <p className="font-extrabold">Rp. 1237</p>
                    </div>
                  </div>
              </div>


              </div>


            </div>
          </div> */}
          <div className="mt-6">
            <div className="md:text-base rounded-full py-2 px-3 bg-[#FFE0C0] text-[#FE8304] mb-3 text-xs font-semibold text-center shadow-md shadow-[#FE8304]/50 w-[45%] md:w-[25%]">
              Antrian Pesanan
            </div>
            <div className="mb-10 flex flex-col gap-4">
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
        <div className="w-full fixed bottom-0">
          <Navbar 
            role="merchant"
          />

        </div>
      
    </div>
  );
};

export default Merchant;
