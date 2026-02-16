import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, ArrowRight, Instagram, Sparkles, MessageCircle, ArrowDown } from 'lucide-react';

const PerfectContactHero = () => {
  // --- CONFIGURATION ---
  const contactLinks = {
    instagram: "https://www.instagram.com/r_s_mart_pusad?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==", // Add your link here
    whatsapp: "https://wa.me/8469980171?text=Hello RS Mart, I would like to inquire about...", // Add your number
    email: "hello@rsmart.art",
    phone: "+919800000000"
  };

  // --- ANIMATION VARIANTS ---
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: [0.6, 0.05, 0.01, 0.9] }
  };

  const stagger = {
    animate: { transition: { staggerChildren: 0.1 } }
  };

  return (
    <section className="relative min-h-[100dvh] w-full bg-[#FBFBF9] overflow-hidden flex items-center py-20 selection:bg-[#004643] selection:text-white">
      
      {/* --- LAYER 1: AMBIENT BACKGROUND --- */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
            opacity: [0.03, 0.06, 0.03] 
          }}
          transition={{ duration: 20, repeat: Infinity }}
          className="absolute -top-[10%] -right-[10%] w-[50%] aspect-square bg-[#004643] rounded-full blur-[120px]" 
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[20vw] font-serif font-black text-[#004643]/[0.02] whitespace-nowrap select-none">
          RSMART • STUDIO
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* --- LEFT SIDE: THE CORE CONTENT (7 Cols) --- */}
          <motion.div 
            variants={stagger}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="lg:col-span-7 space-y-8 md:space-y-12"
          >
            <motion.div variants={fadeInUp} className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-stone-200 bg-white/50 backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#004643] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#004643]"></span>
              </span>
              <span className="text-[9px] font-black uppercase tracking-[0.3em] text-[#004643]">Open for Collaboration</span>
            </motion.div>

            <motion.h1 variants={fadeInUp} className="text-6xl sm:text-7xl md:text-8xl lg:text-[9rem] font-serif text-[#0D0D0D] leading-[0.9] tracking-tighter">
              Ready to <br />
              <span className="italic text-[#004643] font-light">Connect?</span>
            </motion.h1>

            <motion.p variants={fadeInUp} className="text-stone-500 text-lg md:text-xl max-w-md leading-relaxed font-light">
              Experience the art of bespoke luxury. Whether it's a bulk inquiry or a single masterpiece, your journey starts here.
            </motion.p>

            <motion.div variants={fadeInUp} className="flex flex-wrap items-center gap-6">
              {/* WHATSAPP ACTION */}
              <motion.a
                href={contactLinks.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, x: 5 }}
                whileTap={{ scale: 0.95 }}
                className="group bg-[#004643] text-white px-10 py-5 rounded-2xl font-bold uppercase tracking-widest text-[10px] shadow-xl flex items-center gap-4 cursor-pointer"
              >
                Send an Inquiry 
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-[#D4AF37] transition-colors">
                  <ArrowRight size={14} />
                </div>
              </motion.a>
              
              <div className="flex gap-3">
                {/* INSTAGRAM ACTION */}
                <motion.a 
                  href={contactLinks.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -5, borderColor: '#004643', color: '#004643' }}
                  className="w-14 h-14 rounded-2xl border border-stone-200 flex items-center justify-center text-stone-400 bg-white transition-all cursor-pointer"
                >
                  <Instagram size={18} />
                </motion.a>
              </div>
            </motion.div>
          </motion.div>

          {/* --- RIGHT SIDE: THE INTERACTIVE CARD (5 Cols) --- */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="lg:col-span-5 relative"
          >
            {/* The Main Card */}
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="relative z-20 w-full aspect-[4/5] bg-[#004643] rounded-[3rem] overflow-hidden shadow-2xl border-[8px] border-white group"
            >
              <img 
                src="https://img77.uenicdn.com/image/upload/v1582100800/business/28a43919ba094ec7849441c5c4e4cc14.jpg" 
                className="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-50 group-hover:opacity-100 group-hover:scale-110 group-hover:mix-blend-normal transition-all duration-1000" 
                alt="Luxury"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

              <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-between">
                <div className="flex justify-between items-start text-white">
                  <Sparkles className="text-[#D4AF37] animate-pulse" size={32} />
                  <div className="text-right">
                    <p className="text-[8px] font-black tracking-widest opacity-60 uppercase">Our Studio</p>
                    <p className="font-serif italic text-white text-lg">Pusad, Maharashtra</p>
                  </div>
                </div>

                <div className="space-y-6">
                  {/* EMAIL ACTION */}
                  <a href={`mailto:${contactLinks.email}`} className="block group/link">
                    <p className="text-[#D4AF37] text-[8px] font-black uppercase tracking-widest mb-1">Email Us</p>
                    <p className="text-white text-xl md:text-2xl font-serif border-b border-white/10 pb-2 group-hover/link:border-[#D4AF37] transition-colors">{contactLinks.email}</p>
                  </a>
                  {/* CALL ACTION */}
                  <a href={`tel:${contactLinks.phone}`} className="block group/link">
                    <p className="text-[#D4AF37] text-[8px] font-black uppercase tracking-widest mb-1">Call Us</p>
                    <p className="text-white text-xl md:text-2xl font-serif border-b border-white/10 pb-2 group-hover/link:border-[#D4AF37] transition-colors">{contactLinks.phone}</p>
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Decorative Floating Ring */}
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              className="absolute -top-10 -right-10 w-40 h-40 border border-[#D4AF37]/30 rounded-full hidden sm:flex items-center justify-center pointer-events-none"
            >
              <div className="w-1 h-1 bg-[#D4AF37] rounded-full" />
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* --- SCROLL INDICATOR --- */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-30"
      >
        <span className="text-[8px] font-black uppercase tracking-[0.4em]">Scroll</span>
        <ArrowDown size={14} />
      </motion.div>

    </section>
  );
};

export default PerfectContactHero;