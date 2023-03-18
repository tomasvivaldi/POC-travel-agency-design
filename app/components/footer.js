"use client";
import React from "react";
import Image from "next/image";
import { useState } from "react";

const Footer = () => {
  const [languageMenuOpen, setLanguageMenuOpen] = useState(false);
  const [currencyMenuOpen, setCurrencyMenuOpen] = useState(false);
  return (
    <footer>
      <div className=" mt-32  flex flex-col justify-evenly gap-16  bg-[#262626] text-white">
        <div className="flex flex-row flex-wrap gap-8 justify-around items-center mt-12">
          <div className="flex flex-row mx-6 md:w-2/5 flex-wrap order-2 md:order-none mt-16 md:mt-0">
            <Image
              className=" my-4 py-4 min-w-[150px] w-[180px]"
              src="/images/logo-footer.png"
              alt="image"
              width={180}
              height={30}
            ></Image>
            <ul className=" flex flex-row lg:mx-auto order-3 md:order-2 gap-4 shrink-0">
              <li>
                <Image
                  className=" my-4 py-4 w-[30px]"
                  src="/images/logo-facebook.png"
                  alt="image"
                  width={30}
                  height={30}
                />
              </li>
              <li>
                <Image
                  className=" my-4 py-4 w-[30px]"
                  src="/images/logo-linkedin.png"
                  alt="image"
                  width={30}
                  height={30}
                />
              </li>
              <li>
                <Image
                  className=" my-4 py-4 w-[30px]"
                  src="/images/logo-instagram.png"
                  alt="image"
                  width={30}
                  height={30}
                />
              </li>
              <li>
                <Image
                  className=" my-4 py-4 w-[30px]"
                  src="/images/logo-youtube.png"
                  alt="image"
                  width={30}
                  height={30}
                />
              </li>
            </ul>
            <p className="lg:order-3 w-[90%] text-gray-300">
              Aspiring to be the world’s leading adventure travel network, and
              led by a team of global adventurers, exploreGO was founded with
              the purpose of connecting you with the most incredible adventure
              experiences from around the globe
            </p>

            <div className="flex flex-row order-4 w-full lg:mt-12">
              <div className="w-full text-gray-400 gap-2 mr-12 flex flex-row flex-wrap  items-center">
                <p className="">Language</p>
                <div className="relative ml-4">
                  <button
                    className="flex items-center justify-between px-3 py-2 rounded-md bg-gray-700 hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
                    onClick={() => setLanguageMenuOpen(!languageMenuOpen)}
                  >
                    <span className="text-white mr-2">English</span>
                    <svg
                      className="w-4 h-4 fill-current text-white"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 12l-5-5h10l-5 5z" />
                    </svg>
                  </button>
                  {languageMenuOpen && (
                    <div className="absolute top-10 right-0 mt-2 py-2 w-48 bg-white rounded-md shadow-xl z-10">
                      <a
                        href="#"
                        className="block px-4 py-2 text-gray-800 hover:bg-gray-200 hover:text-gray-900"
                      >
                        English
                      </a>
                      <a
                        href="#"
                        className="block px-4 py-2 text-gray-800 hover:bg-gray-200 hover:text-gray-900"
                      >
                        Spanish
                      </a>
                      <a
                        href="#"
                        className="block px-4 py-2 text-gray-800 hover:bg-gray-200 hover:text-gray-900"
                      >
                        French
                      </a>
                      <a
                        href="#"
                        className="block px-4 py-2 text-gray-800 hover:bg-gray-200 hover:text-gray-900"
                      >
                        German
                      </a>
                    </div>
                  )}
                </div>
              </div>
              <div className="w-full text-gray-400 gap-2 mr-12 flex flex-row flex-wrap items-center">
                <p>Currency</p>
                <div className="relative ml-4">
                  <button
                    className="flex items-center justify-between px-3 py-2 rounded-md bg-gray-700 hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
                    onClick={() => setCurrencyMenuOpen(!currencyMenuOpen)}
                  >
                    <span className="text-white mr-2">USD</span>
                    <svg
                      className="w-4 h-4 fill-current text-white"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 12l-5-5h10l-5 5z" />
                    </svg>
                  </button>
                  {currencyMenuOpen && (
                    <div className="absolute top-10 right-0 mt-2 py-2 w-48 bg-white rounded-md shadow-xl z-10">
                      <a
                        href="#"
                        className="block px-4 py-2 text-gray-800 hover:bg-gray-200 hover:text-gray-900"
                      >
                        USD
                      </a>
                      <a
                        href="#"
                        className="block px-4 py-2 text-gray-800 hover:bg-gray-200 hover:text-gray-900"
                      >
                        EUR
                      </a>
                      <a
                        href="#"
                        className="block px-4 py-2 text-gray-800 hover:bg-gray-200 hover:text-gray-900"
                      >
                        GBP
                      </a>
                      <a
                        href="#"
                        className="block px-4 py-2 text-gray-800 hover:bg-gray-200 hover:text-gray-900"
                      >
                        JPY
                      </a>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col mx-6 w-full md:w-2/5 gap-6 order-1">
            <h3 className="text-3xl">Join the Journey</h3>
            <form className="flex flex-col gap-4 max-w-[350px] ">
              <input
                className="bg-transparent outline-none border-b-2 pb-2 border-white  text-white placeholder-gray-300 mb-4"
                type="text"
                placeholder="Your name"
              />
              <input
                className="bg-transparent outline-none border-b-2 pb-2 border-white text-white placeholder-gray-300 "
                type="email"
                placeholder="Your email"
              />
            </form>
            <button
              className=" sm:self-start self-center mt-8 w-full sm:w-[270px] py-4 text-white text-xs my-2 rounded-full bg-[#FFB200]
         flex flex-row gap-2 justify-center"
            >
              <p className="">SUBSCRIBE TO MAILING LIST</p>
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
        <p className=" text-center text-xs mb-6">
          © exploreGO™ 2020. All Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
