import React, { Component } from 'react'

type Index = {
  pageIndex: number
}

const StatusBarRegistration: React.FC<Index> = ({pageIndex}: Index) => {
  
    return (
        <div className='w-full h-full pb-6 bg-white rounded-b-[50px] rounded-bl-[50px]'>
          <div className='flex flex-col gap-4 py-6 px-5'>
            <div className='flex'>
              {/* X button left upper corner */}
              <svg className='items-center absolute left-5 top-6' width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M24 2.41714L21.5829 0L12 9.58286L2.41714 0L0 2.41714L9.58286 12L0 21.5829L2.41714 24L12 14.4171L21.5829 24L24 21.5829L14.4171 12L24 2.41714Z" fill="#565351"/>
              </svg>
  
              <span className='mx-auto my-0'>
                <h1 className='font-bold text-[#565351] text-md'>Pendaftaran Akun Merchant</h1>
              </span>
  
            </div>
  
          </div>

          <div className='flex px-10 rounded-b-full rounded-br-full text-center text-[#FE8304] gap-2 font-medium text-[12px] justify-center '>
            <div className='bg-[#FE8304] h-1 w-[64%] absolute mt-[10px] z-0'>

            </div>
            <div className='w-1/4 flex flex-col gap-1 z-20'>
              <button className='rounded-full bg-[#FE8304] w-6 h-6 text-white my-0 mx-auto'>1</button>
              <p>Informasi Pemilik</p>
            </div>

            <div className='w-1/4 flex flex-col gap-1 z-20'>
              <button className='rounded-full bg-[#FE8304] w-6 h-6 text-white my-0 mx-auto'>2</button>
              <p>Usaha</p>
            </div>
            
            <div className='w-1/4 flex flex-col gap-1 z-20'>
              <button className='rounded-full bg-[#FE8304] w-6 h-6 text-white my-0 mx-auto'>3</button>
              <p>Verifikasi</p>
            </div>

            <div className='w-1/4 flex flex-col gap-1 z-20'>
              {/* <button 
                className={`rounded-full bg-[#FE8304] w-6 h-6 text-white my-0 mx-auto ${pageIndex === 4 ? '' :'' }`}>
                4
              </button> */}
              <button 
                className={`rounded-full bg-[#FE8304] w-6 h-6 p-[6px] text-white my-0 mx-auto ${pageIndex === 4 ? '' :'' }`}>
                <div className='w-full h-full rounded-full bg-[#FFEAD3]'></div>
              </button>
              
              <p>Akun Terdaftar</p>
            </div>

          </div>
        </div>
    )
  
}
export default StatusBarRegistration;