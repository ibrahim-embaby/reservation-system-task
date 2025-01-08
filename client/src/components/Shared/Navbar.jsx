import React from "react";
import logo from "../../assets/logo.png";
import { Link, useLocation } from "react-router-dom";
function Navbar() {
  const location = useLocation();
  return (
    <div className="py-4">
      <div className="flex justify-between items-center container mx-auto">
        <Link to={"/"}>
          <div className="flex items-center gap-2">
            <img src={logo} alt="" className="h-[37px] w-[37px]" />
            <div className="flex flex-col">
              <p className="text-[16px] text-primary-text-color font-rosarivo italic">
                PhysioRehab
              </p>
              <p className="text-[#2E2E2E] text-[10px] font-medium font-roboto decoration-skip-ink-none">
                Physiotherapy & Rehabilitation
              </p>
            </div>
          </div>
        </Link>
        <div>
          <ul className="flex gap-4">
            <li
              className={`text-[#606074] text-[18px] ${
                location.pathname === "/" && "font-bold"
              }`}
            >
              <Link to={"/"}>Doctors</Link>
            </li>
            <li
              className={`text-[#606074] text-[18px] ${
                location.pathname === "/reservation" && "font-bold"
              }`}
            >
              <Link to={"/reservation"}>Reservation</Link>
            </li>
            <li
              className={`text-[#606074] text-[18px] ${
                location.pathname === "/confirm-reservation" && "font-bold"
              }`}
            >
              <Link to={"/confirm-reservation"}>Comfirm Reservation</Link>
            </li>
            <li
              className={`text-[#606074] text-[18px] ${
                location.pathname === "/reservations" && "font-bold"
              }`}
            >
              <Link to={"/reservations"}>All Reservations</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
