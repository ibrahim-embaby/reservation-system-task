import React from "react";
import logo from "../../assets/logo.png";
import Facebook from "../../assets/icons/Facebook";
import Twitter from "../../assets/icons/Twitter";
import Instagram from "../../assets/icons/Instagram";
import Linkedin from "../../assets/icons/Linkedin";
import Youtube from "../../assets/icons/Youtube";
import Phone from "../../assets/icons/Phone";
import Mail from "../../assets/icons/Mail";

function Footer() {
  return (
    <div className="bg-black text-white p-4">
      <div className="container mx-auto ">
        <div className="flex justify-between mt-[118px] mb-[31px] h-[421px]">
          <div className="flex flex-col p-4 gap-4 w-[408px]">
            <div className="flex items-center gap-2">
              <img src={logo} alt="" className="h-[59px] w-[59px]" />
              <div className="flex flex-col">
                <p className="text-[32px] text-[#014B56] font-rosarivo italic">
                  PhysioRehab
                </p>
                <p className="text-[15px] text-dark-text-color font-medium font-roboto">
                  Physiotherapy & Rehabilitation
                </p>
              </div>
            </div>
            <div className="text-[18px] text-[#DEDEE4]">
              Lorem ipsum dolor sit amet consectetur. Dignissim tortor donec
              ultrices sed. Nisl sit lorem eleifend pharetra vulputate posuere
              egestas tempor. Eget adipiscing dignissim sollicitudin neque elit.
              Nec nunc lectus erat id sociis aliquam et at.
            </div>
          </div>
          <div className="flex flex-col gap-8 p-4 ">
            <header className="font-lora font-medium text-[32px]">
              Contact us
            </header>
            <ul className="flex flex-col gap-[14.5px] text-[#DEDEE4]">
              {[0, 1, 2, 3].map((_, index) => (
                <li
                  key={index}
                  className="flex text-[#DEDEE4] text-lg gap-[3.5px] items-center"
                >
                  <Phone /> +2010145674567
                </li>
              ))}
              <li className="flex text-[#DEDEE4] text-lg gap-[3.5px]  items-center">
                <Mail /> <span className="italic">PhysioRehab</span>@gmail.com
              </li>
            </ul>
          </div>
          <div className="flex flex-col align-center gap-8  p-4 ">
            <header className="font-lora text-[32px] font-medium">
              Services
            </header>
            <ul className="flex flex-col gap-[9px] text-lg text-[#DEDEE4]">
              <li>Recovery session</li>
              <li>Physiotherapy session</li>
              <li>PT trainer session</li>
              <li>Weight cupping session</li>
              <li>Shockwave session</li>
              <li>Nutrition session</li>
            </ul>
          </div>
        </div>
        <div className="flex justify-between items-center py-6 border-t-2 border-t-primary">
          <p className="text-primary text-[18px]">
            © 2024 Site designed and created by Aurora Tech.
          </p>
          <ul className="flex gap-4">
            <li className="bg-primary w-9 h-9 flex items-center justify-center rounded-md cursor-pointer">
              <Facebook />
            </li>
            <li className="bg-primary w-9 h-9 flex items-center justify-center rounded-md cursor-pointer">
              <Twitter />
            </li>
            <li className="bg-primary w-9 h-9 flex items-center justify-center rounded-md cursor-pointer">
              <Instagram />
            </li>
            <li className="bg-primary w-9 h-9 flex items-center justify-center rounded-md cursor-pointer">
              <Linkedin />
            </li>
            <li className="bg-primary w-9 h-9 flex items-center justify-center rounded-md cursor-pointer">
              <Youtube />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
