"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const projects = [
  {
    title: "ChertNodes",
    description: "Minecraft servers hosting",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000",
    tags: ["HTML", "SCSS", "Python", "Flask"],
    link: "#",
  },
  {
    title: "ProtectX",
    description: "Discord anti-crash bot",
    image: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?auto=format&fit=crop&q=80&w=1000",
    tags: ["React", "Express", "Discord.js", "Node.js"],
    link: "#",
  },
  {
    title: "Kahoot Answers Viewer",
    description: "Get answers to your kahoot quiz",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1000",
    tags: ["CSS", "Express", "Node.js"],
    link: "#",
  },
];

export function ProjectsSection() {
  return (
    <section id="works" className="py-12 md:py-24">
      {/* Section Header */}
      <div className="flex items-center justify-between mb-12">
        <div className="flex items-center flex-1">
          <h2 className="text-3xl font-medium text-white flex items-center">
            <span className="text-primary mr-1 text-glow">#</span>projects
          </h2>
          <div className="ml-4 h-px bg-primary w-1/4 max-w-sm hidden md:block shadow-[0_0_10px_rgba(199,120,221,0.5)]" />
        </div>
        <a href="#" className="text-white hover:text-primary hover:text-glow transition-all flex items-center gap-2">
          View all <span className="font-sans">~~&gt;</span>
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, idx) => (
          <motion.div 
            key={idx} 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="border border-secondary hover:border-primary flex flex-col group overflow-hidden neon-hover glass-nav"
          >
            {/* Image Container */}
            <div className="relative h-48 w-full border-b border-secondary group-hover:border-primary transition-colors overflow-hidden">
              <Image 
                src={project.image} 
                alt={project.title} 
                fill
                className="object-cover opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity mix-blend-overlay" />
            </div>

            {/* Tech Stack */}
            <div className="p-2 border-b border-secondary group-hover:border-primary/50 transition-colors bg-background/50">
              <p className="text-secondary text-sm group-hover:text-primary-foreground transition-colors">
                {project.tags.join(" ")}
              </p>
            </div>

            {/* Content */}
            <div className="p-4 flex-1 flex flex-col relative">
              <h3 className="text-2xl font-medium text-white mb-2 group-hover:text-glow transition-all">{project.title}</h3>
              <p className="text-secondary mb-4 flex-1">
                {project.description}
              </p>
              
              <div className="flex gap-4 mt-auto relative z-10">
                <a href={project.link} className="px-4 py-2 border border-primary hover:bg-primary/20 hover:shadow-[0_0_10px_rgba(199,120,221,0.3)] transition-all text-white font-medium flex items-center gap-2 text-sm">
                  Live &lt;~&gt;
                </a>
                {idx !== 2 && (
                  <a href="#" className="px-4 py-2 border border-secondary hover:border-primary hover:text-white transition-all text-secondary font-medium flex items-center gap-2 text-sm">
                    Github &gt;=
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
