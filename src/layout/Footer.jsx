import {
  Github,
  Linkedin,
  Heart,
  Instagram,
  ArrowUp,
  Sparkles,
  ArrowUpRight,
} from "lucide-react";

const socialLinks = [
  {
    icon: Github,
    href: "https://github.com/usmannisar-dev",
    label: "GitHub",
  },
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/in/usman-nisar-57a9b0300",
    label: "LinkedIn",
  },
  {
    icon: Instagram,
    href: "https://www.instagram.com/uchohan804",
    label: "Instagram",
  },
];

const footerLinks = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative pt-16 pb-8 overflow-hidden">
      {/* ========================================================
          PREMIUM BACKGROUND
      ======================================================== */}

      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Top glow */}

        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-primary/5 blur-[100px] rounded-full" />

        {/* Left glow */}

        <div className="absolute bottom-0 left-[10%] w-64 h-64 bg-primary/[0.035] blur-[100px] rounded-full animate-footer-glow" />

        {/* Right glow */}

        <div className="absolute bottom-0 right-[10%] w-64 h-64 bg-highlight/[0.035] blur-[100px] rounded-full animate-footer-glow-reverse" />

        {/* Technical grid */}

        <div className="absolute inset-0 footer-grid opacity-30" />

        {/* Floating particles */}

        <span className="absolute top-[30%] left-[15%] w-1 h-1 rounded-full bg-primary/60 animate-footer-particle" />

        <span className="absolute top-[45%] right-[18%] w-1.5 h-1.5 rounded-full bg-primary/40 animate-footer-particle-delay" />

        <span className="absolute bottom-[25%] left-[30%] w-1 h-1 rounded-full bg-highlight/50 animate-footer-particle-slow" />

        <span className="absolute bottom-[30%] right-[30%] w-1 h-1 rounded-full bg-primary/50 animate-footer-particle" />
      </div>

      {/* ========================================================
          TOP DECORATIVE LINE
      ======================================================== */}

      <div className="relative flex justify-center mb-14">
        <div className="relative w-full max-w-6xl h-px bg-gradient-to-r from-transparent via-border to-transparent">
          {/* Moving light */}

          <span className="absolute top-0 left-0 w-32 h-px bg-gradient-to-r from-transparent via-primary/70 to-transparent animate-footer-line" />

          {/* Center glow */}

          <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-6 bg-primary/10 blur-xl rounded-full" />
        </div>
      </div>

      {/* ========================================================
          MAIN CONTAINER
      ======================================================== */}

      <div className="container mx-auto px-6 relative z-10">
        {/* ======================================================
            MAIN FOOTER CONTENT
        ====================================================== */}

        <div className="grid md:grid-cols-3 gap-12 items-center">
          {/* ====================================================
              LOGO & COPYRIGHT
          ==================================================== */}

          <div className="text-center md:text-left">
            {/* Logo */}

            <a
              href="#"
              className="
                relative
                inline-flex
                items-center
                gap-2
                text-2xl
                font-bold
                tracking-tight
                group
              "
            >
              {/* Glow */}

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

              <span className="relative">
                UN<span className="text-primary">.</span>
              </span>

              {/* Status */}

              <span className="relative flex items-center justify-center w-2 h-2">
                <span className="absolute w-4 h-4 rounded-full border border-primary/30 animate-footer-ring" />

                <span className="w-1.5 h-1.5 rounded-full bg-primary shadow-[0_0_10px_hsl(var(--primary)/0.9)] animate-pulse" />
              </span>
            </a>

            <p className="text-sm text-muted-foreground mt-3">
              © {currentYear} Usman Nisar. All rights reserved.
            </p>

            {/* Small developer badge */}

            <div className="flex justify-center md:justify-start mt-4">
              <div
                className="
                  inline-flex
                  items-center
                  gap-2
                  px-3
                  py-1.5
                  rounded-full
                  border
                  border-primary/10
                  bg-primary/[0.03]
                  text-xs
                  text-muted-foreground
                "
              >
                <Sparkles className="w-3 h-3 text-primary" />

                <span>Software Engineer</span>
              </div>
            </div>
          </div>

          {/* ====================================================
              FOOTER NAVIGATION
          ==================================================== */}

          <nav className="flex flex-wrap justify-center gap-x-7 gap-y-4">
            {footerLinks.map((link, index) => (
              <a
                key={link.href}
                href={link.href}
                className="
                  relative
                  group/footer-link
                  text-sm
                  text-muted-foreground
                  hover:text-primary
                  transition-all
                  duration-300
                "
              >
                <span>{link.label}</span>

                {/* Animated underline */}

                <span
                  className="
                    absolute
                    -bottom-2
                    left-1/2
                    -translate-x-1/2
                    w-0
                    h-px
                    bg-primary
                    shadow-[0_0_8px_hsl(var(--primary)/0.8)]
                    group-hover/footer-link:w-full
                    transition-all
                    duration-300
                  "
                />

                {/* Tiny dot */}

                <span
                  className="
                    absolute
                    -top-1
                    -right-2
                    w-1
                    h-1
                    rounded-full
                    bg-primary
                    opacity-0
                    scale-0
                    group-hover/footer-link:opacity-100
                    group-hover/footer-link:scale-100
                    transition-all
                    duration-300
                  "
                />
              </a>
            ))}
          </nav>

          {/* ====================================================
              SOCIAL LINKS
          ==================================================== */}

          <div className="flex items-center justify-center md:justify-end gap-3">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  relative
                  group/social
                  w-11
                  h-11
                  rounded-xl
                  glass
                  border
                  border-border/50
                  flex
                  items-center
                  justify-center
                  overflow-hidden
                  transition-all
                  duration-500
                  hover:border-primary/30
                  hover:bg-primary/10
                  hover:-translate-y-1
                "
              >
                {/* Glow */}

                <span
                  className="
                    absolute
                    -inset-1
                    rounded-xl
                    bg-primary/20
                    blur-md
                    opacity-0
                    group-hover/social:opacity-100
                    transition-opacity
                    duration-500
                  "
                />

                {/* Shine */}

                <span
                  className="
                    absolute
                    inset-0
                    bg-gradient-to-r
                    from-transparent
                    via-white/[0.08]
                    to-transparent
                    -translate-x-full
                    group-hover/social:translate-x-full
                    transition-transform
                    duration-700
                  "
                />

                {/* Icon */}

                <social.icon
                  className="
                    relative
                    z-10
                    w-5
                    h-5
                    text-muted-foreground
                    group-hover/social:text-primary
                    group-hover/social:scale-110
                    transition-all
                    duration-300
                  "
                />

                {/* Hover ring */}

                <span
                  className="
                    absolute
                    inset-0
                    rounded-xl
                    border
                    border-primary/30
                    scale-75
                    opacity-0
                    group-hover/social:scale-100
                    group-hover/social:opacity-100
                    transition-all
                    duration-500
                  "
                />
              </a>
            ))}
          </div>
        </div>

        {/* ======================================================
            BOTTOM DIVIDER
        ====================================================== */}

        <div className="relative mt-12 mb-8">
          <div className="h-px bg-gradient-to-r from-transparent via-border/60 to-transparent" />

          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 px-4 bg-background">
            <div className="flex items-center gap-2">
              <span className="w-1 h-1 rounded-full bg-primary/50" />

              <span className="w-1.5 h-1.5 rounded-full bg-primary shadow-[0_0_8px_hsl(var(--primary)/0.7)]" />

              <span className="w-1 h-1 rounded-full bg-primary/50" />
            </div>
          </div>
        </div>

        {/* ======================================================
            BOTTOM COPYRIGHT MESSAGE
        ====================================================== */}

        <div className="flex flex-col sm:flex-row items-center justify-center gap-2 text-xs text-muted-foreground/70">
          <span>Designed & built with</span>

          <Heart
            className="
              w-3.5
              h-3.5
              text-primary
              fill-primary
              animate-footer-heart
            "
          />

          <span>by Usman Nisar</span>
        </div>

        {/* ======================================================
            BACK TO TOP
        ====================================================== */}

        <div className="flex justify-center mt-7">
          <a
            href="#"
            aria-label="Back to top"
            className="
              relative
              group/top
              w-10
              h-10
              rounded-full
              border
              border-border/50
              glass
              flex
              items-center
              justify-center
              hover:border-primary/40
              hover:bg-primary/10
              transition-all
              duration-400
              hover:-translate-y-1
            "
          >
            {/* Glow */}

            <span
              className="
                absolute
                -inset-1
                rounded-full
                bg-primary/20
                blur-md
                opacity-0
                group-hover/top:opacity-100
                transition-opacity
                duration-500
              "
            />

            <ArrowUp
              className="
                relative
                z-10
                w-4
                h-4
                text-muted-foreground
                group-hover/top:text-primary
                group-hover/top:-translate-y-0.5
                transition-all
                duration-300
              "
            />
          </a>
        </div>
      </div>
    </footer>
  );
};
