import React, { useContext, useState } from "react";
import { assets } from "../assets/assets";
import { storeContext } from "../context/storeContext";

const FoodItem = ({ id, name, price, description, image }) => {
  const { cartItems, url, addToCart, removeCart } = useContext(storeContext);
  return (
    <div className="w-[100%] m-auto rounded-2xl shadow-[0px_0px_10px_#00000015] transition duration-300 animate-fadeIn">
      <div className=" relative p-3">
        <img
          src={url + "/images/" + image}
          alt=""
          className="w-full rounded-t-[15px] rounded-b-none "
        />
        {!cartItems[id] ? (
          <button
            onClick={() => addToCart(id)}
            className=" absolute bottom-4 right-4 flex cursor-pointer m-2 text-base border-none rounded-md w-12 bg-orange-600 text-slate-200 hover:bg-orange-300 hover:text-slate-700 px-2 py-1"
          >
            Add
          </button>
        ) : (
          <div className="absolute bottom-4 right-4 flex items-center gap-2 p-2 rounded-[50px]">
            <img
              className="w-[30px]"
              onClick={() => removeCart(id)}
              src={assets.remove_icon_red}
              alt=""
            />
            <p>{cartItems[id]}</p>
            <img
              className="w-[30px]"
              onClick={() => addToCart(id)}
              src={assets.add_icon_green}
              alt=""
            />
          </div>
        )}
      </div>
      <div className="p-5">
        <div className="flex justify-between items-center mb-2">
          <p className="text-xl font-medium">{name}</p>
          <img className="w-16" src={assets.rating_starts} alt="" />
        </div>
        <p className="text-[#676767] text-xs ">{description}</p>
        <p className="text-orange-600 text-xl">${price}</p>
      </div>
    </div>
  );
};

export default FoodItem;
