import DoctorItem from "../components/Doctors/DoctorItem";
import { Link } from "react-router-dom";
import Add from "../assets/icons/Add";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchDoctors } from "../redux/api/doctorApiActions";

function Doctors() {
  const { doctors, loading } = useSelector((state) => state.doctor);
  const dispatch = useDispatch();
  console.log(doctors);

  useEffect(() => {
    dispatch(fetchDoctors());
  }, []);

  return (
    <div className="bg-light-primary min-h-screen">
      <div className="w-2/3 container mx-auto py-16">
        <div className="flex items-center justify-between mb-10">
          <h1 className="text-5xl font-lora font-semibold">Doctors</h1>
          <Link
            to={"/add-doctor"}
            className="flex items-center justify-center gap-2 text-lg font-semibold"
          >
            <Add />
            Add
          </Link>
        </div>
        <div className="flex flex-col gap-0.5">
          {loading ? (
            <div className="text-center">loading...</div>
          ) : doctors.length ? (
            doctors.map((doctor, index) => (
              <DoctorItem
                key={doctor._id}
                doctor={doctor}
                styles={{
                  firstItem: index === 0 ? true : false,
                  lastItem: index === doctors.length - 1 ? true : false,
                }}
              />
            ))
          ) : (
            <div className="text-center"> No Doctors Added Yet</div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Doctors;
