import EditButton from "components/elements/EditButton";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

const ItemMerchant: React.FC<{
  id: string;
  title: string;
  price: number;
  description: string;
  stock: number;
  image?: string;
  className?: string;
}> = ({ id, title, price, description, stock, image, className }): JSX.Element => {
  const [count, setCount] = useState(stock);

  const router = useRouter();

  const edit = (e: any) => {
    e.preventDefault();
    router.push({
      pathname: `/merchant/katalog/add`,
      query: { id },
    });
    console.log("edit" + id);
  }
  
    return (
    <div
      className={`${className} w-full h-32 shadow-[0_1px_4px_1px_rgb(300,75,0,0.13)] items-center justify-between flex rounded-xl pr-2`}
    >
      <div className="w-36 h-28 p-1">
        <Image
          src={'https://cdn-icons-png.flaticon.com/512/1205/1205761.png'}
          alt={title}
          height={100}
          width={100}
          className="object-cover rounded-xl ml-2 shadow-[0_0_8px_2px_rgb(400,100,0,0.1)]"
        />
      </div>
      <div className="h-full w-full ml-3 mb-2">
        <div className="w-full h-24 p-2">
          <div className="flex justify-between">
            <div className="font-semibold flex flex-col">
              <h3>{title}</h3>
              <p className="text-sm">Rp{price}</p>
            </div>
            <div onClick={(e) => edit(e)}>
              {/* <EditButton className="mt-1" /> */}
              <Image
                src={'/images/EditCircle.svg'}
                alt={'edit'}
                height={30}
                width={30}
                className="mt-1"
              />
            </div>
          </div>
          <p className="text-sm text-gray-500">{description}</p>
        </div>
        <div className="h-7 w-[94%] mx-auto bg-c-orange-200 items-center flex py-1 px-3 rounded-xl justify-between ">
          <h3 className="font-semibold text-center ml-3">Stok</h3>
          <div className="flex items-center justify-evenly w-4/6 mr-4">
            <button className="w-8 h-5 bg-white text-sm font-semibold rounded" onClick={() => setCount(count - 1)}>
              -
            </button>
            <h3 className="font-semibold">{count}</h3>
            <button className="w-8 h-5 bg-white text-sm font-semibold rounded" onClick={() => setCount(count + 1)}>
              +
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemMerchant;
