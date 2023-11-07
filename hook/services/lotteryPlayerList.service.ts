import { UsersList } from "@/components/TicketList";
import axios from "axios";
import { useQuery } from "react-query";

export const LOTTERY_PLAYER_LIST_ENDPOINT = "/api/lottery?limit=50&page=1";

interface LotteryPlayerList {
  data: UsersList[];
}

const useLotteryPlayerListAPI = () => {
  const lotteryPlayerList = useQuery({
    queryKey: LOTTERY_PLAYER_LIST_ENDPOINT,
    queryFn: async () => {
      const result = await axios.get<LotteryPlayerList>(
        LOTTERY_PLAYER_LIST_ENDPOINT
      );
      return result.data.data;
    },
  });

  return lotteryPlayerList;
};

export default useLotteryPlayerListAPI;
