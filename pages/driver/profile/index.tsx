import Button from "components/elements/Button";
import Input from "components/elements/Input";
import DriverLayout from "components/layout/DriverLayout";
import { getSession, signOut, useSession } from "next-auth/react";
import { useEffect, useState } from "react";

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
  const { data, status } = useSession();

  const [profile, setProfile] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleLogout = async () => {
    await signOut();
  };

  useEffect(() => {
    setIsLoading(true);
    fetch(`/api/profile/driver/driverInfo`, {
      method: "POST",
      body: JSON.stringify({ id: data ? data?.user?.id : "" }),
    })
      .then((res) => res.json())
      .then((data) => {
        setProfile(data);
        setIsLoading(false);
        console.log(data, "data");
      });
  }, []);

  return (
    <DriverLayout location="akun">
      <div className="relative h-screen py-10 px-8">
        <h1 className="mb-6 font-bold">Informasi Akun</h1>

        <Input
          text="Nama"
          className="mb-6"
          defaultValue={profile?.name}
          type="disabled"
        />
        {/* <Input
          text="Nomor Telepon"
          className="mb-6"
          side="/images/icons/pencil.svg"
          imagePosition="right"
        /> */}
        <Input
          text="Email"
          className="mb-6"
          defaultValue={profile?.email}
          type="disabled"
        />
        <Input
          text="Password"
          className="mb-6"
          type="disabled"
          defaultValue="********"
        />
        <Button
          text="Keluar"
          type="red"
          onClickHandler={() => handleLogout()}
        />
      </div>
    </DriverLayout>
  );
};

export default Profile;
