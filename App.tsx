import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';

const App: React.FC = () => {
  return (
    <div className="bg-background min-h-screen text-foreground selection:bg-primary/30 selection:text-white relative transition-colors duration-500">
      {/* Global Noise Texture */}
      <div className="bg-noise mix-blend-overlay fixed inset-0 z-[9999] pointer-events-none"></div>
      
      {/* Global Ambient Glow (Subtle) */}
      <div className="fixed top-0 left-0 w-full h-[500px] bg-gradient-to-b from-blue-900/5 to-transparent pointer-events-none z-0" />

      <Navbar />
      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Testimonials />
        <Contact />
      </main>
    </div>
  );
};

export default App;