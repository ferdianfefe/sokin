import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {
  href?: string;
  isSubmit?: boolean;
  className?: string;
  onClickHandler?: Function;
};

const EditButton: React.FC<Props> = ({
  href = "#",
  isSubmit = false,
  className,
  onClickHandler = () => {},
}: Props) => {
  return (
    <button
      type={isSubmit ? "submit" : "button"}
      className={`${className} 
        w-10 h-6 justify-center flex items-center rounded-3xl bg-c-orange-800 shadow-[-2px_2px_5px_0.1px_rgb(120,30,0,0.7),inset_0_0px_6px_6px_rgb(0,0,0,0.1)]
      `}
      onClick={(e) => onClickHandler(e)}
    >
      <Link href={`${href}`} className="">
        <Image src="/images/Edit.svg" width={13}  height={13} alt="" />
      </Link>
    </button>
  );
};

export default EditButton;
