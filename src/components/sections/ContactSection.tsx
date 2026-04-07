"use client";

import { FaDiscord, FaEnvelope } from "react-icons/fa6";
import { motion } from "framer-motion";

export function ContactSection() {
  return (
    <section id="contacts" className="py-12 md:py-24">
      {/* Section Header */}
      <div className="flex items-center mb-12">
        <h2 className="text-3xl font-medium text-white flex items-center">
          <span className="text-primary mr-1 text-glow">#</span>contacts
        </h2>
        <div className="ml-4 h-px bg-primary w-1/4 max-w-[150px] shadow-[0_0_10px_rgba(199,120,221,0.5)]" />
      </div>
      
      <div className="flex flex-col md:flex-row justify-between gap-12">
        <motion.div 
          className="w-full md:w-1/2"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-secondary text-base leading-relaxed max-w-md">
            I'm interested in freelance opportunities. However, if you have other request or question, don't hesitate to contact me
          </p>
        </motion.div>
        
        <motion.div 
          className="w-full md:w-auto"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="border border-secondary p-4 inline-flex flex-col gap-4 neon-hover hover:border-primary glass-nav">
            <h3 className="text-white font-medium mb-1">Message me here</h3>
            
            <a href="#" className="flex items-center gap-2 text-secondary hover:text-white transition-colors group">
              <FaDiscord size={20} className="group-hover:text-primary transition-colors" />
              <span className="group-hover:text-glow transition-all">!Ilyas#3519</span>
            </a>
            
            <a href="mailto:hello@ilyasaudy.com" className="flex items-center gap-2 text-secondary hover:text-white transition-colors group">
              <FaEnvelope size={20} className="group-hover:text-primary transition-colors" />
              <span className="group-hover:text-glow transition-all">hello@ilyasaudy.com</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
