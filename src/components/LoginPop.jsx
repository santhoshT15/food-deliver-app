import React, { useContext, useState } from "react";
import { assets } from "../assets/assets";
import { storeContext } from "../context/storeContext";
import axios from "axios";
import { toast } from "react-toastify";

const LoginPop = ({ setShowLogin }) => {
  const { url, setToken } = useContext(storeContext);
  const [currtState, setCurrtState] = useState("Login");
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const onChangeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setData((data) => ({ ...data, [name]: value }));
  };

  const onLogin = async (e) => {
    e.preventDefault();

    let newUrl = url;
    if (currtState === "Login") {
      newUrl += "/api/user/login";
    } else {
      newUrl += "/api/user/register";
    }

    const res = await axios.post(newUrl, data);
    if (res.data.success) {
      setToken(res.data.token);
      localStorage.setItem("token", res.data.token);
      setShowLogin(false);
      toast.success(res.data.message);
    } else {
      toast.error(res.data.message);
    }
  };

  return (
    // Login-popup
    <div className="absolute z-[1] w-full h-full grid bg-transparent ">
      {/* popup container */}
      <form
        onSubmit={onLogin}
        className="place-self-center w-[max(23vw,_330px)] text-slate-600 bg-white flex flex-col gap-[20px] px-[30px] py-[25px] rounded-lg text-sm animate-fadeIn "
      >
        {/* title */}
        <div className="flex justify-between items-center text-orange-600">
          <h2 className="text-2xl font-semibold">{currtState}</h2>
          <img
            onClick={() => setShowLogin(false)}
            className="w-4 cursor-pointer"
            src={assets.cross_icon}
            alt=""
          />
        </div>
        {/* Login inputs */}
        <div className="flex flex-col gap-5">
          {currtState === "Login" ? (
            <></>
          ) : (
            <input
              name="name"
              onChange={onChangeHandler}
              value={data.name}
              className="border-solid border-[1px] border-zinc-500 p-[10px] rounded-md"
              type="text"
              placeholder="Your name"
              required
            />
          )}
          <input
            name="email"
            onChange={onChangeHandler}
            value={data.email}
            className="border-solid border-[1px] border-zinc-500 p-[10px] rounded-md"
            type="email"
            placeholder="Your email"
            required
          />
          <input
            name="password"
            onChange={onChangeHandler}
            value={data.password}
            className="border-solid border-[1px] border-zinc-500 p-[10px] rounded-md"
            type="password"
            placeholder="Your password"
            required
          />
        </div>
        <button
          type="submit"
          className="p-[10px] rounded-md text-slate-100 bg-orange-600 text-[15px] cursor-pointer"
        >
          {currtState === "Sign Up" ? "Sign Up" : "Login"}
        </button>
        {/* popup-condition */}
        <div className="flex items-start gap-2 mt-[-15px]">
          <input className="mt-[5px]" type="checkbox" required />
          <p>By continuing, I agree to the terms of user & privacy policy.</p>
        </div>
        {currtState === "Login" ? (
          <p>
            Create a new account ?{" "}
            <span
              className="text-orange-600 font-medium cursor-pointer"
              onClick={() => setCurrtState("Sign Up")}
            >
              Sign up here
            </span>
          </p>
        ) : (
          <p>
            Already have an account ?{" "}
            <span
              className="text-orange-600 font-medium cursor-pointer"
              onClick={() => setCurrtState("Login")}
            >
              Login here
            </span>
          </p>
        )}
      </form>
    </div>
  );
};

export default LoginPop;
