import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Plus } from 'lucide-react';

const arrivals = [
  {
    id: 1,
    name: "“Sonata Watches. Time, Perfected.”",
    category: "Ceramics",
    price: "₹4,500",
    image: "https://i.pinimg.com/736x/ea/15/a0/ea15a0c7a2f4e2852bf28f48c631894a.jpg",
    span: "md:col-span-1 md:row-span-2"
  },
  {
    id: 2,
    name: "“Pure Gold. Timeless Elegance.”",
    category: "Apparel",
    price: "₹2,200",
    image: "https://i.pinimg.com/1200x/eb/7a/31/eb7a313a6ad58b772c17669658ae2fb5.jpg",
    span: "md:col-span-1 md:row-span-1"
  },
  {
    id: 3,
    name: "ProSport Tee",
    category: "Lighting",
    price: "₹8,900",
    image: "https://i.pinimg.com/736x/7b/a3/f5/7ba3f54c7d7c95d9161822f2e2437973.jpg",
    span: "md:col-span-1 md:row-span-1"
  },
  {
    id: 4,
    name: "Antique Brass Compass",
    category: "Collectibles",
    price: "₹3,100",
    image: "https://www.hdwallpapers.in/download/teddy_bears_in_water_pool_background_hd_teddy_bear-HD.jpg",
    span: "md:col-span-2 md:row-span-1"
  }
];

const NewArrivals = () => {
  return (
    // Reduced padding from py-24 to py-12
    <div className="bg-[#FAFAFA] py-12 px-6 md:px-12 lg:px-24">
      
      {/* Header Section - Tightened margins and text sizes */}
      <div className="flex flex-col md:flex-row justify-between items-end mb-8 gap-4">
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <div className="h-[1px] w-6 bg-[#D4AF37]" />
            <span className="text-[#004643] text-[9px] font-bold uppercase tracking-[0.3em]">Season 2026</span>
          </div>
          <h2 className="text-[#004643] text-4xl md:text-5xl font-serif tracking-tighter leading-none">
            New <span className="text-[#D4AF37] italic font-light">Arrivals</span>
          </h2>
        </div>
        <p className="text-[#004643]/60 text-xs max-w-[240px] leading-relaxed font-light md:text-right">
          Curated treasures, now available in Pusad.
        </p>
      </div>

      {/* Product Grid - Reduced row heights from 400px to 280px */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[220px] md:auto-rows-[280px]">
        {arrivals.map((item) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`group relative overflow-hidden bg-white shadow-sm ${item.span}`}
          >
            {/* Image Container */}
            <div className="w-full h-full relative">
              <img 
                src={item.image} 
                alt={item.name}
                className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-black/5 group-hover:bg-black/50 transition-colors duration-500" />
            </div>

            {/* Hover Content - Compacted padding */}
            <div className="absolute inset-0 p-5 flex flex-col justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10">
              <div className="flex justify-between items-start">
                <span className="text-white/80 text-[9px] uppercase tracking-widest">{item.category}</span>
                <motion.button 
                  whileHover={{ rotate: 90 }}
                  className="bg-white/90 p-2 rounded-full text-[#004643]"
                >
                  <Plus size={16} />
                </motion.button>
              </div>

              <div className="text-white space-y-1">
                <h3 className="text-lg font-serif italic leading-tight">{item.name}</h3>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-light">{item.price}</span>
                  <button className="flex items-center gap-1 text-[9px] font-bold uppercase tracking-widest border-b border-[#D4AF37] pb-0.5">
                    View <ArrowUpRight size={12} />
                  </button>
                </div>
              </div>
            </div>

            {/* Static Info (Small Tag) */}
            <div className="absolute bottom-3 left-3 group-hover:opacity-0 transition-opacity duration-300">
               <span className="text-[#004643] text-[10px] font-serif bg-white/90 px-2 py-0.5 shadow-sm uppercase tracking-tighter">
                 {item.name}
               </span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Bottom CTA - Scaled down button padding */}
      <div className="mt-10 flex justify-center">
        <button className="group relative px-8 py-4 bg-[#004643] text-white overflow-hidden text-[10px] font-bold uppercase tracking-[0.4em]">
          <span className="relative z-10">Explore All</span>
          <div className="absolute inset-0 bg-[#D4AF37] translate-y-[101%] group-hover:translate-y-0 transition-transform duration-500 ease-out" />
        </button>
      </div>
    </div>
  );
};

export default NewArrivals;