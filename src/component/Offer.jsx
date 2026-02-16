import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const TeddyLandingPage = () => {
  // --- REAL-TIME COUNTDOWN LOGIC ---
  const [timeLeft, setTimeLeft] = useState({
    days: 2, hours: 16, minutes: 42, seconds: 10
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        if (prev.hours > 0) return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        if (prev.days > 0) return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // --- ANIMATION VARIANTS ---
  const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.15 } }
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <div className="min-h-screen bg-[#faf9f6] p-4 md:p-10 font-serif text-[#1a3a32] flex items-center justify-center">
      <motion.div 
        variants={container}
        initial="hidden"
        animate="show"
        className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-12 gap-6"
      >
        
        {/* LEFT COLUMN - Two Cards */}
        <div className="md:col-span-5 flex flex-col gap-6">
          
          {/* Top Card: Sportswear */}
          <motion.div 
            variants={item}
            className="relative bg-[#0a3229] text-white p-8 rounded-sm overflow-hidden h-[340px] flex flex-col justify-center border border-amber-200/20 group"
          >
            <div className="absolute top-0 left-0 w-full py-2 bg-[#08261f] text-center text-[10px] tracking-[0.2em] uppercase flex justify-center items-center gap-2 z-10">
              <motion.span animate={{ opacity: [1, 0.4, 1] }} transition={{ repeat: Infinity, duration: 1.5 }}>⚡</motion.span>
              Sportswear Exclusive
              <motion.span animate={{ opacity: [1, 0.4, 1] }} transition={{ repeat: Infinity, duration: 1.5 }}>⚡</motion.span>
            </div>
            
            <div className="mt-4 relative z-10">
              <span className="text-amber-400 text-sm italic block mb-2 font-sans">New Release</span>
              <h2 className="text-4xl font-light leading-tight mb-2">Active<br/>Sports Wear</h2>
              <p className="text-gray-300 mb-6 font-sans text-xs tracking-widest uppercase">Flat 50% Off Collection</p>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-[#0a3229] px-8 py-2.5 rounded-full text-[10px] font-bold uppercase tracking-widest transition-colors"
              >
                Shop Now →
              </motion.button>
            </div>

            <motion.div 
              whileHover={{ scale: 1.1, rotate: 2 }}
              className="absolute right-[-40px] top-1/2 -translate-y-1/2 w-64 h-64 rounded-full border-[8px] border-amber-100/10 overflow-hidden shadow-2xl transition-all duration-500"
            >
               <img src="https://png.pngtree.com/png-vector/20240309/ourmid/pngtree-soccer-jersey-mockup-abstract-geometric-pattern-sport-t-shirt-design-png-image_11905120.png" alt="Sportswear Teddy" className="w-full h-full object-cover" />
            </motion.div>
          </motion.div>

          {/* Bottom Card: Jewelry */}
          <motion.div 
            variants={item}
            className="relative bg-[#ebe7d9] p-8 rounded-sm overflow-hidden h-[340px] flex flex-col justify-center border border-black/5 group"
          >
            <div className="relative z-10">
              <div className="flex items-center gap-2 text-[10px] font-sans font-bold tracking-widest text-[#1a3a32] mb-4 uppercase opacity-60">
                <span className="animate-pulse">🕒</span> Luxury Jewelry
              </div>
              <h2 className="text-4xl font-light mb-3 italic text-[#2c2a26]">Necklace</h2>
              <p className="text-[13px] max-w-[200px] mb-8 leading-relaxed opacity-70 font-sans">Bespoke 18k gold  Necklace and diamond-cut charms.</p>
              <motion.button 
                whileHover={{ x: 5 }}
                className="bg-[#0a3229] text-white px-8 py-2.5 rounded-full text-[10px] font-bold uppercase tracking-widest"
              >
                Shop Now →
              </motion.button>
            </div>

            <motion.div 
              whileHover={{ scale: 1.1, rotate: -2 }}
              className="absolute right-[-30px] top-1/2 -translate-y-1/2 w-56 h-56 rounded-full border-[8px] border-white/50 overflow-hidden shadow-xl transition-all duration-500"
            >
               <img src="https://i.pinimg.com/736x/6f/63/cc/6f63cc249d33d86bcd4288175bb7406e.jpg" alt="Jewelry collection" className="w-full h-full object-cover" />
            </motion.div>
          </motion.div>
        </div>

        {/* RIGHT COLUMN - Matches Height Exactly */}
        <motion.div 
          variants={item}
          className="md:col-span-7 bg-white border border-gray-100 p-8 md:p-12 flex flex-col items-center text-center relative shadow-sm h-full overflow-hidden"
        >
          <div className="flex-1 flex flex-col items-center justify-center">
            <motion.h3 
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ repeat: Infinity, duration: 3 }}
              className="text-xl italic font-light text-amber-800 mb-4 tracking-[0.2em] uppercase"
            >
              Hot deal
            </motion.h3>
            <h1 className="text-5xl md:text-7xl font-light mb-6 tracking-tight">Get Olars's Teddy</h1>
            <p className="text-[11px] text-gray-400 mb-10 tracking-[0.2em] uppercase leading-loose max-w-md">
              Lorsque vous dépensez 100€ | utilisez le code : <br/>
              <span className="font-bold text-black border-b-2 border-black/10 px-2 text-xs">OLARSTEDDY</span>
            </p>

            {/* Countdown Timer */}
            <div className="flex gap-6 md:gap-10 mb-12">
              {[ 
                {v: timeLeft.days, l: 'Days'}, 
                {v: timeLeft.hours, l: 'Hours'}, 
                {v: timeLeft.minutes, l: 'Min'}, 
                {v: timeLeft.seconds, l: 'Sec'} 
              ].map((item, i) => (
                <div key={i} className="flex flex-col min-w-[50px]">
                  <AnimatePresence mode="wait">
                    <motion.span 
                      key={item.v}
                      initial={{ y: 8, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: -8, opacity: 0 }}
                      className="text-4xl md:text-5xl font-light text-amber-900"
                    >
                      {item.v.toString().padStart(2, '0')}
                    </motion.span>
                  </AnimatePresence>
                  <span className="text-[9px] uppercase tracking-[0.3em] text-gray-400 mt-2 font-sans font-bold">{item.l}</span>
                </div>
              ))}
            </div>

            <motion.button 
              whileHover={{ scale: 1.05, letterSpacing: "0.2em" }}
              className="text-[11px] uppercase tracking-[0.1em] font-bold border-b-2 border-[#0a3229] pb-2 mb-12 transition-all"
            >
              Explore Collection →
            </motion.button>
          </div>

          {/* Large Image - Bottom of Right Column */}
          <div className="relative w-full h-[380px] overflow-hidden group rounded-sm shadow-inner">
            <motion.img 
              initial={{ scale: 1.2 }}
              animate={{ scale: 1 }}
              transition={{ duration: 2 }}
              src="https://images.unsplash.com/photo-1556012018-50c5c0da73bf?auto=format&fit=crop&q=80&w=1200" 
              alt="Main Product Showcase" 
              className="w-full h-full object-cover grayscale-[15%] group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-105"
            />
            
            {/* Artistic Frame Overlay */}
            <motion.div 
              initial={{ opacity: 0, rotate: -5 }}
              animate={{ opacity: 1, rotate: 0 }}
              transition={{ delay: 1.2 }}
              className="absolute right-6 bottom-10 w-32 h-44 bg-white/95 backdrop-blur-md border border-gray-100 shadow-2xl p-6 hidden lg:block"
            >
               <div className="flex flex-col items-center justify-between h-full border border-black/5 py-4">
                  <motion.div 
                    animate={{ scale: [1, 1.2, 1] }} 
                    transition={{ repeat: Infinity, duration: 4 }}
                    className="w-3 h-3 bg-amber-900 rounded-full"
                  />
                  <div className="h-[1px] w-8 bg-black/10" />
                  <p className="text-[8px] tracking-[0.3em] uppercase font-bold text-center leading-relaxed">Elite<br/>Handmade</p>
                  <div className="w-4 h-4 bg-[#0a3229] rotate-45" />
               </div>
            </motion.div>
          </div>
        </motion.div>

      </motion.div>
    </div>
  );
};

export default TeddyLandingPage;