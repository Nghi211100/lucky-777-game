import CheckLogin from "@/app/features/checkLogin";
import useAnnounceLotteryPrizeAPI from "@/hook/services/announceLotteryPrize.service";
import useListPrizeTicketAPI, {
  ENDPOINT_LOTTERY_PRIZE_TICKET,
  ILotteryPrize,
} from "@/hook/services/listPrizeTicket.service";
import clsx from "clsx";
import Image from "next/image";
import { useState } from "react";
import { useQueryClient } from "react-query";
import { TicketPrizeTable } from "../TicketList/TicketTable.component";

export const sleep = (timeMs: number): Promise<void> =>
  new Promise((resolve) => setTimeout(resolve, timeMs));

export const MAX_PRIZE_LEVEL = 6;

export const Game = () => {
  const queryClient = useQueryClient();

  const checkLogin = CheckLogin();
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

  const announceLotteryPrizeAPI = useAnnounceLotteryPrizeAPI();
  const { data } = useListPrizeTicketAPI();

  const handleClickRefresh = async () => {
    setTimeRun(0);
    setScrollValue(0);

    setNumbOne(0);
    setNumbTwo(0);
    setNumbThree(0);
  };

  const handleClickPlay = async () => {
    await handleClickRefresh();

    await sleep(100);

    setAvailable(false);
    setTimeRun(7);
    setScrollValue(7100);

    const res = await announceLotteryPrizeAPI.mutateAsync();
    const { prizeTicketArr, nextPrize } = res;

    setTimeRun(7);
    setScrollValue(7100);

    setNumbOne(prizeTicketArr[0]);
    setNumbTwo(prizeTicketArr[1]);
    setNumbThree(prizeTicketArr[2]);

    await sleep(12_000);
    setAvailable(!!nextPrize);

    queryClient.invalidateQueries({
      queryKey: ENDPOINT_LOTTERY_PRIZE_TICKET,
    });
  };

  const isCompleted = MAX_PRIZE_LEVEL === data?.length;
  const isDisableBtnAnnounce = !available || isCompleted;

  return (
    <div className="bg-white rounded-lg shadow-lg pb-32 pt-14">
      <div className="relative w-[] h-[266.4px] flex pl-7 pr-20 pt-16 pb-7 ml-[calc(50%-190px)]">
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
      </div>

      {checkLogin && (
        <div className="my-10">
          <button
            onClick={handleClickPlay}
            disabled={isDisableBtnAnnounce}
            className={clsx(
              "bg-[#08CF7C] hover:bg-[#009937]",
              "rounded-lg",
              "px-7 py-2.5",
              "mx-auto block",
              "cursor-pointer",
              "text-white font-bold",
              isDisableBtnAnnounce && "cursor-not-allowed opacity-70"
            )}
          >
            {isCompleted ? "Đã kết thúc" : "Quay"}
          </button>
        </div>
      )}

      <TicketPrizeTable data={data as ILotteryPrize[]} />
    </div>
  );
};
