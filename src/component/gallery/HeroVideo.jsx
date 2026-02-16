import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { Play, Sparkles, ChevronDown, Trophy } from 'lucide-react';

const CinematicVideoHero = () => {
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Use Spring for buttery smooth physics
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  // 1. HEIGHT: Starts at a small 30vh rectangle and expands to 100vh
  const height = useTransform(smoothProgress, [0, 0.7], ["30vh", "100vh"]);
  
  // 2. WIDTH: Starts at 50% and expands to 100%
  const width = useTransform(smoothProgress, [0, 0.7], ["50%", "100%"]);
  
  // 3. BORDER RADIUS: Sharpens as it hits full screen
  const borderRadius = useTransform(smoothProgress, [0, 0.6], ["60px", "0px"]);
  
  // 4. VIDEO SCALE: Counter-zoom effect for high-end feel
  const videoScale = useTransform(smoothProgress, [0, 1], [1.4, 1]);

  // 5. BLUR: Background starts blurry and clears up
  const backdropBlur = useTransform(smoothProgress, [0, 0.4], ["blur(20px)", "blur(0px)"]);

  return (
    <div ref={containerRef} className="relative h-[250vh] bg-[#010F0E]">
      
      {/* Sticky Content Wrapper */}
      <div className="sticky top-0 h-screen w-full flex flex-col items-center justify-center overflow-hidden">
        
        {/* Animated Background Ambiance */}
        <motion.div 
          style={{ filter: backdropBlur }}
          className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#004643_0%,_transparent_70%)] opacity-20" 
        />

        {/* Floating Text - Disappears early to focus on video */}
        <motion.div 
          style={{ 
            opacity: useTransform(smoothProgress, [0, 0.2], [1, 0]),
            y: useTransform(smoothProgress, [0, 0.2], [0, -40]) 
          }}
          className="absolute z-20 text-center top-[20%]"
        >
          <div className="flex items-center justify-center gap-2 text-[#D4AF37] mb-4">
            <Trophy size={14} />
            <span className="uppercase tracking-[0.6em] text-[10px] font-black">2026 Boutique Film</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-serif text-white tracking-tighter leading-none">
            RS <span className="italic text-[#D4AF37]">Mart.</span>
          </h2>
          <motion.div 
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="mt-8 flex flex-col items-center gap-2"
          >
            <div className="h-10 w-[1px] bg-gradient-to-b from-[#D4AF37] to-transparent" />
            <span className="text-[9px] uppercase tracking-[0.3em] text-white/40 font-bold">Scroll to Reveal</span>
          </motion.div>
        </motion.div>

        {/* THE ANIMATED VIDEO CONTAINER */}
        <motion.div
          style={{ 
            width, 
            height,
            borderRadius,
          }}
          className="relative z-10 overflow-hidden shadow-[0_50px_100px_rgba(0,0,0,0.8)] border border-white/10 group cursor-none"
        >
          {/* Subtle Overlay */}
          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors z-10" />
          
          <motion.video
            style={{ scale: videoScale }}
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="https://www.pexels.com/download/video/6477755/" type="video/mp4" />
          </motion.video>

          {/* UI Elements that appear only when video is full */}
          <motion.div 
            style={{ 
              opacity: useTransform(smoothProgress, [0.6, 0.8], [0, 1]),
              y: useTransform(smoothProgress, [0.6, 0.8], [20, 0])
            }}
            className="absolute bottom-12 left-12 z-20 flex flex-col gap-2"
          >
            <div className="flex items-center gap-3">
               <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
               <span className="text-[10px] font-black text-white uppercase tracking-[0.3em]">Cinematic Premiere</span>
            </div>
            <h3 className="text-3xl font-serif text-[#D4AF37]">The Luxury Edit</h3>
          </motion.div>

          <motion.div 
            style={{ opacity: useTransform(smoothProgress, [0.7, 0.9], [0, 1]) }}
            className="absolute bottom-12 right-12 z-20"
          >
            <div className="p-4 rounded-full border border-white/20 backdrop-blur-md">
              <Play size={20} fill="white" className="text-white ml-1" />
            </div>
          </motion.div>
        </motion.div>

      </div>

      {/* Spacer to allow for the 250vh scroll length */}
      <div className="h-screen" />
      <div className="h-screen" />
    </div>
  );
};

export default CinematicVideoHero;