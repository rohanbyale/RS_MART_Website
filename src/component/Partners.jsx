import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const StatItem = ({ value, label, suffix = "+" }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div ref={ref} className="flex flex-col items-center justify-center px-8 border-r border-white/10 last:border-none">
      <div className="flex items-baseline gap-1">
        <motion.span 
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-3xl md:text-5xl font-serif text-white"
        >
          {value}
        </motion.span>
        <span className="text-[#D4AF37] font-bold">{suffix}</span>
      </div>
      <p className="text-[9px] uppercase tracking-[0.3em] text-white/40 mt-2 font-bold">{label}</p>
    </div>
  );
};

const LegacyStatsStrip = () => {
  const CYPRUS = "#004643";
  const GOLD = "#D4AF37";

  return (
    <div className="relative py-12 overflow-hidden" style={{ backgroundColor: CYPRUS }}>
      {/* Background Subtle Pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
        style={{ backgroundImage: `radial-gradient(${GOLD} 1px, transparent 1px)`, backgroundSize: '30px 30px' }} 
      />

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12 relative z-10 px-6">
        
        {/* Left Side: Counting Stats */}
        <div className="flex flex-wrap justify-center md:justify-start gap-y-8">
          <StatItem value="55" label="Years of Trust" />
          <StatItem value="12" label="Global Brands" />
          <StatItem value="50" label="K+ Happy Patrons" suffix="k" />
        </div>

        {/* Right Side: Animated Brand Ticker */}
        <div className="flex-1 max-w-sm md:max-w-md overflow-hidden">
          <div className="flex flex-col items-center md:items-end mb-4">
            <span className="text-[10px] text-[#D4AF37] tracking-[0.4em] uppercase font-bold">Authorized Partners</span>
          </div>
          <div className="flex relative group">
            <motion.div 
              animate={{ x: [0, -500] }}
              transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
              className="flex gap-10 whitespace-nowrap items-center text-white/30 font-serif text-xl italic"
            >
              <span>TITAN</span> <span>SONATA</span> <span>FASTRACK</span> <span>TOMMY HILFIGER</span>
              <span>POLICE</span> <span>LEE COOPER</span> <span>TITAN</span> <span>SONATA</span>
            </motion.div>
            
            {/* Soft Edge Blurs */}
            <div className="absolute inset-y-0 left-0 w-10 bg-gradient-to-r from-[#004643] to-transparent" />
            <div className="absolute inset-y-0 right-0 w-10 bg-gradient-to-l from-[#004643] to-transparent" />
          </div>
        </div>
      </div>

      {/* Thin Gold Line at bottom */}
      <motion.div 
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 1.5 }}
        className="absolute bottom-0 left-0 right-0 h-[1px] origin-left"
        style={{ backgroundColor: `${GOLD}44` }}
      />
    </div>
  );
};

export default LegacyStatsStrip;