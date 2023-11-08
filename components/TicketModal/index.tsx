import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import clsx from "clsx";
import React, { Dispatch, Fragment, SetStateAction } from "react";
import Modal from "../Modal";

export const TicketModal = ({
  open,
  setOpen,
  ticketList,
}: {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  ticketList: number[];
}) => {
  console.log(ticketList);

  return (
    <Modal open={open} setOpen={setOpen} title="Danh sách vé">
      <div className="grid grid-cols-8 gap-y-6 gap-x-10">
        {ticketList.map((ticket, idx) => (
          <p key={ticket}>
            {idx + 1}. <span className="font-bold">{ticket}</span>
          </p>
        ))}
      </div>
    </Modal>
  );
};
