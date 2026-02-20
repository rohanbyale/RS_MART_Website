import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Mail, Phone, Instagram, Facebook, MessageCircle } from 'lucide-react';

const Footer = () => {
  const CYPRUS = "#004643";
  const GOLD = "#D4AF37";
  const TEXT_GHOST = "rgba(250, 250, 250, 0.6)";

  const year = new Date().getFullYear();

  return (
    <footer className="relative pt-16 md:pt-24 pb-12 px-6 overflow-hidden" style={{ backgroundColor: CYPRUS }}>
      
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden select-none">
        <h1 
          className="font-serif font-bold text-[25vw] leading-none opacity-[0.03] whitespace-nowrap"
          style={{ color: '#fff', letterSpacing: '-0.05em' }}
        >
          RS MART
        </h1>
      </div>

      <div className="absolute top-0 left-1/4 w-96 h-96 bg-white/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-[#D4AF37]/10 rounded-full blur-[80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-16 mb-16">
          
          <div className="space-y-6 md:space-y-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h3 className="text-4xl md:text-5xl font-serif tracking-tighter text-white">
                RS <span className="italic font-light" style={{ color: GOLD }}>Mart.</span>
              </h3>
              <div className="h-0.5 w-16" style={{ backgroundColor: GOLD }} />
            </motion.div>
            <p className="text-sm leading-relaxed max-w-xs" style={{ color: TEXT_GHOST }}>
              Redefining boutique excellence in Pusad. A sanctuary of curated elegance and timeless style.
            </p>
            <div className="flex gap-4">
              {[Instagram, Facebook, MessageCircle].map((Icon, i) => (
                <motion.a
                  key={i}
                  href="#"
                  whileHover={{ y: -5, backgroundColor: GOLD, color: CYPRUS }}
                  className="transition-all p-3 rounded-full bg-white/5 text-white border border-white/10"
                >
                  <Icon size={18} />
                </motion.a>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 md:gap-8 lg:col-span-2">
            <div>
              <h4 className="text-[10px] md:text-[11px] uppercase tracking-[0.3em] font-bold mb-6 md:mb-10 text-[#D4AF37]">Explore</h4>
              <ul className="space-y-3 md:space-y-4 text-xs md:sm font-medium">
                {['Collection', 'Hours', 'Story', 'Reviews'].map((item) => (
                  <li key={item}>
                    <motion.a 
                      href="#" 
                      whileHover={{ x: 5, color: GOLD }} 
                      className="text-white/70 transition-all block"
                    >
                      {item}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-[10px] md:text-[11px] uppercase tracking-[0.3em] font-bold mb-6 md:mb-10 text-[#D4AF37]">Concierge</h4>
              <ul className="space-y-4 md:space-y-6 text-xs md:sm">
                <li className="flex items-start gap-3 group cursor-pointer">
                  <MapPin size={16} className="shrink-0" style={{ color: GOLD }} />
                  <span className="group-hover:text-white transition-colors leading-tight" style={{ color: TEXT_GHOST }}>Main Road,<br/>Pusad</span>
                </li>
                <li className="flex items-center gap-3 group cursor-pointer">
                  <Mail size={16} className="shrink-0" style={{ color: GOLD }} />
                  <span className="group-hover:text-white transition-colors truncate" style={{ color: TEXT_GHOST }}>Email Us</span>
                </li>
                <li className="flex items-center gap-3 group cursor-pointer">
                  <Phone size={16} className="shrink-0" style={{ color: GOLD }} />
                  <span className="group-hover:text-white transition-colors" style={{ color: TEXT_GHOST }}>Call Us</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="relative group mt-4 md:mt-0">
            <div className="aspect-[4/3] md:aspect-square lg:aspect-[3/5] rounded-[2rem] overflow-hidden bg-white/5 backdrop-blur-sm border border-white/10 flex items-center justify-center p-4">
              <img 
                src="/b726e43651b6c5e96e141d59397bc0ff-removebg-preview.png" 
                alt="Boutique Item" 
                className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
            </div>
            
            <div 
              className="absolute -bottom-2 -right-2 w-12 h-12 border-r-2 border-b-2 rounded-br-3xl opacity-40" 
              style={{ borderColor: GOLD }}
            />
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[9px] uppercase tracking-[0.2em] font-bold text-white/20 text-center">
            © {year} RS Mart Boutique • Crafted for Elegance
          </p>
          <div className="flex gap-6 md:gap-10 text-[9px] uppercase tracking-[0.2em] font-bold">
            {['Privacy', 'Terms', 'Shipping'].map(item => (
              <a key={item} href="#" className="text-white/20 hover:text-[#D4AF37] transition-colors">
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
