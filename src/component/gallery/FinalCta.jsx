import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Sparkles, MessageCircle } from 'lucide-react';

const FinalCTA = () => {
  const { scrollYProgress } = useScroll();
  
  // Brand Colors
  const CYPRUS = "#004643";
  const GOLD = "#D4AF37";

  const yTranslate = useTransform(scrollYProgress, [0.8, 1], [0, -40]);

  const handleWhatsAppRedirect = () => {
    const phoneNumber = "91XXXXXXXXXX"; 
    const message = "Hello RS Mart, I'm interested in your premium collection.";
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <section className="relative py-16 md:py-24 bg-[#010F0E] overflow-hidden flex flex-col items-center">
      
      {/* 1. BRAND WATERMARK - Scaled down for mobile */}
      <motion.div 
        style={{ y: yTranslate }}
        className="absolute inset-0 flex items-center justify-center opacity-[0.03] select-none pointer-events-none"
      >
        <span className="text-[25vw] md:text-[20vw] font-serif font-bold text-white uppercase italic">RS MART</span>
      </motion.div>

      <div className="max-w-4xl w-full px-4 md:px-6 relative z-10 text-center">
        
        {/* THE ACTION CARD - Reduced padding on mobile (p-6 vs p-10) */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative group overflow-hidden rounded-[2rem] md:rounded-[3rem] border border-white/10 bg-white/[0.02] backdrop-blur-2xl p-8 md:p-20 flex flex-col items-center"
        >
          {/* ICON BADGE - Smaller on mobile */}
          <div className="w-10 h-10 md:w-14 md:h-14 rounded-full bg-white/5 flex items-center justify-center border border-white/10 mb-6 md:mb-8">
            <Sparkles size={18} className="md:w-5 md:h-5" style={{ color: GOLD }} />
          </div>

          <h2 className="text-3xl md:text-6xl font-serif text-white mb-4 md:mb-6 tracking-tight">
            Begin your <span className="italic" style={{ color: GOLD }}>Legacy.</span>
          </h2>
          
          <p className="text-white/40 text-xs md:text-base mb-8 md:mb-12 tracking-wide font-light max-w-[280px] md:max-w-sm mx-auto leading-relaxed">
            Experience a world where legacy meets modern craft. Our curators await you.
          </p>

          {/* CUSTOM SVG SLANTED BUTTON UI - Adaptive layout */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-10">
            
            <button 
              onClick={handleWhatsAppRedirect}
              className="group flex items-center cursor-pointer no-underline active:scale-95 transition-transform duration-200"
            >
              {/* 1. LEFT TEXT BOX - Reduced height for mobile (44px vs 52px) */}
              <div 
                className="h-[44px] md:h-[52px] flex items-center pl-6 md:pl-7 pr-3 rounded-l-[12px] md:rounded-l-[14px] text-white font-mono font-bold text-[10px] md:text-[11px] tracking-[0.2em] transition-all duration-500 group-hover:pr-5"
                style={{ backgroundColor: "#222F30" }}
              >
                INQUIRY
                <span className="ml-3 opacity-0 -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0 text-base md:text-lg">→</span>
              </div>

              {/* 2. THE TRANSITION CORNER (SVG) */}
              <div className="h-[44px] md:h-[52px] w-[15px] md:w-[18px] -ml-[1px]">
                <svg className="h-full w-full" viewBox="0 0 18 48" fill="none" preserveAspectRatio="none">
                  <path 
                    className="transition-colors duration-500 fill-[#222F30]"
                    d="M0 0h5.63c7.808 0 13.536 7.337 11.642 14.91l-6.09 24.359A11.527 11.527 0 0 1 0 48V0Z" 
                  />
                </svg>
              </div>

              {/* 3. RIGHT ICON BOX (SVG) */}
              <div className="relative h-[44px] md:h-[52px] w-[50px] md:w-[58px] -ml-[4px]">
                <svg className="h-full w-full" viewBox="0 0 51 48" fill="none">
                  <path 
                    className="transition-colors duration-500"
                    style={{ fill: GOLD }}
                    d="M6.728 9.09A12 12 0 0 1 18.369 0H39c6.627 0 12 5.373 12 12v24c0 6.627-5.373 12-12 12H12.37C4.561 48-1.167 40.663.727 33.09l6-24Z" 
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center text-[#010F0E]">
                  <MessageCircle size={18} fill="currentColor" className="md:w-5 md:h-5 transition-transform duration-500 group-hover:scale-110" />
                </div>
              </div>
            </button>

            {/* SECONDARY LINK - Discreet on mobile */}
            <button 
              className="group flex items-center gap-3 md:gap-4 text-[9px] md:text-[10px] uppercase tracking-[0.3em] md:tracking-[0.4em] font-black transition-all text-white/50 hover:text-white"
            >
              <span 
                className="h-9 w-9 md:h-11 md:w-11 flex items-center justify-center rounded-full border transition-all duration-500 group-hover:scale-110" 
                style={{ borderColor: 'rgba(212,175,55,0.2)' }}
              >
                <svg className="w-2.5 h-2.5 translate-x-0.5" fill={GOLD} viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </span>
              Our Story
            </button>
          </div>
        </motion.div>

        {/* FOOTER DETAIL - Tighter on mobile */}
        <div className="mt-10 flex flex-col md:flex-row items-center justify-between opacity-20 gap-4 border-t border-white/5 pt-6">
           <div className="flex items-center gap-4 text-[8px] md:text-[9px]">
              <span className="font-bold text-white uppercase tracking-[0.3em]">Est. 1970</span>
              <div className="w-6 h-px bg-white/30" />
              <span className="font-bold text-white uppercase tracking-[0.3em]">Pusad</span>
           </div>
           <p className="text-[7px] md:text-[8px] text-white uppercase tracking-[0.8em]">RS Mart Curation</p>
        </div>
      </div>

      {/* AMBIENT GLOW */}
      <div 
        className="absolute -bottom-24 left-1/2 -translate-x-1/2 w-[300px] h-[300px] blur-[100px] rounded-full opacity-10 pointer-events-none" 
        style={{ backgroundColor: CYPRUS }}
      />
    </section>
  );
};

export default FinalCTA;