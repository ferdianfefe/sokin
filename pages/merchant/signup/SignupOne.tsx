import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import { useState } from 'react'
import Input from 'components/elements/Input'
import Button from 'components/elements/Button'
import InputImage from 'components/elements/InputImage'

export default function SignupOne() {

  const [currentStep, setCurrentStep] = useState(0)

  const lanjut = () => {
    setCurrentStep(currentStep + 1);
  }

  const kembali = () => {
    setCurrentStep(currentStep - 1);
  }

  return (
    <>
      <div className='bg-[#F37D27]/25 w-full'>
        <div className='bg-white p-6 w-full rounded-b-[40px] flex-col flex h-[150px] z-10'>
          <div className='flex justify-center'>
            <Link href='/merchant/signin'>
              <Image src={'/images/ExitIcon.svg'} width={24} height={24} alt='exit icon'  className='absolute top-[26px] left-5'/>
            </Link>
            <h1 className='text-[#565351] font-semibold text-xl'>Pendaftaran akun Merchant</h1>
          </div>
          {currentStep === 0 &&
          <div className='w-full justify-center items-center flex mt-3'>
            <Image src={'/images/regis/Step1.svg'} width={300} height={10} alt='step one' className='mt-3'/>
          </div>
          }
          {currentStep === 1 &&
          <div className='w-full justify-center items-center flex mt-3'>
            <Image src={'/images/regis/Step2.svg'} width={300} height={10} alt='step one' className='mt-3'/>
          </div>
          }
          {currentStep === 2 &&
          <div className='w-full justify-center items-center flex mt-3'>
            <Image src={'/images/regis/Step3.svg'} width={300} height={10} alt='step one' className='mt-3'/>
          </div>
          }
        </div>
        <div className='w-full top-20 items-center flex-col flex'>
              {(currentStep === 0) && <h1 className='font-semibold text-[#E17301] text-xl mt-5'>Informasi Pemilik</h1>}
              {(currentStep === 1) && <h1 className='font-semibold text-[#E17301] text-xl mt-5'>Informasi Usaha</h1>}
              {(currentStep === 2) && <h1 className='font-semibold text-[#E17301] text-xl mt-5'>Verifikasi</h1>}
              {(currentStep === 3) && <h1 className='font-semibold text-[#E17301] text-xl mt-5'>Akunmu Terdaftar</h1>}
            <div className='bg-white mt-4 rounded-t-[40px] w-full px-9 py-12 flex flex-col'>
              <form>  
                {(currentStep === 0) && (<>
                  <div className='mb-3'>
                    <Input className='' text='Nama' />
                    <p className='text-xs text-gray-500 mt-1'>Nama harus ditulis persis seperti yang tertera pada KTP, Termasuk jika ada jabatan, titik, koma, dll</p>
                  </div>
                  <Input className='mb-3' text='Nomor KTP' />
                  <Input className='mb-3' text='Domisili' />
                  <Input className='mb-3' text='Alamat' />
                  <Input className='mb-3' text='Nomor Telepon' />
                  <Input className='mb-3' text='Email' />
                  <div className='mb-3'>
                    <Input className='' text='Password' />
                    <p className='text-xs text-gray-500 mt-1'>Foto KTP harus jelas, tidak boleh blur atau buram, dan terpotong. Harap tidak menggunakan flash saat mengambil foto KTP</p>
                  </div>
                  <InputImage className='mb-3' text='Foto KTP' />
                  <Input className='mb-3' text='Jenis Bank' />
                  <Input className='mb-3' text='Nomor Rekening' />
                  <div className='mb-3'>
                    <InputImage className='' text='Foto Buku Tabungan' />
                    <p className='text-xs text-gray-500 mt-1'>Foto yang terlampir merupakan halaman pertama dari buku tabungan</p>
                  </div>
                </>)}
                {(currentStep === 1) && (
                <>
                  <Input className='mb-3' text='Nama Usaha'/>
                  <Input className='mb-3' text='Kode Pos'/>
                  <Input className='mb-3' text='Alamat Usaha'/>
                  <Input className='mb-3' text='Lokasi Usaha'/>
                  <Input className='mb-3' text='Patokan'/>
                  <InputImage className='mb-3' text='Logo Usaha'/>
                </>)}
              </form>
              {(currentStep === 2) && <>
                <Image src='/images/Verifikasi.svg' width={360} height={216} alt='gambar verifikasi' />
                <div className='p-6 flex flex-col items-center justify-center text-justify'>
                  <h2 className='font-bold'>Data usaha sedang diverifikasi</h2>
                  <p className='justify-center mt-3'>Untuk mengetahui status usahamu, kamu bisa cek halaman ini secara berkala atau kamu dapat menunggu notifikasi yang akan kami kirimkan melalui emailmu</p>
                </div>
              </>}
              {(currentStep === 3) && <h1 className='font-semibold text-[#E17301] text-xl mt-5'>Verifikasi Berhasil, HORE!!!</h1>}
              {(currentStep === 0) &&
                <>
                  <div className='mt-10 flex justify-between'>
                    <div onClick={lanjut} className='w-full'>
                      <Button text='Lanjutkan' />
                    </div>
                  </div>
                </>
              }
              {(currentStep === 1) && <>
                <div className='mt-10 flex justify-between'>
                  <div onClick={kembali}>
                    <Button text='kembali' size='small' type='secondary' />
                  </div>
                  <div onClick={lanjut}>
                    <Button text='Lanjutkan' size='small' />
                  </div>
                </div>
              </>}
              {(currentStep === 3) && <>
                <div onClick={lanjut}>
                  <Button text='Lanjutkan' size='small' />
                </div>
              </>}
            </div>
        </div>
      </div>
    </>
  )
}
