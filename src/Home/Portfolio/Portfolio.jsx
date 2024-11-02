import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaYoutube, FaLinkedinIn, FaRegAddressCard } from 'react-icons/fa';

const projects = [
  {
    title: "Real Estate Booking App",
    description:
      "A modern web application for booking properties, built with React, Tailwind CSS, and integrated with a backend API.",
    githubLink: "https://github.com/kamruzzaman1234/real-state-project-client.git",
    liveLink: "https://rea-estate-project-8538e.web.app/",
    image: "https://i.ibb.co.com/Wcp3kLT/Screen-Shot-2024-10-23-at-23-24-02-fullpage.png",
  },
  {
    title: "Consultation Services By Doctors",
    description:
      "An e-commerce platform with user-friendly interface and Stripe integration. Built using React, Tailwind CSS, and Node.js.",
    githubLink: "https://github.com/kamruzzaman1234/Constultion_Services_By_Doctor_Client.git",
    liveLink: "https://service-by-doctor-project.web.app/",
    image: "https://i.ibb.co.com/vXz8jGV/Vite-React.png",
  },
  {
    title: "Portfolio Website",
    description:
      "A responsive portfolio site built with React and Tailwind CSS to showcase my projects and skills.",
    githubLink: "https://github.com/kamrulhasanlabib/portfolio",
    liveLink: "https://portfolio.com",
    image: "https://via.placeholder.com/400x300.png?text=Portfolio+Website",
  },
];

const Portfolio = () => {
  return (
    <div className="bg-gray-900 min-h-screen font-sans">
      {/* Header */}
      <header className="bg-gray-900 text-white py-8 rounded-lg ">
        <div className="max-w-7xl mx-8 md:mx-16 lg:mx-auto text-center">
          <h1 className="text-5xl text-[#FF5A3A] font-bold">Labib Kamruzzaman</h1>
          <p className="text-lg mt-2">Frontend Developer | React & Tailwind Specialist</p>
        </div>
      </header>

      {/* About Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-8 md:mx-16 lg:mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6 text-[#FF5A3A]">My Portfolio</h2>
          <p className="text-gray-600 max-w-3xl mx-8 md:mx-16 lg:mx-auto">
            I am a passionate frontend developer with a focus on creating modern, responsive, and user-friendly interfaces using React and Tailwind CSS. With a keen eye for design and a strong technical foundation, I turn complex ideas into seamless user experiences.
          </p>
        </div>
      </section>

      {/* Projects Section */}
      <section className="bg-slate-900  py-16">
        <div className="max-w-7xl mx-8 md:mx-16 lg:mx-auto">
          <h2 className="text-4xl font-bold text-center text-[#Ff5A3A] mb-12">Projects </h2>
          <div className="grid grid-cols-1 px-6 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-all duration-300"
              >
                <img src={project.image} alt={project.title} className="w-full h-48 object-cover"/>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-4 text-[#FF5A3A]">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="flex justify-between items-center">
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-gray-700 hover:text-gray-900 transition"
                    >
                      <FaGithub size={20} className="mr-2 text-[#FF5A3A]" /> GitHub
                    </a>
                    <Link
                      to={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-blue-500 hover:text-blue-700 transition"
                    >
                      <FaExternalLinkAlt size={20} className="mr-2 text-[#FF5A3A]" /> Live Site
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-200 text-white py-8">
        <div className="max-w-7xl mx-8 md:mx-16 lg:mx-auto text-center">
          <p className="text-lg text-[#FF5A3A]">© 2024 Labib Kamruzzaman. All Rights Reserved.</p>
          <div className="flex gap-6 my-7 justify-center">
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
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
