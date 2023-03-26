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

const InputImageRound: React.FC<Props> = ({
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
    if (file) {
      setCurrentFile(file);
      setPreviewImage(URL.createObjectURL(file));
      handleUploadFile(name, file);
    }
  };

  return (
    <div className={className}>
      <p className="font-semibold text-xs mb-2">{text}</p>
      {previewImage ? (
        <div className="rounded-xl relative w-28 h-24 overflow-hidden mx-auto">
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
        <label htmlFor={`${name}Picture`}>
          <div className="relative h-32 w-32 mx-auto mb-2">
            <Image
              alt="camera icon"
              src={"/images/icons/camera-primary.svg"}
              fill
            />
          </div>
        </label>
      )}
    </div>
  );
};

export default InputImageRound;
