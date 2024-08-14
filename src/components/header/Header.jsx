import React, { useEffect, useState } from "react";
import "./header.css";
import { HiOutlineHome } from "react-icons/hi";
import { GoPerson } from "react-icons/go";
import { FiFileText } from "react-icons/fi";
import { BsPersonWorkspace } from "react-icons/bs";
import { RiGraduationCapLine } from "react-icons/ri";
import { RiShareLine } from "react-icons/ri";
import { FaTimes } from "react-icons/fa";
import { AiOutlineAppstore } from "react-icons/ai";
import { FaMoon } from "react-icons/fa";
import { MdLightMode } from "react-icons/md";
export default function Header({ mode, handleMode }) {
  const [navActive, setNavActive] = useState(false);
  const handleNav = () => {
    let active = !navActive;
    setNavActive(active);
  };
  return (
    <header className="header dark:bg-black border-t-[0.5px] border-gray-500 rounded-t-md md:border-0 md:rounded-none duration-500 transition-all bg-white dark:text-white text-black">
      <nav className="nav container11 px-3 md:px-0  md:w-[75%] mx-auto">
        <a href="index.html" className="text-[24px] font-bold nav__logo">
          KZM
        </a>
        <div className="flex gap-x-14 items-center">
          <div
            className={`${
              navActive ? "nav__menu show-menu dark:bg-black" : "nav__menu"
            } dark:text-white duration-700  transition-all`}
          >
            <ul className="nav__list">
              <li className="nav__item">
                <a href="#home" className="nav__link">
                  <HiOutlineHome className="nav__icon" /> Home
                </a>
              </li>

              <li className="nav__item">
                <a href="#about" className="nav__link">
                  <GoPerson className="nav__icon" /> About
                </a>
              </li>
              <li className="nav__item">
                <a href="#education" className="nav__link">
                  <RiGraduationCapLine className="nav__icon" /> Education
                </a>
              </li>
              <li className="nav__item">
                <a href="#skills" className="nav__link">
                  <FiFileText className="nav__icon" /> Skills
                </a>
              </li>

              <li className="nav__item">
                <a href="#projects" className="nav__link">
                  <BsPersonWorkspace className="nav__icon" /> Projects
                </a>
              </li>

              <li className="nav__item">
                <a href="#contact" className="nav__link">
                  <RiShareLine className="nav__icon" /> Contact
                </a>
              </li>
            </ul>
            <FaTimes onClick={handleNav} className="nav__close" />
          </div>
          <div
            onClick={handleMode}
            className="cursor-pointer text-2xl font-bold theme-btn"
          >
            <MdLightMode
              className={`${mode !== "dark" ? "block" : "hidden"}`}
            />
            <FaMoon className={`${mode === "dark" ? "block" : "hidden"}`} />
          </div>
          <div
            onClick={handleNav}
            className={` nav__toggle font-bold text-[1.5rem]`}
          >
            <AiOutlineAppstore />
          </div>
        </div>
      </nav>
    </header>
  );
}
