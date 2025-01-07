import React from "react";
import logo from "../../assets/logo.png";
import { Link, useLocation } from "react-router-dom";
function Navbar() {
  const location = useLocation();
  return (
    <div className="py-4">
      <div className="flex justify-between items-center container mx-auto">
        <div className="flex items-center gap-2">
          <img src={logo} alt="" className="h-9 w-9" />
          <div className="flex flex-col">
            <p className="text-[16px] text-primary-text-color font-rosarivo italic">
              PhysioRehab
            </p>
            <p className="text-[10px] font-medium font-roboto">
              Physiotherapy & Rehabilitation
            </p>
          </div>
        </div>
        <div>
          <ul className="flex gap-4">
            <li
              className={`text-[#606074] text-[18px] ${
                location.pathname === "/doctors" && "font-bold"
              }`}
            >
              <Link to={"/doctors"}>Doctors</Link>
            </li>
            <li
              className={`text-[#606074] text-[18px] ${
                location.pathname === "/" && "font-bold"
              }`}
            >
              <Link to={"/"}>Reservation</Link>
            </li>
            <li
              className={`text-[#606074] text-[18px] ${
                location.pathname === "/confirm-reservtion" && "font-bold"
              }`}
            >
              <Link to={"/confirm-reservtion"}>Comfirm Reservation</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
