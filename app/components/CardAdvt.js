import React from "react";
import Image from "next/image";

const CardExp = ({ img, description, price }) => {
  return (
    <div
      href=""
      className="flex flex-col max-w-[290px]  gap-2
     "
    >
      <div className="  sm:min-w-[290px] sm:min-h-[190px] sm:max-w-[290px] sm:max-h-[190px] ">
        <Image
          className=" bg-[30%_50%] bg-cover min-w-[290px]  "
          src={img}
          alt="image"
          width={1520}
          height={1004}
        />
      </div>
      <div className=" flex flex-col text-black ">
        <p>{description}</p>
      </div>
      <div className=" flex flex-col text-black font-bold">
        <p>NZD ${price}</p>
      </div>
      <div className="">
        <button
          className=" self-start w-[150px] py-3 text-white text-xs my-2 rounded-md bg-[#FFB200]
         flex flex-row gap-2 justify-center"
        >
          <p className="">BOOK NOW</p>
          <Image
            className="mt-1"
            src="/images/arrow-right-white.png"
            alt="right arrow"
            width={20}
            height={20}
          />
        </button>
      </div>
    </div>
  );
};

export default CardExp;
