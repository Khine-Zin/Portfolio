import React from 'react';
import Image from "../assets/about.png";
import {motion} from "framer-motion";
import { fadeIn } from '../variants';
import file from "../assets/Resume.pdf"

const About = () => {
  
  return (
    <section className='section' id="about">
   < div  className='container mx-auto lg:mt-2 mt-20'>
       <motion.div variants={fadeIn("down",0.3)} initial="hidden" whileInView={"show"} viewport={{once:false ,amount:0.7}}  className='text-[43px] font-bold font-secondary flex justify-center '>
        <span className='text-white mr-3'>ABOUT</span>
        <span className='text-accent'> ME</span>
       </motion.div>
       <motion.p variants={fadeIn("up",0.3)} initial="hidden" whileInView={"show"} viewport={{once:false ,amount:0.7}}  className='text-accent lg:mb-10 text-center font-secondary font-bold text-2xl'>Junior MERN Stack Dveloper</motion.p>
       <div className='flex flex-col gap-y-8 lg:flex-row lg:items-center lg:justify-center lg:gap-x-20'>
       <motion.div variants={fadeIn("right",0.3)} initial="hidden" whileInView={"show"} viewport={{once:false ,amount:0.7}} className='flex justify-center items-center'>
        <img className='w-[300px] lg:w-[320px] ' src={Image} />
        </motion.div>
     
       <motion.div  variants={fadeIn("up",0.3)} initial="hidden" whileInView={"show"} viewport={{once:false ,amount:0.7}} className=''>
        
         <pre className='text-lg text-white mb-4'>
          Name         : Khine Zin Myint<br/>
          Birthday     : 19.5.2000<br/>
          Nationality	 : Myanmar <br/>
          Education    : Computer University<br/>
          Availability : Immediately<br/>
          Position     : MERN Stack Developer
          </pre>
          <motion.a href={file} download={file} variants={fadeIn("up",0.3)} initial="hidden" whileInView={"show"} viewport={{once:false ,amount:0.7}} className='btn px-3 py-1 text-white text-lg font-secondary  rounded-full lg:my-5 my-3' >Download CV</motion.a>
       </motion.div>
      </div>
      </div>
    </section>
  )
}

export default About