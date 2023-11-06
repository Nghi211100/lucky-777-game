import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import clsx from "clsx";
import React, { Fragment } from "react";

export const TicketDropdown = ({ ticketList }: { ticketList: number[] }) => {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="inline-flex w-full justify-center items-center gap-x-1.5 rounded-md bg-white pr-3 text-lg">
          {ticketList[0]}
          <ChevronDownIcon
            className="-mr-1 h-5 w-5 text-gray-400"
            aria-hidden="true"
          />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items
          className={clsx(
            "absolute right-0 z-10",
            "mt-2",
            "w-56",
            "origin-top-right",
            "rounded-md",
            "bg-white",
            "shadow-lg",
            "ring-1 ring-black ring-opacity-5",
            "focus:outline-none",
            "max-h-[300px]",
            "overflow-y-auto",
            "css-scroll"
          )}
        >
          <div className="py-1">
            {ticketList.map((ticket) => (
              <Menu.Item key={ticket}>
                {({ active }) => (
                  <a
                    href="#"
                    className={clsx(
                      active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                      "block px-4 py-2 text-sm"
                    )}
                  >
                    {ticket}
                  </a>
                )}
              </Menu.Item>
            ))}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};
