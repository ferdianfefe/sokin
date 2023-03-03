import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function SignupMerchant2() {
  return (
    <>
      <div className='bg-white p-3 w-full rounded-3xl'>
        <div className='flex items-center'>
        <Link href='/merchant'>
          <Image src={'/images/ExitIcon.svg'} width={24} height={24} alt='exit icon' />
        </Link>
        <h2 className='text-[#565351] font-semibold'>Pendaftaran akun Merchant</h2>
        </div>

      </div>
    </>
  )
}
