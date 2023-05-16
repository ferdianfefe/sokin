import DefaultLayout from "components/layout/DefaultLayout";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import Input from "components/elements/Input";
import Button from "components/elements/Button";
import { useSession } from "next-auth/react";

const Topup: React.FC = (): JSX.Element => {
  const [isModalActive, setIsModalActive] = useState(false);
  const [isTransferPage, setIsTransferPage] = useState(false);
  const [nominal, setNominal] = useState(0);
  const [isTopupSuccess, setIsTopupSuccess] = useState(true);

  const { data: session, status } = useSession();
  const user = session?.user;

  const topUp = () => {
    // call top up api
    setIsTopupSuccess(true);

    // if success
    setIsTransferPage(false);
    setIsModalActive(false);

    fetch("/api/balance", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userId: user.id,
        amount: nominal,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };

  return (
    <DefaultLayout location="cart" className="">
      <div
        className={`bg-neutral-50 blur-sm fixed top-0 left-0 w-full h-full transition-all duration-300 z-9 ${
          isModalActive ? "block opacity-40" : "hidden opacity-0"
        }`}
        onClick={() => {
          setIsModalActive(false);
        }}
      ></div>
      <div
        className={`fixed ${
          isModalActive ? "bottom-0" : "-bottom-full"
        } z-10 h-[500px] w-screen bg-white shadow-xl shadow-neutral-900 rounded-t-3xl px-12 transition-all duration-300`}
      >
        {!isTransferPage ? (
          <div className="flex flex-col justify-between h-full pb-20">
            <div className="">
              <div className="w-20 h-2 bg-orange-300 rounded-xl mx-auto mt-2 mb-6"></div>
              <p className="text center font-semibold text-3xl text-center">
                Masukkan Nominal
              </p>
              <div className="mt-6">
                <Input
                  type="number"
                  className=""
                  onValueChangeHandler={(val: number) => {
                    setNominal(val);
                  }}
                  defaultValue={nominal === 0 ? "" : nominal.toString()}
                />
              </div>
            </div>
            <Button
              text="Menuju Pembayaran"
              className={`w-full ${nominal === 0 ? "!bg-neutral-700" : ""}`}
              onClickHandler={() => {
                setIsTransferPage(true);
              }}
              disabled={nominal === 0}
            />
          </div>
        ) : (
          <div className="flex flex-col justify-between h-full pb-20">
            <div className="">
              <div className="w-20 h-2 bg-orange-300 rounded-xl mx-auto mt-2 mb-6"></div>
              <p className="text center font-semibold text-3xl text-center">
                Menunggu Transfer
              </p>
              <div className="mt-6 mb-4">
                <Input
                  type="number"
                  className=""
                  text="Jumlah yang harus dibayar: "
                  defaultValue={nominal === 0 ? "" : nominal.toString()}
                />
              </div>
              <small>Silakan transfer ke rekening: </small>
              <div className="shadow-card px-6 py-2 rounded-lg flex">
                <Image
                  src={"/images/icons/paypal.svg"}
                  width={35}
                  height={35}
                  alt="Paypal"
                />
                <div className="ml-4">
                  <p className="text-c-orange-800 font-semibold">
                    123-456-789-0
                  </p>
                  <p className="text-sm text-neutral-700">
                    A/n Kadek Ninda Nandita Putri
                  </p>
                </div>
              </div>
            </div>
            <Button
              text="Saya sudah transfer"
              className="w-full"
              onClickHandler={() => {
                topUp();
              }}
            />
          </div>
        )}
      </div>
      <div className="px-6 min-h-screen">
        <div className="flex items-center mb-4  pt-6">
          <div className="h-6 w-6 relative">
            <Link href={"/pesan"}>
              <Image src="/images/icons/left-arrow.svg" alt="Left arrow" fill />
            </Link>
          </div>
          <h1 className="text-2xl font-semibold text-neutral-700 ml-4">
            Top up Soket
          </h1>
        </div>
        <div className="">
          <h1 className="text-3xl font-bold text-center mb-4">
            Pilih Jumlah Saldo
          </h1>
          <div className="flex justify-between items-center mb-2">
            <CoinButton
              icon="/images/icons/coin-1.svg"
              nominal={10000}
              isActive={false}
              onClickHandler={() => {
                setIsModalActive(true);
                setNominal(10000);
              }}
            />
            <CoinButton
              icon="/images/icons/coin-2.svg"
              nominal={25000}
              isActive={false}
              onClickHandler={() => {
                setIsModalActive(true);
                setNominal(25000);
              }}
            />
            <CoinButton
              icon="/images/icons/coin-3.svg"
              nominal={50000}
              isActive={false}
              onClickHandler={() => {
                setIsModalActive(true);
                setNominal(50000);
              }}
            />
          </div>
          <div className="flex justify-between items-center mb-6">
            <CoinButton
              icon="/images/icons/coin-4.svg"
              nominal={100000}
              isActive={false}
              onClickHandler={() => {
                setIsModalActive(true);
                setNominal(100000);
              }}
            />
            <CoinButton
              icon="/images/icons/coin-5.svg"
              nominal={250000}
              isActive={false}
              onClickHandler={() => {
                setIsModalActive(true);
                setNominal(250000);
              }}
            />
            <CoinButton
              icon="/images/icons/coin-6.svg"
              nominal={500000}
              isActive={false}
              onClickHandler={() => {
                setIsModalActive(true);
                setNominal(500000);
              }}
            />
          </div>
          <div
            className="bg-c-orange-200 rounded-3xl flex py-2 px-4 items-center justify-evenly"
            onClick={() => {
              setIsModalActive(true);
            }}
          >
            <div className="p-2 bg-c-orange-800 rounded-full w-8 h-8 flex justify-center items-center text-neutral-50 font-bold">
              +
            </div>
            <p className="text-c-orange-800 font-bold">
              Mau top up di luar nominal tersebut
            </p>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
};

const CoinButton: React.FC = ({
  icon,
  nominal,
  isActive,
  onClickHandler,
}: {
  icon: string;
  nominal: number;
  isActive?: boolean;
  onClickHandler?: () => void;
}): JSX.Element => {
  return (
    <div
      className="shadow-card p-6 pb-2 rounded-2xl"
      onClick={() => {
        onClickHandler && onClickHandler();
      }}
    >
      <div className="flex justify-center items-center mb-4">
        <Image src={icon} alt="Coin" width={50} height={50} />
      </div>
      <div className="text-center text-lg font-semibold">{nominal}</div>
    </div>
  );
};

export default Topup;
