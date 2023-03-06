import Button from "components/elements/Button";
import Input from "components/elements/Input";
import MerchantLayout from "components/layout/MerchantLayout";
import Image from "next/image";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

interface IFormInputs {
  namaProduk: string;
  harga: number;
  kategori: string;
  deskripsi: string;
  stok: number;
}

const Add: React.FC = (): JSX.Element => {
  const [currentFile, setCurrentFile] = useState<File | null>(null);
  const [previewImage, setPreviewImage] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
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

  const submitHandler: SubmitHandler<IFormInputs> = async (
    data: IFormInputs
  ) => {
    const { namaProduk, harga, kategori, deskripsi, stok } = data;
    if (currentFile) {
      const formData = new FormData();
      formData.append("file", currentFile);
      formData.append("name", namaProduk);
      formData.append("price", harga.toString());
      formData.append("category", kategori);
      formData.append("description", deskripsi);
      formData.append("stock", stok.toString());

      const res = await fetch(
        "/api/merchant//add",
        {
          method: "POST",
          body: formData,
        }
      );
      const json = await res.json();
      console.log(json);
    }
  };

  return (
    <MerchantLayout location="katalog">
      <div className="flex flex-col gap-4 min-h-screen p-4">
        <h1 className="text-center font-bold mb-3">
          Preksu: Ayam Geprek dan Susu
        </h1>
        <h1 className="text-center mb-2">Foto Produk</h1>
        <form onSubmit={handleSubmit(submitHandler)}>
          {previewImage ? (
            <div className="rounded-full relative w-24 h-24 overflow-hidden">
              <Image
                src={previewImage}
                alt="preview"
                layout="fill"
                objectFit="contain"
              />
            </div>
          ) : (
            <div className="rounded-full w-24 h-24 bg-[#C4C4C4]"></div>
          )}
          <input
            type="file"
            id="picture"
            className="hidden"
            onChange={pickPicture}
          />
          <label htmlFor="picture">
            <div className="relative h-32 w-32 mx-auto mb-2">
              <Image
                alt="camera icon"
                src={"/images/icons/camera-primary.svg"}
                fill
              />
            </div>
          </label>
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
          <Input
            text="Kategori"
            formHookProps={{
              ...register("kategori", {
                required: "Kategori tidak boleh kosong",
              }),
            }}
            className="mb-3"
            error={errors.kategori}
          />
          <Input
            text="Deskripsi"
            formHookProps={{
              ...register("deskripsi", {
                required: "Dekskripsi tidak boleh kosong",
              }),
            }}
            className="mb-3"
            error={errors.deskripsi}
          />
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
          <Button text="Tambahkan" isSubmit={true} />
        </form>
      </div>
    </MerchantLayout>
  );
};

export default Add;
