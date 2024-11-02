import React, { useEffect } from "react";
import SkillBar from "./SkillBar";
import {Link} from 'react-router-dom'
import { FaFacebookF, FaYoutube, FaLinkedinIn, FaRegAddressCard,FaRegFileWord, FaLaptopCode } from 'react-icons/fa';
import { FaCode } from "react-icons/fa";
import { SiCairographics } from "react-icons/si";
import AOS from 'aos';
import 'aos/dist/aos.css';
import AboutDetails from "./AboutDetails";
import WorkingArea from "./WorkingArea";

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
        <h2 className="text-[18px] md:text-[28] lg:text-4xl font-oldstandard text-[#FF5A3A]  uppercase font-bold">About Me</h2>
      </div>
      <div className="max-w-7xl mx-8 md:mx-16 lg:mx-auto mt-10">
        <AboutDetails></AboutDetails>
        <WorkingArea></WorkingArea>
      </div>

      {/* Skills Section */}
      <div className="max-w-7xl mx-8 md:mx-16 lg:mx-auto mt-10">
        <div className="text-center mb-10" data-aos="zoom-out-up">
          <h2 className="text-[14px] lg:text-2xl md:text-2xl font-oldstandard text-white font-bold">MY SKILLS</h2>
        </div>
        <div className="grid grid-cols-1 mx-6 md:mx-10 lg:mx-0 lg:grid-cols-2 gap-6">
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
      <div className="max-w-7xl mx-8 md:mx-16 lg:mx-auto mt-10">
      <div className="text-center mb-10">
          <h2 className="text-[14px] lg:text-2xl md:text-2xl font-oldstandard text-white font-bold">MY TIMELINE</h2>
      </div>
      <ul className="steps steps-vertical px-24 md:px-20 lg:px-0">
  <li className="step step-primary text-white">
    Programming Hero (1-6 month)
    </li>
 
</ul>
      </div>
    </div>
  );
};

export default About;
