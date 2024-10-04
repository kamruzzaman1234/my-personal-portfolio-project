import React, { useEffect } from "react";
import SkillBar from "./SkillBar";
import {Link} from 'react-router-dom'
import { FaFacebookF, FaYoutube, FaLinkedinIn, FaRegAddressCard,FaRegFileWord, FaLaptopCode } from 'react-icons/fa';
import { FaCode } from "react-icons/fa";
import { SiCairographics } from "react-icons/si";
import AOS from 'aos';
import 'aos/dist/aos.css';

const About = () => {
  useEffect(() => {
    AOS.init();  
  }, []);

  const skills = [
    { name: 'HTML', level: '95%', color: 'bg-green-500' },
    { name: 'CSS', level: '90%', color: 'bg-green-500' },
    { name: 'JavaScript', level: '80%', color: 'bg-green-500' },
    { name: 'React JS', level: '90%', color: 'bg-green-500' },
    { name: 'Node JS', level: '90%', color: 'bg-green-500' },
    { name: 'Express JS', level: '90%', color: 'bg-green-500' },
    { name: 'Firebase Authentication', level: '90%', color: 'bg-green-500' },
    { name: 'MongoDB', level: '90%', color: 'bg-green-500' },
  ];

  return (
    <div className="py-20">
      <div className="text-center mb-10">
        <h2 className="text-4xl font-oldstandard uppercase font-bold">About Me</h2>
      </div>
      <div className="container mx-auto mt-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Information About Me */}
          <div className="flex flex-col col-span-3 mx-20 md:mx-20 lg:mx-0 
           md:col-span-3 lg:col-span-1 p-6 rounded-lg" data-aos="zoom-in-left">
            <h2 className="uppercase mb-6 font-bold font-oldstandard text-2xl">Information <br /> About Me</h2>
            <p className="font-oldstandard mb-6">
              My name is Kamruzzaman, and I am a Frontend Developer with experience in React, web design, and various frontend technologies. Currently, I am pursuing a BSc in CSE at Daffodil International University and am passionate about building dynamic and user-friendly web applications.
            </p>

            <div className="flex gap-5 mb-10" data-aos="zoom-in-right">
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

          {/* Skills Overview */}
          <div className="flex p-4 rounded-lg col-span-2" data-aos="zoom-out">
            <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-7
             w-full mx-20 md:mx-20 lg:mx-0">
              {/* Web Design */}
              <div className="space-y-3 items-center  bg-slate-800 flex flex-col hover:bg-green-500 
              p-5 justify-center border-2 
               rounded-lg transition-colors duration-300">
                <FaCode className="text-6xl text-white font-bold mb-6"/>
                <h2 className="text-[26px] text-green-500 font-oldstandard uppercase hover:text-white  font-bold">Web Design</h2>
                <p className="text-[17px] font-oldstandard">Its gain this html, css, js , tailwind css</p>
              </div>

              {/* Graphic Design */}
              <div className="space-y-3 items-center   bg-slate-800 flex flex-col hover:bg-green-500
               p-5 justify-center border-2 
               rounded-lg transition-colors duration-300">
                <SiCairographics className="text-6xl text-white mb-6 font-bold"/>
                <h2 className="text-[26px] text-green-500 font-oldstandard hover:text-white  font-bold uppercase">Graphics Design</h2>
                <p className="text-[17px] font-oldstandard">Its gain this html, css, js , tailwind css</p>
              </div>

              {/* MS Word */}
              <div className="space-y-3 items-center  bg-slate-800 flex flex-col hover:bg-green-500
               p-5 justify-center border-2 
               rounded-lg transition-colors duration-300">
                <FaRegFileWord className="text-6xl text-white mb-6 font-bold"/>
                <h2 className="text-[26px] text-green-500 hover:text-white font-oldstandard font-bold">MS WORD</h2>
                <p className="text-[17px] font-oldstandard">Its gain this html, css, js , tailwind css</p>
              </div>

              {/* Problem Solving */}
              <div className="space-y-3 items-center  bg-slate-800 flex flex-col hover:bg-green-500
              p-5 justify-center border-2 
               rounded-lg transition-colors duration-300">
                <FaLaptopCode className="text-6xl text-white mb-6 font-bold"/>
                <h2 className="text-[26px] text-green-500 font-oldstandard hover:text-white  font-bold uppercase">Problem Solving</h2>
                <p className="text-[17px] font-oldstandard">Its gain this html, css, js , tailwind css</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Skills Section */}
      <div className="container mx-auto mt-10">
        <div className="text-center mb-10" data-aos="zoom-out-up">
          <h2 className="text-4xl font-oldstandard font-bold">MY SKILLS</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 mx-20 md:mx-20 lg:mx-0 lg:grid-cols-2 gap-6">
          {skills.map((skill, index) => (
            <SkillBar
              key={index}
              name={skill.name}
              level={skill.level}
              color={skill.color}
            />
          ))}
        </div>
      </div>
      {/* My time line area */}
      <div className="container mx-auto mt-10">
      <div className="text-center mb-10">
          <h2 className="text-4xl font-oldstandard font-bold">MY TIMELINE</h2>
      </div>
      <ul className="steps steps-vertical px-24 md:px-20 lg:px-0">
  <li className="step step-primary">
    Programming Hero (1-6 month)
    </li>
 
</ul>
      </div>
    </div>
  );
};

export default About;
