import React, { useState, useEffect } from 'react';
import { motion as motionBase, AnimatePresence } from 'framer-motion';
import { Menu, X, Sun, Moon, Hexagon } from 'lucide-react';
import { NAV_ITEMS } from '../constants';

const motion = motionBase as any;

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    // Check local storage or system preference
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    } else {
      setIsDark(false);
      document.documentElement.classList.remove('dark');
    }

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
    if (isDark) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    }
  };

  return (
    <>
    <div className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none">
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "circOut" }}
        className={`pointer-events-auto transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] border ${
          isScrolled
            ? 'bg-black/40 backdrop-blur-xl border-yellow-500/10 rounded-full py-3 px-6 shadow-[0_4px_30px_rgba(0,0,0,0.1)] w-full max-w-[54rem]'
            : 'bg-transparent border-transparent py-4 px-0 w-full max-w-7xl'
        }`}
      >
        <div className="flex justify-between items-center relative overflow-hidden">
          
          {/* Logo */}
          <a href="#" className="relative z-10 flex items-center gap-2 group">
             <div className="relative w-8 h-8 flex items-center justify-center">
                <Hexagon className="w-full h-full text-yellow-500 stroke-[1.5] group-hover:rotate-180 transition-transform duration-700" />
                <span className="absolute text-[10px] font-bold text-yellow-500">M</span>
             </div>
             <span className="text-lg font-university font-bold tracking-widest text-foreground group-hover:text-yellow-500 transition-colors">
                MALIX
             </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-2 relative z-10">
            <div className={`flex items-center gap-1 px-2 py-1.5 ${isScrolled ? '' : 'bg-surface/30 backdrop-blur-md rounded-full border border-white/5 pr-2'}`}>
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="relative px-4 py-1.5 text-[10px] uppercase tracking-widest font-bold text-muted hover:text-foreground transition-colors group overflow-hidden"
                >
                  <span className="relative z-10">{item.label}</span>
                  <span className="absolute bottom-0 left-0 w-full h-[1px] bg-yellow-500 -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></span>
                </a>
              ))}
            </div>
            
            {/* Theme Toggle */}
            <button
                onClick={toggleTheme}
                className="ml-4 p-2 rounded-full text-muted hover:text-yellow-500 transition-colors border border-transparent hover:border-yellow-500/20 hover:bg-yellow-500/5"
                aria-label="Toggle Theme"
            >
                {isDark ? <Sun size={18} /> : <Moon size={18} />}
            </button>

            <a
              href="#contact"
              className="ml-4 px-6 py-2 rounded-full bg-gradient-to-r from-yellow-600 to-yellow-500 text-black font-bold text-[10px] tracking-widest uppercase transition-all hover:scale-105 hover:shadow-[0_0_20px_-5px_rgba(234,179,8,0.5)] active:scale-95"
            >
              Contact
            </a>
          </div>

          {/* Mobile Toggle */}
          <div className="flex gap-4 md:hidden relative z-10 items-center">
             <button
                onClick={toggleTheme}
                className="text-foreground p-2"
             >
                {isDark ? <Sun size={20} /> : <Moon size={20} />}
             </button>
             <button
                className="text-foreground p-2 hover:text-yellow-500 transition-colors"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
             >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </motion.nav>
    </div>

    {/* Mobile Nav Overlay */}
    <AnimatePresence>
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, clipPath: "circle(0% at 100% 0)" }}
          animate={{ opacity: 1, clipPath: "circle(150% at 100% 0)" }}
          exit={{ opacity: 0, clipPath: "circle(0% at 100% 0)" }}
          transition={{ duration: 0.5, ease: "circOut" }}
          className="fixed inset-0 z-40 bg-background/95 backdrop-blur-3xl pt-28 px-6 flex flex-col items-center justify-center"
        >
          {/* Background Particles/Noise could go here */}
          <div className="absolute inset-0 bg-noise opacity-20 pointer-events-none"></div>

          <div className="flex flex-col gap-6 items-center w-full max-w-md relative z-10">
            {NAV_ITEMS.map((item, index) => (
              <motion.a
                key={item.label}
                href={item.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + index * 0.1 }}
                onClick={() => setMobileMenuOpen(false)}
                className="text-3xl font-university font-bold text-muted hover:text-yellow-500 transition-all hover:scale-110 tracking-widest"
              >
                {item.label}
              </motion.a>
            ))}
            <motion.a
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 }}
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-8 px-10 py-4 w-full text-center rounded-xl bg-gradient-to-r from-yellow-600 to-yellow-500 text-black font-bold text-lg tracking-widest uppercase shadow-lg shadow-yellow-500/20"
            >
              Initiate
            </motion.a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
    </>
  );
};

export default Navbar;