import Button from 'components/elements/Button'
import Image from 'next/image'
import React from 'react'
import Link from 'next/link'

const DriverRegist1 = () => {
  return (
    <>
        <div className="flex-col items-center flex bg-gradient-to-b from-[#F37D27]/25 to-white w-full min-h-screen">
            <div className='mt-20 flex flex-col justify-center items-center text-[23px] font-medium'>
              <h3>Gabung menjadi</h3>
              <h3>Driver <span className='font-bold'>Sokin</span></h3>
            </div>
            <div className='flex flex-col items-center p-8 mt-11 bg-white h-[450px] w-[90%] rounded-3xl shadow-md mb-14'>
              <h3 className='font-bold'>Langkah - Langkah</h3>
              <div className='flex mt-9 mb-3  -translate-x-5'>
                <div className='w-[50px] flex justify-center mr-5'>
                  <Image src={'/images/ProfileCard.svg'} width={48} height={37} alt={'Profile card'} />
                </div>
                <p>Lengkapi identitas diri</p>
              </div>
              <div className='w-[100%] h-[1px] bg-slate-400'></div>
              <div className='flex my-3'>
                <div className='w-[90px] flex justify-center mr-5'>
                  <Image src={'/images/Pencil.svg'} width={34} height={34} alt={'Profile card'} />
                </div>
                <p>Lengkapi informasi mengenai kendaraanmu</p>
              </div>
              <div className='w-[100%] h-[1px] bg-slate-400'></div>
              <div className='flex my-3'>
                <div className='w-[90px] flex justify-center mr-5'>
                  <Image src={'/images/Shield.svg'} width={37} height={45} alt={'Profile card'} />
                </div>
                <p>Verifikasi data usaha membutuhkan waktu 2 hari</p>
              </div>
              <div className='w-[100%] h-[1px] bg-slate-400'></div>
              <div className='flex my-3'>
                <div className='w-[90px] flex justify-center mr-5'>
                  <Image src={'/images/Location.svg'} width={47} height={39} alt={'Profile card'} />
                </div>
                <p>Akunmu telah terverifikasi dan sudah bisa digunakan</p>
              </div>
              <div className='w-[100%] h-[1px] bg-slate-400'></div>
            </div>
            
            
              <div className='w-[300px]'>
                <Button text='Lanjutkan' href='/driver/signup/SignupOne'/>
              </div>
            
        </div>
    </>

  )
}

export default DriverRegist1;