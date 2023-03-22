import { Fragment, useState } from "react";
import { Combobox, Transition } from "@headlessui/react";
// const people = [
//   { id: 1, name: "Wade Cooper" },
//   { id: 2, name: "Arlene Mccoy" },
//   { id: 3, name: "Devon Webb" },
//   { id: 4, name: "Tom Cook" },
//   { id: 5, name: "Tanya Fox" },
//   { id: 6, name: "Hellen Schmidt" },
// ];

export default function Example(props: any) {
  // console.log(props.props);
  const [selected, setSelected] = useState({name: ""});
  const [query, setQuery] = useState("");

  const menus = props.props;

  const filteredMenus =
    query === ""
      ? menus
      : menus.filter((menu: any) =>
          menu.name
            .toLowerCase()
            .replace(/\s+/g, "")
            .includes(query.toLowerCase().replace(/\s+/g, ""))
        );

  return (
    <>
      <Combobox value={selected} onChange={setSelected}>
        <div className="w-full h-8 rounded-full">
          <div className="w-full overflow-hidden border-[1px] border-c-orange-700 rounded-full text-left shadow-md items-center">
            <Combobox.Input
              className="w-full pl-3 pt-[7px] pr-10 text-sm rounded-full text-gray-900 outline-none"
              displayValue={(menu: { name: any}) => menu?.name}
              onChange={(event) => setQuery(event.target.value)}
            />
          </div>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            afterLeave={() => setQuery("")}
          >
            <Combobox.Options className="absolute mt-1 left-0 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 sm:text-sm">
              {filteredMenus.length === 0 && query !== "" ? (
                <div className="relative cursor-default select-none py-2 px-4 text-gray-700">
                  Nothing found.
                </div>
              ) : (
                filteredMenus.map((menu: any) => (
                  <Combobox.Option
                    key={menu.id}
                    className={({ active }) =>
                      `relative cursor-default select-none py-2 pl-10 pr-4 ${
                        active ? "bg-teal-600 text-white" : "text-gray-900"
                      }`
                    }
                    value={menu}
                  >
                    {({ selected, active }) => (
                      <>
                        <span
                          className={`block truncate ${
                            selected ? "font-medium" : "font-normal"
                          }`}
                        >
                          {menu.name}
                        </span>
                        {selected ? (
                          <span
                            className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                              active ? "text-white" : "text-teal-600"
                            }`}
                          >
                          </span>
                        ) : null}
                      </>
                    )}
                  </Combobox.Option>
                ))
              )}
            </Combobox.Options>
          </Transition>
        </div>
      </Combobox>
    </>
  );
}
