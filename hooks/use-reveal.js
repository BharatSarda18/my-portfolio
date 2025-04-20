import { useEffect } from "react";

/**
 * Custom hook to create a reveal animation for elements when they come into view
 * @param ref - React ref object for the target element
 */
const useReveal = (ref) => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
            // Once the animation has played, we can unobserve the element
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1, // Trigger when at least 10% of the element is visible
        rootMargin: "0px 0px -50px 0px" // Trigger slightly before the element comes into view
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [ref]);
};

export default useReveal;