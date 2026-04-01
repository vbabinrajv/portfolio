"use client";

import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

const navLinks = [
  { name: "About", id: "about" },
  { name: "Experience", id: "experience" },
  { name: "Skills", id: "skills" },
  { name: "Awards", id: "awards" },
  { name: "Contact", id: "contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4 ${
        isScrolled ? "bg-background/80 backdrop-blur-md border-b border-white/5 py-3" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-2xl font-bold tracking-tighter"
        >
          <span className="text-primary tracking-widest uppercase text-lg">Babinraj</span>
          <span className="text-white tracking-widest uppercase text-lg"> .V</span>
        </motion.div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link, i) => (
            <motion.button
              key={link.id}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              onClick={() => document.getElementById(link.id)?.scrollIntoView({ behavior: 'smooth' })}
              className="text-sm font-medium text-muted-foreground hover:text-white transition-colors relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
            </motion.button>
          ))}
          <motion.button
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-primary text-white text-sm font-semibold px-5 py-2 rounded-lg hover:bg-primary/90 transition-all shadow-lg shadow-primary/20"
          >
            Hire Me
          </motion.button>
        </div>

        {/* Mobile Nav Toggle */}
        <button 
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-full left-0 right-0 glass-dark border-b border-white/5 p-6 md:hidden"
        >
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => {
                  document.getElementById(link.id)?.scrollIntoView({ behavior: 'smooth' });
                  setIsOpen(false);
                }}
                className="text-left text-lg font-medium text-muted-foreground hover:text-white"
              >
                {link.name}
              </button>
            ))}
          </div>
        </motion.div>
      )}
    </nav>
  );
}
