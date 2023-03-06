import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import { useState } from 'react'
import Input from 'components/elements/Input'
import Button from 'components/elements/Button'
import InputImage from 'components/elements/InputImage'
import { useForm } from "react-hook-form";

interface IFormInputs {
  email: string;
  password: string;
  name: string,
  idCardNumber : string,
  city : string,
  address : string,
  phoneNumber : string,
  bankName : string,
  accountNumber : string,
  fotoKTP : string,
  merName : string,
  merAddress : string,
  postalCode : string,
  coordinates : string,
  benchmark : string,
  fotoBT : string,
  logoUsaha : string,
}

export default function SignupOne() {

  const [currentStep, setCurrentStep] = useState(0);
  const [style, setStyle] = useState(['block', 'hidden']);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInputs>();

  const onSubmit = async (data: IFormInputs) => {
    // console.log(data);
    setStyle(['hidden', 'hidden']);
    setCurrentStep(currentStep + 1);
    await fetch('/api/signup/owner', {
      method: 'POST',
      body: JSON.stringify(data),
    }).then((res) => {
      if (res.status === 200) {
        console.log('success');
      } else {
        console.log('error');
      }
    });
  }

  const lanjut = () => {
    setCurrentStep(currentStep + 1);
    if (currentStep === 0) {
      setStyle(['hidden', 'block']);
    }
    if (currentStep === 1) {
      setStyle(['hidden', 'hidden']);
    }
  }

  const kembali = () => {
    setCurrentStep(currentStep - 1);
    if (currentStep === 1) {
      setStyle(['block', 'hidden']);
    }
  }

  const lanjutkan = () => {
    console.log('lanjutkan');
  }

  return (
    <>
      <div className='bg-[#F37D27]/25 w-full'>
        <div className='bg-white p-6 w-full rounded-b-[40px] flex-col flex h-[150px] z-10'>
          <div className='flex justify-center'>
            <Link href='/merchant/signin'>
              <Image src={'/images/ExitIcon.svg'} width={24} height={24} alt='exit icon'  className='absolute top-[26px] left-5'/>
            </Link>
            <h1 className='text-[#565351] font-semibold text-xl'>Pendaftaran akun Merchant</h1>
          </div>
        </div>
        <div className='w-full top-20 items-center flex-col flex'>
              {(currentStep === 0) && <h1 className='font-semibold text-[#E17301] text-xl mt-5'>Informasi Pemilik</h1>}
              {(currentStep === 1) && <h1 className='font-semibold text-[#E17301] text-xl mt-5'>Informasi Usaha</h1>}
              {(currentStep === 2) && <h1 className='font-semibold text-[#E17301] text-xl mt-5'>Verifikasi</h1>}
              {(currentStep === 3) && <h1 className='font-semibold text-[#E17301] text-xl mt-5'>Akunmu Terdaftar</h1>}
            <div className='bg-white mt-4 rounded-t-[40px] w-full px-9 py-12 flex flex-col'>
              <form onSubmit={handleSubmit(onSubmit)}>  
                {/* {(currentStep === 0) && ( */}
                <div className={style[0]}>
                  <div className='mb-3'>
                    <Input className='' text='Nama' formHookProps={{
                ...register("name", {
                  required: {
                    value: true,
                    message: "name tidak boleh kosong",
                  },
                }),
              }}/>
                    <p className='text-xs text-gray-500 mt-1'>Nama harus ditulis persis seperti yang tertera pada KTP, Termasuk jika ada jabatan, titik, koma, dll</p>
                  </div>
                  <Input className='mb-3' text='Nomor KTP' formHookProps={{
                ...register("idCardNumber", {
                  required: {
                    value: true,
                    message: "idCardNumber tidak boleh kosong",
                  },
                }),
              }}/>
                  <Input className='mb-3' text='Domisili' formHookProps={{
                ...register("city", {
                  required: {
                    value: true,
                    message: "city tidak boleh kosong",
                  },
                }),
              }}/>
                  <Input className='mb-3' text='Alamat' formHookProps={{
                ...register("address", {
                  required: {
                    value: true,
                    message: "address tidak boleh kosong",
                  },
                }),
              }}/>
                  <Input className='mb-3' text='Nomor Telepon' formHookProps={{
                ...register("phoneNumber", {
                  required: {
                    value: true,
                    message: "phoneNumber tidak boleh kosong",
                  },
                }),
              }}/>
                  <Input className='mb-3' text='Email' formHookProps={{
                ...register("email", {
                  required: {
                    value: true,
                    message: "email tidak boleh kosong",
                  },
                }),
              }}/>
                  <div className='mb-3'>
                    <Input className='' text='Password' formHookProps={{
                ...register("password", {
                  required: {
                    value: true,
                    message: "password tidak boleh kosong",
                  },
                }),
              }}/>
                    <p className='text-xs text-gray-500 mt-1'>Foto KTP harus jelas, tidak boleh blur atau buram, dan terpotong. Harap tidak menggunakan flash saat mengambil foto KTP</p>
                  </div>
                  {/* <InputImage className='mb-3' text='Foto KTP' formHookProps={{
                ...register("fotoKTP", {
                  required: {
                    value: true,
                    message: "fotoKTP tidak boleh kosong",
                  },
                }),
              }}/> */}
                  <Input className='mb-3' text='Jenis Bank' formHookProps={{
                ...register("bankName", {
                  required: {
                    value: true,
                    message: "bankName tidak boleh kosong",
                  },
                }),
              }}/>
                  <Input className='mb-3' text='Nomor Rekening' formHookProps={{
                ...register("accountNumber", {
                  required: {
                    value: true,
                    message: "accountNumber tidak boleh kosong",
                  },
                }),
              }}/>
                  <div className='mb-3'>
                    <Input className='' text='Foto Buku Tabungan' formHookProps={{
                ...register("fotoBT", {
                  required: {
                    value: true,
                    message: "fotoBT tidak boleh kosong",
                  },
                }),
              }}/>
                    <p className='text-xs text-gray-500 mt-1'>Foto yang terlampir merupakan halaman pertama dari buku tabungan</p>
                  </div>
                </div>
                {/* )} */}
                {/* {(currentStep === 1) && ( */}
                <div className={style[1]}>
                  <Input className='mb-3' text='Nama Usaha' formHookProps={{
                ...register("merName", {
                  required: {
                    value: true,
                    message: "name tidak boleh kosong",
                  },
                }),
              }}/>
                  <Input className='mb-3' text='Kode Pos' formHookProps={{
                ...register("postalCode", {
                  required: {
                    value: true,
                    message: "postalCode tidak boleh kosong",
                  },
                }),
              }}/>
                  <Input className='mb-3' text='Alamat Usaha' formHookProps={{
                ...register("merAddress", {
                  required: {
                    value: true,
                    message: "address tidak boleh kosong",
                  },
                }),
              }}/>
                  <Input className='mb-3' text='Lokasi Usaha' formHookProps={{
                ...register("coordinates", {
                  required: {
                    value: true,
                    message: "coordinates tidak boleh kosong",
                  },
                }),
              }}/>
                  <Input className='mb-3' text='Patokan' formHookProps={{
                ...register("benchmark", {
                  required: {
                    value: true,
                    message: "benchmark tidak boleh kosong",
                  },
                }),
              }}/>
                  <Input className='mb-3' text='Logo Usaha' formHookProps={{
                ...register("logoUsaha", {
                  required: {
                    value: true,
                    message: "logoUsaha tidak boleh kosong",
                  },
                }),
              }}/>
                </div>
                {/* )} */}
                {(currentStep === 0) &&
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
                        // onClick={lanjut}
                      >
                      Lanjutkan
                      </button>
                    </div>
                  </div>
                </>}
              </form>
              {(currentStep === 2) && <>
                <Image src='/images/Verifikasi.svg' width={360} height={216} alt='gambar verifikasi' />
                <div className='p-6 flex flex-col items-center justify-center text-justify'>
                  <h2 className='font-bold'>Data usaha sedang diverifikasi</h2>
                  <p className='justify-center mt-3'>Untuk mengetahui status usahamu, kamu bisa cek halaman ini secara berkala atau kamu dapat menunggu notifikasi yang akan kami kirimkan melalui emailmu</p>
                </div>
              </>}
              {(currentStep === 3) && <h1 className='font-semibold text-[#E17301] text-xl mt-5'>Verifikasi Berhasil, HORE!!!</h1>}
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
              {(currentStep === 3) && <>
                <div onClick={lanjutkan}>
                  <Button text='Lanjutkan' size='small' />
                </div>
              </>}
            </div>
        </div>
      </div>
    </>
  )
}
