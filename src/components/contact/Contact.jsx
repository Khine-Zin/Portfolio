import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import Form from "./Form";
import './contact.css'
import { FaFacebook } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { FaLinkedinIn } from "react-icons/fa";
import { FaLine } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { FaMapMarkerAlt } from "react-icons/fa";
export default function Contact() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div
      data-aos="zoom-in-up"
      id="contact"
      className="w-full min-h-[90vh] py-10   duration-500 flex-col transition-all flex items-center"
    >
      <div className="flex-col mb-10 w-fit items-center flex">
        <h1 className="text-3xl font-bold">
          CONTACT <span className="text-[#4070f4]">ME</span>
        </h1>
        <div className="w-[90%] rounded-md h-1 bg-[#4070f4]"></div>
      </div>
      <div className="md:w-[75%] w-full">
        <div className="w-full md:flex-row gap-y-10 flex-col-reverse flex items-center md:items-start justify-between ">
          <div className="md:w-[50%] gap-x-4 justify-center md:pl-[100px] md:pt-7 gap-y-5 md:gap-y-32  flex flex-col">
         <div className=" flex flex-col items-start gap-5 md:gap-16 md:h-fit h-10 overflow-scroll md:overflow-hidden">
            <a target="_blank" className="flex justify-center items-center gap-2" href="mailto:jhamanish.cse25@gmail.com">
                <IoMail className="text-3xl md:text-5xl text-[#4070f4]"/> <h3 className="flex flex-col items-start"><span className="font-bold md:text-xl">Email</span><p className="dark:text-slate-300 text-slate-500 text-xs md:text-[18px] font-bold">lonelone582180@gmail.com</p></h3>
            </a>
            <a target="_blank"  className="flex justify-center items-center gap-2" href="https://maps.app.goo.gl/qFmDgqPtPUSowBee8">
                <span className="text-3xl md:text-5xl text-[#4070f4]"><FaMapMarkerAlt /></span>
                <div>
                    <h1 className="font-bold md:text-xl">Location</h1>
                    <p className="dark:text-slate-300 text-slate-500 text-xs md:text-[18px] font-bold"> Myanmar</p>
                </div>
            </a>
            </div>
            {/* social icons */}
            <div className="flex justify-center md:gap-x-5">
            <a
              className="flex w-fit items-center gap-2 group"
              target="_blank"
              href="https://www.facebook.com/profile.php?id=100013163058913"
            >
              <div className="text-[#E4405F] w-[40px] h-[40px]  px-2 py-2 rounded-full  overflow-hidden border-[#E4405F] group-hover:bg-[#E4405F] dark:group-hover:text-[white] group-hover:text-white transition-all duration-300 md:border-2 text-2xl flex justify-center items-center">
                <FaFacebook />
              </div>
              <div className="text-[#E4405F] font-bold w-0 overflow-hidden group-hover:w-[100px] transition-all duration-300 md:block hidden">
                FaceBook
              </div>
            </a>
            <a
              className="flex w-fit items-center gap-2 group"
              target="_blank"
              href="www.linkedin.com/in/khine-zin-myint-a8aa84269"
            >
              <div className="text-[#0077B5] w-[40px] px-2 py-2 rounded-full h-[40px] overflow-hidden border-[#0077B5] group-hover:bg-[#0077B5] dark:group-hover:text-[white] group-hover:text-white transition-all duration-300 md:border-2 text-xl flex justify-center items-center">
                <FaLinkedinIn />
              </div>
              <div className="text-[#0077B5] font-bold w-0 overflow-hidden group-hover:w-[100px] transition-all duration-300 md:block hidden">
                LinkedIn
              </div>
            </a>
            <a
              className="flex w-fit items-center gap-2 group"
              target="_blank"
              href="https://github.com/Khine-Zin"
            >
              <div className="text-[#181717] dark:border-white dark:text-white dark:group-hover:bg-white dark:group-hover:text-[#181717] w-[40px] px-2 py-2 rounded-full h-[40px] overflow-hidden border-[#181717] group-hover:bg-[#181717]  group-hover:text-white transition-all duration-300 md:border-2 text-2xl flex justify-center items-center">
                <FiGithub />
              </div>
              <div className="text-[#181717] dark:text-white font-bold w-0 overflow-hidden group-hover:w-[100px] transition-all duration-300 md:block hidden">
                Github
              </div>
            </a>
           
          
            <a
              className="flex w-fit items-center gap-2 group"
              target="_blank"
              href="https://wa.me/+959 940160238"
            >
              <div className="text-[#25D366] w-[40px]  px-2 py-2 rounded-full h-[40px] overflow-hidden border-[#25D366] group-hover:bg-[#25D366] dark:group-hover:text-[white] group-hover:text-white transition-all duration-300 md:border-2 text-2xl flex justify-center items-center">
                <FaLine />
              </div>
              <div className="text-[#25D366] font-bold w-0 overflow-hidden group-hover:w-[100px] transition-all duration-300 md:block hidden">
                Line
              </div>
            </a>
            </div>
            {/* social icons end */}
          </div>
          <div className="md:w-[50%] w-full flex justify-center md:justify-end">
            <Form />
          </div>
        </div>
      </div>
    </div>
  );
}
