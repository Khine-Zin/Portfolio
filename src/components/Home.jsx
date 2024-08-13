import React from 'react';
import Image from "../assets/Home.png"
import {FaGithub , FaFacebook , FaLinkedin} from "react-icons/fa";
import {TypeAnimation} from "react-type-animation";
import {motion} from "framer-motion";
import { fadeIn } from '../variants';
import { Link } from 'react-scroll';


const Home = () => {
  return (
    <section className='min-h-[85vh] lg:min-h-[78vh] flex items-center mb-20' id="home">
     <div className='container mx-auto '>
      <div className='flex flex-col gap-y-8 lg:flex-row lg:items-center lg:justify-center lg:gap-x-12'>
      <motion.div variants={fadeIn("down",0.3)} initial="hidden" whileInView={"show"} viewport={{once:false ,amount:0.7}} className='lg:hidden flex justify-center items-center mt-4'>
    <img className='w-[300px] lg:w-[350px]' src={Image} />
    </motion.div>
      <div className='lg:w-[600px] w-full'>
        <motion.div variants={fadeIn("right",0.3)} initial="hidden" whileInView={"show"} viewport={{once:false ,amount:0.7}} >
        <p className='text-accent font-bold'> Welcome To</p>
          <p className='lg:text-xl text-lg font-bold text-white'>My Portfolio Website</p>
        </motion.div>
   <motion.div variants={fadeIn("right",0.8)} initial="hidden" whileInView={"show"} viewport={{once:false ,amount:0.7}} className=' text-[37px] lg:text-[55px] font-secondary font-bold '>
       <span className='text-white '>I AM </span>
        <TypeAnimation sequence={["Khine Zin Myint",2000," Khine Zin Myint",2000]} speed={50} className='text-accent' wrapper='span' repeat={Infinity} />
       </motion.div>     
       <motion.div variants={fadeIn("up",0.3)} initial="hidden" whileInView={"show"} viewport={{once:false ,amount:0.7}}>
       <span className='text-white font-secondary text-xl '>I am junior developer specialized in Web Development. </span>
      <br></br>
     <div className='flex my-5  items-center'>
      
     <Link to="about">
       <button  className='btn px-3 py-1 text-white lg:text-2xl text-lg font-secondary  rounded-full mr-10'>ABOUT ME</button>
       
       </Link>
       <div className='flex text-white text-[20px] gap-x-10 max-w-max mx-auto lg:mx-0 '>
          <a href='https://github.com/Khine-Zin'><FaGithub/></a>
          <a href='https://www.facebook.com/profilr.php?id=100013163058913'><FaFacebook/></a>
          <a href='https://www.linkedin.com/in/khine-zin-myint-a8aa84269?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'><FaLinkedin/></a>
       </div>
     </div>
       </motion.div >
      
      </div>
    
    <motion.div variants={fadeIn("down",0.3)} initial="hidden" whileInView={"show"} viewport={{once:false ,amount:0.7}} className='hidden lg:flex'>
    <img className='w-[300px] ' src={Image} />
    </motion.div>
    </div>
     </div>
      </section>
  )
}

export default Home