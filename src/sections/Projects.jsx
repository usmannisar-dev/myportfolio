import { useState } from "react";
import {
  ArrowUpRight,
  Github,
  ChevronUp,
  ExternalLink,
  Sparkles,
} from "lucide-react";

const projects = [
  // ============================================================
  // 1. AI LEARNING ASSISTANT
  // ============================================================
  {
    title: "AI Learning Assistant",
    description:
      "A full-stack AI-powered learning platform built with React.js, Node.js, Express.js, MongoDB, and Gemini API. Includes AI-generated summaries, flashcards, quizzes, concept explanations, and contextual chat.",
    image: "/projects/ailearning.png",
    tags: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Gemini API",
      "Tailwind CSS",
    ],
    link: "https://ai-learning-assistant-site.vercel.app/",
    github:
      "https://github.com/usmannisar-dev/ai-learning-assistant-frontend.git",
  },

  // ============================================================
  // 2. EMPLOYEE MANAGEMENT SYSTEM
  // ============================================================
  {
    title: "Employee Management System",
    description:
      "A full-stack employee management application with secure authentication, employee management, REST API integration, and a responsive dashboard built with React.js, Node.js, Express.js, and MongoDB.",
    image: "/projects/employee.png",
    tags: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
    link: "https://employee-management-system-eight-snowy.vercel.app/",
    github: "https://github.com/usmannisar-dev/client.git",
  },

  // ============================================================
  // 3. FOREVER E-COMMERCE
  // ============================================================
  {
    title: "Forever E-Commerce",
    description:
      "A full-stack e-commerce application featuring product browsing, product details, shopping workflows, API integration, and responsive interfaces for a smooth online shopping experience.",
    image: "/projects/forever.png",
    tags: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
    link: "https://forever-ecommerce-eight.vercel.app/",
    github: "https://github.com/usmannisar-dev/forever-ecommerce",
  },

  // ============================================================
  // 4. KMAT TECHNICAL
  // ============================================================
  {
    title: "Kmat Technical",
    description:
      "A modern service-based website for technical and maintenance services, built with Next.js and Material UI with a responsive interface focused on usability and performance.",
    image: "/projects/kmat.png",
    tags: ["Next.js", "React.js", "Material UI", "Responsive UI"],
    link: "https://www.kmatechnical.com/",
    github: "https://github.com/usmannisar-dev/Darat-Booking-Website",
  },

  // ============================================================
  // 5. PROTEK SOLUTIONS
  // ============================================================
  {
    title: "Protek Solutions",
    description:
      "A modern corporate website built with Next.js and Tailwind CSS, showcasing technology, infrastructure, AI-powered logistics, e-commerce incubation, and smart industrial solutions.",
    image: "/projects/protek.png",
    tags: ["Next.js", "Tailwind CSS", "React.js", "Responsive UI"],
    link: "https://www.proteksolutions.ca/",
    github: null,
  },

  // ============================================================
  // 6. TASKIFY
  // ============================================================
  {
    title: "Taskify — Daily Task Management",
    description:
      "A responsive task management application with complete CRUD functionality and Redux-based state management, designed to help users organize and manage daily tasks efficiently.",
    image: "/projects/todo.png",
    tags: ["React.js", "Redux Toolkit", "Material UI", "Formik"],
    link: "https://dailytasksmanager.netlify.app/",
    github: "https://github.com/usmannisar-dev/ToDoWebsite",
  },

  // ============================================================
  // 7. BRANDISH
  // ============================================================
  {
    title: "Brandish — Creative Agency Website",
    description:
      "A modern creative agency website showcasing branding, strategy, insights, and portfolio content with responsive layouts and interactive sections built using Webflow.",
    image: "/projects/brandish.png",
    tags: ["Webflow", "Responsive Design", "Animations"],
    link: "https://brandish-f4bf50.webflow.io/",
    github: null,
  },

  // ============================================================
  // 8. BOB BEALE OUTFITTERS
  // ============================================================
  {
    title: "Bob Beale Outfitters",
    description:
      "A responsive Shopify e-commerce storefront for outdoor apparel and custom-printed garments, featuring customized sections and a streamlined shopping experience.",
    image: "/projects/bob.png",
    tags: ["Shopify", "Liquid", "Custom Sections", "E-Commerce"],
    link: "https://bobbealeoutfitters.com/",
    github: null,
  },

  // ============================================================
  // 9. TIC TAC TOE
  // ============================================================
  {
    title: "Tic Tac Toe Game",
    description:
      "A responsive Tic Tac Toe game built with React and Material UI, featuring clean game logic, interactive gameplay, responsive design, and a dynamic winner modal.",
    image: "/projects/tiktaktoe.png",
    tags: ["React.js", "Material UI", "JavaScript", "Responsive UI"],
    link: "https://to-do-website-snowy-iota.vercel.app/",
    github: null,
  },
];

export const Projects = () => {
  // ============================================================
  // STATE
  // ============================================================

  const [showAll, setShowAll] = useState(false);

  // ============================================================
  // VISIBLE PROJECTS
  // ============================================================

  const visibleProjects = showAll ? projects : projects.slice(0, 6);

  // ============================================================
  // BUTTON HANDLER
  // ============================================================

  const handleViewAll = () => {
    setShowAll((currentValue) => !currentValue);
  };

  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      {/* ========================================================
          BACKGROUND
      ======================================================== */}

      <div className="absolute inset-0 pointer-events-none">
        {/* Primary glow */}
        <div className="absolute top-[15%] right-[-150px] w-[500px] h-[500px] rounded-full bg-primary/10 blur-[140px] animate-project-glow" />

        {/* Secondary glow */}
        <div className="absolute bottom-[10%] left-[-150px] w-[450px] h-[450px] rounded-full bg-highlight/5 blur-[140px] animate-project-glow-reverse" />

        {/* Small particles */}
        <span className="absolute top-[20%] left-[10%] w-1.5 h-1.5 rounded-full bg-primary/60 shadow-[0_0_15px_hsl(var(--primary))] animate-project-particle" />

        <span className="absolute top-[60%] right-[12%] w-2 h-2 rounded-full bg-primary/40 shadow-[0_0_20px_hsl(var(--primary))] animate-project-particle-delay" />

        <span className="absolute bottom-[15%] left-[30%] w-1 h-1 rounded-full bg-primary/50 shadow-[0_0_15px_hsl(var(--primary))] animate-project-particle" />

        {/* Subtle grid */}
        <div className="absolute inset-0 projects-grid opacity-[0.025]" />
      </div>

      {/* ========================================================
          CONTAINER
      ======================================================== */}

      <div className="container mx-auto px-6 relative z-10">
        {/* ======================================================
            HEADER
        ====================================================== */}

        <div className="text-center mx-auto max-w-3xl mb-16">
          {/* Label */}

          <div className="animate-fade-in">
            <div className="inline-flex items-center gap-3">
              <span className="relative flex items-center justify-center w-8 h-8 rounded-lg bg-primary/10 border border-primary/20">
                <Sparkles className="w-4 h-4 text-primary animate-pulse" />

                <span className="absolute inset-0 rounded-lg border border-primary/20 animate-project-ring" />
              </span>

              <span className="text-secondary-foreground text-sm font-medium tracking-[0.2em] uppercase">
                Featured Projects
              </span>
            </div>
          </div>

          {/* Heading */}

          <h2 className="text-4xl md:text-5xl xl:text-6xl font-bold mt-5 mb-6 leading-tight animate-fade-in animation-delay-100 text-secondary-foreground">
            Projects that{" "}
            <span className="font-serif italic font-normal text-white relative inline-block">
              make an impact.
              <span className="absolute -bottom-2 left-0 w-full h-px bg-gradient-to-r from-primary via-primary/60 to-transparent" />
            </span>
          </h2>

          {/* Description */}

          <p className="text-muted-foreground leading-7 animate-fade-in animation-delay-200">
            A selection of full-stack, AI-powered, and modern web applications
            built to solve real-world problems and explore modern technologies.
          </p>
        </div>

        {/* ======================================================
            PROJECT GRID
        ====================================================== */}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7 xl:gap-8">
          {visibleProjects.map((project, idx) => (
            <div
              key={project.title}
              className="group relative animate-project-card"
              style={{
                animationDelay: `${idx * 90}ms`,
              }}
            >
              {/* ==================================================
                  CARD GLOW
              ================================================== */}

              <div className="absolute -inset-1 rounded-[26px] bg-primary/10 blur-xl opacity-0 group-hover:opacity-100 transition-all duration-700" />

              {/* ==================================================
                  CARD
              ================================================== */}

              <div className="relative h-full glass rounded-[24px] overflow-hidden border border-white/5 transition-all duration-500 ease-out group-hover:-translate-y-2 group-hover:border-primary/25 group-hover:shadow-[0_25px_70px_rgba(0,0,0,0.35)]">
                {/* ==================================================
                    IMAGE
                ================================================== */}

                <div className="relative overflow-hidden aspect-video">
                  <img
                    src={project.image}
                    alt={`${project.title} project preview`}
                    loading="lazy"
                    className="w-full h-full object-cover transition-all duration-700 ease-out group-hover:scale-110"
                  />

                  {/* Dark overlay */}

                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-500" />

                  {/* Color glow */}

                  <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 mix-blend-screen transition-all duration-700" />

                  {/* Project number */}

                  <div className="absolute top-4 left-4">
                    <span className="inline-flex items-center justify-center px-3 py-1.5 rounded-full bg-black/40 backdrop-blur-md border border-white/10 text-xs font-semibold tracking-wider text-white/80">
                      {String(idx + 1).padStart(2, "0")}
                    </span>
                  </div>

                  {/* View project text */}

                  <div className="absolute top-4 right-4 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/40 backdrop-blur-md border border-white/10 text-xs font-medium text-white">
                      View Project
                      <ExternalLink className="w-3 h-3" />
                    </span>
                  </div>

                  {/* ==================================================
                      HOVER ACTIONS
                  ================================================== */}

                  <div className="absolute inset-0 flex items-center justify-center gap-4">
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Open ${project.title} live project`}
                        className="group/action relative w-12 h-12 rounded-full bg-black/50 backdrop-blur-xl border border-white/20 flex items-center justify-center text-white opacity-0 scale-75 translate-y-4 group-hover:opacity-100 group-hover:scale-100 group-hover:translate-y-0 transition-all duration-500 delay-75 hover:bg-primary hover:border-primary hover:shadow-[0_0_30px_hsl(var(--primary)/0.6)]"
                      >
                        <ArrowUpRight className="w-5 h-5 transition-transform duration-300 group-hover/action:translate-x-0.5 group-hover/action:-translate-y-0.5" />
                      </a>
                    )}

                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Open ${project.title} source code`}
                        className="group/action relative w-12 h-12 rounded-full bg-black/50 backdrop-blur-xl border border-white/20 flex items-center justify-center text-white opacity-0 scale-75 translate-y-4 group-hover:opacity-100 group-hover:scale-100 group-hover:translate-y-0 transition-all duration-500 delay-150 hover:bg-primary hover:border-primary hover:shadow-[0_0_30px_hsl(var(--primary)/0.6)]"
                      >
                        <Github className="w-5 h-5 transition-transform duration-300 group-hover/action:scale-110" />
                      </a>
                    )}
                  </div>

                  {/* Bottom image line */}

                  <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/0 to-transparent group-hover:via-primary transition-all duration-700" />
                </div>

                {/* ==================================================
                    CONTENT
                ================================================== */}

                <div className="p-6 space-y-5">
                  {/* Title */}

                  <div className="flex items-start justify-between gap-4">
                    <h3 className="text-xl font-semibold leading-tight text-foreground transition-colors duration-300 group-hover:text-primary">
                      {project.title}
                    </h3>

                    <ArrowUpRight className="w-5 h-5 flex-shrink-0 text-muted-foreground transition-all duration-500 group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </div>

                  {/* Description */}

                  <p className="text-muted-foreground text-sm leading-6">
                    {project.description}
                  </p>

                  {/* Tags */}

                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1.5 rounded-full bg-surface/80 text-xs font-medium border border-border/50 text-muted-foreground transition-all duration-300 hover:border-primary/50 hover:text-primary hover:bg-primary/5"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Bottom divider */}

                  <div className="pt-1">
                    <div className="h-px w-full bg-gradient-to-r from-white/5 via-white/10 to-transparent group-hover:via-primary/20 transition-all duration-500" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ======================================================
            VIEW ALL PROJECTS BUTTON
        ====================================================== */}

        {projects.length > 6 && (
          <div className="flex justify-center mt-16">
            <div className="relative group">
              {/* ==================================================
                  OUTER GLOW
              ================================================== */}

              <div
                className="
                  absolute
                  -inset-3
                  rounded-2xl
                  bg-primary/20
                  blur-2xl
                  opacity-40
                  group-hover:opacity-100
                  group-hover:scale-110
                  transition-all
                  duration-700
                "
              />

              {/* ==================================================
                  ROTATING BORDER
              ================================================== */}

              <div
                className="
                  absolute
                  -inset-[2px]
                  rounded-2xl
                  overflow-hidden
                "
              >
                <div
                  className="
                    absolute
                    w-[220%]
                    h-[600%]
                    -top-[250%]
                    -left-[60%]
                    bg-[conic-gradient(from_0deg,transparent_0deg,transparent_35deg,hsl(var(--primary))_70deg,transparent_110deg,transparent_180deg,hsl(var(--primary))_220deg,transparent_260deg,transparent_360deg)]
                    animate-[spin_3s_linear_infinite]
                  "
                />
              </div>

              {/* ==================================================
                  BUTTON
              ================================================== */}

              <button
                type="button"
                onClick={handleViewAll}
                aria-expanded={showAll}
                className="
                  relative
                  z-10
                  inline-flex
                  items-center
                  justify-center
                  gap-3
                  min-w-[230px]
                  px-9
                  py-4
                  rounded-2xl
                  bg-background/95
                  backdrop-blur-xl
                  border
                  border-primary/30
                  text-white
                  font-semibold
                  tracking-wide
                  overflow-hidden
                  cursor-pointer

                  transition-all
                  duration-500

                  hover:scale-105
                  hover:border-primary
                  hover:shadow-[0_0_40px_hsl(var(--primary)/0.45)]

                  active:scale-95
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
                    duration-1000
                    bg-gradient-to-r
                    from-transparent
                    via-white/20
                    to-transparent
                    skew-x-12
                  "
                />

                {/* Inner glow */}

                <span
                  className="
                    absolute
                    inset-0
                    rounded-2xl
                    bg-primary/5
                    group-hover:bg-primary/15
                    transition-all
                    duration-500
                  "
                />

                {/* Text */}

                <span className="relative z-10 transition-all duration-300">
                  {showAll ? "Show Less Projects" : "View All Projects"}
                </span>

                {/* Icon */}

                <span
                  className="
                    relative
                    z-10
                    flex
                    items-center
                    justify-center
                    transition-all
                    duration-500
                    group-hover:translate-x-1
                  "
                >
                  {showAll ? (
                    <ChevronUp
                      className="
                        w-5
                        h-5
                        transition-transform
                        duration-500
                        group-hover:-translate-y-1
                      "
                    />
                  ) : (
                    <ArrowUpRight
                      className="
                        w-5
                        h-5
                        transition-transform
                        duration-500
                        group-hover:translate-x-1
                        group-hover:-translate-y-1
                      "
                    />
                  )}
                </span>

                {/* Corner light */}

                <span
                  className="
                    absolute
                    top-2
                    right-3
                    w-1.5
                    h-1.5
                    rounded-full
                    bg-primary
                    shadow-[0_0_12px_hsl(var(--primary))]
                    animate-ping
                  "
                />
              </button>

              {/* Bottom glow */}

              <div
                className="
                  absolute
                  left-1/2
                  -bottom-4
                  -translate-x-1/2
                  w-1/2
                  h-2
                  bg-primary/40
                  blur-xl
                  rounded-full
                  opacity-60
                  group-hover:w-3/4
                  group-hover:opacity-100
                  transition-all
                  duration-700
                "
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
