import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Portfolio = () => {
  useEffect(()=>{
    AOS.init()
  },[])
  return (
    <div className="py-16 px-4 sm:px-8 lg:px-16">
      <div className="text-center  mb-12 space-y-6">
        <h2 className="text-[18px] font-bold font-oldstandard">MY PORTFOLIO</h2>
        <p className="font-oldstandard text-sm">
          Check out my projects below and feel free to get in touch for collaborations or inquiries
        </p>
      </div>

      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-20 md:mx-20 lg:mx-10">
          
          {/* Project 1 */}
          <div className="bg-white shadow-lg rounded-lg p-3 hover:shadow-xl transition-shadow" data-aos="zoom-in-right">
            <img
              src="https://i.ibb.co.com/jgMMZxY/photo-gallery-website-templates-featured-image.jpg"
              alt="Gallery Show"
              className=" w-full h-48 object-cover rounded-t-lg"
            />
            <div className="mt-4">
              <h3 className="text-lg sm:text-xl font-semibold text-black">Gallery Show</h3>
              <p className="mt-2 text-gray-600">Short description of the project.</p>
              <div className="mt-4 flex space-x-4">
                <Link
                  to="/"
                  className="bg-[#181717] text-white px-3 sm:px-4 py-2 rounded-lg hover:bg-gray-900 transition-colors"
                >
                  GitHub
                </Link>
                <Link
                  to="/"
                  className="bg-green-500 text-white px-3 sm:px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors"
                >
                  Live Demo
                </Link>
              </div>
            </div>
          </div>

          {/* Project 2 */}
          <div className="bg-white shadow-lg rounded-lg p-4 sm:p-6 hover:shadow-xl transition-shadow" data-aos="zoom-in-left">
            <img
              src="https://i.ibb.co.com/N9WTHsb/images.jpg"
              alt="Shopping Complex"
              className="w-full h-48 object-cover rounded-t-lg"
            />
            <div className="mt-4">
              <h3 className="text-lg sm:text-xl font-semibold text-black">Shopping Complex</h3>
              <p className="mt-2 text-gray-600">Short description of the project.</p>
              <div className="mt-4 flex space-x-4">
                <a
                  href="https://github.com/your-repo-link"
                  className="bg-[#181717] text-white px-3 sm:px-4 py-2 rounded-lg hover:bg-gray-900 transition-colors"
                >
                  GitHub
                </a>
                <a
                  href="https://your-live-demo-link"
                  className="bg-green-500 text-white px-3 sm:px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors"
                >
                  Live Demo
                </a>
              </div>
            </div>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-4 sm:p-6 hover:shadow-xl transition-shadow" data-aos="zoom-out">
            <img
              src="https://i.ibb.co.com/N9WTHsb/images.jpg"
              alt="Shopping Complex"
              className="w-full h-48 object-cover rounded-t-lg"
            />
            <div className="mt-4">
              <h3 className="text-lg sm:text-xl font-semibold text-black">Shopping Complex</h3>
              <p className="mt-2 text-gray-600">Short description of the project.</p>
              <div className="mt-4 flex space-x-4">
                <a
                  href="https://github.com/your-repo-link"
                  className="bg-[#181717] text-white px-3 sm:px-4 py-2 rounded-lg hover:bg-gray-900 transition-colors"
                >
                  GitHub
                </a>
                <a
                  href="https://your-live-demo-link"
                  className="bg-green-500 text-white px-3 sm:px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors"
                >
                  Live Demo
                </a>
              </div>
            </div>
          </div>

          <div className="bg-white shadow-lg rounded-lg p-4 sm:p-6 hover:shadow-xl transition-shadow" data-aos="zoom-out-up">
            <img
              src="https://i.ibb.co.com/N9WTHsb/images.jpg"
              alt="Shopping Complex"
              className="w-full h-48 object-cover rounded-t-lg"
            />
            <div className="mt-4">
              <h3 className="text-lg sm:text-xl font-semibold text-black">Shopping Complex</h3>
              <p className="mt-2 text-gray-600">Short description of the project.</p>
              <div className="mt-4 flex space-x-4">
                <a
                  href="https://github.com/your-repo-link"
                  className="bg-[#181717] text-white px-3 sm:px-4 py-2 rounded-lg hover:bg-gray-900 transition-colors"
                >
                  GitHub
                </a>
                <a
                  href="https://your-live-demo-link"
                  className="bg-green-500 text-white px-3 sm:px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors"
                >
                  Live Demo
                </a>
              </div>
            </div>
          </div>

          <div className="bg-white shadow-lg rounded-lg p-4 sm:p-6 hover:shadow-xl transition-shadow" data-aos="zoom-out-down">
            <img
              src="https://i.ibb.co.com/N9WTHsb/images.jpg"
              alt="Shopping Complex"
              className="w-full h-48 object-cover rounded-t-lg"
            />
            <div className="mt-4">
              <h3 className="text-lg sm:text-xl font-semibold text-black">Shopping Complex</h3>
              <p className="mt-2 text-gray-600">Short description of the project.</p>
              <div className="mt-4 flex space-x-4">
                <a
                  href="https://github.com/your-repo-link"
                  className="bg-[#181717] text-white px-3 sm:px-4 py-2 rounded-lg hover:bg-gray-900 transition-colors"
                >
                  GitHub
                </a>
                <a
                  href="https://your-live-demo-link"
                  className="bg-green-500 text-white px-3 sm:px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors"
                >
                  Live Demo
                </a>
              </div>
            </div>
          </div>

          <div className="bg-white shadow-lg rounded-lg p-4 sm:p-6 hover:shadow-xl transition-shadow" data-aos="zoom-outt">
            <img
              src="https://i.ibb.co.com/N9WTHsb/images.jpg"
              alt="Shopping Complex"
              className="w-full h-48 object-cover rounded-t-lg"
            />
            <div className="mt-4">
              <h3 className="text-lg sm:text-xl font-semibold text-black">Shopping Complex</h3>
              <p className="mt-2 text-gray-600">Short description of the project.</p>
              <div className="mt-4 flex space-x-4">
                <a
                  href="https://github.com/your-repo-link"
                  className="bg-[#181717] text-white px-3 sm:px-4 py-2 rounded-lg hover:bg-gray-900 transition-colors"
                >
                  GitHub
                </a>
                <a
                  href="https://your-live-demo-link"
                  className="bg-green-500 text-white px-3 sm:px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors"
                >
                  Live Demo
                </a>
              </div>
            </div>
          </div>

          {/* Additional Project Cards */}
          {/* Add more cards here as needed, following the same structure */}

        </div>
      </div>
    </div>
  );
};

export default Portfolio;
