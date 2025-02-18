import React from "react";

const Header = () => {
  return (
    <div className="bg-[url('/header_img.jpg')] bg-no-repeat h-[34vw] bg-contain relative w-full">
      <div className="text-white max-750:max-w-[65%] max-1050:max-w-[45%] bg-transparent absolute flex flex-col items-start gap-[1.5vw] max-w-[50%] bottom-[10%] left-[6vw] animate-fadeIn">
        <h2 className="font-medium text-[max(4vw,_22px)] bg-transparent ">
          Order your favourite food here ...
        </h2>
        <p className="max-750:hidden text-[1vw] bg-transparent">
          Indulge in a wide selection of mouthwatering dishes, crafted with the
          finest ingredients and expert skill. Our goal is to delight your taste
          buds and transform every meal into an unforgettable dining experience.
        </p>
        <button className="max-750:px-[4vw] max-750:py-[2vw] border-none text-[#49557e] font-medium px-[1vw] py-[1.2vw] text-[max(1vw,_13px)] rounded-3xl hover:bg-[#f39519] hover:text-[#d8dee6]  ">
          View more
        </button>
      </div>
    </div>
  );
};

export default Header;
