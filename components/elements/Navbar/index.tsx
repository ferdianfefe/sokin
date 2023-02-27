import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

type Props = {
    location?: string
}

const Navbar: React.FC<Props> = ({location}: Props) => {
    return (
        <>
            <div className='flex w-[390px] h-[65px] fixed shadow-[0_-1px_2px_0.1px_rgb(0,0,0,0.2)] justify-evenly p-2'>
                <Link href={""}>
                    <div className='grid justify-items-center'>
                        <Image priority src="/public/images/HomeLogo.svg" width={31} height={27} color={`${location === "home" ? "#FE8304" : "#FFD1A1"}`} alt="Home Logo"/>
                        <p className='font-bold '>Beranda</p>
                    </div>
                </Link>
                <Link href={""}>
                    <div className='grid justify-items-center'>
                        <Image priority src="/public/images/PesanLogo.svg" width={26} height={27} color={`${location === "pesan" ? "#FE8304" : "#FFD1A1"}`} alt="Pesan Logo"/>
                        <p className='font-bold '>Pesan</p>
                    </div>
                </Link>
                <Link href={""}>
                    <div className='grid justify-items-center'>
                        <Image priority src="/public/images/PromoLogo.svg" width={27} height={27} color={`${location === "promo" ? "#FE8304" : "#FFD1A1"}`} alt="Promo Logo"/>
                        <p className='font-bold '>Promo</p>
                    </div>
                </Link>
                <Link href={""}>
                    <div className='grid justify-items-center'>
                        <Image priority src="/public/images/AkunLogo.svg" width={27} height={27} color={`${location === "akun" ? "#FE8304" : "#FFD1A1"}`} alt="Akun Logo"/>
                        <p className='font-bold '>Akun</p>
                    </div>
                </Link>
            </div>
        </>
    )
}

export default Navbar