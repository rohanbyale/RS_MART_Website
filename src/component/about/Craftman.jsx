import React from 'react';
import { motion } from 'framer-motion';
import { Quote, MapPin, CheckCircle2, Sparkles } from 'lucide-react';

const MainAboutStory = () => {
  // Enhanced Animation Variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } 
    }
  };

  // Simplified and more reliable image reveal
  const imageReveal = {
    hidden: { opacity: 0, scale: 0.98 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 1.2, ease: [0.19, 1, 0.22, 1] } 
    }
  };

  return (
    <div className="bg-[#FCFBFA] overflow-hidden">
      {/* --- SECTION: THE JOURNEY --- */}
      <section className="relative py-16 lg:py-32">
        {/* Background Texture/Accent */}
        <div 
          className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none" 
          style={{ backgroundImage: `url('https://www.transparenttextures.com/patterns/gold-dust.png')` }} 
        />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
            
            {/* Left side: Interactive Image Collage */}
            <div className="w-full lg:w-1/2 relative">
              <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={imageReveal}
                className="relative rounded-[2rem] lg:rounded-[2.5rem] overflow-hidden shadow-2xl bg-stone-100"
              >
                <motion.img 
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 1.5 }}
                  // High-quality relevant jewelry image
                  src="https://i.pinimg.com/1200x/47/94/89/4794894cce0bbc76f795f010677a88aa.jpg" 
                  alt="Crafting Jewelry" 
                  className="w-full h-[400px] lg:h-[650px] object-cover block"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-[#004643]/30 via-transparent to-transparent pointer-events-none" />
              </motion.div>

              {/* Floating Glassmorphism Info Card */}
              <motion.div 
                initial={{ x: 30, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.8 }}
                viewport={{ once: true }}
                className="absolute -bottom-6 -right-2 lg:-right-8 bg-white/90 backdrop-blur-xl p-6 lg:p-8 rounded-3xl shadow-xl z-20 max-w-[260px] border border-white/50"
              >
                <div className="flex items-center gap-2 mb-3 text-[#D4AF37]">
                  <div className="p-1.5 bg-[#D4AF37]/10 rounded-lg">
                    <MapPin size={16} />
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-stone-500">Pusad, Maharashtra</span>
                </div>
                <p className="text-[#004643] font-serif italic text-lg leading-relaxed">
                  "The heart of our creations beats in our ancestral workshop."
                </p>
                <Sparkles className="absolute top-4 right-4 text-[#D4AF37]/30 animate-pulse" size={20} />
              </motion.div>
            </div>

            {/* Right side: The Story Content */}
            <div className="w-full lg:w-1/2">
              <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  visible: { transition: { staggerChildren: 0.15 } }
                }}
              >
                <motion.div variants={fadeInUp} className="flex items-center gap-3 mb-6">
                  <motion.span 
                    initial={{ width: 0 }}
                    whileInView={{ width: 40 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="h-[1px] bg-[#D4AF37]" 
                  />
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="relative overflow-hidden px-4 py-1.5 rounded-full bg-emerald-50 border border-emerald-100/50 shadow-sm"
                  >
                    <span className="relative z-10 text-[#D4AF37] text-xs font-black uppercase tracking-[0.3em] flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
                      Our Origins
                    </span>
                  </motion.div>
                </motion.div>

                <motion.h2 variants={fadeInUp} className="text-4xl lg:text-7xl font-serif text-[#004643] leading-[1.1] mb-8 tracking-tight">
                  A Legacy Born from <br /> 
                  <span className="relative inline-block">
                    <span className="relative z-10 text-[#D4AF37]">Pure Dedication.</span>
                    <motion.span 
                      initial={{ width: 0 }}
                      whileInView={{ width: '100%' }}
                      transition={{ delay: 1, duration: 1 }}
                      className="absolute bottom-2 left-0 h-3 bg-[#D4AF37]/10 -z-10" 
                    />
                  </span>
                </motion.h2>
                
                <motion.div variants={fadeInUp} className="space-y-6 text-stone-500 text-lg leading-relaxed">
                  <p>
                    Started in <span className="text-[#004643] font-semibold border-b border-[#D4AF37]/30">1970</span>, RS Mart began as a small vision to bring world-class jewelry craftsmanship to the local community.
                  </p>
                  <p className="italic font-serif text-[#004643]/80 border-l-2 border-[#D4AF37]/20 pl-6">
                    For over 50 years, we have prioritized <span className="text-[#D4AF37] font-medium underline underline-offset-8 decoration-1">purity over profit</span>. Every piece of gold and every diamond that leaves our store is a testament to our commitment to quality.
                  </p>
                </motion.div>

                <motion.div variants={fadeInUp} className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-12">
                  {[
                    "HUID Compliant Gold",
                    "IGI Certified Diamonds",
                    "Generational Trust",
                    "Custom Design Studio"
                  ].map((item) => (
                    <motion.div 
                      key={item} 
                      whileHover={{ x: 5 }}
                      className="flex items-center gap-3 p-3 rounded-xl bg-white shadow-sm border border-stone-100 transition-all hover:border-[#D4AF37]/20"
                    >
                      <div className="bg-emerald-50 p-1 rounded-full">
                        <CheckCircle2 className="text-[#004643]" size={18} />
                      </div>
                      <span className="font-medium text-[#004643] text-sm">{item}</span>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* --- SECTION: THE PHILOSOPHY --- */}
      <section className="relative py-20 lg:py-32 overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-stone-950/80 md:bg-stone-950/75 z-10" />
          <video autoPlay loop muted playsInline className="w-full h-full object-cover">
            <source src="https://www.pexels.com/download/video/34840685/" type="video/mp4" />
          </video>
        </div>
        
        <div className="container mx-auto px-6 relative z-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <Quote className="text-[#D4AF37] mx-auto mb-8 opacity-40" size={48} strokeWidth={1} />
            <h3 className="text-2xl md:text-4xl lg:text-5xl font-serif text-stone-100 leading-[1.3] mb-10 tracking-wide">
              "True luxury is not found in the <span className="text-[#D4AF37]">price tag</span>, but in the precision of the hand and the <span className="text-[#D4AF37]">purity</span> of the soul."
            </h3>
            <div className="flex flex-col items-center">
              <div className="h-[1px] bg-[#D4AF37]/60 w-20 mb-6" />
              <p className="text-[#D4AF37] text-[10px] md:text-xs font-bold uppercase tracking-[0.6em] opacity-90">
                Crafted for Generations
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default MainAboutStory;