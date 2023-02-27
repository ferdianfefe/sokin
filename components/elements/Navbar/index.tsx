import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

type Props = {
    location?: string
}

const Navbar: React.FC<Props> = ({location}: Props) => {
    return (
        <div className='flex w-[390px] h-[65px] fixed shadow-lg'>
          <Link href={""}>
            <Image priority src="public/images/HomeLogo.svg" alt="Home Logo"/>
          </Link>  
        </div>
    )
}

export default Navbar