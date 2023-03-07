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
};

const Input: React.FC<Props> = ({
  text,
  side,
  className,
  formHookProps,
  defaultValue = "",
  error = null,
  type = "text",
}: Props) => {
  const [value, setValue] = useState("");

  useEffect(() => {
    setValue(defaultValue);
  }, []);

  const onChangeHandler = (e: any) => {
    setValue(e.target.value);
  };

  return (
    <div className={`${className} w-full`}>
      <p className="font-semibold text-xs">{text}</p>

      <div className="mt-1 relative">
        <input
          type={type}
          {...formHookProps}
          value={value}
          onChange={onChangeHandler}
          className={` bg-[#FFF0E0] text-orange-800 font-semibold px-8 w-full rounded-[20px] h-8 shadow-[-2px_2px_3px_0.1px_rgb(100,100,0,0.3)]`}
        ></input>
        {side ? (
          <Image
            className="absolute top-[8px] left-3"
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
