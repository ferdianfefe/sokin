import { Menu, Switch, Transition, Combobox } from "@headlessui/react";
import Button from "components/elements/Button";
import ItemMerchant from "components/elements/ItemMerchant";
import Searchbar from "components/elements/Searchbar";
import MerchantLayout from "components/layout/MerchantLayout";
import { getSession, useSession } from "next-auth/react";
import { useState } from "react";

const Katalog: React.FC = (): JSX.Element => {
  const { data: session, status } = useSession();
  // console.log(session?.user);
  const user = session?.user;

  console.log(user?.name);

  const [enabled, setEnabled] = useState(false);
  return (
    <MerchantLayout location="katalog">
      <div className="flex flex-col gap-4 min-h-screen px-4 py-9">
        <h1 className="font-extrabold mb-2">Preksu: Ayam Geprek & Susu</h1>
        <div className="flex justify-between">
          <div className="w-44 h-8 bg-c-orange-100 flex rounded-full justify-center items-center shadow-[0_3px_3px_0.1px_rgb(400,100,0,0.3),inset_0_3px_7px_6px_rgb(500,500,500,0.2)]">
            <p className="text-c-orange-700 text-sm">Customer View</p>
            <Switch
              checked={enabled}
              onChange={setEnabled}
              className={`${
                enabled ? "bg-c-red-700" : "bg-c-green-700"
              } relative inline-flex items-center h-6 rounded-full w-12 shadow-[inset_0_6px_10px_7px_rgb(500,500,500,0.4)] ml-3`}
            >
              <span
                className={`${
                  enabled ? "translate-x-7" : "translate-x-1"
                } inline-block h-4 w-4 transform rounded-full bg-white transition`}
              />
            </Switch>
          </div>
          <Menu as="div" className="relative inline-block">
            <Menu.Button className="w-20 h-8 relative bg-c-orange-100 flex rounded-full justify-center items-center shadow-[0_3px_3px_0.1px_rgb(400,100,0,0.3),inset_0_3px_7px_6px_rgb(500,500,500,0.2)] text-sm text-c-orange-700">
              Sort By
            </Menu.Button>
            <Transition
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            ></Transition>
            <Menu.Items className="text-c-orange-700 items-center flex flex-col text-sm absolute right-0 mt-2 w-20 divide-gray-100 rounded-2xl bg-c-orange-100 ring-opacity-5 focus:outline-none">
              <Menu.Item as="div" className="p-1">
                {({ active }) => (
                  <a>
                    Harga
                  </a>
                )}
              </Menu.Item>
              <div className="bg-c-orange-700 w-full h-[1px]"></div>
              <Menu.Item as="div" className="p-1">
                {({ active }) => (
                  <a
                    className={`${active && "bg-blue-500"}`}
                  >
                    Abjad
                  </a>
                )}
              </Menu.Item>
            </Menu.Items>
          </Menu>
        </div>
        <Searchbar />
        <ItemMerchant title={"Title Title tit"} price={10000} description={""} stock={0} />
        <ItemMerchant title={"Title Title tit"} price={10000} description={""} stock={0} />
        <ItemMerchant title={"Title Title tit"} price={10000} description={""} stock={0} />
        <ItemMerchant title={"Title Title tit"} price={10000} description={""} stock={0} />

        <Button text="+" href="/merchant/katalog/add" size="small" className="fixed right-4 bottom-20" />
      </div>
    </MerchantLayout>
  );
};

export default Katalog;

// export const getServerSideProps = async ({req}) => {
//   const session = await getSession({req});
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
//   }
// }
