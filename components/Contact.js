'use client';
import { useRef } from "react";
import useReveal from "@/hooks/use-reveal";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaCalendarAlt, FaGithub, FaLinkedinIn, FaTwitter, FaMediumM, FaPaperPlane } from "react-icons/fa";
import { socialMediaDetails } from "@/data/constants";

const Contact = () => {
  const titleRef = useRef(null);
  const infoRef = useRef(null);
  // Apply reveal animation
  useReveal(titleRef);
  useReveal(infoRef);
 
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div ref={titleRef} className="text-center mb-16 reveal">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Get In Touch</h2>
          <div className="w-24 h-1 bg-secondary mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-xl mx-auto">Have a project in mind or want to discuss a potential collaboration? I'd love to hear from you!</p>
        </div>
        
        <div className="w-full mx-auto">
          <div ref={infoRef} className="w-full">
            <div className="bg-primary text-white rounded-xl w-full overflow-hidden h-full">
              <div className="p-8">
                <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="w-10 h-10 rounded-full bg-white bg-opacity-20 flex items-center justify-center mr-4 flex-shrink-0">
                      <FaEnvelope className="text-white" />
                    </div>
                    <div>
                      <h4 className="text-white opacity-80 text-sm mb-1">Email Address</h4>
                      <a href={socialMediaDetails.gmail} className="font-medium hover:underline text-white">{socialMediaDetails.gmailStatic}</a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-10 h-10 rounded-full bg-white bg-opacity-20 flex items-center justify-center mr-4 flex-shrink-0">
                      <FaPhone className="text-white" />
                    </div>
                    <div>
                      <h4 className="text-white opacity-80 text-sm mb-1">Phone Number</h4>
                      <a href={`tel:${socialMediaDetails.contaxctnumber}`} className="font-medium hover:underline text-white">{socialMediaDetails.contaxctnumber}</a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-10 h-10 rounded-full bg-white bg-opacity-20 flex items-center justify-center mr-4 flex-shrink-0">
                      <FaMapMarkerAlt className="text-white" />
                    </div>
                    <div>
                      <h4 className="text-white opacity-80 text-sm mb-1">Location</h4>
                      <p className="font-medium">{socialMediaDetails.location}</p>
                    </div>
                  </div>
                  
                </div>
                
                <div className="mt-12">
                  <h4 className="text-white text-lg font-medium mb-4">Connect with me</h4>
                  <div className="flex space-x-4">
                    <a 
                      href={socialMediaDetails.github}
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-white bg-opacity-20 flex items-center justify-center hover:bg-opacity-30 transition-colors" 
                      aria-label="GitHub"
                    >
                      <FaGithub className="text-white" />
                    </a>
                    <a 
                      href={socialMediaDetails.linkedin}
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-white bg-opacity-20 flex items-center justify-center hover:bg-opacity-30 transition-colors" 
                      aria-label="LinkedIn"
                    >
                      <FaLinkedinIn className="text-white" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Contact;