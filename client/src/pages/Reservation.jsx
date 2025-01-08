import React, { useEffect, useState } from "react";
import heroImage from "../assets/reservation-page-photo.webp";
import { sessions } from "../dummyData";
import { useDispatch, useSelector } from "react-redux";
import { fetchDoctors } from "../redux/api/doctorApiActions";
import { createReservation } from "../redux/api/reservationApiActions";
import { days } from "../utils/constants";
import { toast } from "react-toastify";

function Reservation() {
  const [sessionType, setSessionType] = useState("");
  const [date, setDate] = useState("");
  const [sessionTypePrice, setSessionTypePrice] = useState("");
  const [branch, setBranch] = useState("");
  const [time, setTime] = useState("");
  const [doctor, setDoctor] = useState("");
  const [day, setDay] = useState("");
  const [availableBranches, setAvailableBranches] = useState({
    branches: [],
    times: [],
    doctors: [],
  });

  const { doctors } = useSelector((state) => state.doctor);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const reservation = {
      sessionType,
      selectedDate: date,
      branch,
      time,
      doctor,
      price: sessionTypePrice,
    };

    if (!reservation.sessionType) {
      return toast.warning("Session Type is required");
    }

    if (!reservation.selectedDate) {
      return toast.warning("Date is required");
    }

    if (!reservation.branch) {
      return toast.warning("Branch is required");
    }

    if (!reservation.time) {
      return toast.warning("Time is required");
    }

    if (!reservation.doctor) {
      return toast.warning("Doctor is required");
    }

    dispatch(createReservation(reservation));
  };

  const handleSessionTypeChange = (e) => {
    const newValue = e.target.value;
    setSessionType(newValue);
    const selectedSessionTypeObject = sessions.find(
      (session) => session.value === newValue
    );
    setSessionTypePrice(selectedSessionTypeObject.price);
  };

  const handleDateChange = (e) => {
    const dateValue = e.target.value;
    setDate(dateValue);
    const dateObject = new Date(dateValue);
    const selectedDay = days[dateObject.getDay()];

    const workingBranchesSet = new Set();

    doctors.map((doctor) =>
      doctor.workingHours.map((workingBranch) => {
        if (workingBranch.workingDays.includes(selectedDay)) {
          workingBranchesSet.add(workingBranch.branch);
        }
      })
    );

    setDay(selectedDay);
    setAvailableBranches((prev) => ({
      ...prev,
      branches: Array.from(workingBranchesSet),
    }));
  };

  const handleBranchchange = (e) => {
    const branchValue = e.target.value;
    setBranch(branchValue);

    const workingTimesSet = new Set();
    doctors.map((doctor) =>
      doctor.workingHours.map((workingBranch) => {
        if (
          workingBranch.branch === branchValue &&
          workingBranch.workingDays.includes(day)
        ) {
          workingTimesSet.add(workingBranch.startingTime);
        }
      })
    );
    setAvailableBranches((prev) => ({
      ...prev,
      times: Array.from(workingTimesSet),
    }));
  };

  const handleTimeChange = (e) => {
    const timeValue = e.target.value;
    setTime(timeValue);
    console.log(timeValue);

    const workingDoctors = [];
    doctors.map((doctor) =>
      doctor.workingHours.map((workingBranch) => {
        if (
          workingBranch.workingDays.includes(day) &&
          workingBranch.branch === branch &&
          workingBranch.startingTime === timeValue
        ) {
          workingDoctors.push(`${doctor.firstName} ${doctor.lastName}`);
        }
      })
    );
    setAvailableBranches((prev) => ({
      ...prev,
      doctors: workingDoctors,
    }));
  };

  useEffect(() => {
    dispatch(fetchDoctors());
  }, []);

  return (
    <div className="bg-light-primary min-h-screen">
      <div className="w-full px-4 sm:px-6 lg:px-8 mx-auto py-8 sm:py-16">
        <div className="flex flex-col sm:flex-row items-center justify-between mb-6 sm:mb-10">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-lora font-semibold text-center sm:text-left">
            Reservation
          </h1>
          <p className="text-2xl sm:text-3xl lg:text-[32px] font-medium text-[#0F0F12] mt-4 sm:mt-0">
            {sessionTypePrice ? sessionTypePrice + " LE" : null}
          </p>
        </div>
        <div className="flex flex-col lg:flex-row justify-between gap-8 lg:gap-[258px] px-0 sm:px-[14px]">
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-4 w-full lg:grow"
          >
            <div className="flex flex-col gap-2">
              <label className="text-[#0F0F12] font-semibold text-xl sm:text-2xl leading-[36px] font-lora">
                Session Type
              </label>
              <select
                value={sessionType}
                onChange={handleSessionTypeChange}
                className="p-3 rounded-md border-2 border-[#CBD2E0]"
              >
                <option value="" disabled>
                  Select
                </option>
                {sessions.map((session, index) => (
                  <option key={session.value} value={`${session.value}`}>
                    {session.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex flex-col sm:flex-row justify-between items-center relative gap-4 sm:gap-0">
              <label htmlFor="date" className="font-semibold text-lg">
                Select date
              </label>
              <input
                id="date"
                value={date}
                onChange={handleDateChange}
                type="date"
                className="p-3 rounded-md border-2 border-[#CBD2E0] w-full sm:w-auto"
              />
              {date && availableBranches.branches.length === 0 && (
                <span className="absolute sm:static sm:right-[-172px] text-[10px] font-semibold text-[#0F0F12] mt-2 sm:mt-0">
                  No Sessions available on that date
                </span>
              )}
            </div>
            <div className="flex flex-col">
              <label>Branch</label>
              <select
                value={branch}
                onChange={handleBranchchange}
                className="p-3 rounded-md border-2 border-[#CBD2E0]"
              >
                <option value="" disabled>
                  Select
                </option>
                {availableBranches.branches.map((branch, index) => (
                  <option key={index} value={branch}>
                    {branch} Branch
                  </option>
                ))}
              </select>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-[29px]">
              <label htmlFor="time">Time: </label>
              <select
                id="time"
                value={time}
                onChange={handleTimeChange}
                className="p-3 rounded-md border-2 border-[#CBD2E0] w-full sm:grow"
              >
                <option value="" disabled>
                  00:00
                </option>
                {availableBranches.times.map((time) => (
                  <option value={time}>{time}</option>
                ))}
              </select>
            </div>
            <div className="flex flex-col">
              <label>Doctor</label>
              <select
                value={doctor}
                onChange={(e) => setDoctor(e.target.value)}
                className="p-3 rounded-md border-2 border-[#CBD2E0]"
              >
                <option value="" disabled>
                  Select
                </option>
                {availableBranches.doctors.map((doc) => (
                  <option value={doc}>Dr. {doc}</option>
                ))}
              </select>
            </div>
            <button className="bg-secondary-text-color text-white py-4 rounded-md font-medium text-[18px]">
              Submit Reservation
            </button>
          </form>
          <img
            src={heroImage}
            className="w-full lg:w-[626px] h-auto lg:h-[461px] rounded-[10px] border-2 border-black mt-8 lg:mt-0"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default Reservation;
