import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Blog = () => {
  useEffect(() => {
    AOS.init(); 
  }, []);
  return (
    <div className="py-20">
      <div className="text-center mb-10 space-y-4" data-aos="zoom-in-right">
        <h2 className="text-4xl font-bold">My Blog</h2>
        <p className="text-2xl">Discover my thoughts on web development and more.</p>
      </div>
      <div className="container mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-20 md:mx-20 lg:mx-10">
        {/* Example of a blog post preview */}
        <div className="bg-white shadow-lg  rounded-lg p-4 sm:p-6
         hover:shadow-xl transition-shadow" data-aos="zoom-out">
            <img
              src="https://i.ibb.co.com/SypffHt/photo-1649180543887-158357417159.jpg"
              alt="Shopping Complex"
              className="w-full h-48 object-cover rounded-t-lg"
            />
            <div className="mt-4">
              <h3 className="text-lg sm:text-xl font-semibold font-oldstandard text-black">Youtube</h3>
              <p className="mt-2 text-gray-600">Youtube is very good platform</p>
              <div className="mt-4 flex space-x-4">
                <Link to="/blogPost" className="bg-green-400 p-4 font-oldstandard rounded-lg">Comments</Link>
              </div>
            </div>
          </div>

          <div className="bg-white shadow-lg rounded-lg p-4 sm:p-6
           hover:shadow-xl transition-shadow" data-aos="zoom-out-up">
            <img
              src="https://i.ibb.co.com/x2KdCHZ/download.jpg"
              alt="Shopping Complex"
              className="w-full h-48 object-cover rounded-t-lg"
            />
            <div className="mt-4">
              <h3 className="text-lg sm:text-xl font-semibold font-oldstandard text-black">Linkedin</h3>
              <p className="mt-2 text-gray-600">Youtube is very good platform</p>
              <div className="mt-4 flex space-x-4">
                <Link to="/blogPost" className="bg-green-400 p-4 font-oldstandard rounded-lg">Comments</Link>
              </div>
            </div>
          </div>

          <div className="bg-white shadow-lg rounded-lg p-4 sm:p-6
           hover:shadow-xl transition-shadow" data-aos="zoom-out">
            <img
              src="https://i.ibb.co.com/x2KdCHZ/download.jpg"
              alt="Shopping Complex"
              className="w-full h-48 object-cover rounded-t-lg"
            />
            <div className="mt-4" data-aos="zoom-out-up">
              <h3 className="text-lg sm:text-xl font-semibold font-oldstandard text-black">Linkedin</h3>
              <p className="mt-2 text-gray-600">Youtube is very good platform</p>
              <div className="mt-4 flex space-x-4">
                <Link to="/blogPost" className="bg-green-400 p-4 font-oldstandard rounded-lg">Comments</Link>
              </div>
            </div>
          </div>

          <div className="bg-white shadow-lg rounded-lg p-4 sm:p-6
           hover:shadow-xl transition-shadow" data-aos="zoom-out-up">
            <img
              src="https://i.ibb.co.com/x2KdCHZ/download.jpg"
              alt="Shopping Complex"
              className="w-full h-48 object-cover rounded-t-lg"
            />
            <div className="mt-4">
              <h3 className="text-lg sm:text-xl font-semibold font-oldstandard text-black">Linkedin</h3>
              <p className="mt-2 text-gray-600">Youtube is very good platform</p>
              <div className="mt-4 flex space-x-4">
                <Link to="/blogPost" className="bg-green-400 p-4 font-oldstandard rounded-lg">Comments</Link>
              </div>
            </div>
          </div>

          <div className="bg-white shadow-lg rounded-lg p-4
           sm:p-6 hover:shadow-xl transition-shadow" data-aos="zoom-out-up">
            <img
              src="https://i.ibb.co.com/x2KdCHZ/download.jpg"
              alt="Shopping Complex"
              className="w-full h-48 object-cover rounded-t-lg"
            />
            <div className="mt-4">
              <h3 className="text-lg sm:text-xl font-semibold font-oldstandard text-black">Linkedin</h3>
              <p className="mt-2 text-gray-600">Youtube is very good platform</p>
              <div className="mt-4 flex space-x-4">
                <Link to="/blogPost" className="bg-green-400 p-4 font-oldstandard rounded-lg">Comments</Link>
              </div>
            </div>
          </div>
      </div>
      </div>
      
     
    </div>
  );
};

export default Blog;
