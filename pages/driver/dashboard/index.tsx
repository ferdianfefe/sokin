import Button from "components/elements/Button";
import Navbar from "components/elements/Navbar";
import Input from "components/elements/Input";
import TargetBar from "public/images/driver/dashboard/target-bar-driver.png";
import Vector from "public/images/driver/dashboard/vector-pesanan.png";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import DriverLayout from "components/layout/DriverLayout";
import { useRouter } from "next/router";
import { getSession, useSession, signOut } from "next-auth/react";
import MapContainer from "components/elements/MapContainer";
import TargetHarianProgressBar from "components/elements/TargetHarianProgressBar";

const DriverDashboard = () => {
  const [showPopUp, setShowPopup] = useState(false);
  const [Reservation, setReservation] = useState(false);
  const [reservationData, setReservationData] = useState(null);
  const [keyword, setKeyword] = useState("");
  const router = useRouter();
  const [isActive, setIsActive] = useState(false);
  const { data: session, status } = useSession();
  const driver = session?.user;
  console.log(driver);

  useEffect(() => {
    fetch(`/api/profile/driver?id=${driver.id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      }
    })
      .then((res) => {
        console.log(res);
        return res.json();
      })
      .then((data) => {
        console.log(data);
      });
  }, []);

  useEffect(() => {
    fetch("/api/getOrder", {
      method: "POST",
      headers:{
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        driverId: driver.id,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.status === "success") {
          setReservation(true);
          setReservationData(data.data);
        }
      });
  }, []);

  const toggleSwitch = () => {
    setIsActive(!isActive);
  };

  const togglePopup = () => {
    setShowPopup(!showPopUp);
  };

  const toggleReservation = () => {
    setReservation(!Reservation);
  };


  const logout = async () => {
    const status = await signOut();
    console.log(status);
  }

  // const { data: session, status } = useSession();
  // const user = session?.user;
  // console.log(session?.user)
  // const [name, setName] = useState<string>("");
  // const [vehicle, setVehicle] = useState<string>("");
  // const [balance, setBalance] = useState<Float32Array>();
  // const [licence, setLicenceNumber] = useState<string>('');
  // const [isActive, setIsActive] = useState<boolean>(false);
  // const [dailyTarget, setDailyTarget] = useState<number>(0);
  const [coordinates, setCoordinates] = useState<number[]>([0, 0]);

  // useEffect(() => {
  //   fetch("/api/profile/merchant/driverInfo", {
  //     method: "POST",
  //     body: JSON.stringify({
  //       id: user?.id,
  //     }),
  //   }).then((res) => res.json()).then((data) => {
  //     console.log(data);
  //     // setLogo(data.merchantLogo);
  //     setName(data.name);
  //     setVehicle(data.vehicle);
  //     setBalance(data.balance);
  //     setLicenceNumber(data.licence);
  //     setIsActive(data.isActive);
  //     setDailyTarget(data.dailyTarget);
  //   });
  // }, []);

  const logoutHandler = () => {
    signOut();
  }


  const handleInputChange = (event) => {
    setKeyword(event.target.value);
  };

  return (
    <DriverLayout location="home" setReservationdata={setReservationData}>
      <div className="p-0 m-0">
        {showPopUp && (
          <PopUpDriver
            togglePopup={togglePopup}
            toggleReservation={toggleReservation}
          />
        )}

        <div className="flex w-full h-20 bg-dashboard-driver justify-evenly items-center mt-8">
          <Image
            src={`/images/regis/Person.svg`}
            width={52}
            height={52}
            alt="profile picture"
            className="bg-white rounded-full h-[52px] w-[52px]"
          />
          <div>
            <h2 className="font-extrabold">{driver?.name}</h2>
            <p className="font-semibold text-sm">{driver.phoneNumber}</p>
          </div>
          <div className="bg-white rounded-lg p-1 w-[15%] h-[42px] flex-col justify-center items-center ml-2">
            <div className="flex justify-center">
              <Image
                src="/images/driver/Star.svg"
                width={11}
                height={11}
                alt="star"
              />
              <p className="text-xs ml-1">Rating</p>
            </div>
            <h3 className="font-semibold text-center">4.7</h3>
          </div>
          <div className="bg-white rounded-lg p-1 w-[25%] h-[42px] flex-col justify-center items-center">
            <div className="flex justify-center">
              <Image
                src="/images/driver/Histogram.svg"
                width={11}
                height={11}
                alt="star"
              />
              <p className="text-xs ml-1">Target Harian</p>
            </div>
            <h3 className="font-semibold text-center">{driver.dailyTarget}%</h3>
          </div>
        </div>

        <div className="flex justify-evenly mt-3 border-b-orange-500 border-[1px] pb-3">
          <div className="py-[6px] bg-orange-500 h-14 w-[30%] text-white rounded-[21px] shadow-[-2px_2px_5px_0.1px_rgb(120,30,0,0.7),inset_0_0px_6px_6px_rgb(0,0,0,0.1)]">
            <div className="flex justify-center">
              <Image
                src="/images/driver/Socket.svg"
                width={18}
                height={14}
                alt="star"
              />
              <p className="text-xs ml-2">Saldomu</p>
            </div>
            <h3 className="text-sm mt-1 text-center font-semibold">
              {driver.balance}
            </h3>
          </div>
          <div className="py-[6px] bg-orange-500 h-14 w-[30%] text-white rounded-[21px] shadow-[-2px_2px_5px_0.1px_rgb(120,30,0,0.7),inset_0_0px_6px_6px_rgb(0,0,0,0.1)]">
            <div className="flex justify-center">
              <Image
                src="/images/driver/Kendaraan.svg"
                width={18}
                height={14}
                alt="star"
              />
              <p className="text-xs ml-2">Kendaraan</p>
            </div>
            <h3 className="text-sm mt-1 text-center font-semibold">
              {driver.vehicle}
            </h3>
          </div>
          <div className="py-[6px] bg-orange-500 h-14 w-[30%] text-white rounded-[21px] shadow-[-2px_2px_5px_0.1px_rgb(120,30,0,0.7),inset_0_0px_6px_6px_rgb(0,0,0,0.1)]">
            <div className="flex justify-center">
              <Image
                src="/images/driver/Plat.svg"
                width={20}
                height={14}
                alt="star"
              />
              <p className="text-xs ml-1">Plat Nomor</p>
            </div>
            <h3 className="text-sm mt-1 text-center font-semibold">
              {driver.licenseNumber}
            </h3>
          </div>
        </div>

        <div className="flex flex-col border-b-[1px] border-[#FE8304] py-5 px-8">
          {isActive && (
            <div onClick={togglePopup}>
              <button className="justify-center hover:scale-105 transition-all w-36 text-sm bg-[#FE8304]/70 text-white mx-2 my-4 rounded-full ">
                Dummy Trigger PopUp
              </button>
            </div>
          )}

          <div className="justify-end flex">
            {isActive === true ? (
              <div
                className={`'bg-white h-[25px] w-[120px] border-2 rounded-full border-[#E4A76F] text-[#20CB50] font-extrabold drop-shadow-md flex justify-center items-center'`}
                onClick={toggleSwitch}
              >
                Aktif
              </div>
            ) : (
              <div
                className={`'bg-white h-[25px] w-[120px] border-2 rounded-full border-[#E4A76F] text-[#FD1212] font-extrabold drop-shadow-md flex justify-center items-center'`}
                onClick={toggleSwitch}
              >
                Tidak Aktif
              </div>
            )}
          </div>

          <h2>
            <span className="font-bold text-xl">Target Harian</span>
          </h2>
          <p>
            <span className="text-[#818181] text-sm">
              Berdasarkan banyak jumlah pesanan
            </span>
          </p>

          <div className="mt-4 w-full px-4 h-[72px]">
            <TargetHarianProgressBar
              percent={driver.dailyTarget}
            />
          </div>


        </div>

        <div className="py-8 flex flex-col px-6 gap-6">
          {isActive && (
            <div className="mb-12">
              <div className="flex flex-col">
                <h2>
                  <span className="font-bold text-xl">Reservasi Order</span>
                </h2>
                <p>
                  <span className="text-[#818181] text-sm">
                    Sedang Berlangsung
                  </span>
                </p>
              </div>

              {Reservation === false ? (
                <div className="justify-center px-2 flex flex-col">
                  <Image className="mt-5 mx-auto" src={Vector} alt=""></Image>
                  <p className="justify-center flex mt-5">
                    <span className="text-[#818181] font-medium text-md">
                      Saat ini belum ada orderan yang masuk
                    </span>
                  </p>
                </div>
              ) : (
                <OrderReservation reservationData={reservationData}/>
              )}
            </div>
          )}
          <div className="flex justify-between">
            <div className="flex gap-2">
              <svg
                className="flex"
                width="35"
                height="52"
                viewBox="0 0 27 42"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.5 0C6.03643 0 0 6.4676 0 14.4643C0 25.3125 13.5 41.3265 13.5 41.3265C13.5 41.3265 27 25.3125 27 14.4643C27 6.4676 20.9636 0 13.5 0ZM13.5 19.6301C10.8386 19.6301 8.67857 17.3158 8.67857 14.4643C8.67857 11.6128 10.8386 9.29847 13.5 9.29847C16.1614 9.29847 18.3214 11.6128 18.3214 14.4643C18.3214 17.3158 16.1614 19.6301 13.5 19.6301Z"
                  fill="#FE8304"
                />
              </svg>
              <div className="flex flex-col">
                <h2>
                  <span className="ml-2 text-lg">Lokasi Saat Ini</span>
                </h2>
                <h2>
                  <span className="ml-2 text-xl font-black">Tempo Gelato</span>
                </h2>
              </div>
            </div>

            <div className="flex">
              <button
                type="submit"
                className={`drop-shadow-lg bg-white h-[25px] w-[90px] border-[1px] rounded-full border-[#E4A76F] text-xs font-bold  flex justify-center items-center`}
              >
                Atur Lokasi
              </button>
            </div>
          </div>

          <div className="w-full h-auto  relative flex justify-center">
            <input
              type="text"
              placeholder="Cari lokasi"
              className="pl-10 font-semibold focus:ring-0 rounded-full w-full h-[35px] bg-white border-[1px] border-[#FE8304] drop-shadow-lg"
              value={keyword}
              onChange={handleInputChange}
            />
            {/* <SearchBar
                  
                  text="Cari lokasi"
                  onValueChangeHandler={(value: any) => setKeyword(value)}
            /> */}

            <svg
              className="absolute left-5 top-2 "
              width="13"
              height="19"
              viewBox="0 0 13 19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.83192 0.324707C3.534 0.324707 0.866699 3.1992 0.866699 6.75328C0.866699 11.5747 6.83192 18.6921 6.83192 18.6921C6.83192 18.6921 12.7971 11.5747 12.7971 6.75328C12.7971 3.1992 10.1298 0.324707 6.83192 0.324707ZM6.83192 9.0492C5.65592 9.0492 4.70148 8.02063 4.70148 6.75328C4.70148 5.48593 5.65592 4.45736 6.83192 4.45736C8.00792 4.45736 8.96235 5.48593 8.96235 6.75328C8.96235 8.02063 8.00792 9.0492 6.83192 9.0492Z"
                fill="#FE8304"
              />
            </svg>

            <svg
              className="absolute right-3 top-2"
              width="21"
              height="21"
              viewBox="0 0 21 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19 19L14.9865 14.9795M17.2105 9.60526C17.2105 13.8055 13.8055 17.2105 9.60526 17.2105C5.40499 17.2105 2 13.8055 2 9.60526C2 5.40499 5.40499 2 9.60526 2C13.8055 2 17.2105 5.40499 17.2105 9.60526Z"
                stroke="#B15A00"
                stroke-width="4"
                stroke-linecap="round"
              />
            </svg>
          </div>
          <div className="flex w-[95%] h-full overflow-hidden bg-slate-200 rounded-[15px] mx-auto">
        <MapContainer keywordProp={keyword} />
      </div>

          <Button
            text="Berhenti Sementara"
            onClickHandler={setIsActive}
          />
          {/* {isActive === true ? (
            <div onClick={toggleSwitch}>
              <Button type="primary" text="Selesai Bekerja" />
            </div>
          ) : (
            <div onClick={toggleSwitch}>
              <Button type="primary" text="Mulai Bekerja" />
            </div>
          )} */}
        </div>
      </div>
      {/* <div onClick={logoutHandler}>logout</div> */}
    </DriverLayout>
  );
};

const PopUpDriver = ({
  togglePopup,
  toggleReservation,
}: {
  togglePopup: () => void;
  toggleReservation: () => void;
}) => {
  return (
    <div className="fixed inset-0 flex flex-col justify-center items-center z-50 backdrop-blur-sm ">
      <div className="bg-[#fff] py-10 rounded-[12px] border-[#FE8304]/20 border-[1px] shadow-lg mx-6">
        <div className="justify-center flex">
          <h2>
            <span className="text-center text-[20px] font-extrabold">
              Orderan Masuk
            </span>
          </h2>
        </div>

        <div className="border-y-[#FE8304] border-x-[#FFFFFF] border-[1px] py-4 px-8 my-4">
          <div className="flex flex-col gap-6">
            <div className="flex justify-between">
              <div className="flex flex-col">
                <h3>
                  <span className="font-extrabold">Pemesan</span>
                </h3>
                <p>
                  <span className="font-semibold">Muhammad Irfan</span>
                </p>
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

            {/* source and destination */}
            <div className="flex flex-col gap-12 relative">
              <div className="top-8 left-[10px] absolute w-0 h-[70px]  border-dashed border-[#FE8304] border-[2px]"></div>
              {/* source */}
              <div className="flex justify-center items-center">
                <svg
                  width="25"
                  height="25"
                  viewBox="0 0 23 23"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <ellipse
                    cx="11.4996"
                    cy="11.5"
                    rx="11.4996"
                    ry="11.5"
                    fill="#FE8304"
                  />
                  <ellipse
                    cx="11.4516"
                    cy="11.4521"
                    rx="6.36225"
                    ry="6.36246"
                    fill="white"
                  />
                </svg>

                <div className="flex flex-col w-full ml-4">
                  <p>
                    <span className="text-[#464545]">Lokasi Pengambilan</span>
                  </p>
                  <h2>
                    <span className="font-extrabold">
                      McDonalds cabang Kaliurang
                    </span>
                  </h2>
                </div>
              </div>

              {/* tujuan */}
              <div className="flex justify-center items-center">
                <svg
                  width="25"
                  height="35"
                  viewBox="0 0 19 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.5 0C4.24786 0 0 4.55128 0 10.1786C0 17.8125 9.5 29.0816 9.5 29.0816C9.5 29.0816 19 17.8125 19 10.1786C19 4.55128 14.7521 0 9.5 0ZM9.5 13.8138C7.62714 13.8138 6.10714 12.1852 6.10714 10.1786C6.10714 8.17194 7.62714 6.54337 9.5 6.54337C11.3729 6.54337 12.8929 8.17194 12.8929 10.1786C12.8929 12.1852 11.3729 13.8138 9.5 13.8138Z"
                    fill="#FE8304"
                  />
                </svg>

                <div className="flex flex-col w-full ml-4">
                  <p>
                    <span className="text-[#464545]">Lokasi Pengantaran</span>
                  </p>
                  <h2>
                    <span className="font-extrabold">Jl. Sendowo no. 120</span>
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col px-8 gap-4">
          <div className="flex">
            <h2>
              <span className="font-extrabold">Pesanan</span>
            </h2>
          </div>
          <div className="flex flex-col gap-2 font-medium">
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
            </div>

            <div className="h-[1px] w-full bg-black/20"></div>
            <div className="flex justify-between font-semibold">
              <p>Total</p>
              <p>Rp52.500</p>
            </div>
          </div>

          <div className="w-full flex gap-3">
            {/* <div className='w-1/2 flex' onClick={togglePopUp}> */}
            <div className="w-1/2 flex" onClick={togglePopup}>
              <Button type="red" text="Tolak" href="/driver/dashboard" />
            </div>

            <div
              className="flex w-1/2 bg-slate-100"
              onClick={() => {
                togglePopup();
                toggleReservation();
              }}
            >
              <Button type="green" text="Terima" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// const [value, setValue] = useState("");
type PropsSearch = {
  onValueChangeHandler?: Function;
  defaultValue?: string;
}

// const SearchBar: React.FC<PropsSearch> =({
//     onValueChangeHandler,
//     defaultValue='',
//   }: PropsSearch) =>{

//   useEffect(() => {
//     setValue(defaultValue);
//   }, []);

//   const onChangeHandler = (e: any) => {
//     setValue(e.target.value);
//     if (onValueChangeHandler) {
//       onValueChangeHandler(e.target.value);
//     }

//     return(
//       <div
//         className={`drop-shadow-lg bg-white h-[25px] w-[90px] border-[1px] rounded-full border-[#E4A76F] text-xs font-bold  flex justify-center items-center`}
//         value={value}
//         onChange={onChangeHandler}
//        >

//       </div>
//     )
// }

const OrderReservation = () => {
  return (
    <>
      <div className="w-full h-60 border-[1px] border-c-orange-200 rounded-2xl mt-3">
        <div className="flex justify-between py-2 px-4 items-center">
          <div className="">
            <p>Pemesan</p>
            <p className="font-extrabold">Muhammad Irfan</p>
          </div>
          <div className="flex rounded-full bg-[#FFF0E0] w-16 px-1 h-7 drop-shadow-lg items-center justify-center gap-2 drop-shadow-[#FE8304]/20">
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
          <div className="text-sm text-right">
            <p className="font-extrabold">Rp47.500</p>
            <p className="">Soket</p>
          </div>
        </div>
        <div className="w-full h-[1px] bg-c-orange-700"></div>
        <div className="py-3 flex px-4 text-sm justify-between">
          <div className="flex">
            <Image
              src="/Images/driver/dashboard/Destination.svg"
              width={26}
              height={77}
              alt=""
              className="mr-2 mt-1"
            />
            <div>
              <p>Pengambilan pesanan</p>
              <h3 className="font-extrabold">McDonalds cabang Kaliurang</h3>
              <p className="mt-5">Tujuan akhir</p>
              <h3 className="font-extrabold">JL.Sendowo no. 120</h3>
            </div>
          </div>
          <div className="text-right">
            <p className="font-bold">Estimasi</p>
            <h3 className="font-bold text-gray-500">8:45</h3>
            <h3 className="mt-9 font-bold text-gray-500">9:32</h3>
          </div>
        </div>
        <div className="justify-center flex mt-1">
          <Button text="Detail" size="small" className="w-1/3" />
        </div>
      </div>
    </>
  );
};

export default DriverDashboard;

export const getServerSideProps = async ({ req }: { req: any }) => {
  const session = await getSession({ req });
  // console.log(session);
  if (!session) {
    return {
      redirect: {
        destination: "/driver/signin",
        permanent: false,
      },
    };
  }
  return {
    props: { session },
  }
}
