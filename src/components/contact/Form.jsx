import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import { FaTelegramPlane } from "react-icons/fa";
export default function Form() {
  
  return (
    <form className="flex flex-col w-[75%] gap-4" >
      <div className="flex flex-col">
        <label className="text-xl font-bold" htmlFor="email">Email Address</label>
        <input className="px-2 py-2 rounded-md full dark:text-white  dark:bg-black bg-white text-black border dark:border-white border-black outline-none" required id="email" type="email" name="email" placeholder="Email" />
        
      </div>
      <div className="flex flex-col">
        <label className="text-xl font-bold" htmlFor="name" >Name</label>
        <input placeholder="Name" className="px-2 py-2 rounded-md full dark:text-white  dark:bg-black bg-white text-black border dark:border-white border-black outline-none" id="name" type="text" />
      </div>
      <div className="flex flex-col">
        <label className="text-xl font-bold" htmlFor="messae">Message</label>
        <textarea rows={8} placeholder="Message" className="px-2 py-2 rounded-md full dark:text-white  dark:bg-black bg-white text-black border dark:border-white border-black outline-none" id="message" name="message" />
       
      </div>
      <button className="hover:bg-[#2d4481] group w-fit bg-[#4070f4] flex items-center gap-3 transition-all duration-200 text-white md:text-xl font-bold md:px-4 md:py-2 px-2 py-1 rounded-md" >
        Submit <FaTelegramPlane />
      </button>
    </form>
  );
}
