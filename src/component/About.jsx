import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Zap, Activity, Target, Shirt, Ruler } from 'lucide-react';

const gear = [
  { id: 1, name: "Aero-Shell", label: "Pro-Tech", img: "/shoes.png" },
  { id: 2, name: "Flux Runner", label: "Limited", img: "/picsart-shoes-hd-11549510051n95yyqc4vd-removebg-preview.png" },
  { id: 3, name: "Compression V3", label: "Elite", img: "/short.png" },
  { id: 4, name: "Thermal Grip", label: "New Drop", img: "/tshirt.png" },
];

const SportsCollection = () => {
  const gold = "#D4AF37";
  const cyprus = "#004643";
  const cloudWhite = "#FAFAFA";

  const containerVars = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const itemVars = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
  };

  const pathVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: { 
      pathLength: 1, 
      opacity: 0.2, 
      transition: { duration: 3, ease: "easeInOut", repeat: Infinity, repeatType: "mirror" } 
    }
  };

  return (
    <div className="relative min-h-screen font-sans flex flex-col justify-between overflow-x-hidden selection:bg-[#D4AF37] selection:text-white" 
         style={{ backgroundColor: cyprus, color: cloudWhite }}>
      
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-50">
        <svg className="w-full h-full" viewBox="0 0 1000 1000" fill="none">
          <motion.path
            d="M-100 200 C 200 100, 400 500, 1100 400 M-100 600 C 300 800, 700 200, 1100 700"
            stroke={gold}
            strokeWidth="0.5"
            variants={pathVariants}
            initial="hidden"
            animate="visible"
          />
          <motion.circle cx="400" cy="400" r="300" stroke={gold} strokeWidth="0.2" variants={pathVariants} initial="hidden" animate="visible" />
          <motion.rect x="100" y="100" width="800" height="800" stroke={gold} strokeWidth="0.1" variants={pathVariants} initial="hidden" animate="visible" />
        </svg>
      </div>

      <motion.div 
        initial="hidden"
        animate="visible"
        variants={containerVars}
        className="relative z-10 max-w-[1600px] w-full mx-auto px-6 md:px-12 py-12 md:py-20"
      >
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-10">
          <div className="flex-1">
            <motion.div variants={itemVars} className="flex items-center gap-3 mb-4 md:mb-6">
              <div className="flex gap-1">
                <div className="p-1 rounded-sm" style={{ backgroundColor: gold }}>
                  <Target size={14} className="text-white" />
                </div>
                <div className="p-1 rounded-sm border" style={{ borderColor: gold }}>
                  <Shirt size={14} style={{ color: gold }} />
                </div>
                <motion.div 
                  animate={{ rotate: [0, 10, 0] }} 
                  transition={{ repeat: Infinity, duration: 2 }}
                  className="p-1 rounded-sm border border-white/20"
                >
                  <Ruler size={14} className="text-white/40" />
                </motion.div>
              </div>
              <span className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.4em]" style={{ color: gold }}>
                Elite Performance Division
              </span>
            </motion.div>
            <motion.h1 
              variants={itemVars}
              className="text-[14vw] lg:text-[110px] font-[900] leading-[0.85] tracking-tighter uppercase italic"
            >
              Push Beyond <br /> Potential<span style={{ color: gold }}>.</span>
            </motion.h1>
          </div>

          <motion.div variants={itemVars} className="max-w-md w-full">
            <p className="text-white/60 text-sm md:text-base font-medium leading-relaxed mb-8 uppercase italic tracking-tight">
              Velocity Core: Where biomechanics meets high-fashion. Ultra-lightweight carbon fibers designed for maximum explosive power.
            </p>
            <button className="group flex items-center gap-4">
              <div className="h-[1px] w-12 transition-all duration-500 group-hover:w-20" style={{ backgroundColor: gold }} />
              <span className="text-[11px] font-black uppercase tracking-[0.3em] group-hover:opacity-70 transition-opacity">
                Shop The Lab
              </span>
            </button>
          </motion.div>
        </div>
      </motion.div>

      <div className="relative border-t border-b border-white/10 flex flex-col lg:flex-row items-stretch bg-black/20 z-10">
        
        <div className="flex flex-1 border-b lg:border-b-0 lg:border-r border-white/10">
          {gear.slice(0, 2).map((item) => (
            <div key={item.id} className="flex-1 aspect-square lg:aspect-[4/5] border-r border-white/10 last:border-r-0 relative group overflow-hidden flex items-center justify-center p-4 md:p-8">
              <span className="absolute top-0 left-0 bg-white/10 px-3 py-1 text-[7px] font-black uppercase tracking-widest text-white/60 z-20 group-hover:text-[#D4AF37] transition-colors">
                {item.label}
              </span>
              <motion.img 
                whileHover={{ scale: 1.05, y: -10 }}
                src={item.img} 
                className="w-full h-3/4 object-contain transition-all duration-700 opacity-100"
              />
            </div>
          ))}
        </div>

        <div className="w-full lg:max-w-[420px] shrink-0 z-10 bg-black/40 border-x border-white/10 self-stretch">
          <div className="relative h-[450px] lg:h-full group cursor-pointer overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=800" 
              className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-all duration-1000 group-hover:scale-110" 
              alt="Main Feature"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            
            <div className="absolute bottom-8 left-8 right-8 flex justify-between items-end">
              <div>
                <Activity style={{ color: gold }} className="mb-3" size={24} />
                <h3 className="text-3xl md:text-4xl font-black leading-[0.8] tracking-tighter uppercase italic">
                  Velocity <br /> Genesis
                </h3>
              </div>
              <div className="p-3 rounded-full border border-white/20 group-hover:bg-[#D4AF37] group-hover:text-white transition-all duration-300">
                <ArrowUpRight size={20} strokeWidth={3} />
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-1 border-t lg:border-t-0 lg:border-l border-white/10">
          {gear.slice(2, 4).map((item) => (
            <div key={item.id} className="flex-1 aspect-square lg:aspect-[4/5] border-r border-white/10 last:border-r-0 relative group overflow-hidden flex items-center justify-center p-4 md:p-8">
              <span className="absolute top-0 left-0 bg-white/10 px-3 py-1 text-[7px] font-black uppercase tracking-widest text-white/60 z-20 group-hover:text-[#D4AF37] transition-colors">
                {item.label}
              </span>
              <motion.img 
                whileHover={{ scale: 1.05, y: -10 }}
                src={item.img} 
                className="w-full h-3/4 object-contain transition-all duration-700 opacity-100"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="relative z-10 w-full py-6 overflow-hidden whitespace-nowrap border-t border-white/10" style={{ backgroundColor: cyprus }}>
        <motion.div 
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="flex gap-20 font-[900] text-[11px] md:text-[13px] uppercase tracking-[0.5em]"
          style={{ color: gold }}
        >
          {[...Array(6)].map((_, i) => (
            <span key={i} className="flex items-center gap-6">
              Velocity Core <Zap size={14} fill={gold} /> Peak Performance <Zap size={14} fill={gold} /> 
            </span>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default SportsCollection;