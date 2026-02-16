import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { LayoutGrid, Gift, Sparkles, Heart, Briefcase } from 'lucide-react';

const GalleryCategories = () => {
  const [filter, setFilter] = useState('all');

  const categories = [
    { id: 'all', label: 'All Works', icon: <LayoutGrid size={14} /> },
    { id: 'bridal', label: 'Bridal Series', icon: <Heart size={14} /> },
    { id: 'corporate', label: 'Corporate Luxury', icon: <Briefcase size={14} /> },
    { id: 'seasonal', label: 'Seasonal', icon: <Sparkles size={14} /> },
    { id: 'bespoke', label: 'Bespoke', icon: <Gift size={14} /> },
  ];

  const items = [
    { id: 1, category: 'bridal', title: 'The Royal Trousseau', url: 'https://i.pinimg.com/1200x/fc/78/96/fc7896aa22a7531195729e08d7c764a5.jpg' },
    { id: 2, category: 'corporate', title: 'Executive Suite', url: 'https://images.unsplash.com/photo-1523293182086-7651a899d37f' },
    { id: 3, category: 'seasonal', title: 'Winter Bloom', url: 'https://i.pinimg.com/736x/43/f6/84/43f684f29e7376ed2c7f5d033fe728b1.jpg' },
    { id: 4, category: 'bespoke', title: 'Personalized Silk', url: 'https://images.unsplash.com/photo-1549465220-1a8b9238cd48' },
    { id: 5, category: 'bridal', title: 'Velvet Heritage', url: 'https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8' },
    { id: 6, category: 'corporate', title: 'Artisan Stationary', url: 'https://images.unsplash.com/photo-1484981138541-3d074aa97716' },
  ];

  const filteredItems = filter === 'all' ? items : items.filter(i => i.category === filter);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* --- 1. THE FILTER TABS --- */}
        <div className="flex flex-wrap justify-center items-center gap-3 mb-16">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilter(cat.id)}
              className={`relative flex items-center gap-2 px-6 py-3 rounded-full text-[11px] font-black uppercase tracking-[0.2em] transition-all duration-300 ${
                filter === cat.id ? 'text-white' : 'text-stone-400 hover:text-[#004643]'
              }`}
            >
              <span className="relative z-10 flex items-center gap-2">
                {cat.icon} {cat.label}
              </span>
              {filter === cat.id && (
                <motion.div 
                  layoutId="activeTab"
                  className="absolute inset-0 bg-[#004643] rounded-full shadow-lg shadow-[#004643]/20"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
            </button>
          ))}
        </div>

        {/* --- 2. THE LIQUID GRID --- */}
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="group relative h-[450px] overflow-hidden rounded-[2.5rem] bg-stone-50"
              >
                {/* Image */}
                <img 
                  src={`${item.url}?auto=format&fit=crop&q=80&w=800`} 
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Glass Tag */}
                <div className="absolute top-6 left-6 px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full">
                  <span className="text-white text-[9px] font-bold uppercase tracking-widest">{item.category}</span>
                </div>

                {/* Content Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#004643] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-10">
                  <motion.div
                    initial={{ y: 20 }}
                    whileInView={{ y: 0 }}
                    className="flex flex-col gap-2"
                  >
                    <h3 className="text-white text-2xl font-serif">{item.title}</h3>
                    <div className="flex items-center gap-2 text-[#D4AF37] text-[10px] font-bold uppercase tracking-widest">
                      <span>View Project</span>
                      <div className="w-8 h-[1px] bg-[#D4AF37]" />
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty State */}
        {filteredItems.length === 0 && (
          <div className="py-20 text-center">
            <p className="text-stone-400 font-serif italic text-2xl">Coming soon to the collection...</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default GalleryCategories;