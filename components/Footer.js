import { FaGithub, FaLinkedinIn, FaTwitter, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-primary text-white py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold">Bharat<span className="text-secondary">Sarda</span></h2>
            <p className="text-gray-300 mt-2">Full Stack Software Engineer</p>
          </div>
          
          <div className="flex space-x-6 mb-6 md:mb-0">
            <a 
              href="https://github.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white transition-colors text-xl" 
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
            <a 
              href="https://linkedin.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white transition-colors text-xl" 
              aria-label="LinkedIn"
            >
              <FaLinkedinIn />
            </a>
            <a 
              href="https://twitter.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white transition-colors text-xl" 
              aria-label="Twitter"
            >
              <FaTwitter />
            </a>
            <a 
              href="mailto:contact@johndoe.com" 
              className="text-gray-300 hover:text-white transition-colors text-xl" 
              aria-label="Email"
            >
              <FaEnvelope />
            </a>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-300 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} John Doe. All rights reserved.
          </p>
          
          <div className="flex space-x-6">
            <a href="#home" className="text-gray-300 hover:text-white text-sm transition-colors">Home</a>
            <a href="#about" className="text-gray-300 hover:text-white text-sm transition-colors">About</a>
            <a href="#projects" className="text-gray-300 hover:text-white text-sm transition-colors">Projects</a>
            <a href="#contact" className="text-gray-300 hover:text-white text-sm transition-colors">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
