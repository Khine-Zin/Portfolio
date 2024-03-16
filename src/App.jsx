import React from 'react';

import Nav from "./components/Nav";
import Home from './components/Home';
import About from './components/About';
import Header from './components/Header';
import Skill from './components/Skill';
import Project from './components/Project';
import Footer from './components/footer';

const App = () => {
  return (
    <div className="bg-primary scroll-smooth ">
      <Nav />
      <Header/>
      <Home/>
      <About/>
      <Skill/>
      <Project/>
      <Footer/>
  <div className='h-[200px]'></div>
    </div>
   
  )
}

export default App