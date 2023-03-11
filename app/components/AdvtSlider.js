"use client";
import { useState } from "react";
import { useRef } from "react";
import Image from "next/image";
import CardAdvt from "./CardAdvt";

const data = [
  {
    img: "/images/sec6-1.png",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "109",
  },
  {
    img: "/images/sec6-2.png",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "109",
  },
  {
    img: "/images/sec6-3.png",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "240",
  },
  {
    img: "/images/sec6-2.png",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "223",
  },
  {
    img: "/images/sec6-1.png",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "320",
  },
];

const AdvtSlider = () => {
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
    <div className="relative flex gap-4 justify-between">
      <button
        className={`hidden sm:block h-[65px] w-[35px] ml-6 md:ml-12 self-center border-white border bg-white/[0.6] -left-16 mb-4 ${
          scrollPosition === 0 ? "opacity-50 cursor-default" : "cursor-pointer"
        }`}
        onClick={scrollToLeft}
        disabled={scrollPosition === 0}
        aria-label="Scroll to left"
      >
        <Image
          className="m-auto"
          src="/icons/icon-left2.png"
          alt="image"
          width={15}
          height={15}
        />
      </button>
      <div
        className="flex flex-row gap-4 items-center mx-8 sm:mx-2 overflow-x-auto h-[380px]"
        onScroll={handleScroll}
        ref={containerRef}
      >
        {data.map((el, index) => (
          <CardAdvt
            key={index}
            img={el.img}
            description={el.description}
            price={el.price}
          />
        ))}
      </div>
      <button
        className={`hidden sm:block h-[65px] w-[35px] mr-6 md:mr-12 self-center border-white border bg-white/[0.6] -right-16 mb-4 ${
          scrollPosition ===
          containerRef.current?.scrollWidth - containerRef.current?.clientWidth
            ? "opacity-50 cursor-default"
            : "cursor-pointer"
        }`}
        onClick={scrollToRight}
        disabled={
          scrollPosition ===
          containerRef.current?.scrollWidth - containerRef.current?.clientWidth
        }
        aria-label="Scroll to right"
      >
        <Image
          className="m-auto"
          src="/icons/icon-right2.png"
          alt="image"
          width={15}
          height={15}
        />
      </button>
    </div>
  );
};

export default AdvtSlider;
