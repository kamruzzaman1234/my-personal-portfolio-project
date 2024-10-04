import { FaFacebookF, FaYoutube, FaLinkedinIn, FaRegAddressCard } from 'react-icons/fa';
import { MdOutlineMail } from 'react-icons/md';
import { IoIosContacts } from 'react-icons/io';
import { GrLanguage } from 'react-icons/gr';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Home = () => {
  useEffect(() => {
    AOS.init(); 
  }, []);
  return (
    <div className=" text-white flex items-center justify-center py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2  gap-8 items-center relative">
          
          {/* Column 1 - Image */}
          <div className="flex lg:justify-center md:justify-start my-2" data-aos="zoom-in-down">
            <img
              src="https://i.ibb.co/DC4dYGj/Snapchat-1879419947-removebg-preview-1.png" // Replace with your image URL
              alt="Sample"
              className="w-full h-[400px] md:h-[400px] lg:h-[650px]  max-w-md rounded-lg  object-contain" 
            />
          </div>

          {/* Decorative Border on the Image */}
           {/* <div className="absolute hidden md:block h-full w-1/4
           shadow-lg border-l-4 border-t-4 border-b-4 border-white left-0">
             

            </div>  */}

          {/* Column 2 - Name, Description, and Download Button */}
          <div className="rounded-lg shadow-lg px-24 md:px-20 lg:px-0 " data-aos="zoom-in-up">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-5 leading-tight">
              Hi, I'm Labib. <span className="text-green-500">I am a FrontEnd Developer</span>
            </h1>
            <p className="text-sm md:text-base mb-8 leading-relaxed">
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

            <div className="flex gap-5 mb-10">
                <Link to="https://www.facebook.com/kamrulhasan.labib" target="_blank" rel="noopener noreferrer" className="bg-green-100 text-white p-3 rounded-full hover:bg-slate-700 transition-all">
                  <FaFacebookF size={24} className="text-blue-600"/>
                </Link>
                <Link to="https://www.youtube.com/@user-wx4cl7eu9q" target="_blank" rel="noopener noreferrer" className="bg-green-100 text-white p-3 rounded-full hover:bg-slate-700 transition-all">
                  <FaYoutube size={24} className="text-red-600"/>
                </Link>
                <Link to="https://www.linkedin.com/in/md-kamruzzaman-298786249/" target="_blank" rel="noopener noreferrer" className="bg-green-100 text-white p-3 rounded-full hover:bg-slate-700 transition-all">
                  <FaLinkedinIn size={24} className="text-blue-600"/>
                </Link>
              </div>

            
              <a
              href="/path/to/yourfile.pdf"  // Provide the actual download URL
              download="resume.pdf"
              className="bg-green-500 btn text-white font-oldstandard w-2/3 md:w-1/3 lg:w-1/2 px-4 py-2 rounded transition-colors duration-300 hover:bg-green-600"
            >
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
