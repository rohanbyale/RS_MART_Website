import React from 'react';
import { motion } from 'framer-motion';
import { Star, Heart, Sparkles, Target, Users, ArrowRight } from 'lucide-react';

const AboutPage = () => {
  const colors = {
    gold: "#D4AF37",
    emerald: "#004643",
    deepCoal: "#0D0D0D",
    softCream: "#FCFBFA"
  };

  const stats = [
    { label: "Gifts Delivered", value: "10k+", icon: <Sparkles size={22} />, glow: "rgba(212, 175, 55, 0.3)" },
    { label: "Happy Clients", value: "5k+", icon: <Heart size={22} />, glow: "rgba(45, 212, 191, 0.3)" },
    { label: "Unique Products", value: "500+", icon: <Star size={22} />, glow: "rgba(212, 175, 55, 0.3)" },
    { label: "Years of Joy", value: "Est. 2024", icon: <Target size={22} />, glow: "rgba(45, 212, 191, 0.3)" },
  ];

  return (
    <div className="min-h-screen bg-[#FCFBFA] overflow-x-hidden font-sans">
      
      {/* --- HERO SECTION: Vibrant & Animated --- */}
      <section className="relative h-[60vh] flex items-center justify-center bg-[#004643] overflow-hidden">
        {/* Animated Gradient Orbs */}
        <motion.div 
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute -top-20 -left-20 w-96 h-96 bg-[#D4AF37] rounded-full blur-[120px]"
        />
        <motion.div 
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute -bottom-20 -right-20 w-[30rem] h-[30rem] bg-teal-500 rounded-full blur-[150px]"
        />

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative z-10 text-center px-4"
        >
          <motion.div 
            initial={{ width: 0 }} animate={{ width: "80px" }}
            className="h-[2px] bg-[#D4AF37] mx-auto mb-6"
          />
          <h1 className="text-6xl md:text-8xl font-serif text-white mb-4 tracking-tight">
            Our <span className="italic text-[#D4AF37] drop-shadow-sm">Legacy</span>
          </h1>
          <p className="text-emerald-50 max-w-xl mx-auto text-lg font-light leading-relaxed opacity-90">
            RS Mart is where tradition meets luxury. Based in <span className="font-bold border-b border-[#D4AF37]">Pusad</span>, we craft emotions, not just gifts.
          </p>
        </motion.div>
      </section>

      {/* --- STATS GRID: Modern Glassmorphism --- */}
      <section className="relative z-20 -mt-16 container mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {stats.map((stat, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -8, boxShadow: `0 20px 40px ${stat.glow}` }}
              className="bg-white/90 backdrop-blur-md p-6 md:p-8 rounded-[2rem] border border-white shadow-xl text-center transition-all duration-300"
            >
              <div className="text-[#004643] bg-emerald-50 w-12 h-12 rounded-2xl flex items-center justify-center mx-auto mb-4">
                {stat.icon}
              </div>
              <h3 className="text-3xl font-black text-[#0D0D0D]">{stat.value}</h3>
              <p className="text-stone-400 text-[10px] uppercase tracking-[0.2em] font-bold mt-1">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* --- FOUNDER'S SECTION: Minimalist Elegance --- */}
      <section className="py-20 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="w-full md:w-1/2"
            >
              <div className="relative inline-block">
                <Users className="text-[#D4AF37] mb-6" size={40} />
                <div className="absolute -top-2 -right-2 w-3 h-3 bg-emerald-500 rounded-full animate-ping" />
              </div>
              <h2 className="text-4xl md:text-5xl font-serif text-[#004643] mb-6 leading-tight">
                A Note From <br />Our <span className="italic">Curators</span>
              </h2>
              <div className="w-16 h-1 bg-[#D4AF37] mb-8" />
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="w-full md:w-1/2"
            >
              <p className="text-stone-600 text-xl leading-relaxed font-light italic border-l-4 border-emerald-100 pl-8">
                "At RS Mart, we believe that luxury isn't about the price tag—it's about the attention to detail. 
                Every box we pack carries a piece of <span className="text-[#004643] font-semibold">Pusad's heart</span>."
              </p>
              <p className="mt-8 text-[#0D0D0D] font-bold tracking-widest uppercase text-sm">
                — Team RS Mart
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- CTA SECTION: Impactful & Compact --- */}
      <section className="pb-20 container mx-auto px-4">
        <motion.div 
          whileHover={{ scale: 1.01 }}
          className="bg-[#0D0D0D] rounded-[2.5rem] p-10 md:p-16 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8"
        >
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#004643] opacity-20 blur-[80px]" />
          
          <div className="relative z-10 text-center md:text-left">
            <h3 className="text-3xl md:text-4xl font-serif text-white mb-2">
              The Collection <span className="text-[#D4AF37]">Awaits</span>.
            </h3>
            <p className="text-stone-400 font-light">Experience premium gifting like never before.</p>
          </div>

          <motion.button 
            whileHover={{ scale: 1.05, backgroundColor: "#f3d981" }}
            whileTap={{ scale: 0.95 }}
            className="group flex items-center gap-3 bg-[#D4AF37] text-[#0D0D0D] px-10 py-4 rounded-full font-black uppercase tracking-widest text-xs shadow-2xl relative z-10 transition-colors"
          >
            Explore Shop
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </motion.div>
      </section>

    </div>
  );
};

export default AboutPage;