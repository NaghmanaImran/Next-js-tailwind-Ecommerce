import React from "react";
import { GiCampCookingPot } from "react-icons/gi";
import { FaSearchPlus } from "react-icons/fa";
import { FaPhoneAlt, FaClock } from "react-icons/fa";
import { LuImageMinus } from "react-icons/lu";
import Image from "next/image";

const Navbar = () => {
  return (
    <div className="grid xl:grid-cols-1 grid-cols-1 fixed bg-red-800 z-50 w-[100%]">
      <div className="p-5">
        <div className="py-3 px-3 rounded-xl border w-full">
          <div className="flex justify-between items-center">
            <div className="flex items-center justify-end w-full">
              {/* Logo */}
              <GiCampCookingPot className="w-8 h-8 text-yellow-400 hover:text-cyan-300" />
              
              {/* Search bar */}
              <div style={{ position: "relative", marginLeft: "20px" }}>
                <input
                  className="rounded-3xl py-3 outline-none text-xs w-[300px] pr-10 hidden lg:block md:block"
                  placeholder="Search for your favourite menu"
                />
                <FaSearchPlus className="w-5 h-5 text-red-800 absolute right-3 top-1/2 transform -translate-y-1/2 hidden lg:block md:block hover:text-cyan-400" />
              </div>

              {/* Icons and info */}
              <div className="flex items-center space-x-4 ml-auto">
                <FaPhoneAlt className="w-7 h-7 text-amber-400 hidden lg:block md:block hover:text-cyan-300" />
                <p className="text-sm text-white hidden lg:block md:block">
                  Delivery: 0300-2734680
                </p>
                <FaClock className="w-7 h-7 text-amber-400 hidden lg:block md:block hover:text-cyan-300" />
                <p className="text-sm text-white hidden lg:block md:block">
                  Timing: 11:30 am - 10:45 pm
                </p>
                <LuImageMinus className="w-7 h-7 text-amber-400 hidden lg:block md:block hover:text-cyan-300" />
                <p className="text-sm text-white hidden lg:block md:block mr-6">
                  Min. Order: Rs.00*
                  </p>
                   {/* Image Logo */}
              <Image
                src="/mypic.png"
                width={500} // Replace with the path to your image
                height={200} // Replace with the path to your image
                alt="Logo"
                className=" inline-block w-10 h-10 rounded-full mr-4" // Adjust size as needed
              />
              
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
