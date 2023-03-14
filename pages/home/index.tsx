import Image from 'next/image'
import Search from "public/img/homepage/icon-search.png"
import Button from 'components/elements/Button'
import SwiperCarouselCoupon from 'components/homepage-1/SwiperCarouselCoupon'
import CardCarousel from 'components/homepage-1/CardCarousel/CardCarousel'
import KategoriCarousel from 'components/homepage-1/Kategori/KategoriCarousel'
import Navbar from 'components/elements/Navbar'
import { signIn, signOut, useSession } from "next-auth/react";

const Homepage: React.FunctionComponent = (): JSX.Element => {
    const {data, status} = useSession();
    
    console.log(data?.user);

    if (status === "loading") {
        return <div>Loading...</div>;
    }

    if (status === "unauthenticated") {
        return <div>ke halaman signin dulu banh, masih ngetes, tenang saja :v <br></br> ini halaman utama sebenernya</div>;
    }

    const logout = async () => {
        const res = await signOut();
        console.log(res);
    }

    return(
        <>
            <div onClick={logout}>Selamat Datang {data?.user?.name}, klik utk logout?</div>
            <div className="flex flex-col w-full h-full overflow-hidden">
                <div className="p-7 flex flex-col gap-4">
                    {/* SEARCH BAR */}
                    <SearchBar />
                    
                    {/* Login/Daftar */}
                    <div className="bg-login-daftar rounded-[30px] w-full flex object-clip bg-cover py-6 px-8 justify-center items-center gap-6">
                        
                            <Button
                                text="Login"
                                type="secondary"
                                size="small"
                                href='/signin'
                            ></Button>
                        

                        <Button
                            text="Daftar"
                            type="secondary"
                            size="small"
                            href='/signup'

                        ></Button>
                    </div>  

                    <div className='mt-4 w-full h-full flex flex-col gap-3'>
                        <div className='flex justify-between'>
                            <h2 className='font-bold'>Penawaran Kami</h2>
                            
                            <div className='flex relative'>
                                <button className='bg-[#FFE0C0] rounded-full text-[9px] font-bold text-[#FE8304] px-2 pr-5 drop-shadow-lg shadow-[#FEB26] shadow-inner-white shadow-inner-xl'>
                                    Lihat semuanya
                                </button>                            
                                <svg className="absolute top-[7px] right-2 items-center align-center" width="5" height="9" viewBox="0 0 5 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1.16211 8.10828L4.05877 4.64876L1.16211 1.18925" stroke="#FE8304" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>

                            </div>

                        </div>

                        {/* <div className='overflow-visible'>
                            <SwiperCarousel />
                           
                        </div> */}
                        <div className='flex '>
                            <SwiperCarouselCoupon />
                        </div>
                        

                        <div className='mt-4 flex'>
                            <div className='flex-col flex gap-3'>
                                <h2 className='font-bold'>Paling Laris</h2>
                                <div className='flex gap-4 overflow-visible'>
                                    <CardCarousel />
                                </div>
                            </div>
                        </div>

                        <div className='mt-4 flex'>
                            <div className='flex-col flex gap-3'>
                                <h2 className='font-bold'>Kategori</h2>
                                <div className='flex overflow-visible z-0'>
                                    <KategoriCarousel />
                                </div>
                            </div>
                        </div>

                        <div className='h-10 w-full'></div>

                        
                    </div>

                </div>

                <div className='fixed bottom-0 w-full bg-white'>
                    <Navbar role='customer' location='home'/>    
                </div>

            </div>
        </>
    )
}

export default Homepage;

const SearchBar: React.FunctionComponent = (): JSX.Element => {
    return(
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
