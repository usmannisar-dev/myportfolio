import { ArrowUpRight, Github } from "lucide-react";
import { AnimatedBorderButton } from "@/components/AnimatedBorderButton";
const projects = [
  {
    title: "Forever E-Commerce Website",
    description:
      "An e-commerce application for men's and women's clothing, featuring product listings, detailed product views, and a responsive user interface. Built with a modern tech stack to deliver a smooth and scalable shopping experience.",
    image: "/projects/forever.png",
    tags: ["TailwindCSS", "React.js", "Node.js", "MongoDB", "Express.js"],
    link: "https://forever-ecommerce-eight.vercel.app",
    github: "https://github.com/usmannisar-dev/forever-ecommerce",
  },
  {
    title: "Kmat Technical Website",
    description:
      "This project is a versatile platform designed to manage a wide array of services, including home appliances repair, air conditioning maintenance, kitchen equipment services, and more.",
    image: "/projects/kmat.png",
    tags: ["Formik", "Material-UI", "React.js", "Next.js"],
    link: "https://www.kmatechnical.com",
    github: "https://github.com/usmannisar-dev/Darat-Booking-Website",
  },
  {
    title: "Taskify — Daily Task Management",
    description:
      "A modern task management application with full CRUD functionality, powered by Redux for predictable and efficient state management. Designed with a clean UI to help users organize, track, and manage tasks seamlessly.",
    image: "/projects/todo.png",
    tags: ["Material-UI", "Formik", "React.js", "Redux"],
    link: "https://dailytasksmanager.netlify.app",
    github: "https://github.com/usmannisar-dev/ToDoWebsite",
  },
  {
    title: "Tic Tac Toe Game",
    description:
      "A sleek, animated Tic Tac Toe game built with React and Material-UI. Designed with clean logic, responsive layout, and smooth interactions.And Include a dynamic winner modal.",
    image: "/projects/tiktaktoe.png",
    tags: ["Material-UI", "Formik", "React.js", "Redux"],
    link: "https://to-do-website-snowy-iota.vercel.app/",
    github: "https://github.com/usmannisar-dev/to-do-website",
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      {/* Bg glows */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mx-auto max-w-3xl mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            Featured Projects
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            Projects that
            <span className="font-serif italic font-normal text-white">
              {" "}
              make an impact.
            </span>
          </h2>
          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            A selection of my recent work, from complex web applications to
            innovative tools that solve real-world problems.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="group glass rounded-2xl overflow-hidden animate-fade-in md:row-span-1"
              style={{ animationDelay: `${(idx + 1) * 100}ms` }}
            >
              {/* Image */}
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div
                  className="absolute inset-0 
                bg-gradient-to-t from-card via-card/50
                 to-transparent opacity-60"
                />
                {/* Overlay Links */}
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={project.link}
                    className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                  >
                    <ArrowUpRight className="w-5 h-5" />
                  </a>
                  <a
                    href={project.github}
                    className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <div className="flex items-start justify-between">
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <ArrowUpRight
                    className="w-5 h-5 
                  text-muted-foreground group-hover:text-primary
                   group-hover:translate-x-1 
                   group-hover:-translate-y-1 transition-all"
                  />
                </div>
                <p className="text-muted-foreground text-sm">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIdx) => (
                    <span
                      key={tagIdx}
                      className="px-4 py-1.5 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All CTA */}
        <div className="text-center mt-12 animate-fade-in animation-delay-500">
          <AnimatedBorderButton>
            View All Projects
            <ArrowUpRight className="w-5 h-5" />
          </AnimatedBorderButton>
        </div>
      </div>
    </section>
  );
};
