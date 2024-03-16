import React from 'react';
import Image1 from "../assets/project1.png";
import Image2 from "../assets/project2.png";
import Image3 from "../assets/project3.jpg";
import Image4 from "../assets/project4.webp";
import Image5 from "../assets/project5.jpg";
import {motion} from "framer-motion";
import { fadeIn } from '../variants';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Project = () => {
    const responsive = {
        superLargeDesktop: {
       
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
      
  return (
    <section className='section ' id="project">
        <div className='container mx-auto lg:mt-0 mt-20'>
        <motion.div variants={fadeIn("down",0.1)} initial="hidden" whileInView={"show"} viewport={{once:false ,amount:0.7}} className="text-[43px] font-bold font-secondary flex justify-center mb-10"  >
       
        <span className='text-accent'>PROJECTS</span>
       </motion.div>
      
      <Carousel 
 
  // showDots={true}
  responsive={responsive}

  infinite={true}
  autoPlay={true}
  autoPlaySpeed={2000}
 

  transitionDuration={1000}
  
    >
        <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl mr-10'>
            <div className='group-hover:bg-black/50 w-full h-full absolute z-40 transition-all duration-300'></div>
            <img className='group-hover:scale-150 transition-all duration-500 h-[200px] w-full' src={Image1}/>
            <div className='text-white text-2xl absolute -bottom-full font-bold  group-hover:bottom-20 group-hover:left-5 transition-all duration-500 z-50'>MANAGE COURSES</div>
            <p className='text-accent text-2xl p-2 font-bold '>MANAGE COURSES</p>
            <p className='text-white text-xl px-2  font-semibold pb-4 '>Javascript , tailwind ,API</p>
            
            
        </div>
        <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl mr-10'>
            <div className='group-hover:bg-black/50 w-full h-full absolute z-40 transition-all duration-300'></div>
            <img className='group-hover:scale-150 transition-all duration-500 h-[200px] w-full' src={Image2}/>
            <div className='text-white text-2xl absolute -bottom-full font-bold  group-hover:bottom-20 group-hover:left-5 transition-all duration-500 z-50'>CART MANAGEMENT</div>
            <p className='text-accent text-2xl p-2 font-bold '>CART MANAGEMENT</p>
            <p className='text-white text-xl px-2  font-semibold pb-4 '>javascript , tailwind ,fakestore api</p>
            
            
        </div>
        <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl mr-10'>
            <div className='group-hover:bg-black/50 w-full h-full absolute z-40 transition-all duration-300'></div>
            <img className='group-hover:scale-150 transition-all duration-500 h-[175px] w-full' src={Image3}/>
            <div className='text-white text-2xl absolute -bottom-full font-bold  group-hover:bottom-20 group-hover:left-5 transition-all duration-500 z-50'>X-MARK ESTATE</div>
            <p className='text-accent text-2xl p-2 font-bold '>MERN ESTATE</p>
            <p className='text-white text-xl px-2  font-semibold pb-4 '>React , tailwind , node ,express,mongodb </p>
            
            
        </div>
        <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl mr-10'>
            <div className='group-hover:bg-black/50 w-full h-full absolute z-40 transition-all duration-300'></div>
            <img className='group-hover:scale-150 transition-all duration-500 h-[200px] w-full ' src={Image4}/>
            <div className='text-white text-2xl absolute -bottom-full font-bold  group-hover:bottom-20 group-hover:left-5 transition-all duration-500 z-50'>API</div>
            <p className='text-accent text-2xl p-2 font-bold '>API</p>
            <p className='text-white text-xl px-2  font-semibold pb-4 '>node ,express ,mongodb</p>
            
            
        </div>
        <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl mr-10'>
            <div className='group-hover:bg-black/50 w-full h-full absolute z-40 transition-all duration-300'></div>
            <img className='group-hover:scale-150 transition-all duration-500 h-[200px] w-full' src={Image5}/>
            <div className='text-white text-2xl absolute -bottom-full font-bold  group-hover:bottom-20 group-hover:left-5 transition-all duration-500 z-50'>BG REMOVER</div>
            <p className='text-accent text-2xl p-2 font-bold '>BG REMOVER</p>
            <p className='text-white text-xl px-2  font-semibold pb-4 '>React , tailwind</p>
            
            
        </div>
       
       
      </Carousel>
        </div>
    </section>
  )
}
  

export default Project