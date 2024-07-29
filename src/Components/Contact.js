import React from "react";
import { Link } from "react-router-dom";
import XIcon from "@mui/icons-material/X";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Navbar from "./Navbar";
import NavSm from "./NavSm";

const Contact = () => {
  return (
    <div className="lg:mx-32 max-sm:h-full h-screen max-sm:w-screen bg-black bg-opacity-55  font-mono max-sm:px-1">
      <div className="max-sm:hidden  "><Navbar /></div> <NavSm/>
      <h3 className="lg:mb-3 max-sm:pt-14 max-sm:pb-7  max-sm:font-bold" >CONTACT ME</h3>
      <div className="grid lg:grid-cols-2 gap-4 ">
        <div className=" border max-sm:px-4 max-sm:py-5 rounded-md col-span-1 lg:p-5">
          <h3>My Address</h3>
          <p>Hyderabad, India, 500100</p>
        </div>
        <div className=" border max-sm:px-4 max-sm:py-5 rounded-md col-span-1  lg:p-5">
          <h3>Social Profiles</h3>
          <div className="lg:mt-4 ">
        <Link className="lg:mr-5 bg-white  bg-opacity-15 lg:p-2 rounded-full hover:bg-green-400 hover:bg-opacity-85" to={"https://x.com/sainilesh76"}>
          <XIcon fontSize="xl" />
        </Link>
        <Link className="lg:mr-5  bg-white  bg-opacity-15 lg:p-2 rounded-full hover:bg-green-400 hover:bg-opacity-85" to={"https://www.instagram.com/ezisinppet/"}>
          <InstagramIcon fontSize="xl" />
        </Link>
        <Link className="lg:mr-5  bg-white  bg-opacity-15 lg:p-2 rounded-full hover:bg-green-400 hover:bg-opacity-85" to={"https://github.com/sai-nilesh"}>
          <GitHubIcon fontSize="xl" />
        </Link>
        <Link className="lg:mr-5  bg-white  bg-opacity-15 lg:p-2 rounded-full hover:bg-green-400 hover:bg-opacity-85" to={"https://www.linkedin.com/in/sai-nilesh/"}>
          <LinkedInIcon fontSize="xl" />{" "}
        </Link>
      </div>
        </div>
        <div className=" border rounded-md col-span-1  lg:p-5 max-sm:px-4 max-sm:py-5">
          <Link to="mailto:sainilesh67@gmail.com">Email Me</Link> <br />
          <Link to="mailto:sainilesh67@gmail.com">sainilesh67@gmail.com</Link>
        </div>
        <div className="border rounded-md col-span-1 lg:p-5 max-sm:px-4 max-sm:py-5">
          <Link to="tel:+918179461851">Call Me</Link> <br />
          <Link to="tel:+918179461851">(+91)8179461851</Link>
        </div>
      </div>
      <div className=" lg:mt-7  ">
        <form className="  " action="https://api.web3forms.com/submit" method="POST">
          <div className="grid lg:grid-cols-2  max-sm:grid-cols-1 gap-4 max-sm:pt-4  max-sm:pb-8">
            <input
              type="hidden"
              name="access_key"
              value="8705b7c6-08c8-4b20-a77b-a20f74856b8d"
              className=""
            />

            <div className=" ">
              <input
                type="text"
                name="name"
                required
                placeholder=" Your name"
                className="  w-full lg:p-4 bg-white max-sm:py-3  bg-opacity-10  "
              />
            </div>
            <div className="">
              {" "}
              <input
                type="email"
                name="email"
                required
                placeholder="Your Email"
                className="  max-sm:py-3  w-full lg:p-4 bg-white  bg-opacity-10 "
              />
            </div>
            <div className="lg:col-span-2">
              {" "}
              <input
                type="text"
                name="subject"
                required
                placeholder="subject"
                className=" max-sm:py-3  w-full lg:p-4 bg-white  bg-opacity-10  "
              />
            </div>
            <div className="lg:col-span-2  rounded-md ">
              {" "}
              <textarea
                name="message"
                required
                placeholder="Message"
                className=" max-sm:py-3   w-full lg:p-4 bg-white  bg-opacity-10  "
              ></textarea>
            </div>
            <input
              type="hidden"
              name="redirect"
              value="https://web3forms.com/success"
            />
            <div className="ml-1">
              {" "}
              <button type="submit" className=" max-sm:py-2  max-sm:p  bg-green-500 lg:px-4 lg:py-2 rounded-sm">
                Send Message
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
