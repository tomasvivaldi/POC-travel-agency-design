"use client";
import React from "react";
import CardExp from "./CardExp";
import { useState, useRef } from "react";

const data1 = [
  { activity: "Biking", img: "/images/cardexp1-1.png" },
  { activity: "Hiking & Trekking", img: "/images/cardexp1-2.png" },
  { activity: "Surfing", img: "/images/cardexp1-3.png" },
  { activity: "Polar Expeditions", img: "/images/cardexp1-4.png" },
  { activity: "Surfing", img: "/images/cardexp1-5.png" },
];

// const ExpSlider = () => {
//   return (
//     <div className="flex flex-row gap-4 m-8">
//       {data1.map((el, index) => (
//         <Cardexp key={index} img={el.img} />
//       ))}
//     </div>
//   );
// };

// import { useState } from "react";

const ExpSlider = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  const containerRef = useRef(null);

  const handleScroll = (e) => {
    setScrollPosition(e.target.scrollLeft);
  };

  const scrollToLeft = () => {
    if (containerRef.current) {
      containerRef.current.scrollTo({
        left: scrollPosition - containerRef.current.clientWidth / 2,
        behavior: "smooth",
      });
    }
  };

  const scrollToRight = () => {
    if (containerRef.current) {
      containerRef.current.scrollTo({
        left: scrollPosition + containerRef.current.clientWidth / 2,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="m-8">
      <div
        className="flex flex-row gap-4 items-center overflow-x-scroll shrink-0 h-[350px] "
        ref={containerRef}
        onScroll={handleScroll}
      >
        {data1.map((el, index) => (
          <CardExp key={index} img={el.img} activity={el.activity} />
        ))}
      </div>
      <div className="flex justify-between mt-4 font-extralight">
        <button
          className={`mx-2 flex flex-row" ${
            scrollPosition === 0
              ? "opacity-50 cursor-default"
              : "cursor-pointer"
          }`}
          onClick={scrollToLeft}
          disabled={scrollPosition === 0}
          aria-label="Scroll to left"
        >
          <img
            className="mx-2 mt-1.5 opacity-80"
            src="/images/arrow-left.png"
          />
          Previous
        </button>
        <button
          className={`mx-2 flex flex-row"${
            scrollPosition ===
            containerRef.current?.scrollWidth -
              containerRef.current?.clientWidth
              ? "opacity-50 cursor-default"
              : "cursor-pointer"
          }`}
          onClick={scrollToRight}
          disabled={
            scrollPosition ===
            containerRef.current?.scrollWidth -
              containerRef.current?.clientWidth
          }
          aria-label="Scroll to right"
        >
          Next
          <img
            className="mx-2 mt-1.5 opacity-80"
            src="/images/arrow-right.png"
          />
        </button>
      </div>
    </div>
  );
};

export default ExpSlider;
