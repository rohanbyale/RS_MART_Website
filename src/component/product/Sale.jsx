import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { ArrowRight, Sparkles, ShoppingBag, Zap, Percent } from 'lucide-react';

const RSSaleCampaign = () => {
  const containerRef = useRef(null);
  const [timeLeft, setTimeLeft] = useState({ days: 12, hours: 0, mins: 0, secs: 0 });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  const titleY = useTransform(smoothProgress, [0, 1], [0, -100]);
  const titleScale = useTransform(smoothProgress, [0, 0.5], [1, 0.85]);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => ({ ...prev, secs: prev.secs <= 0 ? 59 : prev.secs - 1 }));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div ref={containerRef} className="relative bg-[#004643]">
      
      {/* SECTION 1: HERO - Adjusted height for better mobile presence */}
      <div className="sticky top-0 h-[45vh] md:h-[65vh] w-full flex flex-col items-center justify-center overflow-hidden">
        
        {/* Dynamic Background Marquee - Lowered opacity on mobile to help text pop */}
        <div className="absolute inset-0 opacity-[0.03] md:opacity-10 flex flex-col justify-around pointer-events-none select-none z-0">
          {[1, 2, 3].map((i) => (
            <motion.div 
              key={i}
              initial={{ x: i % 2 === 0 ? "-20%" : "0%" }}
              animate={{ x: i % 2 === 0 ? "0%" : "-20%" }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="text-[5rem] md:text-[12rem] font-black text-white whitespace-nowrap leading-none"
            >
              SALE SALE SALE SALE SALE SALE
            </motion.div>
          ))}
        </div>

        {/* Hero Content - Higher z-index to stay above marquee */}
        <motion.div style={{ y: titleY, scale: titleScale }} className="relative text-center z-20 px-4 md:px-6">
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="inline-flex items-center gap-2 px-3 py-1 md:px-4 md:py-1.5 bg-[#D4AF37] rounded-full text-[#004643] mb-4 md:mb-8 shadow-xl"
          >
            <Sparkles size={12} className="md:size-[14px] animate-pulse" />
            <span className="text-[8px] md:text-[10px] font-black uppercase tracking-[0.3em]">Exclusive Seasonal Offer</span>
          </motion.div>

          {/* Optimized Typography for Mobile View */}
          <h1 className="text-white text-5xl md:text-9xl font-serif leading-[0.9] tracking-tighter mb-8 md:mb-10 drop-shadow-[0_10px_10px_rgba(0,0,0,0.5)]">
            SUMMER <br />
            <span className="italic font-light text-[#D4AF37]">EXTRAVAGANZA</span>
          </h1>

          {/* Premium Countdown */}
          <div className="flex items-center justify-center gap-2 md:gap-12">
            {[
              { label: 'Days', val: timeLeft.days },
              { label: 'Hrs', val: timeLeft.hours },
              { label: 'Min', val: timeLeft.mins },
              { label: 'Sec', val: timeLeft.secs }
            ].map((unit, i) => (
              <div key={i} className="group relative">
                <div className="bg-white/10 backdrop-blur-lg border border-white/20 w-14 h-14 md:w-20 md:h-20 rounded-lg md:rounded-xl flex flex-col items-center justify-center shadow-2xl transition-transform group-hover:-translate-y-1">
                  <span className="text-xl md:text-3xl font-serif text-[#D4AF37] leading-none">
                    {unit.val.toString().padStart(2, '0')}
                  </span>
                  <span className="text-[7px] md:text-[8px] uppercase tracking-widest font-bold text-white/70 mt-1">{unit.label}</span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* SECTION 2: PRODUCT REVEAL */}
      <div className="relative z-30 bg-white rounded-t-[40px] md:rounded-t-[60px] py-10 md:py-16 px-4 md:px-6 shadow-[0_-30px_60px_rgba(0,0,0,0.5)]">
        <div className="max-w-5xl mx-auto">
          
          <div className="flex justify-between items-center mb-8 md:mb-12">
            <div className="space-y-1">
              <p className="text-[#D4AF37] text-[10px] font-bold uppercase tracking-widest">Shop the collection</p>
              <h2 className="text-2xl md:text-4xl font-serif text-[#004643]">Hurry! <span className="text-[#D4AF37] italic">Sold Fast</span></h2>
            </div>
            <div className="bg-[#004643] text-white px-3 py-1.5 md:px-4 md:py-2 rounded-lg flex items-center gap-2 shadow-md">
              <Percent size={14} className="text-[#D4AF37]" />
              <span className="text-[10px] md:text-xs font-bold uppercase tracking-widest">50% Off</span>
            </div>
          </div>

          {/* Responsive Grid */}
          <div className="grid grid-cols-2 md:grid-cols-2 gap-4 md:gap-8">
            {[
              {
                name: "Obsidian Heritage Vase",
                price: "₹4,500",
                img: "https://images.unsplash.com/photo-1581783898377-1c85bf937427?q=80&w=800",
                tag: "Bestseller"
              },
              {
                name: "Golden Hour Silk Scarf",
                price: "₹2,200",
                img: "https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?q=80&w=800",
                tag: "Limited"
              }
            ].map((product, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="group flex flex-col md:flex-row md:gap-4 p-2 md:p-3 border border-gray-100 rounded-3xl hover:border-[#D4AF37]/30 transition-all bg-[#FAFAFA] shadow-sm"
              >
                <div className="relative aspect-square md:w-44 md:h-44 overflow-hidden rounded-2xl shrink-0">
                  <img src={product.img} className="w-full h-full object-cover transition-transform group-hover:scale-110" alt={product.name} />
                  <div className="absolute top-2 left-2 bg-[#004643]/90 backdrop-blur-sm text-white text-[7px] font-bold uppercase px-2 py-1 rounded-full">
                    {product.tag}
                  </div>
                </div>

                <div className="flex flex-col justify-between py-2 md:py-3 w-full px-1">
                  <div>
                    <h3 className="text-sm md:text-xl font-serif text-[#1A1A1A] line-clamp-1 leading-tight">{product.name}</h3>
                    <p className="text-[#D4AF37] text-xs md:text-lg font-bold mt-1">{product.price}</p>
                  </div>
                  <div className="flex items-center justify-between mt-3 md:mt-0">
                    <span className="text-[8px] md:text-[10px] font-bold text-[#004643] flex items-center gap-1">
                       <Zap size={10} fill="currentColor" className="text-[#D4AF37]" /> 
                       <span className="hidden sm:inline">Final Stock</span>
                       <span className="sm:hidden">STOCK</span>
                    </span>
                    <button className="bg-[#004643] p-2 md:p-3 rounded-full text-white hover:bg-[#D4AF37] transition-all shadow-lg active:scale-90">
                      <ShoppingBag size={14} />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Responsive CTA */}
          <div className="mt-12 md:mt-16 flex flex-col items-center gap-4">
            <motion.button 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full md:w-auto px-10 py-4 bg-[#004643] text-white text-[10px] md:text-xs font-bold uppercase tracking-[0.4em] rounded-full flex items-center justify-center gap-4 group shadow-2xl"
            >
              Shop All Sale <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
            </motion.button>
            <p className="text-[9px] text-gray-400 font-bold uppercase tracking-widest">Heritage archive • Limited release</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RSSaleCampaign;