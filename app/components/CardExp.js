import React from "react";
import Image from "next/image";

const CardExp = ({ img, activity }) => {
  return (
    <div
      className="relative min-w-[290px] min-h-[300px] hover:scale-105 
     "
    >
      <div className="">
        <Image
          className=" min-h-[300px]  w-full "
          src={img}
          alt="image"
          width={293.5}
          height={314.5}
        />

        <div className=" flex flex-col "></div>
        <div className=" absolute bottom-0 w-full h-[45px] bg-[#307FCA99] backdrop-blur-sm">
          <h3 className=" text-center text-white font-extralight py-2">
            {activity}
          </h3>
        </div>
      </div>
    </div>
  );
};

export default CardExp;
