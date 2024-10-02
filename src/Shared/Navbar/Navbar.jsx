import { NavLink, Link } from "react-router-dom";
import { IoHomeOutline } from "react-icons/io5";
import { CiFaceMeh } from "react-icons/ci";
import { RiExportFill } from "react-icons/ri";
import { FaBlogger } from "react-icons/fa6";
import { MdContactMail } from "react-icons/md";

const Navbar = () => {
  return (
    <div className="fixed left-8 top-1/2 transform -translate-y-1/2 w-16 md:w-48">
      <ul className="space-y-6">
        <li>
          <NavLink
            to="/"
            aria-label="Home"
            className={({ isActive }) =>
              `flex items-center justify-center w-12 h-12 md:w-14 md:h-14 p-2 md:p-3 border-2 rounded-full transition duration-300 ease-in-out ${
                isActive ? "bg-green-500 border-green-500 text-white" : "bg-transparent border-green-800 text-white"
              } hover:bg-green-600`
            }
          >
            <IoHomeOutline className="text-[17px] md:text-2xl" />
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            aria-label="About"
            className={({ isActive }) =>
              `flex items-center justify-center w-12 h-12 md:w-14 md:h-14 p-2 md:p-3 border-2 rounded-full transition duration-300 ease-in-out ${
                isActive ? "bg-green-500 border-green-500 text-white" : "bg-transparent border-green-800 text-white"
              } hover:bg-green-600`
            }
          >
            <CiFaceMeh className="text-[17px] md:text-2xl" />
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            aria-label="Contact"
            className={({ isActive }) =>
              `flex items-center justify-center w-12 h-12 md:w-14 md:h-14 p-2 md:p-3 border-2 rounded-full transition duration-300 ease-in-out ${
                isActive ? "bg-green-500 border-green-500 text-white" : "bg-transparent border-green-800 text-white"
              } hover:bg-green-600`
            }
          >
            <MdContactMail className="text-[17px] md:text-2xl" />
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/blog"
            aria-label="Blog"
            className={({ isActive }) =>
              `flex items-center justify-center w-12 h-12 md:w-14 md:h-14 p-2 md:p-3 border-2 rounded-full transition duration-300 ease-in-out ${
                isActive ? "bg-green-500 border-green-500 text-white" : "bg-transparent border-green-800 text-white"
              } hover:bg-green-600`
            }
          >
            <FaBlogger className="text-[17px] md:text-2xl" />
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/export"
            aria-label="Export"
            className={({ isActive }) =>
              `flex items-center justify-center w-12 h-12 md:w-14 md:h-14 p-2 md:p-3 border-2 rounded-full transition duration-300 ease-in-out ${
                isActive ? "bg-green-500 border-green-500 text-white" : "bg-transparent border-green-800 text-white"
              } hover:bg-green-600`
            }
          >
            <RiExportFill className="text-[17px] md:text-2xl" />
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
