import React from "react";

const Skills = () => {
  return (
    <div>
      <div className="bg-black font-mono text-white lg:px-32 lg:pb-5">
        <h3 className="lg:text-xl font-thin  lg:mb-6 max-sm:text-center max-sm:mb-4 max-sm:font-semibold">Skills</h3>
        <div className="grid lg:grid-cols-3  max-sm:grid-cols-2 gap-4 max-sm:gap-2 max-sm:text-center max-sm:px-3 max-sm:font-normal">
          <div className=" border border-black-200 flex items-center lg:p-4    "><img src="/html.png" className="w-10 h-10 m-2" alt="skills"/><p className=" lg:font-bold">HTML</p></div>
          <div className=" border border-black-200  flex items-center lg:p-4   "><img src="/css.png" className="w-10 h-10 m-2"alt="skills"/><p className="  lg:font-bold">CSS</p></div>
          <div className=" border border-black-200 flex items-center lg:p-4  "><img src="/js.png" className="w-10 h-10 m-2" alt="skills"/><p className="  lg:font-bold">JavaScript</p></div>
          <div className=" border border-black-200  flex items-center lg:p-4  "><img alt="skills" src="https://external-preview.redd.it/ZTKVCne_ZlanhjrqBm4x7_-TLSAsvqukF6oAB3y8ZAI.jpg?auto=webp&s=42195773150310550d50d8e84de34f981b77f0c5" className="w-10 h-10 m-2"/><p className="  lg:font-bold">ReactJS</p></div>
          <div className=" border border-black-200  flex items-center lg:p-4  "><img alt="skills"  src="/nodejs.png" className="w-10 h-10 m-2"/><p className=" lg:font-bold">NodeJs</p></div>
          <div className=" border border-black-200  flex items-center lg:p-4  "><img alt="skills" src="https://miro.medium.com/v2/resize:fit:1400/1*i2fRBk3GsYLeUk_Rh7AzHw.png" className="w-10 h-10 m-2"/><p className="  lg:font-bold">Express Js</p></div>
          <div className=" border border-black-200  flex items-center lg:p-4  "><img alt="skills" src="/js.png" className="w-10 h-10 m-2"/><p className=" lg:font-bold">MongoDB</p></div>
          <div className=" border border-black-200  flex items-center lg:p-4  "><img alt="skills" src="/bootstrap.png" className="w-10 h-10 m-2"/><p className=" lg:font-bold">BootStrap</p></div>
          <div className=" border border-black-200  flex items-center lg:p-4  "><img alt="skills"  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNhoXisDruJMDAq3Ltd-wuaMW2lGxck9wAKw&s" className="w-10 h-10 m-2"/><p className="  lg:font-bold">Talwind</p></div>
          <div className=" border border-black-200  flex items-center lg:p-4  "><img alt="skills" src="/mysql.png" className="w-10 h-10 m-2"/><p className=" lg:font-bold">MYSQL</p></div>
          <div className=" border border-black-200  flex items-center lg:p-4  "><img alt="skills" src="https://miro.medium.com/v2/resize:fit:1400/1*mtsk3fQ_BRemFidhkel3dA.png" className="w-10 h-10 m-2"/><p className="  lg:font-bold">Git & GitHub</p></div>
          <div className=" border border-black-200  flex items-center lg:p-4  "><img alt="skills" src="/java.png" className="w-10 h-10 m-2"/><p className="  lg:font-bold">Java</p></div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
