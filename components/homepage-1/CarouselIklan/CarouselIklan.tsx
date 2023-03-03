import Image from "next/image";
import Dummy from "public/img/homepage/nasgor.jpg"

interface Props {
    img: typeof Image;
}

const CarouselIklan = () => {
    return(
        <div className="flex">
            {/* <CardIklan 
                img = {Dummy}
            /> */}
            <div className="flex gap-4">
                <CardIklan />
                <CardIklan />
                <CardIklan />

            </div>
        </div>
    )
}

export default CarouselIklan;

const CardIklan = () => {
    return(
        <div className="min-w-[190px] h-[111px] rounded-[14px] bg-slate-200 overflow-hidden flex shadow-md shadow-[#D78632]/40">
            <Image
                src={Dummy}
                alt=""
                className="object-cover"
            />
        </div>
    )
}