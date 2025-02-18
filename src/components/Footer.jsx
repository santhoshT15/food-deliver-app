import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div
      className="bg-slate-800 text-slate-300 flex flex-col items-center gap-5 px-[8vw] py-5 pt-20 mt-24 "
      id="footer"
    >
      <div className="bg-transparent w-full grid grid-cols-[2fr_1fr_1fr] gap-20 max-1050:flex max-1050:flex-col max-1050:gap-[35px]  ">
        {/* Content left */}
        <div className="bg-transparent flex flex-col items-start gap-5">
          <img className="bg-transparent w-5/12" src={assets.logo} alt="" />
          <p className="bg-transparent">
            GrubGo delivers your favorite meals right to your door with speed
            and convenience. Enjoy fresh, delicious food anytime, anywhere!
          </p>
          <div className="bg-transparent flex">
            <img
              className="bg-transparent w-10 mr-4 cursor-pointer "
              src={assets.facebook_icon}
              alt=""
            />
            <img
              className="bg-transparent w-10 mr-4 cursor-pointer"
              src={assets.twitter_icon}
              alt=""
            />
            <img
              className="bg-transparent w-10 mr-4 cursor-pointer"
              src={assets.linkedin_icon}
              alt=""
            />
          </div>
        </div>
        {/* Content center */}
        <div className="bg-transparent flex flex-col items-start gap-5">
          <h2 className="bg-transparent text-white text-2xl font-medium">
            Company
          </h2>
          <ul className="bg-transparent">
            <li className="bg-transparent list-none mb-2 cursor-pointer">
              Home
            </li>
            <li className="bg-transparent list-none mb-2 cursor-pointer">
              About Me
            </li>
            <li className="bg-transparent list-none mb-2 cursor-pointer">
              Delivery
            </li>
            <li className="bg-transparent list-none mb-2 cursor-pointer">
              Privacy Policy
            </li>
          </ul>
        </div>
        {/* Content right */}
        <div className="bg-transparent flex flex-col items-start gap-5">
          <h2 className="bg-transparent text-white text-2xl font-medium">
            Get In touch
          </h2>
          <ul className="bg-transparent">
            <li className="bg-transparent list-none mb-2 cursor-pointer">
              +1 234 567 765
            </li>
            <li className="bg-transparent list-none mb-2 cursor-pointer">
              contact@grubgo.com
            </li>
          </ul>
        </div>
      </div>
      <hr className="w-full h-1 mx-0 my-5 bg-slate-500" />
      <p className="bg-transparent max-1050:text-center">
        Copyright 2025 © GrubGo.com - All Right Reserved by Santhosh T.
      </p>
    </div>
  );
};

export default Footer;
