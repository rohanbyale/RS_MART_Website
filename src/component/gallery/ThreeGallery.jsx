import React, { useState, useRef, useEffect } from 'react';
import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from 'framer-motion';
import { ShoppingBag, Star, Play, Pause, ArrowRight, ShieldCheck, X } from 'lucide-react';

const Aether3DOrbit = () => {
  const [hoveredID, setHoveredID] = useState(null);
  const [selectedID, setSelectedID] = useState(null); // New state for stability
  const [isPaused, setIsPaused] = useState(false);
  const [radius, setRadius] = useState(420);
  const containerRef = useRef(null);

  // Determine which item to display in the UI panel
  const activeID = selectedID || hoveredID;

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const smoothMouseX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const smoothMouseY = useSpring(mouseY, { stiffness: 50, damping: 20 });

  const rotateX = useTransform(smoothMouseY, [-500, 500], [10, -10]);
  const rotateY = useTransform(smoothMouseX, [-500, 500], [-15, 15]);
  
  const autoRotate = useMotionValue(0);
  const smoothAutoRotate = useSpring(autoRotate, { stiffness: 30, damping: 25 });

  useEffect(() => {
    const handleResize = () => {
      const w = window.innerWidth;
      if (w < 640) setRadius(180);
      else if (w < 1024) setRadius(300);
      else setRadius(420);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    
    let frame;
    const animate = () => {
      if (!isPaused) autoRotate.set(autoRotate.get() + 0.25);
      frame = requestAnimationFrame(animate);
    };
    frame = requestAnimationFrame(animate);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('resize', handleResize);
    };
  }, [isPaused, autoRotate]);

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left - rect.width / 2);
    mouseY.set(e.clientY - rect.top - rect.height / 2);
  };

  const giftItems = [
    { id: 1, name: "Royal Gold Leaf", price: "₹2,400", img: "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?w=800", baseAngle: 0 },
    { id: 2, name: "Emerald Velvet", price: "₹3,100", img: "https://images.unsplash.com/photo-1513201099705-a9746e1e201f?w=800", baseAngle: 60 },
    { id: 3, name: "Crimson Silk", price: "₹1,800", img: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800", baseAngle: 120 },
    { id: 4, name: "Arctic Pearl", price: "₹4,500", img: "https://images.unsplash.com/photo-1576426863848-c21f53c60b19?w=800", baseAngle: 180 },
    { id: 5, name: "Midnight Onyx", price: "₹5,200", img: "https://images.unsplash.com/photo-1544441893-675973e31985?w=800", baseAngle: 240 },
    { id: 6, name: "Azure Sapphire", price: "₹2,900", img: "https://images.unsplash.com/photo-1520006403909-838d6b92c22e?w=800", baseAngle: 300 },
  ];

  return (
    <section 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onClick={() => setSelectedID(null)} // Click background to deselect
      className="relative w-full h-screen bg-[#FBF9F4] flex items-center justify-center overflow-hidden touch-none"
      style={{ perspective: "2000px" }} 
    >
      {/* BACKGROUND TEXT */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
        <motion.h2 
          style={{ x: useTransform(smoothMouseX, [-500, 500], [50, -50]) }}
          className="text-[18vw] font-serif text-black/[0.02] whitespace-nowrap select-none"
        >
          {activeID ? giftItems.find(i => i.id === activeID).name.toUpperCase() : "RS MART LUXURY"}
        </motion.h2>
      </div>

      {/* 3D ORBIT */}
      <motion.div 
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className="relative w-full h-full flex items-center justify-center pointer-events-none"
      >
        <div className="relative" style={{ transformStyle: "preserve-3d" }}>
          {giftItems.map((item) => (
            <OrbitCard 
              key={item.id} 
              item={item} 
              radius={radius}
              rotation={smoothAutoRotate}
              isActive={activeID === item.id}
              isSelected={selectedID === item.id}
              onClick={(e) => {
                e.stopPropagation(); // Prevents background click from firing
                setSelectedID(item.id);
                setIsPaused(true);
              }}
              onHover={() => setHoveredID(item.id)}
              onLeave={() => setHoveredID(null)}
            />
          ))}
        </div>
      </motion.div>

      {/* OVERLAY UI */}
      <div className="absolute inset-0 pointer-events-none flex flex-col justify-between p-6 sm:p-12 z-[100]">
        <div className="flex justify-between items-start">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-1">
            <p className="text-[#D4AF37] text-[10px] font-black tracking-[0.6em] uppercase">Est. 2024</p>
            <h1 className="text-black text-4xl sm:text-5xl font-serif">Aether <span className="italic font-light">Edition</span></h1>
          </motion.div>

          <button 
            onClick={(e) => { e.stopPropagation(); setIsPaused(!isPaused); }}
            className="pointer-events-auto w-14 h-14 rounded-full border border-black/5 bg-white shadow-xl flex items-center justify-center transition-all active:scale-90"
          >
            {isPaused ? <Play size={18} fill="black" /> : <Pause size={18} fill="black" />}
          </button>
        </div>

        {/* STABLE PRODUCT PANEL */}
        <div className="flex justify-between items-end">
          <AnimatePresence mode="wait">
            {activeID && (
              <motion.div 
                key={activeID}
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 30, scale: 0.95 }}
                className="bg-white/90 backdrop-blur-2xl p-8 rounded-[2.5rem] shadow-[0_40px_80px_-20px_rgba(0,0,0,0.15)] border border-black/[0.03] w-full max-w-[380px] pointer-events-auto relative"
              >
                {selectedID && (
                    <button onClick={() => setSelectedID(null)} className="absolute top-6 right-6 text-black/20 hover:text-black transition-colors">
                        <X size={20} />
                    </button>
                )}
                
                <div className="flex items-center gap-2 mb-4 text-[#D4AF37]">
                  <ShieldCheck size={14} />
                  <span className="text-[10px] font-bold uppercase tracking-widest">Available Now</span>
                </div>
                
                <h3 className="text-black text-3xl font-serif mb-1">{giftItems.find(g => g.id === activeID).name}</h3>
                <p className="text-[#D4AF37] font-bold text-lg mb-4">{giftItems.find(g => g.id === activeID).price}</p>
                
                <button className="w-full py-4 bg-black text-white rounded-2xl text-[10px] font-bold uppercase tracking-[0.2em] flex items-center justify-center gap-4 group/btn hover:bg-[#D4AF37] transition-all">
                    Add to Bag <ShoppingBag size={14} />
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

const OrbitCard = ({ item, radius, rotation, isActive, isSelected, onClick, onHover, onLeave }) => {
  const angle = useTransform(rotation, (r) => (r + item.baseAngle) * (Math.PI / 180));
  const x = useTransform(angle, (a) => Math.cos(a) * radius);
  const z = useTransform(angle, (a) => Math.sin(a) * radius);
  const opacity = useTransform(z, [-radius, radius], [0.2, 1]);
  const scale = useTransform(z, [-radius, radius], [0.7, 1.1]);

  return (
    <motion.div
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      onClick={onClick}
      style={{
        position: 'absolute',
        width: '220px', height: '320px',
        x, z, opacity, scale,
        transformStyle: "preserve-3d",
        pointerEvents: "auto"
      }}
      className="group -ml-[110px] -mt-[160px] cursor-pointer"
    >
      <motion.div 
        animate={{ 
            y: isActive ? -20 : 0,
            rotateY: isActive ? 15 : 0,
            scale: isSelected ? 1.05 : 1,
            borderColor: isSelected ? "#D4AF37" : "rgba(0,0,0,0.05)"
        }}
        className={`w-full h-full relative overflow-hidden bg-white rounded-[2.5rem] border-2 transition-colors duration-500`}
        style={{ transformStyle: "preserve-3d" }}
      >
        <div className="absolute inset-0">
            <img src={item.img} alt={item.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-80" />
        </div>

        <div className="absolute bottom-0 left-0 w-full p-8 z-10">
          <p className="text-white/70 text-[8px] font-bold uppercase tracking-[0.3em] mb-1">Signature</p>
          <h4 className="text-white font-serif text-xl tracking-tight">{item.name}</h4>
        </div>

        {isSelected && (
            <div className="absolute top-6 right-6 bg-[#D4AF37] p-2 rounded-full shadow-lg">
                <Star size={12} fill="white" className="text-white" />
            </div>
        )}
      </motion.div>
    </motion.div>
  );
};

export default Aether3DOrbit;