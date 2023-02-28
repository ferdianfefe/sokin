import React, { Component } from 'react'

export default class KategoriCarousel extends Component {
  render() {
    return (
        <div className='rounded-[22px] w-[90px] h-[90px] overflow-hidden'>
            <div className='bg-slate-200 w-full h-full flex flex-col justify-end items-center'>
                <h3 className='text-sm font-extrabold text-white mb-3 mx-2'>Makanan</h3>
            </div>
        </div>
    )
  }
}
