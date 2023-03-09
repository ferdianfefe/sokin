import Image from "next/image";
import React from "react";
import Input from "components/elements/Input";
import Button from "components/elements/Button";
import GoogleButton from "components/elements/GoogleButton";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";
import { signIn } from "next-auth/react";
import { useForm } from "react-hook-form";

interface IFormInputs {
  email: string;
  password: string;
}

export default function SignIn() {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInputs>();

  const onSubmit = async (data: IFormInputs) => {
    console.log(data);
    // try {
    //   const res = await fetch("/api/signin/merchant", {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify(data),
    //   });
    //   const json = await res.json();
    //   console.log(json);
    //   if (!res.ok) throw Error(json.message);
    //   router.push("/dashboard");
    // } catch (error) {
    //   console.log(error);
    // }
    const status = await signIn("credentials", {
      redirect: false,
      email: data.email,
      password: data.password,
      callbackUrl: "/merchant",
    });

    console.log(status);
    if (status?.error) {
      return alert(status.error);
    }
    router.push("/merchant");
  };

  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");

  // const submitHandler = async (e: any) => {
  //   if (email == "" || password == "") {
  //     return alert("Email dan password tidak boleh kosong");
  //   }
  //   // console.log(email + password);
  //   e.preventDefault();
  //   const status = await signIn("credentials", {
  //     redirect: false,
  //     email,
  //     password,
  //     callbackUrl: "/merchant",
  //   });

  //   console.log(status);
  //   if (status?.error) {
  //     return alert(status.error);
  //   }
  //   router.push("/merchant");
  // };

  return (
    <>
      <div className="relative flex-col items-center flex bg-[#F37D27]/25 w-full min-h-screen">
        <Image
          src="/images/SokinLogo.svg"
          width={100}
          height={100}
          alt="logo"
          className="mt-20 z-10"
        />
        <h1 className="font-black text-3xl mt-3">Sokin</h1>
        <p className="font-bold">Bisa makan apa ya hari ini?</p>
        <Image
          src="/images/Delivery.png"
          width={318}
          height={328}
          alt="delivery"
          className="absolute top-4 left-9 z-0"
        />
        <div
          className={`flex flex-col bg-white mt-[60px] w-full h-[425px] z-20 rounded-t-[35px] p-7`}
        >
          <h2 className="font-bold">Masuk ke Sokin</h2>
          <p className="text-xs text-gray-500 mb-5">
            Sebagai <span className="text-black font-bold">Merchant</span>
          </p>
          <form
            className="flex flex-col justify-evenly h-[225px]"
            onSubmit={handleSubmit(onSubmit)}
          >
            <Input
              text="Email"
              side="/images/profil.svg"
              formHookProps={{
                ...register("email", {
                  required: {
                    value: true,
                    message: "Email tidak boleh kosong",
                  },
                }),
              }}
            />
            <Input
              text="Password"
              type="password"
              side="/images/Lock.svg"
              formHookProps={{
                ...register("password", {
                  required: {
                    value: true,
                    message: "Password tidak boleh kosong",
                  },
                }),
              }}
            />
            <div className="mt-4">
              <Button
                type="submit"
                text="Masuk"
                className="justify-center rounded-[18px] shadow-[0_3px_3px_0.1px_rgb(400,100,0,0.3),inset_0_3px_7px_6px_rgb(500,500,500,0.2)] bg-[#FE8304] text-white w-full h-[39px] text-[17px]"
              />
            </div>
          </form>
          <p className="w-full flex justify-center font-medium">
            Belum memiliki akun?{" "}
            <Link
              className="text-[#FE8304] font-semibold"
              href="/merchant/signup"
            >
              &nbsp;Daftar Sekarang
            </Link>
          </p>
        </div>
        <div className="p-4 w-full">
          <h3 className="font-semibold flex justify-center">
            Masuk kembali mitra Sokin
          </h3>
          <div className="flex justify-evenly items-center w-full mt-2">
            <Button text="Sebagai Customer" size="small" href="/signin" />
            <Button
              text="Sebagai Driver"
              size="small"
              type="secondary"
              href="/driver/signin"
            />
          </div>
        </div>
      </div>
    </>
  );
}
