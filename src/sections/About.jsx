import {
  Code2,
  Rocket,
  Layers,
  Brain,
  ArrowUpRight,
  Sparkles,
} from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Clean & Scalable Code",
    description:
      "Building maintainable, reusable, and scalable solutions with modern development practices.",
  },
  {
    icon: Layers,
    title: "Full-Stack Development",
    description:
      "Developing complete web applications across React, Angular, Node.js, Express.js, and MongoDB.",
  },
  {
    icon: Brain,
    title: "AI-Powered Solutions",
    description:
      "Integrating generative AI and Gemini API to build intelligent and practical application features.",
  },
  {
    icon: Rocket,
    title: "Modern Development",
    description:
      "Working with CI/CD, Docker, Kubernetes, and modern deployment workflows to deliver reliable applications.",
  },
];

export const About = () => {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      {/* ==================== BACKGROUND EFFECTS ==================== */}

      <div className="absolute inset-0 pointer-events-none">
        {/* Main glow */}
        <div className="absolute top-1/4 -left-40 w-[500px] h-[500px] rounded-full bg-primary/10 blur-[140px] animate-about-glow" />

        <div className="absolute bottom-0 -right-40 w-[500px] h-[500px] rounded-full bg-primary/5 blur-[140px] animate-about-glow-reverse" />

        {/* Small floating lights */}
        <div className="absolute top-20 right-[15%] w-2 h-2 rounded-full bg-primary/60 shadow-[0_0_20px_hsl(var(--primary))] animate-about-particle" />

        <div className="absolute top-[45%] left-[8%] w-1.5 h-1.5 rounded-full bg-primary/50 shadow-[0_0_15px_hsl(var(--primary))] animate-about-particle-delay" />

        <div className="absolute bottom-24 right-[30%] w-2 h-2 rounded-full bg-primary/40 shadow-[0_0_20px_hsl(var(--primary))] animate-about-particle" />

        {/* Grid */}
        <div className="absolute inset-0 opacity-[0.025] about-grid" />
      </div>

      {/* ==================== CONTENT ==================== */}

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 xl:gap-24 items-center">
          {/* ==================== LEFT COLUMN ==================== */}

          <div className="space-y-8">
            {/* Section Label */}
            <div className="animate-fade-in">
              <div className="inline-flex items-center gap-3">
                <span className="relative flex items-center justify-center w-8 h-8 rounded-lg bg-primary/10 border border-primary/20">
                  <Sparkles className="w-4 h-4 text-primary animate-pulse" />

                  <span className="absolute inset-0 rounded-lg border border-primary/20 animate-about-ring" />
                </span>

                <span className="text-secondary-foreground text-sm font-medium tracking-[0.2em] uppercase">
                  About Me
                </span>
              </div>
            </div>

            {/* Heading */}
            <h2 className="text-4xl md:text-5xl xl:text-6xl font-bold leading-[1.05] animate-fade-in animation-delay-100 text-secondary-foreground">
              Building the future,
              <span className="block mt-2 font-serif italic font-normal text-white relative w-fit">
                one solution at a time.
                {/* Animated underline */}
                <span className="absolute -bottom-3 left-0 w-full h-px bg-gradient-to-r from-primary via-primary/70 to-transparent animate-about-line" />
              </span>
            </h2>

            {/* Description */}
            <div className="space-y-5 text-muted-foreground leading-7 animate-fade-in animation-delay-200">
              <p>
                I'm a Software Engineer and Full-Stack Developer with 1+ year of
                professional experience building modern, responsive, and
                scalable web applications. I enjoy turning ideas into reliable
                digital products that solve real-world problems and deliver
                meaningful user experiences.
              </p>

              <p>
                I specialize in the MERN and MEAN stacks, working with React.js,
                Next.js, Angular, JavaScript, TypeScript, Redux Toolkit,
                Node.js, Express.js, and MongoDB. I also have experience with
                REST APIs, authentication, responsive UI development, and modern
                application architecture.
              </p>

              <p>
                I'm also exploring the intersection of full-stack development
                and generative AI. Recently, I built an AI-powered Learning
                Assistant using the Gemini API, implementing features such as
                AI-generated summaries, flashcards, quizzes, concept
                explanations, and contextual chat.
              </p>

              <p>
                Beyond development, I'm continuously improving my skills in
                CI/CD, Docker, Kubernetes, and modern deployment workflows while
                expanding my knowledge of AI-powered application development.
              </p>
            </div>

            {/* ==================== QUOTE CARD ==================== */}

            <div className="relative group animate-fade-in animation-delay-300">
              {/* Glow */}
              <div className="absolute -inset-1 rounded-2xl bg-primary/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

              <div className="relative glass rounded-2xl p-6 md:p-7 border border-white/5 overflow-hidden transition-all duration-500 group-hover:-translate-y-1 group-hover:border-primary/20">
                {/* Shine */}
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/5 to-transparent" />

                {/* Quote mark */}
                <div className="absolute -top-5 -left-1 text-7xl font-serif text-primary/10 select-none">
                  "
                </div>

                <p className="relative z-10 text-lg md:text-xl font-medium italic text-foreground leading-relaxed">
                  "I believe great software is built by combining clean
                  engineering, thoughtful user experiences, and continuous
                  learning."
                </p>

                <div className="mt-5 flex items-center gap-3">
                  <span className="w-10 h-px bg-primary/60" />

                  <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                    Engineering Philosophy
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* ==================== RIGHT COLUMN ==================== */}

          <div className="grid sm:grid-cols-2 gap-5">
            {highlights.map((item, idx) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="group relative animate-fade-in"
                  style={{
                    animationDelay: `${(idx + 1) * 120}ms`,
                  }}
                >
                  {/* Card glow */}
                  <div className="absolute -inset-1 rounded-3xl bg-primary/10 blur-xl opacity-0 group-hover:opacity-100 transition-all duration-700" />

                  {/* Card */}
                  <div className="relative h-full glass rounded-3xl p-6 md:p-7 border border-white/5 overflow-hidden transition-all duration-500 ease-out group-hover:-translate-y-2 group-hover:border-primary/30 group-hover:shadow-[0_20px_60px_rgba(0,0,0,0.25)]">
                    {/* Top shine */}
                    <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    {/* Moving shine */}
                    <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/[0.04] to-transparent pointer-events-none" />

                    {/* Background number */}
                    <span className="absolute -right-3 -top-5 text-8xl font-black text-white/[0.02] select-none">
                      0{idx + 1}
                    </span>

                    {/* Icon */}
                    <div className="relative w-14 h-14 rounded-2xl bg-primary/10 border border-primary/10 flex items-center justify-center mb-6 transition-all duration-500 group-hover:bg-primary/15 group-hover:border-primary/30 group-hover:scale-110 group-hover:rotate-3">
                      {/* Icon glow */}
                      <div className="absolute inset-0 rounded-2xl bg-primary/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                      <Icon className="relative z-10 w-6 h-6 text-primary transition-transform duration-500 group-hover:scale-110" />

                      {/* Orbit */}
                      <span className="absolute inset-[-5px] rounded-2xl border border-primary/0 group-hover:border-primary/20 transition-all duration-500" />
                    </div>

                    {/* Title */}
                    <h3 className="relative z-10 text-lg font-semibold mb-3 text-foreground transition-colors duration-300 group-hover:text-primary">
                      {item.title}
                    </h3>

                    {/* Description */}
                    <p className="relative z-10 text-sm leading-6 text-muted-foreground">
                      {item.description}
                    </p>

                    {/* Bottom arrow */}
                    <div className="relative z-10 mt-6 flex justify-end">
                      <div className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center opacity-40 group-hover:opacity-100 group-hover:border-primary/30 transition-all duration-500">
                        <ArrowUpRight className="w-4 h-4 text-primary transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </div>
                    </div>

                    {/* Bottom line */}
                    <div className="absolute bottom-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-primary/0 to-transparent group-hover:via-primary/60 transition-all duration-700" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
