import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';

const ToyBoutique = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.3 });
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Sophisticated Parallax
  const imgY = useTransform(scrollYProgress, [0, 1], [-60, 60]);
  const textContainerY = useTransform(scrollYProgress, [0, 1], [30, -30]);

  const colors = {
    cyprus: "#004643",
    gold: "#D4AF37",
    cloudWhite: "#FAFAFA",
  };

  const fadeInUp = {
    hidden: { y: 30, opacity: 0 },
    visible: (i) => ({
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, delay: 0.1 * i, ease: [0.25, 1, 0.5, 1] }
    })
  };

  return (
    <section 
      ref={containerRef}
      className="relative min-h-[90vh] flex items-center justify-center overflow-hidden py-20 px-6"
      style={{ backgroundColor: colors.cloudWhite }}
    >
      {/* Background Accent */}
      <div 
        className="absolute top-0 right-0 w-1/3 h-full opacity-[0.03] pointer-events-none hidden lg:block" 
        style={{ backgroundColor: colors.cyprus }} 
      />

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-0 items-center">
          
          {/* Image Side (Left) */}
          <div className="lg:col-span-7 relative order-2 lg:order-1">
            <motion.div 
              initial={{ clipPath: 'inset(0% 100% 0% 0%)' }}
              animate={isInView ? { clipPath: 'inset(0% 0% 0% 0%)' } : {}}
              transition={{ duration: 1.4, ease: [0.77, 0, 0.175, 1] }}
              className="relative aspect-[16/10] lg:aspect-[4/3] overflow-hidden rounded-sm shadow-2xl"
            >
              <motion.img 
                style={{ y: imgY, scale: 1.1 }}
                src="https://images.unsplash.com/photo-1558877385-81a1c7e67d72?q=80&w=1200" 
                alt="Boutique Toy Collection"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/5" />
            </motion.div>

            {/* Floating Decorative Element */}
            <motion.div 
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-6 -left-6 w-24 h-24 rounded-full border border-stone-200 hidden md:block"
              style={{ borderColor: colors.gold, opacity: 0.4 }}
            />
          </div>

          {/* Text Content Side (Right) - Floating Card Style */}
          <motion.div 
            style={{ y: textContainerY }}
            className="lg:col-span-5 lg:-ml-16 z-20 order-1 lg:order-2"
          >
            <div className="bg-white p-8 md:p-14 shadow-[40px_40px_80px_rgba(0,0,0,0.06)] border-t-4" style={{ borderColor: colors.gold }}>
              
              <motion.div 
                custom={0}
                variants={fadeInUp}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                className="flex items-center gap-3 mb-6"
              >
                <span className="text-[10px] uppercase tracking-[0.4em] font-bold" style={{ color: colors.gold }}>
                  The Joy of Play
                </span>
                <div className="h-[1px] flex-grow bg-stone-100" />
              </motion.div>

              <motion.h2 
                custom={1}
                variants={fadeInUp}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                className="font-serif text-4xl md:text-6xl mb-8 leading-[1.1]" 
                style={{ color: colors.cyprus }}
              >
                New Toys, <br />
                <span className="italic font-light text-stone-400">Pure Happiness.</span>
              </motion.h2>

              <motion.div 
                custom={2}
                variants={fadeInUp}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                className="space-y-6 text-stone-500 font-light leading-relaxed text-base md:text-lg"
              >
                <p>
                  At RS Mart, we believe toys are more than just objects; they are the architects of childhood memories. 
                  Our curated collection brings world-class quality to Pusad.
                </p>
                <p className="hidden md:block">
                  From educational puzzles to premium collectibles, we offer an enchanting experience 
                  that keeps the youngsters—and the young at heart—entertained.
                </p>
              </motion.div>

              {/* REFINED RS MART BUTTON UI INTEGRATION */}
              <motion.div
                custom={3}
                variants={fadeInUp}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                className="mt-10"
              >
                <a href="/toys" className="group flex items-center cursor-pointer no-underline active:scale-95 transition-transform duration-200">
                  
                  {/* Left Text Box - Gap-2 logic included */}
                  <div className="h-[52px] bg-[#222F30] flex items-center pl-7 pr-2 rounded-l-[14px] text-white font-mono font-bold text-[12px] tracking-widest transition-all duration-300 group-hover:bg-[#d9f99d] group-hover:text-[#222F30] whitespace-nowrap">
                    EXPLORE COLLECTION
                    <span className="ml-2 opacity-0 -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0 text-lg">→</span>
                  </div>

                  {/* SVG Connector */}
                  <div className="h-[52px] w-[18px] -ml-[1px]">
                    <svg className="h-full w-full" viewBox="0 0 18 48" fill="none" preserveAspectRatio="none">
                      <path 
                        className="transition-colors duration-300 fill-[#222F30] group-hover:fill-[#d9f99d]"
                        d="M0 0h5.63c7.808 0 13.536 7.337 11.642 14.91l-6.09 24.359A11.527 11.527 0 0 1 0 48V0Z" 
                      />
                    </svg>
                  </div>

                  {/* Right Icon Box */}
                  <div className="relative h-[52px] w-[54px] -ml-[5px]">
                    <svg className="h-full w-full" viewBox="0 0 51 48" fill="none">
                      <path 
                        className="transition-colors duration-300 fill-[#d9f99d] group-hover:fill-[#222F30]"
                        d="M6.728 9.09A12 12 0 0 1 18.369 0H39c6.627 0 12 5.373 12 12v24c0 6.627-5.373 12-12 12H12.37C4.561 48-1.167 40.663.727 33.09l6-24Z" 
                      />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center text-[#222F30] group-hover:text-white transition-colors duration-300">
                      <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </div>
                </a>
              </motion.div>

            </div>
          </motion.div>

        </div>
      </div>

      {/* Vertical Side Text */}
      <div className="absolute right-8 top-1/2 -translate-y-1/2 hidden xl:block">
        <p className="text-[9px] uppercase tracking-[1.2em] text-stone-200 rotate-90 origin-center">
          Crafting Childhood Dreams
        </p>
      </div>
    </section>
  );
};

export default ToyBoutique;