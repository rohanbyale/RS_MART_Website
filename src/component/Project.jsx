import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

const CompactProjectGrid = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const springScroll = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
  
  // Reduced movement range for a smaller overall section height
  const yLeft = useTransform(springScroll, [0, 1], ["0%", "-5%"]);
  const yRight = useTransform(springScroll, [0, 1], ["0%", "5%"]);

  const projects = [
    { id: '01', title: "KRONOS", cat: "SaaS", img: "https://images.unsplash.com/photo-1614850523296-d8c1af93d400?q=80&w=1000", height: "h-[350px]" },
    { id: '02', title: "ZENITH", cat: "E-Comm", img: "https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=1000", height: "h-[350px]" },
    { id: '03', title: "OBSIDIAN", cat: "Web3", img: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=1000", height: "h-[350px]" },
    { id: '04', title: "LUMINA", cat: "AI", img: "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&w=1000", height: "h-[350px]" },
  ];

  const Card = ({ proj }) => (
    <motion.div 
      whileHover="hover"
      className={`relative w-full ${proj.height} rounded-[2rem] overflow-hidden bg-[#0a2a2f] border border-white/5 mb-6 group cursor-pointer`}
    >
      <motion.img 
        variants={{ hover: { scale: 1.05, filter: "grayscale(0%)" } }}
        initial={{ filter: "grayscale(100%)" }}
        transition={{ duration: 0.6 }}
        src={proj.img} 
        alt={proj.title} 
        className="w-full h-full object-cover opacity-30 group-hover:opacity-100 transition-opacity"
      />

      <div className="absolute inset-0 p-8 flex flex-col justify-between z-10">
        <div className="flex justify-between items-start">
          <span className="text-[#E6FF2B] font-mono text-[10px] tracking-[0.3em] uppercase">{proj.cat}</span>
          <span className="text-white/20 font-mono text-xs">{proj.id}</span>
        </div>
        <h3 className="text-[#F9F7F2] text-3xl font-black uppercase tracking-tighter transition-transform group-hover:-translate-y-2">
          {proj.title}
        </h3>
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-[#05191d] to-transparent opacity-60" />
    </motion.div>
  );

  return (
    <section ref={containerRef} className="relative bg-[#05191d] py-20 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        
        {/* COMPACT HEADER */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="space-y-2">
            <h2 className="text-[#F9F7F2] text-5xl font-black uppercase tracking-tighter">
              Archive <span className="text-[#E6FF2B] italic">.02</span>
            </h2>
            <div className="w-20 h-1 bg-[#E6FF2B]" />
          </div>
          <p className="text-[#898A8D] font-mono text-[10px] uppercase tracking-widest max-w-[200px]">
            A curated selection of tactical design systems.
          </p>
        </div>

        {/* GRID LAYOUT */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
          <motion.div style={{ y: yLeft }} className="space-y-6">
            <Card proj={projects[0]} />
            <Card proj={projects[2]} />
          </motion.div>

          <motion.div style={{ y: yRight }} className="space-y-6 md:pt-12">
            <Card proj={projects[1]} />
            <Card proj={projects[3]} />
            
            {/* COMPACT CTA */}
            <motion.div 
              whileHover={{ scale: 0.98 }}
              className="w-full h-[150px] rounded-[2rem] border border-dashed border-[#E6FF2B]/30 flex items-center justify-center text-[#E6FF2B] hover:bg-[#E6FF2B]/5 transition-colors cursor-pointer"
            >
              <span className="font-bold text-sm uppercase tracking-widest">View Full Archive</span>
            </motion.div>
          </motion.div>
        </div>
      </div>
      
      {/* Subtle background grain stays */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
    </section>
  );
};

export default CompactProjectGrid;