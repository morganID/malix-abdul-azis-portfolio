import React from 'react';
import { motion as motionBase } from 'framer-motion';
import { EXPERIENCE, EDUCATION } from '../constants';
import { Briefcase, GraduationCap, Calendar, ChevronRight } from 'lucide-react';

const motion = motionBase as any;

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-32 bg-background relative overflow-hidden transition-colors duration-500">

    
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-20">
             <motion.div 
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-surface/50 border border-yellow-500/20 mb-6 backdrop-blur-md"
            >
                <div className="w-1.5 h-1.5 rounded-full bg-yellow-500 animate-pulse" />
                <span className="text-[10px] font-university tracking-widest text-muted uppercase">Professional Timeline</span>
            </motion.div>

            <motion.h2 
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
                className="text-4xl md:text-6xl font-university font-bold mb-6 text-transparent bg-clip-text bg-[linear-gradient(110deg,#854d0e_0%,#ca8a04_25%,#854d0e_45%,#ffffff_50%,#854d0e_55%,#ca8a04_75%,#854d0e_100%)] dark:bg-[linear-gradient(110deg,#8a6e2f_0%,#eec13f_25%,#8a6e2f_45%,#ffffff_50%,#8a6e2f_55%,#eec13f_75%,#8a6e2f_100%)] bg-[length:200%_auto] animate-shine-text"
            >
                The Journey
            </motion.h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          
          {/* Work Experience */}
          <div>
            <motion.div
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
                className="flex items-center gap-4 mb-10"
            >
                <div className="p-3 bg-surface/50 border border-black-500/20 rounded-xl text-black dark:text-yellow-400 shadow-[0_0_15px_-3px_rgba(234,179,8,0.2)]">
                    <Briefcase size={24} />
                </div>
                <h3 className="text-2xl font-display font-bold text-foreground">Career Path</h3>
            </motion.div>

            <div className="space-y-8">
                {EXPERIENCE.map((job, index) => (
                    <TimelineCard key={index} index={index}>
                        <div className="flex justify-between items-start mb-2">
                             <h4 className="text-lg font-bold text-foreground group-hover:text-yellow-500 transition-colors">{job.role}</h4>
                             <span className="text-[10px] font-mono py-1 px-2 rounded bg-yellow-500/10 text-yellow-600 dark:text-yellow-400 border border-yellow-500/20 whitespace-nowrap">
                                {job.period}
                             </span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-muted mb-4 font-medium">
                            <span className="w-1.5 h-1.5 rounded-full bg-yellow-500/50" />
                            {job.company}
                        </div>
                        <p className="text-muted text-sm leading-relaxed mb-4 font-light">
                            {job.description}
                        </p>
                        <div className="flex flex-wrap gap-2 mt-auto">
                            {job.technologies.map(tech => (
                                <span key={tech} className="text-[10px] uppercase tracking-wider px-2 py-1 bg-surface border border-black/5 dark:border-white/5 rounded text-muted/80">
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </TimelineCard>
                ))}
            </div>
          </div>

          {/* Education - Now Gold Theme */}
          <div>
             <motion.div
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
                className="flex items-center gap-4 mb-10"
            >
                <div className="p-3 bg-surface/50 border border-black-500/20 rounded-xl text-black dark:text-yellow-400 shadow-[0_0_15px_-3px_rgba(234,179,8,0.2)]">
                    <GraduationCap size={24} />
                </div>
                <h3 className="text-2xl font-display font-bold text-foreground">Academic Arc</h3>
            </motion.div>

             <div className="space-y-8">
                {EDUCATION.map((edu, index) => (
                    <TimelineCard key={index} index={index}>
                         <div className="flex justify-between items-start mb-2">
                             <h4 className="text-lg font-bold text-foreground group-hover:text-yellow-500 transition-colors">{edu.degree}</h4>
                             <span className="text-[10px] font-mono py-1 px-2 rounded bg-yellow-500/10 text-yellow-600 dark:text-yellow-400 border border-yellow-500/20 whitespace-nowrap">
                                {edu.year}
                             </span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-muted mb-4 font-medium">
                            <span className="w-1.5 h-1.5 rounded-full bg-yellow-500/50" />
                            {edu.institution}
                        </div>
                        {edu.description && (
                            <p className="text-muted text-sm leading-relaxed font-light">
                                {edu.description}
                            </p>
                        )}
                    </TimelineCard>
                ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

const TimelineCard = ({ children, index }: { children: React.ReactNode, index: number }) => {
    return (
        <motion.div 
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 * index + 0.2 }}
            className="group relative pl-8"
        >
            {/* Connecting Line */}
            <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-black/50 dark:from-white/30 to-transparent opacity-30" />
            
            {/* Glowing Dot */}
            <div className="absolute left-[-3.5px] top-6 w-2 h-2 rounded-full bg-yellow-500 shadow-[0_0_10px_rgba(234,179,8,0.5)] transition-all duration-500 group-hover:scale-150" />

            {/* Glass Card */}
            <div className="relative bg-surface/40 backdrop-blur-md border border-black/10 dark:border-white/5 p-6 rounded-2xl transition-all duration-500 group-hover:border-yellow-500/30 group-hover:shadow-[0_0_30px_-10px_rgba(234,179,8,0.15)] overflow-hidden">
                
                {/* Metallic Border Gradient on Hover */}
                <div className="absolute inset-0 rounded-2xl border border-transparent group-hover:border-yellow-500/30 transition-colors duration-500" />

              
                {/* Content relative z-index to sit on top of glow */}
                <div className="relative z-10">
                   {children}
                </div>

                {/* Arrow Decor */}
                <div className="absolute right-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-20 group-hover:translate-x-2 transition-all duration-500 z-10">
                    <ChevronRight size={40} />
                </div>
            </div>
        </motion.div>
    )
}

export default Experience;
