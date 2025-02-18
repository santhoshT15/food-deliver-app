import React, { useContext, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { storeContext } from "../context/storeContext";
import axios from "axios";

const Verify = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const success = searchParams.get("success");
  const orderId = searchParams.get("orderId");
  const { url } = useContext(storeContext);
  const navigate = useNavigate();

  const verifyPayment = async () => {
    const res = await axios.post(url + "/api/order/verify", {
      success,
      orderId,
    });
    if (res.data.success) {
      navigate("/myorder");
    } else {
      navigate("/");
    }
  };

  useEffect(() => {
    verifyPayment();
  }, []);

  return (
    <div className="min-h-[60vh] grid">
      <div className="w-[100px] h-[100px] place-self-center border-[5px] border-solid border-gray-300 border-t-orange-400 rounded-full animate-rotate"></div>
    </div>
  );
};

export default Verify;
