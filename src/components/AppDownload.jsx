import React from "react";
import { assets } from "../assets/assets";

const AppDownload = () => {
  return (
    <div
      className="mx-auto my-auto mt-24 text-[max(3vw,_20px)] text-center font-medium "
      id="mobile-app"
    >
      <p>
        For Better Experience Download <br /> GrubGo App.
      </p>
      <div className="flex justify-center gap-[max(2vw,10px)] mt-10 ">
        <img
          className="w-[max(30vw,120px)] max-w-44 transition duration-500 hover:scale-105 "
          src={assets.play_store}
          alt=""
        />
        <img
          className="w-[max(30vw,120px)] max-w-44 transition duration-500 hover:scale-105 "
          src={assets.app_store}
          alt=""
        />
      </div>
    </div>
  );
};

export default AppDownload;
