import React, { useContext, useEffect, useState } from "react";
import { storeContext } from "../context/storeContext";
import axios from "axios";
import { assets } from "../assets/assets";

const MyOrders = () => {
  const [data, setData] = useState([]);
  const { url, token } = useContext(storeContext);

  const fetchOrders = async () => {
    const res = await axios.post(
      url + "/api/order/userOrders",
      {},
      { headers: { token } }
    );
    setData(res.data.data);
  };

  useEffect(() => {
    if (token) {
      fetchOrders();
    }
  }, [token]);

  return (
    <div className="mx-0 my-[50px] ">
      <h2>My Orders</h2>
      <div className="flex flex-col gap-5 mt-[30px]">
        {data.map((order, index) => {
          return (
            <div
              key={index}
              className="max-900:grid-cols-[1fr_2fr_1fr] max-900:gap-y-[5px] max-900:text-xs grid grid-cols-[0.5fr_2fr_1fr_1fr_2fr_1fr] items-center gap-[30px] text-sm px-5 py-[14px] text-gray-600 border border-solid border-gray-300 "
            >
              <img className="w-[50px]" src={assets.parcel_icon} alt="" />
              <p>
                {order.items.map((item, index) => {
                  if (index === order.items.length - 1) {
                    return item.name + " x " + item.quantity;
                  } else {
                    return item.name + " x " + item.quantity + ",";
                  }
                })}
              </p>
              <p>{order.amount}.00</p>
              <p>Items: {order.items.length}</p>
              <p>
                <span className="text-orange-500 mr-1">&#x25cf;</span>
                <b className="font-medium text-gray-600">{order.status}</b>
              </p>
              <button
                onClick={fetchOrders}
                className="max-900:text-[10px] border-none px-0 py-3 rounded bg-orange-300 cursor-pointer text-gray-600"
              >
                Track Order
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MyOrders;
