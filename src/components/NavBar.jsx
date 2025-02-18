import React, { useContext, useState } from "react";
import { assets } from "../assets/assets";
import { Link, useNavigate } from "react-router-dom";
import { storeContext } from "../context/storeContext";

const NavBar = ({ setShowLogin }) => {
  const [menu, setMenu] = useState("home");
  const [dropDownOpen, setDropDownOpen] = useState(false);
  const { getTotalAmt, token, setToken } = useContext(storeContext);
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    setToken("");
    navigate("/");
  };

  const onClickHandler = () => {
    setShowLogin(true);
    setDropDownOpen(false);
  };

  return (
    <div className="px-0 py-5 flex justify-between items-center">
      <Link to="/">
        <img
          className="w-36 h-10 max-1050:w-36 max-900:w-28 "
          src={assets.logo}
          alt=""
        />
      </Link>
      <ul className="flex list-none gap-5 text-[#49557e] text-lg max-1050:gap-5 max-1050:text-base max-900:gap-[15px] max-900:text-[16px] max-750:hidden">
        <Link
          to="/"
          className={`cursor-pointer ${
            menu === "home"
              ? "pb-[2px] border-b-2 border-[#ff9b60] text-base"
              : "text-sm"
          }`}
          onClick={() => setMenu("home")}
        >
          Home
        </Link>
        <a
          href="#explore-menu"
          className={`cursor-pointer ${
            menu === "menu"
              ? "pb-[2px] border-b-2 border-[#ff9b60] text-base"
              : "text-sm"
          }`}
          onClick={() => setMenu("menu")}
        >
          Menu
        </a>
        <a
          href="#mobile-app"
          className={`cursor-pointer ${
            menu === "mobile-app"
              ? "pb-[2px] border-b-2 border-[#ff9b60] text-base"
              : "text-sm"
          }`}
          onClick={() => setMenu("mobile-app")}
        >
          Mobile App
        </a>
        <a
          href="footer"
          className={`cursor-pointer ${
            menu === "contact-us"
              ? "pb-[2px] border-b-2 border-[#ff9b60] text-base"
              : "text-sm"
          }`}
          onClick={() => setMenu("contact-us")}
        >
          Contact Us
        </a>
      </ul>
      <div className="flex items-center gap-10 max-1050:gap-7 max-900:gap-5">
        <img
          className="max-1050:w-6 max-900:w-5"
          src={assets.search_icon}
          alt=""
        />
        <div className="relative">
          <Link to="/cart">
            <img
              className="max-1050:w-6 max-900:w-5"
              src={assets.basket_icon}
              alt=""
            />
          </Link>
          <div
            className={
              getTotalAmt() === 0
                ? ""
                : "absolute min-h-2 min-w-2 bg-[#ee681a] rounded top-[-8px] right-[-8px]"
            }
          ></div>
        </div>
        {!token ? (
          <div className="group relative">
            <button
              onClick={() => setDropDownOpen(!dropDownOpen)}
              className=" max-900:text-sm max-900:px-5 max-900:py-[7px] max-1050:px-6 max-1050:py-2 bg-orange-600 text-base text-white border-2 border-none px-7 py-2 rounded-3xl cursor-pointer transition-[0.3s] hover:bg-[#ff9b60]"
            >
              Sign In
            </button>
            {/* Dropdown Menu */}
            {dropDownOpen && (
              <div className=" absolute right-0 border bg-gray-300 rounded shadow-lg z-[1]">
                <ul className="flex flex-col text-sm">
                  <li
                    className="cursor-pointer py-2 mx-3 hover:bg-[#ff9b60] hover:text-white"
                    onClick={onClickHandler}
                  >
                    User-Login
                  </li>
                  <a
                    href="https://food-deliver-admin.netlify.app"
                    className="cursor-pointer py-2 mx-2 hover:bg-[#ff9b60] hover:text-white"
                  >
                    Admin-Login
                  </a>
                </ul>
              </div>
            )}
          </div>
        ) : (
          <div className="group relative ">
            <img src={assets.profile_icon} alt="" />
            <div className="group-hover:block hidden absolute right-0 z-[1]">
              <ul className="flex flex-col gap-[10px] bg-slate-100 text-gray-500 rounded px-[25px] py-3 list-none">
                <li
                  onClick={() => navigate("/myorder")}
                  className="flex items-center gap[10px] cursor-pointer mr-3"
                >
                  <img className="w-5" src={assets.bag_icon} alt="" />
                  <p className="hover:text-orange-600">Orders</p>
                </li>
                <hr />
                <li
                  onClick={logout}
                  className="flex items-center gap[10px] cursor-pointer"
                >
                  <img className="w-5" src={assets.logout_icon} alt="" />
                  <p className="hover:text-orange-600">Logout</p>
                </li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default NavBar;
