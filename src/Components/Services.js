import React from "react";
import Navbar from "./Navbar";
import NavSm from "./NavSm";

const Services = () => {
  return (
    <div className="max-sm:h-full ">
      <div className="max-sm:hidden  "><Navbar /></div> <NavSm/>
      <div className="lg:px-32  max-sm:px-3 max-sm:pt-8 max-sm:h-full">
        <h3 className="lg:text-xl font-sans  lg:mb-6 font-bold max-sm:pb-6  max-sm:text-lg max-sm:text-center">Services</h3>
        <div className="grid lg:grid-cols-3 max-sm:grid-cols-1 lg:gap-4 max-sm:gap-2 font-mono max-sm:h-full ">
          <div className=" border rounded-md lg:p-10 hover:bg-green-500  max-sm:p-4 ">
            {/* <img src="/MERNSTACK.jpeg" className="w-6"/> */}
            <h3 className="lg:font-bold max-sm:font-semibold">Full-Stack Web Development</h3>
            <p className="lg:text-sm max-sm:font-light">We build top-to-bottom solutions front-end and back-end magic combined</p>
          </div>
          <div className=" border rounded-md lg:p-10 hover:bg-green-500 max-sm:p-4 ">
            <h3 className="lg:font-bold max-sm:font-semibold">End-to-End Web Solutions</h3>
            <p className="lg:text-sm max-sm:font-light">From concept to launch, we tie up all loose ends. Seamless, start to finish.</p>
          </div>
          <div className=" border rounded-md lg:p-10 hover:bg-green-500 max-sm:p-4 ">
            <h3 className="lg:font-bold max-sm:font-semibold">Custom Web Applications</h3>
            <p className="lg:text-sm max-sm:font-light">Bespoke, not off-the-shelf. Your vision, our code.</p>
          </div>
          <div className=" border rounded-md lg:p-10 hover:bg-green-500 max-sm:p-4 ">
            <h3 className="lg:font-bold max-sm:font-semibold">Responsive Web Design</h3>
            <p className="lg:text-sm max-sm:font-light">Stunning on any device. Beauty meets functionality.</p>
          </div>
          <div className=" border rounded-md lg:p-10 hover:bg-green-500 max-sm:p-4 ">
            <h3 className="lg:font-bold max-sm:font-semibold">Database Development and Integration</h3>
            <p className="lg:text-sm max-sm:font-light">Data flow, optimized. Like a well-rehearsed orchestra</p>
          </div>
          <div className=" border rounded-md lg:p-10 hover:bg-green-500 max-sm:p-4 ">
            <h3 className="lg:font-bold max-sm:font-semibold">API Development and Integration</h3>
            <p className="lg:text-sm max-sm:font-light">APIs whispering secrets between systems. Effective communication</p>
          </div>
          <div className=" border rounded-md lg:p-10 hover:bg-green-500 max-sm:p-4 ">
            <h3 className="lg:font-bold max-sm:font-semibold">Performance Optimization</h3>
            <p className="lg:text-sm max-sm:font-light">Faster clicks, happier faces. We fine-tune for speed.</p>
          </div>
          <div className=" border rounded-md  lg:p-10 hover:bg-green-500 max-sm:p-4 ">
            <h3 className="lg:font-bold max-sm:font-semibold">Security-First Web Solutions</h3>
            <p className="lg:text-sm max-sm:font-light">Robust foundations. Data protection, always</p>
          </div>
          <div className=" border  rounded-md  lg:p-10 hover:bg-green-500 max-sm:p-4 ">
            <h3 className="lg:font-bold max-sm:font-semibold">Front-End Magic, Back-End Wizardry</h3>
            <p className="lg:text-sm max-sm:font-light">Captivating interfaces meet server-side sorcery.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
