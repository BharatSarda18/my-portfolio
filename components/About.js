'use client';
import { useRef } from "react";
import { Card } from "./ui/Card";
import useReveal from "@/hooks/use-reveal";


const About = () => {
  const titleRef = useRef(null);
  const imageRef = useRef(null);
  const contentRef = useRef(null);

  // Apply reveal animation
  useReveal(titleRef);
  useReveal(imageRef);
  useReveal(contentRef);

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div ref={titleRef} className="text-center mb-16 reveal">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">About Me</h2>
          <div className="w-24 h-1 bg-secondary mx-auto"></div>
        </div>
        
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div ref={imageRef} className="w-full md:w-2/5 reveal">
            <div className="relative">
              <div className="absolute top-5 -left-5 w-full h-full border-2 border-secondary rounded-2xl -z-10"></div>
              <Card className="overflow-hidden rounded-2xl shadow-lg border-0">
                <img 
                  src="https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
                  alt="John Doe working on code" 
                  className="w-full h-auto object-cover"
                />
              </Card>
            </div>
          </div>
          
          <div ref={contentRef} className="w-full md:w-3/5 reveal">
            <h3 className="text-2xl font-semibold text-primary mb-4">Who am I?</h3>
            <p className="text-gray-700 mb-6">
              I'm a passionate Full Stack Software Engineer with 3 years of experience in building web applications. 
              I specialize in JavaScript technologies across the entire stack (MERN, MEAN) and have a strong foundation in software engineering principles.
            </p>
            <p className="text-gray-700 mb-6">
              My journey in software development began during my computer science studies, where I discovered my passion for creating elegant solutions to complex problems. 
              Since then, I've worked on various projects ranging from e-commerce platforms to data visualization dashboards.
            </p>
            <p className="text-gray-700 mb-10">
              When I'm not coding, you can find me contributing to open-source projects, mentoring junior developers, or exploring new technologies through side projects.
            </p>
            
            <div className="grid grid-cols-2 gap-6 text-gray-700">
              <div>
                <p><strong className="text-primary">Name:</strong> Bharat Sarda</p>
                <p><strong className="text-primary">Email:</strong> sardabharat71@gmail.com</p>
                <p><strong className="text-primary">Location:</strong> Noida, Uttar Pradesh, India</p>
              </div>
              <div>
                <p><strong className="text-primary">Experience:</strong> 3+ Years</p>
                <p><strong className="text-primary">Availability:</strong> Full-time</p>
                <p><strong className="text-primary">Remote:</strong> Available</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
