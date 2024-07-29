import React from "react";
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import Navbar from "./Navbar";
import NavSm from "./NavSm";

const Intro = () => {
  return (
    <div className="h-screen w-screen bg-black bg-opacity-60 text-white  max-sm:py-10 max-sm:px-3 ">
      <div className="max-sm:hidden "><Navbar /></div> <NavSm/>
      <div className="lg:px-28 lg:pt-16 max-sm:py-10 ">

        <h2 className="lg:text-2xl font-bold opacity-55 font-mono max-sm:text-2xl max-sm:text-center ">MORE ABOUT ME</h2>
        <div className="lg:grid grid-cols-3 ">
          <div className="  lg:row-span-6"></div>
          <div className="lg:col-span-2 text-green-400 text-2xl font-serif lg:mr-3 lg:my-3 max-sm:text-base max-sm:text-center max-sm:py-3 ">
            <h3>Full Stack Web Developer(MERN)</h3>
          </div>
          <div className="lg:col-span-2  border-black lg:mr-3 lg:my-3  max-sm:pb-2 ">
            <p className="text-base font-mono max-sm:text-sm">
              👋 Hi there! I’m Sai Nilesh, a passionate full-stack web
              developer. My journey into the world of code began with a
              fascination for turning ideas into interactive digital
              experiences.
            </p>
          </div>
          <div className="  border-black lg:mr-3 lg:my-3 text-base font-mono max-sm:text-xs">
            <p><KeyboardArrowRightIcon/><span  className="font-semibold max-sm:font-light">Website:</span> www.nileshacharya.com</p>
          </div>
          <div className="  border-black lg:mr-3 lg:my-3 text-base font-mono max-sm:text-xs">
            <p>
              <span className="font-semibold max-sm:font-light"> <KeyboardArrowRightIcon/>Degree:</span> B.Tech
            </p>
          </div>
          <div className=" border-black lg:mr-3 lg:my-3 text-base font-mono max-sm:text-xs">
            <p>
              <span className="font-semibold max-sm:font-light"><KeyboardArrowRightIcon/>Phone:</span> (+91)8179461851
            </p>
          </div>
          <div className="  border-black lg:mr-3 lg:my-3 text-base font-mono max-sm:text-xs">
            <p>
              <span className="font-semibold max-sm:font-light"><KeyboardArrowRightIcon/>Email:</span>{" "}
              sainilesh67@gmail.com
            </p>
          </div>
          <div className="  border-black lg:mr-3 lg:my-3 text-base font-mono max-sm:text-xs">
            <p>
              <span className="font-semibold max-sm:font-light"><KeyboardArrowRightIcon/>City:</span> Hyderabad, India
            </p>
          </div>
          <div className="  border-black lg:mr-3 lg:my-3 text-base font-mono max-sm:text-xs">
            <p>
              <span className="font-semibold max-sm:font-light"><KeyboardArrowRightIcon/>Freelance:</span> Available
            </p>
          </div>
          <div className="  border-black col-span-2 lg:mr-3 lg:my-3 text-base font-mono max-sm:text-sm max-sm:py-3 ">
            <p>
              Whether it’s building robust APIs, designing pixel-perfect
              front-end interfaces, or optimizing database queries, I thrive on
              the thrill of solving complex problems.
              <br />
              But beyond the code, I’m a firm believer in continuous learning.
              The tech landscape evolves rapidly, and I’m always hungry for
              knowledge. When I’m not coding, you might find me attending
              meetups, reading tech blogs, or experimenting with a new framework
            </p>
          </div>
        </div>
       
      </div>
      
    </div>
  );
};

export default Intro;
