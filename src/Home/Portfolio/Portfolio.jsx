import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaGithub } from "react-icons/fa6";
import { GoProjectSymlink } from "react-icons/go";
const Portfolio = () => {
  useEffect(()=>{
    AOS.init()
  },[])
  return (
    <div className="py-16 px-4 sm:px-8 lg:px-16">
      <div className="text-center  mb-12 space-y-6">
        <h2 className="text-[15px] md:text-[24px] lg:text-[24px] font-bold font-oldstandard">MY PORTFOLIO</h2>
        <p className="font-oldstandard text-sm md:text-[22px] lg:text-[24px]">
          Check out my projects below and feel free to get in touch for collaborations or inquiries
        </p>
      </div>

      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 
        lg:grid-cols-3 gap-3 md:gap-6 lg:gap-6 mx-20 md:mx-20 lg:mx-10">
         <div className="bg-slate-600  py-6 px-4 rounded-lg">
            <div className="">
              <img src="https://i.ibb.co.com/JFmWjpV/responsive-react-js.png" 
              alt="" className="w-full object-contain h-[300px]"/>
            </div>
            <div className="text-white mt-6 ">
              <h2 className="text-2xl font-bold font-oldstandard">Real State Project</h2>
              <p>Real State is the most powerful plan in the Appoinment</p>
             
            </div>
            <div className="gap-4 my-6 flex flex-col lg:flex-row justify-start ">
                  <Link to="" className="">
                      <FaGithub className="text-3xl text-white"/>
                  </Link>
                  <Link to="" className="">
                  <GoProjectSymlink  className="text-white text-3xl"/>
                  </Link>
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
