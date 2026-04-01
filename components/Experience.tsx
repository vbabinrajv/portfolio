"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import { Briefcase, Calendar, MapPin, CheckCircle2 } from "lucide-react";
import { useRef } from "react";

const experienceData = [
  {
    company: "Publicis Sapient",
    period: "2022 – Present",
    role: "Senior Associate Technology L1",
    location: "Global",
    projects: [
      {
        name: "NatWest Project",
        description: "Leading data migration strategies and implementing BDD automation frameworks integrated with Chat GPT for intelligent test case generation.",
        highlights: ["Data Migration Strategy", "BDD Automation", "ChatGPT Integration"]
      },
      {
        name: "QuizMe",
        description: "Full-cycle development of a robust Java-based assessment tool designed for enterprise technical evaluation.",
        highlights: ["Java Backend", "Enterprise Tooling", "Full-cycle Dev"]
      }
    ]
  },
  {
    company: "Tata Consultancy Services",
    period: "2018 – 2022",
    role: "System Engineer / Java Developer",
    location: "Global",
    projects: [
      {
        name: "Clever Energy & Ultimatix EMS",
        description: "Spearheaded Azure Cloud migrations resulting in a record-breaking 300% ROI for the client.",
        highlights: ["300% ROI", "Azure Cloud Migration", "Energy Sector"]
      },
      {
        name: "ROC_APP",
        description: "Focused on high-level performance and security testing using modern penetration and load testing methodologies.",
        highlights: ["Performance Optimization", "Security Testing", "Scale Engineering"]
      }
    ]
  }
];

export default function Experience() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <section id="experience" ref={containerRef} className="py-24 px-6 md:py-32 relative">
      <div className="max-w-4xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 mb-4 text-primary font-bold tracking-widest uppercase text-xs">
            <Briefcase className="w-4 h-4" />
            My Journey
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Experience & Impact</h2>
        </motion.div>

        <div className="relative">
          {/* Vertical Drawing Path Line */}
          <motion.div 
            style={{ scaleY }}
            className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-transparent origin-top hidden md:block"
          />

          <div className="space-y-24">
            {experienceData.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: i * 0.2 }}
                className={`flex flex-col md:flex-row gap-8 relative ${i % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}
              >
                {/* Timeline Node Icon */}
                <div className="absolute left-[-12px] md:left-1/2 md:translate-x-[-50%] top-0 w-6 h-6 rounded-full bg-background border-4 border-primary z-10 hidden md:block shadow-[0_0_15px_rgba(99,102,241,0.5)]" />

                <div className="md:w-1/2 space-y-4">
                  <div className="flex flex-col gap-2">
                    <span className="text-primary font-bold text-lg tracking-wide uppercase">{exp.company}</span>
                    <h3 className="text-2xl font-bold text-white">{exp.role}</h3>
                    <div className="flex items-center gap-4 text-muted-foreground text-sm font-medium">
                      <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4" /> {exp.period}</span>
                      <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4" /> {exp.location}</span>
                    </div>
                  </div>

                  <div className="space-y-6 pt-4">
                    {exp.projects.map((project, j) => (
                      <div key={j} className="glass-dark p-6 rounded-2xl border border-white/5 bg-gradient-to-br from-white/5 to-transparent shadow-xl relative group">
                        <div className="absolute -top-3 -right-3 bg-primary text-[10px] uppercase font-bold text-white px-2 py-1 rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition-opacity">
                          Project {j + 1}
                        </div>
                        <h4 className="text-lg font-bold text-accent mb-3 flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4" /> {project.name}
                        </h4>
                        <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                          {project.description}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {project.highlights.map((h) => (
                            <span key={h} className="text-[10px] font-bold px-2 py-0.5 bg-white/5 rounded-md border border-white/10 text-muted-foreground uppercase tracking-wide">
                              {h}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Visual Spacer for alternate layout */}
                <div className="md:w-1/2" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Background decoration */}
      <div className="absolute top-1/2 right-10 w-96 h-96 bg-accent/5 blur-[100px] -z-10 rounded-full" />
    </section>
  );
}
