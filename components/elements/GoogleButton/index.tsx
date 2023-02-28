import React from 'react'
import { signIn } from 'next-auth/react'
import Image from 'next/image'

const GoogleButton: React.FC = () => {
    return(
        <div className='flex border-[1px] rounded-3xl h-9 justify-center items-center border-[#FE8304]' onClick={() => signIn('google', {callbackUrl: '/'})}>
            <Image src='/images/GoogleIcon.svg' width={20} height={20} alt='google' className=''/>
            <h3 className='ml-4 font-semibold text-[#FE8304]'>Masuk dengan Google</h3>
        </div>
    )
}
export default GoogleButton