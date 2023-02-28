import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

type Props = {
    location?: string
}

const Navbar: React.FC<Props> = ({location}: Props) => {
    return (
        <>
            <div className='flex w-auto h-[65px] shadow-[0_-1px_2px_0.1px_rgb(0,0,0,0.2)] justify-evenly p-3 rounded-t-2xl'>
                <Link href={"/testcomponents"}>
                    <div className='w-14 grid justify-items-center'>
                        <svg width="37" height="27" viewBox="0 0 31 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12.4 26.35V17.05H18.6V26.35H26.35V13.95H31L15.5 0L0 13.95H4.65V26.35H12.4Z" fill={`${location === "home" ? "#FE8304" : "#FFD1A1"}`}/>
                        </svg> 
                        <p className={`font-bold text-sm ${location === "home" ? 'text-black' : 'text-[#817A7A]'}`}>Beranda</p>
                    </div>
                </Link>
                <Link href={"/testcomponents/test"}>
                    <div className='w-14 grid justify-items-center'>
                        <svg width="27" height="27" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20.1601 25.9859H22.1217C23.1143 25.9859 23.9297 25.2296 24.0479 24.2606L25.9977 4.78595H20.0892V0H17.7612V4.78595H11.8881L12.2426 7.55116C14.2633 8.10656 16.154 9.11102 17.2885 10.2218C18.9902 11.8999 20.1601 13.637 20.1601 16.4731V25.9859ZM0 24.8042V23.6343H17.7612V24.8042C17.7612 25.4541 17.2294 25.9859 16.5676 25.9859H1.19353C0.531772 25.9859 0 25.4541 0 24.8042ZM17.7612 16.5322C17.7612 7.07847 0 7.07847 0 16.5322H17.7612ZM0.0236343 18.9074H17.7494V21.2709H0.0236343V18.9074Z" fill={`${location === "pesan" ? "#FE8304" : "#FFD1A1"}`}/>
                        </svg>                        
                        <p className={`font-bold text-sm ${location === "pesan" ? 'text-black' : 'text-[#817A7A]'}`}>Pesan</p>
                    </div>
                </Link>
                <Link href={""}>
                    <div className='w-14 grid justify-items-center'>
                        <svg width="27" height="27" viewBox="0 0 27 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11.8482 2.1226C12.6862 1.0458 14.3138 1.0458 15.1518 2.1226L15.7664 2.91239C16.2881 3.58274 17.1631 3.87134 17.9812 3.64285L18.9115 3.38303C20.2045 3.02189 21.4984 3.9543 21.565 5.29518L21.6246 6.49739C21.6652 7.31602 22.18 8.03561 22.9416 8.33851L24.0061 8.7619C25.2204 9.24486 25.7001 10.7102 25.0064 11.8178L24.3209 12.9122C23.8953 13.5918 23.8953 14.4547 24.3209 15.1343L25.0064 16.2287C25.7001 17.3363 25.2204 18.8017 24.0061 19.2846L22.9416 19.708C22.18 20.0109 21.6652 20.7305 21.6246 21.5491L21.565 22.7513C21.4984 24.0922 20.2045 25.0246 18.9115 24.6635L17.9812 24.4037C17.1631 24.1752 16.2881 24.4638 15.7664 25.1341L15.1518 25.9239C14.3138 27.0007 12.6862 27.0007 11.8482 25.9239L11.2336 25.1341C10.7119 24.4638 9.83686 24.1752 9.01877 24.4037L8.08852 24.6635C6.79547 25.0246 5.50158 24.0922 5.43504 22.7513L5.37539 21.5491C5.33477 20.7305 4.82005 20.0109 4.05843 19.708L2.99389 19.2846C1.77955 18.8017 1.29988 17.3363 1.99359 16.2287L2.6791 15.1343C3.10473 14.4547 3.10473 13.5918 2.6791 12.9122L1.99359 11.8178C1.29988 10.7102 1.77955 9.24486 2.99389 8.7619L4.05843 8.33851C4.82005 8.03561 5.33477 7.31602 5.37539 6.49739L5.43504 5.29518C5.50158 3.9543 6.79547 3.02189 8.08851 3.38303L9.01876 3.64285C9.83686 3.87134 10.7119 3.58274 11.2336 2.9124L11.8482 2.1226Z" fill={`${location === "promo" ? "#FE8304" : "#FFD1A1"}`}/>
                        <circle cx="9.52326" cy="9.94196" r="2.61628" fill="white"/>
                        <circle cx="9.53307" cy="9.95165" r="1.57958" fill="#FFD1A1"/>
                        <circle cx="16.4302" cy="17.6861" r="2.61628" fill="white"/>
                        <circle cx="16.4397" cy="17.6954" r="1.57919" fill="#FFD1A1"/>
                        <line x1="8.39992" y1="20.2256" x2="17.7268" y2="6.90539" stroke="white" stroke-width="1.46512"/>
                        </svg>                        
                        <p className={`font-bold text-sm ${location === "promo" ? 'text-black' : 'text-[#817A7A]'}`}>Promo</p>
                    </div>
                </Link>
                <Link href={""}>
                    <div className='w-14 grid justify-items-center'>
                        <svg width="27" height="27" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 0C5.376 0 0 5.376 0 12C0 18.624 5.376 24 12 24C18.624 24 24 18.624 24 12C24 5.376 18.624 0 12 0ZM12 3.6C13.992 3.6 15.6 5.208 15.6 7.2C15.6 9.192 13.992 10.8 12 10.8C10.008 10.8 8.4 9.192 8.4 7.2C8.4 5.208 10.008 3.6 12 3.6ZM12 20.64C9 20.64 6.348 19.104 4.8 16.776C4.836 14.388 9.6 13.08 12 13.08C14.388 13.08 19.164 14.388 19.2 16.776C17.652 19.104 15 20.64 12 20.64Z" fill={`${location === "akun" ? "#FE8304" : "#FFD1A1"}`}/>
                        </svg>                        
                        <p className={`font-bold text-sm ${location === "akun" ? 'text-black' : 'text-[#817A7A]'}`}>Akun</p>
                    </div>
                </Link>
            </div>
        </>
    )
}

export default Navbar