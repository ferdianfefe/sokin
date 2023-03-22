import { Menu, Switch, Transition, Combobox } from "@headlessui/react";
import Button from "components/elements/Button";
import ItemCustomer from "components/elements/ItemCustomer";
import ItemMerchant from "components/elements/ItemMerchant";
import Searchbar from "components/elements/Searchbar";
import MerchantLayout from "components/layout/MerchantLayout";
import { getSession, useSession } from "next-auth/react";
import Image from "next/image";
import { useState } from "react";
import prisma from "lib/prisma";

const Katalog = (props: { menu: any }): JSX.Element => {
  const { data: session, status } = useSession();
  // console.log(session?.user);
  const user = session?.user;

  console.log(user?.name);

  const [customerView, setcustomerView] = useState(false);

  return (
    <MerchantLayout location="katalog">
      <div className="min-h-screen">
        <div className="flex flex-col gap-4 px-4 pt-9">
          <h1 className="font-extrabold mb-2">Preksu: Ayam Geprek & Susu</h1>
        </div>
        <div className="w-full h-20 bg-c-orange-600 justify-between px-7 flex items-center">
          <Image
            src={""}
            height={80}
            width={80}
            alt={""}
            className="rounded-full bg-white"
          />
          <div className="w-3/5 flex justify-between">
            <div className="w-[45%] h-16 bg-white rounded-lg flex-col flex justify-center items-center">
              <div className="flex">
                <Image
                  src="/images/icons/star.svg"
                  height={18}
                  width={18}
                  alt={""}
                />
                <h2 className="ml-2 font-bold">4.7</h2>
              </div>
              <p className="text-gray-600 text-sm mt-1">2rb+ rating</p>
            </div>
            <div className="w-[45%] h-16 bg-white rounded-lg justify-center items-center flex flex-col">
              <div className="flex">
                <Image
                  src="/images/icons/location.svg"
                  height={18}
                  width={13}
                  alt={""}
                />
                <h2 className="ml-2 font-bold">2.2 k</h2>
              </div>
              <p className="text-gray-600 text-sm mt-1">Jarak</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4 px-4 py-6">
          <div className="flex justify-between">
            <div className="w-44 h-8 bg-c-orange-100 flex rounded-full justify-center items-center shadow-[0_3px_3px_0.1px_rgb(400,100,0,0.3),inset_0_3px_7px_6px_rgb(500,500,500,0.2)]">
              <p className="text-c-orange-700 text-sm">Customer View</p>
              <Switch
                checked={customerView}
                onChange={setcustomerView}
                className={`${
                  customerView ? "bg-c-green-700" : "bg-c-red-700"
                } relative inline-flex items-center h-6 rounded-full w-12 shadow-[inset_0_6px_10px_7px_rgb(500,500,500,0.4)] ml-3`}
              >
                <span
                  className={`${
                    customerView ? "translate-x-1" : "translate-x-7"
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
              <Menu.Items className="text-c-orange-700 items-center flex flex-col text-sm absolute right-0 mt-2 w-20 divide-gray-100 rounded-xl bg-c-orange-100 ring-opacity-5 focus:outline-none">
                <Menu.Item as="div" className="p-1">
                  {({ active }) => <a>Harga</a>}
                </Menu.Item>
                <div className="bg-c-orange-700 w-full h-[1px]"></div>
                <Menu.Item as="div" className="p-1">
                  {({ active }) => (
                    <a className={`${active && "bg-blue-500"}`}>Abjad</a>
                  )}
                </Menu.Item>
              </Menu.Items>
            </Menu>
          </div>
          <Searchbar props={props.menu} />
          {props?.menu?.map((item: any) => {
            return (
              <>
                {customerView ? (
                  <ItemCustomer
                    title={item.name}
                    price={item.price}
                    description={item.description}
                  />
                ) : (
                  <ItemMerchant
                    title={item.name}
                    price={item.price}
                    description={item.description}
                    stock={item.stock}
                  />
                )}
              </>
            );
          })}
          {/* <ItemMerchant title={"Title Title tit"} price={10000} description={""} stock={0} />
        <ItemMerchant title={"Title Title tit"} price={10000} description={""} stock={0} />
        <ItemMerchant title={"Title Title tit"} price={10000} description={""} stock={0} />
        <ItemMerchant title={"Title Title tit"} price={10000} description={""} stock={0} /> */}

          <Button
            text="+"
            href="/merchant/katalog/add"
            size="small"
            className="fixed right-4 bottom-20"
          />
        </div>
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
