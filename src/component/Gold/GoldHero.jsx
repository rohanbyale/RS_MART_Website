import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingBag } from 'lucide-react';

const CompactJewelryHero = () => {
  return (
    <section className="relative w-full h-[500px] md:h-[450px] bg-[#fdfbf7] flex items-center overflow-hidden">
      {/* Visual Background: Soft texture or subtle gradient */}
      <div className="absolute inset-0 opacity-40 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]" />

      <div className="container mx-auto px-4 md:px-12 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          
          {/* 1. Left Side: Minimal Text */}
          <div className="w-full md:w-1/2 text-center md:text-left order-2 md:order-1">
            <motion.span 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-[10px] md:text-[12px] font-bold tracking-[0.4em] text-[#A67C00] uppercase block mb-3"
            >
              New Arrivals 2026
            </motion.span>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-6xl font-serif text-slate-900 leading-tight mb-6"
            >
              Pure <span className="italic font-light">Elegance</span>
            </motion.h1>

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start"
            >
              <button className="px-8 py-3 bg-slate-900 text-white rounded-full text-[11px] font-bold uppercase tracking-widest hover:bg-[#A67C00] transition-colors duration-300 flex items-center gap-2 group">
                Shop Now
                <ShoppingBag size={14} className="group-hover:rotate-12 transition-transform" />
              </button>
              <span className="text-[11px] text-slate-400 font-medium tracking-tighter">
                *Limited Edition Pieces
              </span>
            </motion.div>
          </div>

          {/* 2. Right Side: Centered Product Image */}
          <div className="w-full md:w-1/2 flex justify-center order-1 md:order-2">
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              {/* Decorative Circle behind image */}
              <div className="absolute inset-0 bg-[#D4AF37]/5 rounded-full scale-150 blur-2xl" />
              
              <img 
                src="https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?q=80&w=800" 
                alt="Gold Ring" 
                className="h-[220px] md:h-[320px] w-auto object-contain drop-shadow-2xl"
              />

              {/* Minimal Price Badge */}
              <motion.div 
                whileHover={{ scale: 1.1 }}
                className="absolute -top-2 -right-2 md:top-0 md:right-0 bg-white shadow-xl rounded-full w-16 h-16 md:w-20 md:h-20 flex flex-col items-center justify-center border border-slate-50"
              >
                <span className="text-[8px] text-slate-400 font-bold uppercase">From</span>
                <span className="text-sm md:text-base font-serif font-bold text-slate-900">$890</span>
              </motion.div>
            </motion.div>
          </div>

        </div>
      </div>

      {/* 3. Bottom Decorative Line */}
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
    </section>
  );
};

export default CompactJewelryHero;