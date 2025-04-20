'use client';
import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";
import { Button } from "./ui/Button";


const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 500) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <Button
      onClick={scrollToTop}
      className={`fixed bottom-6 right-6 w-12 h-12 rounded-full bg-secondary text-white shadow-lg flex items-center justify-center hover:bg-secondary/80 focus:outline-none transition-all duration-300 p-0 ${
        isVisible ? "opacity-100 visible" : "opacity-0 invisible"
      }`}
      aria-label="Scroll to top"
    >
      <ArrowUp className="h-5 w-5" />
    </Button>
  );
};

export default ScrollToTop;
