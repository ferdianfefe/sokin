import { signIn } from 'next-auth/react'
import Link from 'next/link'
import React from 'react'

type Props = {
    text: string
    type?: string
    size?: string
    href?: string
}

const Button: React.FC<Props> = ({text, type, size, href}: Props) => {
    return (
        <Link href={`${href}`}>
            <button className={`
                font-black justify-center rounded-[18px] shadow-[0_3px_3px_0.1px_rgb(400,100,0,0.3),inset_0_3px_7px_6px_rgb(500,500,500,0.2)]
                ${type === 'secondary' ? 'bg-gray-100 text-black': 'bg-[#FE8304] text-white' }
                ${size === 'small' ? 'w-[153px] h-[33px] text-[14px]' : 'w-full h-[39px] text-[17px]'}
            `}>
            {text}
            </button>
        </Link>
    )
}

export default Button