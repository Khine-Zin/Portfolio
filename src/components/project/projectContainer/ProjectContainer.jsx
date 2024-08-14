import React, { useEffect } from "react";
import "./projectcontainer.css";
import Aos from "aos";
import "aos/dist/aos.css";
export default function ProjectContainer({ data, mode }) {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  const { ImageSource, name, githubLink, technologies } = data;
  return (
    <div data-aos="fade-down">
      <div
        className={`flex bg-black ${
          mode !== "dark" ? "projectDark" : "projectLight"
        } text-white flex-col items-center w-[200px] md:w-[350px] gap-2 rounded-md h-fit py-2 border border-white overflow-hidden`}
      >
        <h1 className="text-xl font-bold">{name}</h1>
        <img src={ImageSource} className="h-[180px]"/>
        <div className="w-full justify-between flex items-start">
          <div className="md:gap-5 gap-2 px-2 md:px-5 flex">
            <a className="w-full transition-all duration-200 h-full text-xs bg-white  hover:bg-black hover:text-white text-black border border-white  px-2 py-1 rounded-full" target="_blank" href={githubLink}>
              <button >
                Github
              </button>
            </a>
          </div>
        </div>
        <div className="w-full flex gap-x-2 px-2 md:px-5">
          {technologies.map((technology, i) => {
            return (
              <span className="text-xs px-1 py-0.5 rounded-full" key={i}>
                #{technology}
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
}
