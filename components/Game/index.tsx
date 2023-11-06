import clsx from "clsx";
import Image from "next/image";
import React, { useState } from "react";

export const Game = () => {
  const [numbOne, setNumbOne] = useState(0);
  const [numbTwo, setNumbTwo] = useState(0);
  const [numbThree, setNumbThree] = useState(0);
  const [timeRun, setTimeRun] = useState(7);
  const [scrollValue, setScrollValue] = useState(0);
  const [available, setAvailable] = useState(true);
  const [list] = useState<number[]>(() => {
    let numb = [0];
    for (let i = 0; i < 100; i++) {
      numb.push(i % 10);
    }
    return numb;
  });

  const handleClickPlay = async () => {
    setAvailable(false);

    setTimeRun(7);
    setScrollValue(7100);

    setNumbOne(Math.floor(Math.random() * 10));
    setNumbTwo(Math.floor(Math.random() * 10));
    setNumbThree(Math.floor(Math.random() * 10));
  };

  const handleClickRefresh = async () => {
    setAvailable(true);

    setTimeRun(0);
    setScrollValue(0);

    setNumbOne(0);
    setNumbTwo(0);
    setNumbThree(0);
  };
  return (
    <div className="bg-white rounded-lg shadow-lg pb-32 pt-14">
      <div className="relative w-[519px] h-[266.4px] flex pl-7 pr-20 pt-16 pb-7 ml-[calc(50%-190px)]">
        <div className="absolute inset-0 -mr-10">
          <Image
            src={"/images/machine.png"}
            width={519}
            height={266.4}
            alt="machine"
          />
        </div>
        <div className="w-[110px] h-[172px] overflow-hidden rounded-l-[35px]">
          <div
            className={
              "w-[110px] h-[172px] ease-[cubic-bezier(.24,.83,.82,.99)]"
            }
            style={{
              transform: `translateY(-${numbOne * 100 + scrollValue}%)`,
              transition: `transform ${timeRun}s`,
            }}
          >
            {list.map((numb, idx) => (
              <div
                key={idx + "numbTwo"}
                className={"flex items-center justify-center w-full h-full p-3"}
              >
                <div className="w-[86px] h-[101px] relative">
                  <Image src={`/images/number_${numb}.png`} alt="numb" fill />
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="w-[110px] h-[172px] overflow-hidden">
          <div
            className={
              "w-[107px] h-[172px] ease-[cubic-bezier(.24,.83,.82,.99)]"
            }
            style={{
              transform: `translateY(-${numbTwo * 100 + scrollValue}%)`,
              transition: `transform ${timeRun ? timeRun + 2 : timeRun}s`,
            }}
          >
            {list.map((numb, idx) => (
              <div
                key={idx + "numbTwo"}
                className={"flex items-center justify-center w-full h-full p-3"}
              >
                <div className="w-[86px] h-[101px] relative">
                  <Image src={`/images/number_${numb}.png`} alt="numb" fill />
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="w-[110px] h-[172px] overflow-hidden rounded-r-[35px]">
          <div
            className={
              "w-[110px] h-[172px] ease-[cubic-bezier(.24,.83,.82,.99)]"
            }
            style={{
              transform: `translateY(-${numbThree * 100 + scrollValue}%)`,
              transition: `transform ${timeRun ? timeRun + 4 : timeRun}s`,
            }}
          >
            {list.map((numb, idx) => (
              <div
                key={idx + "numbTwo"}
                className={"flex items-center justify-center w-full h-full p-3"}
              >
                <div className="w-[86px] h-[101px] relative">
                  <Image src={`/images/number_${numb}.png`} alt="numb" fill />
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="absolute -bottom-16 left-20 flex gap-6 pt-6">
          <button
            onClick={handleClickPlay}
            className={clsx(
              "bg-[#08CF7C] hover:bg-[#009937]",
              "rounded-lg",
              "px-7 py-2.5",
              "cursor-pointer",
              "text-white font-bold",
              !available && "pointer-events-none opacity-70"
            )}
          >
            Quay
          </button>
          <button
            onClick={handleClickRefresh}
            className="bg-[#E53535] cursor-pointer rounded-lg px-4 py-2.5 text-white font-bold"
          >
            Làm mới
          </button>
        </div>
      </div>
    </div>
  );
};
