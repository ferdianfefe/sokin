import Image from 'next/image'
import Search from "public/img/homepage/icon-search.png"
import Button from 'components/elements/Button'
import CarouselIklan from 'components/homepage-1/CarouselIklan/CarouselIklan'
import CardCarousel from 'components/homepage-1/CardCarousel/CardCarousel'
import KategoriCarousel from 'components/homepage-1/Kategori/KategoriCarousel'

const Homepage: React.FunctionComponent = (): JSX.Element => {
    return(
        <>
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

                        ></Button>
                        <Button
                            text="Daftar"
                            type="secondary"
                            size="small"

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

                        <div className='flex gap-2 overflow-visible'>
                            <CarouselIklan 
                                source = "/public/img/components/voucher.jpg"
                                // alt='carousel pic'
                            />
                            <CarouselIklan 
                                source = "/public/img/components/voucher.jpg"
                                // alt='carousel pic'
                            />
                        </div>

                        <div className='flex justify-center'>
                            <svg width="128" height="10" viewBox="0 0 128 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="4.5" cy="4.93481" r="4.5" fill="#595656"/>
                                <circle cx="21.5" cy="4.93481" r="4.5" fill="#D9D9D9"/>
                                <circle cx="38.5" cy="4.93481" r="4.5" fill="#D9D9D9"/>
                                <circle cx="55.5" cy="4.93481" r="4.5" fill="#D9D9D9"/>
                                <circle cx="72.5" cy="4.93481" r="4.5" fill="#D9D9D9"/>
                                <circle cx="89.5" cy="4.93481" r="4.5" fill="#D9D9D9"/>
                                <circle cx="106.5" cy="4.93481" r="4.5" fill="#D9D9D9"/>
                                <circle cx="123.5" cy="4.93481" r="4.5" fill="#D9D9D9"/>
                            </svg>

                        </div>

                        <div className='mt-4 flex'>
                            <div className='flex-col flex gap-3'>
                                <h2 className='font-bold'>Paling Laris</h2>
                                <div className='flex gap-4 overflow-visible'>
                                    <CardCarousel />
                                    <CardCarousel />
                                    <CardCarousel />
                                </div>
                            </div>
                        </div>

                        <div className='mt-4 flex'>
                            <div className='flex-col flex gap-3'>
                                <h2 className='font-bold'>Kategori</h2>
                                <div className='flex gap-4 overflow-visible'>
                                    <KategoriCarousel />
                                    <KategoriCarousel />
                                    <KategoriCarousel />
                                    <KategoriCarousel />
                                    <KategoriCarousel />
                                </div>
                            </div>
                        </div>

                        
                    </div>

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







