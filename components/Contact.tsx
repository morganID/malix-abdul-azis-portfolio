import React from 'react';
import { motion as motionBase, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { SOCIALS } from '../constants';
import { Mail, MapPin, Send, MessageSquare, ArrowRight } from 'lucide-react';

const motion = motionBase as any;

const Contact: React.FC = () => {
  // Gold Dust Particles
  const particles = Array.from({ length: 20 }).map((_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 2 + 1,
    duration: Math.random() * 10 + 10,
    delay: Math.random() * 5
  }));

  return (
    <section id="contact" className="py-32 bg-background relative overflow-hidden transition-colors duration-500">
      
      {/* --- BACKGROUND FX --- */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-yellow-900/20 to-transparent"></div>
      
      {/* Ambient Glow */}
      <div className="absolute bottom-0 right-0 w-[800px] h-[800px] bg-yellow-600/5 dark:bg-yellow-500/5 rounded-full blur-[120px] pointer-events-none translate-y-1/2 translate-x-1/2" />

      {/* Gold Dust Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {particles.map((p) => (
            <motion.div
                key={p.id}
                className="absolute rounded-full bg-yellow-500/30 dark:bg-yellow-200/20"
                style={{ 
                    left: `${p.x}%`, 
                    top: `${p.y}%`,
                    width: p.size,
                    height: p.size
                }}
                animate={{ 
                    y: [0, -100], 
                    opacity: [0, 0.8, 0] 
                }}
                transition={{ 
                    duration: p.duration, 
                    repeat: Infinity, 
                    delay: p.delay,
                    ease: "linear"
                }}
            />
        ))}
      </div>

      <div className="max-w-7xl w-full mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="mb-20 text-center md:text-left">
             <motion.div 
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-surface/50 border border-yellow-500/20 mb-6 backdrop-blur-md"
            >
                <div className="w-1.5 h-1.5 rounded-full bg-yellow-500 animate-pulse" />
                <span className="text-[10px] font-university tracking-widest text-muted uppercase">Global Connectivity</span>
            </motion.div>

            <motion.h2 
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
                className="text-4xl md:text-6xl font-university font-bold mb-6 text-transparent bg-clip-text bg-[linear-gradient(110deg,#854d0e_0%,#ca8a04_25%,#854d0e_45%,#ffffff_50%,#854d0e_55%,#ca8a04_75%,#854d0e_100%)] dark:bg-[linear-gradient(110deg,#8a6e2f_0%,#eec13f_25%,#8a6e2f_45%,#ffffff_50%,#8a6e2f_55%,#eec13f_75%,#8a6e2f_100%)] bg-[length:200%_auto] animate-shine-text"
            >
                Initiate Collaboration
            </motion.h2>
            <motion.p 
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
                className="text-muted max-w-2xl text-lg font-light"
            >
                Ready to forge the next digital frontier? Let's engineer a solution that transcends expectations.
            </motion.p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
            
            {/* Left Column: Contact Info Card */}
            <TiltWrapper className="h-full" delay={0.4}>
                <div className="h-full bg-surface/40 backdrop-blur-xl border border-white/10 dark:border-white/5 p-8 rounded-3xl relative overflow-hidden group hover:border-yellow-500/30 hover:shadow-[0_0_50px_-10px_rgba(234,179,8,0.15)] transition-all duration-500 flex flex-col justify-between">
                    
                    {/* Metallic Border Gradient on Hover */}
                    <div className="absolute inset-0 rounded-3xl border border-transparent group-hover:border-yellow-500/30 transition-colors duration-500 pointer-events-none" />

                    {/* Radial Golden Glow Gradient (Replaces Shimmer) */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none bg-[radial-gradient(circle_at_center,rgba(234,179,8,0.1)_0%,transparent_70%)]" />
                    
                    <div className="relative z-10">
                        <div className="w-14 h-14 bg-gradient-to-br from-yellow-500/20 to-yellow-900/10 rounded-2xl flex items-center justify-center text-yellow-600 dark:text-yellow-400 mb-8 border border-yellow-500/20 shadow-[0_0_15px_-5px_rgba(234,179,8,0.3)]">
                            <MessageSquare size={28} />
                        </div>
                        
                        <h3 className="text-2xl font-display font-bold text-foreground mb-3">Direct Line</h3>
                        <p className="text-muted mb-8 leading-relaxed text-sm font-light">
                            Currently available for select freelance commissions and consulting roles.
                        </p>

                        <div className="space-y-6">
                            <a href="mailto:malix@example.com" className="flex items-center gap-4 group/item">
                                <div className="p-3 rounded-xl bg-background/50 border border-border group-hover/item:border-yellow-500/40 group-hover/item:bg-yellow-500/10 transition-colors text-muted group-hover/item:text-yellow-500">
                                    <Mail size={18} />
                                </div>
                                <div>
                                    <h4 className="text-[10px] font-bold text-muted/70 uppercase tracking-widest">Email</h4>
                                    <span className="text-foreground text-sm font-medium">malix@example.com</span>
                                </div>
                            </a>
                            
                            <div className="flex items-center gap-4 group/item">
                                <div className="p-3 rounded-xl bg-background/50 border border-border group-hover/item:border-yellow-500/40 group-hover/item:bg-yellow-500/10 transition-colors text-muted group-hover/item:text-yellow-500">
                                    <MapPin size={18} />
                                </div>
                                <div>
                                    <h4 className="text-[10px] font-bold text-muted/70 uppercase tracking-widest">Base</h4>
                                    <span className="text-foreground text-sm font-medium">Jakarta, Indonesia</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-12 relative z-10">
                        <h4 className="text-[10px] font-bold text-muted uppercase tracking-widest mb-4">Neural Network</h4>
                        <div className="flex gap-3">
                            {SOCIALS.map((social) => (
                                <a 
                                    key={social.platform}
                                    href={social.url}
                                    className="w-10 h-10 rounded-xl bg-background/50 border border-border flex items-center justify-center text-muted hover:text-yellow-500 hover:border-yellow-500/50 hover:bg-yellow-500/5 transition-all duration-300"
                                >
                                    <social.icon size={18} />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </TiltWrapper>

            {/* Right Column: Contact Form Card */}
            <TiltWrapper className="lg:col-span-2" delay={0.6}>
                <div className="h-full bg-surface/40 backdrop-blur-xl border border-white/10 dark:border-white/5 p-8 md:p-10 rounded-3xl relative overflow-hidden group hover:border-yellow-500/30 hover:shadow-[0_0_50px_-10px_rgba(234,179,8,0.15)] transition-all duration-500">
                     
                     {/* Metallic Border Gradient on Hover */}
                    <div className="absolute inset-0 rounded-3xl border border-transparent group-hover:border-yellow-500/30 transition-colors duration-500 pointer-events-none" />

                     {/* Radial Golden Glow Gradient (Replaces Shimmer) */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none bg-[radial-gradient(circle_at_center,rgba(234,179,8,0.1)_0%,transparent_70%)]" />

                    <form className="space-y-8 relative z-10" onSubmit={(e) => e.preventDefault()}>
                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="space-y-2 group/input">
                                <label className="text-[10px] font-bold text-muted uppercase tracking-widest ml-1 group-focus-within/input:text-yellow-500 transition-colors">Identity</label>
                                <input 
                                    type="text" 
                                    className="w-full bg-background/30 border border-white/10 rounded-xl px-4 py-4 text-foreground placeholder:text-muted/30 focus:outline-none focus:ring-1 focus:ring-yellow-500/50 focus:border-yellow-500/50 transition-all text-sm backdrop-blur-sm"
                                    placeholder="John Doe"
                                />
                            </div>
                            <div className="space-y-2 group/input">
                                <label className="text-[10px] font-bold text-muted uppercase tracking-widest ml-1 group-focus-within/input:text-yellow-500 transition-colors">Coordinates</label>
                                <input 
                                    type="email" 
                                    className="w-full bg-background/30 border border-white/10 rounded-xl px-4 py-4 text-foreground placeholder:text-muted/30 focus:outline-none focus:ring-1 focus:ring-yellow-500/50 focus:border-yellow-500/50 transition-all text-sm backdrop-blur-sm"
                                    placeholder="john@example.com"
                                />
                            </div>
                        </div>

                        <div className="space-y-2 group/input">
                            <label className="text-[10px] font-bold text-muted uppercase tracking-widest ml-1 group-focus-within/input:text-yellow-500 transition-colors">Objective</label>
                             <div className="relative">
                                <select className="w-full bg-background/30 border border-white/10 rounded-xl px-4 py-4 text-foreground focus:outline-none focus:ring-1 focus:ring-yellow-500/50 focus:border-yellow-500/50 transition-all appearance-none cursor-pointer text-sm backdrop-blur-sm">
                                    <option className="bg-surface text-foreground">Project Commission</option>
                                    <option className="bg-surface text-foreground">Strategic Partnership</option>
                                    <option className="bg-surface text-foreground">Technical Consultation</option>
                                </select>
                                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-muted">
                                    <ArrowRight size={14} className="rotate-90" />
                                </div>
                            </div>
                        </div>

                        <div className="space-y-2 group/input">
                            <label className="text-[10px] font-bold text-muted uppercase tracking-widest ml-1 group-focus-within/input:text-yellow-500 transition-colors">Transmission</label>
                            <textarea 
                                rows={5} 
                                className="w-full bg-background/30 border border-white/10 rounded-xl px-4 py-4 text-foreground placeholder:text-muted/30 focus:outline-none focus:ring-1 focus:ring-yellow-500/50 focus:border-yellow-500/50 transition-all resize-none text-sm backdrop-blur-sm"
                                placeholder="Briefing regarding project scope, timeline, and core requirements..."
                            ></textarea>
                        </div>

                        <div className="pt-4 flex justify-end">
                            <button className="group relative px-8 py-4 bg-gradient-to-r from-yellow-600 to-yellow-500 text-black font-bold text-sm tracking-wide rounded-xl overflow-hidden shadow-[0_0_20px_-5px_rgba(234,179,8,0.3)] hover:shadow-[0_0_30px_-5px_rgba(234,179,8,0.5)] transition-all hover:scale-[1.02] active:scale-[0.98]">
                                <div className="absolute inset-0 bg-white/20 -translate-x-full group-hover:animate-shimmer" />
                                <span className="relative flex items-center gap-2">
                                    Transmit Data <Send size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                </span>
                            </button>
                        </div>
                    </form>
                </div>
            </TiltWrapper>

        </div>

        {/* Footer Minimal */}
        <div className="mt-24 flex flex-col md:flex-row justify-between items-center border-t border-white/10 pt-8 text-xs font-mono text-muted/50">
            <p className="mb-4 md:mb-0">© {new Date().getFullYear()} Malix Abdul Azis. Engineered for Excellence.</p>
            <div className="flex gap-8">
                <a href="#" className="hover:text-yellow-500 transition-colors">GITHUB</a>
                <a href="#" className="hover:text-yellow-500 transition-colors">LINKEDIN</a>
                <a href="#" className="hover:text-yellow-500 transition-colors">TWITTER</a>
            </div>
        </div>

      </div>
    </section>
  );
};

// --- SUB-COMPONENT: 3D TILT WRAPPER ---
const TiltWrapper = ({ children, className, delay = 0 }: { children: React.ReactNode, className?: string, delay?: number }) => {
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseX = useSpring(x, { stiffness: 150, damping: 15 });
    const mouseY = useSpring(y, { stiffness: 150, damping: 15 });

    const rotateX = useTransform(mouseY, [-0.5, 0.5], ["3deg", "-3deg"]);
    const rotateY = useTransform(mouseX, [-0.5, 0.5], ["-3deg", "3deg"]);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const mouseXVal = e.clientX - rect.left;
        const mouseYVal = e.clientY - rect.top;
        const xPct = mouseXVal / width - 0.5;
        const yPct = mouseYVal / height - 0.5;
        x.set(xPct);
        y.set(yPct);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.8, ease: "easeOut", delay }}
            style={{ 
                rotateX, 
                rotateY, 
                transformStyle: "preserve-3d" 
            }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className={`perspective-1000 ${className}`}
        >
            <div className="h-full" style={{ transform: "translateZ(20px)" }}>
                {children}
            </div>
        </motion.div>
    );
};

export default Contact;