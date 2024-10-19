import React, { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div>
      {isVisible && (
        <div className="fixed bottom-10 right-10">
          <button
            onClick={scrollToTop}
            className="py-4 px-4 bg-primary text-white rounded-full shadow-lg hover:bg-secondary transition"
          >
            <FaArrowUp size={20} />
          </button>
        </div>
      )}
    </div>
  );
};

export default ScrollToTop;
