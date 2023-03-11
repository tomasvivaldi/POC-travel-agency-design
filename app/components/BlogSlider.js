"use client";
import React from "react";
import CardBlog from "./CardBlog";
import { useState, useRef } from "react";

const data1 = [
  {
    activity: "Immerse Yourself in Wild Patagonia",
    img: "/images/cardBlog1-1.png",
    type: "hiking",
    date: "October 8, 2020",
    postpreview:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vel tortor ac elit placerat laoreet. \n\n Morbi at dolor ex. Duis lacinia risus nec odio fermentum pretium. Fusce imperdiet tortor sit amet nunc ultrices, in mollis libero ullamcorper. Sed non ex massa. Duis volutpat lobortis libero vel congue. Quisque sed dapibus turpis. Sed sollicitudin justo eget",
  },
  {
    activity: "Milford Track Bookings Open TODAY!",
    img: "/images/cardBlog1-2.png",
    type: "hiking",
    date: "August 17, 2020",
    postpreview:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vel tortor ac elit placerat laoreet. \n\n Morbi at dolor ex. Duis lacinia risus nec odio fermentum pretium. Fusce imperdiet tortor sit amet nunc ultrices, in mollis libero ullamcorper. Sed non ex massa. Duis volutpat lobortis libero vel congue. Quisque sed dapibus turpis. Sed sollicitudin justo eget",
  },
  {
    activity: "Lydia Bradey’s 6th Everest summit",
    img: "/images/cardBlog1-3.png",
    type: "mountaineering",
    date: "March 4, 2020",
    postpreview:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vel tortor ac elit placerat laoreet. \n\n Morbi at dolor ex. Duis lacinia risus nec odio fermentum pretium. Fusce imperdiet tortor sit amet nunc ultrices, in mollis libero ullamcorper. Sed non ex massa. Duis volutpat lobortis libero vel congue. Quisque sed dapibus turpis. Sed sollicitudin justo eget",
  },
  {
    activity:
      "Thank you for caring! exploreGO gives back 10% to local communities",
    img: "/images/cardBlog1-4.png",
    type: "exploreGIVE",
    date: "March 1, 2020",
    postpreview:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vel tortor ac elit placerat laoreet. \n\n Morbi at dolor ex. Duis lacinia risus nec odio fermentum pretium. Fusce imperdiet tortor sit amet nunc ultrices, in mollis libero ullamcorper. Sed non ex massa. Duis volutpat lobortis libero vel congue. Quisque sed dapibus turpis. Sed sollicitudin justo eget",
  },
  {
    activity: "Lydia Bradey’s 6th Everest summit",
    img: "/images/cardBlog1-5.png",
    type: "mountaineering",
    date: "August 17, 2020",
    postpreview:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vel tortor ac elit placerat laoreet. \n\n Morbi at dolor ex. Duis lacinia risus nec odio fermentum pretium. Fusce imperdiet tortor sit amet nunc ultrices, in mollis libero ullamcorper. Sed non ex massa. Duis volutpat lobortis libero vel congue. Quisque sed dapibus turpis. Sed sollicitudin justo eget",
  },
];
const BlogSlider = () => {
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
        className="flex flex-row gap-4 items-center overflow-x-scroll shrink-0 h-[380px] "
        ref={containerRef}
        onScroll={handleScroll}
      >
        {data1.map((el, index) => (
          <CardBlog
            key={index}
            img={el.img}
            activity={el.activity}
            type={el.type}
            date={el.date}
            postpreview={el.postpreview}
          />
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
          className={`mx-2 flex flex-row" ${
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

export default BlogSlider;
