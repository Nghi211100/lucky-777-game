import { useQuery } from "react-query";
import api from "../config.axios";

export const AVAILABLE_PRIZE_ENDPOINT = "/api/lottery/available-prize";

interface AvailablePrizeLevelRes {
  data: {
    offset: number;
    prize: number;
  };
}

const useAvailablePrizeLevelAPI = () => {
  const availablePrizeRes = useQuery({
    queryKey: AVAILABLE_PRIZE_ENDPOINT,
    queryFn: async () => {
      const result = await api.get<AvailablePrizeLevelRes>(
        AVAILABLE_PRIZE_ENDPOINT
      );
      return result.data.data;
    },
  });

  return availablePrizeRes;
};

export default useAvailablePrizeLevelAPI;
