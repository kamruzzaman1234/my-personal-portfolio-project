import React from "react";


// Skill data
const skills = [
  { name: 'HTML', level: '95%', color: 'bg-blue-500' },
  { name: 'CSS', level: '90%', color: 'bg-green-500' },
  { name: 'JavaScript', level: '80%', color: 'bg-yellow-500' },
  { name: 'React JS', level: '90%', color: 'bg-indigo-500' },
  { name: 'Node JS', level: '90%', color: 'bg-teal-500' },
  { name: 'Express JS', level: '90%', color: 'bg-red-500' },
  { name: 'Firebase Authentication', level: '90%', color: 'bg-purple-500' },
  { name: 'MongoDB', level: '90%', color: 'bg-orange-500' },
];

// SkillBar component
const SkillBar = ({ level, name, color }) => {
  return (
    <div className="mb-4 px-0 lg:px-20">
      <p className="font-semibold text-white">
        {name} <span className="text-white">{level}</span>
      </p>
      <div className="w-full bg-white rounded-full h-6">
        <div
          className={`${color} h-6 rounded-full progress-bar`}
          style={{ '--progress': level }}
        ></div>
      </div>
    </div>
  );
};

export default SkillBar;
