"use client";

import { motion } from "framer-motion";
import { GraduationCap, Languages, Target, User } from "lucide-react";

const stats = [
  { label: "Years Exp", value: "7+", icon: <Target className="w-5 h-5 text-accent" /> },
  { label: "Projects", value: "10+", icon: <Target className="w-5 h-5 text-accent" /> },
  { label: "Companies", value: "2", icon: <Target className="w-5 h-5 text-accent" /> },
];

export default function About() {
  return (
    <section id="about" className="py-24 px-6 md:py-32">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
        {/* Left Side: Summary and Stats */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 mb-6 text-primary font-semibold tracking-wider uppercase text-sm">
            <User className="w-4 h-4" />
            About Me
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-8 tracking-tight">
            Digital narrative of a <span className="text-primary italic">System Engineer</span> turned <span className="text-accent underline decoration-primary/40 underline-offset-8">Senior Developer</span>.
          </h2>
          
          <p className="text-lg text-muted-foreground leading-relaxed mb-10">
            With over 7 years of deep technical expertise, I have evolved into a Senior Java Developer and Test Automation expert. 
            My journey spans critical sectors including Energy, Utility, and Banking, where I've delivered high-impact solutions 
            for global industry leaders.
          </p>

          <div className="grid grid-cols-3 gap-4 mb-10">
            {stats.map((stat, i) => (
              <div key={i} className="glass-dark p-6 rounded-2xl border border-white/5 hover:border-primary/30 transition-colors">
                <div className="text-2xl md:text-3xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-xs text-muted-foreground uppercase font-semibold">{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Right Side: Education and Info Cards */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          {/* Education Card */}
          <div className="glass-dark p-8 rounded-3xl border border-white/5 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 blur-3xl -z-10 group-hover:bg-primary/20 transition-colors" />
            <div className="flex items-start gap-4">
              <div className="bg-primary/10 p-3 rounded-xl border border-primary/20">
                <GraduationCap className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Education</h3>
                <p className="font-semibold text-white">B.Tech in Computer Science and Engineering</p>
                <p className="text-muted-foreground mb-3 text-sm">Cochin University of Science and Technology</p>
                <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-accent text-sm font-bold">
                  7.96 CGPA
                </div>
              </div>
            </div>
          </div>

          {/* Languages & Extras */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="glass-dark p-6 rounded-3xl border border-white/5">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-accent/10 p-2 rounded-lg">
                  <Languages className="w-5 h-5 text-accent" />
                </div>
                <h3 className="font-bold">Languages</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {["English", "Malayalam", "Hindi"].map((lang) => (
                  <span key={lang} className="text-xs font-semibold px-3 py-1 bg-white/5 rounded-full border border-white/10 text-muted-foreground">
                    {lang}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="glass-dark p-6 rounded-3xl border border-white/5 bg-gradient-to-br from-primary/5 to-transparent">
              <h3 className="font-bold mb-3">Core Expertise</h3>
              <ul className="text-sm space-y-2 text-muted-foreground font-medium">
                <li>• Backend Engineering</li>
                <li>• Cloud Migration</li>
                <li>• Enterprise Solutions</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
