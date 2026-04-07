"use client";

import { motion } from "framer-motion";

export function SkillsGrid() {
  const skillCategories = [
    {
      title: "Languages",
      items: "TypeScript Lua Python JavaScript",
    },
    {
      title: "Databases",
      items: "SQLite PostgreSQL Mongo",
    },
    {
      title: "Tools",
      items: "VSCode Neovim Linux Figma XFCE Arch Git Font Awesome",
    },
    {
      title: "Other",
      items: "HTML CSS EJS SCSS REST Jinja",
    },
    {
      title: "Frameworks",
      items: "React Vue Disnake Discord.js Flask Express.js",
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const item = {
    hidden: { opacity: 0, scale: 0.95 },
    show: { opacity: 1, scale: 1 }
  };

  return (
    <section id="skills" className="py-12 md:py-24">
      {/* Section Header */}
      <div className="flex items-center mb-12">
        <h2 className="text-3xl font-medium text-white flex items-center">
          <span className="text-primary mr-1 text-glow">#</span>skills
        </h2>
        <div className="ml-4 h-px bg-primary w-1/4 max-w-[240px] shadow-[0_0_10px_rgba(199,120,221,0.5)]" />
      </div>

      <div className="flex flex-col md:flex-row gap-12">
        {/* Left Graphics */}
        <div className="hidden md:flex w-1/3 relative justify-center items-center">
          <div className="relative w-[250px] h-[250px]">
             {/* Dots top left */}
             <div className="absolute top-0 left-0 grid grid-cols-5 gap-3 opacity-50">
                {Array.from({ length: 25 }).map((_, i) => (
                  <motion.div 
                    key={i} 
                    className="w-1 h-1 bg-secondary rounded-full" 
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity, delay: i * 0.1 }}
                  />
                ))}
             </div>
             {/* Large square outline bottom left */}
             <motion.div 
              className="absolute bottom-10 left-6 w-[86px] h-[86px] border border-primary/50 shadow-[0_0_15px_rgba(199,120,221,0.2)]" 
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
             />
             {/* Large square outline intersecting */}
             <div className="absolute bottom-16 left-16 w-[86px] h-[86px] border border-secondary" />
             
             {/* Dots center right */}
             <div className="absolute top-20 right-10 grid grid-cols-5 gap-3 opacity-50">
                {Array.from({ length: 25 }).map((_, i) => (
                  <div key={i} className="w-1 h-1 bg-secondary rounded-full" />
                ))}
             </div>
             {/* Small square middle right */}
             <motion.div 
              className="absolute top-32 right-0 w-[52px] h-[52px] border border-secondary" 
              animate={{ rotate: -360 }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
             />
          </div>
        </div>

        {/* Right Skills Hex */}
        <motion.div 
          className="w-full md:w-2/3 flex flex-wrap gap-4 items-start content-start"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
        >
          {skillCategories.map((cat, idx) => (
            <motion.div 
              key={idx} 
              variants={item}
              className="border border-secondary w-full sm:w-[calc(50%-8px)] lg:w-[calc(33.33%-11px)] neon-hover glass-nav group"
            >
              <div className="p-2 border-b border-secondary group-hover:border-primary transition-colors">
                <h3 className="text-white font-medium group-hover:text-glow transition-all">{cat.title}</h3>
              </div>
              <div className="p-2 bg-background/30">
                <p className="text-secondary leading-relaxed group-hover:text-primary-foreground transition-colors">
                  {cat.items}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
