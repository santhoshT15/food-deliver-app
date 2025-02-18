import React, { useContext, useEffect, useState } from "react";
import { storeContext } from "../context/storeContext";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const PlaceOrder = () => {
  const { getTotalAmt, token, url, food_list, cartItems } =
    useContext(storeContext);

  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    street: "",
    city: "",
    state: "",
    zipcode: "",
    country: "",
    phone: "",
  });
  const navigate = useNavigate();

  const onChangeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setData((data) => ({ ...data, [name]: value }));
  };

  const place_order = async (e) => {
    e.preventDefault();
    let orderItems = [];
    food_list.map((item) => {
      if (cartItems[item._id] > 0) {
        let itemInfo = item;
        itemInfo["quantity"] = cartItems[item._id];
        orderItems.push(itemInfo);
      }
    });
    let orderData = {
      address: data,
      items: orderItems,
      amount: getTotalAmt() + 2,
    };

    let res = await axios.post(url + "/api/order/placeOrder", orderData, {
      headers: { token },
    });
    if (res.data.success) {
      const { session_url } = res.data;
      window.location.replace(session_url);
    } else {
      toast.error(res.data.message);
    }
  };

  useEffect(() => {
    if (!token) {
      navigate("/cart");
    } else if (getTotalAmt() === 0) {
      navigate("/cart");
    }
  }, [token]);

  return (
    <form
      onSubmit={place_order}
      className="flex items-start justify-between gap-[50px] mt-[100px]"
    >
      {/* place order left */}
      <div className="w-full max-w-[max(30%,_500px)]">
        {/* title */}
        <p className="text-3xl font-semibold mb-[50px]">Delivery Information</p>
        {/* multi-fields */}
        <div className="flex gap-[10px]">
          <input
            name="firstName"
            onChange={onChangeHandler}
            value={data.firstName}
            className="mb-[15px] w-full p-[10px] border-solid border-[1px] rounded outline-orange-800 border-gray-300"
            type="text"
            placeholder="First Name"
            required
          />
          <input
            name="lastName"
            onChange={onChangeHandler}
            value={data.lastName}
            className="mb-[15px] w-full p-[10px] border-solid border-[1px] rounded outline-orange-800 border-gray-300"
            type="text"
            placeholder="last Name"
            required
          />
        </div>
        <input
          name="email"
          onChange={onChangeHandler}
          value={data.email}
          className="mb-[15px] w-full p-[10px] border-solid border-[1px] rounded outline-orange-800 border-gray-300"
          type="text"
          placeholder="Email address"
          required
        />
        <input
          name="street"
          onChange={onChangeHandler}
          value={data.street}
          className="mb-[15px] w-full p-[10px] border-solid border-[1px] rounded outline-orange-800 border-gray-300"
          type="text"
          placeholder="Street"
          required
        />

        {/* multi-fields */}
        <div className="flex gap-[10px]">
          <input
            name="city"
            onChange={onChangeHandler}
            value={data.city}
            className="mb-[15px] w-full p-[10px] border-solid border-[1px] rounded outline-orange-800 border-gray-300"
            type="text"
            placeholder="City"
            required
          />

          <input
            name="state"
            onChange={onChangeHandler}
            value={data.state}
            className="mb-[15px] w-full p-[10px] border-solid border-[1px] rounded outline-orange-800 border-gray-300"
            type="text"
            placeholder="State"
            required
          />
        </div>
        {/* multi-fields */}
        <div className="flex gap-[10px]">
          <input
            name="zipcode"
            onChange={onChangeHandler}
            value={data.zipcode}
            className="mb-[15px] w-full p-[10px] border-solid border-[1px] rounded outline-orange-800 border-gray-300"
            type="text"
            placeholder="Zipcode"
            required
          />
          <input
            name="country"
            onChange={onChangeHandler}
            value={data.country}
            className="mb-[15px] w-full p-[10px] border-solid border-[1px] rounded outline-orange-800 border-gray-300"
            type="text"
            placeholder="Country"
            required
          />
        </div>
        <input
          name="phone"
          onChange={onChangeHandler}
          value={data.phone}
          className="mb-[15px] w-full p-[10px] border-solid border-[1px] rounded outline-orange-800 border-gray-300"
          type="text"
          placeholder="Phone number"
          required
        />
      </div>
      {/* place order right */}
      <div className="w-full max-w-[max(40%,500px)]">
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
            type="submit"
            className="bg-orange-600 mt-8 text-white w-[max(15vw,200px)] px-0 py-3 rounded-[4px] border-none cursor-pointer "
          >
            Proceed to payment
          </button>
        </div>
      </div>
    </form>
  );
};

export default PlaceOrder;
