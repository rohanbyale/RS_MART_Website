import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Mail, Phone, Instagram, Facebook, MessageCircle, Heart, Sparkles } from 'lucide-react';

const Footer = () => {
  // Brand Palette
  const CYPRUS = "#004643";
  const GOLD = "#D4AF37";
  const TEXT_GHOST = "rgba(250, 250, 250, 0.6)";

  const year = new Date().getFullYear();

  return (
    <footer className="relative pt-24 pb-12 px-6 overflow-hidden" style={{ backgroundColor: CYPRUS }}>
      
      {/* Massive Background Watermark */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden select-none">
        <h1 
          className="font-serif font-bold text-[25vw] leading-none opacity-[0.03] whitespace-nowrap"
          style={{ color: '#fff', letterSpacing: '-0.05em' }}
        >
          RS MART
        </h1>
      </div>

      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-white/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-[#D4AF37]/10 rounded-full blur-[80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          
          {/* Brand Identity */}
          <div className="space-y-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h3 className="text-5xl font-serif tracking-tighter text-white">
                RS <span className="italic font-light" style={{ color: GOLD }}>Mart.</span>
              </h3>
              <div className="h-0.5 w-16" style={{ backgroundColor: GOLD }} />
            </motion.div>
            <p className="text-sm leading-relaxed max-w-xs" style={{ color: TEXT_GHOST }}>
              Redefining boutique excellence in Pusad. A sanctuary of curated elegance and timeless style for the discerning individual.
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

          {/* Quick Navigation */}
          <div className="lg:pl-10">
            <h4 className="text-[11px] uppercase tracking-[0.4em] font-bold mb-10 text-[#D4AF37]">Explore</h4>
            <ul className="space-y-4 text-sm font-medium">
              {['Collection', 'Boutique Hours', 'Our Story', 'Reviews'].map((item) => (
                <li key={item}>
                  <motion.a 
                    href="#" 
                    whileHover={{ x: 8, color: GOLD }} 
                    className="text-white/70 transition-all block"
                  >
                    {item}
                  </motion.a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="text-[11px] uppercase tracking-[0.4em] font-bold mb-10 text-[#D4AF37]">Concierge</h4>
            <ul className="space-y-6 text-sm">
              <li className="flex items-start gap-4 group cursor-pointer">
                <MapPin size={18} className="shrink-0 transition-transform group-hover:scale-110" style={{ color: GOLD }} />
                <span className="group-hover:text-white transition-colors" style={{ color: TEXT_GHOST }}>Main Road Kapad Line,<br/>Pusad, MH 445204</span>
              </li>
              <li className="flex items-center gap-4 group cursor-pointer">
                <Mail size={18} className="shrink-0 transition-transform group-hover:scale-110" style={{ color: GOLD }} />
                <span className="group-hover:text-white transition-colors" style={{ color: TEXT_GHOST }}>luplenchwar@gmail.com</span>
              </li>
              <li className="flex items-center gap-4 group cursor-pointer">
                <Phone size={18} className="shrink-0 transition-transform group-hover:scale-110" style={{ color: GOLD }} />
                <span className="group-hover:text-white transition-colors" style={{ color: TEXT_GHOST }}>+91 00000 00000</span>
              </li>
            </ul>
          </div>

          {/* Newsletter Section */}
          <div className="p-8 rounded-[2.5rem] bg-white/5 border border-white/10 backdrop-blur-md shadow-2xl relative group overflow-hidden">
             <div className="absolute top-0 right-0 p-4 opacity-10">
                <Sparkles size={40} color={GOLD} />
             </div>
            <div className="flex items-center gap-2 mb-4">
              <Sparkles size={14} style={{ color: GOLD }} />
              <h4 className="text-[10px] uppercase tracking-[0.2em] font-bold text-white">Private Circle</h4>
            </div>
            <p className="text-[12px] text-white/50 mb-6 leading-relaxed">
              Join our exclusive list for early access to new arrivals and boutique events.
            </p>
            <div className="relative">
              <input 
                type="email" 
                placeholder="Your Email" 
                className="w-full bg-white/10 border border-white/10 rounded-2xl py-4 px-5 text-white text-xs focus:outline-none focus:ring-1 focus:ring-[#D4AF37] transition-all placeholder:text-white/20"
              />
              <motion.button 
                whileTap={{ scale: 0.9 }}
                className="absolute right-2 top-2 bottom-2 px-4 rounded-xl transition-colors flex items-center justify-center shadow-lg" 
                style={{ backgroundColor: GOLD }}
              >
                <Heart size={14} fill={CYPRUS} color={CYPRUS} />
              </motion.button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2">
            <p className="text-[10px] uppercase tracking-[0.3em] font-bold text-white/20">
              © {year} RS Mart Boutique • Crafted for Elegance
            </p>
          </div>
          <div className="flex gap-10 text-[10px] uppercase tracking-[0.3em] font-bold">
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