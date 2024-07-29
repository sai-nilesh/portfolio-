// import React, { useState } from 'react'
import { Link } from "react-router-dom";
import XIcon from "@mui/icons-material/X";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import NavSm from "./NavSm";
import FileDownloadIcon from '@mui/icons-material/FileDownload';

const Home = () => {
 
  return (
    <div
      className="lg:text-white lg:bg-cover lg:bg-no-repeat h-screen w-screen max-sm:items-center max-sm:py-[45%] max-sm: relative "
      style={{ backgroundImage: "url('/image.png')" }}
    > <NavSm/>
    
      <div className="lg:pt-[15%] lg:mx-32 max-sm:text-center  max-sm:mx-auto max-sm:pb-12">
        
        <h3 className="lg:text-5xl font-mono lg:mb-4 max-sm:pb-0 max-sm:font-semibold ">Sai Nilesh</h3>
        <p className="lg:mb-5 lg:text-2xl opacity-85 font-mono max-sm:py-2 ">
          I'm a passionate <span className="text-green-300"> Full Stack <span className="max-sm:block">Web Developer</span></span>
        </p>
      </div>
      <div className="max-sm:hidden text-base mb-5  mx-32 font-mono">
        <Link
          className="mr-7  opacity-65 hover:opacity-90 hover:text-green-300"
          to={"/about"}
        
        >
          About
        </Link>
         <a className="mr-7  opacity-65 hover:opacity-90 hover:text-green-300" href="\public\resume.pdf" download="resume.pdf">
              Resume
            <FileDownloadIcon/>
            </a>
          
       
        <Link
          className="mr-7 opacity-65 hover:opacity-90 hover:text-green-300"
          to={"/services"}
        >
          Services
        </Link>
        <Link
          className="mr-7 opacity-65 hover:opacity-90 hover:text-green-300"
          to={"/work"}
        >
          Work
        </Link>
        <Link
          className="mr-7 opacity-65  hover:opacity-90 hover:text-green-300"
          to={"/contact"}
        >
          Contact
        </Link>
      </div>
      <div className="lg:mt-4 lg:mx-32 max-sm:text-center ">
        <Link className="lg:mr-5 max-sm:mr-2 bg-white  bg-opacity-15 p-2  rounded-full hover:bg-green-400 hover:bg-opacity-85" to={"https://x.com/sainilesh76"}>
          <XIcon fontSize="xl" />
        </Link>
        <Link className="lg:mr-5 max-sm:mr-2 bg-white  bg-opacity-15 p-2 rounded-full hover:bg-green-400 hover:bg-opacity-85" to={"https://www.instagram.com/ezisinppet/"}>
          <InstagramIcon fontSize="xl" />
        </Link>
        <Link className="lg:mr-5 max-sm:mr-2 bg-white  bg-opacity-15 p-2 rounded-full hover:bg-green-400 hover:bg-opacity-85" to={"https://github.com/sai-nilesh"}>
          <GitHubIcon fontSize="xl" />
        </Link>
        <Link className="lg:mr-5 max-sm:mr-2  bg-white  bg-opacity-15 p-2 rounded-full hover:bg-green-400 hover:bg-opacity-85" to={"https://www.linkedin.com/in/sai-nilesh/"}>
          <LinkedInIcon fontSize="xl" />{" "}
        </Link>
      </div>
    </div>
  );
};

export default Home;
