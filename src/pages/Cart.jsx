import React, { useContext } from "react";
import { storeContext } from "../context/storeContext";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { cartItems, food_list, removeCart, getTotalAmt, url } =
    useContext(storeContext);

  const navigate = useNavigate();
  return (
    <div className="mt-24">
      {/* cart items */}
      <div>
        {/* cart item title */}
        <div className="grid grid-cols-[1fr_1.5fr_1fr_1fr_1fr_0.5fr] items-center text-gray-500 text-[max(1.3vw,_12px)] ">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {food_list.map((item, index) => {
          if (cartItems[item._id] > 0) {
            return (
              <div key={index}>
                <div className="grid grid-cols-[1fr_1.5fr_1fr_1fr_1fr_0.5fr] items-center text-gray-800 text-[max(1vw,_12px)] mx-0 my-[10px] ">
                  <img
                    className="w-12"
                    src={url + "/images/" + item.image}
                    alt=""
                  />
                  <p>{item.name}</p>
                  <p>${item.price}</p>
                  <p>{cartItems[item._id]}</p>
                  <p>${item.price * cartItems[item._id]}</p>
                  <p
                    onClick={() => removeCart(item._id)}
                    className="text-base text-orange-600 cursor-pointer"
                  >
                    X
                  </p>
                </div>
                <hr className="h-[1px] bg-slate-300 border-none" />
              </div>
            );
          }
        })}
      </div>
      {/* cart bottom */}
      <div className="mt-20 flex justify-between gap-[max(12vw,20px)] max-750:flex-col-reverse">
        {/* cart total */}
        <div className="flex-1 flex flex-col gap-5 ">
          <h2 className="text-2xl font-semibold">Cart Total</h2>
          <div>
            {/* cart details */}
            <div className="flex justify-between text-gray-400">
              <p>Sub-Total</p>
              <p>${getTotalAmt()}</p>
            </div>
            <hr className="mx-0 my-[10px]" />
            <div className="flex justify-between text-gray-400">
              <p>Delivery fee</p>
              <p>${getTotalAmt() === 0 ? 0 : 2}</p>
            </div>
            <hr className="mx-0 my-[10px]" />
            <div className="flex justify-between text-gray-700">
              <p>Total</p>
              <p>${getTotalAmt() === 0 ? 0 : getTotalAmt() + 2}</p>
            </div>
          </div>
          <button
            onClick={() => navigate("/place-order")}
            className="bg-orange-600 text-white w-[max(15vw,200px)] px-0 py-3 rounded-[4px] border-none cursor-pointer "
          >
            Proceed to checkout
          </button>
        </div>
        {/* cart promo-code */}
        <div className="flex-1 max-750:justify-start">
          <div>
            <p className="text-gray-600">
              If you have a promo code, Enter it here
            </p>
            {/* cart promo-code input */}
            <div className="mt-[10px] flex justify-between items-center rounded-[4px] bg-slate-200">
              <input
                className="bg-transparent pl-[10px] text-gray-700 border-none outline-none"
                type="text"
                placeholder="Promo code ..."
              />
              <button className="bg-orange-600 w-[max(10vw,_120px)] px-[5px] py-3 border-none text-white rounded-sm">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
