"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

export default function Contact() {
  return (
    <footer id="contact" className="py-24 px-6 md:py-32 relative">
      {/* Decorative Gradient Background */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-primary/20 blur-[150px] -z-10 rounded-full" />
      
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
        {/* Left Side: Contact Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 mb-4 text-accent font-bold tracking-widest uppercase text-xs">
            <MapPin className="w-4 h-4" />
            Connect with me
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-8">Let's build something <span className="text-gradient">extraordinary</span> together.</h2>
          
          <div className="space-y-6">
            <a 
              href="mailto:babinrajv@gmail.com" 
              className="flex items-center gap-6 glass-dark p-6 rounded-3xl border border-white/5 hover:border-primary/40 transition-all group"
            >
              <div className="p-4 bg-primary/10 rounded-2xl border border-primary/20 text-primary group-hover:scale-110 transition-transform">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <p className="text-xs font-bold text-muted-foreground uppercase">Email Me</p>
                <p className="text-lg font-bold text-white">babinrajv@gmail.com</p>
              </div>
            </a>
            
            <a 
              href="tel:+918086298669" 
              className="flex items-center gap-6 glass-dark p-6 rounded-3xl border border-white/5 hover:border-accent/40 transition-all group"
            >
              <div className="p-4 bg-accent/10 rounded-2xl border border-accent/20 text-accent group-hover:scale-110 transition-transform">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <p className="text-xs font-bold text-muted-foreground uppercase">Call Me</p>
                <p className="text-lg font-bold text-white">+91 8086298669</p>
              </div>
            </a>
          </div>

          <div className="mt-12 flex gap-4">
            <a href="#" className="p-4 glass-dark rounded-2xl border border-white/5 hover:bg-white/5 transition-all text-white/50 hover:text-white">
              <FaGithub className="w-6 h-6" />
            </a>
            <a href="#" className="p-4 glass-dark rounded-2xl border border-white/5 hover:bg-white/5 transition-all text-white/50 hover:text-white">
              <FaLinkedinIn className="w-6 h-6" />
            </a>
          </div>
        </motion.div>

        {/* Right Side: Small Footer Brand Info */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="glass-dark p-12 rounded-[3.5rem] border border-white/10 text-center flex flex-col justify-center min-h-[400px]"
        >
          <div className="mb-8">
            <span className="text-3xl font-black tracking-tighter uppercase">Babinraj .V</span>
          </div>
          <p className="text-muted-foreground text-lg mb-10 max-w-sm mx-auto leading-relaxed">
            Senior Java Developer & Automation Architect with over 7 years of industrial experience. Focused on building high-end, scalable, and AI-driven enterprise solutions.
          </p>
          
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center justify-center gap-2 bg-white text-black px-10 py-5 rounded-[2rem] font-black text-lg shadow-2xl hover:bg-accent hover:text-black transition-colors"
          >
            Get In Touch <Send className="w-5 h-5" />
          </motion.button>
          
          <p className="mt-12 text-xs font-bold text-muted-foreground uppercase tracking-widest opacity-30">
            &copy; {new Date().getFullYear()} Babinraj V. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
