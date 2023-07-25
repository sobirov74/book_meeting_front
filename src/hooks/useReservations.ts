import { useQuery } from "@tanstack/react-query";
import { apiClient } from "src/main";
import { todaysEvents } from "src/redux/reducers/reservations";
import { useAppDispatch } from "src/redux/utils/types";
import { Reservations } from "src/utils/types";

export const useReservations = ({
  room_id,
  enabled = true,
  all,
}: {
  enabled?: boolean;
  room_id: number;
  all?: boolean;
}) => {
  const dispatch = useAppDispatch();
  return useQuery({
    queryKey: ["reservations", room_id, all],
    queryFn: () =>
      apiClient.get(`/reservations`, { room_id, all }).then(response => {
        dispatch(todaysEvents(response.data as Reservations[]));
        return response.data as Reservations[];
      }),
    enabled: !!room_id && enabled,
    refetchOnMount: true,
  });
};
export default useReservations;
