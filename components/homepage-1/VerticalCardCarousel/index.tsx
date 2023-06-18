import React, { use } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

// declare type of slide
type Slide = {
  id: string;
  name: string;
  jarak: number;
  rating: number;
  merchantLogo: string;
};

const VerticalCardCarousel = (data: any) => {
  const [slides, setSlides] = useState<Slide[]>([]);

  useEffect(() => {
    fetch("api/profile/merchant", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        let data2 = [];
        let selected = [];
        for (let i = 0; i < data.length; i++) {
          selected.push(false);
        }
        for (let i = 0; i < 4; i++) {
          let rand = Math.floor(Math.random() * data.length);
          while (selected[rand]) {
            rand = Math.floor(Math.random() * data.length);
          }
          selected[rand] = true;
          data2.push(data[rand]);
        }
        setSlides(data2);
      });
  }, []);

  return (
    <div className="w-full h-full overflow-auto flex no-scrollbar">
      <div className="w-full pl-7 h-[286px] flex ">
        <div className="flex items-center gap-3 h-[280px]">
          {data?.data?.length == 0 &&
            slides &&
            slides.map((slide) => (
              <div key={slide.id}>
                <VerticalCard
                  img={slide.merchantLogo}
                  id={slide.id}
                  name={slide.name}
                  jarak={Math.round(Math.random() * (10 - 1) + 1)}
                  rating={Math.round(Math.random() * (5 - 1) + 1)}
                />
              </div>
            ))}
          {data?.data?.length > 0 &&
            data.data.map((item: any) => (
              <div key={item.id}>
                <VerticalCard
                  img={item.merchantLogo}
                  id={item.id}
                  name={item.name}
                  jarak={Math.round(Math.random() * (10 - 1) + 1)}
                  rating={Math.round(Math.random() * (5 - 1) + 1)}
                />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default VerticalCardCarousel;

const VerticalCard = ({
  img,
  id,
  name,
  jarak,
  rating,
}: {
  img: string;
  id: string;
  name: string;
  jarak: number;
  rating: number;
}) => {
  const router = useRouter();

  const goTo = () => {
    router.push({
      pathname: "/pesan/merchant",
      query: { id: id },
    });
  };
  return (
    <div onClick={goTo}>
      <div className="flex flex-col w-[160px] h-[283px] rounded-[20px] bg-[#FFF] shadow-[-3px 2px 5px 1px rgba(255, 183, 109, 0.37)] border-[1px] border-[#FE8304]/10 overflow-hidden shadow-card">
        <div className="flex h-[178px] w-full overflow-hidden">
          {img && (
            <Image
              src={img}
              alt="Logo"
              width={400}
              height={300}
              className="aspect-square"
            />
          )}
          {!img && (
            <div className="w-[190px] h-[190px]">
              <Image
                src={"https://cdn-icons-png.flaticon.com/512/1205/1205761.png"}
                alt=""
                width={400}
                height={300}
                className="object-cover"
              />
            </div>
          )}
        </div>

        {/* <div className='flex flex-col w-full bg-slate-200 p-3'> */}
        <div className="flex flex-col w-full  p-3">
          <p className="text-xs text-[#574E4E]">{jarak} km</p>
          <h2 className="font-bold text-[14px]">{name}</h2>

          <div className="flex items-center gap-2 mt-1">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.35173 1.44311C7.57636 0.852294 8.42364 0.852294 8.64827 1.44312L10.0973 5.45689C10.1987 5.72342 10.457 5.9 10.7456 5.9H14.3063C14.9638 5.9 15.251 6.71921 14.7341 7.11989L12.2 9.4C11.9667 9.58081 11.8761 9.88825 11.9749 10.1643L12.9 14.0866C13.1253 14.716 12.3954 15.2575 11.8448 14.8695L8.40243 12.6862C8.1617 12.5166 7.8383 12.5166 7.59757 12.6862L4.15529 14.8695C3.60462 15.2575 2.87478 14.716 3.1 14.0866L4.02513 10.1643C4.12389 9.88825 4.03334 9.58081 3.8 9.4L1.26596 7.11989C0.748953 6.71921 1.03621 5.9 1.6937 5.9H5.25437C5.54297 5.9 5.8013 5.72342 5.90263 5.45689L7.35173 1.44311Z"
                fill="#FE8304"
                stroke="#FE8304"
                stroke-width="0.700145"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <p className="text-sm">{rating}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
