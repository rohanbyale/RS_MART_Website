import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Camera, Sparkles, MoveRight } from 'lucide-react';

const GalleryHero = () => {
  const { scrollY } = useScroll();
  
  // Parallax: Slightly stronger movement on desktop for depth
  const y1 = useTransform(scrollY, [0, 500], [0, -80]);
  const y2 = useTransform(scrollY, [0, 500], [0, 80]);

  const previewImages = [
    { 
      url: "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?q=80&w=500", 
      pos: "top-[5%] left-[-5%] md:top-12 md:left-[8%]", 
      rotate: -8 
    },
    { 
      url: "https://images.unsplash.com/photo-1513201099705-a9746e1e201f?q=80&w=500", 
      pos: "bottom-[15%] left-[2%] md:bottom-12 md:left-[12%]", 
      rotate: 12 
    },
    { 
      url: "https://i.pinimg.com/736x/2d/f2/4c/2df24c4829c9253464cf8d9a1cab8fee.jpg", 
      pos: "top-[10%] right-[-5%] md:top-24 md:right-[10%]", 
      rotate: 5 
    },
    { 
      url: "https://images.unsplash.com/photo-1523293182086-7651a899d37f?q=80&w=500", 
      pos: "bottom-[10%] right-[2%] md:bottom-20 md:right-[15%]", 
      rotate: -12 
    }
  ];

  return (
    <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-white px-4">
      
      {/* 1. DYNAMIC FLOATING GRID */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        {previewImages.map((img, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ 
              opacity: 1, 
              scale: 1,
              y: [0, i % 2 === 0 ? -15 : 15, 0],
            }}
            style={{ y: i % 2 === 0 ? y1 : y2 }}
            transition={{ 
              opacity: { duration: 1, delay: i * 0.2 },
              y: { duration: 6, repeat: Infinity, ease: "easeInOut" }
            }}
            // Adjusted widths: w-32 for mobile, w-56 for desktop
            className={`absolute w-32 h-44 md:w-48 md:h-64 lg:w-56 lg:h-72 rounded-2xl md:rounded-[2rem] p-1.5 bg-white shadow-2xl border border-stone-200/50 ${img.pos}`}
          >
            <motion.div 
               className="w-full h-full rounded-xl md:rounded-[1.6rem] overflow-hidden relative group pointer-events-auto"
               initial={{ rotate: img.rotate }}
               whileHover={{ rotate: 0, scale: 1.05 }}
            >
              <img 
                src={img.url} 
                alt="Gallery Preview" 
                // Increased saturation and removed sepia for better visibility
                className="w-full h-full object-cover filter saturate-[0.8] brightness-[0.9] group-hover:saturate-100 group-hover:brightness-100 transition-all duration-500" 
              />
              {/* Subtle tint that clears on hover */}
              <div className="absolute inset-0 bg-[#004643]/10 group-hover:bg-transparent transition-colors duration-500" />
            </motion.div>
          </motion.div>
        ))}
      </div>

      {/* 2. CENTER CONTENT */}
      <div className="relative z-20 text-center w-full max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* CAMERA ICON - Responsive size */}
          <motion.div className="mb-6 flex justify-center">
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="relative p-4 md:p-5 bg-[#004643] rounded-2xl md:rounded-3xl shadow-2xl text-[#D4AF37]"
            >
              <Camera className="w-6 h-6 md:w-9 md:h-9" />
              <Sparkles className="absolute top-1 right-1 w-3 h-3 md:w-4 md:h-4 animate-pulse" />
            </motion.div>
          </motion.div>

          {/* Label */}
          <div className="flex items-center justify-center gap-3 mb-4 md:mb-6">
            <span className="h-[1px] w-6 md:w-10 bg-[#D4AF37]" />
            <span className="text-[#D4AF37] font-bold uppercase tracking-[0.3em] md:tracking-[0.6em] text-[10px] md:text-xs">
              Handcrafted Moments
            </span>
            <span className="h-[1px] w-6 md:w-10 bg-[#D4AF37]" />
          </div>

          {/* Headline - Fluid typography */}
          <h1 className="text-5xl sm:text-7xl md:text-9xl font-serif leading-[0.9] text-[#0D0D0D] mb-6 md:mb-8 tracking-tighter">
            The <span className="italic text-[#004643]">Visual</span> <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] via-[#f3d981] to-[#D4AF37]">
              Archives
            </span>
          </h1>

          <p className="text-stone-500 text-sm md:text-xl font-light max-w-xs md:max-w-xl mx-auto leading-relaxed mb-8 md:mb-12 px-2">
            Explore a curated collection of premium gifting artistry. <span className="hidden md:inline">Every frame captures the essence of luxury and bespoke craftsmanship.</span>
          </p>

          {/* Button */}
          <div className="flex justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group flex items-center gap-3 bg-[#0D0D0D] text-white px-8 md:px-12 py-4 md:py-5 rounded-full font-bold uppercase tracking-widest text-[10px] md:text-xs shadow-2xl hover:bg-[#004643] transition-all"
            >
              Enter Gallery <MoveRight size={16} className="group-hover:translate-x-2 transition-transform" />
            </motion.button>
          </div>
        </motion.div>
      </div>

      {/* 3. MOBILE-FRIENDLY SCROLL INDICATOR */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 flex flex-col items-center gap-2"
      >
        <div className="w-5 h-9 border-2 border-stone-200 rounded-full flex justify-center p-1">
          <div className="w-1 h-2 bg-[#D4AF37] rounded-full" />
        </div>
      </motion.div>

    </section>
  );
};

export default GalleryHero;