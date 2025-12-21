import React, { useRef, useEffect, useState } from 'react';
import { motion as motionBase, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';

const motion = motionBase as any;

const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // 3D Tilt Logic
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseX = useSpring(x, { stiffness: 100, damping: 30 });
  const mouseY = useSpring(y, { stiffness: 100, damping: 30 });

  const rotateX = useTransform(mouseY, [-0.5, 0.5], ["5deg", "-5deg"]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], ["-5deg", "5deg"]);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (rect) {
      const width = rect.width;
      const height = rect.height;
      const mouseXVal = e.clientX - rect.left;
      const mouseYVal = e.clientY - rect.top;
      
      const xPct = mouseXVal / width - 0.5;
      const yPct = mouseYVal / height - 0.5;
      
      x.set(xPct);
      y.set(yPct);
    }
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  // Text Decryption Logic
  const name = "MALIX ABDUL AZIS";
  const [displayText, setDisplayText] = useState("");
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  useEffect(() => {
    let iteration = 0;
    let interval: any = null;

    const startAnimation = () => {
        interval = setInterval(() => {
            setDisplayText(prev => 
                name
                .split("")
                .map((letter, index) => {
                    if (index < iteration) return name[index];
                    return letters[Math.floor(Math.random() * letters.length)];
                })
                .join("")
            );
            if (iteration >= name.length) clearInterval(interval);
            iteration += 1 / 3;
        }, 40);
    };
    setTimeout(startAnimation, 500);
    return () => clearInterval(interval);
  }, []);



  return (
    <section 
      ref={containerRef}
      id="home" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background perspective-1000 transition-colors duration-500"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* 0. IMMERSIVE BACKGROUND ELEMENTS */}
      
      
      
      {/* 1. MAIN CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full flex flex-col items-center justify-center perspective-[1200px]">
        
        <motion.div
            style={{ 
                rotateX, 
                rotateY,
                transformStyle: "preserve-3d" 
            }}
            className="flex flex-col items-center text-center"
        >
            {/* Minimalist Status */}
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.2 }}
                className="mb-8 flex items-center gap-3 px-4 py-2 rounded-full bg-surface/50 border border-border backdrop-blur-md"
                style={{ transform: "translateZ(20px)" }}
            >
                <div className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </div>
                <span className="text-xs font-medium text-muted tracking-wider uppercase">Open for Innovation</span>
            </motion.div>

            {/* Main Title - Massive with REAL GOLD Shine Animation */}
            <div className="relative mb-6 w-full flex justify-center">
                <motion.h1
                    initial={{ opacity: 1, scale: 0.9, filter: "blur(10px)" }}
                    animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                    transition={{ duration: 1.2, ease: "circOut" }}
                    className="lcp-element whitespace-nowrap text-[clamp(2rem,8.5vw,9rem)] font-university font-bold tracking-wide leading-none select-none text-transparent bg-clip-text bg-[linear-gradient(110deg,#854d0e_0%,#ca8a04_25%,#854d0e_45%,#ffffff_50%,#854d0e_55%,#ca8a04_75%,#854d0e_100%)] dark:bg-[linear-gradient(110deg,#8a6e2f_0%,#eec13f_25,#8a6e2f_45%,#ffffff_50%,#8a6e2f_55%,#eec13f_75%,#8a6e2f_100%)] bg-[length:200%_auto] animate-shine-text"
                    style={{ transform: "translateZ(60px)" }}
                >
                    {displayText}
                </motion.h1>
            </div>

            {/* Subtitle */}
            <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2, duration: 1 }}
                className="max-w-2xl text-lg md:text-xl text-muted font-light leading-relaxed mb-12 mix-blend-multiply dark:mix-blend-plus-lighter"
                style={{ transform: "translateZ(40px)" }}
            >
                Engineering digital voids into <span className="text-foreground font-medium">interactive realities</span>.
                <br />Fullstack Architect specialized in robust ecosystems.
            </motion.div>

            {/* Minimal Buttons */}
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.5, duration: 0.8 }}
                className="flex flex-col sm:flex-row items-center gap-6"
                style={{ transform: "translateZ(50px)" }}
            >
                <a 
                    href="#projects" 
                    className="group relative px-8 py-4 bg-foreground text-background font-medium rounded-full overflow-hidden transition-all hover:scale-105 shadow-[0_0_50px_-15px_rgba(0,0,0,0.2)] dark:shadow-[0_0_50px_-15px_rgba(255,255,255,0.5)]"
                >
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-shimmer" />
                    <span className="relative flex items-center gap-2">
                        View Projects <ArrowRight size={16} />
                    </span>
                </a>
                
                <a 
                    href="/resume.pdf"
                    className="px-8 py-4 rounded-full text-muted hover:text-foreground transition-colors flex items-center gap-2 group text-sm font-medium tracking-wide hover:bg-surface border border-transparent hover:border-border"
                >
                    <Download size={16} className="group-hover:-translate-y-0.5 transition-transform" />
                    Resume
                </a>
            </motion.div>
        </motion.div>
      </div>

      {/* NEW SCROLL ANIMATION: Mouse Style */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 z-20 pointer-events-none"
      >
        <span className="text-[10px] font-mono text-muted/50 uppercase tracking-[0.2em] animate-pulse">Scroll</span>
        
        {/* Mouse Body */}
        <div className="w-[26px] h-[42px] rounded-full border border-muted/40 bg-surface/10 backdrop-blur-sm flex justify-center pt-2">
           {/* Scrolling Wheel */}
           <motion.div
              animate={{
                 y: [0, 12],
                 opacity: [0, 1, 0]
              }}
              transition={{
                 duration: 1.5,
                 repeat: Infinity,
                 ease: "easeInOut"
              }}
              className="w-1 h-1.5 rounded-full bg-foreground"
           />
        </div>
      </motion.div>
      
    </section>
  );
};

export default Hero;
