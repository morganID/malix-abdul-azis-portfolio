import React from 'react';
import { motion as motionBase, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Award, Code, Globe, Zap } from 'lucide-react';

const motion = motionBase as any;

const About: React.FC = () => {
  const stats = [
    { label: 'Years Experience', value: '5+', icon: Award },
    { label: 'Projects Done', value: '50+', icon: Code },
    { label: 'Happy Clients', value: '30+', icon: Globe },
    { label: 'Coffee Brewed', value: '∞', icon: Zap },
  ];

  return (
    <section id="about" className="py-32 bg-background relative overflow-hidden transition-colors duration-500">

      {/* --- BACKGROUND FX --- */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-yellow-900/20 to-transparent"></div>

      {/* Ambient Glow */}
      <div className="absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-yellow-600/5 dark:bg-yellow-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          
          {/* Left Column: Profile Image */}
          <div className="relative">
            <motion.div
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                className="relative aspect-[4/5] w-full max-w-md mx-auto md:max-w-none rounded-3xl overflow-hidden bg-surface/40 backdrop-blur-md border border-white/10 dark:border-white/5 group shadow-2xl"
            >

                {/* Image */}
                <img
                    src="https://picsum.photos/800/1000?grayscale"
                    alt="Malix Abdul Azis"
                    className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-700"
                />

                {/* Overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80" />
                <div className="absolute inset-0 bg-yellow-500/10 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Border Glow */}
                <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-yellow-500/30 transition-colors duration-500 pointer-events-none" />

                {/* Floating Badge */}
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-surface/10 backdrop-blur-md border border-white/10 flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-yellow-500 flex items-center justify-center text-black font-bold">
                        <Code size={20} />
                    </div>
                    <div>
                        <p className="text-[10px] text-yellow-500 font-bold uppercase tracking-widest">Current Status</p>
                        <p className="text-white text-sm font-medium">Building the Future</p>
                    </div>
                </div>
            </motion.div>
            {/* Back Glow Decoration */}
            <div className="absolute -inset-4 bg-yellow-500/10 blur-2xl rounded-[3rem] -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
          </div>

          {/* Right Column: Content */}
          <div className="relative">
            <motion.div 
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-surface/50 border border-yellow-500/20 mb-6 backdrop-blur-md"
            >
                <div className="w-1.5 h-1.5 rounded-full bg-yellow-500 animate-pulse" />
                <span className="text-[10px] font-university tracking-widest text-muted uppercase">The Architect</span>
            </motion.div>

            <motion.h2 
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
                className="text-3xl md:text-5xl font-university font-bold mb-8 text-transparent bg-clip-text bg-[linear-gradient(110deg,#854d0e_0%,#ca8a04_25%,#854d0e_45%,#ffffff_50%,#854d0e_55%,#ca8a04_75%,#854d0e_100%)] dark:bg-[linear-gradient(110deg,#8a6e2f_0%,#eec13f_25%,#8a6e2f_45%,#ffffff_50%,#8a6e2f_55%,#eec13f_75%,#8a6e2f_100%)] bg-[length:200%_auto] animate-shine-text leading-tight"
            >
              Crafting Logic into <br />
              <span className="text-foreground">Visual Poetry.</span>
            </motion.h2>

            <motion.div 
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
                className="space-y-6 text-muted text-lg leading-relaxed font-light"
            >
              <p>
                The digital realm is a canvas where functionality meets aesthetics. My journey began with a curiosity for how things work, evolving into a passion for engineering scalable, high-performance systems that don't just work—they <span className="text-yellow-500/80 font-normal">mesmerize</span>.
              </p>
              <p>
                Bridging the chasm between raw data and human experience, I specialize in full-stack architecture with a keen eye for motion design. I don't just write code; I orchestrate user journeys.
              </p>
            </motion.div>

            {/* Stats Grid */}
            <div className="mt-12 grid grid-cols-2 gap-4">
               {stats.map((stat, index) => (
                   <motion.div
                        key={index}
                        initial={{ opacity: 0,
                           y: 50, 
                           scale: 0.9 ,
                           }}
                        whileInView={{ 
                          opacity: 1, 
                          y: 0, 
                          scale: 1 ,
                          }}
                        viewport={{ 
                          once: true, 
                          margin: "-10%" }}
                        transition={{ 
                          duration: 0.8,
                          ease: [0.4, 0, 0.2, 1], 
                          delay: 0.15 * index }}
                        className="group p-4 rounded-2xl bg-surface/30 border border-border hover:border-yellow-500/30 transition-all duration-300 hover:bg-yellow-500/5"
                   >
                       <div className="flex items-center gap-3 mb-2">
                           <stat.icon size={18} className="text-yellow-600 dark:text-yellow-400 group-hover:scale-110 transition-transform" />
                           <span className="text-[10px] font-bold text-muted uppercase tracking-widest">{stat.label}</span>
                       </div>
                       <div className="text-2xl font-display font-bold text-foreground group-hover:text-yellow-500 transition-colors">
                           {stat.value}
                       </div>
                   </motion.div>
               ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};



export default About;
