import {
  BriefcaseBusiness,
  CalendarDays,
  CheckCircle2,
  Sparkles,
} from "lucide-react";

const experiences = [
  // ============================================================
  // 1. INTEGRITI PVT LTD
  // ============================================================
  {
    period: "Jan 2026 — May 2026",
    role: "Software Engineer",
    company: "Integriti Pvt Ltd",
    description:
      "Developed and maintained modern web applications using React.js, Next.js, Node.js, Express.js, and MongoDB. Built reusable components, integrated REST APIs, and contributed to scalable full-stack solutions while collaborating with teams to deliver production-ready applications.",
    technologies: [
      "React.js",
      "Next.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JavaScript",
      "TypeScript",
      "Tailwind CSS",
    ],
    current: false,
  },

  // ============================================================
  // 2. THE DEV CORPORATE
  // ============================================================
  {
    period: "Jan 2024 — Aug 2024",
    role: "Frontend Developer",
    company: "The Dev Corporate",
    description:
      "Built 6–7 client web applications from the ground up using React.js, Next.js, Redux Toolkit, and Material UI. Developed reusable and responsive components, integrated APIs, implemented interactive interfaces, and focused on delivering clean, user-friendly experiences across multiple real-world projects.",
    technologies: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "React.js",
      "Next.js",
      "Redux Toolkit",
      "Material UI",
      "Bootstrap",
    ],
    current: false,
  },
];

export const Experience = () => {
  return (
    <section id="experience" className="py-32 relative overflow-hidden">
      {/* ========================================================
          BACKGROUND
      ======================================================== */}

      <div className="absolute inset-0 pointer-events-none">
        {/* Main glow */}
        <div className="absolute top-1/3 -left-48 w-[550px] h-[550px] rounded-full bg-primary/10 blur-[150px] animate-experience-glow" />

        {/* Secondary glow */}
        <div className="absolute bottom-0 -right-48 w-[500px] h-[500px] rounded-full bg-primary/5 blur-[150px] animate-experience-glow-reverse" />

        {/* Floating particles */}
        <span className="absolute top-[20%] right-[15%] w-1.5 h-1.5 rounded-full bg-primary/50 shadow-[0_0_15px_hsl(var(--primary))] animate-experience-particle" />

        <span className="absolute top-[65%] left-[12%] w-2 h-2 rounded-full bg-primary/30 shadow-[0_0_20px_hsl(var(--primary))] animate-experience-particle-delay" />

        <span className="absolute bottom-[15%] right-[30%] w-1 h-1 rounded-full bg-primary/50 shadow-[0_0_12px_hsl(var(--primary))] animate-experience-particle" />

        {/* Technical grid */}
        <div className="absolute inset-0 experience-grid opacity-[0.025]" />
      </div>

      {/* ========================================================
          CONTAINER
      ======================================================== */}

      <div className="container mx-auto px-6 relative z-10">
        {/* ======================================================
            SECTION HEADER
        ====================================================== */}

        <div className="max-w-3xl mb-20 text-left">
          {/* Label */}

          <div className="animate-fade-in">
            <div className="inline-flex items-center gap-3">
              <span className="relative flex items-center justify-center w-8 h-8 rounded-lg bg-primary/10 border border-primary/20">
                <BriefcaseBusiness className="w-4 h-4 text-primary" />

                <span className="absolute inset-0 rounded-lg border border-primary/20 animate-experience-ring" />
              </span>

              <span className="text-secondary-foreground text-sm font-medium tracking-[0.2em] uppercase">
                Career Journey
              </span>
            </div>
          </div>

          {/* Heading */}

          <h2
            className="
              text-4xl
              md:text-5xl
              xl:text-6xl
              font-bold
              mt-5
              mb-6
              leading-tight
              animate-fade-in
              animation-delay-100
              text-secondary-foreground
              text-left
            "
          >
            Experience that{" "}
            <span className="font-serif italic font-normal text-white relative inline-block">
              drives growth.
              <span className="absolute -bottom-2 left-0 w-full h-px bg-gradient-to-r from-primary via-primary/60 to-transparent" />
            </span>
          </h2>

          {/* Description */}

          <p
            className="
              text-muted-foreground
              leading-7
              max-w-2xl
              animate-fade-in
              animation-delay-200
              text-left
            "
          >
            My professional journey across frontend and full-stack development,
            building real-world web applications and continuously expanding my
            skills across modern technologies.
          </p>
        </div>

        {/* ======================================================
            TIMELINE
        ====================================================== */}

        <div className="relative">
          {/* ====================================================
              CENTRAL TIMELINE
          ==================================================== */}

          <div
            className="
              absolute
              left-[7px]
              md:left-1/2
              top-0
              bottom-0
              w-px
              bg-gradient-to-b
              from-primary
              via-primary/40
              to-transparent
              md:-translate-x-1/2
            "
          />

          {/* Animated timeline glow */}

          <div
            className="
              absolute
              left-[7px]
              md:left-1/2
              top-0
              h-32
              w-[2px]
              bg-gradient-to-b
              from-transparent
              via-primary
              to-transparent
              md:-translate-x-1/2
              blur-[1px]
              animate-timeline-flow
            "
          />

          {/* ====================================================
              EXPERIENCE ITEMS
          ==================================================== */}

          <div className="space-y-14">
            {experiences.map((exp, idx) => (
              <div
                key={`${exp.company}-${exp.role}`}
                className="
                  relative
                  grid
                  md:grid-cols-2
                  gap-8
                  animate-experience-card
                "
                style={{
                  animationDelay: `${(idx + 1) * 180}ms`,
                }}
              >
                {/* ==================================================
                    TIMELINE NODE
                ================================================== */}

                <div
                  className="
                    absolute
                    left-[7px]
                    md:left-1/2
                    top-8
                    -translate-x-1/2
                    z-20
                  "
                >
                  {/* Outer glow */}

                  <span className="absolute -inset-3 rounded-full bg-primary/10 blur-md" />

                  {/* Outer ring */}

                  <span className="relative flex items-center justify-center w-4 h-4 rounded-full bg-background border-2 border-primary shadow-[0_0_20px_hsl(var(--primary)/0.6)]">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />

                    {exp.current && (
                      <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-60" />
                    )}
                  </span>
                </div>

                {/* ==================================================
                    LEFT / RIGHT CONTENT
                ================================================== */}

                <div
                  className={`
                    pl-10
                    text-left
                    ${
                      idx % 2 === 0
                        ? "md:col-start-1 md:pr-16"
                        : "md:col-start-2 md:pl-16"
                    }
                  `}
                >
                  {/* ==================================================
                      EXPERIENCE CARD
                  ================================================== */}

                  <div className="group relative">
                    {/* Card glow */}

                    <div className="absolute -inset-1 rounded-3xl bg-primary/10 blur-xl opacity-0 group-hover:opacity-100 transition-all duration-700" />

                    <div
                      className="
                        relative
                        glass
                        rounded-3xl
                        p-6
                        md:p-7
                        border
                        border-white/5
                        overflow-hidden
                        transition-all
                        duration-500
                        group-hover:-translate-y-2
                        group-hover:border-primary/30
                        group-hover:shadow-[0_25px_70px_rgba(0,0,0,0.3)]
                        text-left
                      "
                    >
                      {/* Top shine */}

                      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                      {/* Moving shine */}

                      <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/[0.04] to-transparent pointer-events-none" />

                      {/* ==================================================
                          HEADER
                      ================================================== */}

                      <div
                        className="
                          flex
                          items-start
                          gap-4
                          text-left
                        "
                      >
                        {/* Icon */}

                        <div className="relative flex-shrink-0 w-12 h-12 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center transition-all duration-500 group-hover:bg-primary/15 group-hover:border-primary/40 group-hover:scale-110">
                          <CalendarDays className="w-5 h-5 text-primary" />

                          <span className="absolute inset-[-4px] rounded-2xl border border-primary/0 group-hover:border-primary/20 transition-all duration-500" />
                        </div>

                        {/* Date + Role + Company */}

                        <div className="flex-1 text-left">
                          {/* Date */}

                          <div className="flex flex-wrap items-center gap-2 justify-start">
                            <span className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-wider uppercase text-primary">
                              {exp.period}
                            </span>
                          </div>

                          {/* Role */}

                          <h3
                            className="
                              text-xl
                              md:text-2xl
                              font-semibold
                              mt-2
                              text-foreground
                              text-left
                              transition-colors
                              duration-300
                              group-hover:text-primary
                            "
                          >
                            {exp.role}
                          </h3>

                          {/* Company */}

                          <p className="text-muted-foreground mt-1 font-medium text-left">
                            {exp.company}
                          </p>
                        </div>
                      </div>

                      {/* ==================================================
                          DESCRIPTION
                      ================================================== */}

                      <p
                        className="
                          text-sm
                          leading-7
                          text-muted-foreground
                          mt-6
                          text-left
                        "
                      >
                        {exp.description}
                      </p>

                      {/* ==================================================
                          TECHNOLOGIES
                      ================================================== */}

                      <div
                        className="
                          flex
                          flex-wrap
                          gap-2
                          mt-6
                          justify-start
                        "
                      >
                        {exp.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="
                              inline-flex
                              items-center
                              gap-1.5
                              px-3
                              py-1.5
                              rounded-full
                              bg-primary/5
                              border
                              border-primary/10
                              text-xs
                              font-medium
                              text-muted-foreground
                              transition-all
                              duration-300
                              hover:bg-primary/10
                              hover:border-primary/30
                              hover:text-primary
                              hover:-translate-y-0.5
                            "
                          >
                            <span className="w-1 h-1 rounded-full bg-primary/60" />

                            {tech}
                          </span>
                        ))}
                      </div>

                      {/* ==================================================
                          BOTTOM STATUS
                      ================================================== */}

                      <div
                        className="
                          flex
                          items-center
                          gap-2
                          mt-6
                          pt-4
                          border-t
                          border-white/5
                          text-xs
                          text-muted-foreground
                          justify-start
                        "
                      >
                        <CheckCircle2 className="w-4 h-4 text-primary" />

                        <span>Professional Experience</span>
                      </div>

                      {/* Bottom glow line */}

                      <div className="absolute bottom-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-primary/0 to-transparent group-hover:via-primary/60 transition-all duration-700" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ======================================================
            EXPERIENCE FOOTER
        ====================================================== */}

        <div className="mt-20 flex justify-start">
          <div className="inline-flex items-center gap-3 px-5 py-3 rounded-full glass border border-white/5 text-sm text-muted-foreground">
            <Sparkles className="w-4 h-4 text-primary" />

            <span>Continuously learning. Continuously building.</span>
          </div>
        </div>
      </div>
    </section>
  );
};
