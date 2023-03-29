import { Menu, Switch, Transition, Combobox } from "@headlessui/react";
import Button from "components/elements/Button";
import ItemCustomer from "components/elements/ItemCustomer";
import ItemMerchant from "components/elements/ItemMerchant";
import MerchantLayout from "components/layout/MerchantLayout";
import { getSession, useSession } from "next-auth/react";
import Image from "next/image";
import { useState, useEffect } from "react";
import prisma from "lib/prisma";
import Search from "public/img/homepage/icon-search.png";
import { useRouter } from "next/router";

const Merchant = (props: { menu: any }): JSX.Element => {
  const router = useRouter();

  const [menu, setMenu] = useState([]);
  const [name, setName] = useState("");
  const [logo, setLogo] = useState("");
  const [keyword, setKeyword] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [similar, setSimilar] = useState([]);

  const { data: session, status } = useSession();
  // console.log(session?.user);
  const user = session?.user;

  // console.log(router.query);

  useEffect(() => {
    fetch("/api/profile/merchant", {
      method: "POST",
      body: JSON.stringify({ id: router.query.id }),
    }).then((res) => res.json()).then((data) => {
      setMenu(data.data);
      setName(data.name);
      setLogo(data.logo);
    })
  }, []);

  const [customerView, setcustomerView] = useState(false);

  const change = (e: any) => {
    setKeyword(e.target.value);
    // console.log(keyword);
  }

  const search = async (e: any) => {
    if (e.key === "Enter" || e === "Enter") {
      // setFixKeyword(keyword);
      // Router.push(`/search?keyword=${keyword}`);
      console.log(keyword);
      e.target.value = "";
      setKeyword("");
      await fetch(`/api/search`, {
        method: "POST",
        body: JSON.stringify({keyword: keyword})
      }).then(res => res.json()).then(data => {
        console.log(data.data);
        setSearchResult(data.data);
        setSimilar(data.data2);
      })
    }
  }

  return (
    <MerchantLayout location="katalog">
      <div className="min-h-screen">
        <div className="flex flex-col gap-4 px-4 pt-9">
          <h1 className="font-extrabold mb-2">{name}</h1>
        </div>
        <div className="w-full h-20 bg-c-orange-600 justify-between px-7 flex items-center">
          {/* <Image
            src={""}
            height={80}
            width={80}
            alt={""}
            className="rounded-full bg-white"
          /> */}
          <Image
            alt="logo"
            src={logo}
            width={80}
            height={80}
            className="rounded-full bg-white"
          ></Image>
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
        <div className="mt-4 px-4">
        <div className="relative flex">
              {/* ICON */}
              <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                <Image src={Search} alt={""} />
              </span>
              <input
                placeholder="Cari makananmu"
                type="text"
                className="bg-[#FE8304] rounded-full bg-opacity-40 w-full py-[6px] px-14 font-bold text-sm placeholder-[#817A7A] bg-auto focus:outline-none"
                onChange={change}
                onKeyDown={search}
              ></input>
            </div>
        </div>
        <div className="flex flex-col gap-4 px-4 py-6">
          <div className="flex justify-end">
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
          <div className={"grid grid-cols-2 gap-4"}>
            {menu.length != 0 && menu.map((item: any, index: number) => (
              <div className="" key={index}>
                  <ItemCustomer
                    title={item.name}
                    price={item.price}
                    description={item.description}
                    image={item.image}
                  />
              </div>
            ))}
            {/* {props?.menu?.map((item: any, index: number) => {
              return (
                <div className="" key={index}>
                    <ItemCustomer
                      title={item.name}
                      price={item.price}
                      description={item.description}
                      image={item.image}
                    />
                </div>
              );
            })} */}
          </div>
          {/* <ItemMerchant title={"Title Title tit"} price={10000} description={""} stock={0} />
        <ItemMerchant title={"Title Title tit"} price={10000} description={""} stock={0} />
        <ItemMerchant title={"Title Title tit"} price={10000} description={""} stock={0} />
        <ItemMerchant title={"Title Title tit"} price={10000} description={""} stock={0} /> */}
        </div>
      </div>
    </MerchantLayout>
  );
};

export default Merchant;

// const SearchBar: React.FunctionComponent = (): JSX.Element => {
//   return (
//     <>
//       <div className="relative flex">
//         {/* ICON */}
//         <span className="absolute inset-y-0 left-0 flex items-center pl-3">
//           <Image src={Search} alt={""} />
//         </span>
//         <input
//           placeholder="Cari makananmu"
//           type="text"
//           className="bg-[#FE8304] rounded-full bg-opacity-40 w-full py-[6px] px-14 font-bold text-sm placeholder-[#817A7A] bg-auto focus:outline-none"
//           //onChange={change}
//           //onKeyDown={search}
//         ></input>
//       </div>
//     </>
//   );
// };

// export const getServerSideProps = async ({ req }: { req: any }) => {
//   // const router = useRouter();
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

//   const data = await prisma.menu.findMany({
//     where: {
//       ownerId: router.query.id,
//     }
//   })

//   return {
//     props: { menu: data },
//   };
// };
