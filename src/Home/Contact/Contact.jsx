import { FaFacebookF, FaYoutube, FaLinkedinIn, FaRegAddressCard } from 'react-icons/fa';
import { MdOutlineMail } from 'react-icons/md';
import { IoIosContacts } from 'react-icons/io';
import { GrLanguage } from 'react-icons/gr';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
const Contact = () => {
  useEffect(() => {
    AOS.init(); 
  }, []);
  return (
    <div className="py-10 md:py-20">
      {/* Title Section */}
      <div className="text-center  mb-12 space-y-6">
        <h2 className="text-[15px] md:text-[24px] lg:text-[24px] font-bold font-oldstandard">CONTACT ME</h2>
        <p className="font-oldstandard text-sm md:text-[22px] lg:text-[24px]">
          Please Contact Me and Learn More about Me!
        </p>
      </div>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mx-20 md:mx-20 lg:mx-0">
          {/* Left Column - Contact Info */}
          <div className="flex flex-col  bg-slate-800 shadow-lg p-6 rounded-lg space-y-5" data-aos="zoom-in-left">
            <div className="space-y-4">
              <h2 className="text-[15px] md:text-[24px] lg:text-[24px] font-oldstandard font-bold">CONTACT ME HERE</h2>
              <p className="text-lg md:text-xl">For network consultancy services, feel free to get in touch.</p>
            </div>

            {/* Contact Information */}
            <div className="space-y-4" data-aos="zoom-out-up">
  <div className="flex gap-4 items-center">
    <FaRegAddressCard className="text-2xl sm:text-3xl md:text-4xl text-green-300" />
    <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-oldstandard">Location Saver, Ashulia, Dhaka</p>
  </div>

  <div className="flex gap-4 items-center">
    <MdOutlineMail className="text-2xl sm:text-3xl md:text-4xl text-green-300" />
    <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-oldstandard">kamruzzamancse22@gmail.com</p>
  </div>

  <div className="flex gap-4 items-center">
    <IoIosContacts className="text-2xl sm:text-3xl md:text-4xl text-green-300" />
    <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-oldstandard">01935024654</p>
  </div>

  <div className="flex gap-4 items-center">
    <GrLanguage className="text-2xl sm:text-3xl md:text-4xl text-green-300" />
    <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-oldstandard">Bangla, English</p>
  </div>

  {/* Social Media Icons */}
  <div className="flex flex-col sm:flex-row md:flex-row lg:flex-row gap-4 sm:gap-5 mb-10">
    <Link
      to="https://www.facebook.com/kamrulhasan.labib"
      target="_blank"
      rel="noopener noreferrer"
      className="p-2 sm:p-3 lg:p-4 text-white rounded-full hover:bg-slate-700 transition-all"
    >
      <FaFacebookF size={24} className="text-blue-600" />
    </Link>
    <Link
      to="https://www.youtube.com/@user-wx4cl7eu9q"
      target="_blank"
      rel="noopener noreferrer"
      className="p-2 sm:p-3 lg:p-4 hover:bg-slate-700 transition-all"
    >
      <FaYoutube size={24} className="text-red-600" />
    </Link>
    <Link
      to="https://www.linkedin.com/in/md-kamruzzaman-298786249/"
      target="_blank"
      rel="noopener noreferrer"
      className="p-2 sm:p-3 lg:p-4"
    >
      <FaLinkedinIn size={24} className="text-blue-600" />
    </Link>
  </div>
</div>

          </div>

          {/* Right Column - Contact Form */}
          <div className="" data-aos="zoom-out">
            <form action="">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="form-control">
                  <input type="text" placeholder="YOUR NAME" name="name" className="input input-bordered w-full bg-slate-700 text-white rounded-lg px-4 py-2" />
                </div>
                <div className="form-control">
                  <input type="email" placeholder="YOUR EMAIL" name="email" className="input input-bordered w-full bg-slate-700 text-white rounded-lg px-4 py-2" />
                </div>
                <div className="form-control md:col-span-2">
                  <input type="text" placeholder="ENTER SUBJECT HERE" name="subject" className="input input-bordered w-full bg-slate-700 text-white rounded-lg px-4 py-2" />
                </div>
                <div className="form-control md:col-span-2">
                  <textarea name="message" rows="6" placeholder="ENTER MESSAGE" className="bg-slate-700 text-white rounded-lg px-4 py-2 w-full" />
                </div>
                <div className="form-control md:col-span-2">
                  <button type="submit" className="bg-green-600 px-4 py-2 rounded-lg text-white hover:bg-green-700 transition-all w-full">Send Message</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
