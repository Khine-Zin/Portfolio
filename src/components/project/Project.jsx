import React, { useEffect, useState } from "react";
import ProjectContainer from "./projectContainer/ProjectContainer";
import { projectData } from "./data";
import { FaArrowRight } from "react-icons/fa";
import { FaArrowDown } from "react-icons/fa6";
export default function Project({ mode }) {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    if (window.innerWidth > 768) {
      setProjects(projectData);
    } else {
      setProjects(projectData.slice(0, 3));
    }
  }, [window.innerWidth]);

  return (
    <div
      id="projects"
      data-aos="fade-down"
      className="w-full min-h-[100vh] py-10  duration-500 flex-col transition-all flex items-center"
    >
      <div className="flex-col mb-10 w-fit items-center flex">
        <h1 className="text-3xl font-bold"><span className="text-[#4070f4]">MY</span>PROJECTS</h1>
        <div className="w-[90%] rounded-md h-1 bg-[#4070f4]"></div>
      </div>

      <div className="md:w-[75%] w-full h-full grid md:grid-cols-3 gap-16 justify-center items-center">
        {projects.map((data) => {
          return <ProjectContainer mode={mode} key={data.name} data={data} />;
        })}
      </div>
      <div className="w-full md:w-[75%] px-3 mt-6 justify-center md:justify-end flex ">
        <a target="_blank" href="https://github.com/Khine-Zin">
          <button className="hover:bg-[#2d4481] group bg-[#4070f4] flex items-center gap-1 transition-all duration-200 text-white text-xs font-bold px-4 py-2 rounded-full">
            View More <FaArrowRight />
          </button>
        </a>
        <a className="md:block hidden  cursor-pointer z-50" href="#contact">
          <button className="text-xl arrow-button bott absolute z-10 md:block hidden bottom-[50px] left-[48%]   duration-500 transition-all animate-bounce">
            <FaArrowDown />
          </button>
        </a>
      </div>
    </div>
  );
}
