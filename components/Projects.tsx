import React from 'react';
import { motion as motionBase, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { PROJECTS } from '../constants';
import { ExternalLink, Github, ArrowUpRight } from 'lucide-react';

const motion = motionBase as any;

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-32 bg-background relative overflow-hidden transition-colors duration-500">

     
     
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-24">
            <motion.div 
                initial={{ opacity: 0, y: 50, scale: 0.8 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-surface/50 border border-yellow-500/20 mb-6 backdrop-blur-md"
            >
                <div className="w-1.5 h-1.5 rounded-full bg-yellow-500 animate-pulse" />
                <span className="text-[10px] font-university tracking-widest text-muted uppercase">Selected Works</span>
            </motion.div>

            <motion.h2 
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
                className="text-4xl md:text-6xl font-university font-bold mb-6 text-transparent bg-clip-text bg-[linear-gradient(110deg,#854d0e_0%,#ca8a04_25%,#854d0e_45%,#ffffff_50%,#854d0e_55%,#ca8a04_75%,#854d0e_100%)] dark:bg-[linear-gradient(110deg,#8a6e2f_0%,#eec13f_25%,#8a6e2f_45%,#ffffff_50%,#8a6e2f_55%,#eec13f_75%,#8a6e2f_100%)] bg-[length:200%_auto] animate-shine-text"
            >
                Digital Masterpieces
            </motion.h2>
            <motion.p 
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
                className="text-muted max-w-2xl mx-auto text-lg font-light"
            >
                A showcase of high-performance applications crafted with precision and modern architecture.
            </motion.p>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {PROJECTS.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>

        <div className="mt-20 text-center">
            <a href="https://github.com" target="_blank" rel="noreferrer" className="group inline-flex items-center gap-2 text-muted hover:text-yellow-500 transition-colors font-medium tracking-wide uppercase text-xs">
                <span>View Entire Archive</span>
                <ArrowUpRight size={14} className="group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
            </a>
        </div>
      </div>
    </section>
  );
};

// --- SUB-COMPONENT: PROJECT CARD ---
const ProjectCard = ({ project, index }: { project: any, index: number }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 * index }}
            className="group relative h-full"
        >
            <div className="relative h-full bg-surface/40 backdrop-blur-xl border border-white/10 dark:border-white/5 rounded-3xl overflow-hidden shadow-2xl dark:shadow-black/50 hover:shadow-[0_0_50px_-10px_rgba(234,179,8,0.2)] hover:border-yellow-500/30 transition-all duration-500 flex flex-col">

                
                {/* Image Container */}
                <div className="relative aspect-[16/10] overflow-hidden z-10">
                    <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent z-10 opacity-80" />

                    {/* Gold sheen on image hover */}
                    <div className="absolute inset-0 bg-yellow-500/10 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20 pointer-events-none" />

                    <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                    />

                    {/* Floating Links (Visible on Hover/Focus) */}
                    <div className="absolute top-4 right-4 z-30 flex gap-2 opacity-0 group-hover:opacity-100 translate-y-[-10px] group-hover:translate-y-0 transition-all duration-300">
                         {project.github && (
                            <a href={project.github} className="p-2.5 bg-black/50 hover:bg-black backdrop-blur-md border border-white/10 rounded-full text-white transition-all hover:scale-110">
                                <Github size={18} />
                            </a>
                        )}
                        <a href={project.link} className="p-2.5 bg-yellow-500 hover:bg-yellow-400 text-black rounded-full transition-all hover:scale-110 shadow-lg shadow-yellow-500/20">
                            <ExternalLink size={18} />
                        </a>
                    </div>
                </div>

                {/* Content Body */}
                <div className="p-8 flex flex-col flex-grow relative z-20">

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                        {project.tags.map((tag: string) => (
                            <span key={tag} className="text-[10px] uppercase tracking-wider font-bold px-2.5 py-1 bg-yellow-500/5 text-yellow-600 dark:text-yellow-400 border border-yellow-500/20 rounded-md">
                                {tag}
                            </span>
                        ))}
                    </div>

                    <h3 className="text-2xl font-display font-bold text-foreground mb-3 group-hover:text-yellow-500 transition-colors duration-300">
                        {project.title}
                    </h3>

                    <p className="text-muted text-sm leading-relaxed mb-6 flex-grow">
                        {project.description}
                    </p>

                    <div className="pt-6 border-t border-border/50 flex items-center justify-between">
                        <span className="text-xs font-mono text-muted/50">0{index + 1} // PROJECT</span>
                        <div className="text-sm font-medium text-foreground flex items-center gap-1 group-hover:gap-2 transition-all">
                            Details <ArrowUpRight size={14} className="text-yellow-500" />
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default Projects;
