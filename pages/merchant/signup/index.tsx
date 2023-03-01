import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
import Button from 'components/elements/Button';
import { Steps, StepsProvider,useSteps } from 'react-step-builder';
import SlideRoutes  from 'react-slide-routes';
import { Route, useLocation } from 'react-router-dom';

import 'swiper/css';
import Link from 'next/link';

export default function SignUp() {
  return (
    <>
        <Swiper>
            <SwiperSlide>
            <div className="flex-col items-center flex bg-gradient-to-b from-[#F37D27]/25 to-white w-full min-h-screen">
                <div className='mt-20 flex flex-col justify-center items-center'>
                <h3>Daftarkan Usahamu,</h3>
                <h3>Jadilah Bagian dari <span className='font-bold'>Sokin</span></h3>
                </div>
                <div className='flex flex-col items-center p-8 mt-11 bg-white h-[450px] w-[90%] rounded-3xl shadow-md mb-14'>
                    <h3 className='font-bold'>Langkah - Langkah</h3>
                    <div className='flex mt-9 mb-3'>
                        <div className='w-[90px] flex justify-center mr-5'>
                            <Image src={'/images/Profilecard.svg'} width={52} height={37} alt={'Profile card'} />
                        </div>
                        <p>Lengkapi identitas diri dan informasi rekenign bank</p>
                    </div>
                    <div className='w-[100%] h-[1px] bg-slate-400'></div>
                    <div className='flex my-3'>
                        <div className='w-[90px] flex justify-center mr-5'>
                            <Image src={'/images/Pencil.svg'} width={34} height={34} alt={'Profile card'} />
                        </div>
                        <p>Lengkapi identitas diri dan informasi rekenign bank</p>
                    </div>
                    <div className='w-[100%] h-[1px] bg-slate-400'></div>
                    <div className='flex my-3'>
                        <div className='w-[90px] flex justify-center mr-5'>
                            <Image src={'/images/Shield.svg'} width={37} height={45} alt={'Profile card'} />
                        </div>
                        <p>Lengkapi identitas diri dan informasi rekenign bank</p>
                    </div>
                    <div className='w-[100%] h-[1px] bg-slate-400'></div>
                    <div className='flex my-3'>
                        <div className='w-[90px] flex justify-center mr-5'>
                            <Image src={'/images/Location.svg'} width={47} height={39} alt={'Profile card'} />
                        </div>
                        <p>Lengkapi identitas diri dan informasi rekenign bank</p>
                    </div>
                    <div className='w-[100%] h-[1px] bg-slate-400'></div>
                </div>
                <div className='w-[90%]'>
                    <Button text='Lanjutkan' />
                </div>
            </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='bg-white p-6 w-full rounded-3xl flex-col flex h-[150px] z-10'>
                    <div className='flex justify-center'>
                        <Link href='/merchant'>
                        <Image src={'/images/ExitIcon.svg'} width={24} height={24} alt='exit icon'  className='absolute top-[26px] left-6'/>
                        </Link>
                        <h1 className='text-[#565351] font-semibold text-xl'>Pendaftaran akun Merchant</h1>
                    </div>
                </div>
                <div className='bg-[#F37D27]/25 absolute w-full top-20 z-0'>
                    <h1 className='font-semibold text-[#E17301] text-xl mt-5'>Informasi Pemilik</h1>
                </div>
            </SwiperSlide>
            <SwiperSlide>

            </SwiperSlide>
            <SwiperSlide>

            </SwiperSlide>
            <SwiperSlide>

            </SwiperSlide>
        </Swiper>
    </>
  )
}
