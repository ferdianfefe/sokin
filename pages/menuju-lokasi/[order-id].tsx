import Image from "next/image";
import MapContainer from "components/elements/MapContainer";
import Button from "components/elements/Button";

const MenujuLokasi: React.FC = (): JSX.Element => {
  return (
    <div className="">
      <div className="flex items-center mb-4 px-6 pt-6">
        <div className="h-6 w-6 relative">
          <Image src="/images/icons/left-arrow.svg" alt="Left arrow" fill />
        </div>
        <h1 className="text-xl text-[#565351] ml-4">
          Sedang menuju ke Restoran
        </h1>
      </div>
      <div className="flex justify-between px-6 mb-2">
        <div className="flex">
          <div className="h-10 w-10 relative">
            <Image src="/images/icons/location.svg" alt="Phone" fill />
          </div>
          <div className="">
            <p className="mb-2">Tempat</p>
            <p className="font-bold">McDonalds cabang Kaliurang</p>
          </div>
        </div>
        <div className="">
          <p className="font-bold mb-2">Estimasi</p>
          <p className="text-[#818181]">45 mnt</p>
        </div>
      </div>
      <MapContainer />
      <div className="px-12 mt-4">
        <div className="flex justify-between mb-4">
          <div className="">
            <p className="font-bold">Pemesan</p>
            <p className="text-sm">Muhammad Irfan</p>
          </div>
          <div className="bg-[#FFF0E0] p-2 rounded-xl flex">
            <div className="w-6 h-6 relative">
              <Image src="/images/icons/star.svg" alt="Phone" fill />
            </div>
            <p className="font-bold text-xl ml-2">98</p>
          </div>
        </div>
        <div className="flex justify-between mb-6">
          <div className="">
            <p className="font-bold">Paket Panas 1</p>
          </div>
          <p className="font-bold text-base ml-2">Rp 35.000</p>
        </div>
        <Button text="Pesanan Diambil" className="w-[80px]"/>
      </div>
    </div>
  );
};

export default MenujuLokasi;
