import React from 'react';
import { FaLinkedin, FaGithub, FaTwitter, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaYoutube, FaLinkedinIn, FaRegAddressCard } from 'react-icons/fa';

const Contact = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Hero Section */}
      <header className="bg-gray-900 text-white py-16 mt-6">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-4">Get in Touch</h1>
          <p className="text-lg">I'd love to hear from you! Whether it's a project, job opportunity, or just a chat, feel free to reach out.</p>
        </div>
      </header>

      {/* Contact Form and Details Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div className="bg-gray-50 p-8 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold mb-6 text-[#FF5A3A]">Contact Me</h2>
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-gray-600">Your Name</label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-600">Your Email</label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-600">Message</label>
                <textarea
                  placeholder="Enter your message"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 h-32"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full text-white font-bold py-3 rounded-lg bg-[#FF5A3A] transition-all"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Details */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-[#FF5A3A] mb-4">Contact Details</h2>
              <p className="text-gray-600 mb-2">Feel free to contact me directly through the following methods:</p>
              <ul className="text-gray-800">
                <li className="flex items-center space-x-3 mb-2">
                  <FaPhone className="text-purple-600" /> <span>+880-1234-567890</span>
                </li>
                <li className="flex items-center space-x-3 mb-2">
                  <FaEnvelope className="text-purple-600" /> <span>labib.kamruzzaman@example.com</span>
                </li>
                <li className="flex items-center space-x-3 mb-2">
                  <FaMapMarkerAlt className="text-purple-600" /> <span>Rangpur, Bangladesh</span>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-[#FF5A3A] mb-4">Social Media</h2>
              <p className="text-gray-600 mb-4">You can also find me on these platforms:</p>
       <div className="flex gap-6 my-7 ">
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
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto text-center">
          <p>© 2024 Labib Kamruzzaman. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Contact;
