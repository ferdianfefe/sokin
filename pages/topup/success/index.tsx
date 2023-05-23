import DefaultLayout from "components/layout/DefaultLayout";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect } from "react";

const TopupSuccess: React.FC = (): JSX.Element => {

  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push("/cart");
    }, 3000);
  }, [])

  return (
    <DefaultLayout location="topup-success" className="">
      <div
        className={`min-h-screen top-0 left-0 w-full h-full transition-all duration-300 z-15 flex flex-col justify-center items-center`}
      >
        <p className="font-semibold text-2xl mb-10">Top up Berhasil</p>
        <div className="relative w-[200px] h-[200px] mb-48">
          <Image
            src={"/images/icons/check-circles.svg"}
            alt="check-circles"
            fill
          />
        </div>
        <small className="text-neutral-700">Saldomu berhasil ditambah</small>
      </div>
    </DefaultLayout>
  );
};

export default TopupSuccess;
