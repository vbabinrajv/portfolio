"use client";

import { motion } from "framer-motion";
import { Award, Trophy, Star, TrendingUp, Zap } from "lucide-react";
import { useEffect, useState } from "react";

const awardsData = [
  { title: "Technical Excellence Award", issuer: "TCS", icon: <Trophy className="w-5 h-5" /> },
  { title: "QE Enabler Award", issuer: "Publicis Sapient (2023)", icon: <Award className="w-5 h-5" /> },
  { title: "On The Spot Award", issuer: "Critical Issue Resolution", icon: <Zap className="w-5 h-5" /> },
  { title: "Best Team Award", issuer: "Cloud Migration", icon: <Star className="w-5 h-5" /> },
];

const metricsData = [
  { label: "Reduction in Regression Cycle", value: "50%" },
  { label: "ROI on Cloud Migration", value: "300%" },
  { label: "Experience in IT", value: "7+ Yrs" },
];

export default function Awards() {
  const [metricIndex, setMetricIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setMetricIndex((prev) => (prev + 1) % metricsData.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="awards" className="py-24 px-6 md:py-32 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 mb-4 text-primary font-bold tracking-widest uppercase text-xs">
            <Trophy className="w-4 h-4" />
            Impact & Social Proof
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Awards & Key Metrics</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* Awards List */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold mb-8 flex items-center gap-2">
              <Star className="w-6 h-6 text-accent" /> Recognitions
            </h3>
            {awardsData.map((award, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-dark p-6 rounded-2xl border border-white/5 flex items-center gap-6 group hover:border-primary/40 transition-all cursor-default"
              >
                <div className="bg-primary/10 p-3 rounded-xl border border-primary/20 text-primary group-hover:scale-110 transition-transform">
                  {award.icon}
                </div>
                <div>
                  <h4 className="font-bold text-lg text-white mb-0.5">{award.title}</h4>
                  <p className="text-xs font-bold text-muted-foreground uppercase">{award.issuer}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Slot Machine Metric Section */}
          <div className="relative group">
            <div className="absolute inset-0 bg-primary/20 blur-[100px] -z-10 opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="glass-dark p-12 rounded-[3rem] border border-white/10 text-center relative overflow-hidden shadow-2xl">
              <div className="mb-6 flex justify-center">
                <div className="p-4 bg-accent/10 rounded-full">
                  <TrendingUp className="w-10 h-10 text-accent animate-pulse" />
                </div>
              </div>

              <div className="h-24 overflow-hidden relative mb-4">
                <motion.div
                  key={metricIndex}
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -50, opacity: 0 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="text-6xl md:text-7xl font-black text-white"
                >
                  {metricsData[metricIndex].value}
                </motion.div>
              </div>

              <motion.div
                key={metricIndex + "label"}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-lg font-bold text-muted-foreground uppercase tracking-widest"
              >
                {metricsData[metricIndex].label}
              </motion.div>
              
              <div className="mt-12 flex justify-center gap-2">
                {metricsData.map((_, i) => (
                  <div 
                    key={i} 
                    className={`h-1.5 rounded-full transition-all duration-500 ${i === metricIndex ? 'w-8 bg-primary' : 'w-2 bg-white/10'}`} 
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Infinite Marquee Section - Award Badges */}
        <div className="mt-24 py-12 relative">
          <div className="absolute top-0 left-0 w-24 h-full bg-gradient-to-r from-background to-transparent z-10" />
          <div className="absolute top-0 right-0 w-24 h-full bg-gradient-to-l from-background to-transparent z-10" />
          
          <div className="flex gap-8 overflow-hidden group">
            <motion.div 
              animate={{ x: [0, -1035] }} 
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="flex gap-8 whitespace-nowrap min-w-full items-center"
            >
              {[...Array(3)].flatMap((_, index) => (
                awardsData.map((award, i) => (
                  <div key={`${index}-${i}`} className="flex items-center gap-3 px-8 py-4 glass-dark rounded-full border border-white/5 opacity-50 hover:opacity-100 transition-opacity whitespace-nowrap">
                    <span className="text-primary font-bold">#</span>
                    <span className="text-sm font-bold text-muted-foreground uppercase">{award.title}</span>
                  </div>
                ))
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
