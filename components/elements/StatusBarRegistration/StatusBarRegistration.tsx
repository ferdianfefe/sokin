import React, { Component } from 'react'

interface Props {
  pageIndex?: Number
};

const StatusBarRegistration: React.FC<Props> = ({pageIndex}: Props) => {
    // linenya masih belom bisa
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

          <div className='flex px-10 rounded-b-full rounded-br-full text-center text-[#FE8304] gap-2 font-medium text-[12px] justify-center w-full h-auto'>
            
            <div className='w-full flex relative'>
              {/* LINE */}
              
                {/* <div className=' bg-[#FE8304] h-1 w-[200px] mt-[10px] z-20 absolute ml-8'></div> */}

                <div className='flex w-full'>

                  <div className='w-1/4 flex flex-col gap-1 z-20'>
                    <div className='flex justify-center items-center rounded-full bg-[#FE8304] w-6 h-6 text-white my-0 mx-auto'>
                      {/* <div className='bg-[#FE8304] h-1 w-[200px] absolute'></div> */}
                      1
                    </div>
                    <p>Informasi Pemilik</p>
                  </div>

                  <div className='w-1/4 flex flex-col gap-1 z-20'>
                    <div className='flex justify-center items-center rounded-full bg-[#FE8304] w-6 h-6 text-white my-0 mx-auto'>2</div>
                    <p>Usaha</p>
                  </div>
                  
                  <div className='w-1/4 flex flex-col gap-1 z-20'>
                    <div className='flex justify-center items-center rounded-full bg-[#FE8304] w-6 h-6 text-white my-0 mx-auto'>3</div>
                    <p>Verifikasi</p>
                  </div>

                  <div className='w-1/4 flex flex-col gap-1 z-20'>
                    <div className='flex justify-center items-center rounded-full bg-[#FE8304] w-6 h-6 text-white my-0 mx-auto'>4</div>
                      <p>Akun terdaftar</p>

                  </div>
                </div>
            </div>


          </div>
        </div>
    )
  
}
export default StatusBarRegistration;