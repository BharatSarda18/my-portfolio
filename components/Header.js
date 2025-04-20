'use client';
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import useActiveSection from "@/hooks/use-active-section";
import { socialMediaDetails } from "@/data/constants";


const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [headerShrink, setHeaderShrink] = useState(false);
  const activeSection = useActiveSection();

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setHeaderShrink(true);
      } else {
        setHeaderShrink(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navItems = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#experience", label: "Experience" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header
      className={`fixed top-0 w-full bg-white shadow z-50 transition-all duration-300 ${
        headerShrink ? "py-2" : "py-4"
      }`}
      id="header"
    >
      <div className="container mx-auto px-4 md:px-6">
        <nav className="flex items-center justify-between">
          <a href="#home" className="text-primary font-bold text-xl md:text-2xl">
            Bharat<span className="text-secondary">Sarda</span>
          </a>

          {/* Mobile menu button */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden text-gray-600 focus:outline-none"
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex space-x-8 items-center">
            {navItems.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className={`nav-link font-medium transition-colors ${
                    activeSection === item.href.substring(1)
                      ? "text-secondary font-semibold"
                      : "text-gray-700 hover:text-secondary"
                  }`}
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li>
              <a 
                href={socialMediaDetails.resumeDownloadLink}
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-secondary hover:bg-secondary/80 text-white font-medium py-2 px-4 rounded-md transition-colors"
              >
                Resume
              </a>
            </li>
          </ul>
        </nav>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`md:hidden bg-white ${mobileMenuOpen ? "block" : "hidden"}`}
      >
        <ul className="flex flex-col space-y-4 px-4 py-6">
          {navItems.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className={`nav-link block font-medium transition-colors ${
                  activeSection === item.href.substring(1)
                    ? "text-secondary font-semibold"
                    : "text-gray-700 hover:text-secondary"
                }`}
                onClick={closeMobileMenu}
              >
                {item.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href={socialMediaDetails.resumeDownloadLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-secondary hover:bg-secondary/80 text-white font-medium py-2 px-4 rounded-md transition-colors"
              onClick={closeMobileMenu}
            >
              Resume
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;