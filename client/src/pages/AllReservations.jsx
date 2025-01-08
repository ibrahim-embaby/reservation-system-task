import { reservedSessions } from "../dummyData";
import SessionItem from "../components/Session/SessionItem";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchReservations } from "../redux/api/reservationApiActions";

function AllReservations() {
  const { reservations } = useSelector((state) => state.reservation);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchReservations());
  }, []);
  return (
    <div className="bg-light-primary min-h-screen">
      <div className="w-2/3 container mx-auto py-16">
        <div className="mb-10">
          <h1 className="text-5xl font-lora font-semibold leading-[60px]">
            All Sessions
          </h1>
        </div>
        <div className="flex flex-col gap-0.5">
          {reservations.map((session, index) => (
            <SessionItem
              key={index}
              session={session}
              styles={{
                firstItem: index === 0 ? true : false,
                lastItem: index === reservations.length - 1 ? true : false,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default AllReservations;
