import { useState, Fragment } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, SelectorIcon } from "@heroicons/react/solid";
import { SortType } from "../../types";

type SortTypes = { id: number; name: SortType };

const sortTypes: SortTypes[] = [
  { id: 1, name: "asc" },
  { id: 2, name: "desc" },
];

type SortListboxProps = {
  onChange: (sortType: SortType) => void;
};

function SortListbox({ onChange }: SortListboxProps) {
  const [selectedType, setSelectedSortType] = useState<SortTypes>(sortTypes[0]);

  const handleChange = (selected: SortTypes) => {
    setSelectedSortType(selected);
    onChange(selected.name);
  };

  return (
    <div className="w-22">
      <Listbox value={selectedType} onChange={handleChange}>
        <div className="relative mt-1">
          <Listbox.Button className="relative w-full py-2 pl-3 pr-10 text-left bg-white rounded-lg shadow-md cursor-default focus:outline-none focus-visible:ring-2 focus-visible:ring-opacity-75 focus-visible:ring-white focus-visible:ring-offset-orange-300 focus-visible:ring-offset-2 focus-visible:border-indigo-500 sm:text-sm">
            <span className="block truncate">{selectedType.name}</span>
            <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
              <SelectorIcon
                className="w-5 h-5 text-gray-400"
                aria-hidden="true"
              />
            </span>
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="absolute w-full py-1 mt-1 overflow-auto text-base bg-white rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
              {sortTypes.map((sortType, Idx) => (
                <Listbox.Option
                  key={Idx}
                  className={({ active }) =>
                    `${active ? "text-gray-900 bg-sky-100" : "text-gray-900"}
                          cursor-default select-none relative p-2 pr-4`
                  }
                  value={sortType}
                >
                  {({ selected, active }) => (
                    <span
                      className={`${
                        selected ? "font-medium" : "font-normal"
                      } block truncate`}
                    >
                      {sortType.name}
                    </span>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  );
}

export default SortListbox;
