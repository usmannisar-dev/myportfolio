import { useEffect, useState } from "react";
import { ArrowUp, Sparkles } from "lucide-react";

export const ScrollToTopButton = () => {
  const [visible, setVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const documentHeight =
        document.documentElement.scrollHeight - window.innerHeight;

      const progress =
        documentHeight > 0
          ? Math.min((scrollTop / documentHeight) * 100, 100)
          : 0;

      setScrollProgress(progress);
      setVisible(scrollTop > 300);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!visible) return null;

  const radius = 25;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset =
    circumference - (scrollProgress / 100) * circumference;

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Scroll to top"
      title="Back to top"
      className="
        group
        fixed
        bottom-6 right-6
        sm:bottom-8 sm:right-8
        z-[60]

        w-14 h-14
        sm:w-16 sm:h-16

        rounded-full

        bg-background/80
        backdrop-blur-xl

        border border-primary/30

        shadow-2xl
        shadow-primary/25

        transition-all
        duration-500
        ease-out

        hover:-translate-y-1
        hover:scale-110
        hover:border-primary/70
        hover:shadow-primary/50

        active:scale-95

        focus:outline-none
        focus-visible:ring-2
        focus-visible:ring-primary
        focus-visible:ring-offset-2
        focus-visible:ring-offset-background

        animate-scroll-top-enter
      "
    >
      {/* =========================================================
          OUTER ROTATING RING
      ========================================================= */}
      <span
        className="
          pointer-events-none
          absolute
          -inset-1
          rounded-full
          border
          border-primary/20
          animate-scroll-top-ring
        "
      />

      {/* =========================================================
          SECOND DECORATIVE RING
      ========================================================= */}
      <span
        className="
          pointer-events-none
          absolute
          -inset-2
          rounded-full
          border
          border-primary/10
          opacity-0
          transition-all
          duration-500
          group-hover:opacity-100
          group-hover:scale-105
        "
      />

      {/* =========================================================
          SCROLL PROGRESS RING
      ========================================================= */}
      <svg
        className="
          pointer-events-none
          absolute
          inset-0
          w-full
          h-full
          -rotate-90
        "
        viewBox="0 0 64 64"
        aria-hidden="true"
      >
        {/* Background ring */}
        <circle
          cx="32"
          cy="32"
          r={radius}
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          className="text-primary/10"
        />

        {/* Progress ring */}
        <circle
          cx="32"
          cy="32"
          r={radius}
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          className="
            text-primary
            transition-all
            duration-300
          "
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
        />
      </svg>

      {/* =========================================================
          INNER GLOW
      ========================================================= */}
      <span
        className="
          pointer-events-none
          absolute
          inset-2
          rounded-full
          bg-primary/10
          opacity-60
          blur-md
          transition-all
          duration-500
          group-hover:bg-primary/20
          group-hover:opacity-100
        "
      />

      {/* =========================================================
          ANIMATED SHINE
      ========================================================= */}
      <span
        className="
          pointer-events-none
          absolute
          inset-0
          overflow-hidden
          rounded-full
        "
      >
        <span
          className="
            absolute
            top-0
            left-0
            h-full
            w-1/2
            -translate-x-[180%]
            rotate-12
            bg-gradient-to-r
            from-transparent
            via-white/20
            to-transparent
            transition-transform
            duration-700
            group-hover:translate-x-[300%]
          "
        />
      </span>

      {/* =========================================================
          CENTER CONTENT
      ========================================================= */}
      <span
        className="
          relative
          z-10
          flex
          h-full
          w-full
          items-center
          justify-center
        "
      >
        <ArrowUp
          className="
            w-5 h-5
            sm:w-6 sm:h-6

            text-primary

            transition-all
            duration-300

            group-hover:-translate-y-1
            group-hover:scale-110
          "
        />
      </span>

      {/* =========================================================
          SPARKLE
      ========================================================= */}
      <Sparkles
        className="
          pointer-events-none
          absolute
          -top-1
          -right-1

          w-3 h-3

          text-primary

          opacity-0
          scale-0

          transition-all
          duration-300

          group-hover:opacity-100
          group-hover:scale-100

          animate-scroll-top-sparkle
        "
      />

      {/* =========================================================
          HOVER GLOW
      ========================================================= */}
      <span
        className="
          pointer-events-none
          absolute
          inset-0
          rounded-full

          shadow-[0_0_0_0_rgba(139,92,246,0)]

          transition-all
          duration-500

          group-hover:shadow-[0_0_35px_8px_rgba(139,92,246,0.18)]
        "
      />
    </button>
  );
};
