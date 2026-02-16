import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, MoveRight } from 'lucide-react';

const RSUniqueHero = () => {
  const [hoveredSide, setHoveredSide] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  // Handle window resize for framer motion logic
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    /* Height: 
       - Mobile: 100vh or 80vh to ensure it fits the screen
       - Desktop: Fixed 600px 
    */
    <section className="relative h-[100vh] md:h-[600px] w-full bg-[#0A0A0A] overflow-hidden flex flex-col md:flex-row">
      
      {/* --- LEFT SECTION (THE EXQUISITE) --- */}
      <motion.div 
        onMouseEnter={() => setHoveredSide('left')}
        onMouseLeave={() => setHoveredSide(null)}
        onClick={() => setHoveredSide(hoveredSide === 'left' ? null : 'left')} // Mobile toggle
        animate={{ 
          // Desktop: Width changes | Mobile: Height changes
          width: !isMobile ? (hoveredSide === 'left' ? '75%' : hoveredSide === 'right' ? '25%' : '50%') : '100%',
          height: isMobile ? (hoveredSide === 'left' ? '70%' : hoveredSide === 'right' ? '30%' : '50%') : '100%'
        }}
        transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
        className="relative border-b md:border-b-0 md:border-r border-white/10 overflow-hidden group cursor-pointer"
      >
        <div className="absolute inset-0 z-0">
          <video autoPlay loop muted playsInline className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-[2s]">
            <source src="https://www.pexels.com/download/video/5745613/" type="video/mp4" />
          </video>
          {/* Emerald tint overlay */}
          <div className="absolute inset-0 bg-[#004643]/70 mix-blend-multiply opacity-80 group-hover:opacity-40 transition-opacity" />
        </div>

        <div className="relative z-10 h-full flex flex-col justify-between p-6 md:p-10 text-white">
          <div className="overflow-hidden">
            <motion.p initial={{ y: 20 }} animate={{ y: 0 }} className="text-[#D4AF37] text-[10px] font-black uppercase tracking-[0.4em]">Curated Luxury</motion.p>
          </div>
          
          <div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif leading-[0.9] mb-4 group-hover:italic transition-all">The <br />Exquisite</h2>
            <motion.div 
              animate={{ x: hoveredSide === 'left' ? 0 : -20, opacity: hoveredSide === 'left' ? 1 : 0 }} 
              className="hidden md:flex items-center gap-4"
            >
               <span className="text-xs uppercase tracking-widest font-bold">Discover Store</span>
               <MoveRight className="text-[#D4AF37]" size={20} />
            </motion.div>
          </div>

          <div className="flex items-center gap-4 border-t border-white/20 pt-4 w-fit">
            <span className="text-3xl font-serif">01</span>
            <span className="text-[9px] uppercase opacity-60 leading-tight tracking-wider">Handpicked <br />Aesthetics</span>
          </div>
        </div>
      </motion.div>

      {/* --- RIGHT SECTION (OUR LEGACY) --- */}
      <motion.div 
        onMouseEnter={() => setHoveredSide('right')}
        onMouseLeave={() => setHoveredSide(null)}
        onClick={() => setHoveredSide(hoveredSide === 'right' ? null : 'right')} // Mobile toggle
        animate={{ 
          width: !isMobile ? (hoveredSide === 'right' ? '75%' : hoveredSide === 'left' ? '25%' : '50%') : '100%',
          height: isMobile ? (hoveredSide === 'right' ? '70%' : hoveredSide === 'left' ? '30%' : '50%') : '100%'
        }}
        transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
        className="relative overflow-hidden group cursor-pointer bg-stone-100"
      >
        <div className="absolute inset-0 z-0 transition-all duration-1000">
           <img 
            src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1200" 
            className={`w-full h-full object-cover grayscale transition-all duration-700 ${hoveredSide === 'right' ? 'grayscale-0 scale-105' : 'grayscale'}`} 
            alt="Legacy"
           />
           <div className="absolute inset-0 bg-[#fdfaf7]/10 group-hover:bg-transparent transition-colors" />
        </div>

        <div className="relative z-10 h-full flex flex-col justify-between p-6 md:p-10 text-[#004643]">
          <div className="flex justify-end">
            <p className="text-[#D4AF37] text-[10px] font-black uppercase tracking-[0.4em]">Since 1970</p>
          </div>
          
          <div className="text-right">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif leading-[0.9] mb-4 group-hover:text-[#D4AF37] transition-colors">Our <br />Legacy</h2>
            <motion.div 
              animate={{ x: hoveredSide === 'right' ? 0 : 20, opacity: hoveredSide === 'right' ? 1 : 0 }} 
              className="hidden md:flex items-center gap-4 justify-end"
            >
               <MoveRight className="rotate-180 text-[#D4AF37]" size={20} />
               <span className="text-xs uppercase tracking-widest font-bold">Read Story</span>
            </motion.div>
          </div>

          <div className="flex items-center justify-end gap-4 border-t border-[#004643]/20 pt-4 w-full">
            <span className="text-[9px] uppercase opacity-60 leading-tight text-right tracking-wider">Crafting <br />Emotions</span>
            <span className="text-3xl font-serif">02</span>
          </div>
        </div>
      </motion.div>

      {/* --- CENTER OVERLAY (RS MART) --- */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 pointer-events-none w-full text-center">
        <motion.div 
          animate={{ 
            scale: hoveredSide ? 0.5 : 1,
            opacity: hoveredSide ? 0 : 1,
            y: hoveredSide ? (isMobile ? (hoveredSide === 'left' ? 100 : -100) : 0) : 0
          }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-serif font-black tracking-tighter text-white mix-blend-difference drop-shadow-2xl">
            RS MART
          </h1>
          <div className="flex items-center justify-center gap-3 mt-[-0.5rem] md:mt-[-1.5rem]">
             <div className="h-[1px] w-6 md:w-12 bg-[#D4AF37]" />
             <span className="text-[#D4AF37] text-[9px] md:text-[11px] uppercase tracking-[0.8em] font-bold">Pusad</span>
             <div className="h-[1px] w-6 md:w-12 bg-[#D4AF37]" />
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <AnimatePresence>
        {!hoveredSide && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute bottom-6 left-1/2 -translate-x-1/2 z-[60] flex flex-col items-center gap-2"
          >
            <div className="w-5 h-8 rounded-full border border-white/30 flex justify-center p-1">
               <motion.div 
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="w-1 h-1.5 bg-[#D4AF37] rounded-full" 
               />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default RSUniqueHero;