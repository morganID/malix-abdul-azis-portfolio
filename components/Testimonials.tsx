import React, { useState } from 'react';
import { motion as motionBase, AnimatePresence } from 'framer-motion';
import { TESTIMONIALS } from '../constants';
import { Star, ShieldCheck, MapPin, Quote } from 'lucide-react';

const motion = motionBase as any;

const Testimonials: React.FC = () => {
  const [filter, setFilter] = useState<'All' | 'Upwork' | 'Freelancer'>('All');

  const filteredData = TESTIMONIALS.filter(item => {
    if (filter === 'All') return true;
    return item.platform === filter;
  });

  const categories = ['All', 'Upwork', 'Freelancer'];


  return (
    <section id="reviews" className="py-32 bg-background relative overflow-hidden transition-colors duration-500">
      
      {/* --- BACKGROUND FX --- */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-yellow-900/20 to-transparent"></div>
      
     
      
      <div className="max-w-7xl mx-auto px-6 mb-12 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
            
            {/* Header */}
            <motion.div
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                className="max-w-2xl"
            >
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-surface/50 border border-yellow-500/20 mb-6 backdrop-blur-md">
                    <div className="w-1.5 h-1.5 rounded-full bg-yellow-500 animate-pulse" />
                    <span className="text-[10px] font-university tracking-widest text-muted uppercase">Reputation</span>
                </div>

                <h2 className="text-4xl md:text-6xl font-university font-bold mb-4 text-transparent bg-clip-text bg-[linear-gradient(110deg,#854d0e_0%,#ca8a04_25%,#854d0e_45%,#ffffff_50%,#854d0e_55%,#ca8a04_75%,#854d0e_100%)] dark:bg-[linear-gradient(110deg,#8a6e2f_0%,#eec13f_25%,#8a6e2f_45%,#ffffff_50%,#8a6e2f_55%,#eec13f_75%,#8a6e2f_100%)] bg-[length:200%_auto] animate-shine-text">
                    Client Endorsements
                </h2>
                <p className="text-muted text-lg font-light">
                    Verified reviews from freelance marketplaces highlighting project success and client satisfaction.
                </p>
            </motion.div>

            {/* Filter Buttons */}
            <motion.div 
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
                className="flex items-center gap-2 p-1 bg-surface/30 backdrop-blur-md rounded-xl border border-white/10"
            >
                {categories.map((cat) => (
                    <button
                        key={cat}
                        onClick={() => setFilter(cat as any)}
                        className={`relative px-6 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
                            filter === cat ? 'text-black' : 'text-muted hover:text-foreground'
                        }`}
                    >
                        {filter === cat && (
                            <motion.div
                                layoutId="activeFilter"
                                className="absolute inset-0 bg-gradient-to-r from-yellow-600 to-yellow-500 rounded-lg shadow-[0_0_15px_-3px_rgba(234,179,8,0.4)]"
                                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                            />
                        )}
                        <span className="relative z-10">{cat}</span>
                    </button>
                ))}
            </motion.div>
        </div>

        {/* Grid Container */}
        <motion.div 
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
            <AnimatePresence mode='popLayout'>
                {filteredData.map((item, index) => (
                    <TestimonialCard key={item.id} item={item} index={index} />
                ))}
            </AnimatePresence>
        </motion.div>

        {filteredData.length === 0 && (
            <div className="text-center py-20 text-muted font-light">
                No reviews found for this category.
            </div>
        )}

      </div>
    </section>
  );
};

const TestimonialCard: React.FC<{ item: typeof TESTIMONIALS[0], index: number }> = ({ item, index }) => {
    
    const isUpwork = item.platform === 'Upwork';

    return (
        <motion.div
            layout
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 * index }}
            className="group relative w-full h-full  backdrop-blur-xl border border-white/10 dark:border-white/5 p-8 rounded-3xl hover:border-black-500/30 transition-all duration-500 flex flex-col hover:-translate-y-2 hover:shadow-[0_0_50px_-10px_rgba(234,179,8,0.15)]"
        >
          
         
            {/* Quote Icon Background */}
            <div className="absolute top-6 right-6 text-yellow-500/5 group-hover:text-yellow-500/10 transition-colors z-10">
                <Quote size={60} />
            </div>
            
            {/* Top Row: Client Info & Platform Badge */}
            <div className="flex justify-between items-start mb-6 relative z-10">
                <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl overflow-hidden border border-white/10 bg-foreground/5 shadow-inner">
                        <img src={item.avatar} alt={item.clientName} className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" />
                    </div>
                    <div>
                        <h4 className="text-foreground font-bold text-sm leading-tight tracking-wide">{item.clientName}</h4>
                        <div className="flex items-center gap-1.5 text-[10px] font-mono text-muted mt-1 uppercase">
                            <MapPin size={10} className="text-yellow-500" />
                            {item.clientCountry}
                        </div>
                    </div>
                </div>
            </div>

            {/* Rating Stars */}
            <div className="flex items-center gap-1 mb-4 relative z-10">
                {[...Array(5)].map((_, i) => (
                    <Star 
                        key={i} 
                        size={14} 
                        fill="currentColor"
                        className={`${i < Math.floor(item.rating) ? 'text-yellow-500 drop-shadow-[0_0_8px_rgba(234,179,8,0.5)]' : 'text-white/10'}`} 
                    />
                ))}
                <div className="ml-auto flex items-center gap-1.5 px-2 py-1 rounded-full bg-green-500/10 border border-green-500/20">
                    <ShieldCheck size={10} className="text-green-500" />
                    <span className="text-[9px] font-bold text-green-500 uppercase tracking-wider">Verified</span>
                </div>
            </div>

            {/* Project Title */}
            <h3 className="text-sm font-bold text-foreground mb-4 line-clamp-2 group-hover:text-yellow-500 transition-colors duration-300 font-display relative z-10">
                {item.projectTitle}
            </h3>

            {/* Review Content */}
            <div className="relative z-10 mb-6 flex-grow">
                 <p className="text-muted text-sm leading-relaxed font-light">"{item.content}"</p>
            </div>

            {/* Footer */}
            <div className="flex justify-between items-center pt-4 border-t border-white/5 mt-auto relative z-10">
                <div className={`px-2 py-1 rounded text-[9px] font-bold tracking-widest uppercase border ${
                    isUpwork 
                        ? 'bg-[#14a800]/5 text-[#14a800] border-[#14a800]/20' 
                        : 'bg-[#29b2fe]/5 text-[#29b2fe] border-[#29b2fe]/20'
                }`}>
                    {item.platform}
                </div>
                <span className="text-[10px] text-muted/50 font-mono tracking-widest">{item.date}</span>
            </div>

        </motion.div>
    );
};

export default Testimonials;
