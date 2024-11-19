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
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768); // Adjusted for medium and smaller devices

  // Dynamically update screen size
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
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
      setIsOpen(false); // Close navbar on mobile
    }
  };

  return (
    <div className="relative z-50">
      {/* Hamburger button for small/medium devices */}
      <div className="fixed top-5 left-1 md:top-10 md:left-10 lg:hidden z-50">
        <button
          onClick={toggleNavbar}
          className="text-white text-2xl p-2 focus:outline-none"
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Navbar for all devices */}
      <div
        className={`fixed transform transition-all duration-500 ease-in-out bg-transparent 
          ${isOpen ? "left-8" : "left-[-250px] lg:left-8"}
          top-[35%] md:top-[30%] lg:top-[40%] 
          w-16 md:w-48 lg:w-64`}
      >
        <ul className="space-y-6 md:mt-5 lg:mt-0">
          {[
            { to: "/", label: "Home", icon: IoHomeOutline },
            { to: "/about", label: "About", icon: CiFaceMeh },
            { to: "/portfolio", label: "Portfolio", icon: MdContactMail },
            { to: "/blog", label: "Blog", icon: FaBlogger },
            { to: "/contact", label: "Contact", icon: RiExportFill },
          ].map((item, index) => (
            <li key={index}>
              <NavLink
                to={item.to}
                aria-label={item.label}
                onClick={handleNavClick}
                className={({ isActive }) =>
                  `flex items-center justify-center w-8 h-8 md:w-8 md:h-8 lg:w-10 
                  lg:h-10 p-2 md:p-3 border-2 rounded-full transition duration-300 ease-in-out ${
                    isActive ? "bg-[#FF5A3A]" : ""
                  }`
                }
              >
                <item.icon className="text-[17px] text-white md:text-[18px] font-bold lg:text-[18px]" />
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
