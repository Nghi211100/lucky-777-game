import { useMutation, useQueryClient } from "react-query";
import { AVAILABLE_PRIZE_ENDPOINT } from "./availablePrizeLevel.service";
import { LOTTERY_PLAYER_LIST_ENDPOINT } from "./lotteryPlayerList.service";
import api from "../config.axios";

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
}

const useAnnounceLotteryPrizeAPI = () => {
  const queryClient = useQueryClient();
  const loginRes = useMutation({
    mutationKey: ANNOUNCE_LOTTERY_PRIZE_ENDPOINT,
    mutationFn: async (req: IAnnounceLotteryPrize) => {
      const result = await api.post<AnnounceLotteryPrizeRes>(
        ANNOUNCE_LOTTERY_PRIZE_ENDPOINT,
        {
          offset: req.offset,
          prize: req.prize,
        }
      );
      return result.data.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: AVAILABLE_PRIZE_ENDPOINT,
      });
      queryClient.invalidateQueries({
        queryKey: LOTTERY_PLAYER_LIST_ENDPOINT,
      });
    },
  });

  return loginRes;
};

export default useAnnounceLotteryPrizeAPI;
