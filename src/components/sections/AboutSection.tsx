"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export function AboutSection() {
  return (
    <section id="about" className="py-12 md:py-24">
      <div className="flex flex-col lg:flex-row items-center gap-16">
        
        <motion.div 
          className="w-full lg:w-1/2"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          {/* Section Header */}
          <div className="flex items-center mb-6">
            <h2 className="text-3xl font-medium text-white flex items-center">
              <span className="text-primary mr-1 text-glow">#</span>about-me
            </h2>
            <div className="ml-4 h-px bg-primary w-2/3 max-w-[320px] shadow-[0_0_10px_rgba(199,120,221,0.5)]" />
          </div>
          
          <div className="space-y-6 text-secondary text-base leading-relaxed">
            <p>
              Hello, i'm Ilyas!
            </p>
            <p>
              I'm a self-taught front-end developer based in Kyiv, Ukraine. I can develop responsive websites from scratch and raise them into modern user-friendly web experiences.
            </p>
            <p>
              Transforming my creativity and knowledge into a websites has been my passion for over a year. I have been helping various clients to establish their presence online. I always strive to learn about the newest technologies and frameworks.
            </p>
            
            <div className="pt-4">
              <a href="#" className="inline-block px-4 py-2 border border-primary hover:bg-primary/20 hover:shadow-[0_0_15px_rgba(199,120,221,0.3)] transition-all text-white font-medium neon-hover">
                Read more -&gt;
              </a>
            </div>
          </div>
        </motion.div>
        
        <motion.div 
          className="w-full lg:w-1/2 relative flex justify-center mt-12 lg:mt-0"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="relative border-b border-primary pt-10 group">
            <div className="absolute inset-0 bg-primary/20 blur-[50px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-1000 -z-10" />
            {/* Dots top left */}
            <div className="absolute top-0 left-0 grid grid-cols-5 gap-3 opacity-50 z-20 animate-[float_6s_ease-in-out_infinite_reverse]">
              {Array.from({ length: 25 }).map((_, i) => (
                <div key={i} className="w-1 h-1 bg-secondary rounded-full group-hover:bg-primary/80 transition-colors" />
              ))}
            </div>
            
            <Image
              src="https://images.unsplash.com/photo-1542360663-8f402003f4cf?auto=format&fit=crop&q=80&w=400&h=500"
              alt="Ilyas Audy"
              width={340}
              height={460}
              className="object-cover z-10 relative filter grayscale group-hover:grayscale-0 transition-all duration-700 mix-blend-lighten opacity-80 group-hover:opacity-100"
            />
            
            {/* Dots right middle */}
            <div className="absolute top-1/2 -right-8 grid grid-cols-4 gap-3 opacity-50 z-20 animate-[float_4s_ease-in-out_infinite]">
              {Array.from({ length: 20 }).map((_, i) => (
                <div key={i} className="w-1 h-1 bg-secondary rounded-full group-hover:bg-primary/80 transition-colors" />
              ))}
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
