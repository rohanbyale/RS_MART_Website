import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { ShoppingBag, ArrowRight, Sparkles, Gift, Heart, Star } from 'lucide-react';

const RSMartUltimateHero = () => {
  const containerRef = useRef(null);
  
  // 1. Core Scroll Progress
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Smooth out the scroll values
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // 2. Advanced Transforms
  // Clip path reveal from center
  const clipPathValue = useTransform(smoothProgress, [0, 0.4], [
    "inset(12% 8% 12% 8% round 4rem)",
    "inset(0% 0% 0% 0% round 0rem)"
  ]);

  // Parallax movements for different layers
  const textY = useTransform(smoothProgress, [0, 1], [0, -200]);
  const imageY = useTransform(smoothProgress, [0, 1], [0, -100]);
  const floatingIconY = useTransform(smoothProgress, [0, 1], [0, -400]);
  const bgScale = useTransform(smoothProgress, [0, 0.4], [1.1, 1]);
  
  // Rotation for the gold elements
  const rotateGold = useTransform(smoothProgress, [0, 1], [0, 45]);

  // Text Splitting Logic
  const titleText = "Crafting Pure Joy.";
  const titleChars = titleText.split("");

  return (
    <div ref={containerRef} className="relative h-[250vh] bg-[#002B29]">
      {/* Scroll Progress Bar (Awwwards Style) */}
      <motion.div 
        style={{ scaleX: smoothProgress }}
        className="fixed top-0 left-0 right-0 h-1 bg-[#D4AF37] origin-left z-[100]"
      />

      <div className="sticky top-0 h-screen overflow-hidden">
        <motion.section 
          style={{ 
            clipPath: clipPathValue,
            scale: bgScale
          }}
          className="relative h-full w-full bg-[#FCFBFA] flex items-center shadow-2xl origin-center"
        >
          {/* Subtle Noise Texture Overlay */}
          <div className="absolute inset-0 opacity-[0.04] pointer-events-none mix-blend-multiply" 
               style={{ backgroundImage: `url('https://www.transparenttextures.com/patterns/stardust.png')` }} />
          
          <div className="container mx-auto px-6 lg:px-20 relative z-10">
            <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
              
              {/* --- CONTENT LAYER --- */}
              <motion.div style={{ y: textY }} className="w-full lg:w-[60%] z-20">
                {/* Magnetic Badge */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="inline-flex items-center gap-3 mb-10 px-6 py-2 rounded-full border border-[#D4AF37]/20 bg-white shadow-sm"
                >
                  <Gift size={14} className="text-[#D4AF37] animate-bounce" />
                  <span className="text-[#004643] text-[10px] font-black uppercase tracking-[0.4em]">
                    Pusad's Premier Boutique
                  </span>
                  <div className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
                </motion.div>

                {/* Staggered Title Reveal */}
                <h1 className="text-7xl lg:text-[130px] font-serif text-[#004643] leading-[0.85] mb-12 tracking-tighter flex flex-wrap">
                  {titleChars.map((char, i) => (
                    <motion.span
                      key={i}
                      initial={{ y: "100%", opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ 
                        duration: 1, 
                        delay: 0.2 + (i * 0.05), 
                        ease: [0.16, 1, 0.3, 1] 
                      }}
                      className={`inline-block origin-bottom ${char === " " ? "mr-6" : ""}`}
                    >
                      {char}
                    </motion.span>
                  ))}
                </h1>

                <motion.p 
                   initial={{ opacity: 0 }}
                   animate={{ opacity: 1 }}
                   transition={{ delay: 1 }}
                   className="text-stone-400 text-xl lg:text-2xl max-w-xl leading-relaxed mb-14 font-light"
                >
                  We don't just sell gifts; we curate <span className="text-[#004643] font-medium">timeless memories</span> wrapped in gold.
                </motion.p>

                {/* Interactive Action Bar */}
                <div className="flex flex-wrap gap-8 items-center">
                  <motion.button 
                    whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(0,70,67,0.2)" }}
                    whileTap={{ scale: 0.98 }}
                    className="relative overflow-hidden bg-[#004643] text-white px-14 py-7 rounded-full font-bold text-xs uppercase tracking-[0.2em] group"
                  >
                    <span className="relative z-10 flex items-center gap-3">
                      <ShoppingBag size={18} /> Enter the Store
                    </span>
                    <motion.div className="absolute inset-0 bg-[#D4AF37] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-expo" />
                  </motion.button>

                  <motion.button 
                    className="group flex items-center gap-4 text-[#004643] font-black text-xs uppercase tracking-[0.3em]"
                  >
                    <span className="border-b-2 border-transparent group-hover:border-[#D4AF37] transition-all pb-1">Our Heritage</span>
                    <ArrowRight size={20} className="text-[#D4AF37] group-hover:translate-x-3 transition-transform duration-500" />
                  </motion.button>
                </div>
              </motion.div>

              {/* --- VISUAL LAYER --- */}
              <motion.div 
                style={{ y: imageY }}
                className="w-full lg:w-[40%] relative"
              >
                {/* Decorative Parallax Icons */}
                <motion.div style={{ y: floatingIconY, rotate: rotateGold }} className="absolute -top-20 -left-20 z-0 text-[#D4AF37]/20">
                  <Sparkles size={120} strokeWidth={0.5} />
                </motion.div>
                <motion.div style={{ y: textY }} className="absolute -bottom-10 -right-10 z-30 text-[#004643]/10">
                  <Heart size={180} fill="currentColor" />
                </motion.div>

                {/* Main Hero Frame */}
                <div className="relative z-10 p-4 bg-white rounded-[5rem] shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-1000">
                  <div className="rounded-[4rem] overflow-hidden relative group">
                    <motion.img 
                      whileHover={{ scale: 1.15 }}
                      transition={{ duration: 2, ease: "circOut" }}
                      src="https://img.freepik.com/free-photo/nature-landscape-with-hand-holding-frame_23-2149389976.jpg?semt=ais_hybrid&w=740&q=80" 
                      alt="RS Mart Boutique" 
                      className="w-full h-[650px] object-cover"
                    />
                    
                    {/* Floating Info Pill on Image */}
                    <div className="absolute top-10 left-10 flex items-center gap-2 bg-white/20 backdrop-blur-md px-4 py-2 rounded-full border border-white/30 text-white text-[9px] font-bold uppercase tracking-widest">
                       <Star size={12} fill="#D4AF37" className="text-[#D4AF37]" /> Quality Guaranteed
                    </div>
                  </div>
                </div>

                {/* Scrolling Label */}
                <motion.div 
                  animate={{ rotate: 360 }}
                  transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                  className="absolute -bottom-20 -left-20 w-48 h-48 hidden lg:flex items-center justify-center"
                >
                  <svg viewBox="0 0 100 100" className="w-full h-full fill-[#D4AF37] opacity-20">
                    <path id="circlePath" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" fill="transparent" />
                    <text className="text-[10px] uppercase tracking-[0.2em] font-black">
                      <textPath xlinkHref="#circlePath">
                        RS Mart • Since 1970 • Pure Luxury • RS Mart • 
                      </textPath>
                    </text>
                  </svg>
                </motion.div>
              </motion.div>

            </div>
          </div>
        </motion.section>
      </div>
      
      {/* FINAL TRANSITION FOOTER */}
      <div className="h-screen flex flex-col items-center justify-center text-center px-6">
          <motion.div 
            style={{ opacity: scrollYProgress }}
            className="space-y-8"
          >
            <h2 className="text-[#D4AF37] font-serif text-5xl lg:text-8xl italic leading-tight">
              A Legacy Beyond <br /> Comparison.
            </h2>
            <div className="h-24 w-[1px] bg-gradient-to-b from-[#D4AF37] to-transparent mx-auto" />
            <p className="text-white/40 uppercase tracking-[1em] text-xs">Explore Below</p>
          </motion.div>
      </div>
    </div>
  );
};

export default RSMartUltimateHero;