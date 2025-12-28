import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

export const ScrollToTopButton = () => {
  const [visible, setVisible] = useState(false);

  // Show button after scrolling 300px
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) setVisible(true);
      else setVisible(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!visible) return null;

  return (
    <button
      onClick={scrollToTop}
      className="
        fixed bottom-8 right-8 
        w-12 h-12 
        bg-primary
        text-white rounded-full 
        shadow-2xl shadow-purple-500/50
        flex items-center justify-center
        hover:scale-110 animate-bounce
        active:scale-95 
        transition-all duration-300
        z-50
        animate-fadeIn
        ring-2 ring-purple-400/50 ring-offset-2
        hover:ring-offset-4
      "
      title="Go to top"
    >
      <ArrowUp className="w-6 h-6 animate-spin-slow" />
    </button>
  );
};
