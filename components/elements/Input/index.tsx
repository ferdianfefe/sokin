import Image from "next/image";
import React from "react";
import { useEffect, useState } from "react";

type Props = {
  text?: string;
  side?: string;
  className?: string;
  formHookProps?: any;
  defaultValue?: string;
  error?: any;
  type?: string;
  onValueChangeHandler?: Function;
  imagePosition?: string;
};

const Input: React.FC<Props> = ({
  text,
  side,
  className,
  formHookProps,
  defaultValue = "",
  error = null,
  type = "text",
  imagePosition = "left",
  onValueChangeHandler,
}: Props) => {
  const [value, setValue] = useState("");

  useEffect(() => {
    setValue(defaultValue);
  }, []);

  const onChangeHandler = (e: any) => {
    setValue(e.target.value);
    if (onValueChangeHandler) {
      onValueChangeHandler(e.target.value);
    }
  };

  return (
    <div className={`${className} w-full`}>
      <p className="font-semibold text-xs">{text}</p>

      <div className="mt-1 relative">
        {type === 'dropdown' ?

        <div className={`shadow-[-2px_2px_3px_0.1px_rgb(100,100,0,0.3)] rounded-[20px]`}>
          <select name="menu-category" id="merchant-category" className="className={` bg-[#FFF0E0] text-orange-800 font-semibold pl-8 w-full rounded-[20px] h-8 `}">
            <option value="makanan">Makanan</option>
            <option value="minuman">Minuman</option>
            <option value="camilan">Camilan</option>
          </select>
        </div>

        :

        type === 'comment' ?

        <div>
          <textarea
            type={type}
            {...formHookProps}
            value={value}
            onChange={onChangeHandler}
            className={` bg-[#FFF0E0] text-orange-800 resize-y font-semibold py-2 px-8 w-full rounded-[20px] h-28 shadow-[-2px_2px_3px_0.1px_rgb(100,100,0,0.3)]`}
          ></textarea>

        </div>

        :(
        <div>
          <input
            type={type}
            {...formHookProps}
            value={value}
            onChange={onChangeHandler}
            className={` bg-[#FFF0E0] text-orange-800 font-semibold px-8 w-full rounded-[20px] h-8 shadow-[-2px_2px_3px_0.1px_rgb(100,100,0,0.3)]`}
          ></input>
        </div>
        )
      }
        {side ? (
          <Image
            className={`absolute top-[8px] ${
              imagePosition == "left" ? "left-3" : "right-8"
            }`}
            src={`${side}`}
            alt="person"
            width={16}
            height={16}
          />
        ) : (
          ""
        )}
        <small className="text-[#ff0000]">{error?.message}</small>
      </div>
    </div>
  );
};

export default Input;
