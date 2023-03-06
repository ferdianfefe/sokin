import Button from "components/elements/Button";
import Input from "components/elements/Input";
import MerchantLayout from "components/layout/MerchantLayout";
import Image from "next/image";
import { useState } from "react";
import { useForm } from "react-hook-form";

interface IFormInputs {
  namaProduk: string;
  harga: number;
  kategori: string;
  deskripsi: string;
  stok: number;
}

const Add: React.FC = (): JSX.ELement => {
  const [currentFile, setCurrentFile] = useState<File | null>(null);
  const [previewImage, setPreviewImage] = useState<string | ArrayBuffer | null>(
    null
  );

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInputs>();

  const submitHandler: SubmitHandler<IFormInputs> = async (
    data: IFormInputs
  ) => {
    console.log(data);
  };

  return (
    <MerchantLayout location="katalog">
      <div className="flex flex-col gap-4 min-h-screen p-4">
        <h1 className="text-center font-bold mb-3">
          Preksu: Ayam Geprek dan Susu
        </h1>
        <h1 className="text-center mb-2">Foto Produk</h1>
        <form onSubmit={handleSubmit(submitHandler)}>
          <input type="file" id="picture" className="hidden" />
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
          <Button text="Tambahkan" isSubmit={true}/>
        </form>
      </div>
    </MerchantLayout>
  );
};

export default Add;
