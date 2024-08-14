import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Skills from "./components/skills/Skills";
import Project from "./components/project/Project";
import Education from "./components/education/Education";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
function App() {
  const [mode, setMode] = useState("light");
  useEffect(() => {
    if (mode === "dark") {
      document.documentElement.classList.remove("dark");
    } else {
      document.documentElement.classList.add("dark");
    }
  }, [mode]);
  const handleMode = () => {
    if (mode === "dark") {
      setMode("light");
    } else {
      setMode("dark");
    }
  };

  return (
    <div className="dark:bg-black dark:text-white duration-500 transition-all prevent-select overflow-hidden">
      <Header handleMode={handleMode} mode={mode} />
      <div className="">
        <Home />
      </div>
      <div>
        <About />
      </div>
      <Education />
      <Skills mode={mode} />
      <Project mode={mode} />
      <Contact />
      <Footer/>
      <div className="mb-[50px] md:mb-0"></div>
    </div>
  );
}

export default App;
