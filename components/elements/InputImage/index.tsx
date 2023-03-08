import React, { useEffect, useState } from "react";
import Image from "next/image";

type Props = {
  className?: string;
  text?: string;
  formHookProps?: any;
  defaultValue?: string;
  handleUploadFile?: Function;
  name: string;
};

const InputImage: React.FC<Props> = ({
  className,
  text,
  formHookProps,
  defaultValue = "",
  handleUploadFile,
  name,
}: Props) => {
  const [currrentFile, setCurrentFile] = useState(null);
  const [previewImage, setPreviewImage] = useState<string>(null);

  const pickPicture = (e: any) => {
    e.preventDefault();
    const file = e.target.files[0];
    if(file) {
      setCurrentFile(file);
      setPreviewImage(URL.createObjectURL(file));
      handleUploadFile(name, file)
    }
  };

  return (
    <div className={className}>
      <p className="font-semibold text-xs mb-2">{text}</p>
      {previewImage ? (
        <div className="rounded-xl relative w-28 h-24 overflow-hidden">
          <Image
            src={previewImage}
            alt="preview"
            fill
            className="object-containt"
          />
        </div>
      ) : null}

      <input
        type="file"
        onChange={pickPicture}
        className="hidden"
        id={`${name}Picture`}
      />
      {!previewImage && (
        <label htmlFor={`${name}Picture`} className="w-4 bg-orange-600 h-6">
          <div className="flex w-full h-20 border-[1px] rounded-2xl border-gray-300 justify-center items-center">
            <Image
              src="/images/regis/UploadImageIcon.svg"
              width={37}
              height={37}
              alt="Upload image icon"
            />
            <h3 className="text-orange-500 ml-3">Upload Foto</h3>
          </div>
        </label>
      )}
    </div>
  );
};

export default InputImage;
