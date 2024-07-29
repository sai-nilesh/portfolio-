import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import DensityMediumIcon from '@mui/icons-material/DensityMedium';
import CloseIcon from '@mui/icons-material/Close';
import FileDownloadIcon from '@mui/icons-material/FileDownload';

const NavSm = () => {
    const [toggle,setToggle] = useState(false);
    const handleToggle = ()=>{
        setToggle(!toggle);
}
  return (
    <div>
         <div className="max-sm:visible max-sm: lg:hidden text-white absolute  top-0 right-0 p-4 "><p className="mb-2" onClick={handleToggle} >{toggle? <CloseIcon/> :<DensityMediumIcon/>}</p>
    {toggle && <div className="grid grid-cols-1 bg-white bg-opacity-15 h-full w-full text-white  px-8 ">
      <Link
      className=" my-2  hover:opacity-90 hover:text-green-300"
      to={"/"}
    
      >
      Home
      </Link>
      <Link
      className="my-2   hover:opacity-90 hover:text-green-300"
      to={"/about"}
    
    >
      About
    </Link>
    <p className="my-2 hover:opacity-90 hover:text-green-300">
            <a href="\public\resume.pdf" download="resume.pdf">
              Resume
            <FileDownloadIcon/>
            </a>
    </p>
    
    <Link
      className="my-2  hover:opacity-90 hover:text-green-300"
      to={"/services"}
    >
      Services
    </Link>
    <Link
      className="my-2 hover:opacity-90 hover:text-green-300"
      to={"/work"}
    >
      Work
    </Link>
    <Link
      className="my-2   hover:opacity-90 hover:text-green-300"
      to={"/contact"}
    >
      Contact
    </Link></div>}</div>
    </div>
  )
}

export default NavSm;