import React from "react";
import Link from "next/link";
import Image from "next/image";

type Props = {
  location?: string;
};

const NavbarMerchant: React.FC<Props> = ({ location }: Props) => {
  return (
    <div className="sticky bottom-0">
      <div className="flex w-auto h-[65px] shadow-[0_-1px_2px_0.1px_rgb(0,0,0,0.2)] justify-evenly p-3 rounded-t-2xl">
        <Link href={"/testcomponents"}>
          <div className="w-14 grid justify-items-center">
            <svg
              width="37"
              height="27"
              viewBox="0 0 31 27"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
                
              <path
                d="M12.4 26.35V17.05H18.6V26.35H26.35V13.95H31L15.5 0L0 13.95H4.65V26.35H12.4Z"
                fill={`${location === "home" ? "#FE8304" : "#FFD1A1"}`}
              />
            </svg>
            <p
              className={`font-bold text-sm ${
                location === "home" ? "text-black" : "text-[#817A7A]"
              }`}
            >
              Beranda
            </p>
          </div>
        </Link>
        <Link href={"/testcomponents/test"}>
            <div className="w-14 grid justify-items-center">
                <svg width="30" height="25" viewBox="0 0 30 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path 
                    d="M16.6667 0C9.76389 0 4.16667 5.59722 4.16667 12.5H0L5.40278 17.9028L5.5 18.0972L11.1111 12.5H6.94444C6.94444 7.125 11.2917 2.77778 16.6667 2.77778C22.0417 2.77778 26.3889 7.125 26.3889 12.5C26.3889 17.875 22.0417 22.2222 16.6667 22.2222C13.9861 22.2222 11.5556 21.125 9.80556 19.3611L7.83333 21.3333C10.0972 23.5972 13.2083 25 16.6667 25C23.5694 25 29.1667 19.4028 29.1667 12.5C29.1667 5.59722 23.5694 0 16.6667 0ZM15.2778 6.94444V13.8889L21.2222 17.4167L22.2222 15.7361L17.3611 12.8472V6.94444H15.2778Z" 
                    fill={`${location === "riwayat" ? "#FE8304" : "#FFD1A1"}`} />
                </svg>
                <p
                className={`font-bold text-sm ${
                    location === "riwayat" ? "text-black" : "text-[#817A7A]"
                }`}
                >
                Riwayat
                </p>
            </div>
        </Link>
        <Link href={""}>
          <div className="w-14 grid justify-items-center">
            <svg width="23" height="25" viewBox="0 0 23 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path 
                d="M11.1111 0L0 8.33333V25H22.2222V8.33333L11.1111 0ZM11.8056 13.1944C11.8056 14.3472 10.875 15.2778 9.72222 15.2778V20.8333H8.33333V15.2778C7.18056 15.2778 6.25 14.3472 6.25 13.1944V9.02778H7.63889V13.1944H8.33333V9.02778H9.72222V13.1944H10.4167V9.02778H11.8056V13.1944ZM15.2778 20.8333H13.8889V15.9722H12.5V11.8056C12.5 10.2778 13.75 9.02778 15.2778 9.02778V20.8333Z" 
                fill={`${location === "katalog" ? "#FE8304" : "#FFD1A1"}`}/>
            </svg>
            <p
              className={`font-bold text-sm ${
                location === "katalog" ? "text-black" : "text-[#817A7A]"
              }`}
            >
              Katalog
            </p>
          </div>
        </Link>
        <Link href={""}>
          <div className="w-14 grid justify-items-center">
            <svg
              width="27"
              height="27"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 0C5.376 0 0 5.376 0 12C0 18.624 5.376 24 12 24C18.624 24 24 18.624 24 12C24 5.376 18.624 0 12 0ZM12 3.6C13.992 3.6 15.6 5.208 15.6 7.2C15.6 9.192 13.992 10.8 12 10.8C10.008 10.8 8.4 9.192 8.4 7.2C8.4 5.208 10.008 3.6 12 3.6ZM12 20.64C9 20.64 6.348 19.104 4.8 16.776C4.836 14.388 9.6 13.08 12 13.08C14.388 13.08 19.164 14.388 19.2 16.776C17.652 19.104 15 20.64 12 20.64Z"
                fill={`${location === "akun" ? "#FE8304" : "#FFD1A1"}`}
              />
            </svg>
            <p
              className={`font-bold text-sm ${
                location === "akun" ? "text-black" : "text-[#817A7A]"
              }`}
            >
              Akun
            </p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default NavbarMerchant;
