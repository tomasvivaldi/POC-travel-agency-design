import React from "react";
import Image from "next/image";

const CardBlog = ({ img, activity, type, date, postpreview }) => {
  return (
    <a
      href=""
      className="relative min-w-[280px] min-h-[357px] max-w-[280px] max-h-[357px] group 
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

        <div className=" absolute   bottom-0 w-full  bg-[#fff]/[0.8] backdrop-blur-sm group-hover:h-full ">
          <div className="h-full flex flex-col justify-between">
            <h3 className=" text-center text-black font-normal pt-3 px-1 hover:pt-8">
              {activity}
            </h3>
            <div className="hidden group-hover:flex text-left font-extralight text-xs m-4">
              <p>{postpreview}</p>
            </div>
            <div className=" flex justify-between mt-2 text-black text-[10px] font-extralight">
              <div className=" flex mx-4 mb-4 flex-row">
                <img
                  className="min-h-[12px] min-w-[12px] max-h-[12px] max-w-[12px] mt-1 mx-2"
                  src="/images/cardBlog01.png"
                />
                <h4 className="mt-[2px]">{type}</h4>
              </div>
              <div className=" flex mx-4 mb-4 flex-row">
                <img
                  className="min-h-[12px] min-w-[12px] max-h-[12px] max-w-[12px] mt-1 mx-2"
                  src="/images/cardBlog02.png"
                />
                <h4 className="mt-[2px]">{date}</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </a>
  );
};

export default CardBlog;
