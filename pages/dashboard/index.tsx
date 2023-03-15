import Image from 'next/image'
import Search from "public/img/homepage/icon-search.png"
import Button from 'components/elements/Button'
import Navbar from 'components/elements/Navbar'
import BackgroundLoginDaftar from 'public/img/homepage/bg-login-daftar.png'
import { signIn, signOut, useSession } from "next-auth/react";
import HorizontalCardCarousel from 'components/homepage-1/HorizontalCardCarousel'
import VerticalCardCarousel from 'components/homepage-1/VerticalCardCarousel'
import SquareCardCarousel from 'components/homepage-1/SquareCardCarousel'
import MapDummy from 'public/img/homepage/map-dummy.png'
import { useState } from 'react'

const Dashboard: React.FunctionComponent = (): JSX.Element => {
    const { data, status } = useSession();

    const [order, setOrder] = useState(false)
    const triggerPopUp = () =>{
        setOrder(!order);
    }
    console.log(data?.user);

    // if (status === "loading") {
    //     return <div>Loading...</div>;
    // }

    // if (status === "unauthenticated") {
    //     return <div>ke halaman signin dulu banh, masih ngetes, tenang saja :v <br></br> ini halaman utama sebenernya</div>;
    // }

    const logout = async () => {
        const res = await signOut();
        console.log(res);
    }

    return (
        <>
            {/* <div onClick={logout}>Selamat Datang {data?.user?.name}, klik utk logout?</div> */}

            <div className="flex flex-col w-full h-full overflow-y-scroll">
                <div className="mt-7 flex flex-col gap-4">
                    {/* SEARCH BAR */}
                    <div className='px-7'>
                        <SearchBar />
                    </div>


                    <div className='px-7'>

                        <div className=" rounded-[30px] w-full flex py-3 px-auto justify-center items-center gap-6 relative overflow-hidden">

                            <Image
                                src={BackgroundLoginDaftar}
                                alt=''
                                className='absolute object-cover w-full h-full z-0'
                            />

                            <div className='z-20 px-auto flex flex-col gap-1 justify-start'>
                                <div className='h-full  w-full'>
                                    <h1><span className='font-black text-2xl'>Ninda Nandita</span></h1>
                                    <div className='flex relative w-full shadow-[ -3px 4px 4px rgba(19, 15, 15, 0.3)]'>
                                        <button className='bg-[#FFE0C0] rounded-full text-[9px] font-medium text-[#FE8304] px-2 pr-7 drop-shadow-lg shadow-[#FEB26] shadow-inner-white shadow-inner-xl'>
                                            Lengkapi Profilmu!
                                        </button>
                                        <div className='absolute right-5 top-[1px]'>
                                            <svg className='' width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <circle cx="6.5" cy="6.5" r="6.36458" fill="#FE8304" stroke="#FE8304" stroke-width="0.270833" />
                                                <path d="M3.94271 7.81365L8.00741 3.74894C8.33933 3.41702 8.87748 3.41702 9.2094 3.74894C9.54129 4.08086 9.54129 4.619 9.2094 4.95092L5.14469 9.01561C5.05196 9.10834 4.93385 9.17158 4.80526 9.19728L3.5 9.45833L3.76105 8.15308C3.78677 8.02448 3.84998 7.90638 3.94271 7.81365Z" fill="#FE8304" stroke="white" stroke-width="0.664251" stroke-linecap="round" stroke-linejoin="round" />
                                                <path d="M3.99805 7.96387L4.99442 8.96024Z" fill="#FE8304" />
                                                <path d="M3.99805 7.96387L4.99442 8.96024" stroke="white" stroke-width="0.664251" stroke-linejoin="round" />
                                                <path d="M7.31934 4.64246L8.31571 5.63883Z" fill="#FE8304" />
                                                <path d="M7.31934 4.64246L8.31571 5.63883" stroke="white" stroke-width="0.664251" />
                                            </svg>
                                        </div>
                                    </div>

                                    <div className='flex h-22 w-auto gap-1 items-center bg-white rounded-full px-2 py-[2px] mt-2'>
                                        <svg className='flex' width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M7.35173 1.41357C7.57636 0.862141 8.42364 0.862141 8.64827 1.41358L10.0973 5.15976C10.1987 5.40852 10.457 5.57333 10.7456 5.57333H14.3063C14.9638 5.57333 15.251 6.33793 14.7341 6.7119L12.2 8.84C11.9667 9.00876 11.8761 9.2957 11.9749 9.55331L12.9 13.2141C13.1253 13.8016 12.3954 14.307 11.8448 13.9449L8.40243 11.9071C8.1617 11.7488 7.8383 11.7488 7.59757 11.9071L4.15529 13.9449C3.60462 14.307 2.87478 13.8016 3.1 13.2141L4.02513 9.55331C4.12389 9.2957 4.03334 9.00876 3.8 8.84L1.26596 6.7119C0.748953 6.33793 1.03621 5.57333 1.6937 5.57333H5.25437C5.54297 5.57333 5.80129 5.40852 5.90263 5.15976L7.35173 1.41357Z" fill="#FE8304" stroke="#FE8304" stroke-width="0.438282" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>


                                        <h3 className='text-sm font-bold '>Skor Kredit: <span className='font-black'>100</span></h3>


                                    </div>
                                </div>
                            </div>

                            <div className='z-20 px-auto flex flex-col justify-start'>
                                <div className='h-full bg-white w-auto rounded-[17px] p-3 flex-col flex gap-0 items-center justify-center drop-shadow-[0px 1.7391px 3.4782px rgba(0, 0, 0, 0.25)]'>
                                    <div className='flex gap-1 items-center'>
                                        <svg width="19" height="14" viewBox="0 0 19 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M1 2.56799C1 1.70201 1.76216 1 2.70234 1H16.3211C17.2613 1 18.0234 1.70201 18.0234 2.56799V7.27197V11.9759C18.0234 12.8419 17.2613 13.5439 16.3211 13.5439H2.70234C1.76216 13.5439 1 12.8419 1 11.9759V7.27197V2.56799Z" fill="#FE8304" stroke="white" stroke-width="0.718172" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M1 4.13599H18.0234H1Z" fill="#FE8304" />
                                            <path d="M1 4.13599H18.0234" stroke="white" stroke-width="0.718172" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M1 7.27209H6.9582C6.9582 8.05609 7.46891 9.62408 9.51172 9.62408C11.5545 9.62408 12.0652 8.05609 12.0652 7.27209H18.0234" fill="#FE8304" />
                                            <path d="M1 7.27209H6.9582C6.9582 8.05609 7.46891 9.62408 9.51172 9.62408C11.5545 9.62408 12.0652 8.05609 12.0652 7.27209H18.0234" stroke="white" stroke-width="0.718172" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                        <h3 className='font-extrabold text-base'>Soket</h3>
                                    </div>
                                    <h2 className='font-black text-xl'>Rp54.000</h2>
                                    <p className='text-center text-sm'>Lihat Riwayat Transaksi</p>

                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='mt-4 w-full h-full flex flex-col gap-3 px-7'>
                        <div className='flex justify-between'>
                            <h2 className='font-bold'>Penawaran Kami</h2>

                            <div className='flex relative'>
                                <button className='bg-[#FFE0C0] rounded-full text-[9px] font-bold text-[#FE8304] px-2 pr-5 drop-shadow-lg shadow-[#FEB26] shadow-inner-white shadow-inner-xl'>
                                    Lihat semuanya
                                </button>
                                <svg className="absolute top-[7px] right-2 items-center align-center" width="5" height="9" viewBox="0 0 5 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1.16211 8.10828L4.05877 4.64876L1.16211 1.18925" stroke="#FE8304" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>

                            </div>

                        </div>


                    </div>

                    <div className='flex -mt-4'>
                        <HorizontalCardCarousel />
                    </div>


                    <div className='mt-4 flex px-7'>
                        <div className='flex-col flex gap-3'>
                            <h2 className='font-bold'>Pesan Lagi, Yuk!</h2>
                        </div>
                    </div>

                    <div className='flex -mt-2'>
                        <VerticalCardCarousel />
                    </div>

                    <div className='mt-4 w-full h-full flex flex-col gap-3 px-7'>
                        <div className='flex justify-between'>
                            <h2 className='font-bold'>Promo</h2>

                            <div className='flex relative'>
                                <button className='bg-[#FFE0C0] rounded-full text-[9px] font-bold text-[#FE8304] px-2 pr-5 drop-shadow-lg shadow-[#FEB26] shadow-inner-white shadow-inner-xl'>
                                    Lihat semuanya
                                </button>
                                <svg className="absolute top-[7px] right-2 items-center align-center" width="5" height="9" viewBox="0 0 5 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1.16211 8.10828L4.05877 4.64876L1.16211 1.18925" stroke="#FE8304" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>

                            </div>

                        </div>


                    </div>

                    <div className='flex -mt-4'>
                        <HorizontalCardCarousel />
                    </div>

                    <div className='mt-4 flex px-7'>
                        <div className='flex-col flex gap-3'>
                            <h2 className='font-bold'>Kategori</h2>
                        </div>
                    </div>

                    <div className='flex -mt-2'>
                        <SquareCardCarousel />
                    </div>
                </div>

                <div className='w-full h-28'></div>

                <div className='fixed bottom-0 w-full bg-white'>
                    <Navbar role='customer' location='home' />
                </div>

                {false 
                && 
                <div className='fixed bottom-0  drop-shadow-xl'>
                    <Popup />
                </div>
                }



            </div>
        </>
    )
}

export default Dashboard;

const SearchBar: React.FunctionComponent = (): JSX.Element => {
    return (
        <>
            <div className="relative flex">
                {/* ICON */}
                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                    <Image src={Search} alt={''} />
                </span>
                <input
                    placeholder="Cari makananmu"
                    type="text"
                    className="bg-[#FE8304] rounded-full bg-opacity-40 w-full py-[6px] px-14 font-bold text-sm placeholder-[#817A7A] bg-auto focus:outline-none">
                </input>

            </div>
        </>
    )
}

const Popup: React.FunctionComponent = (): JSX.Element => {
    return (
        <>
            {/* <div className='w-screen h-[656px] bg-slate-200 flex flex-col rounded-[20px]'> */}
            <div className='w-screen h-[656px] bg-white flex flex-col rounded-[20px] shadow-[#000]/50'>
                <div className='w-[85px] h-2 rounded-full bg-[#FFCD9B] mt-2 flex mx-auto'></div>

                <div className='flex flex-col mx-7 mt-8 gap-6'>
                    <div className='w-full h-[79px] flex bg-white shadow-[#FE8304]/90 drop-shadow-lg rounded-[15px] items-center px-4 justify-between'>
                        <div className='flex gap-2 items-center'>
                            <svg width="34" height="34" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M26.4283 28.0989L20.0215 21.7668C19.3318 22.5143 18.5813 23.2729 17.7697 24.0424C16.9573 24.8119 16.0728 25.5925 15.1162 26.384C11.5346 23.3718 8.85972 20.5795 7.09161 18.0071C5.3226 15.4346 4.43809 13.0381 4.43809 10.8174C4.43809 10.1139 4.49371 9.44327 4.60494 8.80565C4.71617 8.16804 4.87189 7.56341 5.07211 6.99176L0 1.9788L1.90204 0.09894L28.3304 26.2191L26.4283 28.0989ZM23.3918 17.5783L17.4854 11.7409C17.5966 11.565 17.6745 11.3781 17.719 11.1802C17.7635 10.9823 17.7857 10.7735 17.7857 10.5536C17.7857 9.82803 17.5246 9.20669 17.0022 8.68956C16.479 8.17332 15.8503 7.91519 15.1162 7.91519C14.8938 7.91519 14.6824 7.93718 14.4822 7.98115C14.282 8.02513 14.0929 8.10208 13.9149 8.21201L8.14207 2.50648C9.09865 1.69297 10.1722 1.07163 11.3629 0.64245C12.5526 0.21415 13.8037 0 15.1162 0C17.9415 0 20.4272 0.978406 22.5735 2.93522C24.7207 4.89203 25.7943 7.51943 25.7943 10.8174C25.7943 11.8728 25.5941 12.9554 25.1937 14.0653C24.7933 15.1761 24.1926 16.3471 23.3918 17.5783Z" fill="#FE8304" />
                            </svg>

                            <div className='flex flex-col gap-0'>
                                <h3 className='font-semibold'>Aktifkan Lokasi</h3>
                                <p className='text-[#817A7A] text-base'>Agar lokasimu lebih akurat</p>
                            </div>

                        </div>

                        <div className='w-[54px] h-[24px] rounded-full bg-[#FB3B3B] items-center flex justify-between p-[2px]'>
                            <h2 className='text-white text-sm ml-1'>OFF</h2>
                            <div className='bg-white w-5 h-5 rounded-full flex'></div>
                        </div>

                    </div>

                    <div className="w-full h-auto  relative flex justify-center">
                        <input
                            type="text"
                            placeholder="Cari lokasi"
                            className="pl-10 font-semibold focus:ring-0 rounded-full w-full h-[35px] bg-white border-[1px] border-[#FE8304] drop-shadow-lg"
                        ></input>
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

                    {/* MAP */}
                    {/* <div className='h-[337px] w-full rounded-[15px] border-1 border-[#000]/90 bg-white'></div> */}
                    <Image 
                    src={MapDummy} alt={''} className='w-full h-full max-h-[346px]'/>

                    <Button
                        text="Atur Lokasi"
                    ></Button>
                </div>
            </div>
        </>
    )
}


// import { signIn, signOut, useSession } from "next-auth/react";

// export default function Home() {
//   const {data, status} = useSession();

//   console.log(data);

//   // When rendering client side don't display anything until loading is complete.
//   if (status == "loading") {
//     return null;
//   }

//   // If no session exist, display a message to the user.
//   if (status == "unauthenticated") {
//     return (
//       <>
//         <div className="p-10 text-center text-3xl">
//           <h1>You must be logged in to see this page content.</h1>
//           <button onClick={() => signIn()}>Sign In</button>
//         </div>
//       </>
//     );
//   }

//   // If the session exists, display content to
//   return (
//     <>
//       <div className="p-10 text-center text-3xl">
//         <h1>Welcome {data?.user.name}</h1>
//       </div>
//     </>
//   );
// }
