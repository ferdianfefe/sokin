import React from 'react'
import Button from 'components/elements/Button'
import Navbar from 'components/elements/Navbar'
import TargetBar from 'public/images/driver/dashboard/target-bar-driver.png'
import Vector from 'public/images/driver/dashboard/vector-pesanan.png'
import { useState } from 'react'
import Image from 'next/image'



const DriverDashboard = () => {
    const [isActive, setIsActive] = useState(false)
    const [showPopUp, setShowPopup] = useState(false)


    const toggleSwitch = () => {
        setIsActive(!isActive)
    }

        
    const togglePopup = () => {
            setShowPopup(!showPopUp)
        
    }
    console.log(showPopUp)
    
    
    
    return (
        <div className='p-0 m-0'>
            {showPopUp && <PopUpDriver />}
            
            <div className='w-full h-[90px] bg-[#FE8304]/70 mt-[40px] flex py-4 px-6 items-center gap-4'>
                <div className='flex gap-2 items-center'>
                    <div className='flex w-[45px] h-[40px]  bg-white rounded-full'>

                    </div>
                    <div className='flex w-[80%]'>
                        <div className='flex flex-col'>
                            <h2 className='font-black text-[15px] leading-tight'>Ninda Nandita</h2>
                            <p className='font-medium text-[12px]'>+6281238163514</p>
                        </div>
                    </div>

                </div>

                <div className='flex items-center gap-3 w-full h-full'>
                    <div className='w-[40%] bg-white p-2 rounded-[8.2px] flex flex-col justify-center '>
                        <div className='flex'>
                            <svg width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5.39182 0.889244C5.57033 0.416475 6.24364 0.416475 6.42215 0.88925L7.57369 4.10103C7.65424 4.3143 7.85951 4.4556 8.08886 4.4556H10.9185C11.441 4.4556 11.6692 5.11113 11.2584 5.43175L9.24463 7.25627C9.05923 7.40095 8.98724 7.64696 9.06573 7.86782L9.80091 11.0064C9.97992 11.5101 9.39989 11.9434 8.96232 11.6329L6.22679 9.88587C6.03548 9.75015 5.77849 9.75015 5.58718 9.88587L2.85167 11.6329C2.41407 11.9434 1.83408 11.5101 2.01306 11.0064L2.74824 7.86782C2.82673 7.64696 2.75477 7.40095 2.56934 7.25627L0.55559 5.43175C0.144737 5.11113 0.37301 4.4556 0.895507 4.4556H3.72509C3.95444 4.4556 4.15972 4.3143 4.24025 4.10103L5.39182 0.889244Z" fill="#FE8304" stroke="#FE8304" strokeWidth="0.55639" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>

                            <p className='ml-1 text-sm'>Rating</p>

                        </div>

                        <div className='flex justify-center'>
                            <h3 className='text-[16px] font-bold'>4.7</h3>
                        </div>
                    </div>
                    <div className='w-full bg-white p-2 rounded-[8.2px] flex flex-col justify-center'>
                        <div className='flex justify-center'>
                            <svg width="15" height="15" viewBox="0 0 15 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0.270508 5.95919H3.44495V16.5407H0.270508V5.95919ZM0.270508 0.668457H3.44495V4.90104H0.270508V0.668457ZM10.852 12.3081H14.0264V16.5407H10.852V12.3081ZM10.852 9.13363H14.0264V11.2499H10.852V9.13363ZM5.56124 9.13363H8.73568V16.5407H5.56124V9.13363ZM5.56124 4.90104H8.73568V8.07548H5.56124V4.90104Z" fill="#FE8304" />
                            </svg>


                            <p className='ml-1 text-sm'>Target Harian</p>

                        </div>

                        <div className='flex justify-center'>
                            <h3 className='text-[16px] font-bold'>0%</h3>
                        </div>
                    </div>

                </div>

            </div>

            <div className='w-full h-[90px] px-2 py-3 border-[1px] border-y-[#FE8304] flex gap-2 text-white items-center justify-center'>
                <div className='flex flex-col p-2 rounded-3xl drop-shadow-md shadow-[#000000]/60 bg-[#FE8304] shadow-inner w-full h-full items-center justify-center'>
                    <div className='flex gap-2'>
                        <svg width="20" height="20" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 2.74039C1 1.7792 1.80589 1 2.8 1H17.2C18.1941 1 19 1.7792 19 2.74039V7.96154V13.1827C19 14.1439 18.1941 14.9231 17.2 14.9231H2.8C1.80589 14.9231 1 14.1439 1 13.1827V7.96154V2.74039Z" fill="white" stroke="#F88003" stroke-width="1.19738" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M1 4.48071H19H1Z" fill="white" />
                            <path d="M1 4.48071H19" stroke="#F88003" stroke-width="1.19738" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M1 7.96118H7.3C7.3 8.83137 7.84 10.5718 10 10.5718C12.16 10.5718 12.7 8.83137 12.7 7.96118H19" fill="white" />
                            <path d="M1 7.96118H7.3C7.3 8.83137 7.84 10.5718 10 10.5718C12.16 10.5718 12.7 8.83137 12.7 7.96118H19" stroke="#F88003" stroke-width="1.19738" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>

                        <h3 className='font-medium text-sm'>Saldomu</h3>
                    </div>

                    <div className='flex justify-center text-white font-bold text-lg'>
                        <h2>Rp430.000</h2>
                    </div>
                </div>

                <div className='flex flex-col p-2 rounded-3xl drop-shadow-md shadow-[#000000]/60 bg-[#FE8304] shadow-inner w-full h-full items-center justify-center'>
                    <div className='flex gap-2'>
                        <svg width="24" height="14" viewBox="0 0 24 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M20 6C19.8 6 19.6 6 19.5 6.1L17.4 4H20V1L16.3 2.9L13.4 0H9V2H12.6L14.6 4H11L7 6L5 4H0V6H4C1.8 6 0 7.8 0 10C0 12.2 1.8 14 4 14C6.2 14 8 12.2 8 10L10 12H13L16.5 5.9L17.5 6.9C16.6 7.6 16 8.8 16 10C16 12.2 17.8 14 20 14C22.2 14 24 12.2 24 10C24 7.8 22.2 6 20 6ZM4 12C2.9 12 2 11.1 2 10C2 8.9 2.9 8 4 8C5.1 8 6 8.9 6 10C6 11.1 5.1 12 4 12ZM20 12C18.9 12 18 11.1 18 10C18 8.9 18.9 8 20 8C21.1 8 22 8.9 22 10C22 11.1 21.1 12 20 12Z" fill="white" />
                        </svg>


                        <h3 className='font-medium text-sm'>Kendaraan</h3>
                    </div>

                    <div className='flex justify-center text-white font-bold text-[15px]'>
                        <h2>Vario Tekno 110</h2>
                    </div>
                </div>

                <div className='flex flex-col p-3 rounded-3xl drop-shadow-md shadow-[#000000]/60 bg-[#FE8304] shadow-inner w-full h-full items-center justify-center'>
                    <div className='flex gap-2'>
                        <svg width="25" height="16" viewBox="0 0 25 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M18.7706 4.65137H15.7806V5.64804H18.7706V7.6414H16.7773V8.63808H18.7706V10.6314H15.7806V11.6281H18.7706C19.0348 11.6277 19.2881 11.5226 19.475 11.3358C19.6618 11.1489 19.7669 10.8956 19.7673 10.6314V5.64804C19.767 5.38379 19.662 5.13044 19.4751 4.94358C19.2882 4.75672 19.0349 4.65163 18.7706 4.65137ZM14.7839 11.6281H10.7972V8.63808C10.7975 8.37382 10.9026 8.12047 11.0894 7.93361C11.2763 7.74676 11.5296 7.64166 11.7939 7.6414H13.7872V5.64804H10.7972V4.65137H13.7872C14.0515 4.65163 14.3049 4.75672 14.4917 4.94358C14.6786 5.13044 14.7837 5.38379 14.7839 5.64804V7.6414C14.7837 7.90565 14.6786 8.15901 14.4917 8.34587C14.3049 8.53272 14.0515 8.63781 13.7872 8.63808H11.7939V10.6314H14.7839V11.6281ZM6.06299 11.3789V10.8806H7.558V5.39888H6.06299V4.90054H8.05634V10.8806H9.55136V11.3789H6.06299Z" fill="white" />
                            <path d="M8.30566 4.65137H5.81396V5.64804H7.30898V10.6314H5.81396V11.6281H9.80068V10.6314H8.30566V4.65137Z" fill="white" />
                            <rect x="0.436047" y="0.436047" width="24.1279" height="14.8256" rx="3.92442" stroke="white" stroke-width="0.872093" />
                        </svg>


                        <h3 className='font-medium text-sm'>Plat Nomor</h3>
                    </div>

                    <div className='flex justify-center text-white font-bold text-md'>
                        <h2>DK 1782 AB</h2>
                    </div>
                </div>


            </div>

            <div className='flex flex-col border-b-[1px] border-[#FE8304] py-5 px-8'>
                {isActive &&
                    <div onClick={togglePopup}>
                        <button className='justify-center hover:scale-105 transition-all w-36 text-sm bg-[#FE8304]/70 text-white mx-2 my-4 rounded-full '>Dummy Trigger PopUp</button>
                    </div>
                }

                <div className='justify-end flex'>

                    {isActive === true ?
                        <div className={`'bg-white h-[25px] w-[120px] border-2 rounded-full border-[#E4A76F] text-[#20CB50] font-extrabold drop-shadow-md flex justify-center items-center'`}>Aktif</div>

                        :
                        <div className={`'bg-white h-[25px] w-[120px] border-2 rounded-full border-[#E4A76F] text-[#FD1212] font-extrabold drop-shadow-md flex justify-center items-center'`}>Tidak Aktif</div>
                    }

                </div>


                <h2><span className='font-bold text-xl'>Target Harian</span></h2>
                <p><span className='text-[#818181] text-sm'>Berdasarkan banyak jumlah pesanan</span></p>

                <div className='mt-2 w-full h-[76px] bg-slate-200'></div>


            </div>

            <div className='py-8 flex flex-col px-8 gap-6'>
                {isActive &&

                    <div className='mb-12'>
                        <div className='flex flex-col'>
                            <h2><span className='font-bold text-xl'>Reservasi Order</span></h2>
                            <p><span className='text-[#818181] text-sm'>Sedang Berlangsung</span></p>

                        </div>

                        <div className='flex flex-col px-2 justify-center'>
                            <Image className='mt-5 mx-auto' src={Vector} alt=''></Image>
                            <p className='justify-center flex mt-5'><span className='text-[#818181] font-medium text-md'>Saat ini belum ada orderan yang masuk</span></p>
                        </div>

                    </div>

                }
                <div className='flex justify-between'>
                    <div className='flex gap-2'>
                        <svg className='flex' width="35" height="52" viewBox="0 0 27 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M13.5 0C6.03643 0 0 6.4676 0 14.4643C0 25.3125 13.5 41.3265 13.5 41.3265C13.5 41.3265 27 25.3125 27 14.4643C27 6.4676 20.9636 0 13.5 0ZM13.5 19.6301C10.8386 19.6301 8.67857 17.3158 8.67857 14.4643C8.67857 11.6128 10.8386 9.29847 13.5 9.29847C16.1614 9.29847 18.3214 11.6128 18.3214 14.4643C18.3214 17.3158 16.1614 19.6301 13.5 19.6301Z" fill="#FE8304" />
                        </svg>
                        <div className='flex flex-col'>
                            <h2><span className='ml-2 text-lg'>Lokasi Saat Ini</span></h2>
                            <h2><span className='ml-2 text-xl font-black'>Tempo Gelato</span></h2>

                        </div>

                    </div>

                    <div className='flex'>
                        <button type="submit" className={`drop-shadow-lg bg-white h-[25px] w-[90px] border-[1px] rounded-full border-[#E4A76F] text-xs font-bold  flex justify-center items-center`}>Atur Lokasi</button>
                    </div>

                </div>

                <div className='w-full h-auto  relative flex justify-center'>
                    <input type='text' placeholder='Cari lokasi' className='pl-10 font-semibold focus:ring-0 rounded-full w-full h-[35px] bg-white border-[1px] border-[#FE8304] drop-shadow-lg'></input>
                    <svg className='absolute left-5 top-2 ' width="13" height="19" viewBox="0 0 13 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6.83192 0.324707C3.534 0.324707 0.866699 3.1992 0.866699 6.75328C0.866699 11.5747 6.83192 18.6921 6.83192 18.6921C6.83192 18.6921 12.7971 11.5747 12.7971 6.75328C12.7971 3.1992 10.1298 0.324707 6.83192 0.324707ZM6.83192 9.0492C5.65592 9.0492 4.70148 8.02063 4.70148 6.75328C4.70148 5.48593 5.65592 4.45736 6.83192 4.45736C8.00792 4.45736 8.96235 5.48593 8.96235 6.75328C8.96235 8.02063 8.00792 9.0492 6.83192 9.0492Z" fill="#FE8304" />
                    </svg>

                    <svg className='absolute right-3 top-2' width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M19 19L14.9865 14.9795M17.2105 9.60526C17.2105 13.8055 13.8055 17.2105 9.60526 17.2105C5.40499 17.2105 2 13.8055 2 9.60526C2 5.40499 5.40499 2 9.60526 2C13.8055 2 17.2105 5.40499 17.2105 9.60526Z" stroke="#B15A00" stroke-width="4" stroke-linecap="round" />
                    </svg>


                </div>
                <div className='flex w-full h-96 p-5 bg-slate-200 rounded-[15px]'>map</div>

                {isActive === true ?
                    <div onClick={toggleSwitch}>

                        <Button
                            type='primary'
                            text="Selesai Bekerja"
                        />
                    </div>
                    :
                    <div onClick={toggleSwitch}>

                        <Button
                            type='primary'
                            text="Mulai Bekerja"
                        />
                    </div>
                }



            </div>

            <Navbar />
        </div>
    )
}

const PopUpDriver = () => {
    
    return (
        <div className="fixed inset-0 flex flex-col justify-center items-center z-50 backdrop-blur-sm ">
            <div className='bg-white py-10 rounded-[12px] border-[#FE8304]/20 border-[1px] shadow-lg mx-6'>
                <div className="justify-center flex">
                    <h2><span className='text-center text-[20px] font-extrabold'>Orderan Masuk</span></h2>
                </div>

                <div className='border-y-[#FE8304] border-x-[#FFFFFF] border-[1px] py-4 px-8 my-4'>
                    <div className='flex flex-col gap-6'>
                        <div className='flex justify-between'>
                            <div className='flex flex-col'>
                                <h3><span className='font-extrabold'>Pemesan</span></h3>
                                <p><span className='font-semibold'>Muhammad Irfan</span></p>

                            </div>
                            <div className='flex rounded-full bg-[#FFF0E0] w-20 px-1 h-7 drop-shadow-lg items-center justify-center gap-2 drop-shadow-[#FE8304]/20'>
                                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8.29096 1.51217C8.5488 0.829277 9.52137 0.829277 9.77921 1.51217L11.4426 6.15141C11.5589 6.45948 11.8554 6.66358 12.1867 6.66358H16.2739C17.0286 6.66358 17.3583 7.61045 16.7649 8.07356L13.8561 10.709C13.5883 10.918 13.4844 11.2733 13.5977 11.5923L14.6596 16.1259C14.9182 16.8534 14.0804 17.4793 13.4484 17.0308L9.49702 14.5073C9.22069 14.3113 8.84947 14.3113 8.57315 14.5073L4.62186 17.0308C3.98976 17.4793 3.152 16.8534 3.41053 16.1259L4.47245 11.5923C4.58582 11.2733 4.48188 10.918 4.21403 10.709L1.30529 8.07356C0.711831 7.61045 1.04156 6.66358 1.79628 6.66358H5.88346C6.21474 6.66358 6.51126 6.45948 6.62758 6.15141L8.29096 1.51217Z" fill="#FE8304" stroke="#FE8304" stroke-width="0.803675" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>

                                <h2><span className='font-black'>98</span></h2>

                            </div>
                        </div>

                        {/* source and destination */}
                        <div className='flex flex-col gap-12 relative'>

                            <div className='top-8 left-[10px] absolute w-0 h-[70px]  border-dashed border-[#FE8304] border-[2px]'></div>
                            {/* source */}
                            <div className='flex justify-center items-center'>
                                <svg width="25" height="25" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <ellipse cx="11.4996" cy="11.5" rx="11.4996" ry="11.5" fill="#FE8304" />
                                    <ellipse cx="11.4516" cy="11.4521" rx="6.36225" ry="6.36246" fill="white" />
                                </svg>

                                <div className='flex flex-col w-full ml-4'>
                                    <p><span className='text-[#464545]'>Lokasi Pengambilan</span></p>
                                    <h2><span className='font-extrabold'>McDonalds cabang Kaliurang</span></h2>
                                </div>

                            </div>

                            {/* tujuan */}
                            <div className='flex justify-center items-center'>
                                <svg width="25" height="35" viewBox="0 0 19 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9.5 0C4.24786 0 0 4.55128 0 10.1786C0 17.8125 9.5 29.0816 9.5 29.0816C9.5 29.0816 19 17.8125 19 10.1786C19 4.55128 14.7521 0 9.5 0ZM9.5 13.8138C7.62714 13.8138 6.10714 12.1852 6.10714 10.1786C6.10714 8.17194 7.62714 6.54337 9.5 6.54337C11.3729 6.54337 12.8929 8.17194 12.8929 10.1786C12.8929 12.1852 11.3729 13.8138 9.5 13.8138Z" fill="#FE8304" />
                                </svg>


                                <div className='flex flex-col w-full ml-4'>
                                    <p><span className='text-[#464545]'>Lokasi Pengantaran</span></p>
                                    <h2><span className='font-extrabold'>Jl. Sendowo no. 120</span></h2>
                                </div>

                            </div>

                        </div>

                    </div>

                </div>
            <div className='flex flex-col px-8 gap-4'>
                <div className='flex'><h2><span className='font-extrabold'>Pesanan</span></h2></div>
                <div className='flex flex-col gap-2 font-medium'>
                    <div className='flex justify-between'>
                        <p>Paket Panas 1</p>
                        <p>Rp40.000</p>
                    </div>
                    <div className='flex justify-between'>
                        <p>Ongkos Kirim</p>
                        <p>Rp10.000</p>
                    </div>
                    <div className='flex justify-between'>
                        <p>Biaya Administrasi</p>
                        <p>Rp2.500</p>
                    </div>

                    <div className='h-[1px] w-full bg-black/20'></div>
                    <div className='flex justify-between font-semibold'>
                        <p>Total</p>
                        <p>Rp52.500</p>
                    </div>
                </div>

                <div className='w-full flex gap-3'>
                    {/* <div className='w-1/2 flex' onClick={togglePopUp}> */}
                    <div className='w-1/2 flex'>
                        
                        <Button
                        type='primary'
                        text='Tolak'
                        
                        />

                    </div>
                    
                    <div className='flex w-1/2 bg-slate-100'>
                        <Button
                        type='primary'
                        text='Terima'
                        />

                    </div>

                </div>
            </div>

            </div>
        </div>
    );

}
export default DriverDashboard

