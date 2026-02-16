import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Star, ChevronRight, ArrowRight } from 'lucide-react';

const WatchFeatureSection = () => {
  const containerRef = useRef(null);
  
  // Parallax Effect for the Watch
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  const watchY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);
  const rotate = useTransform(scrollYProgress, [0, 1], [-5, 5]);

  return (
    <section ref={containerRef} className="bg-[#fcfcfc] min-h-screen flex flex-col items-center py-16 md:py-28 px-4 overflow-hidden">
      
      {/* 1. Ultra-Premium Heading */}
      <div className="text-center mb-16 md:mb-24 relative">
        <motion.span 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-[10px] md:text-xs uppercase tracking-[0.5em] text-[#D4AF37] font-bold mb-4 block"
        >
          Est. 2026 Collection
        </motion.span>
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="text-6xl sm:text-7xl md:text-[9rem] font-serif text-black leading-[0.85] tracking-tighter"
        >
          Crafting Time<span className="text-[#D4AF37]">.</span> <br />
          <span className="italic font-light text-gray-900">Defining Moments</span>
        </motion.h1>
      </div>

      {/* 2. The Hero Card */}
      <div className="w-full max-w-7xl bg-[#0a0a0a] rounded-[40px] md:rounded-[80px] overflow-hidden relative min-h-[750px] md:min-h-[600px] flex flex-col md:flex-row items-stretch shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] border border-white/5">
        
        {/* Background Decorative Elements */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-[#D4AF37]/5 blur-[120px] rounded-full" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-white/5 blur-[120px] rounded-full" />
        </div>

        {/* LEFT: Technical Details */}
        <div className="flex-1 p-10 md:p-16 z-20 flex flex-col justify-between order-2 md:order-1">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="hidden md:block"
          >
            <div className="flex gap-1 mb-6 text-[#D4AF37]">
              {[...Array(5)].map((_, i) => <Star key={i} size={12} fill="currentColor" />)}
            </div>
            <p className="text-gray-400 text-sm max-w-[280px] leading-relaxed font-light tracking-wide">
              "An architectural masterpiece for the wrist. The balance of weight and precision is unparalleled in modern horology."
            </p>
          </motion.div>

          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="h-[1px] w-16 bg-gradient-to-r from-[#D4AF37] to-transparent"></div>
              <span className="text-[10px] text-[#D4AF37] uppercase tracking-[0.3em] font-bold">Specifications</span>
            </div>
            <h2 className="text-white text-3xl md:text-5xl font-serif leading-none">
              Elite <br /> 
              <span className="text-gray-500 italic font-light">Chronograph</span>
            </h2>
          </div>
        </div>

        {/* CENTER: The Parallax Image */}
        <div className="flex-[1.2] flex items-center justify-center relative min-h-[350px] md:min-h-full order-1 md:order-2">
            <motion.div 
              style={{ y: watchY, rotate }}
              className="relative z-10 w-full flex justify-center"
            >
              <img 
                src="https://images.unsplash.com/photo-1542496658-e33a6d0d50f6?q=80&w=1000" 
                alt="Premium Watch" 
                className="w-[70%] md:w-[90%] h-auto object-contain drop-shadow-[0_40px_80px_rgba(0,0,0,0.8)]"
              />
              {/* Radial Highlight */}
              <div className="absolute inset-0 bg-gradient-to-tr from-[#D4AF37]/10 to-transparent opacity-30 blur-3xl -z-10" />
            </motion.div>
        </div>

        {/* RIGHT: Call to Action */}
        <div className="flex-1 p-10 md:p-16 z-20 flex flex-col items-center md:items-end justify-center md:justify-end text-center md:text-right order-3">
          <div className="mb-10">
            <h3 className="text-white text-xl md:text-2xl font-light mb-2">
              Limited Edition
            </h3>
            <p className="text-[#D4AF37] font-serif italic text-lg">Available now</p>
          </div>
          
          <motion.button 
            whileHover={{ scale: 1.02, backgroundColor: "#D4AF37", color: "#fff" }}
            whileTap={{ scale: 0.98 }}
            className="group relative overflow-hidden flex items-center gap-6 px-12 py-5 rounded-full bg-white text-black text-xs font-black uppercase tracking-[0.2em] transition-all duration-500 shadow-2xl"
          >
            <span className="relative z-10">Purchase Collection</span>
            <ArrowRight size={16} className="relative z-10 transition-transform group-hover:translate-x-2" />
          </motion.button>
        </div>

      </div>

      {/* 3. Subtle Footer for Section */}
      <div className="mt-12 flex gap-12 opacity-30 grayscale hover:grayscale-0 transition-all duration-700">
         <span className="text-[10px] font-bold tracking-widest uppercase">Swiss Movement</span>
         <span className="text-[10px] font-bold tracking-widest uppercase">Sapphire Glass</span>
         <span className="text-[10px] font-bold tracking-widest uppercase">18K Gold Plated</span>
      </div>
    </section>
  );
};

export default WatchFeatureSection;