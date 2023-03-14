import React from "react";
import StatusBarRegistration from "components/elements/StatusBarRegistration/StatusBarRegistration";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Input from "components/elements/Input";
import Button from "components/elements/Button";
import Vector from "public/images/driver/regist/vector-driver-p2.png";
import Vector2 from "public/images/driver/regist/vector-success-driver.png";

function saveDataToLocalStorage(data: any) {
  if (typeof Storage !== "undefined") {
    localStorage.setItem("data", data);
  } else {
    console.log("browser does not support local storage.");
  }
}

interface IFormInputs {
  name: string;
  idCardNumber: string;
  city: string;
  address: string;
  phoneNumber: string;
  email: string;
  password: string;
  vehicle: string;
  licenseNumber: string;
}

const Registration2 = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [style, setStyle] = useState(["block", "hidden"]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInputs>();

  const onSubmit = async (data: IFormInputs) => {
    console.log(data);
    setStyle(["hidden", "hidden"]);
    setCurrentStep(currentStep + 1);
    await fetch("/api/signup/driver", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((res) => {
      if (res.status === 200) {
        console.log("success");
      } else {
        console.log("error");
      }
    });
  };

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
    console.log("lanjutkan");
  };

  useEffect(() => {
    if (currentStep === 2) {
      setTimeout(() => {
        setCurrentStep(3);
      }, 3000);
    }
  });

  return (
    <>
      <div className="bg-[#F37D27]/25 w-full">
        <StatusBarRegistration type="Driver" pageIndex={currentStep + 1} />
        {/* <div className='bg-white p-6 w-full rounded-b-[40px] flex-col flex h-[150px] z-10'>
          <div className='flex justify-center'>
            <Link href='/merchant/signin'>
              <Image src={'/images/ExitIcon.svg'} width={24} height={24} alt='exit icon'  className='absolute top-[26px] left-5'/>
            </Link>
            <h1 className='text-[#565351] font-semibold text-xl'>Pendaftaran akun Merchant</h1>
          </div>
        </div> */}
        <div className="w-full top-20 items-center flex-col flex">
          {currentStep === 0 && (
            <h1 className="font-semibold text-[#E17301] text-xl mt-5">
              Informasi Pemilik
            </h1>
          )}
          {currentStep === 1 && (
            <h1 className="font-semibold text-[#E17301] text-xl mt-5">
              Informasi Kendaraan
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
            <form onSubmit={handleSubmit(onSubmit)}>
              {currentStep === 0 && (
                <>
                  <div className="mb-3">
                    <Input
                      className=""
                      text="Nama"
                      formHookProps={{
                        ...register("name", {
                          required: {
                            value: true,
                            message: "Nama pengguna tidak boleh kosong.",
                          },
                        }),
                      }}
                    />
                    <p className="text-xs text-gray-500 mt-1">
                      Nama harus ditulis persis seperti yang tertera pada KTP,
                      Termasuk jika ada jabatan, titik, koma, dll
                    </p>
                    <small className="text-[#ff0000]">
                      {errors.name?.message}
                    </small>
                  </div>
                  <Input
                    className="mb-3"
                    text="Nomor KTP"
                    formHookProps={{
                      ...register("idCardNumber", {
                        required: {
                          value: true,
                          message: "Nomor KTP tidak boleh kosong",
                        },
                      }),
                    }}
                  />
                  <small className="text-[#ff0000]">
                    {errors.idCardNumber?.message}
                  </small>
                  <Input
                    className="mb-3"
                    text="Domisili"
                    formHookProps={{
                      ...register("city", {
                        required: {
                          value: true,
                          message: "Domisili tidak boleh kosong",
                        },
                      }),
                    }}
                  />
                  <small className="text-[#ff0000]">
                    {errors.city?.message}
                  </small>
                  <Input
                    className="mb-3"
                    text="Alamat"
                    formHookProps={{
                      ...register("address", {
                        required: {
                          value: true,
                          message: "Alamat tidak boleh kosong",
                        },
                      }),
                    }}
                  />
                  <small className="text-[#ff0000]">
                    {errors.address?.message}
                  </small>
                  <Input
                    className="mb-3"
                    text="Nomor Telepon"
                    formHookProps={{
                      ...register("phoneNumber", {
                        required: {
                          value: true,
                          message: "Nomor telepon tidak boleh kosong",
                        },
                      }),
                    }}
                  />
                  <small className="text-[#ff0000]">
                    {errors.phoneNumber?.message}
                  </small>
                  <Input
                    className="mb-3"
                    text="Email"
                    formHookProps={{
                      ...register("email", {
                        required: {
                          value: true,
                          message: "Email tidak boleh kosong",
                        },
                      }),
                    }}
                  />
                  <small className="text-[#ff0000]">
                    {errors.email?.message}
                  </small>
                  <div className="mb-3">
                    <Input
                      className="mb-3"
                      text="Password"
                      formHookProps={{
                        ...register("password", {
                          required: {
                            value: true,
                            message: "Password tidak boleh kosong",
                          },
                        }),
                      }}
                    />
                    <small className="text-[#ff0000]">
                      {errors.password?.message}
                    </small>
                    <p className="text-xs text-gray-500 mt-1"></p>
                  </div>

                  {/* <p className="font-semibold text-xs mb-3">Foto KTP</p>
                  <div className='w-full h-[84px] border-[3D9D4CF] border-2 rounded-[10px]'></div> */}
                  <p className="font-semibold text-xs mb-2">Foto KTP</p>
                  <div className="px-8 flex items-center justify-start w-full h-[84px] border-[3D9D4CF] border-2 rounded-[10px] ">
                    <svg
                      width="60"
                      height="60"
                      viewBox="0 0 38 38"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        cx="18.5263"
                        cy="18.5263"
                        r="17.7853"
                        fill="#FE8304"
                        stroke="#FE8304"
                        stroke-width="1.48211"
                      />
                      <path
                        d="M19.0106 22.9095C20.6114 22.9095 21.909 21.6118 21.909 20.0111C21.909 18.4104 20.6114 17.1128 19.0106 17.1128C17.4099 17.1128 16.1123 18.4104 16.1123 20.0111C16.1123 21.6118 17.4099 22.9095 19.0106 22.9095Z"
                        fill="white"
                      />
                      <path
                        d="M16.3401 11L14.6826 12.8115H11.8115C10.8152 12.8115 10 13.6266 10 14.6229V25.4917C10 26.488 10.8152 27.3032 11.8115 27.3032H26.3032C27.2995 27.3032 28.1146 26.488 28.1146 25.4917V14.6229C28.1146 13.6266 27.2995 12.8115 26.3032 12.8115H23.432L21.7745 11H16.3401ZM19.0573 24.586C16.5575 24.586 14.5287 22.5571 14.5287 20.0573C14.5287 17.5575 16.5575 15.5287 19.0573 15.5287C21.5571 15.5287 23.586 17.5575 23.586 20.0573C23.586 22.5571 21.5571 24.586 19.0573 24.586Z"
                        fill="white"
                      />
                    </svg>
                    <label>
                      <input
                        accept="image/png, image/gif, image/jpeg"
                        type="file"
                        className="w-full text-sm"
                      />
                    </label>
                  </div>
                  <p className="text-xs text-gray-500 mt-1">
                    Foto KTP harus jelas, tidak boleh blur atau buram dan
                    terpotong. Harap tidak menggunakan flash saat mengambil foto
                    KTP
                  </p>
                </>
              )}

              {currentStep === 1 && (
                <>
                  <Input
                    className="mb-3"
                    text="Merk Kendaraan"
                    formHookProps={{
                      ...register("vehicle", {
                        required: {
                          value: true,
                          message: "Merk kendaraan tidak boleh kosong",
                        },
                      }),
                    }}
                  />
                  <Input
                    className="mb-3"
                    text="Plat Kendaraan"
                    formHookProps={{
                      ...register("licenseNumber", {
                        required: {
                          value: true,
                          message: "Plat kendaraan tidak boleh kosong",
                        },
                      }),
                    }}
                  />
                  <p className="font-semibold text-xs mb-2">Foto Kendaraan</p>
                  <div className="px-8 flex items-center justify-start w-full h-[84px] border-[3D9D4CF] border-2 rounded-[10px] ">
                    <svg
                      width="60"
                      height="60"
                      viewBox="0 0 38 38"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        cx="18.5263"
                        cy="18.5263"
                        r="17.7853"
                        fill="#FE8304"
                        stroke="#FE8304"
                        stroke-width="1.48211"
                      />
                      <path
                        d="M19.0106 22.9095C20.6114 22.9095 21.909 21.6118 21.909 20.0111C21.909 18.4104 20.6114 17.1128 19.0106 17.1128C17.4099 17.1128 16.1123 18.4104 16.1123 20.0111C16.1123 21.6118 17.4099 22.9095 19.0106 22.9095Z"
                        fill="white"
                      />
                      <path
                        d="M16.3401 11L14.6826 12.8115H11.8115C10.8152 12.8115 10 13.6266 10 14.6229V25.4917C10 26.488 10.8152 27.3032 11.8115 27.3032H26.3032C27.2995 27.3032 28.1146 26.488 28.1146 25.4917V14.6229C28.1146 13.6266 27.2995 12.8115 26.3032 12.8115H23.432L21.7745 11H16.3401ZM19.0573 24.586C16.5575 24.586 14.5287 22.5571 14.5287 20.0573C14.5287 17.5575 16.5575 15.5287 19.0573 15.5287C21.5571 15.5287 23.586 17.5575 23.586 20.0573C23.586 22.5571 21.5571 24.586 19.0573 24.586Z"
                        fill="white"
                      />
                    </svg>
                    <label>
                      <input type="file" className="w-full text-sm" />
                    </label>
                  </div>
                </>
              )}

              {currentStep === 2 && (
                <div>
                  <div className="flex justify-center">
                    {/* icon */}
                    <Image src={Vector} alt=""></Image>
                  </div>

                  <div className="flex flex-col gap-4 px-8 w-[80%] mx-auto mb-0 mt-2">
                    <div className="flex font-bold justify-center text-lg ">
                      <h2>Data usaha sedang di verifikasi</h2>
                    </div>

                    <div className="flex justify-center whitespace-pre-line text-[#817A7A]">
                      <p>
                        Untuk mengetahui status drivermu, kamu bisa cek halaman
                        ini secara berkala atau kamu dapat menunggu notifikasi
                        yang akan kami kirimkan melalui emailmu
                      </p>
                    </div>

                    <div className="flex relative">
                      <svg
                        className="absolute ml-2 my-auto inset-y-0 left-2 flex items-center"
                        width="18"
                        height="19"
                        viewBox="0 0 18 19"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M18 3.55042L13.86 0.076416L12.699 1.45342L16.839 4.92742L18 3.55042ZM5.292 1.45342L4.14 0.076416L0 3.54142L1.161 4.91842L5.292 1.45342ZM9.45 5.60242H8.1V11.0024L12.375 13.5674L13.05 12.4604L9.45 10.3274V5.60242ZM9 2.00242C4.527 2.00242 0.9 5.62942 0.9 10.1024C0.9 14.5754 4.518 18.2024 9 18.2024C13.473 18.2024 17.1 14.5754 17.1 10.1024C17.1 5.62942 13.473 2.00242 9 2.00242ZM9 16.4024C5.517 16.4024 2.7 13.5854 2.7 10.1024C2.7 6.61942 5.517 3.80242 9 3.80242C12.483 3.80242 15.3 6.61942 15.3 10.1024C15.3 13.5854 12.483 16.4024 9 16.4024Z"
                          fill="#FE8304"
                        />
                      </svg>

                      <div className="bg-[#FFE0C0] rounded-full text-xs font-medium text-[#FE8304] pl-10 pr-3 py-2 shadow-md shadow-[#FEB262]/70 shadow-inner-white shadow-inner-xl">
                        Proses sekitar 2 hari kerja
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {currentStep === 3 && (
                <div>
                  <div className="flex px-6 justify-center">
                    <Image src={Vector2} alt=""></Image>
                  </div>

                  <div className="relative flex flex-col gap-4 mx-auto my-0 max-w-[70%]">
                    <div className="flex font-bold justify-center text-lg ">
                      <h2>Akunmu berhasil terdaftar sebagai driver Sokin</h2>
                    </div>

                    <div className="flex justify-center whitespace-pre-line text-[#817A7A]">
                      <p>
                        Selanjutnya kamu dapat menerima pesanan dari customer{" "}
                      </p>
                    </div>
                  </div>

                  <div className="relative flex justify-center mt-32 mx-10"></div>
                </div>
              )}
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
                        // onClick={lanjut}
                      >
                        Lanjutkan
                      </button>
                    </div>
                  </div>
                </>
              )}
              {currentStep === 3 && (
                <>
                  <div className="w-[300px]">
                    <Button text="Lanjutkan" href={"/driver/dashboard"} />
                  </div>
                </>
              )}
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
export default Registration2;
