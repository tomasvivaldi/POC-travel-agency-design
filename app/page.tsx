import Link from "next/link";
import Image from "next/image";
import "./globals.css";
import ExpSlider from "./components/ExpSlider";
import DonutSlide from "./components/DonutSlide";
import AdvtSlider from "./components/AdvtSlider";
import BlogSlider from "./components/BlogSlider";
import LogoSlider from "./components/LogoSlider";
import { Inter } from "next/font/google";
import SimpleSlider from "./components/ExpSlider";

const inter = Inter({ subsets: ["latin"] });
{
  /*
Usage:
<p className={inter.className}>
Example text
</p> 
*/
}

export default function Home() {
  return (
    <>
      <section>
        <div className="relative flex flex-col h-[900px]">
          <Image
            className="w-fit h-full object-cover"
            src="/images/sec1-1.png"
            alt="image"
            width={5760}
            height={2936}
          />
          <h1 className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-black justify-center text-center text-[40px] md:text-5xl font-semibold tracking-widest whitespace-nowrap leading-relaxed">
            GIVING BACK <br className="block md:hidden" />
            WITH EVERY <br className=" md:block" />
            ADVENTURE
          </h1>
          <Image
            className="hidden md:flex relative w-full h-full object-cover -bottom-[-1px]"
            src="/images/sec1-2.png"
            alt="image"
            width={5760}
            height={396}
          />
          <div className="flex md:relative md:bottom-[77px] mx-auto w-full md:w-[666px] h-[137px] md:h-[154px] bg-white mb-24">
            <div className=" justify-between pt-2 w-3/4 mx-auto mt-8">
              <form action="" className="relative">
                <input
                  type="text"
                  name="search"
                  placeholder="Find Your Next Adventure"
                  autoComplete="off"
                  aria-label="Search Adventure"
                  className=" w-full pl-8 py-4 placeholder-gray-400 placeholder:font-extralight rounded-md ring-1 ring-gray-300 focus:ring-[#307FE2]"
                ></input>

                <Image
                  className="w-5 h-5 absolute right-10 top-0 my-5 opacity-30 pointer-events-none"
                  src="/icons/search-icon.png"
                  alt="search icon"
                  width={150}
                  height={150}
                />
              </form>
              <div className="flex flex-row w-full gap-12">
                <button
                  type="button"
                  className="w-full mt-6 py-3 px-2 rounded-md border-black border font-extralight hover:border-[#307FE2] hover:text-[#307FE2] hover:bg-[#307FE2]/[10%]"
                >
                  Browse By Experience
                </button>
                <button
                  type="button"
                  className=" w-full mt-6 py-3  rounded-md border-black border font-extralight hover:border-[#307FE2] hover:text-[#307FE2] hover:bg-[#307FE2]/[10%]"
                >
                  Browse By Destination
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="lg:ml-16 ">
          <h1 className="ml-16 mt-12 md:my-12 text-[42px] font-extralight">
            Featured Experiences
          </h1>
          <ExpSlider />
        </div>
      </section>

      <section>
        <div
          className="relative flex bg-cover flex-col w-full h-[600px] bg-[30%_50%]"
          style={{ backgroundImage: "url(/images/sec3-1.png)" }}
        >
          <div className="absolute top-0 py-16 w-full h-52 mt-6 flex flex-col ">
            <Image
              className="mx-auto my-4 py-4 w-[420px] md:w-[468px]"
              src="/images/sec3-2.png"
              alt="image"
              width={468}
              height={79}
            />
            <p className=" self-center text-white text-center w-[85%] md:w-[70%] lg:text-3xl m-4 font-extralight text-2xl">
              exploreGO is a global online adventure travel marketplace with a
              socially responsible focus. We connect you with incredible
              adventure experiences across the globe and reinvest 10% of all
              transaction fees into local community or environmental initiatives
              of your choosing.
            </p>
            <button
              className="w-[85%]
             md:w-[200px] py-3 text-white mx-auto my-2 rounded-md bg-[#FFB200]"
            >
              BOOK NOW
            </button>
          </div>
        </div>
      </section>

      {/* <section>
        <div className="bg-green-500">
          <h1>TESTTESTETEST</h1>
          <DonutSlide />
        </div>
      </section> */}

      <section>
        <div className="flex flex-row justify-evenly bg-white h-[300px]"></div>
      </section>
      <section>
        <div className="block">
          <div className="relative flex flex-col">
            <Image
              className="w-full h-[500px] md:h-[600px] object-cover relative"
              src="/images/sec4-1.png"
              alt="image"
              width={5760}
              height={2936}
            />
            <h2 className=" absolute w-full top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white tracking-wide justify-center text-center text-2xl lg:text-4xl font-semibold ">
              Your Home For Adventure
            </h2>
            <button className="h-[65px] w-[65px] border-white border bg-white/[0.1] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full">
              <Image
                className="m-auto"
                src="/images/sec4-2.png"
                alt="image"
                width={15}
                height={15}
              />
            </button>
          </div>
        </div>
      </section>
      <section>
        <div className="lg:ml-16 ">
          <h1 className="ml-16 mt-12 md:my-12 text-[42px] font-extralight">
            Hand Picked Adventures
          </h1>
          <AdvtSlider />
        </div>
      </section>
      <section>
        <div className="block">
          <div className="relative ">
            <Image
              className="w-full h-[600px] object-cover relative"
              src="/images/sec7-1.png"
              alt="image"
              width={5760}
              height={2936}
            />
            <div className="mx-24 absolute top-0 h-[600px] flex">
              <div className="flex flex-col justify-center">
                <div className="flex flex-row justify-between lg:justify-start lg:w-full gap-24 ">
                  <button className="hidden sm:block h-[65px] w-[35px] backdrop-blur-sm self-center border-white border bg-white/[0.6] -left-16 mb-4 ">
                    <Image
                      className="m-auto"
                      src="/icons/icon-left2.png"
                      alt="image"
                      width={15}
                      height={15}
                    />
                  </button>
                  <button className="sm:hidden h-[50px] w-[50px] backdrop-blur-sm border-white border bg-white/[0.6] absolute bottom-0 -left-16 mb-4 rounded-full">
                    <Image
                      className="m-auto"
                      src="/icons/icon-left2.png"
                      alt="image"
                      width={15}
                      height={15}
                    />
                  </button>
                  <div className="flex flex-col justify-start sm:w-[60%] lg:w-[50%] gap-8 lg:mr-[30%] font">
                    <h2 className="  text-black tracking-wide sm:text-left text-center text-3xl lg:text-4xl font-semibold ">
                      Give back to local communities
                    </h2>
                    <p className=" font-light text-xl text-center sm:text-left">
                      " Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Sed sagittis tristique velit, in posuere ipsum rutrum vel.
                      Sed venenatis neque a orci laoreet, eget consectetur
                      libero pulvinar."
                    </p>
                    <button className=" self-center sm:self-start w-[200px] py-3 text-white my-2 rounded-md bg-[#FFB200]">
                      BOOK NOW
                    </button>
                  </div>

                  <button className="hidden sm:block h-[65px] w-[35px] backdrop-blur-sm self-center border-white border bg-white/[0.6]  -right-16 mb-4   ">
                    <Image
                      className="m-auto"
                      src="/icons/icon-right2.png"
                      alt="image"
                      width={15}
                      height={15}
                    />
                  </button>
                  <button className=" sm:hidden h-[50px] w-[50px] backdrop-blur-sm border-white border bg-white/[0.6] absolute bottom-0 -right-16 mb-4 rounded-full ">
                    <Image
                      className=" m-auto"
                      src="/icons/icon-right2.png"
                      alt="image"
                      width={15}
                      height={15}
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="md:ml-28 ">
          <h1 className="ml-16 my-12 text-[42px] font-extralight">
            News Articles & Blogs
          </h1>
          <BlogSlider />
        </div>
      </section>
      <section>
        <div className="md:ml-28 ">
          <h1 className=" ml-16 my-12 pt-12 text-[42px] font-extralight">
            Industry Partners
          </h1>
          <LogoSlider />
        </div>
      </section>
    </>
  );
}
