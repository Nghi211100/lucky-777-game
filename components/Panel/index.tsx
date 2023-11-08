import clsx from "clsx";
import Image from "next/image";
import React from "react";

const Panel = () => {
  return (
    <div
      className={clsx(
        "bg-[linear-gradient(270deg,#DEFBAE_0%,#08C978_60.68%)]",
        "text-white",
        "rounded-lg",
        "relative",
        "w-full h-[96px] md:h-[200px]"
      )}
    >
      <div className="relative w-full h-[96px] md:h-[200px] flex flex-col justify-center">
        <div className="max-w-[calc(100%-130px+32px)] md:max-w-none p-4 md:py-7 md:px-6 ">
          <div
            className={clsx(
              "text-sm md:text-4xl font-bold",
              "flex items-center gap-1",
              "pb-2"
            )}
          >
            <p>Quay số trúng thưởng Launchpad CST</p>
          </div>
          <p className="text-xs md:text-lg">
            Cam kết launchpad, rinh ngay quà về!
          </p>
        </div>
      </div>
      <div className="absolute bottom-0 right-0">
        <div className="relative w-[428px] h-[160px] md:block hidden">
          <Image
            src={"/images/bounty.png"}
            alt="bounty"
            width={1370}
            height={512}
          />
        </div>
        <div className="relative w-[147px] h-[96px] md:hidden block">
          <Image src={"/images/bountyMobile.png"} alt="bounty" layout="fill" />
        </div>
      </div>
    </div>
  );
};

export default Panel;
