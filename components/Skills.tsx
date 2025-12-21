import React, { useRef, useState } from 'react';
import { motion as motionBase, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { SKILLS } from '../constants';
import { Code, Server, Terminal, PenTool, Cpu, Layers, Database, Globe } from 'lucide-react';

const motion = motionBase as any;

const Skills: React.FC = () => {
  const categories = ['Frontend', 'Backend', 'Tools', 'Design'];

  return (
    <section id="skills" className="py-32 bg-background relative flex flex-col items-center justify-center overflow-hidden transition-colors duration-500">

     
      {/* Header */}
      <div className="text-center mb-20 relative z-10 px-6">
        <motion.div 
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-surface/50 border border-yellow-500/20 mb-6 backdrop-blur-md"
        >
            <div className="w-1.5 h-1.5 rounded-full bg-yellow-500 animate-pulse" />
            <span className="text-[10px] font-university tracking-widest text-muted uppercase">Technical Proficiency</span>
        </motion.div>
        
        {/* HERO STYLE TITLE GRADIENT */}
        <motion.h2 
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
            className="text-4xl md:text-6xl font-university font-bold mb-6 text-transparent bg-clip-text bg-[linear-gradient(110deg,#854d0e_0%,#ca8a04_25%,#854d0e_45%,#ffffff_50%,#854d0e_55%,#ca8a04_75%,#854d0e_100%)] dark:bg-[linear-gradient(110deg,#8a6e2f_0%,#eec13f_25%,#8a6e2f_45%,#ffffff_50%,#8a6e2f_55%,#eec13f_75%,#8a6e2f_100%)] bg-[length:200%_auto] animate-shine-text"
        >
            Engineering Arsenal
        </motion.h2>
        <motion.p 
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
            className="text-muted max-w-2xl mx-auto text-lg font-light"
        >
            A curated stack of technologies designed for performance, scalability, and elegance.
        </motion.p>
      </div>

      {/* Grid Container */}
      <div className="relative w-full max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8 z-10">
         {categories.map((cat, index) => (
             <TiltCard key={index} category={cat} index={index} />
         ))}
      </div>

    </section>
  );
};

// --- SUB-COMPONENT: SKILL CARD ---
const TiltCard: React.FC<{ category: string, index: number }> = ({ category, index }) => {
    // Config per category
    const getConfig = (cat: string) => {
        switch(cat) {
            case 'Frontend': return { icon: Layers, desc: "Building immersive UI/UX experiences." };
            case 'Backend': return { icon: Database, desc: "Robust data architectures & APIs." };
            case 'Tools': return { icon: Terminal, desc: "DevOps, Deployment & Workflow." };
            case 'Design': return { icon: PenTool, desc: "Prototyping & Visual aesthetics." };
            default: return { icon: Code, desc: "Development tools." };
        }
    };

    const config = getConfig(category);
    const catSkills = SKILLS.filter(s => s.category === category);
    const Icon = config.icon;

    return (
        <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 * index }}
            className="relative h-full"
        >
            {/* Card Body */}
            <div className="relative h-full bg-surface/40 backdrop-blur-md border border-white/10 dark:border-white/5 rounded-3xl p-8 overflow-hidden group  dark:shadow-black/50 hover:shadow-[0_0_50px_-10px_rgba(234,179,8,0.2)] transition-shadow duration-500">

                {/* Metallic Border Gradient on Hover */}
                <div className="absolute inset-0 rounded-3xl border border-transparent group-hover:border-yellow-500/40 transition-colors duration-500" />

                <div className="relative z-10 flex flex-col h-full">

                    {/* Header */}
                    <div className="flex items-start justify-between mb-8">
                        <div className="flex items-center gap-4">
                            <div className="p-3 rounded-2xl bg-gradient-to-br from-yellow-500/20 to-yellow-700/5 border border-yellow-500/20 text-yellow-600 dark:text-yellow-400 group-hover:bg-yellow-500/20 group-hover:shadow-[0_0_15px_rgba(234,179,8,0.3)] transition-all duration-500">
                                <Icon size={24} />
                            </div>
                            <div>
                                <h3 className="text-xl font-display font-bold text-foreground group-hover:text-yellow-500 transition-colors duration-300">{category}</h3>
                                <p className="text-xs text-muted font-light tracking-wide uppercase mt-1">Module {index + 1}</p>
                            </div>
                        </div>
                        <Cpu className="text-muted/20 group-hover:text-yellow-500/20 transition-colors duration-500" size={40} />
                    </div>

                    {/* Description */}
                    {/* <p className="text-muted mb-8 text-sm leading-relaxed border-b border-border/50 pb-6 group-hover:border-yellow-500/20 transition-colors duration-500">
                        {config.desc}
                    </p> */}

                    {/* Skill Tags */}
                    <div className="flex flex-wrap gap-3">
                        {catSkills.map((skill, i) => (
                            <div
                                key={skill.name}
                                className="group/tag flex items-center gap-2 px-3 py-2 rounded-lg bg-background/50 border border-border hover:border-yellow-500/40 hover:bg-yellow-500/10 hover:shadow-[0_0_10px_-2px_rgba(234,179,8,0.2)] transition-all cursor-default"
                            >
                                <img src={skill.icon} alt={skill.name} width="16" height="16" className="w-4 h-4 grayscale group-hover/tag:grayscale-0 transition-all opacity-70 group-hover/tag:opacity-100" />
                                <span className="text-xs font-medium text-muted group-hover/tag:text-foreground transition-colors">
                                    {skill.name}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default Skills;
