import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';

const WatchAboutSection = () => {
  const containerRef = useRef(null);
  
  // High-precision scroll tracking
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // TRANSFORMATIONS
  const videoScale = useTransform(scrollYProgress, [0, 0.5], [1, 0.6]);
  const videoOpacity = useTransform(scrollYProgress, [0.4, 0.6], [1, 0]);
  const videoY = useTransform(scrollYProgress, [0, 0.5], ["0%", "-10%"]);
  const contentOpacity = useTransform(scrollYProgress, [0.4, 0.7], [0, 1]);
  const contentY = useTransform(scrollYProgress, [0.4, 0.7], [100, 0]);

  const colors = {
    cyprus: "#004643",
    gold: "#D4AF37",
    cloudWhite: "#FAFAFA",
  };

  return (
    <section 
      ref={containerRef}
      className="relative h-[200vh]" 
      style={{ backgroundColor: colors.cloudWhite }}
    >
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center">
        
        {/* VIDEO LAYER */}
        <motion.div 
          style={{ 
            scale: videoScale, 
            opacity: videoOpacity,
            y: videoY,
          }}
          className="absolute inset-0 w-full h-full z-20 flex items-center justify-center overflow-hidden"
        >
          <video
            autoPlay
            loop
            muted
            playsInline
            key="watch-video"
            className="w-full h-full object-cover shadow-2xl"
          >
            <source src="/199189-909835641_medium.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          
          <div className="absolute inset-0 bg-black/10" />
        </motion.div>

        {/* CONTENT LAYER */}
        <motion.div 
          style={{ opacity: contentOpacity, y: contentY }}
          className="container mx-auto px-6 lg:px-20 relative z-10"
        >
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            
            <div className="w-full lg:w-7/12 order-2 lg:order-1">
              <div className="mb-4 flex items-center gap-4 text-center lg:text-left justify-center lg:justify-start">
                <span className="text-[11px] font-bold uppercase tracking-[0.5em]" style={{ color: colors.gold }}>
                  The Heritage Collection
                </span>
                <div className="h-[1px] w-12 bg-stone-300" />
              </div>

              <h2 
                className="mb-8 font-serif text-5xl md:text-7xl lg:text-8xl leading-[0.95] tracking-tighter text-center lg:text-left"
                style={{ color: colors.cyprus }}
              >
                Mastering <br /> 
                <span className="italic font-light opacity-80 text-stone-500">The Moment.</span>
              </h2>

              <div className="space-y-6 text-base md:text-lg leading-relaxed font-light text-stone-600 max-w-xl mx-auto lg:mx-0 text-center lg:text-left">
                <p>
                  Our expertise in luxury horology is a legacy gathered over five decades. 
                  At <span className="font-semibold border-b-2" style={{ color: colors.cyprus, borderColor: colors.gold }}>RS Mart</span>, we deliver 
                  timepieces that serve as a bridge between ancestral heritage and modern engineering.
                </p>
              </div>

              {/* REFINED RS MART BUTTON UI */}
              <div className="mt-12 flex justify-center lg:justify-start">
                <a href="/collection" className="group flex items-center cursor-pointer no-underline active:scale-95 transition-transform duration-200">
                  
                  {/* Left Label */}
                  <div className="h-[52px] bg-[#222F30] flex items-center pl-7 pr-1 rounded-l-[14px] text-white font-mono font-bold text-[12px] tracking-widest transition-all duration-300 group-hover:bg-[#d9f99d] group-hover:text-[#222F30] whitespace-nowrap">
                    DISCOVER COLLECTION
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

                  {/* Icon Box */}
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
              </div>
            </div>

            <div className="relative w-full lg:w-5/12 order-1 lg:order-2">
              <div className="relative aspect-[4/5] overflow-hidden rounded-sm shadow-2xl">
                <img 
                  src="https://i.pinimg.com/736x/3d/9d/1b/3d9d1b88b7265aeb4af3c65d98719482.jpg" 
                  alt="Luxury Watch Detail"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Heritage Background Text */}
        <div className="absolute top-1/2 left-0 -translate-y-1/2 opacity-[0.02] pointer-events-none select-none z-0">
          <h2 className="text-[20vw] font-serif leading-none" style={{ color: colors.cyprus }}>HERITAGE</h2>
        </div>
      </div>
    </section>
  );
};

export default WatchAboutSection;