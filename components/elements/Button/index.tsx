import { signIn } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

type Props = {
  text: string;
  type?: string;
  size?: string;
  href?: string;
  isSubmit?: boolean;
  className?: string;
  onClickHandler?: Function;
};

const Button: React.FC<Props> = ({
  text,
  type,
  size,
  href = "#",
  isSubmit = false,
  className,
  onClickHandler = () => {},
}: Props) => {
  const router = useRouter();

  return (
    <button
      type={isSubmit ? "submit" : "button"}
      className={`${className} 
        font-black justify-center rounded-[18px] shadow-[0_3px_3px_0.1px_rgb(400,100,0,0.3),inset_0_3px_7px_6px_rgb(500,500,500,0.2)]
        ${
          type === "secondary"
            ? "bg-gray-100 text-black"
            : type == "red"
            ? "bg-c-red-700 text-neutral-50"
            : type == "green"
            ? "bg-c-green-700 text-neutral-50"
            : "bg-[#FE8304] text-neutral-50"
        }
                  ${
                    size === "small"
                      ? "w-[154px] h-[33px] text-[14px]"
                      : size === "very small" 
                      ? "w-[120px] h-[25px] text-[12px]"
                      : "w-full h-[39px] text-[17px]"
                  }
                  `}
      onClick={(e) => {
        onClickHandler(e);
        if (href !== "#") {
          router.push(href);
        }
      }}
    >
      {text}
    </button>
  );
};

export default Button;
