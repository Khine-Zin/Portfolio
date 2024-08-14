import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { FaGraduationCap } from "react-icons/fa";

import { FaArrowDown } from "react-icons/fa6";
export default function Education() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  const education = [
    {
      institute: "University of Computer Studies ",
      course: "Bachelor of Computer Science",
      duration: "2016-2020",
    },
    {
      institute: "MMS One Stop it Solution(MMSIT)",
      course: "Web Development",
      duration: "2018-2020",
    },
    {
      institute: "Create Your Code",
      course: "Node js and MongoDb",
      duration: "2021(April)-2021(August)",
    },
  ];
  return (
    <div
      data-aos="fade-down"
      id="education"
      className="relative min-h-[90vh] flex flex-col items-center w-screen"
    >
      <div className="flex-col mb-10 w-fit items-center flex">
        <h1 className="text-3xl font-bold">
          <span className="text-[#4070f4]">MY</span> EDUCATION
        </h1>
        <div className="w-[90%] rounded-md h-1 bg-[#4070f4]"></div>
      </div>

      <div className="md:w-[75%] gap-5 w-full flex px-5 flex-col items-center">
        {education.map((data) => {
          return (
            <div
              key={data.duration}
              className="relative hover:scale-105  flex flex-col shadow-md shadow-black dark:shadow-white  px-5 py-5 rounded-md w-full md:w-[40%] dark:bg-black gap-3 bg-white border dark:border-white transition-all duration-500"
            >
              <span className=" rounded-full text-black text-xs font-bold w-fit px-1 py-0.5 bg-slate-300">
                {data.duration}
              </span>
              <h1 className="text-[16px] md:text-xl font-bold">
                {data.course}
              </h1>
              <h2 className="font-bold md:text-[14px] text-xs text-slate-600">
                {data.institute}
              </h2>
              <FaGraduationCap className="absolute top-0 right-3 md:text-xl text-[16px]" />
              <span className="absolute top-5 right-5 dark:border-white border-black transition-all duration-500 w-0 border-r h-[80%]"></span>
            </div>
          );
        })}
      </div>
      <a className="md:block hidden  cursor-pointer z-50" href="#skills">
            <button className="text-xl arrow-button absolute bottom-[100px] left-[48%]   duration-500 transition-all animate-bounce">
              <FaArrowDown />
            </button>
          </a>
    </div>
  );
}
