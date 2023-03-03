import Button from "components/elements/Button";
import DummyImage from "public/images/yummy.jpg"
import Image from "next/image";
import Navbar from "components/elements/Navbar";

const AddMenu = () => {
  return (
    <div>

        <div className='p-6 flex flex-col gap-4'>
            <h1 className='mt-12 font-black text-[18px] text-center'>Preksu: Ayam Geprek & Susu</h1>
            
            <div className="flex justify-between px-3">
                <button className=" w-[112px] h-[27px] text-[13px] px-3 py-1 rounded-full bg-[#FFE0C0] text-[#FE8304] font-bold shadow-md shadow-[#FEB262]/50 shadow-inner-white">
                    <p>
                        + Tambahkan
                    </p>

                </button>
                <div className="flex items-center gap-2">
                                <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g filter="url(#filter0_di_589_626)">
                    <circle cx="8.5" cy="7.5" r="6.5" fill="#FE8304"/>
                    </g>
                        <defs>
                            <filter id="filter0_di_589_626" x="0" y="0" width="17" height="17" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                                <feOffset dy="1"/>
                                <feGaussianBlur stdDeviation="1"/>
                                <feComposite in2="hardAlpha" operator="out"/>
                                <feColorMatrix type="matrix" values="0 0 0 0 0.600096 0 0 0 0 0.304849 0 0 0 0 0 0 0 0 1 0"/>
                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_589_626"/>
                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_589_626" result="shape"/>
                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                                <feOffset dy="-1"/>
                                <feGaussianBlur stdDeviation="2"/>
                                <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
                                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                            <feBlend mode="normal" in2="shape" result="effect2_innerShadow_589_626"/>
                            </filter>
                        </defs>
                    </svg>

                    <p className="text-[#20CB50]">Buka</p>
                </div>

            </div>

            <div className="flex flex-col px-10 items-center gap-7 mt-4">
                <MenuCard />
                <MenuCard />
                <MenuCard />
            </div>
            
            
        </div>
        <Navbar 
        role="merchant"
        />
        
    </div>
  )
}

export default AddMenu;



const MenuCard = () => {
  return (
    <div>

        <div className="flex ">
            <div className="flex flex-col shadow-lg shadow-[#FFB76D]/37 w-[220px] h-auto bg-[#FFEFE0] rounded-[13px] object-cover overflow-hidden">
                {/* edit badge */}
                <button className="bg-[#FE8304] w-[40px] h-[25px] absolute right-2 top-2 rounded-[8px] drop-shadow-md inner shadow-inner-xl shadow">
                    <svg className='mx-auto my-1' width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.92463 10.0094L10.4141 1.51992C11.1073 0.826692 12.2313 0.826692 12.9245 1.51992C13.6177 2.21316 13.6177 3.33712 12.9245 4.03035L4.43505 12.5198C4.24138 12.7135 3.99471 12.8455 3.72614 12.8992L1 13.4444L1.54522 10.7183C1.59894 10.4497 1.73095 10.2031 1.92463 10.0094Z" stroke="white" stroke-width="1.38734" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M2.04053 10.323L4.12154 12.404" stroke="white" stroke-width="1.38734" stroke-linejoin="round"/>
                        <path d="M8.97754 3.38647L11.0585 5.46748" stroke="white" stroke-width="1.38734"/>
                    </svg>
                </button>

                <div className="h-auto bg-white w-full">
                    <div className='hoverflow-hidden'>
                        <Image src={DummyImage} alt="menu picture"/>

                    </div>
                        
                    <div className="mx-6 flex flex-col leading-none my-2">
                        <h2 className=""><span className="font-bold text-sm">Nama Makanan</span></h2>
                        <h3><span className="text-sm">Rp10.000</span></h3>
                        <p className=" text-justify"><span className="text-[10px] text-[#ADADAD]">Perpaduan nasi ayam geprek dengan lelehan keju mozzarela yang nikmat</span></p>
                        
                    </div>


                </div>
                <div className="flex flex-col w-full">
                    <h1 className="mt-1 text-sm text-center font-bold">Stock</h1>
                    <div className="w-full h-[1px] bg-slate-500/20"></div>
                    <div className="flex justify-evenly py-2 items-center">
                        <button className="bg-white w-[68px] h-[18px] rounded-[4px]">+</button>
                        <h2>50</h2>
                        <button className=" bg-white w-[68px] h-[18px] rounded-[4px]">-</button>

                    </div>
                </div>
            </div>


        </div>
        
        
    </div>
  )
}
