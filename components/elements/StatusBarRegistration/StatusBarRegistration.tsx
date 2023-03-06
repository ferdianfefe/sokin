import React, { Component } from 'react'
import Link from 'next/link'

interface Props {
  pageIndex?: number,
  type?: string,
};

const StatusBarRegistration: React.FC<Props> = ({pageIndex, type}: Props) => {
    console.log(pageIndex)
    return (
        <div className='w-full h-full pb-6 bg-white rounded-b-[50px] rounded-bl-[50px]'>
          <div className='flex flex-col gap-4 py-6 px-5'>
            <div className='flex'>
              
              {/* X button left upper corner */}
              
              {type === "Merchant" &&
                <Link href='/merchant/signin'>
                  <svg className='items-center absolute left-5 top-6' width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M24 2.41714L21.5829 0L12 9.58286L2.41714 0L0 2.41714L9.58286 12L0 21.5829L2.41714 24L12 14.4171L21.5829 24L24 21.5829L14.4171 12L24 2.41714Z" fill="#565351"/>
                  </svg>
                </Link>
              }

              {type === "Driver" &&
                <Link href='#'>
                  <svg className='items-center absolute left-5 top-6' width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M24 2.41714L21.5829 0L12 9.58286L2.41714 0L0 2.41714L9.58286 12L0 21.5829L2.41714 24L12 14.4171L21.5829 24L24 21.5829L14.4171 12L24 2.41714Z" fill="#565351"/>
                  </svg>
                </Link>
              }

              <span className='mx-auto my-0'>
                <h1 className='font-bold text-[#565351] text-md'>Pendaftaran Akun {type}</h1>
              </span>
  
            </div>
  
          </div>

          <div className='flex px-10 rounded-b-full rounded-br-full text-center text-[#FE8304] gap-2 font-medium text-[12px] justify-center w-full h-auto'>
            
            <div className='w-full flex relative'>
              {/* LINE */}
                <div className= {` 

                ${pageIndex === 1 ? 'bg-[#FE8304] w-[0px] h-1 mt-[10px] z-30 absolute ml-8': ''}
                ${pageIndex === 2 ? 'bg-[#FE8304] w-[100px] h-1 mt-[10px] z-30 absolute ml-8': ''}
                ${pageIndex === 3 ? 'bg-[#FE8304] w-[190px] h-1 mt-[10px] z-30 absolute ml-8': ''}
                ${pageIndex === 4 ? 'bg-[#FE8304] w-[260px] h-1 mt-[10px] z-30 absolute ml-8': ''}

                 w-[100px] bg-[#FE8304] h-1 mt-[10px] z-30 absolute ml-8`}
                 ></div>
              {/* <div className='h-1 absolute bg-'></div> */}
                <div className= {` bg-[#FFF0E0] h-1 w-[260px] mt-[10px] z-20 absolute ml-8`}></div>

                <div className='flex w-full'>

                  <div className='w-1/4 flex flex-col gap-1 z-40'>
                    <div className={`${pageIndex === 1 ? 'flex justify-center items-center rounded-full bg-[#FE8304] w-6 h-6 text-[#FFF0E0] my-0 mx-auto' : 'flex justify-center items-center rounded-full bg-[#FE8304] w-6 h-6 text-[#FFF0E0] my-0 mx-auto'} 
                    
                    `}>
                      {pageIndex === 1 ? <div className='w-3 h-3 bg-[#FFF0E0] rounded-full'></div> : <div>1</div>}
                      
                    </div>
                     <p>Informasi Pemilik</p>
                    
                    
                  </div>

                  <div className='w-1/4 flex flex-col gap-1 z-40'>
                    <div className = {`
                      
                      ${pageIndex === 1 ? 'flex justify-center items-center rounded-full text-[#FE8304] w-6 h-6 bg-[#FFF0E0] my-0 mx-auto' : ''}
                      ${pageIndex === 2 ? 'flex justify-center items-center rounded-full bg-[#FE8304] w-6 h-6 text-[#FFF0E0] my-0 mx-auto' : ''}
                      ${pageIndex === 3 || pageIndex === 4 ? 'flex justify-center items-center rounded-full bg-[#FE8304] w-6 h-6 text-[#FFF0E0] my-0 mx-auto' : ''}
                      
                      
                    `}>
                    {pageIndex === 2 ? <div className='w-3 h-3 bg-[#FFF0E0] rounded-full'></div> : <div>2</div>}  
                    
                    </div>
                    
                    {type === 'Driver' && <p>Informasi Kendaraan</p>}
                    {type === 'Merchant' && <p>Usaha</p>}

                  </div>
                  
                  <div className='w-1/4 flex flex-col gap-1 z-40'>
                    <div className = 
                    {`
                    
                      ${pageIndex === 3 ? 'flex justify-center items-center rounded-full bg-[#FE8304] w-6 h-6 text-[#FFF0E0] my-0 mx-auto' : '' }
                      ${pageIndex === 4 ? 'flex justify-center items-center rounded-full bg-[#FE8304] w-6 h-6 text-[#FFF0E0] my-0 mx-auto' : '' }
                      ${pageIndex === 1 || pageIndex === 2 ? 'flex justify-center items-center rounded-full text-[#FE8304] w-6 h-6 bg-[#FFF0E0] my-0 mx-auto' : '' }
                    
                    `}>

                      
                    {pageIndex === 3 ? <div className='w-3 h-3 bg-[#FFF0E0] rounded-full'></div> : <div>3</div>}  
                    </div>
                    <p>Verifikasi</p>
                  </div>

                  <div className='w-1/4 flex flex-col gap-1 z-40'>
                    <div className={`${pageIndex === 4 ? 'flex justify-center items-center rounded-full bg-[#FE8304] w-6 h-6 text-[#FFF0E0] my-0 mx-auto' : 'flex justify-center items-center rounded-full text-[#FE8304] w-6 h-6 bg-[#FFF0E0] my-0 mx-auto'}`}>
                    {pageIndex === 4 ? <div className='w-3 h-3 bg-[#FFF0E0] rounded-full'></div> : <div>4</div>}  

                    </div>
                      <p>Akun terdaftar</p>

                  </div>
                </div>
            </div>


          </div>
        </div>
    )
  
}
export default StatusBarRegistration;