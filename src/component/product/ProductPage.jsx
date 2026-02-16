import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Added Link
import { motion, AnimatePresence, LayoutGroup } from 'framer-motion';
import { 
  ShoppingBag, SlidersHorizontal, ChevronRight, 
  Watch, Gem, Gift, Dumbbell, Baby, LayoutGrid, ArrowUpRight
} from 'lucide-react';

const RSCollectionMaster = ({ type = "all" }) => {
  const activeTab = type;
  const [hoveredId, setHoveredId] = useState(null);

  const menuItems = [
    { id: 'all', name: "All", icon: <LayoutGrid size={18}/>, path: "/collection" },
    { id: 'watches', name: "Watches", icon: <Watch size={18}/>, path: "/watch" },
    { id: 'jewelry', name: "Jewelry", icon: <Gem size={18}/>, path: "/gold" },
    { id: 'sports', name: "Sports", icon: <Dumbbell size={18}/>, path: "/sports" },
    { id: 'toys', name: "Toys", icon: <Baby size={18}/>, path: "/toys" },
  ];

  const pageConfig = {
    all: { title: "The Master", subtitle: "Complete Archive", desc: "Every masterpiece curated by RS Mart, in one singular view." },
    watches: { title: "Horology", subtitle: "Watch Archive", desc: "Precision meeting Pusad heritage." },
    jewelry: { title: "Jewels", subtitle: "Fine Jewelry", desc: "24k Gold and Rare Stones." },
    sports: { title: "Active", subtitle: "Luxury Sport", desc: "High-performance elegance." },
    toys: { title: "Elite", subtitle: "Curated Toys", desc: "Handcrafted wooden treasures." },
    gifts: { title: "Gallery", subtitle: "The Gift Box", desc: "Silk-wrapped memories." }
  };

  const allProducts = [
    { id: 1, cat: 'watches', path: '/watch', name: "Signature Chrono", price: "₹24,500", tag: "Exclusive", img: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=500" },
    { id: 2, cat: 'jewelry', path: '/gold', name: "Heritage Gold Band", price: "₹12,200", tag: "Limited", img: "https://i.pinimg.com/736x/f3/ec/a5/f3eca562b04654e8599bd12f5af416ae.jpg" },
    { id: 3, cat: 'sports', path: '/sports', name: "Velocity Trainer", price: "₹8,500", tag: "New", img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=500" },
    { id: 4, cat: 'toys', path: '/toys', name: "Wooden Heirloom", price: "₹4,500", tag: "Handmade", img: "https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?q=80&w=500" },
    { id: 5, cat: 'watches', path: '/watch', name: "Pusad Edition", price: "₹45,000", tag: "Rare", img: "https://i.pinimg.com/736x/ad/51/ff/ad51ff93aa7fa8fd2c598af9475ab2d4.jpg" },
    { id: 6, cat: 'gifts', path: '/gifts', name: "Silk Gift Set", price: "₹3,200", tag: "Popular", img: "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?q=80&w=500" },
  ];

  const filteredProducts = activeTab === 'all' 
    ? allProducts 
    : allProducts.filter(p => p.cat === activeTab || (activeTab === 'sportswear' && p.cat === 'sports'));

  const current = pageConfig[activeTab] || pageConfig.all;

  return (
    <div className="bg-[#FAFAFA] min-h-screen font-sans text-[#004643]">
      <nav className="w-full bg-white border-b border-[#004643]/5 sticky top-0 z-40 shadow-sm scrollbar-hide">
        <LayoutGroup>
          <div className="flex items-center justify-start md:justify-center gap-6 md:gap-12 px-4 md:px-8 py-5 md:py-8 overflow-x-auto no-scrollbar scroll-smooth">
            {menuItems.map((item) => {
              const isActive = activeTab === item.id;
              return (
                <Link // Changed from <a>
                  key={item.id} 
                  to={item.path} // Changed from href
                  className={`relative flex flex-col items-center gap-2 md:gap-3 text-[9px] md:text-[12px] uppercase tracking-[0.2em] md:tracking-[0.25em] font-black flex-shrink-0 transition-all duration-500 ${isActive ? "text-[#D4AF37]" : "opacity-30 hover:opacity-100"}`}
                >
                  <div className={`${isActive ? "scale-110" : "scale-100"} transition-transform`}>
                    {item.icon}
                  </div>
                  <span>{item.name}</span>
                  {isActive && (
                    <motion.div 
                      layoutId="activeTabUnderline"
                      className="absolute -bottom-[21px] md:-bottom-[33px] w-full h-[2px] md:h-[3px] bg-[#D4AF37]"
                    />
                  )}
                </Link>
              );
            })}
          </div>
        </LayoutGroup>
      </nav>

      <header className="py-12 md:py-24 px-6 text-center max-w-5xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-4">
          <span className="text-[#D4AF37] text-[10px] md:text-[12px] font-black uppercase tracking-[0.5em] block">{current.subtitle}</span>
          <h1 className="text-5xl md:text-8xl lg:text-9xl font-serif tracking-tighter leading-none">{current.title}<span className="italic font-light text-[#D4AF37]">.</span></h1>
          <p className="text-[13px] md:text-lg max-w-md mx-auto opacity-60 font-light italic leading-relaxed">{current.desc}</p>
        </motion.div>
      </header>

      <main className="px-4 md:px-12 lg:px-24 pb-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-10 max-w-[1600px] mx-auto">
          {filteredProducts.map((p) => (
            <Link // Changed from <a>
              to={p.path} // Changed from href
              key={p.id}
              onMouseEnter={() => setHoveredId(p.id)}
              onMouseLeave={() => setHoveredId(null)}
              className="group flex flex-col"
            >
              <div className="relative aspect-[4/5] bg-white overflow-hidden rounded-sm border border-[#004643]/5 shadow-sm">
                 <img 
                    src={p.img} 
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                    alt={p.name}
                 />
                 <div className="absolute inset-0 bg-[#004643]/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <div className="bg-white p-4 rounded-full scale-50 group-hover:scale-100 transition-transform duration-500 shadow-2xl">
                        <ArrowUpRight size={24} className="text-[#004643]" />
                    </div>
                 </div>
                 <div className="absolute top-4 left-4 flex flex-col gap-2">
                   <span className="bg-white/90 backdrop-blur-sm px-3 py-1 text-[9px] font-black uppercase tracking-widest text-[#004643]">{p.tag}</span>
                   {activeTab === 'all' && (
                      <span className="bg-[#004643] text-white px-3 py-1 text-[8px] font-bold uppercase tracking-widest self-start">{p.cat}</span>
                   )}
                 </div>
                 <div className="absolute inset-x-0 bottom-0 p-4 opacity-0 group-hover:opacity-100 transition-all translate-y-4 group-hover:translate-y-0 hidden md:block">
                   <div className="w-full bg-[#004643] text-white py-4 text-[10px] font-black uppercase tracking-[0.2em] flex items-center justify-center gap-2">
                     Explore Collection
                   </div>
                 </div>
              </div>
              <div className="pt-5 pb-2 space-y-1">
                <div className="flex justify-between items-baseline">
                  <h3 className="text-lg md:text-xl font-serif tracking-tight">{p.name}</h3>
                  <p className="text-sm font-light opacity-80">{p.price}</p>
                </div>
                <p className="text-[11px] uppercase tracking-widest opacity-40 font-bold">Discover More <ChevronRight size={10} className="inline ml-1" /></p>
              </div>
            </Link>
          ))}
        </div>
      </main>

      <style dangerouslySetInnerHTML={{ __html: `
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}} />
    </div>
  );
};

export default RSCollectionMaster;