"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header>
      <div
        className={`${isMenuOpen ? "" : "justify-around items-center"}
      z-10 flex flex-row  absolute top-8 left-0 right-0 pt-2`}
      >
        <button className="lg:hidden focus:outline-none" onClick={toggleMenu}>
          <Image
            className={isMenuOpen ? "hidden" : "w-12 h-6"}
            src={"/icons/menu-icon.png"}
            alt="image"
            width={24}
            height={24}
          />
        </button>
        <a
          href="#"
          className={
            isMenuOpen
              ? "hidden"
              : "block self-center my-3 pt-1 w-[180px] lg:w-[250px]  lg:self-start xl:ml-20 ml-4"
          }
        >
          <Image
            className={isMenuOpen ? "hidden" : "block"}
            src="/icons/header-logo.png"
            alt="image"
            width={250}
            height={45}
          />
        </a>
        <nav
          className={`${
            isMenuOpen ? "fixed inset-0 bg-gray-500/[0.6]  " : "hidden"
          }  lg:block lg:grow lg:h-16 lg:items-center lg:w-auto`}
        >
          <div
            className={
              isMenuOpen
                ? "flex flex-row flex-wrap gap-12 justify-between h-[400px] bg-white"
                : "h-16 grow"
            }
          >
            <ul
              className={
                isMenuOpen
                  ? "flex flex-col text-2xl lg:text-xl font-light px-12 pt-6 gap-8"
                  : "flex flex-row justify-evenly  mt-4 text-lg lg:text-xl font-light"
              }
            >
              <li className=" hover:cursor-none ">
                <a
                  href="#"
                  className={
                    isMenuOpen ? "block -ml-4 mt-3 w-[180px]" : "hidden"
                  }
                >
                  <Image
                    className={isMenuOpen ? "block" : "hidden"}
                    src="/icons/header-logo.png"
                    alt="image"
                    width={250}
                    height={45}
                  />
                </a>
              </li>
              <li className=" hover:border-b-2  hover:border-[#307FE2] hover:font-medium py-1">
                Experiences
              </li>
              <li className=" hover:border-b-2  hover:border-[#307FE2] hover:font-medium py-1">
                Destinations
              </li>
              <li className=" hover:border-b-2  hover:border-[#307FE2] hover:font-medium py-1">
                Gear
              </li>
              <li className=" hover:border-b-2  hover:border-[#307FE2] hover:font-medium py-1">
                About Us
              </li>
            </ul>
            <button
              className="lg:hidden focus:outline-none self-start mt-8 mr-10"
              onClick={toggleMenu}
            >
              <Image
                className={isMenuOpen ? "w-6 h-8" : "w-12 h-6"}
                src={"/icons/close-icon.png"}
                alt="image"
                width={24}
                height={24}
              />
            </button>
          </div>
        </nav>
        <div
          className={`${isMenuOpen ? "hidden" : ""}
        flex flex-row justify-center gap-4 xl:mr-12 mr-4`}
        >
          <button className="my-auto hover:shadow-xl">
            <Image
              className="mx-auto w-[25px] h-[25px] opacity-60 hover:opacity-100"
              src="/icons/search-icon.png"
              alt="image"
              width={20}
              height={20}
            />
          </button>
          <button className="my-auto hover:shadow-xl ">
            <Image
              className="mx-auto my-auto w-[25px] h-[25px] opacity-60 hover:opacity-100"
              src="/icons/bag-icon.png"
              alt="image"
              width={20}
              height={20}
            />
          </button>
          <button className="hidden lg:block md:w-[200px] py-3 text-white mx-2 my-2 rounded-md bg-[#FFB200]">
            BOOK NOW
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
