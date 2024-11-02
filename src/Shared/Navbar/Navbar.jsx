import { useState, useEffect } from 'react';
import { NavLink } from "react-router-dom";
import { IoHomeOutline } from "react-icons/io5";
import { CiFaceMeh } from "react-icons/ci";
import { RiExportFill } from "react-icons/ri";
import { FaBlogger } from "react-icons/fa6";
import { MdContactMail } from "react-icons/md";
import { FaBars, FaTimes } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 268); // Detect screen size

  // Dynamically update screen size
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 268);
    };
    
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const handleNavClick = () => {
    if (isMobile) {
      // Close navbar only on mobile devices
      setIsOpen(false);
    }
  };

  return (
    <div className="relative z-50">
      {/* Hamburger button for small/medium devices */}
      <div className="fixed top-5 left-5 md:top-10 md:left-10 lg:hidden z-50">
        <button
          onClick={toggleNavbar}
          className="text-white text-2xl p-2 focus:outline-none"
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Navbar for all devices */}
      <div 
        className={`fixed top-1/2 transform -translate-y-1/2 w-16 md:w-48 lg:w-64 transition-all duration-500 ease-in-out bg-transparent ${
          isOpen ? "left-8" : "left-[-250px] lg:left-8"
        } md:left-8 lg:left-8`}
      >
        <ul className="space-y-6">
          <li>
            <NavLink
              to="/"
              aria-label="Home"
              onClick={handleNavClick}
              className={({ isActive }) =>
                `flex items-center justify-center w-8 h-8 md:w-8 md:h-8 lg:w-10 
              lg:h-10 p-2 md:p-3 border-2 rounded-full transition duration-300 ease-in-out ${
                  isActive ? "bg-[#FF5A3A]" : ""
                } `
              }
            >
              <IoHomeOutline className="text-[17px] text-white  md:text-[18px] font-bold lg:text-[18px]" />
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              aria-label="About"
              onClick={handleNavClick}
              className={({ isActive }) =>
                `flex items-center justify-center w-8 h-8 md:w-8 md:h-8 lg:w-10 
              lg:h-10 p-2 md:p-3 border-2 rounded-full transition duration-300 ease-in-out ${
                  isActive ? "bg-[#FF5A3A]" : ""
                }`
              }
            >
              <CiFaceMeh className="text-[17px] text-white md:text-[18px] font-bold lg:text-[18px]" />
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/portfolio"
              aria-label="Portfolio"
              onClick={handleNavClick}
              className={({ isActive }) =>
                `flex items-center justify-center w-8 h-8 md:w-8 md:h-8 lg:w-10 
              lg:h-10 p-2 md:p-3 border-2 rounded-full transition duration-300 ease-in-out ${
                  isActive ? "bg-[#FF5A3A] " : ""
                } `
              }
            >
              <MdContactMail className="text-[17px] text-white md:text-[18px] font-bold lg:text-[18px]" />
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/blog"
              aria-label="Blog"
              onClick={handleNavClick}
              className={({ isActive }) =>
                `flex items-center justify-center w-8 h-8 md:w-8 md:h-8 lg:w-10 
              lg:h-10 p-2 md:p-3 border-2 rounded-full transition duration-300 ease-in-out ${
                  isActive ? "bg-[#FF5A3A] " : ""
                }`
              }
            >
              <FaBlogger className="text-[17px] text-white md:text-[18px] font-bold lg:text-[18px]" />
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              aria-label="Contact"
              onClick={handleNavClick}
              className={({ isActive }) =>
                `flex items-center justify-center w-8 h-8 md:w-8 md:h-8 lg:w-10 
              lg:h-10 p-2 md:p-3 border-2 
              rounded-full transition duration-300 ease-in-out ${
                  isActive ? "bg-[#FF5A3A] " : ""
                }`
              }
            >
              <RiExportFill className="text-[17px] text-white md:text-[18px] font-bold lg:text-[18px]" />
            </NavLink>
          </li>
        </ul>
      </div>

      {/* Overlay for small/medium devices when navbar is open */}
      {isOpen && isMobile && (
        <div
          onClick={toggleNavbar}
          className="fixed inset-0 bg-black opacity-50 lg:hidden"
        ></div>
      )}
    </div>
  );
};

export default Navbar;
