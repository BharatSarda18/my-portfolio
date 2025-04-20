import { useState, useEffect } from "react";

/**
 * Custom hook to track which section is currently active in the viewport
 * Used to highlight the corresponding navigation link
 */
const useActiveSection = () => {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section[id]");
      const scrollPosition = window.scrollY + 100; // Add offset to account for header height

      sections.forEach((section) => {
        const sectionEl = section;
        const sectionTop = sectionEl.offsetTop;
        const sectionHeight = sectionEl.offsetHeight;
        const sectionId = sectionEl.getAttribute("id") || "";

        if (
          scrollPosition >= sectionTop &&
          scrollPosition < sectionTop + sectionHeight
        ) {
          setActiveSection(sectionId);
        }
      });

      // If we're at the top of the page and no section is active yet, set 'home' as active
      if (scrollPosition < 300) {
        setActiveSection("home");
      }
    };

    // Initial check
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return activeSection;
};

export default useActiveSection;