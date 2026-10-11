import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export const BackToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  if (!isVisible) return null;

  return (
    <button
      onClick={scrollToTop}
      className="no-print fixed bottom-6 right-6 z-30 p-3 rounded-full bg-forest-800 text-ivory-100 shadow-medium hover:bg-forest-900 hover:scale-105 active:scale-95 transition-all border border-forest-700/80 focus:outline-hidden"
      aria-label="Back to top"
      title="Back to top"
    >
      <ArrowUp className="w-5 h-5 text-ivory-100" />
    </button>
  );
};
