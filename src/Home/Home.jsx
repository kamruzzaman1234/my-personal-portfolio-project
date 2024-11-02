import { FaFacebookF, FaYoutube, FaLinkedinIn, FaRegAddressCard } from 'react-icons/fa';
import { MdOutlineMail } from 'react-icons/md';
import { IoIosContacts } from 'react-icons/io';
import { GrLanguage } from 'react-icons/gr';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { TypeAnimation } from 'react-type-animation';

const Home = () => {
  useEffect(() => {
    AOS.init(); 
  }, []);
  return (
    <div className="flex items-center justify-center py-20">
      <div className="max-w-7xl mx-8 md:mx-16 lg:mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3  gap-8">
          
          {/* Column 1 - Image */}
          <div className="" data-aos="zoom-in-down">
            <img
              src="https://i.ibb.co/DC4dYGj/Snapchat-1879419947-removebg-preview-1.png" // Replace with your image URL
              alt="Sample"
              className="w-full h-[400px] md:h-[400px] lg:h-[650px]  max-w-md rounded-lg
              object-contain" 
            />
          </div>

          {/* Decorative Border on the Image */}
           {/* <div className="absolute hidden md:block h-full w-1/4
           shadow-lg border-l-4 border-t-4 border-b-4 border-white left-0">
             

            </div>  */}

          {/* Column 2 - Name, Description, and Download Button */}
         
          <div className=" border-[#FF5A3A] col-span-2 text-white rounded-lg">
              <div>
              <h1 className="text-2xl md:text-5xl lg:text-6xl font-bold text-[#FF5A3A] mb-5 leading-tight">
              Hi, I'm Labib. <span className="text-green-500 text-[30px]">  <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'Web Designer',
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        'UL Designer',
        1000,
        'FrontEnd Developer',
        1000,
        'Freelancer',
        1000,
        'Youtube',
        1000
      ]}
      wrapper="span"
      speed={50}
      style={{ fontSize: '2em', display: 'inline-block' }}
      repeat={Infinity}
    /></span>
            </h1>
            <p className="text-lg font-semibold  text-white">
              I’m Kamruzzaman, a passionate Frontend Developer specializing in building
              responsive and user-friendly web applications. With a strong foundation in 
              HTML5, CSS3, JavaScript, and modern libraries like React.js, I enjoy crafting 
              intuitive and dynamic user interfaces. Currently, I'm working with the MERN stack
              to develop full-featured web applications, focusing on efficient front-end 
              development using tools like Tailwind CSS and React Router.
              <br /><br />
              I strive to continuously improve my skills by staying up-to-date with the latest 
              web development trends and practices.
            </p>
      <div className="flex gap-6 my-7">
      {/* Facebook */}
      <Link
        to="https://www.facebook.com/kamrulhasan.labib"
        target="_blank"
        rel="noopener noreferrer"
        className="group bg-gradient-to-r from-blue-500 to-blue-700 p-3 rounded-full transition-all duration-300 transform hover:scale-110 shadow-lg"
      >
        <FaFacebookF size={24} className="text-white group-hover:rotate-12 transition-all" />
      </Link>

      {/* YouTube */}
      <Link
        to="https://www.youtube.com/@user-wx4cl7eu9q"
        target="_blank"
        rel="noopener noreferrer"
        className="group bg-gradient-to-r from-red-500 to-red-700 p-3 rounded-full transition-all duration-300 transform hover:scale-110 shadow-lg"
      >
        <FaYoutube size={24} className="text-white group-hover:rotate-12 transition-all" />
      </Link>

      {/* LinkedIn */}
      <Link
        to="https://www.linkedin.com/in/md-kamruzzaman-298786249/"
        target="_blank"
        rel="noopener noreferrer"
        className="group bg-gradient-to-r from-blue-600 to-blue-800 p-3 rounded-full transition-all duration-300 transform hover:scale-110 shadow-lg"
      >
        <FaLinkedinIn size={24} className="text-white group-hover:rotate-12 transition-all" />
      </Link>
    </div>
    <div>
            <a href="" download={""} className="bg-[#Ff5A3A] p-3 rounded-lg">CV DOWNLOAD</a>
    </div>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
