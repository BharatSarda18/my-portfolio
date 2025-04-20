'use client';
import { useRef } from "react";
import { FaCode, FaServer, FaTools, FaMobileAlt, FaChartPie, FaUsers } from "react-icons/fa";
import useReveal from "@/hooks/use-reveal";
import { portfolioData } from "@/data/portfolioData";

const SkillCategory = ({  icon: Icon, title, skills,forwardedRef}) => (
  <div ref={forwardedRef} className="bg-white p-8 rounded-xl shadow-md border border-gray-100 transition-all hover:shadow-lg reveal">
    <div className="text-primary mb-4 flex items-center">
      <Icon className="text-3xl mr-4" />
      <h3 className="text-xl font-semibold">{title}</h3>
    </div>
    <ul className="space-y-3">
      {skills.map((skill, index) => (
        <li key={index} className="flex items-center">
          <span className="w-2 h-2 bg-secondary rounded-full mr-2"></span>
          <span>{skill}</span>
        </li>
      ))}
    </ul>
  </div>
);

const Skills = () => {
  const titleRef = useRef(null);
  const frontendRef = useRef(null);
  const backendRef = useRef(null);
  const devopsRef = useRef(null);
  const mobileRef = useRef(null);
  const dataRef = useRef(null);
  const softRef = useRef(null);

  // Apply reveal animation
  useReveal(titleRef);
  useReveal(frontendRef);
  useReveal(backendRef);
  useReveal(devopsRef);
  useReveal(mobileRef);
  useReveal(dataRef);
  useReveal(softRef);

  const { skills } = portfolioData;

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div ref={titleRef} className="text-center mb-16 reveal">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Technical Skills</h2>
          <div className="w-24 h-1 bg-secondary mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-xl mx-auto">A comprehensive list of my technical skills and technologies I've worked with</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <SkillCategory 
            icon={FaCode} 
            title="Frontend Development" 
            skills={skills.frontend}
            forwardedRef={frontendRef}
          />
          
          <SkillCategory 
            icon={FaServer} 
            title="Backend Development" 
            skills={skills.backend}
            forwardedRef={backendRef}
          />
          
          <SkillCategory 
            icon={FaTools} 
            title="DevOps & Tools" 
            skills={skills.devops}
            forwardedRef={devopsRef}
          />
          
          <SkillCategory 
            icon={FaMobileAlt} 
            title="Mobile Development" 
            skills={skills.mobile}
            forwardedRef={mobileRef}
          />
          
          <SkillCategory 
            icon={FaChartPie} 
            title="Data & Analytics" 
            skills={skills.data}
            forwardedRef={dataRef}
          />
          
          <SkillCategory 
            icon={FaUsers} 
            title="Soft Skills" 
            skills={skills.soft}
            forwardedRef={softRef}
          />
        </div>
      </div>
    </section>
  );
};

export default Skills;
