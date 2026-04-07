"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export function HeroSection() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section id="home" className="py-12 md:py-20 relative">
      <div className="flex flex-col md:flex-row items-center justify-between gap-12">
        
        {/* Left Text Box */}
        <motion.div 
          className="w-full md:w-1/2"
          variants={container}
          initial="hidden"
          animate="show"
        >
          <motion.h1 variants={item} className="text-4xl lg:text-5xl font-semibold leading-snug mb-8">
            Ilyas is a <span className="text-primary-color relative group">web designer<span className="absolute bottom-0 left-0 w-full h-[2px] bg-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-left" /></span> and <span className="text-primary-color relative group">front-end developer<span className="absolute bottom-0 left-0 w-full h-[2px] bg-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-left" /></span>
          </motion.h1>
          <motion.p variants={item} className="text-secondary mb-8 leading-relaxed max-w-[460px]">
            He crafts responsive websites where technologies meet creativity
          </motion.p>
          <motion.div variants={item}>
            <Link 
              href="#contacts"
              className="inline-block px-4 py-2 border border-primary hover:bg-primary/20 hover:shadow-[0_0_15px_rgba(199,120,221,0.3)] transition-all text-white font-medium neon-hover"
            >
              Contact me !!
            </Link>
          </motion.div>
        </motion.div>

        {/* Right Image Box */}
        <motion.div 
          className="w-full md:w-1/2 relative flex justify-center md:justify-end"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* Logo Geometric background placeholder */}
          <motion.div 
            className="absolute top-1/4 left-10 w-[155px] h-[155px] border border-primary -z-10"
            animate={{ rotate: [0, 90, 90, 0] }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          />
          
          <div className="relative group">
            <Image 
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400&h=400" 
              alt="Ilyas" 
              width={400} 
              height={400} 
              className="object-cover z-10 filter grayscale group-hover:grayscale-0 mix-blend-lighten opacity-80 group-hover:opacity-100 transition-all duration-700"
            />
            {/* Dots */}
            <div className="absolute bottom-12 right-0 grid grid-cols-5 gap-3 opacity-50 z-20 animate-[float_6s_ease-in-out_infinite]">
              {Array.from({ length: 25 }).map((_, i) => (
                <div key={i} className="w-1 h-1 bg-secondary rounded-full" />
              ))}
            </div>
            
            <div className="absolute bottom-0 left-10 right-10 translate-y-1/2 glass-nav border border-secondary px-2 py-2 flex items-center gap-2 z-30 shadow-lg">
              <span className="relative flex h-4 w-4">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-4 w-4 bg-primary"></span>
              </span>
              <p className="text-secondary text-sm font-medium">Currently working on <span className="text-white text-glow">Portfolio</span></p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Quote Section */}
      <motion.div 
        className="mt-40 mb-10 flex justify-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <div className="relative border border-secondary hover:border-primary hover:shadow-[0_0_20px_rgba(199,120,221,0.2)] transition-all p-8 inline-block group">
          {/* top left quote */}
          <div className="absolute -top-3 left-4 bg-background px-2 group-hover:text-primary transition-colors">
            <span className="text-2xl font-serif leading-none block transform translate-y-1 text-inherit">"</span>
          </div>
          
          <p className="text-white text-xl font-medium tracking-wide">
            With great power comes great electricity bill
          </p>

          {/* bottom right quote */}
          <div className="absolute -bottom-3 right-4 bg-background px-2 group-hover:text-primary transition-colors">
             <span className="text-2xl font-serif leading-none block transform translate-y-1 text-inherit">"</span>
          </div>

          <div className="absolute top-full right-0 mt-[-1px] border border-secondary group-hover:border-primary transition-all p-4 w-48 border-t-0">
            <p className="text-white text-right">- Dr. Who</p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
