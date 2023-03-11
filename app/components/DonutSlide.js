"use client";

import Donut from "./Donut";

import CircularProgressBar from "./Donut";

const data = [
  {
    percent: "50",
  },
  {
    percent: "75",
  },
  {
    percent: "90",
  },
];

const DonutSlide = () => {
  return (
    <div className=" flex flex-row gap-4 justify-between ">
      <div className="flex flex-row gap-4 w-full justify-evenly  sm:mx-2  h-[380px]">
        {data.map((el, index) => (
          <CircularProgressBar key={index} percent={el.percent} />
        ))}
      </div>
    </div>
  );
};

export default DonutSlide;
