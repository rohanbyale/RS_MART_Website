import React from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { Sparkles, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom'; // Added for navigation

const AboutHero = () => {
  const { scrollY } = useScroll();
  
  const smoothY = useSpring(scrollY, { stiffness: 100, damping: 30 });
  
  const yBackground = useTransform(smoothY, [0, 1000], [0, 200]);
  const yImageForeground = useTransform(smoothY, [0, 1000], [0, -150]);
  const textScale = useTransform(smoothY, [0, 300], [1, 0.95]);
  const opacity = useTransform(smoothY, [0, 400], [1, 0]);

  const CYPRUS = "#004643";
  const GOLD = "#D4AF37";

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#FAFAFA] pt-20">
      
      {/* 1. LAYERED BACKGROUND TYPOGRAPHY */}
      <motion.div 
        style={{ y: yBackground, opacity: 0.04 }}
        className="absolute inset-0 flex flex-col items-center justify-center select-none pointer-events-none"
      >
        <h1 className="text-[20vw] font-serif font-black leading-none text-black">HERITAGE</h1>
        <h1 className="text-[20vw] font-serif font-black leading-none ml-[20vw] text-black">1970</h1>
      </motion.div>

      {/* 2. THE FLOATING MASK EFFECT */}
      <div className="absolute top-1/4 right-0 w-64 h-64 bg-[#D4AF37] opacity-[0.03] blur-[100px] rounded-full" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-[#004643] opacity-[0.03] blur-[120px] rounded-full" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 xl:gap-24">
          
          {/* 3. MULTI-LAYERED MEDIA COMPOSITION */}
          <div className="relative w-full lg:w-1/2 h-[500px] md:h-[650px]">
            <motion.div 
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="absolute left-0 top-10 w-[80%] h-[70%] rounded-2xl overflow-hidden shadow-2xl"
            >
              <img 
                src="https://i.pinimg.com/736x/50/73/25/5073250d41f4f45f91a3c2627ac2e61a.jpg" 
                className="w-full h-full object-cover"
                alt="Heritage Interior"
              />
              <div className="absolute inset-0 bg-black/20" />
            </motion.div>

            <motion.div 
              style={{ y: yImageForeground }}
              className="absolute right-0 bottom-10 w-[60%] h-[60%] rounded-2xl overflow-hidden border-[8px] border-white shadow-[-20px_20px_50px_rgba(0,0,0,0.1)] z-20"
            >
              <video 
                autoPlay loop muted playsInline
                className="w-full h-full object-cover"
              >
                <source src="https://www.pexels.com/download/video/5745613/" type="video/mp4" />
              </video>
            </motion.div>

            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-20 right-10 z-30 bg-white p-4 rounded-xl shadow-lg border-l-4 border-[#004643]"
            >
              <ShieldCheck className="text-[#004643] mb-1" size={24} />
              <p className="text-[9px] font-black uppercase tracking-tighter">Certified Excellence</p>
            </motion.div>
          </div>

          {/* 4. CONTENT AREA */}
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <motion.div style={{ scale: textScale }}>
              {/* IMPROVED UI TAG */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-3 mb-8 px-4 py-2 bg-white rounded-full shadow-sm border border-stone-100"
              >
                <div className="w-2 h-2 rounded-full bg-[#D4AF37] animate-pulse" />
                <span className="text-[#004643] text-[10px] font-black uppercase tracking-[0.3em]">
                  The RS Mart Story
                </span>
              </motion.div>
              
              <motion.h1 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="text-6xl xl:text-8xl font-serif leading-[0.9] mb-10 text-[#004643]"
              >
                Where <span className="italic font-light text-stone-400">Time</span> <br /> 
                Meets <span className="relative">
                  Artistry.
                  <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 300 20" fill="none">
                    <motion.path 
                      initial={{ pathLength: 0 }}
                      whileInView={{ pathLength: 1 }} // Animates only when visible
                      viewport={{ once: true }}
                      transition={{ duration: 1.2, delay: 0.8, ease: "easeInOut" }}
                      d="M5 15 Q 150 5 295 15" 
                      stroke="#D4AF37" 
                      strokeWidth="3" 
                      strokeLinecap="round" 
                    />
                  </svg>
                </span>
              </motion.h1>

              <motion.p 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="text-stone-500 text-lg xl:text-xl leading-relaxed mb-12 max-w-xl mx-auto lg:mx-0 font-medium"
              >
                Established in 1970, we have spent 50+ years perfecting the art of curation. From Pusad’s heart to your home, we bring jewelry that transcends generations.
              </motion.p>

              <motion.div 
                className="flex flex-col sm:flex-row items-center gap-8 justify-center lg:justify-start"
              >
                {/* CLICKABLE BUTTON LINK */}
                <Link to="/timeline">
                  <motion.button 
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="group relative px-12 py-5 bg-[#004643] overflow-hidden rounded-full transition-all"
                  >
                    <motion.div className="absolute inset-0 bg-[#D4AF37] translate-y-[101%] group-hover:translate-y-0 transition-transform duration-500" />
                    <span className="relative z-10 text-white text-xs font-bold uppercase tracking-widest flex items-center gap-2">
                      Our Timeline <Sparkles size={14} />
                    </span>
                  </motion.button>
                </Link>
                
                <div className="text-left">
                  <p className="text-[10px] font-bold text-stone-400 uppercase tracking-widest text-center lg:text-left">Global Standards</p>
                  <p className="text-sm font-serif italic text-[#004643]">Local Trust since 1970</p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* 5. LUXURY SCROLL INDICATOR */}
      <motion.div 
        style={{ opacity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center"
      >
        <span className="text-[8px] uppercase tracking-[0.4em] text-stone-400 font-bold mb-4 rotate-180 [writing-mode:vertical-lr]">Scroll</span>
        <div className="w-[1px] h-16 bg-gradient-to-b from-[#D4AF37] via-[#D4AF37]/50 to-transparent relative">
          <motion.div 
            animate={{ y: [0, 40, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute top-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-[#004643] rounded-full shadow-[0_0_10px_#D4AF37]"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default AboutHero;