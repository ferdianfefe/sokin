import exp from "constants";
import Image from "next/image";
import React from "react";

const PopupNotif: React.FC<{
  text?: string;
  className?: string;
  type?: string;
}> = ({ text, className, type = "success"}): JSX.Element => {
  return (
    <div
      className={`${className} absolute h-8 w-60 shadow-[0_3px_3px_0.1px_rgb(400,100,0,0.3),inset_0_3px_7px_6px_rgb(500,500,500,0.2)] flex items-center justify-center
        ${type === "success" ? "bg-c-green-700" : "bg-c-red-700"}`}
    >
      <Image src={"/images/icons/Notif.svg"} width={14} height={18} />
      <h3 className="font-semibold text-white">{text}</h3>
    </div>
  );
};

export default PopupNotif;
