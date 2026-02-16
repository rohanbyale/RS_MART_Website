import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';

const ProductPage = () => {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  // BRAND COLORS
  const CYPRUS = "#004643";
  const GOLD = "#D4AF37";

  // UPDATED PRODUCT LIST
  const products = [
    { name: "Apex Performance", cat: "Sports Wear", img: "https://i.pinimg.com/736x/10/f1/9d/10f19d3ffce45f3662dc831567118b29.jpg" },
    { name: "Chronos Elite", cat: "Luxury Watch", img: "https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?q=80&w=800" },
    { name: "Golden Aura", cat: "Fine Jewelry", img: "https://i.pinimg.com/736x/10/21/7f/10217feff2dcf13dac4272875cc9777d.jpg" },
    { name: "Velocity Racer", cat: "Toy Car", img: "https://i.pinimg.com/1200x/71/77/41/717741de04bcb83d8267c9ece2e2cc32.jpg" },
    { name: "Cuddle Friend", cat: "Teddy Bear", img: "https://images.unsplash.com/photo-1559454403-b8fb88521f11?q=80&w=800" },
    { name: "Royal Surprise", cat: "Gift Product", img: "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?q=80&w=800" },
  ];

  const nextStep = () => {
    setDirection(1);
    setIndex((prev) => (prev + 1) % products.length);
  };

  const prevStep = () => {
    setDirection(-1);
    setIndex((prev) => (prev - 1 + products.length) % products.length);
  };

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 200 : -200,
      opacity: 0,
      scale: 0.8,
      rotate: direction > 0 ? 15 : -15,
    }),
    center: { x: 0, opacity: 1, scale: 1, rotate: 0 },
    exit: (direction) => ({
      x: direction < 0 ? 200 : -200,
      opacity: 0,
      scale: 0.8,
      rotate: direction < 0 ? 15 : -15,
    }),
  };

  return (
    <div className="min-h-screen bg-[#FDFDFD] flex items-center justify-center p-4 md:p-8 overflow-hidden font-sans select-none relative">
      
      {/* Background Orbital Ring */}
      <motion.div 
        animate={{ rotate: index * (360 / products.length) }}
        transition={{ type: "spring", stiffness: 40, damping: 20 }}
        className="absolute w-[280px] h-[280px] sm:w-[450px] sm:h-[450px] md:w-[600px] md:h-[600px] border-2 border-dashed rounded-full flex items-center justify-center pointer-events-none z-0"
        style={{ borderColor: `${CYPRUS}15` }}
      >
        <div className="absolute top-0 w-3 h-3 rounded-full -mt-1.5 shadow-xl" style={{ backgroundColor: GOLD }} />
      </motion.div>

      <div className="relative w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center z-10 py-12 lg:py-0">
        
        {/* IMAGE SECTION */}
        <div className="relative flex items-center justify-center order-1 lg:order-2 h-[300px] sm:h-[400px] md:h-[500px]">
          <div className="relative w-56 h-56 sm:w-80 sm:h-80 md:w-96 md:h-96">
            <AnimatePresence mode="popLayout" custom={direction}>
              <motion.div
                key={index}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ type: "spring", damping: 20, stiffness: 100 }}
                className="absolute inset-0 cursor-grab active:cursor-grabbing"
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                onDragEnd={(e, { offset }) => {
                  if (offset.x > 100) prevStep();
                  else if (offset.x < -100) nextStep();
                }}
              >
                <div 
                  className="w-full h-full rounded-[30px] md:rounded-[60px] overflow-hidden shadow-2xl relative border-4 border-white bg-stone-100"
                >
                  <img 
                    src={products[index].img} 
                    className="w-full h-full object-cover opacity-100 scale-105" 
                    alt={products[index].name}
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-black/10 via-transparent to-white/10" />
                </div>
              </motion.div>
            </AnimatePresence>
            
            <div className="absolute -bottom-4 -left-4 md:-bottom-10 md:-left-10 text-7xl md:text-[150px] font-black opacity-[0.05] pointer-events-none select-none" style={{ color: CYPRUS }}>
              0{index + 1}
            </div>
          </div>
        </div>

        {/* TEXT SECTION */}
        <div className="text-center lg:text-left order-2 lg:order-1 px-4">
          <motion.div
            key={`text-${index}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-3 md:space-y-6"
          >
            <div className="flex items-center justify-center lg:justify-start gap-2">
              <Sparkles size={14} className="animate-pulse" style={{ color: GOLD }} />
              <span className="text-[10px] md:text-xs font-bold tracking-[0.4em] uppercase" style={{ color: GOLD }}>
                {products[index].cat}
              </span>
            </div>
            
            <h1 className="text-4xl sm:text-6xl md:text-8xl font-black tracking-tighter leading-[0.9]" style={{ color: CYPRUS }}>
              {products[index].name.split(' ')[0]}<br/>
              <span 
                className="text-transparent" 
                style={{ WebkitTextStroke: `1px ${CYPRUS}` }}
              >
                {products[index].name.split(' ')[1]}
              </span>
            </h1>

            <p className="text-stone-500 text-xs md:text-base max-w-[280px] sm:max-w-sm mx-auto lg:mx-0 leading-relaxed opacity-80">
              Discover the pinnacle of craftsmanship. Our {products[index].name} is curated for those who value elegance and durability.
            </p>

            <div className="mt-6 md:mt-8 flex justify-center lg:justify-start scale-90 md:scale-100">
              <a href="/collection" className="group flex items-center cursor-pointer no-underline active:scale-95 transition-transform duration-200">
                <div 
                  className="h-[46px] md:h-[52px] flex items-center pl-5 md:pl-7 pr-1 rounded-l-[14px] text-white font-mono font-bold text-[10px] md:text-[12px] tracking-widest transition-all duration-300 group-hover:bg-[#d9f99d] group-hover:text-[#004643] whitespace-nowrap bg-[#004643]"
                >
                  DISCOVER COLLECTION
                  <span className="ml-3 opacity-0 -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0 text-lg">→</span>
                </div>

                <div className="h-[46px] md:h-[52px] w-[18px] -ml-[1px]">
                  <svg className="h-full w-full" viewBox="0 0 18 48" fill="none" preserveAspectRatio="none">
                    <path 
                      className="transition-colors duration-300 fill-[#004643] group-hover:fill-[#d9f99d]"
                      d="M0 0h5.63c7.808 0 13.536 7.337 11.642 14.91l-6.09 24.359A11.527 11.527 0 0 1 0 48V0Z" 
                    />
                  </svg>
                </div>

                <div className="relative h-[46px] md:h-[52px] w-[48px] md:w-[54px] -ml-[5px]">
                  <svg className="h-full w-full" viewBox="0 0 51 48" fill="none">
                    <path 
                      className="transition-colors duration-300 fill-[#d9f99d] group-hover:fill-[#004643]"
                      d="M6.728 9.09A12 12 0 0 1 18.369 0H39c6.627 0 12 5.373 12 12v24c0 6.627-5.373 12-12 12H12.37C4.561 48-1.167 40.663.727 33.09l6-24Z" 
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center text-[#004643] group-hover:text-white transition-colors duration-300">
                    <svg className="w-4 h-4 md:w-5 md:h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </a>
            </div>
          </motion.div>

          <div className="flex gap-4 md:gap-6 mt-8 md:mt-12 justify-center lg:justify-start">
            <button onClick={prevStep} className="group w-12 h-12 md:w-14 md:h-14 rounded-full bg-white shadow-xl flex items-center justify-center transition-all active:scale-90 border border-stone-100" style={{ color: CYPRUS }}>
              <ChevronLeft size={24} className="md:w-[28px] md:h-[28px] group-hover:-translate-x-1 transition-transform" />
            </button>
            <button onClick={nextStep} className="group w-12 h-12 md:w-14 md:h-14 rounded-full shadow-xl flex items-center justify-center transition-all active:scale-90" style={{ backgroundColor: CYPRUS, color: 'white' }}>
              <ChevronRight size={24} className="md:w-[28px] md:h-[28px] group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-4 md:bottom-10 flex gap-2 md:gap-3">
        {products.map((_, i) => (
          <button 
            key={i} 
            onClick={() => {
              setDirection(i > index ? 1 : -1);
              setIndex(i);
            }}
            className={`h-1 md:h-1.5 transition-all duration-500 rounded-full ${index === i ? 'w-8 md:w-16' : 'w-2 md:w-4'}`} 
            style={{ backgroundColor: index === i ? GOLD : `${CYPRUS}20` }}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductPage;