import { GetStaticProps } from "next";
import { useSession } from "next-auth/react";
import { signIn } from "next-auth/react";
import { useEffect } from "react";
import prisma from "../../lib/prisma";
import Image from "next/image";
import GoogleButton from "components/elements/GoogleButton";
import Button from "components/elements/Button";
import Input from "components/elements/Input";
import Link from "next/link";

export default function SignUp() {
  return (
    <>
      <div className="relative flex-col items-center flex bg-[#F37D27]/25 w-full min-h-screen">
        <Image src='/images/SokinLogo.svg' width={100} height={100} alt='logo' className='mt-20 z-10'/>
        <h1 className="font-black text-3xl mt-3">Sokin</h1>
        <p className="font-bold">Bisa makan apa ya hari ini?</p>
        <Image src='/images/Delivery.png' width={318} height={328} alt="delivery" className="absolute top-4 left-9 z-0"/>
        <div className={`flex flex-col bg-white mt-[30px] w-full h-[500px] z-20 rounded-t-[35px] p-7`}>
          <h2 className="font-bold">Daftar Sekarang!</h2>
          <p className="text-xs text-gray-500 mb-5">Nikmati makanan lezat dengan harga terjangkau</p>
          <GoogleButton />
          <div className="flex justify-center items-center mt-5 text-gray-500">
            <div className="h-[1px] w-[20%] bg-gray-500"></div>
            <div className="mx-3 text-sm">Atau lanjut dengan email</div>
            <div className="h-[1px] w-[20%] bg-gray-500"></div>
          </div>
          <form className="flex flex-col justify-evenly h-[275px]">
            <Input text="Nama Pengguna" side="/images/profil.svg" />
            <Input text="Email" side="/images/envelope.svg" />
            <Input text="Password" side="/images/Lock.svg" />
            <Button text="Daftar" size="big" type="submit" />
          </form>
          <p className="w-full flex justify-center font-medium">
          Sudah memiliki akun? <Link className="text-[#FE8304] font-semibold" href="/signin">&nbsp;Masuk Sekarang</Link>
          </p>
        </div>
        <div className="p-4 w-full">
          <h3 className="font-semibold flex justify-center">Masuk kembali mitra Sokin</h3>
          <div className="flex justify-evenly w-full mt-2">
            <Button text="Daftar Driver" size="small" />
            <Button text="Daftar Merchant" size="small" type="secondary" />
          </div>
        </div>
      </div>
    </>
  )
}