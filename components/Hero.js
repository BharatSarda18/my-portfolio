'use client';
import { useRef } from "react";
import { FaDownload, FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";
//import { FaDownload, FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";
import useReveal from "@/hooks/use-reveal";
import { Button } from "./ui/Button";
import { Card } from "./ui/Card";

const Hero = () => {
  const contentRef = useRef(null);
  const imageRef = useRef(null);
  const socialRef = useRef(null);

  // Apply reveal animation
  useReveal(contentRef);
  useReveal(imageRef);
  useReveal(socialRef);

  return (
    <section id="home" className="pt-24 md:pt-36 pb-16 md:pb-28 bg-gray-50 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div ref={contentRef} className="w-full md:w-1/2 mb-12 md:mb-0 reveal">
            <span className="text-secondary font-medium">Hello, I'm</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mt-2 mb-4">Bharat Sarda</h1>
            <h2 className="text-2xl md:text-3xl text-gray-700 font-semibold mb-6">Full Stack Software Engineer</h2>
            <p className="text-gray-600 text-lg mb-10 max-w-lg">
              Building innovative web solutions with cutting-edge technologies. 3+ years of experience crafting robust and scalable applications.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#contact">
                <Button size="lg" className="bg-primary hover:bg-primary/80 text-white">
                  Get in touch
                </Button>
              </a>
              <a href="/John_Doe_Resume.pdf" target="_blank" rel="noopener noreferrer">
                <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-gray-50">
                  Download Resume <FaDownload className="ml-2" />
                </Button>
              </a>
            </div>
          </div>
          
          <div ref={imageRef} className="w-full md:w-2/5 reveal">
            <div className="relative">
              <div className="absolute -top-20 -right-20 w-64 h-64 bg-secondary opacity-10 rounded-full filter blur-3xl"></div>
              <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-primary opacity-10 rounded-full filter blur-3xl"></div>
              <Card className="w-full overflow-hidden rounded-2xl shadow-xl">
                
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80" 
                  alt="John Doe - Developer" 
                  className="w-full h-auto object-cover relative z-10"
                />
              </Card>
            </div>
          </div>
        </div>
        
        <div ref={socialRef} className="flex justify-center md:justify-start mt-16 reveal">
          <div className="flex space-x-6">
            <a 
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-primary transition-colors text-2xl"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
            <a 
              href="https://linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-primary transition-colors text-2xl"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
            <a 
              href="https://twitter.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-primary transition-colors text-2xl"
              aria-label="Twitter"
            >
              <FaTwitter />
            </a>
            <a 
              href="mailto:contact@johndoe.com"
              className="text-gray-600 hover:text-primary transition-colors text-2xl"
              aria-label="Email"
            >
              <FaEnvelope />
            </a>
          </div>
        </div>
      </div>
      
      <div className="absolute top-1/2 -translate-y-1/2 right-0 w-96 h-96 bg-secondary opacity-5 rounded-full filter blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary opacity-5 rounded-full filter blur-3xl -z-10"></div>
    </section>
  );
};

export default Hero;
