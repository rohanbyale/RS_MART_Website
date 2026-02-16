import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const RSLoader = () => {
  const [progress, setProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  const colors = {
    cyprus: "#004643",
    gold: "#D4AF37",
    cloudWhite: "#FAFAFA",
  };

  useEffect(() => {
    // Simulate loading progress
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => setIsLoading(false), 500); // Small buffer before reveal
          return 100;
        }
        return prev + 1;
      });
    }, 30); // Speed of loading

    return () => clearInterval(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ 
            y: "-100%", 
            transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } 
          }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center overflow-hidden"
          style={{ backgroundColor: colors.cyprus }}
        >
          {/* Decorative Corner Borders */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="absolute top-10 left-10 w-20 h-20 border-t border-l opacity-20"
            style={{ borderColor: colors.gold }}
          />
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="absolute bottom-10 right-10 w-20 h-20 border-b border-r opacity-20"
            style={{ borderColor: colors.gold }}
          />

          {/* Center Content */}
          <div className="relative flex flex-col items-center">
            {/* Branding */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="mb-8 text-center"
            >
              <h1 className="font-serif text-4xl md:text-5xl text-white tracking-tighter mb-2">
                RS MART
              </h1>
              <p className="text-[10px] uppercase tracking-[0.8em] text-stone-400 font-bold">
                Luxury Horology
              </p>
            </motion.div>

            {/* Progress Percentage */}
            <div className="overflow-hidden h-20 flex items-center justify-center">
              <motion.span 
                className="text-8xl md:text-9xl font-serif italic text-white/5 font-light absolute"
                style={{ WebkitTextStroke: `1px ${colors.gold}20` }}
              >
                {progress}%
              </motion.span>
              <motion.span className="text-4xl md:text-5xl font-serif text-white relative z-10">
                {progress}<span className="text-sm align-top text-gold" style={{color: colors.gold}}>%</span>
              </motion.span>
            </div>

            {/* Slim Progress Bar */}
            <div className="w-48 h-[2px] bg-white/10 mt-8 relative overflow-hidden">
              <motion.div 
                className="absolute left-0 top-0 h-full"
                style={{ backgroundColor: colors.gold }}
                initial={{ width: "0%" }}
                animate={{ width: `${progress}%` }}
              />
            </div>
          </div>

          {/* Background Watermark */}
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute -bottom-20 -left-20 w-96 h-96 border border-white/5 rounded-full pointer-events-none"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default RSLoader;