import Button from "components/elements/Button";
import MerchantLayout from "components/layout/MerchantLayout";
import { getSession, useSession } from "next-auth/react";

const Katalog: React.FC = (): JSX.Element => {
  const { data: session, status } = useSession();
  // console.log(session?.user);
  const user = session?.user;

  console.log(user?.name);
  
  return (
    <MerchantLayout location="katalog">
      <div className="flex flex-col gap-4 min-h-screen">
        <h1>Preksu: Ayam Geprek Susu</h1>
        <Button text="+ Tambahkan" href="/merchant/katalog/add"/>
      </div>
    </MerchantLayout>
  );
};

export default Katalog;

export const getServerSideProps = async ({req}) => {
  const session = await getSession({req});
  // console.log(session);
  if (!session) {
    return {
      redirect: {
        destination: "/merchant/signin",
        permanent: false,
      },
    };
  }
  return {
    props: { session },
  }
}

