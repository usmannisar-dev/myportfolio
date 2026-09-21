import { useMemo } from "react";

import { Button } from "@/components/Button";

import {
  ArrowRight,
  ChevronDown,
  Github,
  Linkedin,
  Download,
  Instagram,
  Sparkles,
  Code2,
  Brain,
  Layers3,
} from "lucide-react";

import { AnimatedBorderButton } from "../components/AnimatedBorderButton";

// ============================================================
// TECHNOLOGY IMAGES
// ============================================================

import html from "@/assets/html.png";
import css from "@/assets/css.png";
import bootstrap from "@/assets/bootstrap.png";
import mui from "@/assets/mui.png";
import tailwindcss from "@/assets/tailwindcss.png";
import js from "@/assets/js.png";
import react from "@/assets/react.svg";
import nextjs from "@/assets/nextjs.png";
import nodejs from "@/assets/nodejs.png";
import mongodb from "@/assets/mongodb.png";
import expressjs from "@/assets/expressjs.png";
import vercel from "@/assets/vercel.png";
import netlify from "@/assets/netlify.png";
import github from "@/assets/github.png";
import redux from "@/assets/redux.png";
import vscode from "@/assets/vscode.png";
import docker from "@/assets/docker.png";
import kubernetes from "@/assets/kubernates.png";
import cicd from "@/assets/cicd.png";
import aspNet from "@/assets/aspNet.jpg";
import CSharppp from "@/assets/CSharppp.png";
import Csharp from "@/assets/Csharp.png";

// ============================================================
// OPTIONAL ASSETS
// Uncomment these ONLY if the files actually exist.
// ============================================================

// import angular from "@/assets/angular.png";
// import typescript from "@/assets/typescript.png";
// import gemini from "@/assets/gemini.png";

// ============================================================
// SKILLS
// ============================================================

const skills = [
  { name: "HTML5", img: html },
  { name: "CSS3", img: css },
  { name: "Bootstrap", img: bootstrap },
  { name: "Tailwind CSS", img: tailwindcss },
  { name: "Material UI", img: mui },
  { name: "JavaScript", img: js },
  { name: "React.js", img: react },
  { name: "Next.js", img: nextjs },
  { name: "Node.js", img: nodejs },
  { name: "Express.js", img: expressjs },
  { name: "MongoDB", img: mongodb },
  { name: "Redux Toolkit", img: redux },

  // ==========================================================
  // ADD THESE WHEN ASSETS EXIST
  // ==========================================================

  // { name: "Angular", img: angular },
  // { name: "TypeScript", img: typescript },
  // { name: "Gemini API", img: gemini },

  { name: "GitHub", img: github },
  { name: "Vercel", img: vercel },
  { name: "Netlify", img: netlify },
  { name: "VS Code", img: vscode },
  { name: "CI/CD", img: cicd },
  { name: "Docker", img: docker },
  { name: "Kubernetes", img: kubernetes },
  { name: "C#", img: Csharp },
  { name: "ASP.NET Core", img: aspNet },
  { name: "ASP.NET Core MVC", img: CSharppp },
];

// ============================================================
// HERO COMPONENT
// ============================================================

export const Hero = () => {
  // ==========================================================
  // STABLE PARTICLES
  // ==========================================================
  // useMemo prevents Math.random() from changing on every render.
  // ==========================================================

  const particles = useMemo(() => {
    return Array.from({ length: 35 }, (_, index) => ({
      id: index,
      left: `${(index * 37.7) % 100}%`,
      top: `${(index * 61.3) % 100}%`,
      size: index % 3 === 0 ? "6px" : index % 2 === 0 ? "4px" : "3px",
      duration: `${14 + (index % 8) * 2}s`,
      delay: `${(index % 6) * 0.8}s`,
    }));
  }, []);

  // ==========================================================
  // RENDER
  // ==========================================================

  return (
    <section
      id="home"
      className="
        relative
        min-h-screen
        flex
        items-center
        overflow-hidden
        bg-background
      "
    >
      {/* ======================================================
          BACKGROUND IMAGE
      ====================================================== */}

      <div className="absolute inset-0">
        <img
          src="/hero-bg.jpg"
          alt=""
          aria-hidden="true"
          className="
            w-full
            h-full
            object-cover
            opacity-30
            scale-105
            animate-[slowZoom_20s_ease-in-out_infinite_alternate]
          "
        />

        {/* Dark gradient */}

        <div
          className="
            absolute
            inset-0
            bg-gradient-to-b
            from-background/10
            via-background/75
            to-background
          "
        />

        {/* Side gradient */}

        <div
          className="
            absolute
            inset-0
            bg-gradient-to-r
            from-background
            via-transparent
            to-background
          "
        />
      </div>

      {/* ======================================================
          ANIMATED GRID
      ====================================================== */}

      <div
        className="
          absolute
          inset-0
          pointer-events-none
          opacity-[0.07]
        "
        style={{
          backgroundImage: `
            linear-gradient(
              rgba(255,255,255,0.25) 1px,
              transparent 1px
            ),
            linear-gradient(
              90deg,
              rgba(255,255,255,0.25) 1px,
              transparent 1px
            )
          `,
          backgroundSize: "70px 70px",
          maskImage: "linear-gradient(to bottom, black, transparent)",
          WebkitMaskImage: "linear-gradient(to bottom, black, transparent)",
        }}
      />

      {/* ======================================================
          LARGE AMBIENT GLOW — TOP LEFT
      ====================================================== */}

      <div
        className="
          absolute
          -top-40
          -left-40
          w-[500px]
          h-[500px]
          rounded-full
          bg-primary/10
          blur-[120px]
          animate-pulse
          pointer-events-none
        "
      />

      {/* ======================================================
          LARGE AMBIENT GLOW — RIGHT
      ====================================================== */}

      <div
        className="
          absolute
          top-1/3
          -right-40
          w-[500px]
          h-[500px]
          rounded-full
          bg-primary/10
          blur-[140px]
          animate-[floatGlow_8s_ease-in-out_infinite]
          pointer-events-none
        "
      />

      {/* ======================================================
          CENTER GLOW
      ====================================================== */}

      <div
        className="
          absolute
          left-1/2
          top-1/2
          -translate-x-1/2
          -translate-y-1/2
          w-[700px]
          h-[400px]
          rounded-full
          bg-primary/5
          blur-[130px]
          pointer-events-none
        "
      />

      {/* ======================================================
          FLOATING PARTICLES
      ====================================================== */}

      <div
        className="
          absolute
          inset-0
          overflow-hidden
          pointer-events-none
        "
      >
        {particles.map((particle) => (
          <span
            key={particle.id}
            className="
              absolute
              rounded-full
              bg-primary
              opacity-30
              shadow-[0_0_12px_hsl(var(--primary))]
              animate-[particleFloat_var(--duration)_ease-in-out_infinite]
            "
            style={{
              left: particle.left,
              top: particle.top,
              width: particle.size,
              height: particle.size,
              "--duration": particle.duration,
              animationDelay: particle.delay,
            }}
          />
        ))}
      </div>

      {/* ======================================================
          DECORATIVE ORBIT
      ====================================================== */}

      <div
        className="
          absolute
          top-[20%]
          left-[45%]
          w-72
          h-72
          rounded-full
          border
          border-primary/5
          animate-[spin_30s_linear_infinite]
          pointer-events-none
        "
      />

      <div
        className="
          absolute
          top-[23%]
          left-[48%]
          w-52
          h-52
          rounded-full
          border
          border-primary/5
          animate-[spin_20s_linear_infinite_reverse]
          pointer-events-none
        "
      />

      {/* ======================================================
          MAIN CONTENT
      ====================================================== */}

      <div
        className="
          container
          mx-auto
          px-6
          pt-32
          pb-24
          relative
          z-10
        "
      >
        <div
          className="
            grid
            lg:grid-cols-2
            gap-16
            lg:gap-20
            items-center
          "
        >
          {/* ==================================================
              LEFT COLUMN
          ================================================== */}

          <div className="space-y-8">
            {/* ==================================================
                ROLE BADGE
            ================================================== */}

            <div className="animate-fade-in">
              <div
                className="
                  inline-flex
                  items-center
                  gap-3
                  px-5
                  py-2.5
                  rounded-full
                  glass
                  border
                  border-primary/20
                  shadow-[0_0_25px_hsl(var(--primary)/0.08)]
                  hover:border-primary/50
                  hover:shadow-[0_0_35px_hsl(var(--primary)/0.18)]
                  transition-all
                  duration-500
                "
              >
                <span className="relative flex w-2.5 h-2.5">
                  <span
                    className="
                      absolute
                      inline-flex
                      h-full
                      w-full
                      rounded-full
                      bg-primary
                      opacity-75
                      animate-ping
                    "
                  />

                  <span
                    className="
                      relative
                      inline-flex
                      w-2.5
                      h-2.5
                      rounded-full
                      bg-primary
                      shadow-[0_0_12px_hsl(var(--primary))]
                    "
                  />
                </span>

                <span className="font-medium text-sm text-primary">
                  Software Engineer
                </span>

                <span className="text-muted-foreground">|</span>

                <span className="font-medium text-sm text-foreground">
                  Full-Stack Developer
                </span>
              </div>
            </div>

            {/* ==================================================
                HEADLINE
            ================================================== */}

            <div className="space-y-6">
              <h1
                className="
                  text-5xl
                  md:text-6xl
                  lg:text-7xl
                  font-bold
                  leading-[1.05]
                  tracking-tight
                  animate-fade-in
                  animation-delay-100
                "
              >
                Building{" "}
                <span
                  className="
                    text-primary
                    glow-text
                    relative
                    inline-block
                  "
                >
                  scalable
                  {/* Animated underline */}
                  <span
                    className="
                      absolute
                      left-0
                      -bottom-1
                      h-[2px]
                      w-full
                      bg-primary
                      shadow-[0_0_12px_hsl(var(--primary))]
                      origin-left
                      animate-[lineGrow_1.5s_ease-out]
                    "
                  />
                </span>
                <br />
                digital products with{" "}
                <span
                  className="
                    font-serif
                    italic
                    font-normal
                    text-white
                    relative
                  "
                >
                  purpose.
                </span>
              </h1>

              {/* ==================================================
                  DESCRIPTION
              ================================================== */}

              <p
                className="
                  text-sm
                  md:text-base
                  lg:text-lg
                  leading-relaxed
                  text-balance
                  text-muted-foreground
                  max-w-xl
                  animate-fade-in
                  animation-delay-200
                "
              >
                Hi, I'm Usman Nisar — a Software Engineer and Full-Stack
                Developer with 1+ year of professional experience building
                responsive and scalable web applications using MERN and MEAN
                technologies. I also build AI-powered applications with the
                Gemini API and continuously explore modern development and
                deployment practices.
              </p>
            </div>

            {/* ==================================================
                QUICK STATS
            ================================================== */}

            <div
              className="
                grid
                grid-cols-3
                gap-3
                max-w-lg
                animate-fade-in
                animation-delay-250
              "
            >
              <div
                className="
                  glass
                  rounded-xl
                  p-4
                  border
                  border-border/50
                  hover:border-primary/40
                  hover:-translate-y-1
                  transition-all
                  duration-300
                "
              >
                <Code2 className="w-5 h-5 text-primary mb-2" />

                <div className="text-xl font-bold">MERN</div>

                <div className="text-xs text-muted-foreground">Full-Stack</div>
              </div>

              <div
                className="
                  glass
                  rounded-xl
                  p-4
                  border
                  border-border/50
                  hover:border-primary/40
                  hover:-translate-y-1
                  transition-all
                  duration-300
                "
              >
                <Layers3 className="w-5 h-5 text-primary mb-2" />

                <div className="text-xl font-bold">MEAN</div>

                <div className="text-xs text-muted-foreground">Development</div>
              </div>

              <div
                className="
                  glass
                  rounded-xl
                  p-4
                  border
                  border-border/50
                  hover:border-primary/40
                  hover:-translate-y-1
                  transition-all
                  duration-300
                "
              >
                <Brain className="w-5 h-5 text-primary mb-2" />

                <div className="text-xl font-bold">AI</div>

                <div className="text-xs text-muted-foreground">Gemini API</div>
              </div>
            </div>

            {/* ==================================================
                CTA BUTTONS
            ================================================== */}

            <div
              className="
                flex
                flex-wrap
                gap-4
                animate-fade-in
                animation-delay-300
              "
            >
              {/* CONTACT BUTTON */}

              <a
                href="https://wa.me/923244366243?text=Hi%20Usman%2C%20I%20found%20your%20portfolio%20and%20would%20like%20to%20connect."
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  size="lg"
                  className="
                    group
                    relative
                    overflow-hidden
                    shadow-[0_0_25px_hsl(var(--primary)/0.2)]
                    hover:shadow-[0_0_40px_hsl(var(--primary)/0.4)]
                    transition-all
                    duration-500
                  "
                >
                  {/* Shine */}

                  <span
                    className="
                      absolute
                      inset-0
                      -translate-x-full
                      group-hover:translate-x-full
                      transition-transform
                      duration-700
                      bg-gradient-to-r
                      from-transparent
                      via-white/20
                      to-transparent
                      skew-x-12
                    "
                  />

                  <span className="relative z-10">Contact Me</span>

                  <ArrowRight
                    className="
                      relative
                      z-10
                      w-5
                      h-5
                      ml-2
                      transition-transform
                      duration-300
                      group-hover:translate-x-1
                    "
                  />
                </Button>
              </a>

              {/* DOWNLOAD CV */}

              <a
                href="https://drive.google.com/file/d/17x4dAEVrAXwY0cS0fJqSYQop1ddbJ9uz/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                <AnimatedBorderButton>
                  <Download
                    className="
                      w-5
                      h-5
                      transition-transform
                      duration-300
                      group-hover:-translate-y-1
                    "
                  />
                  Download CV
                </AnimatedBorderButton>
              </a>
            </div>

            {/* ==================================================
                SOCIAL LINKS
            ================================================== */}

            <div
              className="
                flex
                items-center
                gap-4
                animate-fade-in
                animation-delay-400
              "
            >
              <span className="text-sm text-muted-foreground">Follow me:</span>

              {[
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
              ].map((social) => {
                const Icon = social.icon;

                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="
                      group
                      relative
                      p-2.5
                      rounded-full
                      glass
                      border
                      border-border/50
                      hover:border-primary/50
                      hover:bg-primary/10
                      hover:text-primary
                      hover:shadow-[0_0_20px_hsl(var(--primary)/0.2)]
                      hover:-translate-y-1
                      transition-all
                      duration-300
                    "
                  >
                    <Icon
                      className="
                        w-5
                        h-5
                        transition-transform
                        duration-300
                        group-hover:scale-110
                      "
                    />
                  </a>
                );
              })}
            </div>
          </div>

          {/* ==================================================
              RIGHT COLUMN
          ================================================== */}

          <div
            className="
              relative
              animate-fade-in
              animation-delay-300
            "
          >
            <div className="relative max-w-md mx-auto">
              {/* ==================================================
                  HUGE BACK GLOW
              ================================================== */}

              <div
                className="
                  absolute
                  -inset-10
                  rounded-full
                  bg-primary/10
                  blur-[80px]
                  animate-pulse
                "
              />

              {/* ==================================================
                  ROTATING OUTER RING
              ================================================== */}

              <div
                className="
                  absolute
                  -inset-5
                  rounded-[2rem]
                  border
                  border-primary/20
                  animate-[spin_15s_linear_infinite]
                "
              >
                <span
                  className="
                    absolute
                    top-1/2
                    -left-1
                    w-2
                    h-2
                    rounded-full
                    bg-primary
                    shadow-[0_0_15px_hsl(var(--primary))]
                  "
                />
              </div>

              {/* ==================================================
                  SECOND RING
              ================================================== */}

              <div
                className="
                  absolute
                  -inset-2
                  rounded-[1.8rem]
                  border
                  border-primary/10
                  animate-[spin_10s_linear_infinite_reverse]
                "
              />

              {/* ==================================================
                  PROFILE CARD
              ================================================== */}

              <div
                className="
                  relative
                  glass
                  rounded-3xl
                  p-2
                  border
                  border-primary/30
                  shadow-[0_0_60px_hsl(var(--primary)/0.12)]
                  hover:shadow-[0_0_80px_hsl(var(--primary)/0.25)]
                  transition-all
                  duration-700
                "
              >
                {/* Animated border light */}

                <div
                  className="
                    absolute
                    -inset-1px
                    rounded-3xl
                    bg-linear-to-r
                    from-transparent
                    via-primary/60
                    to-transparent
                    opacity-70
                    blur-[1px]
                    animate-[borderRun_4s_linear_infinite]
                    pointer-events-none
                  "
                />

                <div className="relative overflow-hidden rounded-2xl">
                  {/* PROFILE IMAGE */}

                  <img
                    src="/p1.png"
                    alt="Usman Nisar - Software Engineer and Full-Stack Developer"
                    className="
                      relative
                      w-full
                      aspect-4/5
                      object-cover
                      rounded-2xl
                      transition-transform
                      duration-1000
                      hover:scale-105
                    "
                    loading="eager"
                    fetchPriority="high"
                    decoding="async"
                  />

                  {/* Image gradient */}

                  <div
                    className="
                      absolute
                      inset-0
                      bg-linear-to-t
                      from-background/50
                      via-transparent
                      to-transparent
                      pointer-events-none
                    "
                  />

                  {/* =================================================
                      SCANNING LIGHT
                  ================================================= */}

                  <div
                    className="
                      absolute
                      inset-x-0
                      -top-1/2
                      h-1/2
                      bg-gradient-to-b
                      from-transparent
                      via-primary/20
                      to-transparent
                      blur-xl
                      animate-[scan_5s_ease-in-out_infinite]
                      pointer-events-none
                    "
                  />

                  {/* =================================================
                      IMAGE CORNER EFFECT
                  ================================================= */}

                  <div
                    className="
                      absolute
                      top-4
                      left-4
                      w-12
                      h-12
                      border-t-2
                      border-l-2
                      border-primary/60
                      rounded-tl-lg
                    "
                  />

                  <div
                    className="
                      absolute
                      bottom-4
                      right-4
                      w-12
                      h-12
                      border-b-2
                      border-r-2
                      border-primary/60
                      rounded-br-lg
                    "
                  />
                </div>

                {/* ==================================================
                    AVAILABLE BADGE
                ================================================== */}

                <div
                  className="
                    absolute
                    -bottom-5
                    -right-6
                    glass
                    rounded-2xl
                    px-5
                    py-3
                    border
                    border-primary/20
                    shadow-[0_0_25px_hsl(var(--primary)/0.12)]
                    animate-float
                  "
                >
                  <div className="flex items-center gap-3">
                    <span className="relative flex w-3 h-3">
                      <span
                        className="
                          absolute
                          inset-0
                          rounded-full
                          bg-green-500
                          animate-ping
                          opacity-75
                        "
                      />

                      <span
                        className="
                          relative
                          w-3
                          h-3
                          rounded-full
                          bg-green-500
                          shadow-[0_0_10px_rgba(34,197,94,0.8)]
                        "
                      />
                    </span>

                    <div>
                      <div className="text-sm font-semibold">
                        Available for work
                      </div>

                      <div className="text-[10px] text-muted-foreground">
                        Open to opportunities
                      </div>
                    </div>
                  </div>
                </div>

                {/* ==================================================
                    EXPERIENCE BADGE
                ================================================== */}

                <div
                  className="
                    absolute
                    -top-5
                    -left-6
                    glass
                    rounded-2xl
                    px-5
                    py-3
                    border
                    border-primary/20
                    shadow-[0_0_25px_hsl(var(--primary)/0.12)]
                    animate-float
                    animation-delay-500
                  "
                >
                  <div className="text-3xl font-bold text-primary glow-text">
                    1+
                  </div>

                  <div className="text-xs text-muted-foreground">
                    Year Experience
                  </div>
                </div>

                {/* ==================================================
                    AI BADGE
                ================================================== */}

                <div
                  className="
                    absolute
                    top-1/2
                    -right-10
                    glass
                    rounded-xl
                    px-4
                    py-3
                    border
                    border-primary/20
                    shadow-[0_0_25px_hsl(var(--primary)/0.12)]
                    animate-[floatSide_5s_ease-in-out_infinite]
                    hidden
                    md:block
                  "
                >
                  <div className="flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-primary animate-pulse" />

                    <span className="text-xs font-medium">AI-Powered</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ======================================================
            TECHNOLOGY SECTION
        ====================================================== */}

        <div
          className="
            mt-24
            animate-fade-in
            animation-delay-600
          "
        >
          <div className="flex items-center justify-center gap-3 mb-7">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-primary/40" />

            <p
              className="
                text-xs
                md:text-sm
                text-muted-foreground
                uppercase
                tracking-[0.2em]
              "
            >
              Technologies I work with
            </p>

            <div className="h-px w-12 bg-gradient-to-l from-transparent to-primary/40" />
          </div>

          {/* ====================================================
              MARQUEE
          ==================================================== */}

          <div
            className="
              relative
              overflow-hidden
              py-6
              rounded-2xl
              border
              border-border/20
              bg-background/10
            "
          >
            {/* Left fade */}

            <div
              className="
                absolute
                left-0
                top-0
                bottom-0
                w-24
                md:w-40
                bg-gradient-to-r
                from-background
                to-transparent
                z-10
                pointer-events-none
              "
            />

            {/* Right fade */}

            <div
              className="
                absolute
                right-0
                top-0
                bottom-0
                w-24
                md:w-40
                bg-gradient-to-l
                from-background
                to-transparent
                z-10
                pointer-events-none
              "
            />

            <div
              className="
                flex
                gap-10
                items-center
                whitespace-nowrap
                w-max
                animate-[marquee_35s_linear_infinite]
                hover:[animation-play-state:paused]
              "
            >
              {[...skills, ...skills].map((skill, idx) => (
                <div
                  key={`${skill.name}-${idx}`}
                  className="
                    group
                    inline-flex
                    flex-col
                    items-center
                    justify-center
                    flex-shrink-0
                    min-w-[90px]
                    opacity-70
                    hover:opacity-100
                    transition-all
                    duration-300
                  "
                >
                  {/* Logo container */}

                  <div
                    className="
                      relative
                      w-16
                      h-16
                      md:w-20
                      md:h-20
                      flex
                      items-center
                      justify-center
                      rounded-2xl
                      border
                      border-transparent
                      group-hover:border-primary/20
                      group-hover:bg-primary/5
                      group-hover:shadow-[0_0_25px_hsl(var(--primary)/0.12)]
                      transition-all
                      duration-300
                    "
                  >
                    <img
                      src={skill.img}
                      alt={skill.name}
                      loading="lazy"
                      className="
                        w-12
                        h-12
                        md:w-14
                        md:h-14
                        object-contain
                        transition-all
                        duration-500
                        group-hover:scale-110
                        group-hover:-translate-y-1
                      "
                    />
                  </div>

                  <span
                    className="
                      text-[11px]
                      md:text-xs
                      mt-2
                      text-muted-foreground
                      group-hover:text-primary
                      transition-colors
                      duration-300
                    "
                  >
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ========================================================
          SCROLL INDICATOR
      ======================================================== */}

      <div
        className="
          absolute
          bottom-7
          left-1/2
          -translate-x-1/2
          animate-fade-in
          animation-delay-800
        "
      >
        <a
          href="#about"
          className="
            group
            flex
            flex-col
            items-center
            gap-2
            text-muted-foreground
            hover:text-primary
            transition-colors
          "
        >
          <span
            className="
              text-[10px]
              uppercase
              tracking-[0.3em]
            "
          >
            Scroll
          </span>

          <div
            className="
              relative
              flex
              items-center
              justify-center
              w-9
              h-12
              rounded-full
              border
              border-border/50
              group-hover:border-primary/50
              transition-all
              duration-300
            "
          >
            <ChevronDown
              className="
                w-5
                h-5
                animate-bounce
              "
            />
          </div>
        </a>
      </div>
    </section>
  );
};
