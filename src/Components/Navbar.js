import { NavLink } from "react-router-dom";
import FileDownloadIcon from '@mui/icons-material/FileDownload';

const Navbar = () => {
  const activeLink = "text-green-300 font-semibold";

  return (
    <div>
      <div className="grid grid-cols-2 font-mono pt-4">
        <div className=" px-15"> </div>
        <div className=" px-15 flex my-3">
          <p className="mx-5 hover:text-green-300">
            <NavLink
              className={({ isActive }) => (isActive ? activeLink : "")}
              to={"/"}
            > 
              Home
            </NavLink>
          </p>
          <p className="mx-5 hover:text-green-300">
            <NavLink
              className={({ isActive }) => (isActive ? activeLink : "")}
              to={"/about"}
            >
              About
            </NavLink>
          </p>
          <p className="mx-5 hover:text-green-300">
            <a href="\public\resume.pdf" download="resume.pdf">
              Resume
            <FileDownloadIcon/>
            </a>
          </p>

          <p className="mx-5 hover:text-green-300">
            <NavLink
              className={({ isActive }) => (isActive ? activeLink : "")}
              to={"/services"}
            >
              Services
            </NavLink>
          </p>
          <p className="mx-5 hover:text-green-300">
            <NavLink
              className={({ isActive }) => (isActive ? activeLink : "")}
              to={"/work"}
            >
              Work
            </NavLink>
          </p>
          <p className="mx-5 hover:text-green-300">
            <NavLink
              className={({ isActive }) => (isActive ? activeLink : "")}
              to={"/contact"}
            >
              Contact
            </NavLink>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
