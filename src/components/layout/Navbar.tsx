"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "home", href: "#home" },
    { name: "works", href: "#works" },
    { name: "about-me", href: "#about" },
    { name: "contacts", href: "#contacts" },
  ];

  return (
    <motion.header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? "glass-nav py-4 shadow-[0_4px_30px_rgba(0,0,0,0.1)]" : "bg-transparent py-6"}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="max-w-[1024px] mx-auto px-4 lg:px-0 flex items-center justify-between">
        
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-4 h-4 relative">
            <div className="absolute top-0 left-0 w-3 h-3 border-2 border-white group-hover:border-primary group-hover:shadow-[0_0_10px_rgba(199,120,221,0.5)] transition-all" />
            <div className="absolute bottom-0 right-0 w-3 h-3 border-2 border-white group-hover:border-primary group-hover:shadow-[0_0_10px_rgba(199,120,221,0.5)] transition-all" />
          </div>
          <span className="font-semibold text-white tracking-wide group-hover:text-glow transition-all">Ilyas</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-secondary hover:text-white hover:text-glow transition-all"
            >
              <span className="text-primary mr-1">#</span>{link.name}
            </Link>
          ))}
          <div className="flex items-center gap-1 text-secondary text-sm font-medium hover:text-white hover:text-glow cursor-pointer transition-all">
            EN
            <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 1L5 5L9 1" stroke="currentColor"/>
            </svg>
          </div>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white hover:text-primary transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav Menu */}
      {mobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          className="absolute top-full left-0 w-full glass-nav border-t border-secondary/20 md:hidden z-50 shadow-lg"
        >
          <div className="px-4 py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-lg font-medium text-secondary hover:text-white transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="text-primary mr-1">#</span>{link.name}
              </Link>
            ))}
            <div className="text-lg font-medium text-secondary hover:text-white transition-colors cursor-pointer">
              EN
            </div>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
}
