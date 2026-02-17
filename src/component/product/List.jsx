import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Watch, Gem, ToyBrick, Gift, Trophy, Plus, ShoppingBag } from 'lucide-react';

const storeItems = [
  { 
    id: 1, name: "Horology", sub: "Elite Watches", icon: <Watch size={24} />, 
    img: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=800",
    gallery: [
      "https://images.unsplash.com/photo-1542496658-e33a6d0d50f6?q=80&w=400",
      "https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?q=80&w=400",
      "https://images.unsplash.com/photo-1614164185128-e4ec99c436d7?q=80&w=400"
    ]
  },
  { 
    id: 2, name: "Adorn", sub: "Fine Jewelry", icon: <Gem size={24} />, 
    img: "https://i.pinimg.com/736x/17/8f/0d/178f0daa7a42ddaba8a1dcb2a929dca9.jpg",
    gallery: [
      "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=400",
      "https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=400",
      "https://images.unsplash.com/photo-1602173574767-37ac01994b2a?q=80&w=400"
    ]
  },
  { 
    id: 3, name: "Play", sub: "Premium Toys", icon: <ToyBrick size={24} />, 
    img: "https://i.pinimg.com/736x/55/36/9e/55369e1ff3be12a9d3d0d8142e438a1a.jpg",
    gallery: [
      "https://images.unsplash.com/photo-1558060370-d644479cb6f7?q=80&w=400",
      "/35932d425845ff5d408db4e719b01a8b-removebg-preview.png",
      "https://images.unsplash.com/photo-1585366119957-e9730b6d0f60?q=80&w=400"
    ]
  },
  { 
    id: 4, name: "Legacy", sub: "Curated Gifts", icon: <Gift size={24} />, 
    img: "https://i.pinimg.com/1200x/4e/e8/2c/4ee82c79028b475bb3e2b91d0a6042f7.jpg",
    gallery: [
      "https://i.pinimg.com/736x/49/98/2e/49982e72dd200de834ceadcf7119107f.jpg",
      "https://i.pinimg.com/736x/5b/00/b0/5b00b06511c571fab0931b499725ab61.jpg",
      "https://i.pinimg.com/736x/9a/0f/5c/9a0f5c8bf4c72608317c51dd06229d6f.jpg"
    ]
  },
  { 
    id: 5, name: "Arena", sub: "Sports Tech", icon: <Trophy size={24} />, 
    img: "https://i.pinimg.com/736x/38/3c/60/383c60cbf78a6321c6a3668e61d4119f.jpg",
    gallery: [
      "https://i.pinimg.com/736x/49/98/2e/49982e72dd200de834ceadcf7119107f.jpg",
      "https://i.pinimg.com/1200x/ce/c9/bf/cec9bf74a672078d00672135b2c4d9d1.jpg",
      "/short.png"
    ]
  },
];

const RSMartShowcase = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const gold = "#D4AF37";
  const bgWhite = "#FFFFFF";
  const textDark = "#1A1A1A";

  return (
    <div className="h-screen w-full flex flex-col overflow-hidden select-none font-sans" style={{ backgroundColor: bgWhite, color: textDark }}>
      
      

 
      <div className="flex-1 flex flex-col md:flex-row items-stretch pt-16 md:pt-20 pb-8 md:pb-12">
        {storeItems.map((item, index) => {
          const isHovered = hoveredIndex === index;
          const isAnythingHovered = hoveredIndex !== null;

          return (
            <motion.div
              key={item.id}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              onClick={() => isMobile && setHoveredIndex(isHovered ? null : index)}
              animate={{
                flex: isHovered ? (isMobile ? 8 : 4) : 1,
                filter: isAnythingHovered && !isHovered ? "blur(8px) brightness(0.8) grayscale(1)" : "blur(0px) brightness(1) grayscale(0)"
              }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="relative overflow-hidden cursor-pointer border-b md:border-b-0 md:border-r border-black/5 group"
            >
              <motion.div className="absolute inset-0">
                <motion.img 
                  src={item.img} 
                  animate={{ scale: isHovered ? 1.05 : 1.15, opacity: isHovered ? 0.8 : 0.9 }}
                  transition={{ duration: 1.5 }}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white/90 via-transparent to-transparent" />
              </motion.div>

              <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-20">
                <AnimatePresence>
                  {isHovered && (
                    <motion.div 
                      className="flex gap-2 md:gap-6 px-4 md:px-6 w-full max-w-6xl justify-center items-center overflow-hidden"
                    >
                      {item.gallery.map((url, gIndex) => (
                        <motion.div
                          key={gIndex}
                          initial={{ opacity: 0, scale: 0.8, y: 30 }}
                          animate={{ 
                            opacity: 1, scale: 1, y: 0,
                            transition: { delay: 0.1 + (gIndex * 0.1), type: "spring", stiffness: 120 }
                          }}
                          exit={{ opacity: 0, scale: 0.8, y: 20, transition: { duration: 0.2 } }}
                          className="relative w-16 h-24 md:w-48 md:h-64 rounded-lg md:rounded-xl overflow-hidden border border-black/10 shadow-xl pointer-events-auto group/item"
                        >
                          <img src={url} className="w-full h-full object-cover transition-transform duration-700 md:group-hover/item:scale-110" alt="RS Mart Product" />
                        </motion.div>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {!isMobile && (
                <AnimatePresence>
                  {!isHovered && (
                    <motion.div exit={{ opacity: 0 }} className="absolute inset-0 flex items-center justify-center pointer-events-none">
                      <span className="rotate-90 text-[10px] font-black tracking-[1em] uppercase opacity-20 whitespace-nowrap" style={{ color: textDark }}>
                        {item.name}
                      </span>
                    </motion.div>
                  )}
                </AnimatePresence>
              )}

              <div className="relative h-full w-full p-4 md:p-12 flex flex-col justify-between z-30">
                <motion.div 
                  animate={{ 
                    rotate: isHovered ? 90 : 0,
                    backgroundColor: isHovered ? gold : "rgba(0,0,0,0.05)"
                  }}
                  className="w-8 h-8 md:w-14 md:h-14 rounded-xl md:rounded-2xl flex items-center justify-center border border-black/5 backdrop-blur-xl"
                >
                  <Plus size={isMobile ? 18 : 24} className={isHovered ? "text-white" : "text-[#D4AF37]"} />
                </motion.div>

                <div className="flex flex-col items-start">
                  <motion.div animate={{ opacity: isHovered ? 1 : 0, x: isHovered ? 0 : -10 }} className="flex items-center gap-2 mb-1 md:mb-2">
                    <span className="text-[8px] md:text-[10px] font-bold uppercase tracking-widest text-black/40">{item.sub}</span>
                  </motion.div>
                  
                  <h3 className="text-xl md:text-7xl font-black uppercase italic tracking-tighter leading-none mb-2 md:mb-4" style={{ color: textDark }}>
                    {item.name}
                  </h3>
                  
                  <motion.div 
                    animate={{ width: isHovered ? "100%" : "30px" }} 
                    className="h-0.5 md:h-2 rounded-full" 
                    style={{ backgroundColor: gold }} 
                  />
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      <footer className="h-12 md:h-24 border-t border-black/5 flex items-center justify-between px-6 md:px-12 bg-white/40 backdrop-blur-2xl z-50">
        <div className="hidden md:flex gap-8 items-center text-[9px] font-black uppercase tracking-widest opacity-40" style={{ color: textDark }}>
            <span className="hover:opacity-100 cursor-pointer">Quality</span>
            <span className="hover:opacity-100 cursor-pointer">Global</span>
            <span className="hover:opacity-100 cursor-pointer">Support</span>
        </div>

        <div className="flex-1 flex justify-center">
            <span className="text-[7px] md:text-[9px] font-black uppercase tracking-[0.3em] md:tracking-[0.5em] text-[#D4AF37] text-center">
                © RS MART 2026 — EXCELLENCE IN EVERY DETAIL
            </span>
        </div>

        <div className="hidden md:flex items-center gap-4">
            <span className="text-[10px] font-black uppercase opacity-60" style={{ color: textDark }}>Join the Elite</span>
        </div>
      </footer>
    </div>
  );
};


export default RSMartShowcase;


