"use client";

import { motion } from "framer-motion";
import { Database, Wrench, Layout, Server, Sparkles } from "lucide-react";

const skillCategories = [
  {
    title: "Backend Development",
    icon: <Server className="w-6 h-6 text-primary" />,
    skills: ["Core Java", "Java 8", "Spring Boot", "Nodejs", "GraphQL", "Rest API"],
    className: "md:col-span-2 md:row-span-1",
    gradient: "from-primary/10 via-primary/5 to-transparent border-primary/20"
  },
  {
    title: "Data & Cloud",
    icon: <Database className="w-6 h-6 text-blue-400" />,
    skills: ["PostgreSQL", "Snowflake (SQL)", "Elastic Search", "Azure"],
    className: "md:col-span-1 md:row-span-2",
    gradient: "from-blue-400/10 via-blue-400/5 to-transparent border-blue-400/20"
  },
  {
    title: "Frontend",
    icon: <Layout className="w-6 h-6 text-accent" />,
    skills: ["AngularJS"],
    className: "md:col-span-1 md:row-span-1",
    gradient: "from-accent/10 via-accent/5 to-transparent border-accent/20"
  },
  {
    title: "Automation & Testing",
    icon: <Sparkles className="w-6 h-6 text-green-400" />,
    skills: ["Selenium", "Cucumber", "Gherkin", "Karate", "JMeter"],
    className: "md:col-span-2 md:row-span-1",
    gradient: "from-green-400/10 via-green-400/5 to-transparent border-green-400/20"
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 md:py-32">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 mb-4 text-accent font-bold tracking-widest uppercase text-xs">
            <Wrench className="w-4 h-4" />
            Toolbox
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Mastered Technologies</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A comprehensive stack built on consistency, scalability, and modern automation standards.
          </p>
        </motion.div>

        {/* Bento Box Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-auto">
          {skillCategories.map((category, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -5 }}
              className={`glass-dark p-8 rounded-[2rem] border relative overflow-hidden group flex flex-col ${category.className} ${category.gradient}`}
            >
              {/* Category Header */}
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 bg-white/5 rounded-2xl border border-white/10 group-hover:border-white/20 transition-colors">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold tracking-tight">{category.title}</h3>
              </div>

              {/* Skills Tags Area */}
              <div className="flex flex-wrap gap-3 mt-auto">
                {category.skills.map((skill, j) => (
                  <motion.span
                    key={j}
                    whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 255, 255, 0.1)" }}
                    className="px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-sm font-medium text-muted-foreground hover:text-white transition-all cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>

              {/* Decorative Corner Glow */}
              <div className="absolute -bottom-12 -right-12 w-32 h-32 bg-white/5 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>
          ))}
        </div>

        {/* Impact Metric (Sneak Peek into Awards) */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 glass-dark p-1 rounded-full border border-white/5 max-w-md mx-auto overflow-hidden"
        >
          <div className="bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 px-6 py-2 flex items-center justify-center gap-3 text-sm font-bold text-accent italic">
            <Sparkles className="w-4 h-4" />
            Continuously learning and refining through AI-led processes.
          </div>
        </motion.div>
      </div>
    </section>
  );
}
