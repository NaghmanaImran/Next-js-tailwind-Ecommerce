import Image from "next/image";
import React from "react";

const Banner = () => {
  return (
    <div className="relative overflow-hidden bg-black opacity-100 font-sans pt-6 py-12 mb-7">
      <div className="absolute inset-0 opacity-20">
        <Image
          src="/sprinkle3.jpg"
          width={500}
          height={500}
          alt="CHINA GRILL"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="relative z-10 container mx-auto flex flex-col justify-center items-center text-center">
        <h1 className="text-white sm:text-5xl font-bold mb-4">
          CHINA GRILL
        </h1>
        <p className="text-white text-lg text-center mb-6 max-w-xl">
          OUR MISSION IS TO BRING MOUTH-WATERING CHINESE FOOD TO ALL FOOD COURTS IN PAKISTAN
        </p>
        <button
          type="button"
          className="bg-red-800 text-white text-sm font-semibold py-3 px-6 rounded-full shadow-lg hover:bg-yellow-300 hover:text-black transition duration-300"
        >
          Order Now
        </button>
      </div>
    </div>
  );
};

export default Banner;
