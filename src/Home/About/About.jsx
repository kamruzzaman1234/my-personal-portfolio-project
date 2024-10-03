import React from "react";
import SkillBar from "./SkillBar";

const About = () => {
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
        <h2 className="text-4xl font-oldstandard uppercase font-bold">About Me</h2>
      </div>
      <div className="container mx-auto mt-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Information About Me */}
          <div className="flex flex-col  p-6 rounded-lg">
            <h2 className="uppercase mb-6 font-bold font-oldstandard text-2xl">Information <br /> About Me</h2>
            <p className="font-oldstandard mb-6">
              My name is Kamruzzaman, and I am a Frontend Developer with experience in React, web design, and various frontend technologies. Currently, I am pursuing a BSc in CSE at Daffodil International University and am passionate about building dynamic and user-friendly web applications.
            </p>
            <a
              href="/path/to/yourfile.pdf"  // Provide the actual download URL
              download="resume.pdf"
              className="bg-green-500 btn text-white font-oldstandard w-1/2 px-4 py-2 rounded transition-colors duration-300 hover:bg-green-600"
            >
              Download Resume
            </a>
          </div>

          {/* Skills Overview */}
          <div className="flex p-4 rounded-lg col-span-2">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-7 w-full">
              {/* Web Design */}
              <div className="space-y-3  bg-slate-800 flex flex-col hover:bg-green-500 p-5 justify-center border-2 
               rounded-lg transition-colors duration-300">
                <h2 className="font-oldstandard uppercase  font-bold text-[20px] hover:text-white">WEB DESIGN</h2>
                <p className="text-justify">
                  Experienced in Web Design, specializing in creating responsive, user-friendly websites with modern layouts and efficient UI/UX design, using HTML, CSS, JavaScript, and frameworks like React.
                </p>
              </div>

              {/* Graphic Design */}
              <div className="space-y-3  bg-slate-800 flex flex-col hover:bg-green-500 p-5 justify-center border-2 
               rounded-lg transition-colors duration-300">
                <h2 className="font-oldstandard uppercase font-bold  text-[20px] hover:text-white">Graphic Design</h2>
                <p className="text-justify">
                  Proficient in Graphic Design, focusing on creating visually compelling designs for digital and print media, with expertise in tools like Adobe Photoshop, Illustrator, and Canva.
                </p>
              </div>

              {/* MS Word */}
              <div className="space-y-3  bg-slate-800 flex flex-col hover:bg-green-500 p-5 justify-center border-2 
               rounded-lg transition-colors duration-300">
                <h2 className="font-oldstandard uppercase font-bold text-[20px] hover:text-white">MS Word</h2>
                <p className="text-justify">
                  Proficient in MS Word, skilled in creating, formatting, and editing professional documents, reports, and presentations with advanced features such as styles, templates, and mail merge.
                </p>
              </div>

              {/* Problem Solving */}
              <div className="space-y-3  bg-slate-800 flex flex-col hover:bg-green-500 p-5 justify-center border-2 
               rounded-lg transition-colors duration-300">
                <h2 className="font-oldstandard uppercase font-bold text-[20px] hover:text-white">Problem Solving</h2>
                <p className="text-justify">
                  Strong problem-solving skills with the ability to analyze complex issues, identify solutions, and implement effective strategies to overcome challenges in both technical and non-technical environments.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Skills Section */}
      <div className="container mx-auto mt-10">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-oldstandard font-bold">MY SKILLS</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
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
      <div className="container mx-auto mt-10">
      <div className="text-center mb-10">
          <h2 className="text-4xl font-oldstandard font-bold">MY TIMELINE</h2>
      </div>
      <ul className="steps steps-vertical">
  <li className="step step-primary">
    Programming Hero (1-6 month)
    </li>
 
</ul>
      </div>
    </div>
  );
};

export default About;
