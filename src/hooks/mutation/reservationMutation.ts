import { useMutation } from "@tanstack/react-query";
import { apiClient } from "src/main";
import { errorToast } from "src/utils/toast";

interface BodyTypes {
  room_id: number;
  from_time: Date | string;
  to_time: Date | string;
  reservation_date?: Date | String;
  participants: [];
  title: string;
  description: string;
  access_token: string;
}

const reservationMutation = () => {
  return useMutation(
    ["post_reservation"],
    (body: BodyTypes) => apiClient.post({ url: "/reservations", body }).then(({ data }) => data),
    { onError: (e: Error) => errorToast(e.message.toString()) },
  );
};
export default reservationMutation;
