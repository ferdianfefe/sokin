import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import { useState } from 'react'
import Input from 'components/elements/Input'
import Button from 'components/elements/Button'

export default function SignupOne() {

  const [currentStep, setCurrentState] = useState(0)

  return (
    <>
      <div className='bg-[#F37D27]/25 w-full h-screen'>
        <div className='bg-white p-6 w-full rounded-b-[40px] flex-col flex h-[150px] z-10'>
          <div className='flex justify-center'>
            <Link href='/merchant/signin'>
            <Image src={'/images/ExitIcon.svg'} width={24} height={24} alt='exit icon'  className='absolute top-[26px] left-5'/>
            </Link>
            <h1 className='text-[#565351] font-semibold text-xl'>Pendaftaran akun Merchant</h1>
          </div>
        </div>
        <div className='w-full top-20 items-center flex-col flex h-full'>
            <h1 className='font-semibold text-[#E17301] text-xl mt-5'>Informasi Pemilik</h1>
            <div className='bg-white mt-4 rounded-t-[40px] w-full px-9 py-12 flex flex-col justify-evenly h-[1200px]'>
              <form>  
                <div>
                  <Input className='mb-3' text='Nama' />
                  <p className='text-xs text-gray-500 mt-1'>Nama harus ditulis persis seperti yang tertera pada KTP, Termasuk jika ada jabatan, titik, koma, dll</p>
                </div>
                <Input className='mb-3' text='Nomor KTP' />
                <Input className='mb-3' text='Domisili' />
                <Input className='mb-3' text='Alamat' />
                <Input className='mb-3' text='NomorTelepon' />
                <Input className='mb-3' text='Email' />
                <div>
                  <Input className='mb-3' text='Password' />
                  <p className='text-xs text-gray-500 mt-1'>Foto KTP harus jelas, tidak boleh blur atau buram, dan terpotong. Harap tidak menggunakan flash saat mengambil foto KTP</p>
                </div>
                <Input className='mb-3' text='Foto KTP' />
                <Input className='mb-3' text='Jenis Bank' />
                <Input className='mb-3' text='Nomor Rekening' />
                <div>
                  <Input className='mb-3' text='Foto Buku Tabungan' />
                  <p className='text-xs text-gray-500 mt-1'>Foto yang terlampir merupakan halaman pertama dari buku tabungan</p>
                </div>
                <Input className='mb-3' text='Nama Usaha'/>
                <Input className='mb-3' text='Kode Pos'/>
                <Input className='mb-3' text='Alamat Usaha'/>
                <Input className='mb-3' text='Lokasi Usaha'/>
                <Input className='mb-3' text='Patokan'/>
                <Input className='mb-3' text='Logo Usaha'/>
              </form>
              <div className='mt-10 flex justify-between'>
                <div>
                  <Button text='Kembali' size='small' type='secondary' className='mr-2' href='/merchant/signup'/>
                </div>
                <div>
                 <Button text='Lanjutkan' size='small' />
                </div>
              </div>
            </div>
        </div>
      </div>
    </>
  )
}
