import React from "react";
import Intro from "./Intro";
import Skills from "./Skills";



const About = () => {
  return (
    <div className=" lg:bg-cover lg:bg-no-repeat h-screen w-screen  " style={{ backgroundImage: "url('/image.png')" }}> 
      <Intro/>
      <Skills/>
    </div>
  );
};

export default About;
