import Image from "next/image";
import Search from "public/img/homepage/icon-search.png";
import Button from "components/elements/Button";
import Navbar from "components/elements/Navbar";
import BackgroundLoginDaftar from "public/img/homepage/bg-login-daftar.png";
import { signIn, signOut, useSession } from "next-auth/react";
import HorizontalCardCarousel from "components/homepage-1/HorizontalCardCarousel";
import VerticalCardCarousel from "components/homepage-1/VerticalCardCarousel";
import SquareCardCarousel from "components/homepage-1/SquareCardCarousel";
import { Router } from "next/router";
import DefaultLayout from "components/layout/DefaultLayout";

const Homepage: React.FunctionComponent = (): JSX.Element => {
  const { data, status } = useSession();

  console.log(data?.user);

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (status === "unauthenticated") {
  }

  const logout = async () => {
    const res = await signOut();
    console.log(res);
  };

  return (
    <DefaultLayout location="home">
      <div className="flex flex-col w-full h-full overflow-y-scroll">
        <div className="mt-7 flex flex-col gap-4">
          {/* SEARCH BAR */}
          <div className="px-7">
            <SearchBar />
          </div>

          {/* Login/Daftar */}
          {status == "unauthenticated" && (
            <div className="px-7">
              <div className="bg-slate-200 rounded-[30px] w-full flex py-8 px-8 justify-center items-center gap-6 relative overflow-hidden">
                <Image
                  src={BackgroundLoginDaftar}
                  alt=""
                  className="absolute object-cover w-full h-full z-0"
                  quality={100}
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
          {status == "authenticated" && (
            <div className="px-7">
              <div className=" rounded-[30px] w-full flex py-3 px-auto justify-center items-center gap-6 relative overflow-hidden">
                <Image
                  src={BackgroundLoginDaftar}
                  alt=""
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
                        Skor Kredit: <span className="font-black">100</span>
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
                    <h2 className="font-black text-xl">Rp54.000</h2>
                    <p className="text-center text-sm">
                      Lihat Riwayat Transaksi
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

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
