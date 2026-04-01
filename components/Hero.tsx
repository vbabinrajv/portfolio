"use client";

import { motion } from "framer-motion";
import { Download, ChevronRight } from "lucide-react";
import { useEffect, useState, ReactNode } from "react";
import { SiSpringboot, SiPostgresql } from "react-icons/si";
import { DiJava } from "react-icons/di";
import { VscAzure } from "react-icons/vsc";

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const techStack = [
    { name: "Java 8", color: "bg-orange-500", icon: <DiJava />, x: -400, y: -220 },
    { name: "Spring Boot", color: "bg-green-600", icon: <SiSpringboot />, x: 400, y: -180 },
    { name: "Azure", color: "bg-blue-600", icon: <VscAzure />, x: -420, y: 250 },
    { name: "Postgres", color: "bg-indigo-500", icon: <SiPostgresql />, x: 430, y: 220 },
  ];

  return (
    <section className="relative min-h-[90vh] flex flex-col justify-center items-center px-4 overflow-hidden pt-20">
      {/* 3D Floating Tech Stack Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {techStack.map((tech, i) => (
          <motion.div
            key={i}
            className={`absolute ${tech.color} px-4 py-2 rounded-full glass-dark text-white font-medium text-sm hidden md:flex items-center gap-2 shadow-xl border border-white/20`}
            initial={{ opacity: 0, x: 0, y: 0 }}
            animate={{
              opacity: 0.7,
              scale: 0.8,
              x: tech.x + mousePosition.x * (i + 1),
              y: tech.y + mousePosition.y * (i + 1),
            }}
            transition={{ type: "spring", damping: 10, stiffness: 45 }}
            style={{
              left: "50%",
              top: "50%",
              transform: "translate(-50%, -50%)",
            }}
          >
            <span className="text-lg">{tech.icon}</span>
            {tech.name}
          </motion.div>
        ))}
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-4 inline-block px-4 py-1.5 rounded-full glass-dark border border-white/10"
        >
          <span className="text-sm font-medium text-accent">Senior Associate Technology L1 @ Publicis Sapient</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl font-bold tracking-tight mb-6"
        >
          Babinraj V
          <span className="block text-gradient mt-2">Senior Java Developer & Automation Architect</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto"
        >
          Building sustainable, AI-driven solutions from Kerala to the World. 
          Bridging the gap between robust system engineering and cutting-edge automation.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-wrap justify-center gap-4"
        >
          <button 
            onClick={() => document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' })}
            className="group flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3.5 rounded-xl font-semibold transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg shadow-primary/20"
          >
            View Experience
            <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          
          <a 
            href="/resume.pdf" 
            target="_blank"
            className="flex items-center gap-2 glass hover:bg-white/20 text-foreground px-8 py-3.5 rounded-xl font-semibold transition-all duration-300 hover:scale-105 active:scale-95 border border-white/20"
          >
            Download Resume
            <Download className="w-5 h-5" />
          </a>
        </motion.div>
      </div>

      {/* Decorative Gradient Blob */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/20 blur-[120px] -z-10 rounded-full" />
    </section>
  );
}
