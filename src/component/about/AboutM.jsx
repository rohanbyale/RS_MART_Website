import React from 'react';
import { motion } from 'framer-motion';
import { Star, Heart, Sparkles, MapPin } from 'lucide-react';

const LuxuryMarquee = () => {
  const marqueeItems = [
    { text: "Established 2024", icon: <Star size={12} className="fill-[#D4AF37]" />, color: "text-[#D4AF37]" },
    { text: "Artisan Sourced", icon: <Sparkles size={12} />, color: "text-[#004643]" },
    { text: "Based in Pusad", icon: <MapPin size={12} />, color: "text-rose-500" },
    { text: "Handcrafted Joy", icon: <Heart size={12} className="fill-rose-400" />, color: "text-rose-400" },
    { text: "Premium Quality", icon: <Star size={12} className="fill-[#D4AF37]" />, color: "text-[#D4AF37]" },
    { text: "Nationwide Shipping", icon: <Sparkles size={12} />, color: "text-[#004643]" },
  ];

  return (
    <div className="relative w-full overflow-hidden py-6 bg-white/40 backdrop-blur-md border-y border-stone-100 shadow-sm">
      <div className="flex whitespace-nowrap">
        <motion.div 
          animate={{ x: [0, -1000] }}
          transition={{ 
            duration: 25, 
            repeat: Infinity, 
            ease: "linear" 
          }}
          className="flex items-center gap-16 pr-16"
        >
          {/* Triple the items to ensure seamless looping on all screen sizes */}
          {[...marqueeItems, ...marqueeItems, ...marqueeItems].map((item, i) => (
            <div key={i} className="flex items-center gap-4 group">
              <span className={`${item.color} group-hover:scale-125 transition-transform duration-300`}>
                {item.icon}
              </span>
              <span className={`text-[11px] font-black uppercase tracking-[0.4em] ${item.color} opacity-80 group-hover:opacity-100`}>
                {item.text}
              </span>
              {/* Vertical Separator */}
              <div className="h-4 w-[1px] bg-stone-200 ml-4" />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default LuxuryMarquee;