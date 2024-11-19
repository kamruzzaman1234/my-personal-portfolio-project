import { Link } from "react-router-dom";
import { TypeAnimation } from 'react-type-animation';

const AboutDetails = ()=>{
    const features = [
        "Responsive Design",
        "Modern UI/UX",
        "Interactive Elements",
        "Dark Mode Support",
        "Customizable Themes",
        "Optimized Performance",
        "Accessibility Features",
        "Search Functionality",
        "Pagination or Infinite Scroll",
        "Form Validation",
      ];
      const ulFeature = [
        "User-Centric Design",
    "Intuitive Navigation",
    "Minimalist Aesthetics",
    "Mobile-First Approach",
    "Consistency in Design",
    "Micro-Interactions",
    "Typography Hierarchy",
    "Color Psychology",
    "Accessibility Standards",
    "Fast Loading Times",
      ]

    return(
        <div className="bg-black py-[20px] rounded-lg">
            <div className="text-center">
                 <h2 className="font-bold text-[30px] lg:text-[60px] text-white">MD KAMRUZZAMAN</h2>
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
                <div className="w-[340px] flex flex-col mx-8 md:mx-16 lg:mx-auto">
                    <div className="space-y-3 px-0 lg:px-8 flex justify-center flex-col items-center">
                        <Link to="" className="underline text-[#FF5A3A] 
                     font-bold text-[20px]">FrontEnd Developer</Link>
                      <ul className="list-decimal list-inside text-white text-sm space-y-3">
          {features.map((feature, index) => (
            <li key={index} className="pl-2">
              {feature}
            </li>
          ))}
        </ul>
                </div>
                
                
                </div>

             <div className="w-[300px]">
                <img src="https://i.ibb.co/DC4dYGj/Snapchat-1879419947-removebg-preview-1.png" alt="" 
                className="h-[300px] lg:h-[500px] object-cover"/>
            </div>

            <div className="w-[340px] flex flex-col mx-8 md:mx-16 lg:mx-auto">
                    <div className="space-y-3 px-0 lg:px-8 flex justify-center flex-col items-center">
                        <Link to="" className="underline text-[#FF5A3A]
                     font-bold text-[20px]">UI Designer</Link>
                        <ul className="list-decimal list-inside text-white text-sm space-y-3">
          {features.map((ulFeature, index) => (
            <li key={index} className="pl-2">
              {ulFeature}
            </li>
          ))}
        </ul>
                    </div>
                </div>

               </div>
          </div>
            

       
          
            
        
    )
}
export default AboutDetails;