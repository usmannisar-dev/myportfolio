const experiences = [
  {
    period: "Jan 2026 — Present",
    role: "Software Engineer",
    company: "Integriti Private Limited",
    description:
      "Working as a Software Engineer, building scalable and maintainable web applications using modern front-end and back-end technologies. Focused on performance optimization, clean and modular architecture, and delivering reliable, production-ready solutions that address real-world business needs.",
    technologies: [
      "React.js",
      "Next.js",
      "Node.js",
      "MongoDB",
      "Express.js",
      "TailwindCSS",
      "Shopify",
      "Webflow",
    ],
    current: true,
  },
  {
    period: "Sep 2024 — Dec 2024",
    role: "Front end Developer",
    company: "ZAI SYSTEMS (SMC-PRIVATE) LIMITED",
    description:
      "Worked as a Front-End Developer, building modern, responsive interfaces with React.js and Next.js, enhancing user experience through smooth GSAP animations and clean, scalable layouts using Tailwind CSS. Explored new technologies and contributed to responsive Ul development and performance improvements",
    technologies: ["React.js", "Next.js", "GSAP", "TailwindCSS"],
    current: false,
  },
  {
    period: "Jan 2024 — Aug 2024",
    role: "Front end Developer",
    company: "The Dev Corporate",
    description:
      "Started my journey at The Dev Corporate as a front-end intern and gradually grew into a confident front-end developer by working on multiple real-world projects. Gained hands-on experience building modern, responsive, and high-performance user interfaces using React.js, Next.js, Redux Toolkit, and Material-ui, while focusing on clean code, scalable components, smooth animations, and delivering intuitive user experiences aligned with real business needs..",
    technologies: ["React.js", "Next.js", "Material-UI", "Redux Toolki"],
    current: false,
  },
];

export const Experience = () => {
  return (
    <section id="experience" className="py-32 relative overflow-hidden">
      <div
        className="absolute top-1/2 left-1/4 w-96
       h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2"
      />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span
            className="text-secondary-foreground text-sm
           font-medium tracking-wider uppercase animate-fade-in"
          >
            Career Journey
          </span>
          <h2
            className="text-4xl md:text-5xl font-bold
           mt-4 mb-6 animate-fade-in animation-delay-100
            text-secondary-foreground"
          >
            Experience that{" "}
            <span className="font-serif italic font-normal text-white">
              {" "}
              speaks volumes.
            </span>
          </h2>

          <p
            className="text-muted-foreground
           animate-fade-in animation-delay-200"
          >
            A timeline of my professional growth — from starting with curiosity
            and foundational skills to becoming a dedicated Software Engineer,
            building scalable, real-world products with modern technologies.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          <div className="timeline-glow absolute left-0 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary/70 via-primary/30 to-transparent md:-translate-x-1/2 shadow-[0_0_25px_rgba(32,178,166,0.8)]" />

          {/* Experience Items */}
          <div className="space-y-12">
            {experiences.map((exp, idx) => (
              <div
                key={idx}
                className="relative grid md:grid-cols-2 gap-8 animate-fade-in"
                style={{ animationDelay: `${(idx + 1) * 150}ms` }}
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 top-0 w-3 h-3 bg-primary rounded-full -translate-x-1/2 ring-4 ring-background z-10">
                  {exp.current && (
                    <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-75" />
                  )}
                </div>

                {/* Content */}
                <div
                  className={`pl-8 md:pl-0 ${
                    idx % 2 === 0
                      ? "md:pr-16  text-balance"
                      : "md:col-start-2 md:pl-16 text-balance"
                  }`}
                >
                  <div
                    className={`glass p-6 rounded-2xl border border-primary/30 hover:border-primary/50 transition-all duration-500`}
                  >
                    <span className="text-sm text-primary font-medium">
                      {exp.period}
                    </span>
                    <h3 className="text-xl font-semibold mt-2">{exp.role}</h3>
                    <p className="text-muted-foreground">{exp.company}</p>
                    <p className="text-sm text-muted-foreground mt-4">
                      {exp.description}
                    </p>
                    <div
                      className={`flex flex-wrap gap-2 mt-4 ${
                        idx % 2 === 0 ? "md:justify-end" : ""
                      }`}
                    >
                      {exp.technologies.map((tech, techIdx) => (
                        <span
                          key={techIdx}
                          className="px-3 py-1 bg-primary text-xs rounded-full text-shadow-pink-400 text-black"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
