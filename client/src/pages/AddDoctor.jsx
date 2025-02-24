import React, { useState } from "react";
import Avatar from "../assets/icons/Avatar";
import Pen from "../assets/icons/Pen";
import { Link } from "react-router-dom";
import BranchList from "../components/Doctors/BranchList";
import { useDispatch } from "react-redux";
import { createDoctor } from "../redux/api/doctorApiActions";
import { toast } from "react-toastify";

function AddDoctor() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [branches, setBranches] = useState([
    {
      branch: "",
      startingTime: "",
      endingTime: "",
      workingDays: [],
    },
  ]);

  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const doctor = {
      firstName,
      lastName,
      email,
      password,
      phoneNumber,
      workingHours: branches,
    };
    if (!doctor.firstName) {
      return toast.warning("First Name is required");
    }

    if (!doctor.lastName) {
      return toast.warning("Last Name is required");
    }

    if (!doctor.email) {
      return toast.warning("Email is required");
    }

    if (!doctor.password) {
      return toast.warning("Password is required");
    }

    if (!doctor.phoneNumber) {
      return toast.warning("Phone Number is required");
    }

    if (!doctor.workingHours.length) {
      return toast.warning("At least one branch is required");
    }

    for (let i = 0; i < doctor.workingHours.length; i++) {
      const branch = doctor.workingHours[i];

      if (!branch.branch) {
        toast.warning(`Branch name is required for branch ${i + 1}`);
        return;
      }

      if (!branch.startingTime) {
        toast.warning(`Starting time is required for branch ${i + 1}`);
        return;
      }

      if (!branch.endingTime) {
        toast.warning(`Ending time is required for branch ${i + 1}`);
        return;
      }

      if (!branch.workingDays || branch.workingDays.length === 0) {
        toast.warning(`Working days are required for branch ${i + 1}`);
        return;
      }
    }

    dispatch(createDoctor(doctor));
  };

  return (
    <div className="bg-light-primary min-h-screen">
      <div className="w-full md:w-2/3 lg:w-1/2 xl:w-1/3 mx-auto py-12 md:py-24 px-4 sm:px-6 lg:px-8">
        <div className="mb-8 md:mb-10">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-lora font-semibold leading-tight md:leading-[60px] text-center md:text-left">
            Add a doctor
          </h1>
        </div>
        <div className="flex justify-center">
          <form onSubmit={handleSubmit} className="w-full max-w-2xl">
            <div className="flex justify-center mb-8 md:mb-10">
              <div className="relative box-content">
                <Avatar />
                <p className="rounded-full bg-[#287F89] h-12 w-12 md:h-14 md:w-14 flex items-center justify-center absolute top-[150px] md:top-[206px] left-[150px] md:left-[219px]">
                  <Pen />
                </p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row justify-between gap-4 md:gap-6 mb-6 md:mb-8">
              <div className="flex flex-col gap-2 w-full md:w-1/2">
                <label htmlFor="firstName" className="font-semibold">
                  First Name
                </label>
                <input
                  type="text"
                  className="p-3 w-full rounded-md border-2 border-[#CBD2E0]"
                  id="firstName"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  required
                />
              </div>
              <div className="flex flex-col gap-2 w-full md:w-1/2">
                <label htmlFor="lastName" className="font-semibold">
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  className="p-3 w-full rounded-md border-2 border-[#CBD2E0]"
                />
              </div>
            </div>
            <div className="flex flex-col gap-2 mb-6 md:mb-8">
              <label htmlFor="email" className="font-semibold">
                Email
              </label>
              <input
                type="text"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="p-3 rounded-md border-2 border-[#CBD2E0]"
                required
              />
            </div>
            <div className="flex flex-col gap-2 mb-6 md:mb-8">
              <label htmlFor="password" className="font-semibold">
                Password
              </label>
              <input
                type="text"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="p-3 rounded-md border-2 border-[#CBD2E0]"
                required
              />
            </div>
            <div className="flex flex-col gap-2 mb-6 md:mb-8">
              <label htmlFor="phoneNumber" className="font-semibold">
                Phone Number
              </label>
              <input
                type="text"
                id="phoneNumber"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                className="p-3 rounded-md border-2 border-[#CBD2E0]"
                placeholder="+201978343232"
                required
              />
            </div>

            <div className="mb-8 md:mb-10">
              <BranchList branches={branches} setBranches={setBranches} />
            </div>
            <div className="flex flex-col md:flex-row justify-end gap-4 md:gap-2">
              <Link to="/">
                <button className="bg-transparent text-secondary-text-color border-2 border-secondary-text-color rounded-md font-extrabold w-full md:w-24 h-14">
                  Back
                </button>
              </Link>
              <button className="bg-secondary-text-color text-lg text-white rounded-md font-extrabold w-full md:w-48 h-14">
                Add Doctor
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddDoctor;
