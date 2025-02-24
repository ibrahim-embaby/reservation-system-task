import { useDispatch, useSelector } from "react-redux";
import SessionItem from "../components/Session/SessionItem";
import { useEffect } from "react";
import { fetchTodaySessions } from "../redux/api/reservationApiActions";

function ConfirmReservation() {
  const { todaySessions } = useSelector((state) => state.reservation);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTodaySessions());
  }, []);
  return (
    <div className="bg-light-primary min-h-screen">
      <div className="w-2/3 container mx-auto py-16">
        <div className="mb-10">
          <h1 className="text-5xl font-lora font-semibold leading-[60px]">
            Today's Sessions
          </h1>
        </div>
        <div className="flex flex-col gap-0.5">
          {todaySessions.map((session, index) => (
            <SessionItem
              key={index}
              session={session}
              styles={{
                firstItem: index === 0 ? true : false,
                lastItem: index === todaySessions.length - 1 ? true : false,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ConfirmReservation;
