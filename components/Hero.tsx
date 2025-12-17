import React, { useRef, useEffect, useState } from 'react';
import { motion as motionBase, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';

const motion = motionBase as any;

const Hero: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
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

  // Canvas Neural Network Animation (Updated: Uniform Spread + Wrapping)
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;
    
    // Adjusted particle count for uniform density
    const particleCount = width < 768 ? 60 : 120;
    const connectionDistance = 150;
    const mouseDistance = 250; 

    const mouse = { x: -1000, y: -1000 };

    class Particle {
        x: number; y: number; vx: number; vy: number; size: number; alpha: number;
        constructor(initialX?: number, initialY?: number) {
            this.x = initialX || Math.random() * width;
            this.y = initialY || Math.random() * height;
            
            // Random velocity for drifting
            this.vx = (Math.random() - 0.5) * 0.5;
            this.vy = (Math.random() - 0.5) * 0.5;
            
            this.size = Math.random() * 2 + 1;
            this.alpha = Math.random() * 0.5 + 0.2;
        }
        
        update() {
            // 1. Base Velocity (Drifting)
            this.x += this.vx;
            this.y += this.vy;

            // REMOVED: Center Push logic to ensure even spread

            // 2. Mouse REPULSION
            const dxMouse = mouse.x - this.x;
            const dyMouse = mouse.y - this.y;
            const distMouse = Math.sqrt(dxMouse*dxMouse + dyMouse*dyMouse);
            
            if (distMouse < mouseDistance) {
                const force = (mouseDistance - distMouse) / mouseDistance;
                
                // Direction: Move AWAY from mouse
                const repulsionStrength = 5; 
                
                this.x -= (dxMouse / distMouse) * force * repulsionStrength; 
                this.y -= (dyMouse / distMouse) * force * repulsionStrength;
            }

            // 3. Screen Wrapping (Infinite Canvas Effect)
            // Instead of respawning in center, wrap around to opposite side
            // This maintains uniform density across the screen
            const margin = 50; // Buffer so they don't pop out visibly
            
            if (this.x < -margin) this.x = width + margin;
            if (this.x > width + margin) this.x = -margin;
            
            if (this.y < -margin) this.y = height + margin;
            if (this.y > height + margin) this.y = -margin;
        }

        draw(isDark: boolean, isHovered: boolean) {
            if (!ctx) return;
            const r = isDark ? 255 : 0;
            const g = isDark ? 255 : 0;
            const b = isDark ? 255 : 0;
            
            // Glow effect
            if (isHovered) {
                ctx.shadowBlur = 15;
                ctx.shadowColor = `rgba(59, 130, 246, 0.8)`; // Blue glow
                ctx.fillStyle = `rgba(100, 180, 255, ${this.alpha})`;
            } else {
                ctx.shadowBlur = 0;
                ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${this.alpha})`;
            }
            
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fill();
            
            ctx.shadowBlur = 0;
        }
    }

    const particles: Particle[] = [];
    for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
    }

    const animate = () => {
        if (!ctx) return;
        ctx.clearRect(0, 0, width, height);
        
        const isDark = document.documentElement.classList.contains('dark');

        particles.forEach(p => p.update());

        for (let i = 0; i < particles.length; i++) {
            const dxM = mouse.x - particles[i].x;
            const dyM = mouse.y - particles[i].y;
            const distM = Math.sqrt(dxM*dxM + dyM*dyM);
            const isHoveredI = distM < 250;

            particles[i].draw(isDark, isHoveredI);

            for (let j = i; j < particles.length; j++) {
                const dx = particles[i].x - particles[j].x;
                const dy = particles[i].y - particles[j].y;
                const distance = Math.sqrt(dx*dx + dy*dy);

                if (distance < connectionDistance) {
                    const midX = (particles[i].x + particles[j].x) / 2;
                    const midY = (particles[i].y + particles[j].y) / 2;
                    const midDx = mouse.x - midX;
                    const midDy = mouse.y - midY;
                    const midDist = Math.sqrt(midDx*midDx + midDy*midDy);

                    const isActive = midDist < 250;

                    ctx.beginPath();
                    
                    if (isActive) {
                        // ACTIVE STATE (Hovered)
                        const intensity = 1 - (midDist / 250);
                        ctx.shadowBlur = 20 * intensity;
                        ctx.shadowColor = `rgba(60, 150, 255, ${intensity})`;
                        ctx.strokeStyle = `rgba(100, 200, 255, ${0.4 + intensity * 0.6})`;
                        ctx.lineWidth = 1 + (intensity * 2);
                    } else {
                        // PASSIVE STATE
                        const opacity = 1 - (distance / connectionDistance);
                        ctx.shadowBlur = 0;
                        if (isDark) {
                             ctx.strokeStyle = `rgba(148, 163, 184, ${opacity * 0.2})`; 
                        } else {
                             ctx.strokeStyle = `rgba(71, 85, 105, ${opacity * 0.2})`;
                        }
                        ctx.lineWidth = 0.5;
                    }

                    ctx.moveTo(particles[i].x, particles[i].y);
                    ctx.lineTo(particles[j].x, particles[j].y);
                    ctx.stroke();
                    ctx.shadowBlur = 0;
                }
            }
        }
        requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
    };
    
    const handleCanvasMouseMove = (e: MouseEvent) => {
        const rect = canvas.getBoundingClientRect();
        mouse.x = e.clientX - rect.left;
        mouse.y = e.clientY - rect.top;
    };

    window.addEventListener('resize', handleResize);
    canvas.addEventListener('mousemove', handleCanvasMouseMove);

    return () => {
        window.removeEventListener('resize', handleResize);
        canvas.removeEventListener('mousemove', handleCanvasMouseMove);
    };
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
      
      {/* Central Eclipse Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] sm:w-[800px] sm:h-[800px] bg-blue-900/10 dark:bg-blue-900/20 rounded-full blur-[120px] pointer-events-none mix-blend-screen animate-pulse-slow" />
      
      {/* Stars (Only visible in Dark Mode usually, but let's keep them subtle in light) */}
      <div className="absolute inset-0 z-0">
         {[...Array(60)].map((_, i) => (
            <div 
               key={i}
               className="absolute rounded-full bg-foreground dark:bg-white animate-twinkle"
               style={{
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  width: `${Math.random() < 0.1 ? 2 : 1}px`,
                  height: `${Math.random() < 0.1 ? 2 : 1}px`,
                  animationDelay: `${Math.random() * 5}s`,
                  opacity: Math.random() * 0.3 + 0.1
               }}
            />
         ))}
      </div>

      <canvas ref={canvasRef} className="absolute inset-0 z-0 opacity-40" />
      
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
                    initial={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
                    animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                    transition={{ duration: 1.2, ease: "circOut" }}
                    className="whitespace-nowrap text-[clamp(2rem,8.5vw,9rem)] font-university font-bold tracking-wide leading-none select-none text-transparent bg-clip-text bg-[linear-gradient(110deg,#854d0e_0%,#ca8a04_25%,#854d0e_45%,#ffffff_50%,#854d0e_55%,#ca8a04_75%,#854d0e_100%)] dark:bg-[linear-gradient(110deg,#8a6e2f_0%,#eec13f_25%,#8a6e2f_45%,#ffffff_50%,#8a6e2f_55%,#eec13f_75%,#8a6e2f_100%)] bg-[length:200%_auto] animate-shine-text"
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