import React from "react";

const Progeresor = () => {
  return (
    <div>
      <div className="flex items-start max-w-screen-lg w-full mx-auto mt-10">

        <div className="w-full">
          <div className="flex items-center w-full">
            <div className="w-8 h-8 shrink-0 mx-[-1px-] bg-amber-500 p-1.5  flex items-center rounded-full">
              <span className="text-base text-black font-bold">1</span>
            </div>
            <div className="w-full h-1 mx-4 rounded-lg bg-cyan-500"></div>
          </div>

          <div className="pt-2 mr-4">
            <h6 className="text-base font:bold text-amber-500">
              Step:1 Choose your Dish
            </h6>
            <p className="text-xs text-white">
              China Grill believes in the might of a powerful cooking pot
            </p>
          </div>
          
        </div>
        <div className="w-full">
          <div className="flex items-center w-full">
            <div className="w-8 h-8 shrink-0 mx-[-1px-] bg-amber-500 p-1.5  flex items-center rounded-full">
              <span className="text-base text-black font-bold">2</span>
            </div>
            <div className="w-full h-1 mx-4 rounded-lg bg-cyan-500"></div>
          </div>

          <div className="pt-2 mr-4">
            <h6 className="text-base font:bold text-black-">
              Step:2 Choose your Dish
            </h6>
            <p className="text-xs text-white">
              Custamize your Order
            </p>
          </div>
          
        </div>
        <div className="w-full">
          <div className="flex items-center w-full">
            <div className="w-8 h-8 shrink-0 mx-[-1px-] bg-amber-500 p-1.5  flex items-center rounded-full">
              <span className="text-base text-amber-font-bold">3</span>
            </div>
            <div className="w-full h-1 mx-4 rounded-lg bg-cyan-500"></div>
          </div>

          <div className="pt-2 mr-4">
            <h6 className="text-base font:bold text-amber-500">
              Step:3 Choose your Dish
            </h6>
            <p className="text-xs text-white">
            Please select above filter to view dishes from other category
            </p>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Progeresor;