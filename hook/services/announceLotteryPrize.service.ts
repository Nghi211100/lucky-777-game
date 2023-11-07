import { useMutation, useQueryClient } from "react-query";
import api from "../config.axios";
import {
  AVAILABLE_PRIZE_ENDPOINT,
  AvailablePrizeLevelRes,
} from "./availablePrizeLevel.service";

const ANNOUNCE_LOTTERY_PRIZE_ENDPOINT = "/api/lottery/announce-prize";

export interface IAnnounceLotteryPrize {
  offset: number;
  prize: number;
}

interface AnnounceLotteryPrizeRes {
  data: {
    prize: number;
    prizeTicket: number;
  };
  metaData: IAnnounceLotteryPrize;
}

function padWithLeadingZero(num: number, maxLength: number = 3): number[] {
  const result = String(num).padStart(maxLength, "0");

  // @ts-ignore
  return [...result];
}

const useAnnounceLotteryPrizeAPI = () => {
  const queryClient = useQueryClient();
  const loginRes = useMutation({
    mutationKey: ANNOUNCE_LOTTERY_PRIZE_ENDPOINT,
    mutationFn: async () => {
      const prizeLevel = await api.get<AvailablePrizeLevelRes>(
        AVAILABLE_PRIZE_ENDPOINT
      );

      const result = await api.post<AnnounceLotteryPrizeRes>(
        ANNOUNCE_LOTTERY_PRIZE_ENDPOINT,
        {
          offset: prizeLevel.data.data.offset,
          prize: prizeLevel.data.data.prize,
        }
      );

      const prizeTicketArr = padWithLeadingZero(result.data.data.prizeTicket);
      const nextPrize = result.data.metaData.prize;

      return {
        prizeTicketArr,
        nextPrize,
      };
    },
    onSuccess: () => {},
  });

  return loginRes;
};

export default useAnnounceLotteryPrizeAPI;
