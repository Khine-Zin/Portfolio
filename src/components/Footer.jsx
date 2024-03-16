import React from 'react';
import {motion} from "framer-motion";
import { fadeIn } from '../variants';

const Footer = () => {
  return (
    <section className='section' id="footer">
        <div className='container mx-auto lg:mt-4 mt-20'>
            <div className='flex flex-col lg:flex-row lg:mx-40 justify-center items-center'>
            <div className='flex-1'>
               <div>
               <motion.h4 variants={fadeIn("down",0.3)} initial="hidden" whileInView={"show"} viewport={{once:false ,amount:0.7}} className='text-lg text-accent uppercase font-medium mb-2 tracking-wide'>Get in touch</motion.h4>
                <motion.h2 variants={fadeIn("UP",0.3)} initial="hidden" whileInView={"show"} viewport={{once:false ,amount:0.7}} className='text-white text-[30px] lg:text-[50px] leading-none mb-12'>
                    Let's work <br/> together !
                </motion.h2>
               </div>
            </div>
        <motion.form variants={fadeIn("down",0.3)} initial="hidden" whileInView={"show"} viewport={{once:false ,amount:0.7}} className='flex-1 border rounded-2xl flex flex-col gap-y-4 w-full  p-6 items-start'>
        <input className='bg-transparent text-sm text-white border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all' type='text' placeholder='Your Name'/>
            <input className='bg-transparent text-sm text-white border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all' type='text' placeholder='Your Email'/>
            <textarea className='text-white text-sm bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all resize-none ' placeholder='Your Message'>
            </textarea>
            <motion.button variants={fadeIn("up",0.7)} initial="hidden" whileInView={"show"} viewport={{once:false ,amount:0.7}} className='btn px-3 py-1 text-white text-lg lg:text-xl font-secondary  rounded-full lg:my-5'>Send Message</motion.button>
        </motion.form>
            </div>

        </div>
    </section>
  )
}

export default Footer