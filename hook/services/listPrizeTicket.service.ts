import axios from "axios";
import { useQuery } from "react-query";

export const ENDPOINT_LOTTERY_PRIZE_TICKET = "/api/lottery/prize";

export interface ILotteryPrize {
  email: string;
  fullName: string;
  prize: number;
  prizeTicket: number;
  id: number;
}

interface IListPrizeTicket {
  data: ILotteryPrize[];
}

const useListPrizeTicketAPI = () => {
  const lotteryPlayerList = useQuery({
    queryKey: ENDPOINT_LOTTERY_PRIZE_TICKET,
    queryFn: async () => {
      const result = await axios.get<IListPrizeTicket>(
        ENDPOINT_LOTTERY_PRIZE_TICKET
      );
      return result.data.data;
    },
    refetchOnWindowFocus: false,
  });

  return lotteryPlayerList;
};

export default useListPrizeTicketAPI;
