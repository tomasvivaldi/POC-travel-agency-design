"use client";
import { useState } from "react";
import Image from "next/image";

const data = [
  { img: "/images/sec9-logo1.png" },
  { img: "/images/sec9-logo2.png" },
  { img: "/images/sec9-logo3.png" },
  { img: "/images/sec9-logo4.png" },
  { img: "/images/sec9-logo5.png" },
  { img: "/images/sec9-logo6.png" },
];

const LogoSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const prevSlide = () => {
    if (currentSlide === 0) {
      // Do nothing, already at the first slide
      return;
    }
    setCurrentSlide(currentSlide - 1);
  };

  const nextSlide = () => {
    if (currentSlide === slides.length - 1) {
      // Do nothing, already at the last slide
      return;
    }
    setCurrentSlide(currentSlide + 1);
  };

  const slides = [];
  for (let i = 0; i < data.length; i += 4) {
    slides.push(data.slice(i, i + 4));
  }

  return (
    <>
      <div
        className="hidden relative sm:flex w-full justify-between items-center
      "
      >
        <button
          className={`hidden sm:block h-[65px] w-[35px]  self-center border-white border bg-white/[0.6] -left-16 mb-4 ${
            currentSlide === 0 ? "opacity-50 cursor-default" : "cursor-pointer"
          }`}
          onClick={prevSlide}
          disabled={currentSlide === 0}
          aria-label="Previous slide"
        >
          <Image
            className="m-auto"
            src="/icons/icon-left2.png"
            alt="image"
            width={15}
            height={15}
          />
        </button>
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`transition-opacity duration-500 justify-evenly w-full ${
              currentSlide === index ? "flex" : "hidden"
            }`}
          >
            <div className="flex justify-evenly w-full items-center">
              {slide.map((logo, index) => (
                <div key={index}>
                  <Image src={logo.img} width={80} height={80} alt="Logo" />
                </div>
              ))}
            </div>
          </div>
        ))}
        <button
          className={`hidden sm:block h-[65px] w-[35px] mr-12 self-center border-white border bg-white/[0.6] -right-16 mb-4 ${
            currentSlide === slides.length - 1
              ? "opacity-50 cursor-default"
              : "cursor-pointer"
          }`}
          onClick={nextSlide}
          disabled={currentSlide === slides.length - 1}
          aria-label="Next slide"
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
      <div className="relative sm:hidden mx-8  ">
        <div className="flex flex-row gap-4 items-center overflow-x-scroll shrink-0  ">
          {data.map((logo, index) => (
            <div key={index} className="mx-4 shrink-0">
              <Image src={logo.img} width={80} height={80} alt="Logo" />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default LogoSlider;
