import EditButton from "components/elements/EditButton";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const ItemMerchant: React.FC<{
  title: string;
  price: number;
  description: string;
  stock: number;
  image?: string;
  className?: string;
}> = ({ title, price, description, stock, image, className }): JSX.Element => {
  const [count, setCount] = useState(stock);
  
    return (
    <div
      className={`${className} w-full h-32 shadow-[0_0_10px_2px_rgb(400,100,0,0.2)] items-center justify-between flex rounded-xl pr-2`}
    >
      <div className="w-32 h-28 p-1">
        <Image
          src={image}
          height={90}
          width={90}
          className="h-full object-cover rounded-xl ml-2 shadow-[0_0_10px_1px_rgb(400,100,0,0.2)]"
        />
      </div>
      <div className="h-full w-full ml-3">
        <div className="w-full h-24 p-2">
          <div className="flex justify-between">
            <div className="font-semibold flex flex-col">
              <h3>{title}</h3>
              <p className="text-sm">Rp{price}</p>
            </div>
            <EditButton className="mt-1" />
          </div>
          <p className="text-sm text-gray-500">{description}</p>
        </div>
        <div className="h-7 w-[94%] mx-auto bg-c-orange-200 items-center flex py-1 px-3 rounded-xl justify-between">
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
