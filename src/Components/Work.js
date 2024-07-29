import React from 'react'
import Navbar from './Navbar'
import { Link } from 'react-router-dom'
import NavSm from './NavSm'

const Work = () => {
  return (
    <div className='max-sm:h-full max-sm:w-full'>
       <div className="max-sm:hidden  "><Navbar /></div> <NavSm/>
        <div className=' max-sm:pt-10 max-sm:px-1 '>
        <p className='lg:text-3xl lg:font-semibold lg:mx-32 max-sm:text-lg max-sm:font-semibold max-sm:py-5 '>Work</p>
          <div className='lg:mx-32 lg:my-12 grid lg:grid-cols-2 max-sm:grid-cols-1 lg:gap-4 max-sm:gap-4 font-mono bg-black bg-opacity-50 max-sm:px-1 max-sm:h-screen max-sm:w-screen'>
          
           <div className='group  border rounded-lg hover:bg-green-500 lg:p-10 max-sm:py-4  max-sm:px-1 '>
           <h3 className='font-semibold lg:text-2xl text-green-400 lg:mb-3 group-hover:text-white max-sm:font-bold max-sm:pb-2'>Food Ordering App</h3>
            <p className='text-sm lg:mb-2'><span className='lg:font-semibold lg:text-base '>Tech Stack:</span>HTML,Tailwind CSS,JS,React Js,Redux,Google FireBase </p>
            <p className='text-sm lg:mb-1'>Live Link: <Link></Link> </p>
            <p className='text-sm'>GitHub Link: <Link></Link></p>
           </div>
           <div className='group border rounded-lg hover:bg-green-500  lg:p-10  max-sm:py-4  max-sm:px-1 '>
           <h3  className='font-semibold lg:text-2xl text-green-400  lg:mb-3 group-hover:text-white max-sm:font-bold '>Ecommerce</h3>
            <p className='text-sm lg:mb-2'><span className='lg:font-semibold lg:text-base max-sm:font-semibold'>Tech Stack:</span> HTML,CSS,BootStrap,JS,NodeJS,ExpressJs,MongoDb</p>
            <p className='text-sm lg:mb-1'>Live Link: <Link></Link> </p>
            <p className='text-sm'>GitHub Link: <Link></Link></p>
           </div>
           <div className='group border  rounded-lg hover:bg-green-500  lg:p-10  max-sm:py-4   max-sm:px-1 '>
           <h3  className='font-semibold lg:text-2xl text-green-400  lg:mb-3 group-hover:text-white max-sm:font-bold '>OTT App</h3>
            <p className='text-sm lg:mb-2'><span className='lg:font-semibold lg:text-base max-sm:font-semibold'>Tech Stack:</span>HTML,CSS,JS,React Js,Redux ,Google FireBase</p>
            <p className='text-sm lg:mb-1'>Live Link: <Link></Link> </p>
            <p className='text-sm'>GitHub Link: <Link></Link></p>
           </div>
           <div className=' group border  rounded-lg hover:bg-green-500  lg:p-10  max-sm:py-4 max-sm:px-1  '>
           <h3  className='font-semibold lg:text-2xl text-green-400  lg:mb-3 group-hover:text-white max-sm:font-bold'>You Tube Clone</h3>
            <p className='text-sm lg:mb-2'><span className='lg:font-semibold lg:text-base max-sm:font-semibold'>Tech Stack:</span>HTML,CSS,JS,React Js,Redux ,Google FireBase</p>
            <p className='text-sm lg:mb-1'>Live Link: <Link></Link> </p>
            <p className='text-sm'>GitHub Link: <Link></Link></p>
           </div>
          </div>
        </div>
    </div>
  )
}

export default Work