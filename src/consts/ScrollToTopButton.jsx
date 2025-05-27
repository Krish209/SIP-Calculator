import React, { useState, useEffect } from "react";
import { FiArrowUp } from "react-icons/fi";

const ScrollToTopButton = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    visible && (
      <button
        onClick={scrollToTop}
        className="fixed bottom-2 right-2 sm:bottom-5 sm:right-5 bg-primary text-white p-2 sm:p-3 rounded-full shadow-lg hover:bg-primary-dark transition-all z-50"
        aria-label="Scroll to top"
      >
        <FiArrowUp className="w-4 h-4 sm:w-5 sm:h-5" />
      </button>
    )
  );
};

export default ScrollToTopButton;
