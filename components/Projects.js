'use client';
import { useRef } from "react";
import { FaGithub, FaExternalLinkAlt, FaArrowRight } from "react-icons/fa";
import useReveal from "@/hooks/use-reveal";
import { portfolioData } from "@/data/portfolioData";
import { socialMediaDetails } from "@/data/constants";

const ProjectCard = ({ project,forwardedRef }) => (
  <div 
    ref={forwardedRef} 
    className="bg-white rounded-xl overflow-hidden shadow-md border border-gray-100 transition-all hover:shadow-xl hover:-translate-y-1 reveal"
  >
    <div className="h-48 overflow-hidden">
      <img 
        src={project.image} 
        alt={project.title} 
        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
      />
    </div>
    <div className="p-6">
      <h3 className="text-xl font-semibold text-primary mb-2">{project.title}</h3>
      <p className="text-gray-600 mb-4">
        {project.description}
      </p>
      <div className="flex flex-wrap gap-2 mb-6">
        {project.tags.map((tag, index) => {
          const tagColors = {
            React: "bg-blue-100 text-blue-700",
            "Node.js": "bg-green-100 text-green-700",
            MongoDB: "bg-yellow-100 text-yellow-700",
            Redux: "bg-purple-100 text-purple-700",
            "Socket.IO": "bg-red-100 text-red-700",
            Express: "bg-gray-100 text-gray-700",
            "D3.js": "bg-purple-100 text-purple-700",
            Firebase: "bg-orange-100 text-orange-700",
            "Material UI": "bg-pink-100 text-pink-700",
            TypeScript: "bg-blue-100 text-blue-700",
            "Next.js": "bg-black bg-opacity-10 text-gray-700",
            Jest: "bg-red-100 text-red-700",
            AWS: "bg-yellow-100 text-yellow-700"
          };
          
          const colorClass = tagColors[tag] || "bg-gray-100 text-gray-700";

          return (
            <span 
              key={index} 
              className={`text-xs font-medium ${colorClass} py-1 px-2 rounded`}
            >
              {tag}
            </span>
          );
        })}
      </div>
      <div className="flex justify-between">
        <a 
          href={project.demoLink} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-secondary hover:text-secondary/80 transition-colors font-medium flex items-center"
        >
          <FaExternalLinkAlt className="mr-1" size={14} /> Live Demo
        </a>
        <a 
          href={project.repoLink} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-primary hover:text-primary/80 transition-colors font-medium flex items-center"
        >
          <FaGithub className="mr-1" size={14} /> Repository
        </a>
      </div>
    </div>
  </div>
);

const Projects = () => {
  const titleRef = useRef(null);
  const project1Ref = useRef(null);
  const project2Ref = useRef(null);
  const project3Ref = useRef(null);
  const moreProjectsRef = useRef(null);

  // Apply reveal animation
  useReveal(titleRef);
  useReveal(project1Ref);
  useReveal(project2Ref);
  useReveal(project3Ref);
  useReveal(moreProjectsRef);

  const { projects } = portfolioData;

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div ref={titleRef} className="text-center mb-16 reveal">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Featured Projects</h2>
          <div className="w-24 h-1 bg-secondary mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-xl mx-auto">Showcasing some of my best work and technical achievements</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ProjectCard project={projects[0]} forwardedRef={project1Ref} />
          <ProjectCard project={projects[1]} forwardedRef={project2Ref} />
          <ProjectCard project={projects[2]} forwardedRef={project3Ref} />
        </div>
        
        <div ref={moreProjectsRef} className="text-center mt-12 reveal">
          <a 
            href={socialMediaDetails.github} 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-primary hover:text-primary/80 font-medium transition-colors"
          >
            View more projects on GitHub <FaArrowRight className="ml-2" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
