import React, { useState } from "react";
import logo from "../../assets/logo.png";
import { Link, useLocation } from "react-router-dom";
function Navbar() {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <div className="py-4 bg-white shadow-md">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo Section */}
          <Link to="/">
            <div className="flex items-center gap-2">
              <img src={logo} alt="Logo" className="h-[37px] w-[37px]" />
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

          {/* Hamburger Menu for Mobile */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-[#606074] focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={
                    isMenuOpen
                      ? "M6 18L18 6M6 6l12 12"
                      : "M4 6h16M4 12h16m-7 6h7"
                  }
                />
              </svg>
            </button>
          </div>

          {/* Navigation Links */}
          <div className={`md:flex ${isMenuOpen ? "block" : "hidden"}`}>
            <ul className="flex flex-col md:flex-row gap-4 md:gap-6">
              <li
                className={`text-[#606074] text-[18px] ${
                  location.pathname === "/" && "font-bold"
                }`}
              >
                <Link to="/">Doctors</Link>
              </li>
              <li
                className={`text-[#606074] text-[18px] ${
                  location.pathname === "/reservation" && "font-bold"
                }`}
              >
                <Link to="/reservation">Reservation</Link>
              </li>
              <li
                className={`text-[#606074] text-[18px] ${
                  location.pathname === "/confirm-reservation" && "font-bold"
                }`}
              >
                <Link to="/confirm-reservation">Confirm Reservation</Link>
              </li>
              <li
                className={`text-[#606074] text-[18px] ${
                  location.pathname === "/reservations" && "font-bold"
                }`}
              >
                <Link to="/reservations">All Reservations</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
