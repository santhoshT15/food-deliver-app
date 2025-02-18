import React from "react";
import { menu_list } from "../assets/assets";

const ExploreMenu = ({ category, setCategory }) => {
  return (
    <div className="flex flex-col gap-5" id="explore-menu">
      <h1 className="font-medium text-2xl text-[#262626]">Explore Our Menu</h1>
      <p className="max-w-[60%] text-gray-500 max-1050:max-w-full max-1050:text-sm">
        Indulge in a wide selection of mouthwatering dishes, crafted with the
        finest ingredients and expert skill. Our goal is to delight your taste
        buds and transform every meal into an unforgettable dining experience.
      </p>
      <div className="flex justify-between items-center gap-[30px] text-center mx-0 my-5 overflow-x-scroll hide-scrollbar">
        {menu_list.map((item, index) => {
          return (
            <div
              onClick={() =>
                setCategory((prev) =>
                  prev === item.menu_name ? "All" : item.menu_name
                )
              }
              key={index}
              className=""
            >
              <img
                className={`w-[7.5vw] min-w-[80px] cursor-pointer rounded-[50%]  ${
                  category === item.menu_name
                    ? "border-4 border-solid border-yellow-300"
                    : ""
                }`}
                src={item.menu_image}
                alt=""
              />
              <p className="mt-2 text-[#747474] text-[max(1.4vw,_16px)] cursor-pointer ">
                {item.menu_name}
              </p>
            </div>
          );
        })}
      </div>
      <hr className="mx-0 my-[10px] h-[2px] bg-slate-300 border-none " />
    </div>
  );
};

export default ExploreMenu;
