import React from 'react';
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';
import { FaFacebookF, FaYoutube, FaLinkedinIn, FaRegAddressCard } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const blogPosts = [
  {
    title: "Understanding React Hooks",
    description:
      "React Hooks allow you to use state and other React features without writing a class. In this post, we'll dive into useState, useEffect, and custom hooks.",
    link: "#",
    date: "October 15, 2024",
    image: "https://via.placeholder.com/400x250.png?text=React+Hooks",
  },
  {
    title: "CSS Grid vs Flexbox",
    description:
      "CSS Grid and Flexbox are two powerful layout systems in CSS. This article compares their usage and when to use each for your layouts.",
    link: "#",
    date: "October 10, 2024",
    image: "https://via.placeholder.com/400x250.png?text=CSS+Grid+vs+Flexbox",
  },
  {
    title: "Building Responsive UIs with Tailwind CSS",
    description:
      "Tailwind CSS makes it easier to build responsive designs. Learn how to utilize Tailwind's utility-first approach to create stunning UIs.",
    link: "#",
    date: "October 5, 2024",
    image: "https://via.placeholder.com/400x250.png?text=Responsive+UI+with+Tailwind",
  },
];

const Blog = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Hero Section */}
      <header className="bg-gray-900 text-white py-8 mt-6">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl text-[#Ff5A3A] font-bold mb-4">Labib Kamruzzaman</h1>
          <p className="text-lg mb-6">Frontend Developer | React | Tailwind CSS</p>
          <a
            href="#blogs"
            className="bg-white text-blue-600 font-bold py-3 px-8 rounded-full hover:bg-blue-600 hover:text-white transition-all"
          >
            Explore My Blogs
          </a>
        </div>
      </header>

      {/* Blog Section */}
      <section id="blogs" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-[#FF5A3A] mb-12">Latest Blog Posts</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {blogPosts.map((post, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-3 text-[#FF5A3A]">{post.title}</h3>
                  <p className="text-gray-600 mb-4">{post.description}</p>
                  <a
                    href={post.link}
                    className="text-blue-600 font-semibold hover:text-blue-800 transition-all"
                  >
                    Read More
                  </a>
                  <p className="text-sm text-gray-400 mt-3">{post.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-10">
        <div className="max-w-7xl mx-auto text-center">
          <h3 className="text-lg text-[#FF5A3A] mb-4">Connect with me</h3>
          <div className="flex gap-6 my-7 justify-center ">
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
          <p className="text-gray-400 mt-6">© 2024 Labib Kamruzzaman. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Blog;
