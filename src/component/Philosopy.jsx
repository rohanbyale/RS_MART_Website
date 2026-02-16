import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

const PhilosophyBar = () => {
  const CYPRUS = "#004643";
  const GOLD = "#D4AF37";
  const CLOUD_WHITE = "#FAFAFA";
  
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Smoother Spring Animations
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  // Text Parallax - Tightened ranges for the shorter section
  const xLeft = useTransform(smoothProgress, [0, 1], [-60, 60]);
  const xRight = useTransform(smoothProgress, [0, 1], [60, -60]);
  const opacity = useTransform(smoothProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(smoothProgress, [0, 0.5, 1], [0.95, 1, 0.95]);

  return (
    <section 
      ref={containerRef}
      /* Height reduced from py-32/48 to py-16/24 */
      className="relative py-16 md:py-24 overflow-hidden border-y border-stone-100" 
      style={{ backgroundColor: CLOUD_WHITE }}
    >
      
      {/* --- KINETIC GEOMETRY BACKGROUND --- */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        
        {/* Large Faded "RS" Branding */}
      {/* Large Faded "RS" Branding */}
<motion.div 
  /* Increased opacity from 0.03 to 0.07 for better visibility */
  style={{ opacity: useTransform(smoothProgress, [0, 0.5, 1], [0, 0.07, 0]) }}
  /* Changed text-black to text-stone-900 or use CYPRUS for a subtle tinted look */
  className="absolute text-[25vw] font-serif font-black text-stone-900 select-none"
>
  RS
</motion.div>

        <div className="relative w-[500px] h-[500px] flex items-center justify-center">
          
          {/* Rotating Gift Mandala */}
          <motion.svg 
            style={{ 
              rotate: useTransform(smoothProgress, [0, 1], [0, 180]),
              scale: useTransform(smoothProgress, [0, 0.5, 1], [0.8, 1.1, 0.8])
            }}
            className="absolute w-full h-full opacity-[0.08]" viewBox="0 0 100 100"
          >
            <rect x="25" y="25" width="50" height="50" fill="none" stroke="black" strokeWidth="0.2" />
            <circle cx="50" cy="50" r="45" fill="none" stroke="black" strokeWidth="0.1" strokeDasharray="1 4" />
            
            {[0, 90, 180, 270].map((deg) => (
              <path 
                key={deg}
                d="M50 5 L52 15 L48 15 Z" 
                fill="black" 
                transform={`rotate(${deg} 50 50)`} 
              />
            ))}
          </motion.svg>

          {/* Floating 'Gold Dust' Particles */}
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 rounded-full"
              style={{ backgroundColor: GOLD }}
              animate={{
                y: [0, -60, 0], // Reduced travel distance
                x: [0, Math.random() * 30 - 15, 0],
                opacity: [0, 0.4, 0],
                scale: [0, 1.2, 0]
              }}
              transition={{
                duration: 4 + Math.random() * 4,
                repeat: Infinity,
                delay: i * 0.5
              }}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
            />
          ))}
        </div>
      </div>

      {/* --- CONTENT LAYER --- */}
      <motion.div 
        style={{ opacity, scale }}
        className="max-w-6xl mx-auto px-6 relative z-10 flex flex-col items-center"
      >
        
        {/* Animated Badge */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="flex items-center gap-4 mb-8" // Margin reduced from 12 to 8
        >
          <div className="h-[1px] w-8 bg-stone-200" />
          <span className="text-[9px] uppercase tracking-[0.8em] font-black text-stone-400">
            The Philosophy
          </span>
          <div className="h-[1px] w-8 bg-stone-200" />
        </motion.div>

        {/* Parallax Kinetic Text */}
        <div className="text-center space-y-1 md:space-y-2 cursor-default">
          <motion.div style={{ x: xLeft }} className="whitespace-nowrap">
            <h2 className="text-5xl md:text-8xl font-serif tracking-tighter" style={{ color: CYPRUS }}>
              Elegant <span className="italic font-light text-stone-300">Choices.</span>
            </h2>
          </motion.div>
          
          <motion.div style={{ x: xRight }} className="whitespace-nowrap">
            <h2 className="text-5xl md:text-8xl font-serif tracking-tighter" style={{ color: CYPRUS }}>
              Perfect <span className="italic font-light" style={{ color: GOLD }}>Gifts.</span>
            </h2>
          </motion.div>
        </div>

        {/* Refined Scrubber Mechanism */}
        <div className="mt-12 w-full max-w-sm flex flex-col items-center group"> {/* Mt reduced from 20 to 12 */}
          <div className="flex justify-between w-full text-[7px] md:text-[9px] uppercase tracking-[0.3em] text-stone-400 font-bold mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <span>Heritage</span>
            <span>Vision</span>
          </div>
          
          <div className="w-full h-[2px] bg-stone-100 relative overflow-hidden rounded-full">
            <motion.div 
              style={{ scaleX: smoothProgress }}
              className="absolute inset-0 origin-left"
              style={{ backgroundColor: GOLD }}
            />
          </div>

          <motion.p 
            animate={{ opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="mt-6 text-[10px] uppercase tracking-[0.5em] font-black text-stone-600"
          >
            RS Mart • Pusad
          </motion.p>
        </div>
      </motion.div>

      {/* Side Decorative Numbers */}
      <div className="absolute left-10 top-1/2 -translate-y-1/2 hidden lg:block">
        <p className="[writing-mode:vertical-lr] text-[9px] font-black text-stone-200 tracking-widest uppercase">
          Legacy 2026
        </p>
      </div>
      <div className="absolute right-10 top-1/2 -translate-y-1/2 hidden lg:block">
        <p className="[writing-mode:vertical-lr] text-[9px] font-black text-stone-200 tracking-widest uppercase">
          Quality Guaranteed
        </p>
      </div>

    </section>
  );
};

export default PhilosophyBar;