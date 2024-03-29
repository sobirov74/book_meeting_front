import { useQuery } from "@tanstack/react-query";
import { apiClient } from "src/main";
import { Reservations } from "src/utils/types";

export const useReservation = ({ id, enabled = true }: { enabled?: boolean; id: number }) => {
  return useQuery({
    queryKey: ["reservation", id],
    queryFn: () =>
      apiClient
        .get(`/reservations/${id}`)
        .then(response => response.data as Reservations)
        .catch(error => {
          console.error("Error fetching room reservations:", error);
        }),
    enabled: !!id && enabled,
    refetchOnMount: true,
  });
};
export default useReservation;
