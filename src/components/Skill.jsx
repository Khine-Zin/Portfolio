import React from 'react';
import {motion} from "framer-motion";
import { fadeIn } from '../variants';
import ProgressBar from 'react-animated-progress-bar';

const Skill = () => {
  return (
    <section className='section' id="skill">
        <div className='container mx-auto mt-20 lg:mt-6'>
        <motion.div variants={fadeIn("down",0.1)} initial="hidden" whileInView={"show"} viewport={{once:false ,amount:0.7}}  className='text-[43px] font-bold font-secondary flex justify-center lg:mb-10'>
        <span className='text-accent mr-3'>MY</span>
        <span className='text-white'>SKILL</span>
       </motion.div>
          <div className='flex flex-col lg:flex-row items-center justify-center gap-x-10 lg:gap-x-20'>
          <div>
          <p className='text-white text-center text-xl mb-3'>FRONTED SKILLS</p>
       <p className='text-white'>HTML</p>
           <ProgressBar
        width="360px"
        height="10px"
        rect
        fontColor="gray"
        percentage="90"
        rectPadding="1px"
        rectBorderRadius="20px"
        trackPathColor="transparent"
        bgColor="#333333"
        trackBorderColor="grey"
      />
      <p className='text-white'>CSS</p>
           <ProgressBar
        width="360px"
        height="10px"
        rect
        fontColor="gray"
        percentage="80"
        rectPadding="1px"
        rectBorderRadius="20px"
        trackPathColor="transparent"
        bgColor="#333333"
        trackBorderColor="grey"
      />
      <p className='text-white'>JAVASCRIPT</p>
           <ProgressBar
        width="360px"
        height="10px"
        rect
        fontColor="gray"
        percentage="65"
        rectPadding="1px"
        rectBorderRadius="20px"
        trackPathColor="transparent"
        bgColor="#333333"
        trackBorderColor="grey"
      />
      <p className='text-white'>REACT</p>
           <ProgressBar
        width="360px"
        height="10px"
        rect
        fontColor="gray"
        percentage="60"
        rectPadding="1px"
        rectBorderRadius="20px"
        trackPathColor="transparent"
        bgColor="#333333"
        trackBorderColor="grey"
      />
      
        </div>
       <div className=''>
       <p className='text-white text-center text-xl mb-8'>BACKENED SKILLS</p>
        <div className='flex lg:gap-x-10 gap-x-5'>
       
        <div>
        <div className=''>
        <ProgressBar width="230" trackWidth="13" percentage="60"  fontColor="gray" />
        <p className='text-white text-center'>NODE JS</p>
       </div>
       <div className=''>
        <ProgressBar width="230" trackWidth="13" percentage="50"  fontColor="gray" />
        <p className='text-white text-center'>PHP</p>
       </div>
       <div className=''>
        <ProgressBar width="230" trackWidth="13" percentage="60"  fontColor="gray" />
        <p className='text-white text-center'>LARAVEL</p>
       </div> 
        </div>
        <div>
       <div className=''>
        <ProgressBar width="230" trackWidth="13" percentage="40"  fontColor="gray" />
        <p className='text-white text-center'>MYSQL</p>
       </div>
       <div className=''>
        <ProgressBar width="230" trackWidth="13" percentage="70"  fontColor="gray" />
        <p className='text-white text-center'>MONGO BD</p>
       </div>
       </div>
       </div>
    </div>
       
          </div>
        </div>
     </section>
  )
}

export default Skill