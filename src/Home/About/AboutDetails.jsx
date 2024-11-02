import { Link } from "react-router-dom";
import { TypeAnimation } from 'react-type-animation';

const AboutDetails = ()=>{
    return(
        <div className="bg-black py-[20px] rounded-lg">
            <div className="text-center">
                 <h2 className="font-bold text-[30px] lg:text-[60px] text-white">MD KAMRUZZAMAN</h2> =
                <h4 className="font-bold text-[#FF5A3A] text-[20px]">
       <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'Web Designer',
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        'UL Designer',
        1000,
        'FrontEnd Developer',
        1000,
        'Freelancer',
        1000,
        'Youtube',
        1000
      ]}
      wrapper="span"
      speed={50}
      style={{ fontSize: '2em', display: 'inline-block' }}
      repeat={Infinity}
    />
                </h4>        
            </div>
            <div className="flex flex-col lg:flex-row gap-9 justify-center lg:justify-between items-center">
                <div className="w-[240px] flex flex-col mx-8 md:mx-16 lg:mx-auto">
                    <div className="space-y-3 px-0 lg:px-8 flex justify-center flex-col items-center">
                        <Link to="" className="underline text-[#FF5A3A] 
                     font-bold text-[20px] text-center">FrontEnd Developer</Link>
                     <p className='text-white font-bold text-center'>I create unique Web Design and 
                        Develop website</p>
                </div>
                <div className="mt-6 flex justify-center items-center">
                <Link to="" className="bg-[#FF5A3A] 
                      text-white p-3 rounded-lg font-bold">Contact Me</Link>
                </div>
                
                </div>

                <div className="">
                <img src="https://i.ibb.co/DC4dYGj/Snapchat-1879419947-removebg-preview-1.png" alt="" 
                className="w-[480px] h-[631px]"/>
            </div>

            <div className="w-[240px] flex mx-8 rounded-lg md:mx-16 lg:mx-auto">
                    <div className="space-y-3 flex justify-center items-center flex-col">
                        <Link to="" className="underline text-[#FF5A3A]
                     font-bold text-[20px]">UI Designer</Link>
                     <p className="text-white font-bold text-center">I create unique UI Design. Make My All Project Design.
                    I create the high quality Design</p>
                    </div>
                </div>

               </div>
          </div>
            

       
          
            
        
    )
}
export default AboutDetails;