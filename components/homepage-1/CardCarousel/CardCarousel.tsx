import React, { Component } from 'react'

export default class CardCarousel extends Component {
  render() {
    return (
      <div className="w-[160px] h-[252px] rounded-[20px] shadow-md shadow-[#FE8304]/20 overflow-hidden">
        <div className='bg-slate-200 w-full h-[60%]'>

        </div>

        <div className='bg-white p-3 flex flex-col gap-1'>
          <p className='text-xs text-[#574E4E]'>1.2km</p>
          <h2 className='font-bold text-[14px]'>Warung Pak Slamet</h2>
          
          <div className='flex items-center gap-2'>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7.35173 1.44311C7.57636 0.852294 8.42364 0.852294 8.64827 1.44312L10.0973 5.45689C10.1987 5.72342 10.457 5.9 10.7456 5.9H14.3063C14.9638 5.9 15.251 6.71921 14.7341 7.11989L12.2 9.4C11.9667 9.58081 11.8761 9.88825 11.9749 10.1643L12.9 14.0866C13.1253 14.716 12.3954 15.2575 11.8448 14.8695L8.40243 12.6862C8.1617 12.5166 7.8383 12.5166 7.59757 12.6862L4.15529 14.8695C3.60462 15.2575 2.87478 14.716 3.1 14.0866L4.02513 10.1643C4.12389 9.88825 4.03334 9.58081 3.8 9.4L1.26596 7.11989C0.748953 6.71921 1.03621 5.9 1.6937 5.9H5.25437C5.54297 5.9 5.8013 5.72342 5.90263 5.45689L7.35173 1.44311Z" fill="#FE8304" stroke="#FE8304" stroke-width="0.700145" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <p className='text-sm'>
              4.7
            </p>
          </div>
        </div>

      </div>
    )
  }
}
