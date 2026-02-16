import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

const productData = {
  name: "ROYAL_AUREUM",
  tagline: "The Zenith of Luxury Design",
  price: "₹1,24,999",
  specs: [
    { label: "Material", value: "18K Gold", detail: "Certified Hallmark" },
    { label: "Purity", value: "99.9%", detail: "Refined Excellence" },
    { label: "Batch", value: "Limited", detail: "Serial No. 001/100" },
    { label: "Warranty", value: "LifeTime", detail: "RS Global Coverage" }
  ],
  phases: [
    { id: "01", title: "Curation", note: "Hand-Selected", desc: "Only the finest materials pass our internal audit." },
    { id: "02", title: "Crafting", note: "Master Artisan", desc: "120 hours of hand-lapping for a mirror finish." },
    { id: "03", title: "Legacy", note: "Heirloom Grade", desc: "Designed to be passed down through generations." }
  ]
};

const KineticProductPage = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Smooth Animations (Identical to your request)
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 360]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1.2, 0.8]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    // Updated Background to Cyprus (#004643)
    <div ref={containerRef} className="relative bg-[#004643] text-white font-sans selection:bg-[#D4AF37]">
      
      {/* 1. THE PINNED CENTERPIECE */}
      <div className=" sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden pointer-events-none z-20">
        <motion.div 
          style={{ rotate, scale }}
          className="relative w-72 h-[450px] bg-[#E4281F] md:w-96 md:h-[600px] border border-white/10 bg-gradient-to-b from-white/5 to-transparent backdrop-blur-2xl flex items-center justify-center group"
        >
          <div className="text-center px-4">
            {/* Enhanced RS MART Branding */}
            <div className="mb-6  space-y-0">
                <span className="block text-[#] font-mono text-xs tracking-[0.8em] uppercase opacity-70">Authentic</span>
                <h1 className="text-white font-serif font-black text-6xl md:text-7xl tracking-tighter leading-none">RS MART</h1>
                <div className="h-[2px] w-24 bg-[#D4AF37] mx-auto mt-2" />
            </div>
            
            <h2 className="text-white font-serif italic text-2xl md:text-3xl mb-2 tracking-widest uppercase opacity-90">{productData.name}</h2>
            <p className="text-[#D4AF37] font-mono text-[10px] tracking-[0.4em] uppercase font-bold">Collector_Edition</p>
          </div>

          {/* Glowing Aura (Gold Accent) */}
          <motion.div 
             animate={{ opacity: [0.2, 0.4, 0.2] }}
             transition={{ duration: 4, repeat: Infinity }}
             className="absolute inset-0 bg-[#D4AF37]/15 blur-[80px] -z-10 rounded-full" 
          />
        </motion.div>

        <motion.div style={{ opacity }} className="absolute inset-0 flex items-center justify-center">
           <svg className="w-[80vw] h-[80vw] opacity-10" viewBox="0 0 100 100">
             <circle cx="50" cy="50" r="48" fill="none" stroke="white" strokeWidth="0.1" strokeDasharray="1 2" />
           </svg>
        </motion.div>
      </div>

      {/* 2. THE SCROLLING DATA CONTENT */}
      
      {/* HERO SECTION */}
      <section className="relative h-screen flex flex-col items-center justify-center z-30 px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
          <span className="text-[#D4AF37] font-mono text-xs tracking-[1em] uppercase block mb-4">Established_2026</span>
          <h1 className="text-7xl md:text-[10vw] font-serif italic leading-none mb-8 text-center">{productData.tagline}</h1>
          <div className="flex gap-12 justify-center font-mono text-[10px] text-white/40 tracking-widest uppercase">
            <span>Privately Hallmarked</span>
            <span>Ref: {productData.name}_RS</span>
          </div>
        </motion.div>
      </section>

      {/* TECHNICAL STATS SECTION */}
      <section className="relative h-screen grid grid-cols-1 md:grid-cols-2 items-center px-10 md:px-24 z-30">
        <div className="space-y-12">
          {productData.specs.map((spec, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 }}
              className="border-l border-white/10 pl-8"
            >
              <p className="text-white/30 font-mono text-[10px] uppercase mb-1">{spec.label}</p>
              <h3 className="text-white text-3xl font-serif italic">{spec.value}</h3>
              <p className="text-[#D4AF37] font-mono text-[9px] uppercase tracking-widest mt-2 font-bold">{spec.detail}</p>
            </motion.div>
          ))}
        </div>
        <div className="hidden md:block" />
      </section>

      {/* LUXURY MILESTONES SECTION */}
      <section className="relative h-screen grid grid-cols-1 md:grid-cols-2 items-center px-10 md:px-24 z-30">
        <div className="hidden md:block" />
        <div className="space-y-24 text-right">
          {productData.phases.map((phase, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="group"
            >
              <span className="text-[#D4AF37] font-mono text-[40px] opacity-20 group-hover:opacity-100 transition-opacity">0{i+1}</span>
              <h3 className="text-white text-5xl font-serif italic mb-4">{phase.title}</h3>
              <p className="text-white/40 text-sm max-w-sm ml-auto uppercase tracking-tighter leading-relaxed">
                <span className="text-white block mb-2 tracking-widest font-mono text-[10px] font-bold">{phase.note}</span>
                {phase.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* PURCHASE SECTION (Cloud White #FAFAFA Palette) */}
      <section className="relative h-[60vh] flex items-center justify-center z-30 bg-[#FAFAFA] text-[#DCB318] text-center px-6">
        <div className="space-y-8">
          <h2 className="text-5xl md:text-[8vw] font-serif italic leading-none tracking-tighter">Claim Your<br />Heritage.</h2>
          <div className="flex flex-col items-center gap-6">
            <p className="font-mono text-3xl font-bold tracking-tighter text-[#004643]">{productData.price}</p>
            <motion.button 
              whileHover={{ scale: 1.05, backgroundColor: "#D4AF37", color: "#004643" }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#004643] text-[#FAFAFA] px-16 py-5 rounded-full font-mono text-xs uppercase tracking-[0.5em] font-bold transition-all shadow-xl"
            >
              Add to Collection
            </motion.button>
            <p className="text-[#004643]/50 font-mono text-[9px] uppercase tracking-widest">
              Secure Checkout | <span className="text-[#004643] font-bold underline decoration-[#D4AF37]">Authentic RS Mart Warranty</span>
            </p>
          </div>
        </div>
      </section>

      {/* Progress Bar (Gold Accent) */}
      <motion.div 
        style={{ scaleX: smoothProgress }}
        className="fixed bottom-0 left-0 right-0 h-1 bg-[#D4AF37] origin-left z-50 shadow-[0_-2px_10px_rgba(212,175,55,0.3)]"
      />
      
    </div>
  );
};

export default KineticProductPage;