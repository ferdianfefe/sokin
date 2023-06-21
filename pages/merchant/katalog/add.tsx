import Button from "components/elements/Button";
import Input from "components/elements/Input";
import MerchantLayout from "components/layout/MerchantLayout";
import { getSession, useSession } from "next-auth/react";
import Image from "next/image";
import { useState, useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useRouter } from "next/router";
import InputImageRound from "components/elements/InputImageRound";

interface IFormInputs {
  id: string;
  namaProduk: string;
  harga: number;
  kategori: string;
  deskripsi: string;
  stok: number;
}

const Add: React.FC = (): JSX.Element => {
  const [currentFile, setCurrentFile] = useState<File | null>(null);
  const [previewImage, setPreviewImage] = useState<string | null>(null);
  const [menuImage, setMenuImage] = useState<File | null>(null);

  const { data: session, status } = useSession();

  const router = useRouter();

  let id: any = null;

  if (router.query.id) {
    id = router.query.id;
  }

  const user = session.user;

  console.log(user?.id);

  useEffect(() => {
    if (router.query.id) {
      fetch("/api/menu/edit", { method: "POST", body: JSON.stringify({ id }) })
        .then((res) => res.json())
        .then((data) => {
          setValue("namaProduk", data.name);
          setValue("harga", data.price);
          setValue("kategori", data.category);
          setValue("deskripsi", data.description);
          setValue("stok", data.stock);
          setValue("id", id);
        })
        .catch((e) => console.log(e));
    }
  }, []);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<IFormInputs>();

  const pickPicture = (e: any) => {
    e.preventDefault();
    const file = e.target.files[0];
    if (file) {
      setCurrentFile(file);
      setPreviewImage(URL.createObjectURL(file));
    }
  };

  const uploadImageHandler = async (key: string, file: File) => {
    setMenuImage(file);
  };

  const submitHandler: SubmitHandler<IFormInputs> = async (
    data: IFormInputs
  ) => {
    let id = session ? session.user.id : "";
    const { namaProduk, harga, kategori, deskripsi, stok } = data;
    if (true /*currentFile*/) {
      const menuLogoFd = new FormData();
      menuLogoFd.append("file", menuImage);
      menuLogoFd.append("upload_preset", "menu-upload");

      const menuLogoUploaded = await fetch(
        "https://api.cloudinary.com/v1_1/dhzuyy5bo/image/upload",
        {
          method: "POST",
          body: menuLogoFd,
        }
      ).then((res) => res.json());
      console.log("gambar", menuLogoUploaded.secure_url)
      const formData = new FormData();

      if (router.query.id) {
        formData.append("id", id);
      }
      formData.append("name", namaProduk);
      formData.append("price", harga.toString());
      formData.append("category", kategori);
      formData.append("description", deskripsi);
      formData.append("stock", stok.toString());
      formData.append("image", menuLogoUploaded.secure_url);

      const res = await fetch("/api/menu/handler", {
        method: "POST",
        body: JSON.stringify({ ...data, user: user?.id, image: menuLogoUploaded.secure_url }),
      });
      const json = await res.json();
      console.log(json);
      if (!res.ok) throw Error(json.message);
      router.push("/merchant/katalog");
    }
  };

  const hapus = async () => {
    const res = await fetch("/api/menu/handler", {
      method: "DELETE",
      body: JSON.stringify({ id }),
    });
    const json = await res.json();
    console.log(json);
    if (!res.ok) throw Error(json.message);
    router.push("/merchant/katalog");
  };

  return (
    <MerchantLayout location="katalog">
      {/* <div onClick={test}>tes</div> */}
      <div className="flex flex-col gap-4 min-h-screen px-10 py-20">
        <h1 className="text-center font-extrabold mb-3">
          {session?.user?.name}
        </h1>
        <h1 className="text-center mb-2 font-medium">Foto Produk</h1>
        <form onSubmit={handleSubmit(submitHandler)}>
          <InputImageRound
            name="menuImage"
            handleUploadFile={uploadImageHandler}
          />
          <Input
            text="id"
            formHookProps={{
              ...register("id"),
            }}
            className="hidden"
          />
          <Input
            text="Nama Produk"
            formHookProps={{
              ...register("namaProduk", {
                required: "Nama produk tidak boleh kosong",
              }),
            }}
            error={errors.namaProduk}
            className="mb-3"
          />
          <Input
            text="Harga"
            formHookProps={{
              ...register("harga", {
                required: "Harga tidak boleh kosong",
              }),
            }}
            className="mb-3"
            error={errors.harga}
          />
          <div className="relative w-full h-full">
            <Input
              text="Kategori"
              // type="dropdown"
              formHookProps={{
                ...register("kategori", {
                  required: "Kategori tidak boleh kosong",
                }),
              }}
              className="mb-3"
              error={errors.kategori}
            />
            {/* SEMENTARA */}
            {/* <svg className="absolute top-8 right-4" width="19" height="9" viewBox="0 0 19 9" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 1L9.5 7.885L18 1" stroke="#FE8304" stroke-width="1.72125" stroke-linecap="round" stroke-linejoin="round" />
            </svg> */}
          </div>
          <Input
            type="comment"
            text="Deskripsi"
            formHookProps={{
              ...register("deskripsi", {
                required: "Dekskripsi tidak boleh kosong",
              }),
            }}
            className="mb-3"
            error={errors.deskripsi}
          />
          {/* <Input
            text="Stok"
            type="dropdown"
            formHookProps={{
              ...register("stok", {
                required: "Stok tidak boleh kosong",
              }),
            }}
            className="mb-3"
            error={errors.stok}
          /> */}
          <Input
            text="Stok"
            formHookProps={{
              ...register("stok", {
                required: "Stok tidak boleh kosong",
              }),
            }}
            className="mb-3"
            error={errors.stok}
          />

          <div className="h-8"></div>
          <div className={router.query.id ? "" : "hidden"} onClick={hapus}>
            <Button text="Hapus Menu" type="red" />
          </div>
          <br></br>
          <button
            type="submit"
            className="font-black justify-center rounded-[18px] shadow-[0_3px_3px_0.1px_rgb(400,100,0,0.3),inset_0_3px_7px_6px_rgb(500,500,500,0.2)] bg-[#FE8304] text-white w-full h-[39px] text-[17px] mt-65"
          >
            {router.query ? "Simpan" : "Tambahkan"}
          </button>
          {/* <Button text="Tambahkan" isSubmit={true} /> */}
        </form>
      </div>
    </MerchantLayout>
  );
};

export default Add;

// export const getServerSideProps = async ({ req }: { req: any }) => {
//   const session = await getSession({ req });
//   // console.log(session);
//   if (!session) {
//     return {
//       redirect: {
//         destination: "/merchant/signin",
//         permanent: false,
//       },
//     };
//   }
//   return {
//     props: { session },
//   };
// };
