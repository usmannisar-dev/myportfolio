import { Button } from "@/components/Button";
import { Menu, X, Sparkles, ArrowUpRight } from "lucide-react";
import { useEffect, useState } from "react";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // ============================================================
  // HANDLE SCROLL
  // ============================================================

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ============================================================
  // CLOSE MOBILE MENU ON ESCAPE
  // ============================================================

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => window.removeEventListener("keydown", handleEscape);
  }, []);

  return (
    <header
      className={`
        fixed
        top-0
        left-0
        right-0
        z-50
        transition-all
        duration-500
        ${isScrolled ? "py-3" : "py-5"}
      `}
    >
      {/* ========================================================
          OUTER NAVBAR GLOW
      ======================================================== */}

      <div
        className={`
          absolute
          left-1/2
          -translate-x-1/2
          top-0
          w-[80%]
          h-px
          bg-gradient-to-r
          from-transparent
          via-primary/40
          to-transparent
          transition-opacity
          duration-500
          ${isScrolled ? "opacity-100" : "opacity-0"}
        `}
      />

      {/* ========================================================
          NAVBAR
      ======================================================== */}

      <nav
        className={`
          container
          mx-auto
          px-6
          flex
          items-center
          justify-between
          transition-all
          duration-500
          ${
            isScrolled
              ? "glass-strong rounded-2xl border border-primary/10 shadow-[0_10px_40px_rgba(0,0,0,0.25)]"
              : ""
          }
        `}
      >
        {/* ======================================================
            LOGO
        ====================================================== */}

        <a
          href="#"
          className="
            relative
            group
            flex
            items-center
            gap-2
            text-xl
            font-bold
            tracking-tight
            transition-all
            duration-300
          "
        >
          {/* Logo glow */}

          <span
            className="
              absolute
              -inset-3
              rounded-full
              bg-primary/10
              blur-xl
              opacity-0
              group-hover:opacity-100
              transition-opacity
              duration-500
            "
          />

          {/* Logo */}

          <span className="relative">
            UN<span className="text-primary">.</span>
          </span>

          {/* Small status indicator */}

          <span
            className="
              relative
              flex
              items-center
              justify-center
              w-2
              h-2
            "
          >
            <span
              className="
                absolute
                w-4
                h-4
                rounded-full
                border
                border-primary/30
                animate-navbar-ring
              "
            />

            <span
              className="
                w-1.5
                h-1.5
                rounded-full
                bg-primary
                shadow-[0_0_10px_hsl(var(--primary)/0.9)]
                animate-pulse
              "
            />
          </span>
        </a>

        {/* ======================================================
            DESKTOP NAVIGATION
        ====================================================== */}

        <div className="hidden md:flex items-center gap-1">
          <div
            className="
              relative
              glass
              rounded-full
              px-2
              py-1.5
              flex
              items-center
              gap-1
              border
              border-white/[0.06]
              overflow-hidden
              shadow-[0_8px_30px_rgba(0,0,0,0.12)]
            "
          >
            {/* Moving shine */}

            <span
              className="
                absolute
                inset-y-0
                w-20
                bg-gradient-to-r
                from-transparent
                via-white/[0.04]
                to-transparent
                -translate-x-full
                animate-navbar-shine
                pointer-events-none
              "
            />

            {navLinks.map((link, index) => (
              <a
                href={link.href}
                key={index}
                className="
                  relative
                  group/nav
                  px-4
                  py-2
                  font-bold
                  text-sm
                  text-muted-foreground
                  rounded-full
                  transition-all
                  duration-300
                  hover:text-primary
                  hover:bg-surface
                "
              >
                {/* Hover glow */}

                <span
                  className="
                    absolute
                    inset-0
                    rounded-full
                    bg-primary/5
                    opacity-0
                    scale-90
                    group-hover/nav:opacity-100
                    group-hover/nav:scale-100
                    transition-all
                    duration-300
                  "
                />

                {/* Text */}

                <span className="relative z-10">{link.label}</span>

                {/* Bottom indicator */}

                <span
                  className="
                    absolute
                    bottom-1
                    left-1/2
                    -translate-x-1/2
                    w-0
                    h-px
                    bg-primary
                    shadow-[0_0_8px_hsl(var(--primary)/0.8)]
                    group-hover/nav:w-5
                    transition-all
                    duration-300
                  "
                />
              </a>
            ))}
          </div>
        </div>

        {/* ======================================================
            DESKTOP CTA
        ====================================================== */}

        <div className="hidden md:block">
          <a href="#contact" className="relative group/cta inline-block">
            {/* CTA glow */}

            <span
              className="
                absolute
                -inset-1
                rounded-xl
                bg-primary/30
                blur-md
                opacity-0
                group-hover/cta:opacity-100
                transition-opacity
                duration-500
              "
            />

            {/* CTA button */}

            <span className="relative block overflow-hidden rounded-xl">
              {/* Shine */}

              <span
                className="
                  absolute
                  inset-0
                  z-10
                  pointer-events-none
                  bg-gradient-to-r
                  from-transparent
                  via-white/20
                  to-transparent
                  -translate-x-full
                  group-hover/cta:translate-x-full
                  transition-transform
                  duration-700
                "
              />

              <Button
                size="sm"
                className="
                  relative
                  transition-all
                  duration-300
                  group-hover/cta:scale-[1.03]
                "
              >
                <span className="flex items-center gap-2">
                  Contact Me
                  <ArrowUpRight
                    className="
                      w-4
                      h-4
                      transition-transform
                      duration-300
                      group-hover/cta:translate-x-0.5
                      group-hover/cta:-translate-y-0.5
                    "
                  />
                </span>
              </Button>
            </span>
          </a>
        </div>

        {/* ======================================================
            MOBILE MENU BUTTON
        ====================================================== */}

        <button
          type="button"
          aria-label={
            isMobileMenuOpen ? "Close navigation menu" : "Open navigation menu"
          }
          aria-expanded={isMobileMenuOpen}
          className="
            md:hidden
            relative
            w-11
            h-11
            rounded-xl
            glass
            border
            border-primary/10
            flex
            items-center
            justify-center
            text-foreground
            cursor-pointer
            overflow-hidden
            transition-all
            duration-300
            hover:border-primary/30
            hover:bg-primary/5
            hover:scale-105
          "
          onClick={() => setIsMobileMenuOpen((prev) => !prev)}
        >
          {/* Button glow */}

          <span
            className="
              absolute
              inset-0
              rounded-xl
              bg-primary/5
              opacity-0
              hover:opacity-100
              transition-opacity
            "
          />

          {/* Icon */}

          <span className="relative">
            {isMobileMenuOpen ? (
              <X size={22} className="text-primary animate-navbar-icon" />
            ) : (
              <Menu size={22} className="animate-navbar-icon" />
            )}
          </span>
        </button>
      </nav>

      {/* ========================================================
          MOBILE MENU
      ======================================================== */}

      {isMobileMenuOpen && (
        <div className="md:hidden px-6 pt-3">
          <div
            className="
              relative
              glass-strong
              rounded-2xl
              border
              border-primary/10
              overflow-hidden
              shadow-[0_20px_60px_rgba(0,0,0,0.35)]
              animate-navbar-mobile
            "
          >
            {/* Top glow */}

            <div
              className="
                absolute
                top-0
                left-1/2
                -translate-x-1/2
                w-40
                h-px
                bg-gradient-to-r
                from-transparent
                via-primary/60
                to-transparent
              "
            />

            {/* Background glow */}

            <div
              className="
                absolute
                top-0
                right-0
                w-32
                h-32
                rounded-full
                bg-primary/5
                blur-3xl
                pointer-events-none
              "
            />

            <div className="relative container mx-auto px-6 py-6 flex flex-col gap-2">
              {/* Mobile menu heading */}

              <div className="flex items-center justify-center gap-2 mb-3 pb-3 border-b border-border/40">
                <Sparkles className="w-4 h-4 text-primary" />

                <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                  Navigation
                </span>
              </div>

              {/* Links */}

              {navLinks.map((link, index) => (
                <a
                  href={link.href}
                  key={index}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="
                    group/mobile
                    relative
                    flex
                    items-center
                    justify-center
                    py-3
                    px-4
                    rounded-xl
                    text-base
                    font-medium
                    text-muted-foreground
                    hover:text-primary
                    hover:bg-primary/5
                    transition-all
                    duration-300
                    animate-navbar-link
                  "
                  style={{
                    animationDelay: `${index * 60}ms`,
                  }}
                >
                  <span className="relative">
                    {link.label}

                    {/* Active-style hover line */}

                    <span
                      className="
                        absolute
                        -bottom-1
                        left-1/2
                        -translate-x-1/2
                        w-0
                        h-px
                        bg-primary
                        group-hover/mobile:w-full
                        transition-all
                        duration-300
                      "
                    />
                  </span>
                </a>
              ))}

              {/* Mobile CTA */}

              <div className="pt-3 mt-2 border-t border-border/40">
                <a href="#contact" className="block">
                  <Button
                    className="w-full group/mobile-cta"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <span className="flex items-center justify-center gap-2">
                      Contact Me
                      <ArrowUpRight
                        className="
                          w-4
                          h-4
                          transition-transform
                          duration-300
                          group-hover/mobile-cta:translate-x-0.5
                          group-hover/mobile-cta:-translate-y-0.5
                        "
                      />
                    </span>
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
