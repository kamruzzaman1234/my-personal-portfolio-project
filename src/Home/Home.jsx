import { FaFacebookF, FaYoutube, FaLinkedinIn, FaRegAddressCard } from 'react-icons/fa';
import { MdOutlineMail } from 'react-icons/md';
import { IoIosContacts } from 'react-icons/io';
import { GrLanguage } from 'react-icons/gr';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className=" text-white flex items-center justify-center py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2  gap-8 items-center relative">
          
          {/* Column 1 - Image */}
          <div className="flex justify-center my-2">
            <img
              src="https://i.ibb.co/DC4dYGj/Snapchat-1879419947-removebg-preview-1.png" // Replace with your image URL
              alt="Sample"
              className="w-full h-[400px] md:h-[600px] max-w-md rounded-lg  object-contain"
            />
          </div>

          {/* Decorative Border on the Image */}
           {/* <div className="absolute hidden md:block h-full w-1/4
           shadow-lg border-l-4 border-t-4 border-b-4 border-white left-0">
             

            </div>  */}

          {/* Column 2 - Name, Description, and Download Button */}
          <div className="rounded-lg shadow-lg md:pl-8">
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
                <Link to="https://facebook.com" target="_blank" rel="noopener noreferrer" className="bg-green-100 text-white p-3 rounded-full hover:bg-slate-700 transition-all">
                  <FaFacebookF size={24} className="text-blue-600"/>
                </Link>
                <Link to="https://youtube.com" target="_blank" rel="noopener noreferrer" className="bg-green-100 text-white p-3 rounded-full hover:bg-slate-700 transition-all">
                  <FaYoutube size={24} className="text-red-600"/>
                </Link>
                <Link to="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="bg-green-100 text-white p-3 rounded-full hover:bg-slate-700 transition-all">
                  <FaLinkedinIn size={24} className="text-blue-600"/>
                </Link>
              </div>

            <a
              href="/path/to/yourfile.pdf"  // Provide the actual download URL
              download="resume.pdf"
              className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-lg transition duration-300 ease-in-out"
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
