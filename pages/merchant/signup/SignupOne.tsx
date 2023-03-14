import Link from "next/link";
import React from "react";
import Image from "next/image";
import { useState } from "react";
import Input from "components/elements/Input";
import Button from "components/elements/Button";
import InputImage from "components/elements/InputImage";
import { useForm } from "react-hook-form";
import MapContainer from "components/elements/MapContainer";
import { CldImage } from "next-cloudinary";
import { useRouter } from "next/router";

interface IFormInputs {
  name: string;
  idCardNumber: number;
  city: string;
  address: string;
  phoneNumber: string;
  email: string;
  password: string;
  bankName: string;
  accountNumber: string;
  merchantName: string;
  postalCode: string;
  merchantAddress: string;
  coordinates: string;
  benchmark: string;
  accountBookPhoto: string,
  merchantLogo: string,
}

export default function SignupOne() {
  const [currentStep, setCurrentStep] = useState(0);
  const [style, setStyle] = useState(["block", "hidden"]);
  const [accountBookPhoto, setAccountBookPhoto] = useState<File>();
  const [merchantLogo, setMerchantLogo] = useState<File>();
  const [coordinates, setCoordinates] = useState<number[]>([0, 0]);

  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInputs>();

  const submitHandler = async (data: IFormInputs) => {
    setStyle(["hidden", "hidden"]);
    setCurrentStep(currentStep + 1);

    let accountBookPhotoFd = new FormData();
    accountBookPhotoFd.append("file", accountBookPhoto);
    accountBookPhotoFd.append("upload_preset", "merchant-upload");

    const accountBookPhotoUploaded = await fetch(
      "https://api.cloudinary.com/v1_1/dhzuyy5bo/image/upload",
      {
        method: "POST",
        body: accountBookPhotoFd,
      }
    ).then((res) => res.json());
    
    let merchantLogoFd = new FormData();
    merchantLogoFd.append("file", merchantLogo);
    merchantLogoFd.append("upload_preset", "merchant-upload");

    const merchantLogoUploaded = await fetch(
      "https://api.cloudinary.com/v1_1/dhzuyy5bo/image/upload",
      {
        method: "POST",
        body: merchantLogoFd,
      }
    ).then((res) => res.json());
    
    let newData = {
      ...data,
      coordinates: coordinates.toString(),
      accountBookPhoto: accountBookPhotoUploaded.secure_url,
      merchantLogo: merchantLogoUploaded.secure_url,
    };

    console.log(newData)

    await fetch("/api/signup/owner", {
      method: "POST",
      body: JSON.stringify(newData),
    }).then((res) => {
      if (res.status === 200) {
        console.log("success");
      } else {
        console.log("error");
      }
    });
  };

  const uploadImageHandler = async (key: string, file: File) => {
    if (key === "accountBookPhoto") {
      setAccountBookPhoto(file);
    } else if (key === "merchantLogo") {
      setMerchantLogo(file);
    }
  };

  const [keyword, setKeyword] = useState("");

  const lanjut = () => {
    setCurrentStep(currentStep + 1);
    if (currentStep === 0) {
      setStyle(["hidden", "block"]);
    }
    if (currentStep === 1) {
      setStyle(["hidden", "hidden"]);
    }
  };

  const kembali = () => {
    setCurrentStep(currentStep - 1);
    if (currentStep === 1) {
      setStyle(["block", "hidden"]);
    }
  };

  const lanjutkan = () => {
    
  };

  return (
    <>
      <div className="bg-[#F37D27]/25 w-full">
        <div className="bg-white p-6 w-full rounded-b-[40px] flex-col flex h-[150px] z-10">
          <div className="flex justify-center">
            <Link href="/merchant/signin">
              <Image
                src={"/images/ExitIcon.svg"}
                width={24}
                height={24}
                alt="exit icon"
                className="absolute top-[26px] left-5"
              />
            </Link>
            <h1 className="text-[#565351] font-semibold text-xl">
              Pendaftaran akun Merchant
            </h1>
          </div>
          {currentStep === 0 && (
            <div className="w-full justify-center items-center flex mt-3">
              <Image
                src={"/images/regis/Step1.svg"}
                width={300}
                height={10}
                alt="step one"
                className="mt-3"
              />
            </div>
          )}
          {currentStep === 1 && (
            <div className="w-full justify-center items-center flex mt-3">
              <Image
                src={"/images/regis/Step2.svg"}
                width={300}
                height={10}
                alt="step one"
                className="mt-3"
              />
            </div>
          )}
          {currentStep === 2 && (
            <div className="w-full justify-center items-center flex mt-3">
              <Image
                src={"/images/regis/Step3.svg"}
                width={300}
                height={10}
                alt="step one"
                className="mt-3"
              />
            </div>
          )}
        </div>
        <div className="w-full top-20 items-center flex-col flex">
          {currentStep === 0 && (
            <h1 className="font-semibold text-[#E17301] text-xl mt-5">
              Informasi Pemilik
            </h1>
          )}
          {currentStep === 1 && (
            <h1 className="font-semibold text-[#E17301] text-xl mt-5">
              Informasi Usaha
            </h1>
          )}
          {currentStep === 2 && (
            <h1 className="font-semibold text-[#E17301] text-xl mt-5">
              Verifikasi
            </h1>
          )}
          {currentStep === 3 && (
            <h1 className="font-semibold text-[#E17301] text-xl mt-5">
              Akunmu Terdaftar
            </h1>
          )}
          <div className="bg-white mt-4 rounded-t-[40px] w-full px-9 py-12 flex flex-col">
            <form onSubmit={handleSubmit(submitHandler)}>
              {/* {(currentStep === 0) && ( */}
              <div className={style[0]}>
                <div className="mb-3">
                  <Input
                    className=""
                    text="Nama"
                    formHookProps={{
                      ...register("name", {
                        required: {
                          value: true,
                          message: "name tidak boleh kosong",
                        },
                      }),
                    }}
                    error={errors.name?.message}
                  />
                  <p className="text-xs text-gray-500 mt-1">
                    Nama harus ditulis persis seperti yang tertera pada KTP,
                    Termasuk jika ada jabatan, titik, koma, dll
                  </p>
                </div>
                <Input
                  className="mb-3"
                  text="Nomor KTP"
                  type="number"
                  formHookProps={{
                    ...register("idCardNumber", {
                      required: {
                        value: true,
                        message: "iDCardNumber tidak boleh kosong",
                      },
                    }),
                  }}
                  error={errors.idCardNumber?.message}
                />
                <Input
                  className="mb-3"
                  text="Domisili"
                  formHookProps={{
                    ...register("city", {
                      required: {
                        value: true,
                        message: "city tidak boleh kosong",
                      },
                    }),
                  }}
                />
                <Input
                  className="mb-3"
                  text="Alamat"
                  formHookProps={{
                    ...register("address", {
                      required: {
                        value: true,
                        message: "address tidak boleh kosong",
                      },
                    }),
                  }}
                  error={errors.address?.message}
                />
                <Input
                  className="mb-3"
                  text="Nomor Telepon"
                  formHookProps={{
                    ...register("phoneNumber", {
                      required: {
                        value: true,
                        message: "phoneNumber tidak boleh kosong",
                      },
                    }),
                  }}
                  error={errors.phoneNumber?.message}
                />
                <Input
                  className="mb-3"
                  text="Email"
                  formHookProps={{
                    ...register("email", {
                      required: {
                        value: true,
                        message: "email tidak boleh kosong",
                      },
                    }),
                  }}
                  error={errors.email?.message}
                />
                <div className="mb-3">
                  <Input
                    type="password"
                    className=""
                    text="Password"
                    formHookProps={{
                      ...register("password", {
                        required: {
                          value: true,
                          message: "password tidak boleh kosong",
                        },
                      }),
                    }}
                  />
                  <p className="text-xs text-gray-500 mt-1">
                    Foto KTP harus jelas, tidak boleh blur atau buram, dan
                    terpotong. Harap tidak menggunakan flash saat mengambil foto
                    KTP
                  </p>
                </div>
                {/* <InputImage className='mb-3' text='Foto KTP' formHookProps={{
                ...register("fotoKTP", {
                  required: {
                    value: true,
                    message: "fotoKTP tidak boleh kosong",
                  },
                }),
              }}/> */}
                <Input
                  className="mb-3"
                  text="Jenis Bank"
                  formHookProps={{
                    ...register("bankName", {
                      required: {
                        value: true,
                        message: "bankName tidak boleh kosong",
                      },
                    }),
                  }}
                  error={errors.bankName?.message}
                />
                <Input
                  className="mb-3"
                  text="Nomor Rekening"
                  formHookProps={{
                    ...register("accountNumber", {
                      required: {
                        value: true,
                        message: "accountNumber tidak boleh kosong",
                      },
                    }),
                  }}
                />
                <div className="mb-3">
                  {/* <Input
                    className=""
                    text="Foto Buku Tabungan"
                    formHookProps={{
                      ...register("accountBookPhoto", {
                        required: {
                          value: true,
                          message: "accountBookPhoto tidak boleh kosong",
                        },
                      }),
                    }}
                  /> */}
                  <InputImage key={0} className="" text="Foto Buku Tabungan" handleUploadFile={uploadImageHandler} name="accountBookPhoto"/>
                  <p className="text-xs text-gray-500 mt-1">
                    Foto yang terlampir merupakan halaman pertama dari buku
                    tabungan
                  </p>
                </div>
              </div>
              {/* )} */}
              {/* {(currentStep === 1) && ( */}
              <div className={style[1]}>
                <Input
                  className="mb-3"
                  text="Nama Usaha"
                  formHookProps={{
                    ...register("merchantName", {
                      required: {
                        value: true,
                        message: "name tidak boleh kosong",
                      },
                    }),
                  }}
                  error={errors.merchantName?.message}
                />
                <Input
                  className="mb-3"
                  text="Kode Pos"
                  formHookProps={{
                    ...register("postalCode", {
                      required: {
                        value: true,
                        message: "postalCode tidak boleh kosong",
                      },
                    }),
                  }}
                />
                <Input
                  className="mb-3"
                  text="Alamat Usaha"
                  formHookProps={{
                    ...register("merchantAddress", {
                      required: {
                        value: true,
                        message: "address tidak boleh kosong",
                      },
                    }),
                  }}
                  error={errors.merchantAddress?.message}
                />
                <Input
                  className="mb-3"
                  text="Lokasi Usaha"
                  formHookProps={{
                    ...register("coordinates", {
                      required: {
                        value: true,
                        message: "coordinates tidak boleh kosong",
                      },
                    }),
                  }}
                  error={errors.coordinates?.message}
                />
                <Input
                  className="mb-3"
                  text="Cari lokasi"
                  onValueChangeHandler={(value: any) => setKeyword(value)}
                />
                <MapContainer keywordProp={keyword} getCenterHandler={(coordinatesProp) => {setCoordinates(coordinatesProp)}}/>
                <Input
                  className="mb-3"
                  text="Patokan"
                  formHookProps={{
                    ...register("benchmark", {
                      required: {
                        value: true,
                        message: "benchmark tidak boleh kosong",
                      },
                    }),
                  }}
                  error={errors.benchmark?.message}
                />
                <InputImage
                  key={1}
                  name="merchantLogo"
                  className="mb-3"
                  handleUploadFile={uploadImageHandler}
                  text="Logo Usaha"
                />
              </div>
              {/* )} */}
              {currentStep === 0 && (
                <>
                  <div className="mt-10 flex justify-between">
                    <div onClick={lanjut} className="w-full">
                      <Button text="Lanjutkan" />
                    </div>
                  </div>
                </>
              )}
              {currentStep === 1 && (
                <>
                  <div className="mt-10 flex justify-between">
                    <div onClick={kembali}>
                      <Button text="kembali" size="small" type="secondary" />
                    </div>
                    <div>
                      <button
                        type="submit"
                        className="font-black justify-center rounded-[18px] shadow-[0_3px_3px_0.1px_rgb(400,100,0,0.3),inset_0_3px_7px_6px_rgb(500,500,500,0.2)] bg-[#FE8304] text-white w-[154px] h-[33px] text-[14px]"
                      >
                        Lanjutkan
                      </button>
                    </div>
                  </div>
                </>
              )}
            </form>
            {currentStep === 2 && (
              <>
                <Image
                  src="/images/Verifikasi.svg"
                  width={360}
                  height={216}
                  alt="gambar verifikasi"
                />
                <div className="p-6 flex flex-col items-center justify-center text-justify">
                  <h2 className="font-bold">Data usaha sedang diverifikasi</h2>
                  <p className="justify-center mt-3">
                    Untuk mengetahui status usahamu, kamu bisa cek halaman ini
                    secara berkala atau kamu dapat menunggu notifikasi yang akan
                    kami kirimkan melalui emailmu
                  </p>
                </div>
                <div>
                  <div onClick={kembali}>
                    <Button text="kembali" size="small" type="secondary" />
                  </div>
                  <button
                    className="font-black justify-center rounded-[18px] shadow-[0_3px_3px_0.1px_rgb(400,100,0,0.3),inset_0_3px_7px_6px_rgb(500,500,500,0.2)] bg-[#FE8304] text-white w-[154px] h-[33px] text-[14px]"
                    onClick={lanjut}
                  >
                    Lanjutkan
                  </button>
                </div>
              </>
            )}
            {currentStep === 3 && (
              <h1 className="font-semibold text-[#E17301] text-xl mt-5">
                Verifikasi Berhasil, HORE!!!
              </h1>
            )}
            {/* {(currentStep === 0) &&
                <>
                  <div className='mt-10 flex justify-between'>
                    <div onClick={lanjut} className='w-full'>
                      <Button text='Lanjutkan' />
                    </div>
                  </div>
                </>
              }
              {(currentStep === 1) && <>
                <div className='mt-10 flex justify-between'>
                  <div onClick={kembali}>
                    <Button text='kembali' size='small' type='secondary' />
                  </div>
                  <div>
                    <button
                      type="submit"
                      className="font-black justify-center rounded-[18px] shadow-[0_3px_3px_0.1px_rgb(400,100,0,0.3),inset_0_3px_7px_6px_rgb(500,500,500,0.2)] bg-[#FE8304] text-white w-[154px] h-[33px] text-[14px]"
                    >
                    Lanjutkan
                    </button>
                  </div>
                </div>
              </>} */}
            {currentStep === 3 && (
              <>
                <div onClick={lanjutkan}>
                  <Button text="Lanjutkan" size="small" />
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
