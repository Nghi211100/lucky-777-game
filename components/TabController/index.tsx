import clsx from "clsx";
import Image from "next/image";
import React, { Dispatch, SetStateAction } from "react";

export const TabController = ({
  tab,
  setTab,
}: {
  tab: number;
  setTab: Dispatch<SetStateAction<number>>;
}) => {
  const items = [
    { name: "Quay số trúng thưởng", id: 1, img: "game" },
    { name: "Danh sách mã vé", id: 2, img: "ticket_list" },
  ];
  return (
    <div className="flex gap-2 md:gap-6 py-6">
      {items.map((item) => (
        <div
          className={clsx(
            "flex flex-col md:flex-row gap-1 md:gap-3 items-center justify-center",
            "py-3",
            "w-1/2",
            "border border-[#E6E7E8]",
            "rounded-tl-2xl rounded-br-2xl",
            "cursor-pointer",
            "bg-white",
            "text-neutral-400",
            item.id === tab &&
              "!bg-[#30325a] !text-white font-bold shadow-[2px_8px_16px_rgba(0,0,0,0.2)]"
          )}
          key={item.name}
          onClick={() => setTab(item.id)}
        >
          <div className="relative w-6 h-6 md:w-8 md:h-8">
            <Image src={`/images/${item.img}.png`} fill alt={item.name} />
          </div>

          <p className="text-xs md:text-base">{item.name}</p>
        </div>
      ))}
    </div>
  );
};
