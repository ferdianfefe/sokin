import Button from "components/elements/Button";
import Input from "components/elements/Input";
import DefaultLayout from "components/layout/DefaultLayout";
import MerchantLayout from "components/layout/MerchantLayout";
import { getSession, signOut } from "next-auth/react";

export async function getServerSideProps(context: any) {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: "/signin",
        permanent: false,
      },
    };
  }

  return {
    props: {
      session,
    },
  };
}

const Profile: React.FC = (): JSX.Element => {
  const handleLogout = async () => {
    await signOut();
  };
  return (
    <MerchantLayout location="akun">
      <div className="relative h-screen py-10 px-8">
        <h1 className="mb-6 font-bold">Informasi Akun</h1>

        <Input text="Nama" className="mb-6" defaultValue={""} />
        <Input
          text="Nomor Telepon"
          className="mb-6"
          side="/images/icons/pencil.svg"
          imagePosition="right"
        />
        <Input text="Email" className="mb-6" />
        <Input text="Password" className="mb-6" />
        <Button
          text="Keluar"
          type="red"
          onClickHandler={() => handleLogout()}
        />
      </div>
    </MerchantLayout>
  );
};

export default Profile;
