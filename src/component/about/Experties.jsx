import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Gift, Heart, Sparkles, Smile, PackageCheck, ShoppingBag, MapPin, Zap } from 'lucide-react';

const GiftShopExpertise = () => {
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Hero Heading Animations
  const heroOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.15], [1, 0.85]);
  const heroY = useTransform(scrollYProgress, [0, 0.15], [0, -30]);

  // Main Content Animations
  const contentOpacity = useTransform(scrollYProgress, [0.1, 0.22], [0, 1]);
  const contentY = useTransform(scrollYProgress, [0.1, 0.25], [80, 0]);

  const features = [
    {
      icon: <Gift size={24} />,
      title: "Handpicked Decor",
      desc: "Unique home aesthetics sourced from master artisans.",
      bgColor: "bg-rose-50",
      iconColor: "text-rose-500",
      borderColor: "group-hover:border-rose-200"
    },
    {
      icon: <PackageCheck size={24} />,
      title: "Luxury Wrapping",
      desc: "Premium ribbons and custom boxes with every purchase.",
      bgColor: "bg-amber-50",
      iconColor: "text-amber-500",
      borderColor: "group-hover:border-amber-200"
    },
    {
      icon: <Heart size={24} />,
      title: "Personal Touch",
      desc: "Custom engravings and handwritten notes for loved ones.",
      bgColor: "bg-emerald-50",
      iconColor: "text-emerald-500",
      borderColor: "group-hover:border-emerald-200"
    }
  ];

  return (
    <section ref={containerRef} className="relative h-[280vh] md:h-[250vh] bg-white">
      {/* --- FIXED BACKGROUND & HERO - GREEN BACKGROUND ONLY HERE --- */}
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden px-4 bg-[#004643]">
        
        {/* Updated Colorful SVG */}
        <motion.div 
          animate={{ 
            rotate: [0, 3, -3, 0],
            scale: [1, 1.02, 1],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute pointer-events-none flex items-center justify-center w-full"
        >
          <svg 
            width="500" 
            height="400" 
            viewBox="0 0 24 24" 
            fill="none" 
            className="md:w-[700px] md:h-[500px]"
          >
            {/* The Ribbon/Bow - Lightened for Green BG */}
            <path 
              d="M12 7C12 7 12 3 10 3C8 3 8 7 8 7V7M12 7C12 7 12 3 14 3C16 3 16 7 16 7V7" 
              stroke="#D4AF37" 
              strokeWidth="0.8" 
              strokeLinecap="round"
              className="opacity-40"
            />
            {/* The Main Box Body - White Stroke for Green BG */}
            <path 
              d="M20 12V22H4V12" 
              stroke="#FFFFFF" 
              strokeWidth="0.6" 
              strokeLinejoin="round"
              className="opacity-20"
            />
            {/* The Lid - Gold */}
            <path 
              d="M2 7H22V12H2V7" 
              stroke="#D4AF37" 
              strokeWidth="0.8" 
              className="opacity-60"
            />
            {/* The Vertical Wrap - White for Green BG */}
            <path 
              d="M12 22V7" 
              stroke="#FFFFFF" 
              strokeWidth="0.8" 
              className="opacity-30"
            />
          </svg>
        </motion.div>

        {/* The "Big Heading" */}
        <motion.div 
          style={{ opacity: heroOpacity, scale: heroScale, y: heroY }}
          className="text-center z-10 w-full max-w-4xl"
        >
          <div className="flex justify-center mb-6">
            <motion.div
              animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
              transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
              className="bg-gradient-to-r from-[#D4AF37] via-[#f3d981] to-[#D4AF37] bg-[length:200%_auto] text-[#004643] px-5 py-1.5 rounded-full shadow-lg font-bold"
            >
              <span className="text-[10px] font-black uppercase tracking-[0.4em]">The RS Mart Experience</span>
            </motion.div>
          </div>
          <h1 className="text-5xl md:text-9xl font-serif text-white leading-tight md:leading-none">
            The Art of <br />
            <span className="italic text-[#D4AF37]">Gifting.</span>
          </h1>
          <motion.div 
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="mt-10 text-white/40"
          >
            <p className="text-[10px] tracking-[0.3em] uppercase">Scroll to explore</p>
          </motion.div>
        </motion.div>
      </div>

      {/* --- CONTENT REVEAL - REMAINS WHITE --- */}
      <motion.div 
        style={{ opacity: contentOpacity, y: contentY }}
        className="relative z-20 container mx-auto px-4 md:px-6 -mt-[15vh] pb-24"
      >
        <div className="bg-white rounded-[2.5rem] md:rounded-[4rem] shadow-[0_-30px_60px_-15px_rgba(0,0,0,0.15)] p-6 md:p-16">
          
          {/* Header */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 gap-8 border-b border-stone-100 pb-12">
            <div className="max-w-2xl text-center lg:text-left">
              <div className="flex items-center justify-center lg:justify-start gap-2 text-[#D4AF37] mb-4">
                <Zap size={14} className="fill-[#D4AF37]" />
                <span className="text-[10px] font-black uppercase tracking-[0.3em]">Premium Quality Guaranteed</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-serif text-[#004643] leading-tight">
                Curating Memories, <br className="hidden md:block" /> Not Just Products.
              </h2>
            </div>
            <div className="flex items-center justify-center gap-3 text-stone-500 text-[11px] bg-stone-100/50 px-5 py-2.5 rounded-full self-center lg:self-end">
              <MapPin size={14} className="text-[#D4AF37]" />
              <span className="font-medium">Based in Pusad • Shipping Nationwide</span>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-16">
            {features.map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -8 }}
                className={`group p-8 md:p-10 rounded-[2rem] border-2 border-transparent bg-[#FCFBFA] transition-all duration-500 ${item.borderColor} hover:bg-white hover:shadow-xl`}
              >
                <div className={`mb-6 inline-block p-4 ${item.bgColor} ${item.iconColor} rounded-2xl`}>
                  {item.icon}
                </div>
                <h4 className="text-xl md:text-2xl font-serif text-[#004643] mb-3">{item.title}</h4>
                <p className="text-stone-500 leading-relaxed text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* CTA Banner */}
          <div className="bg-[#004643] text-white rounded-[2.5rem] md:rounded-[3.5rem] p-8 md:p-16 relative overflow-hidden">
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="text-center lg:text-left">
                <h3 className="text-3xl md:text-5xl font-serif mb-8 leading-tight">
                  Gift Shopping <br /> <span className="text-[#D4AF37]">Made Simple.</span>
                </h3>
                <div className="space-y-5 inline-block text-left">
                  {[
                    { step: 1, label: "Pick Your Item", sub: "Curated collection." },
                    { step: 2, label: "Add a Message", sub: "Custom notes." },
                    { step: 3, label: "Express Delivery", sub: "Tracked shipping." }
                  ].map((s) => (
                    <div key={s.step} className="flex gap-4">
                      <div className="flex-shrink-0 w-7 h-7 rounded-full border border-[#D4AF37] flex items-center justify-center text-[#D4AF37] font-bold text-xs">{s.step}</div>
                      <div>
                        <p className="font-bold text-sm leading-none">{s.label}</p>
                        <p className="text-stone-400 text-[11px] mt-1">{s.sub}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white/5 backdrop-blur-xl p-8 md:p-10 rounded-[2rem] border border-white/10">
                <Smile size={32} className="text-[#D4AF37] mb-6 mx-auto lg:mx-0" />
                <p className="text-lg md:text-xl font-serif mb-8 text-center lg:text-left">Need expert help? Our assistant is ready.</p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <motion.button whileTap={{ scale: 0.95 }} className="w-full bg-[#D4AF37] text-[#004643] px-6 py-4 rounded-full font-bold text-[11px] uppercase tracking-widest flex items-center justify-center gap-2">
                    <ShoppingBag size={16} /> Start Shopping
                  </motion.button>
                  <motion.button whileTap={{ scale: 0.95 }} className="w-full border border-white/20 text-white px-6 py-4 rounded-full font-bold text-[11px] uppercase tracking-widest hover:bg-white/10">
                    Inquire Now
                  </motion.button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default GiftShopExpertise;