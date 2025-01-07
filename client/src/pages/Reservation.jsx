import React from "react";
import heroImage from "../assets/reservation-page-photo.webp";

function Reservation() {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted");
  };
  return (
    <div className="bg-light-primary min-h-screen">
      <div className="w-2/3 mx-auto py-16">
        <div className="flex items-center justify-between mb-10">
          <h1 className="text-4xl font-lora">Reservation</h1>
          <p>500 LE</p>
        </div>
        <div className="flex justify-between">
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div>
              <label>Session Type</label>
              <select>
                <option value="recovery-session">Recovery Session</option>
                <option value="physiotherapy-session">
                  Physiotherapy Session
                </option>
                <option value="personal-trainer-session">
                  Personal Trainer Session
                </option>
              </select>
            </div>
            <div>
              <label htmlFor="">Select date</label>
              <input type="date" />
            </div>
            <div>
              <label>Branch</label>
              <select>
                <option value="sheraton-branch">Sheraton Branch</option>
                <option value="new-cairo-branch">New Cairo Branch</option>
                <option value="alexandria-branch">Alexandria Branch</option>
              </select>
            </div>
            <div>
              <label htmlFor="">Time: </label>
              <input type="time" />
            </div>
            <div>
              <label>Doctor</label>
              <select>
                <option value="doctor-1">Doctor 1</option>
                <option value="doctor-2">Doctor 2</option>
                <option value="doctor-3">Doctor 3</option>
              </select>
            </div>
            <button className="bg-secondary-text-color text-white py-4 rounded-md font-medium text-[18px]">
              Submit Reservation
            </button>
          </form>
          <img
            src={heroImage}
            className="w-[500px] h-[300px] rounded-[10px] border-2 border-black"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default Reservation;
