import Image from "next/image";
import Search from "public/img/homepage/icon-search.png";
import Button from "components/elements/Button";
import Navbar from "components/elements/Navbar";
// import BackgroundLoginDaftar from "public/img/homepage/bg-login-daftar.png";
import { signIn, signOut, useSession } from "next-auth/react";
import HorizontalCardCarousel from "components/homepage-1/HorizontalCardCarousel";
import VerticalCardCarousel from "components/homepage-1/VerticalCardCarousel";
import SquareCardCarousel from "components/homepage-1/SquareCardCarousel";
import { Router, useRouter } from "next/router";
import DefaultLayout from "components/layout/DefaultLayout";
import { useState, useEffect } from "react";
import { io } from "socket.io-client";

const Homepage: React.FunctionComponent = (): JSX.Element => {
  const [keyword, setKeyword] = useState("");
  // const session = useSession();
  // const user = session?.user;
  const [searchResult, setSearchResult] = useState([]);
  const [reservationData, setReservationData] = useState({user: {name: ""}, source: "tes", destination: "", createdAt: ""});
  const [similar, setSimilar] = useState([]);
  const { data, status } = useSession();
  const [profile, setProfile] = useState({balance: 0, creditScore: 0});
  const [isLoading, setIsLoading] = useState(true);
  const [order, setOrder] = useState(false);

  // console.log(data?.user.role);

  const router = useRouter();

  if (data && data?.user.role != "user") {
    signOut().then(() => {
      router.push("/signin");
    })
  }

  useEffect(() => {
    setIsLoading(true);
    fetch(`/api/profile/user/userProfile`, {
      method: "POST",
      body: JSON.stringify({id: (data) ? data?.user?.id : ''})
    }).then(res => res.json()).then(data => {
      // console.log(data);
      setProfile(data);
      setIsLoading(false);
    })
  }, [])

  useEffect(() => {
    console.log('tes',data?.user.id);
    fetch(`/api/order/getOrderHome`, {
      method: "POST",
      body: JSON.stringify({userId: data?.user?.id})
    }).then(res => res.json()).then(data => {
      // console.log(data);
      let newArray = data.filter(function(item:any){
        return item.status == "RECEIVED" || item.status == "PROCESSING" || item.status == "DELIVERY";
        // return true;
      });
      if (newArray.length > 0) {
        setReservationData(newArray[0]);
        setOrder(true);
      }
    })
  }, [])

  useEffect(() => {
    const socket = io();
    socket.on("newOrder", (data) => {
      setReservationData(data);
      setOrder(true);
    });
    socket.on("updateOrder", (data) => {
      setReservationData(data);
    });
    socket.on("updateOrderDriver", (data) => {
      setReservationData(data);
    });
  }, []);

  const logout = async () => {
    const res = await signOut();
    console.log(res);
  };

  const change = (e: any) => {
    setKeyword(e.target.value);
    // console.log(keyword);
  }

  const search = async (e: any) => {
    if (e.key === "Enter" || e === "Enter") {
      // setFixKeyword(keyword);
      // Router.push(`/search?keyword=${keyword}`);
      console.log(keyword);
      e.target.value = "";
      setKeyword("");
      await fetch(`/api/search`, {
        method: "POST",
        body: JSON.stringify({keyword: keyword})
      }).then(res => res.json()).then(data => {
        console.log(data.data);
        setSearchResult(data.data);
        setSimilar(data.data2);
      })
    }
  }

  return (
    <DefaultLayout location="home" isLoading={isLoading}>
      <div className="flex flex-col w-full h-full overflow-y-scroll min-h-screen">
        <div className="mt-7 flex flex-col gap-4">
          {/* SEARCH BAR */}
          <div className="px-7">
            {/* <SearchBar /> */}
            <div className="relative flex">
              {/* ICON */}
              <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                <Image src={Search} alt={""} />
              </span>
              <input
                placeholder="Cari makananmu"
                type="text"
                className="bg-[#FE8304] rounded-full bg-opacity-40 w-full py-[6px] px-14 font-bold text-sm placeholder-[#817A7A] bg-auto focus:outline-none"
                onChange={change}
                onKeyDown={search}
              ></input>
            </div>
          </div>

          {status == "unauthenticated" && (
            <div className="px-5">
              <div className="bg-slate-200 rounded-[30px] w-full flex py-8 px-8 justify-center items-center gap-6 relative overflow-hidden">
                <Image
                  src="public/img/homepage/bg-login-daftar.svg"
                  alt=""
                  className="absolute object-cover w-full h-full z-0"
                  quality={100}
                  width={100}
                  height={100}
                />

                <div className="z-20 px-auto">
                  <Button
                    text="Login"
                    type="secondary"
                    size="small"
                    href="/signin"
                  ></Button>
                </div>

                <div className="z-20">
                  <Button
                    text="Daftar"
                    type="secondary"
                    size="small"
                    href="/signup"
                  ></Button>
                </div>
              </div>
            </div>
          )}
          {(status == "authenticated" && searchResult.length == 0) && (
            <div className="px-5">
              <div className=" rounded-[30px] w-full flex py-3 px-auto justify-center items-center gap-6 relative overflow-hidden">
                <Image
                priority
                  src="/img/homepage/bg-login-daftar.svg"
                  alt=""
                  width={100}
                  height={100}
                  className="absolute object-cover w-full h-full z-0 pointer-events-none"
                />

                <div className="z-20 px-auto flex flex-col gap-1 justify-start">
                  <div className="h-full  w-full">
                    <h1>
                      <span className="font-black text-2xl">
                        {data.user.name}
                      </span>
                    </h1>
                    <div className="flex relative w-full shadow-[ -3px 4px 4px rgba(19, 15, 15, 0.3)]">
                      <button className="bg-[#FFE0C0] rounded-full text-[9px] font-medium text-[#FE8304] px-2 pr-7 drop-shadow-lg shadow-[#FEB26] shadow-inner-white shadow-inner-xl">
                        Lengkapi Profilmu!
                      </button>
                      <div className="absolute right-5 top-[1px]">
                        <svg
                          className=""
                          width="13"
                          height="13"
                          viewBox="0 0 13 13"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <circle
                            cx="6.5"
                            cy="6.5"
                            r="6.36458"
                            fill="#FE8304"
                            stroke="#FE8304"
                            stroke-width="0.270833"
                          />
                          <path
                            d="M3.94271 7.81365L8.00741 3.74894C8.33933 3.41702 8.87748 3.41702 9.2094 3.74894C9.54129 4.08086 9.54129 4.619 9.2094 4.95092L5.14469 9.01561C5.05196 9.10834 4.93385 9.17158 4.80526 9.19728L3.5 9.45833L3.76105 8.15308C3.78677 8.02448 3.84998 7.90638 3.94271 7.81365Z"
                            fill="#FE8304"
                            stroke="white"
                            stroke-width="0.664251"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M3.99805 7.96387L4.99442 8.96024Z"
                            fill="#FE8304"
                          />
                          <path
                            d="M3.99805 7.96387L4.99442 8.96024"
                            stroke="white"
                            stroke-width="0.664251"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M7.31934 4.64246L8.31571 5.63883Z"
                            fill="#FE8304"
                          />
                          <path
                            d="M7.31934 4.64246L8.31571 5.63883"
                            stroke="white"
                            stroke-width="0.664251"
                          />
                        </svg>
                      </div>
                    </div>

                    <div className="flex h-22 w-auto gap-1 items-center bg-white rounded-full px-2 py-[2px] mt-2">
                      <svg
                        className="flex"
                        width="16"
                        height="15"
                        viewBox="0 0 16 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M7.35173 1.41357C7.57636 0.862141 8.42364 0.862141 8.64827 1.41358L10.0973 5.15976C10.1987 5.40852 10.457 5.57333 10.7456 5.57333H14.3063C14.9638 5.57333 15.251 6.33793 14.7341 6.7119L12.2 8.84C11.9667 9.00876 11.8761 9.2957 11.9749 9.55331L12.9 13.2141C13.1253 13.8016 12.3954 14.307 11.8448 13.9449L8.40243 11.9071C8.1617 11.7488 7.8383 11.7488 7.59757 11.9071L4.15529 13.9449C3.60462 14.307 2.87478 13.8016 3.1 13.2141L4.02513 9.55331C4.12389 9.2957 4.03334 9.00876 3.8 8.84L1.26596 6.7119C0.748953 6.33793 1.03621 5.57333 1.6937 5.57333H5.25437C5.54297 5.57333 5.80129 5.40852 5.90263 5.15976L7.35173 1.41357Z"
                          fill="#FE8304"
                          stroke="#FE8304"
                          stroke-width="0.438282"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>

                      <h3 className="text-sm font-bold ">
                        Skor Kredit: <span className="font-black">{profile.creditScore}</span>
                      </h3>
                    </div>
                  </div>
                </div>

                <div className="z-20 px-auto flex flex-col justify-start">
                  <div className="h-full bg-white w-auto rounded-[17px] p-3 flex-col flex gap-0 items-center justify-center drop-shadow-[0px 1.7391px 3.4782px rgba(0, 0, 0, 0.25)]">
                    <div className="flex gap-1 items-center">
                      <svg
                        width="19"
                        height="14"
                        viewBox="0 0 19 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1 2.56799C1 1.70201 1.76216 1 2.70234 1H16.3211C17.2613 1 18.0234 1.70201 18.0234 2.56799V7.27197V11.9759C18.0234 12.8419 17.2613 13.5439 16.3211 13.5439H2.70234C1.76216 13.5439 1 12.8419 1 11.9759V7.27197V2.56799Z"
                          fill="#FE8304"
                          stroke="white"
                          stroke-width="0.718172"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path d="M1 4.13599H18.0234H1Z" fill="#FE8304" />
                        <path
                          d="M1 4.13599H18.0234"
                          stroke="white"
                          stroke-width="0.718172"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M1 7.27209H6.9582C6.9582 8.05609 7.46891 9.62408 9.51172 9.62408C11.5545 9.62408 12.0652 8.05609 12.0652 7.27209H18.0234"
                          fill="#FE8304"
                        />
                        <path
                          d="M1 7.27209H6.9582C6.9582 8.05609 7.46891 9.62408 9.51172 9.62408C11.5545 9.62408 12.0652 8.05609 12.0652 7.27209H18.0234"
                          stroke="white"
                          stroke-width="0.718172"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                      <h3 className="font-extrabold text-base">Soket</h3>
                    </div>
                    <h2 className="font-black text-xl">Rp{profile.balance}</h2>
                    <p className="text-center text-sm">
                      Lihat Riwayat Transaksi
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
          {(order && status == 'authenticated') && (
            <div className="px-5">
              <h2 className="text-xl font-bold">Reservasi Order</h2>
              <p className="font-semibold text-gray-400 text-sm">Sedang berlangsung</p>
              <OrderReservation reservationData={reservationData} />
            </div>
          )}

          {searchResult.length == 0 && (
            <>
              <div className="mt-4 w-full h-full flex flex-col gap-3 px-7">
                <div className="flex justify-between">
                  <h2 className="font-bold">Penawaran Kami</h2>

                  <div className="flex relative">
                    <button className="bg-[#FFE0C0] rounded-full text-[9px] font-bold text-[#FE8304] px-2 pr-5 drop-shadow-lg shadow-[#FEB26] shadow-inner-white shadow-inner-xl">
                      Lihat semuanya
                    </button>
                    <svg
                      className="absolute top-[7px] right-2 items-center align-center"
                      width="5"
                      height="9"
                      viewBox="0 0 5 9"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1.16211 8.10828L4.05877 4.64876L1.16211 1.18925"
                        stroke="#FE8304"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </div>
                </div>

                {/* <div className='overflow-visible'>
                                <SwiperCarousel />

                            </div> */}
              </div>

              <div className="flex -mt-4">
                {/* <SwiperCarouselCoupon /> */}
                <HorizontalCardCarousel />
              </div>

              <div className="mt-4 flex px-7">
                <div className="flex-col flex gap-3">
                  <h2 className="font-bold">Paling Laris</h2>
                </div>
              </div>

              <div className="flex -mt-2">
                {/* <CardCarousel /> */}
                <VerticalCardCarousel />
              </div>

              <div className="mt-4 flex px-7">
                <div className="flex-col flex gap-3">
                  <h2 className="font-bold">Kategori</h2>
                </div>
              </div>

              {/* <div className='flex overflow-visible z-0'>
                            <KategoriCarousel />
                        </div>  */}

              <div className="flex -mt-2">
                {/* <CardCarousel /> */}
                <SquareCardCarousel />
              </div>
            </>
          )}

          {searchResult.length != 0 && (
            <>
              <div className="mt-4 flex px-7">
                <div className="flex-col flex gap-3">
                  <h2 className="font-bold">Resto Sesuai Pencarian</h2>
                </div>
              </div>

              <div className="flex -mt-2">
                {/* <CardCarousel /> */}
                <VerticalCardCarousel data={searchResult}/>
              </div>

              <div className="mt-4 flex px-7">
                <div className="flex-col flex gap-3">
                  <h2 className="font-bold">Resto Yang Mirip</h2>
                </div>
              </div>

              {/* <div className='flex overflow-visible z-0'>
                            <KategoriCarousel />
                        </div>  */}

              <div className="w-full flex flex-col items-center">
                {similar.map((item: any) => {
                  return (
                    <div className="w-[87.5%] flex justify-center shadow-card mb-4 rounded-[20px] bg-[#FFF] shadow-[-3px 2px 5px 1px rgba(255, 183, 109, 0.37)] border-[1px] border-[#FE8304]/10">
                      <div className="w-[25%] p-2">
                        <Image 
                            src={item.merchantLogo}
                            alt=''
                            width={75}
                            height={75}
                            className='aspect-square'
                        />
                      </div>
                      <div className="w-[75%] flex flex-col justify-evenly p-2">
                        <div className='font-bold text-[14px]'>{item.name}</div>
                        <div className="flex">
                          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.35173 1.44311C7.57636 0.852294 8.42364 0.852294 8.64827 1.44312L10.0973 5.45689C10.1987 5.72342 10.457 5.9 10.7456 5.9H14.3063C14.9638 5.9 15.251 6.71921 14.7341 7.11989L12.2 9.4C11.9667 9.58081 11.8761 9.88825 11.9749 10.1643L12.9 14.0866C13.1253 14.716 12.3954 15.2575 11.8448 14.8695L8.40243 12.6862C8.1617 12.5166 7.8383 12.5166 7.59757 12.6862L4.15529 14.8695C3.60462 15.2575 2.87478 14.716 3.1 14.0866L4.02513 10.1643C4.12389 9.88825 4.03334 9.58081 3.8 9.4L1.26596 7.11989C0.748953 6.71921 1.03621 5.9 1.6937 5.9H5.25437C5.54297 5.9 5.8013 5.72342 5.90263 5.45689L7.35173 1.44311Z" fill="#FE8304" stroke="#FE8304" stroke-width="0.700145" stroke-linecap="round" stroke-linejoin="round"/>
                          </svg>
                          <p className='text-sm'>
                            {Math.round(Math.random() * (5 - 1) + 1)}
                          </p>
                        </div>
                        <div className='text-xs text-[#574E4E]'>{Math.round(Math.random() * (10 - 1) + 1)} km</div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </>
          )}
        </div>

        <div className="w-full h-28"></div>

        <div className="fixed bottom-0 w-full bg-white">
          <Navbar role="customer" location="home" />
        </div>
      </div>
    </DefaultLayout>
  );
};

export default Homepage;

const OrderReservation = ({ reservationData }: { reservationData: any }) => {
  const starth = new Date(reservationData.createdAt).getHours();
  const startm = new Date(reservationData.createdAt).getMinutes();
  const time = parseInt(reservationData.eta)

  const router = useRouter();
  return (
    <>
      <div className="w-full h-60 border-[1px] border-c-orange-200 rounded-2xl mt-3">
        <div className="flex justify-between py-2 px-4 items-center">
          <div className="">
            <p>Driver</p>
            <p className="font-extrabold">{reservationData.user.name}</p>
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
            <p className="font-extrabold">
              Rp {reservationData.costFee + reservationData.foodFee + 2500}
            </p>
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
              <h3 className="font-extrabold">{reservationData.source}</h3>
              <p className="mt-5">Tujuan akhir</p>
              <h3 className="font-extrabold">J{reservationData.destination}</h3>
            </div>
          </div>
          <div className="text-right">
            <p className="font-bold">Estimasi</p>
            <h3 className="font-bold text-gray-500">{starth}:{startm.toString().padStart(2, "0")}</h3>
            <h3 className="mt-9 font-bold text-gray-500">{(time+startm > 59) ? starth+1 : starth}:{((time+startm > 59) ? (startm+time)%59 : startm).toString().padStart(2, "0")}</h3>
          </div>
        </div>
        <div className="justify-center flex mt-1" onClick={
          () => {
            router.push({
                pathname: '/order',
                query: { data: JSON.stringify(reservationData)}
            })
          }
        }>
          <Button text="Detail" size="small" className="w-1/3" />
        </div>
      </div>
    </>
  );
};

const SearchBar: React.FunctionComponent = (): JSX.Element => {
  return (
    <>
      <div className="relative flex">
        {/* ICON */}
        <span className="absolute inset-y-0 left-0 flex items-center pl-3">
          <Image src={Search} alt={""} />
        </span>
        <input
          placeholder="Cari makananmu"
          type="text"
          className="bg-[#FE8304] rounded-full bg-opacity-40 w-full py-[6px] px-14 font-bold text-sm placeholder-[#817A7A] bg-auto focus:outline-none"
        ></input>
      </div>
    </>
  );
};
