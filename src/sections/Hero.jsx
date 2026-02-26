import { Button } from "@/components/Button";
import {
  ArrowRight,
  ChevronDown,
  Github,
  Linkedin,
  Twitter,
  Download,
  Instagram,
} from "lucide-react";
import { AnimatedBorderButton } from "../components/AnimatedBorderButton";
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
import shopify from "@/assets/shopify.png";

// Skills with logos from official CDNs
const skills = [
  { name: "HTML", img: html },
  { name: "CSS", img: css },
  { name: "Bootstrap", img: bootstrap },
  { name: "TailwindCSS", img: tailwindcss },
  { name: "Material-UI", img: mui },
  { name: "JavaScript", img: js },
  { name: "React.js", img: react },
  { name: "Next.js", img: nextjs },
  { name: "Node.js", img: nodejs },
  { name: "MongoDB", img: mongodb },
  { name: "Express.js", img: expressjs },
  { name: "Redux Toolkit", img: redux },
  { name: "Shopify", img: shopify },
  { name: "GitHub", img: github },
  { name: "Netlify", img: netlify },
  { name: "Vercel", img: vercel },
  { name: "VS Code", img: vscode },
];

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Bg */}
      <div className="absolute inset-0">
        <img
          src="/hero-bg.jpg"
          alt="Hero image"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/80 to-background" />
      </div>

      {/* Green Dots */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <div
            className="absolute w-1.5 h-1.5 rounded-full opacity-60"
            style={{
              backgroundColor: "#20B2A6",
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `slow-drift ${
                15 + Math.random() * 20
              }s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-primary">
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                <b>FULL STACK DEVELOPER</b>
              </span>
            </div>

            {/* Headline */}
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight animate-fade-in animation-delay-100">
                Crafting{" "}
                <span className="text-primary glow-text">scalable</span>
                <br />
                digital experiences with{" "}
                <span className="font-serif italic font-normal text-white">
                  precision.
                </span>
              </h1>
              <p className="text-sm md:text-base lg:text-lg text-balance text-muted-foreground max-w-lg animate-fade-in animation-delay-200">
                Hi, I'm Usman Nisar — a Full-Stack JavaScript Developer with
                over 1 year of hands-on front-end experience, specializing in
                building modern, responsive, and scalable web applications. I
                work with React, Next.js, Redux, and Material-UI to craft
                intuitive user interfaces, and use Node.js, Express, and MongoDB
                to build robust, efficient back-end systems.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 animate-fade-in animation-delay-300">
              <a
                href="https://wa.me/923244366243?text=Hi%20Usman,%20I%20found%20your%20portfolio%20and%20would%20like%20to%20connect."
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size="lg">
                  Contact Me <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </a>

              <a
                href="https://drive.google.com/uc?export=download&id=1LsjWN6ZGiq69f0AsPJuOkMMELN_LYEis"
                download="UsmanNisarResume.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <AnimatedBorderButton>
                  <Download className="w-5 h-5" />
                  Download CV
                </AnimatedBorderButton>
              </a>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4 animate-fade-in animation-delay-400">
              <span className="text-sm text-muted-foreground">Follow me: </span>
              {[
                { icon: Github, href: "https://github.com/usmannisar-dev" },
                {
                  icon: Linkedin,
                  href: "https://www.linkedin.com/in/usman-nisar-57a9b0300",
                },
                {
                  icon: Instagram,
                  href: "https://www.instagram.com/uchohan804",
                },
              ].map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all duration-300"
                >
                  {<social.icon className="w-5 h-5" />}
                </a>
              ))}
            </div>
          </div>
          {/* Right Column - Profile Image */}
          <div className="relatice animate-fade-in animation-delay-300">
            {/* Profile Image */}
            <div className="relative max-w-md mx-auto">
              <div
                className="absolute inset-0 
              rounded-3xl bg-gradient-to-br 
              from-primary/30 via-transparent 
              to-primary/10 blur-2xl animate-pulse"
              />
              <div className="relative glass border-primary rounded-3xl p-2 glow-border">
                <img
                  src="/p1.png"
                  alt="Usman Nisar"
                  className="w-full aspect-[4/5] object-cover rounded-2xl"
                />

                {/* Floating Badge */}
                <div className="absolute -bottom-4 -right-4 glass rounded-xl px-4 py-3 animate-float">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                    <span className="text-sm font-medium">
                      Available for work
                    </span>
                  </div>
                </div>
                {/* Stats Badge */}
                <div className="absolute -top-4 -left-4 glass rounded-xl px-4 py-3 animate-float animation-delay-500">
                  <div className="text-2xl font-bold text-primary">1+</div>
                  <div className="text-xs text-muted-foreground">
                    Years Exp.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Skills Section with Logos */}
        <div className="mt-20 animate-fade-in animation-delay-600">
          <p className="text-sm text-muted-foreground mb-6 text-center">
            Technologies I work with
          </p>

          <div className="relative overflow-hidden">
            {/* Single line seamless marquee */}
            <div className="flex gap-6 items-center py-4 whitespace-nowrap marquee-container hover:pause-animation">
              {[...skills, ...skills].map((skill, idx) => (
                <div
                  key={idx}
                  className="inline-flex flex-col items-center flex-shrink-0"
                >
                  <img
                    src={skill.img}
                    alt={skill.name}
                    className="w-16 h-16 md:w-20 md:h-20 object-contain hover:scale-110 transition-transform duration-300"
                  />
                  <span className="text-xs mt-1 text-muted-foreground">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 
      animate-fade-in animation-delay-800"
      >
        <a
          href="#about"
          className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
        >
          <span className="text-xs uppercase tracking-wider">Scroll</span>
          <ChevronDown className="w-6 h-6 animate-bounce" />
        </a>
      </div>
    </section>
  );
};
