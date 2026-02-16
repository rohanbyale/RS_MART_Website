import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { ShoppingBag, Star, Instagram, Menu, Plus, Sparkle, ArrowRight } from 'lucide-react';

const RSZoomHero = () => {
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 70,
    damping: 30,
    restDelta: 0.001
  });

  // Responsive Zooming Logic
  // Mobile gets a slightly larger initial width (88%) to keep content legible
  const videoWidth = useTransform(smoothProgress, [0, 0.45], ["88%", "100%"]);
  const videoHeight = useTransform(smoothProgress, [0, 0.45], ["60vh", "100vh"]);
  const videoScale = useTransform(smoothProgress, [0, 0.45], [1.2, 1]);
  
  // Opacity & Entrance
  const initialTextOpacity = useTransform(smoothProgress, [0, 0.1], [1, 0]);
  const finalTextOpacity = useTransform(smoothProgress, [0.45, 0.6], [0, 1]);
  const finalTextY = useTransform(smoothProgress, [0.45, 0.6], [40, 0]);

  return (
    <div ref={containerRef} className="relative h-[400vh] bg-[#FAFAFA]">
   

      <div className="sticky top-0 h-screen w-full flex flex-col items-center justify-center overflow-hidden">
        
        {/* --- LAYER 1: THE MAJESTIC ENTRANCE --- */}
        <motion.div 
          style={{ opacity: initialTextOpacity }}
          className="absolute z-30 text-center px-4 w-full"
        >
          <div className="flex items-center justify-center gap-2 md:gap-4 mb-4 md:mb-8">
            <div className="h-[1px] w-8 md:w-12 bg-[#D4AF37]/40" />
            <span className="text-[#004643] text-[9px] md:text-[11px] font-black uppercase tracking-[0.4em] md:tracking-[0.7em]">Pusad Heritage</span>
            <div className="h-[1px] w-8 md:w-12 bg-[#D4AF37]/40" />
          </div>

          <div className="overflow-hidden py-2 md:py-4">
            <motion.h1 
              initial={{ y: "110%" }}
              animate={{ y: 0 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-[#004643] text-5xl sm:text-7xl md:text-[12rem] lg:text-[14rem] font-serif tracking-tighter leading-none font-medium"
            >
              RS <span className="text-[#D4AF37] italic font-light">MART</span>
            </motion.h1>
          </div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="mt-8 md:mt-12 flex flex-col items-center gap-3 md:gap-4"
          >
            <div className="w-[1px] h-12 md:h-20 bg-gradient-to-b from-[#004643] to-transparent" />
            <span className="text-[8px] md:text-[10px] uppercase tracking-[0.4em] font-bold text-[#004643]/40 animate-pulse">Scroll to enter</span>
          </motion.div>
        </motion.div>

        {/* --- LAYER 2: THE IMMERSIVE PORTAL --- */}
        <motion.div
          style={{ width: videoWidth, height: videoHeight }}
          className="relative z-10 overflow-hidden shadow-[0_0_100px_rgba(0,70,67,0.1)]"
        >
          <div className="absolute inset-0 bg-[#004643]/40 z-10 mix-blend-multiply" />
          
          <motion.video 
            style={{ scale: videoScale }}
            autoPlay loop muted playsInline 
            className="w-full h-full object-cover brightness-90 contrast-110"
          >
            <source src="https://www.pexels.com/download/video/6120435/" type="video/mp4" />
          </motion.video>

          {/* --- LAYER 3: THE BOUTIQUE INTERIOR --- */}
          <motion.div 
            style={{ opacity: finalTextOpacity, y: finalTextY }}
            className="absolute inset-0 z-20 w-full h-full flex items-center"
          >
            <div className="container mx-auto px-6 md:px-12 lg:px-24">
              <div className="grid lg:grid-cols-2 gap-10 lg:gap-20 items-center">
                
                <div className="space-y-6 md:space-y-10 text-center lg:text-left">
                  <div className="flex items-center justify-center lg:justify-start gap-3 md:gap-4">
                      <Sparkle size={14} md:size={18} className="text-[#D4AF37] fill-[#D4AF37]" />
                      <span className="text-[#FAFAFA] text-[10px] md:text-[12px] font-bold uppercase tracking-[0.3em] md:tracking-[0.5em]">The Signature Collection</span>
                  </div>
                  
                  <h2 className="text-[#FAFAFA] text-5xl sm:text-6xl md:text-8xl lg:text-[10rem] font-serif leading-[0.9] lg:leading-[0.8] tracking-tighter">
                    Crafting <br /> 
                    <span className="text-[#D4AF37] italic font-light tracking-normal">Elegance.</span>
                  </h2>
                  
                  <p className="text-[#FAFAFA]/70 text-sm md:text-lg lg:text-2xl max-w-lg mx-auto lg:mx-0 leading-relaxed font-light border-0 lg:border-l border-[#D4AF37]/50 lg:pl-10">
                    A legacy redefined. We bring the world's most <span className="text-[#FAFAFA] font-medium italic">exquisite treasures</span> to the heart of Pusad.
                  </p>
                  
                  <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6 md:gap-8 pt-4 md:pt-6">
                    <motion.button 
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="group bg-[#D4AF37] text-[#004643] w-full sm:w-auto px-10 md:px-16 py-5 md:py-8 font-black text-[10px] md:text-[11px] uppercase tracking-[0.3em] md:tracking-[0.5em] flex items-center justify-center gap-4 md:gap-6 transition-all"
                    >
                      View Catalog <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
                    </motion.button>
                    <button className="text-[#FAFAFA] border-b border-[#D4AF37] pb-1 font-bold text-[10px] md:text-[11px] uppercase tracking-[0.4em] hover:text-[#D4AF37] transition-colors">
                      Our Story
                    </button>
                  </div>
                </div>

                {/* Parallax Product Bento - Responsive: Hidden on small Mobile, visible on Tablet+ */}
                <div className="hidden md:grid grid-cols-2 gap-4 lg:gap-8 relative h-[400px] lg:h-[600px]">
                  <motion.div 
                    style={{ y: useTransform(smoothProgress, [0.4, 1], [0, -80]) }}
                    className="relative aspect-[3/5] overflow-hidden border border-white/10 group shadow-2xl"
                  >
                     <img src="https://i.pinimg.com/736x/f9/ff/d6/f9ffd6f84fe12d0d9fd9f07e7ecdabf3.jpg" className="w-full h-full object-cover grayscale-[50%] group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-110" />
                     <div className="absolute bottom-4 lg:bottom-6 left-4 lg:left-6 text-white z-30">
                        <p className="text-[8px] lg:text-[10px] uppercase tracking-widest font-bold text-[#D4AF37]">Ceramics</p>
                        <p className="text-lg lg:text-xl font-serif italic">The Ivory Vase</p>
                     </div>
                     <div className="absolute inset-0 bg-gradient-to-t from-[#004643] to-transparent opacity-60" />
                  </motion.div>

                  <motion.div 
                    style={{ y: useTransform(smoothProgress, [0.4, 1], [60, -40]) }}
                    className="relative aspect-[3/5] mt-12 lg:mt-24 overflow-hidden border border-white/10 group shadow-2xl"
                  >
                     <img src="https://i.pinimg.com/1200x/5f/0c/d0/5f0cd0bf740be6fa37bcab0a1a25baf1.jpg" className="w-full h-full object-cover grayscale-[50%] group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-110" />
                     <div className="absolute bottom-4 lg:bottom-6 left-4 lg:left-6 text-white z-30">
                        <p className="text-[8px] lg:text-[10px] uppercase tracking-widest font-bold text-[#D4AF37]">Gifting</p>
                        <p className="text-lg lg:text-xl font-serif italic">Silk Wrapped</p>
                     </div>
                     <div className="absolute inset-0 bg-gradient-to-t from-[#004643] to-transparent opacity-60" />
                  </motion.div>
                </div>

              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* --- LAYER 4: AMBIENT TEXT --- */}
        <motion.div 
          style={{ 
            scale: useTransform(smoothProgress, [0, 1], [1, 1.3]),
            opacity: useTransform(smoothProgress, [0, 0.5], [0.03, 0]) 
          }}
          className="absolute inset-0 flex items-center justify-center pointer-events-none"
        >
          <span className="text-[30vw] font-black text-[#004643] uppercase select-none tracking-tighter">
            MART
          </span>
        </motion.div>
      </div>

      <style jsx>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 12s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default RSZoomHero;