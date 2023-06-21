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
import Navbar from "components/elements/Navbar";
import DefaultLayout from "components/layout/DefaultLayout";
import { set } from "react-hook-form";

const Merchant = (props: { menu: any }): JSX.Element => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  const [menu, setMenu] = useState([]);
  const [name, setName] = useState("");
  const [logo, setLogo] = useState("");
  const [keyword, setKeyword] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [similar, setSimilar] = useState([]);
  const [addMenuIsOpen, setAddMenuIsOpen] = useState(false);
  const [addedMenuData, setAddedMenuData] = useState({
    title: "",
    price: 0,
    image: "",
    description: "",
  });

  const { data: session, status } = useSession();
  const user = session?.user;

  const clickAddMenuHandler = (
    id: string,
    title: string,
    price: number,
    image: string,
    description: string
  ) => {
    setAddMenuIsOpen(true);
    setAddedMenuData({ id, title, price, image, description });
  };

  const sortBy = (param: string) => {
    let newMenu = menu.sort((a, b) => {
      if (param === "price") {
        return a.price - b.price;
      } else if (param === "name") {
        return a.name.localeCompare(b.name);
      }
    });

    setMenu(newMenu);
    newMenu = searchResult.sort((a, b) => {
      if (param === "price") {
        return a.price - b.price;
      } else if (param === "name") {
        return a.name.localeCompare(b.name);
      }
    });
    setSearchResult(newMenu);
  };

  useEffect(() => {
    setIsLoading(true);
    fetch("/api/profile/merchant", {
      method: "POST",
      body: JSON.stringify({ id: router.query.id }),
    })
      .then((res) => res.json())
      .then((data) => {
        setMenu(data.data);
        setName(data.name);
        setLogo(data.logo);
        setIsLoading(false);
      });
  }, []);

  useEffect(() => {
    if (user) {
      fetch(
        "/api/cart?" +
          new URLSearchParams({
            userId: user.id,
          }),
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          console.log("data", data);
          setCartItemNumber((data) ? data.menuItems.length : 0);
        });
    }
  }, [user]);

  const [customerView, setcustomerView] = useState(false);
  const [cartItemNumber, setCartItemNumber] = useState(0);

  const change = (e: any) => {
    setKeyword(e.target.value);

    let newMenu = menu.filter((item: any) => {
      return item.name.toLowerCase().includes(keyword.toLowerCase());
    });

    setSearchResult(newMenu);
    setSimilar(newMenu);
  };

  const search = async (e: any) => {
    if (e.key === "Enter" || e === "Enter") {
      e.target.value = "";

      let newMenu = menu.filter((item: any) => {
        return item.name.toLowerCase().includes(keyword.toLowerCase());
      });

      setSearchResult(newMenu);
      setSimilar(newMenu);

      setKeyword("");
      // await fetch(`/api/menu/find`, {
      //   method: "GET",
      //   body: JSON.stringify({ keyword: keyword }),
      // })
      //   .then((res) => res.json())
      //   .then((data) => {
      //     setSearchResult(data.data);
      //     setSimilar(data.data2);
      //   });
    }
  };

  const addToCart = async (menuId, quantity) => {
    console.log(menuId, quantity, user.id, router.query.id);
    await fetch(`/api/cart?action="addMenuItem"`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userId: user.id,
        menuId,
        quantity,
        merchantId: router.query.id,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        setAddMenuIsOpen(false);
        fetch(
          "/api/cart/" +
            new URLSearchParams({
              userId: user.id,
            }),
          {
            method: "GET",
          }
        )
          .then((res) => {
            return res.json();
          })
          .then((data) => {
            console.log(data)
            setCartItemNumber(data.menuItems.length);
          });
      });
  };

  return (
    <DefaultLayout location="pesan" isLoading={isLoading}>
      <div className="fixed p-4 bottom-20 right-6 bg-c-orange-800 rounded-full shadow-2xl shadow-neutral-900">
        <div className="w-6 h-6 absolute bg-c-red-700 -left-[10%] -top-[10%] rounded-full text-neutral-50 flex justify-center items-center">
          <small className="text-xs">{cartItemNumber}</small>
        </div>
        <div
          className="relative w-8 h-8"
          onClick={() => {
            // router.push({
            //   pathname: "/cart",
            //   query: {
            //     merchant: router.query.id,
            //   },
            // });
            router.push("/cart");
          }}
        >
          <Image src="/images/icons/cart.svg" alt="cart-icon" fill />
        </div>
      </div>
      <AddMenuPopUp
        show={addMenuIsOpen}
        setAddMenuIsOpen={setAddMenuIsOpen}
        menuData={addedMenuData}
        addToCart={addToCart}
      />
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
        <div className="overflow-hidden w-[80px] h-[80px] bg-white rounded-full">
          <Image
            alt="logo"
            src={logo}
            width={80}
            height={80}
            className="rounded-full bg-white object-cover w-full h-full "
          ></Image>
        </div>
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
      <div className={`mt-4 px-4 
      `}>
        <div className={`relative flex
          ${addMenuIsOpen? '-z-10': 'z-10'}
        `}>
          {/* ICON */}
          <span className="absolute inset-y-0 left-0 flex items-center pl-3 ">
            <Image src={Search} alt={""} />
          </span>
          <input
            placeholder="Cari makananmu"
            type="text"
            className="bg-[#FE8304] rounded-full bg-opacity-40 w-full py-[6px] px-14 font-bold text-sm placeholder-[#817A7A] bg-auto focus:outline-none "
            onChange={change}
            onKeyDown={search}
          ></input>
        </div>
      </div>
      <div className="flex flex-col gap-4 px-4 py-6">
        <div className="flex justify-end">
          <Menu as="div" className="relative inline-block">
            <Menu.Button className={`w-20 h-8 relative bg-c-orange-100 flex rounded-full justify-center items-center shadow-[0_3px_3px_0.1px_rgb(400,100,0,0.3),inset_0_3px_7px_6px_rgb(500,500,500,0.2)] text-sm text-c-orange-700 z-10
              ${addMenuIsOpen? '-z-10': 'z-10'}
            `}>
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
              <Menu.Item
                as="div"
                className="p-1"
                onClick={() => sortBy("price")}
              >
                {({ active }) => <a>Harga</a>}
              </Menu.Item>
              <div className="bg-c-orange-700 w-full h-[1px]"></div>
              <Menu.Item
                as="div"
                className="p-1"
                onClick={() => sortBy("name")}
              >
                {({ active }) => (
                  <a className={`${active && "bg-blue-500"}`}>Abjad</a>
                )}
              </Menu.Item>
            </Menu.Items>
          </Menu>
        </div>
        <div className="flex justify-center">
          <div className={"grid grid-cols-2 gap-6 md:gap-10"}>
            {searchResult.length > 0
              ? searchResult.map((item: any, index: number) => (
                  <div className="" key={index}>
                    <ItemCustomer
                      onAddMenu={clickAddMenuHandler}
                      addToCart={addToCart}
                      id={item.id}
                      title={item.name}
                      price={item.price}
                      description={item.description}
                      image={item.image}
                    />
                  </div>
                ))
              : menu.map((item: any, index: number) => (
                  <div className="" key={index}>
                    <ItemCustomer
                      onAddMenu={clickAddMenuHandler}
                      addToCart={addToCart}
                      id={item.id}
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
        </div>
        {/* <ItemMerchant title={"Title Title tit"} price={10000} description={""} stock={0} />
        <ItemMerchant title={"Title Title tit"} price={10000} description={""} stock={0} />
        <ItemMerchant title={"Title Title tit"} price={10000} description={""} stock={0} />
        <ItemMerchant title={"Title Title tit"} price={10000} description={""} stock={0} /> */}
      </div>
    </DefaultLayout>
  );
};

export default Merchant;

const AddMenuPopUp = ({
  show,
  setAddMenuIsOpen = () => {},
  menuData,
  addToCart = () => {},
}: {
  show: boolean;
  setAddMenuIsOpen: Function;
  menuData: object;
  addToCart: Function;
}): JSX.Element => {
  const [itemCount, setItemCount] = useState(1);

  const handleClose = () => {
    setAddMenuIsOpen(false);
  };

  return (
    <div
      className={`fixed w-full h-full top-0 left-0 flex items-center justify-center transition-transform duration-400 ease-in-out ${
        show ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
      }`}
    > 
      <div className="backdrop-blur w-full h-full absolute z-40">
        <div className="absolute w-full h-full opacity-30"></div>
      </div>
      <div className="bg-white rounded-t-[25px] p-8 transform translate-y-0 transition-transform duration-300 ease-in-out mt-72 z-[99]">
        <button
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 transition duration-300 "
          onClick={handleClose}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8 mr-2 mt-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        <h1 className="text-center mb-6 font-extrabold text-3xl">Tambah Menu</h1>
        <div className="flex mb-6">
          <div className="relative w-40 h-40 flex-1">
            <Image
              src={menuData.image}
              alt="menuImage"
              fill
              className="object-cover rounded-3xl"
            />
          </div>
          <div className="ml-3 flex-1">
            <h1 className="font-bold">{menuData.title}</h1>
            <h1 className="font-bold">Rp {menuData.price}</h1>
            <small className="text-[#ADADAD]">{menuData.description}</small>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <p className="font-bold">Jumlah Pesanan</p>
          <div className="flex items-center gap-4">
            <Image
              src={"/images/icons/minus-icon.svg"}
              alt="minusIcon"
              width={40}
              height={40}
              onClick={() => {
                if (itemCount > 1) {
                  setItemCount(itemCount - 1);
                }
              }}
            />
            <p>{itemCount}</p>
            <Image
              src={"/images/icons/plus-icon.svg"}
              alt="plusIcon"
              width={40}
              height={40}
              onClick={() => {
                setItemCount(itemCount + 1);
              }}
            />
          </div>
        </div>
        <div className="">
          <Button
            text={`Tambah Pesanan - Rp ${menuData.price * itemCount}`}
            className="font-bold"
            onClickHandler={() => {
              addToCart(menuData.id, itemCount);
            }}
          ></Button>
        </div>
      </div>
    </div>
  );
};

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
