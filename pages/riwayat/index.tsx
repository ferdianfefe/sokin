import DefaultLayout from "components/layout/DefaultLayout";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";

export default function Riwayat() {
    const router = useRouter();

    const [promo, setPromo] = useState([{
        title: "Promo Ongkir",
        maxDisc: 10000,
        minOrder: 50000,
    }]);

    useEffect(() => {
        fetch('api/order', {
            method: 'GET',
        }).then((res) => res.json()).then((data) => {
            console.log(data);
        })
    })
    
  return (
    <DefaultLayout location="pesan">
        <div className="min-h-screen">
            <div className="w-full min-h-full z-10 bg-[#FFFFFF] fixed">
            <div className="flex items-center px-6 pt-6 mb-4">
                <h1 className="flex items-center text-2xl font-bold text-neutral-700 ml-4">
                <p className="hover:cursor-pointer" onClick={() => router.push('/pesan')}>
                    X
                </p>
                {/* <p>-</p> */}
                </h1>
                <h1 className="text-2xl font-semibold text-neutral-700 ml-4">
                Riwayat Pemesanan
                </h1>
            </div>
            </div>
        </div>
    </DefaultLayout>
  );
}