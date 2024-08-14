import React from "react";
import "./home.css";
import { Typewriter, Cursor } from "react-simple-typewriter";
import { FaGithub } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaDownload } from "react-icons/fa6";
import { FaArrowDown } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import Profile from "../../images/Homeprofile.jpg";
import Cv from '../../images/KhineZinMyintcv.pdf'
export default function Home() {
  

  return (
    <div
      id="home"
      className="w-screen h-[95vh] overflow-hidden flex md:justify-center  items-center  transition-all duration-200 dark:text-white"
    >
      <div className="md:w-[75%] w-full  px-5 md:px-0 md:flex-row  gap-y-14 flex-col-reverse flex items-center md:justify-between">
        {/* Hero section text */}
        <div className="text-sec md:text-[64px] w-full flex flex-col items-center md:items-start md:w-[60%] text-[24px] font-bold ">
          <div className="flex md:flex-col gap-x-3 flex-row">
            <h1 className=" transition-all duration-200 dark:text-white">
              Hi,I am
            </h1>
            <h2 className=" transition-all duration-200 dark:text-white">
               <span className="text-[#4070f4]">Khine Zin Myint</span>
            </h2>
          </div>
          <h1 className=" transition-all duration-200 dark:text-white">
            <Typewriter
              words={["Web Developer.", "CS Student."]}
              cursor
              loop={false}
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
             
            />
          </h1>
          <a target="_blankx" href={Cv}>
          <button className="hover:bg-[#2d4481] group bg-[#4070f4] flex items-center gap-3 mt-8 transition-all duration-200 text-white text-xl font-bold px-4 py-2 rounded-md">
            Download CV <FaDownload className="group-hover:animate-bounce" />
          </button>
          </a>
          <div className="flex text-xl md:text-2xl text-black bg-transparent dark:text-white duration-500 transition-all gap-x-10 mt-10">
            <a
              target="_blank"
              href="https://www.facebook.com/profile.php?id=100013163058913"
              className="hover:scale-125 transition-all duration-200"
            >
              <FaFacebook />
            </a>
            <a
              className="hover:scale-125 transition-all duration-200"
              target="_blank"
              href="www.linkedin.com/in/khine-zin-myint-a8aa84269"
            >
              <FaLinkedinIn />
            </a>
            <a
              className="hover:scale-125 transition-all duration-200"
              target="_blank"
              href="https://github.com/Khine-Zin"
            >
              <FaGithub />
            </a>
            <a
              className="hover:scale-125 transition-all duration-200"
              target="_blank"
              href="https://twitter.com/manish_jha02"
            >
              
            </a>
          </div>
          <a className="cursor-pointer z-50" href="#about">
            <button className="text-xl md:block hidden arrow-button absolute bottom-[54px] md:bottom-14 left-[48%] text-black dark:text-white duration-500 transition-all animate-bounce">
              <FaArrowDown />
            </button>
          </a>
        </div>
        {/* Hero section image */}
        <div className=" cursor-pointer justify-start items-start md:w-[40%] flex">
          <div className="dp">
            <img src={Profile} alt="" className="hero-image" />
          </div>
        </div>
      </div>
    </div>
  );
}
