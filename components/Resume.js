'use client';
import { useRef } from "react";
import { FaDownload, FaLinkedin, FaGithub, FaFilePdf } from "react-icons/fa";
import useReveal from "@/hooks/use-reveal";
import { Card, CardContent } from "./ui/Card";

const Resume = () => {
  const contentRef = useRef(null);
  const linksRef = useRef(null);

  // Apply reveal animation
  useReveal(contentRef);
  useReveal(linksRef);

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div ref={contentRef} className="max-w-4xl mx-auto text-center reveal">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">My Resume</h2>
          <p className="text-gray-600 mb-10 max-w-xl mx-auto">
            Download my resume to see all the details of my professional experience, skills and education.
          </p>
          
          <Card className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 mb-10">
            <CardContent className="p-0 flex flex-col items-center">
              <FaFilePdf className="text-primary text-5xl mb-4" />
              <h3 className="text-xl font-semibold text-primary mb-2">Bharat_Sarda_Resume.pdf</h3>
              <p className="text-gray-600 mb-6">Last updated: April 2025</p>
              <a 
                href="/John_Doe_Resume.pdf" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-primary hover:bg-primary/80 text-white font-medium py-3 px-6 rounded-md transition-colors inline-flex items-center"
              >
                <FaDownload className="mr-2" /> Download Resume
              </a>
            </CardContent>
          </Card>
          
          <div ref={linksRef} className="flex flex-wrap justify-center gap-4 reveal">
            <a 
              href="https://linkedin.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center bg-[#0A66C2] hover:bg-[#084E99] text-white font-medium py-3 px-6 rounded-md transition-colors"
            >
              <FaLinkedin className="mr-2" /> LinkedIn Profile
            </a>
            <a 
              href="https://github.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center bg-[#24292F] hover:bg-[#1a1e23] text-white font-medium py-3 px-6 rounded-md transition-colors"
            >
              <FaGithub className="mr-2" /> GitHub Profile
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
