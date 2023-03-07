import React, { useState } from "react";
import Image from "next/image";
import Button from "components/elements/Button";
import Input from "components/elements/Input";
import InputImage from "components/elements/InputImage";
import Link from "next/link";

export default function SignUp() {
  const [currentStep, setCurrentStep] = useState(0);

  const lanjut = () => {
    setCurrentStep(currentStep + 1);
  };

  const kembali = () => {
    setCurrentStep(currentStep - 1);
  };
  return (
    <>
      {currentStep === 0 && (
        <div className="flex-col items-center flex bg-gradient-to-b from-[#F37D27]/25 to-white w-full min-h-screen">
          <div className="mt-20 flex flex-col justify-center items-center shadow-black">
            <h3>Gabung menjadi</h3>
            <h3>
              Driver <span className="font-bold">Sokin</span>
            </h3>
          </div>
          <div className="flex flex-col items-center p-8 mt-11 bg-white h-[450px] w-[90%] rounded-3xl shadow-[0_0px_5px_0.1px_rgb(100,100,0,0.2)] mb-14">
            <h3 className="font-bold">Langkah - Langkah</h3>
            <div className="flex mt-9 mb-3 w-full">
              <div className="w-[60px] flex mr-3">
                <Image
                  src={"/images/Profilecard.svg"}
                  width={52}
                  height={37}
                  alt={"Profile card"}
                />
              </div>
              <p>Lengkapi identitas diri</p>
            </div>
            <div className="w-[100%] h-[1px] bg-slate-400"></div>
            <div className="flex my-3">
              <div className="w-[80px] flex justify-center mr-5">
                <Image
                  src={"/images/regis/Vehicle.svg"}
                  width={52}
                  height={31}
                  alt={"Profile card"}
                />
              </div>
              <p>Lengkapi informasi mengenai kendaraanmu</p>
            </div>
            <div className="w-[100%] h-[1px] bg-slate-400"></div>
            <div className="flex my-3">
              <div className="w-[90px] flex justify-center mr-5">
                <Image
                  src={"/images/Shield.svg"}
                  width={37}
                  height={45}
                  alt={"Profile card"}
                />
              </div>
              <p>Verifikasi data driver membutuhkan waktu 2 hari</p>
            </div>
            <div className="w-[100%] h-[1px] bg-slate-400"></div>
            <div className="flex my-3">
              <div className="w-[98px] flex justify-center mr-5">
                <Image
                  src={"/images/regis/Person.svg"}
                  width={40}
                  height={40}
                  alt={"Profile card"}
                />
              </div>
              <p>Akunmu telah terverifikasi dan sudah bisa digunakan</p>
            </div>
            <div className="w-[100%] h-[1px] bg-slate-400"></div>
          </div>
          <div className="w-[90%]" onClick={lanjut}>
            <Button text="Lanjutkan" />
          </div>
        </div>
      )}
      {currentStep !== 0 && (
        <div className="bg-[#F37D27]/25 w-full">
          <div className="bg-white p-6 w-full rounded-b-[40px] flex-col flex h-[150px] z-10">
            <div className="flex justify-center">
              <Link href="/driver/signin">
                <Image
                  src={"/images/ExitIcon.svg"}
                  width={24}
                  height={24}
                  alt="exit icon"
                  className="absolute top-[26px] left-5"
                />
              </Link>
              <h1 className="text-[#565351] font-semibold text-xl">
                Pendaftaran Akun Driver
              </h1>
            </div>
            {currentStep === 1 && (
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
            {currentStep === 2 && (
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
            {currentStep === 3 && (
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
            {currentStep === 1 && (
              <h1 className="font-semibold text-[#E17301] text-xl mt-5">
                Informasi Pemilik
              </h1>
            )}
            {currentStep === 2 && (
              <h1 className="font-semibold text-[#E17301] text-xl mt-5">
                Informasi Kendaraan
              </h1>
            )}
            {currentStep === 3 && (
              <h1 className="font-semibold text-[#E17301] text-xl mt-5">
                Verifikasi
              </h1>
            )}
            {currentStep === 4 && (
              <h1 className="font-semibold text-[#E17301] text-xl mt-5">
                Akunmu Terdaftar
              </h1>
            )}
            <div className="bg-white mt-4 rounded-t-[40px] w-full px-9 py-12 flex flex-col justify-center items-center">
              <form>
                {currentStep === 1 && (
                  <>
                    <InputImage text="Foto Profil" className=""/>
                    <p className="text-xs text-gray-500 mt-1 mb-3">
                      Foto berukuran 1x1 sepinggang
                    </p>
                    <div className="mb-3">
                      <Input className="" text="Nama" />
                      <p className="text-xs text-gray-500 mt-1">
                        Nama harus ditulis persis seperti yang tertera pada KTP,
                        Termasuk jika ada jabatan, titik, koma, dll
                      </p>
                    </div>
                    <Input className="mb-3" text="Nomor KTP" />
                    <Input className="mb-3" text="Domisili" />
                    <Input className="mb-3" text="Alamat" />
                    <Input className="mb-3" text="Nomor Telepon" />
                    <Input className="mb-3" text="Email" />
                    <div className="mb-3">
                      <Input className="" text="Password" />
                    </div>
                    <InputImage className="mb-3" text="Foto KTP" />
                    <p className="text-xs text-gray-500 mt-1">
                      Foto KTP harus jelas, tidak boleh blur atau buram, dan
                      terpotong. Harap tidak menggunakan flash saat mengambil
                      foto KTP
                    </p>
                  </>
                )}
                {currentStep === 2 && (
                  <div className="w-full">
                    <Input className="mb-3" text="Merek Kendaraan"/>
                    <Input className="mb-3" text="Plat Kendaraan" />
                    <InputImage className="mb-3" text="Foto Kendaraan" />
                  </div>
                )}
              </form>
              {currentStep === 3 && (
                <>
                  <Image
                    src="/images/Verifikasi.svg"
                    width={360}
                    height={216}
                    alt="gambar verifikasi"
                  />
                  <div className="p-6 flex flex-col items-center justify-center text-justify">
                    <h2 className="font-bold">
                      Data usaha sedang diverifikasi
                    </h2>
                    <p className="justify-center mt-3">
                      Untuk mengetahui status usahamu, kamu bisa cek halaman ini
                      secara berkala atau kamu dapat menunggu notifikasi yang
                      akan kami kirimkan melalui emailmu
                    </p>
                  </div>
                </>
              )}
              {currentStep === 4 && (
                <h1 className="font-semibold text-[#E17301] text-xl mt-5">
                  Verifikasi Berhasil, HORE!!!
                </h1>
              )}
              {currentStep === 1 && (
                <>
                  <div className="mt-10 flex w-full">
                    <div onClick={lanjut} className="w-full">
                      <Button text="Lanjutkan" />
                    </div>
                  </div>
                </>
              )}
              {currentStep === 2 && (
                <>
                  <div className="mt-10 flex justify-between">
                    <div onClick={kembali}>
                      <Button text="kembali" size="small" type="secondary" />
                    </div>
                    <div onClick={lanjut}>
                      <Button text="Lanjutkan" size="small" />
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
