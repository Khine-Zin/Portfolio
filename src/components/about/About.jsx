import React, { useEffect } from "react";
import aboutImage from '../../images/about.jpg'
import { FaArrowDown } from "react-icons/fa6";

import Aos from "aos";
import "aos/dist/aos.css";
export default function About() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div id="about"
      data-aos="fade-down"
      className="w-full min-h-[95vh] py-10  duration-500 flex-col transition-all flex items-center"
    >
      <div  className="flex-col mb-10 w-fit items-center flex">
        <h1 className="text-3xl font-bold">ABOUT <span className="text-[#4070f4]">ME</span></h1>
        <div className="w-[90%] rounded-md h-1 bg-[#4070f4]"></div>
      </div>
      <div className="md:w-[75%] gap-x-10 w-full flex overflow-hidden">
        <div data-aos="fade-right" className="w-[500px]  md:block hidden">
          <img
            className="rounded-lg overflow-hidden w-[90%]"
            src={aboutImage}
            alt=""
          />
        </div>
        <div
          data-aos="fade-down"
          className="about px-3 md:w-[70%] w-full  leading-6 text-justify   md:leading-8 "
        >
          <div>
            {" "}
            I'm Khine Zin Myint, a passionate MERN (MongoDB, Express.js,
            React.js, Node.js) stack developer with a deep love for technology
            and innovation. Crafting captivating web experiences is not just a
            job for me – it's my passion.
            {/* <br /> */}
            With a keen eye for design and a dedication to excellence, I
            specialize in creating sleek and user-friendly websites. I believe
            that great design should be both visually appealing and highly
            functional, and I pour my heart into every project to ensure it
            meets these standards.
            {/* <br /> */}
            Beyond coding, I'm a lifelong learner, constantly exploring new
            technologies and pushing the boundaries of what's possible.
            {/* <br /> */}
            If you're looking to hire a talented developer or collaborate on an
            exciting project, don't hesitate to <a href="#contact" className="text-[#4070f4]">get in touch</a> with me. Let's
            create something amazing together!
          </div>
          <div className="w-full flex justify-center">
            <a href="#contact">
              <button className="hover:bg-[#2d4481] hidden bg-[#4070f4] md:flex items-center gap-3 mt-8 transition-all duration-200 text-white text-xl font-bold px-4 py-2 rounded-md">
                Contact ME
              </button>
            </a>
          </div>
         
        </div>
        <a className="md:block hidden  cursor-pointer z-50" href="#education">
            <button className="text-xl arrow-button absolute bottom-[100px] left-[48%]   duration-500 transition-all animate-bounce">
              <FaArrowDown />
            </button>
          </a>
      </div>
    </div>
  );
}
