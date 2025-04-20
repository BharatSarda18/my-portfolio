'use client';
import { useRef } from "react";
import { portfolioData } from "@/data/portfolioData";
import useReveal from "@/hooks/use-reveal";


const ExperienceItem = ({ experience, forwardedRef }) => {
  return (
    <div ref={forwardedRef} className="mb-12 relative pl-8 border-l-2 border-secondary reveal">
      <div className="absolute -left-3 top-0 w-6 h-6 bg-secondary rounded-full flex items-center justify-center">
        <div className="w-3 h-3 bg-white rounded-full"></div>
      </div>
      
      <div className="bg-white p-6 rounded-xl shadow-md">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
          <h3 className="text-xl font-semibold text-primary">{experience.title}</h3>
          <div className="flex items-center mt-2 md:mt-0">
            <span className="text-gray-600 text-sm bg-gray-100 py-1 px-3 rounded-full">{experience.period}</span>
          </div>
        </div>
        
        <h4 className="text-gray-700 font-medium mb-4">{experience.company}</h4>
        <p className="text-gray-600 mb-6">
          {experience.description}
        </p>
        
        <div className="flex flex-wrap gap-2">
          {experience.technologies.map((tech, index) => {
            const tagColors ={
              "React.js": "bg-blue-100 text-blue-700",
              TypeScript: "bg-green-100 text-green-700",
              Redux: "bg-purple-100 text-purple-700",
              "Next.js": "bg-yellow-100 text-yellow-700",
              Jest: "bg-red-100 text-red-700",
              MongoDB: "bg-blue-100 text-blue-700",
              "Express.js": "bg-green-100 text-green-700",
              "Node.js": "bg-yellow-100 text-yellow-700",
              AWS: "bg-red-100 text-red-700",
              HTML5: "bg-blue-100 text-blue-700",
              CSS3: "bg-green-100 text-green-700",
              JavaScript: "bg-yellow-100 text-yellow-700",
              jQuery: "bg-purple-100 text-purple-700",
              WordPress: "bg-red-100 text-red-700"
            };

            const colorClass = tagColors[tech] || "bg-gray-100 text-gray-700";

            return (
              <span
                key={index}
                className={`text-xs font-medium ${colorClass} py-1 px-2 rounded`}
              >
                {tech}
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
};

const Experience = () => {
  const titleRef = useRef(null);
  const exp1Ref = useRef(null);
  const exp2Ref = useRef(null);
  const exp3Ref = useRef(null);

  // Apply reveal animation
  useReveal(titleRef);
  useReveal(exp1Ref);
  useReveal(exp2Ref);
  useReveal(exp3Ref);

  const { experiences } = portfolioData;

  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div ref={titleRef} className="text-center mb-16 reveal">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Work Experience</h2>
          <div className="w-24 h-1 bg-secondary mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-xl mx-auto">My professional journey and corporate experience</p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <ExperienceItem experience={experiences[0]} forwardedRef={exp1Ref} />
          <ExperienceItem experience={experiences[1]} forwardedRef={exp2Ref} />
          <ExperienceItem experience={experiences[2]} forwardedRef={exp3Ref} />
        </div>
      </div>
    </section>
  );
};

export default Experience;
