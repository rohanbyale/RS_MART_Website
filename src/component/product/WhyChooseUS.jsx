import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, PenTool, Sparkles, Globe, ArrowUpRight } from 'lucide-react';

const WhyChooseRS = () => {
  const features = [
    {
      icon: <PenTool size={24} />,
      title: "Artisanal Curation",
      desc: "Every object in our Pusad boutique is hand-selected for its soul, heritage, and uncompromising aesthetic.",
      // STATIC STYLES
      bgClass: "bg-[#D4AF37]", 
      textClass: "text-[#004643]",
      descClass: "text-[#004643]/70",
      iconBg: "bg-white/20",
      accent: "text-[#004643]"
    },
    {
      icon: <ShieldCheck size={24} />,
      title: "Legacy Quality",
      desc: "Since 1970, we have stood by the principle that true luxury is meant to last generations, not seasons.",
      // STATIC STYLES
      bgClass: "bg-[#004643]",
      textClass: "text-white",
      descClass: "text-white/70",
      iconBg: "bg-white/10",
      accent: "text-[#D4AF37]"
    },
    {
      icon: <Sparkles size={24} />,
      title: "The Art of Gifting",
      desc: "We don't just sell products; we craft experiences. Our signature gold-leaf packaging makes every gift a masterpiece.",
      bgClass: "bg-[#D4AF37]",
      textClass: "text-[#004643]",
      descClass: "text-[#004643]/70",
      iconBg: "bg-white/20",
      accent: "text-[#004643]"
    },
    {
      icon: <Globe size={24} />,
      title: "Global Heritage",
      desc: "Bringing world-class designs to the heart of Maharashtra, bridging the gap between local warmth and global luxury.",
      bgClass: "bg-[#004643]",
      textClass: "text-white",
      descClass: "text-white/70",
      iconBg: "bg-white/10",
      accent: "text-[#D4AF37]"
    }
  ];

  return (
    <section className="bg-[#FAFAFA] py-16 md:py-24 px-6 md:px-12 lg:px-24 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* --- SECTION HEADER --- */}
        <div className="relative mb-16 md:mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col gap-6 relative z-10"
          >
            <div className="flex items-center gap-4">
              <span className="h-[1px] w-12 bg-[#D4AF37]" />
              <span className="text-[#004643] text-[10px] font-black uppercase tracking-[0.6em]">The RS Philosophy</span>
            </div>
            
            <h2 className="text-[#004643] text-5xl md:text-7xl lg:text-8xl font-serif leading-[1.1] tracking-tighter max-w-4xl">
              Precision in <span className="italic font-light">Detail.</span> <br /> 
              Excellence in <span className="text-[#D4AF37] italic">Legacy.</span>
            </h2>
          </motion.div>
          
          <span className="absolute top-0 right-0 text-[12vw] font-black text-[#004643]/[0.02] pointer-events-none select-none leading-none">
            QUALITY
          </span>
        </div>

        {/* --- FEATURES GRID --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 shadow-2xl">
          {features.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`group relative p-10 md:p-12 ${item.bgClass} transition-all duration-500 hover:-translate-y-2 z-10 overflow-hidden h-full`}
            >
              <div className="relative z-10 h-full flex flex-col">
                {/* ICON CONTAINER */}
                <div 
                  className={`mb-10 inline-flex items-center justify-center w-14 h-14 rounded-full ${item.iconBg} backdrop-blur-sm transition-all duration-500 group-hover:scale-110 ${item.accent}`}
                >
                  {item.icon}
                </div>

                {/* TEXT CONTENT */}
                <div className="space-y-4 flex-grow">
                  <h4 className={`text-2xl font-serif tracking-tight flex items-center justify-between ${item.textClass}`}>
                    {item.title}
                    <ArrowUpRight size={18} className="opacity-40 group-hover:opacity-100 transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </h4>
                  <p className={`text-sm leading-relaxed font-medium ${item.descClass}`}>
                    {item.desc}
                  </p>
                </div>

                {/* BOTTOM DECORATIVE LINE */}
                <div className="mt-8 h-[1px] w-full bg-current opacity-20" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* --- CALL TO ACTION BAR --- */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 md:mt-20 p-8 md:p-12 bg-[#004643] flex flex-col md:flex-row items-center justify-between gap-8 group relative overflow-hidden"
        >
          <div className="text-center md:text-left relative z-10">
            <h3 className="text-[#FAFAFA] text-2xl md:text-3xl font-serif italic">Experience the RS Mart standard in person.</h3>
            <p className="text-[#FAFAFA]/50 text-[10px] uppercase tracking-[0.4em] mt-2 font-bold">Visit our Flagship Store in Pusad</p>
          </div>
          <button className="relative z-10 bg-[#D4AF37] text-[#004643] px-10 py-5 font-black text-[10px] uppercase tracking-[0.4em] hover:bg-white transition-all duration-500 whitespace-nowrap shadow-xl">
            Book Private Tour
          </button>
          {/* Subtle background glow for CTA */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -mr-32 -mt-32" />
        </motion.div>

      </div>
    </section>
  );
};

export default WhyChooseRS;