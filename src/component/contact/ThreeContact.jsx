import React, { useState, useRef, useEffect } from 'react';
import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from 'framer-motion';
import { Gift, Heart, Info, Phone, Image, Tag } from 'lucide-react';

const HyperKineticCube = () => {
  const [activeFace, setActiveFace] = useState('Products');
  const [showInfo, setShowInfo] = useState(false);
  const [selectedFace, setSelectedFace] = useState(null);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef(null);
  const dragStartPos = useRef({ x: 0, y: 0 });

  // 1. Physical Drag Values
  const dragX = useMotionValue(0);
  const dragY = useMotionValue(0);

  // 2. Persistent Rotation Logic 
  const lastRotationX = useRef(0);
  const lastRotationY = useRef(0);
  
  // Using useSpring for that "heavy" high-end feel
  const springConfig = { stiffness: 80, damping: 25, mass: 1 };
  const rotateX = useSpring(0, springConfig);
  const rotateY = useSpring(0, springConfig);

  // 3. Update rotation based on drag movement
  useEffect(() => {
    const updateRotation = () => {
      // 0.5 sensitivity factor
      rotateX.set(lastRotationX.current + (dragY.get() * -0.5));
      rotateY.set(lastRotationY.current + (dragX.get() * 0.5));
    };

    const unsubX = dragX.on("change", updateRotation);
    const unsubY = dragY.on("change", updateRotation);
    return () => {
      unsubX();
      unsubY();
    };
  }, [dragX, dragY, rotateX, rotateY]);

  const handleDragStart = (event) => {
    setIsDragging(false);
    dragStartPos.current = {
      x: event.clientX || (event.touches && event.touches[0] ? event.touches[0].clientX : 0),
      y: event.clientY || (event.touches && event.touches[0] ? event.touches[0].clientY : 0)
    };
  };

  const handleDrag = (event, info) => {
    // If moved more than 5 pixels, it's a drag
    const deltaX = Math.abs(info.point.x - dragStartPos.current.x);
    const deltaY = Math.abs(info.point.y - dragStartPos.current.y);
    
    if (deltaX > 5 || deltaY > 5) {
      setIsDragging(true);
    }
  };

  const handleDragEnd = () => {
    // Commit the current position to the baseline
    lastRotationX.current += dragY.get() * -0.5;
    lastRotationY.current += dragX.get() * 0.5;
    
    // Reset drag offsets so the next pull starts from 0
    dragX.set(0);
    dragY.set(0);
    
    // Reset dragging state after a short delay
    setTimeout(() => {
      setIsDragging(false);
    }, 100);
  };

  const nebulaScale = useSpring(useTransform(dragX, [-300, 300], [1.2, 0.8]), springConfig);
  const bgSkew = useTransform(dragX, [-500, 500], [-10, 10]);

  // RS MART GIFT SHOP FACES DATA - UPDATED COLORS (GOLD/GREEN/WHITE)
  const cubeFaces = [
    { 
      name: 'Products', 
      icon: <Gift />, 
      pos: 'rotateY(0deg) translateZ(180px)', 
      color: '#D4AF37', // Gold
      title: 'Our Products',
      description: 'Premium gifts for every occasion',
      details: [
        '🎁 Birthday Gift Collections',
        '💝 Wedding & Anniversary Gifts',
        '🎊 Festival Special Items',
        '🏆 Corporate Gifts & Trophies',
        '🎨 Personalized Custom Gifts',
        '🧸 Toys & Kids Items',
        '🌸 Home Decor & Accessories'
      ]
    },
    { 
      name: 'Services', 
      icon: <Heart />, 
      pos: 'rotateY(90deg) translateZ(180px)', 
      color: '#10b981', // Emerald Green
      title: 'Our Services',
      description: 'Making your moments special',
      details: [
        '🎀 Free Gift Wrapping',
        '✨ Custom Personalization',
        '🚚 Home Delivery Available',
        '💳 Easy Payment Options',
        '🎨 Gift Consultation Service',
        '📦 Bulk Order Discounts',
        '🔄 Easy Return & Exchange'
      ]
    },
    { 
      name: 'About', 
      icon: <Info />, 
      pos: 'rotateY(180deg) translateZ(180px)', 
      color: '#FFFFFF', // White
      title: 'About RS Mart',
      description: 'Your trusted gift partner in Pusad',
      details: [
        '🏪 Established Gift Store in Pusad',
        '⭐ 1000+ Happy Customers',
        '🎯 Quality Assured Products',
        '💎 Premium Brand Collections',
        '👥 Expert Gift Advisors',
        '🌟 Best Prices Guaranteed',
        '❤️ Customer Satisfaction First'
      ]
    },
    { 
      name: 'Contact', 
      icon: <Phone />, 
      pos: 'rotateY(-90deg) translateZ(180px)', 
      color: '#D4AF37', // Gold
      title: 'Contact Us',
      description: 'Get in touch with RS Mart Pusad',
      details: [
        '📍 Location: Pusad, Maharashtra',
        '📞 Phone: +91 XXXXX XXXXX',
        '📧 Email: rsmart@example.com',
        '🕒 Mon-Sat: 10 AM - 9 PM',
        '🕒 Sunday: 10 AM - 8 PM',
        '💬 WhatsApp Orders Available',
        '🗺️ Easy to Locate on Main Road'
      ]
    },
    { 
      name: 'Gallery', 
      icon: <Image />, 
      pos: 'rotateX(90deg) translateZ(180px)', 
      color: '#10b981', // Emerald Green
      title: 'Gift Gallery',
      description: 'Browse our stunning collections',
      details: [
        '📸 500+ Gift Items in Stock',
        '🎁 Latest Trending Designs',
        '💐 Seasonal Collections',
        '🎪 Festival Special Range',
        '🎨 Handcrafted Items',
        '✨ Luxury Gift Sets',
        '🎀 Ready-to-Gift Packaging'
      ]
    },
    { 
      name: 'Offers', 
      icon: <Tag />, 
      pos: 'rotateX(-90deg) translateZ(180px)', 
      color: '#FFFFFF', // White
      title: 'Special Offers',
      description: 'Amazing deals & discounts',
      details: [
        '🎉 Flat 20% Off on Bulk Orders',
        '💝 Buy 2 Get 1 Free Offer',
        '🎊 Festival Mega Sale',
        '🎁 Free Gift on Orders Above ₹999',
        '💳 Cashback on Online Payment',
        '🎈 Birthday Special Discounts',
        '⭐ Loyalty Rewards Program'
      ]
    },
  ];

  const handleFaceClick = (face, event) => {
    // Only trigger click if not dragging
    if (!isDragging) {
      event.stopPropagation();
      setSelectedFace(face);
      setShowInfo(true);
    }
  };

  return (
    <div 
      ref={containerRef}
      className="relative w-full h-screen bg-[#020d08] overflow-hidden flex items-center justify-center text-white cursor-grab active:cursor-grabbing selection:bg-none"
      style={{ perspective: "2000px" }}
    >
      {/* 1. DYNAMIC DISTORTION GRID - UPDATED TO EMERALD/GOLD */}
      <motion.div 
        style={{ scale: nebulaScale, skewX: bgSkew }}
        className="absolute inset-0 opacity-20 pointer-events-none"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#10b981_0%,_transparent_70%)] opacity-10" />
        <div className="absolute inset-0" style={{ 
          backgroundImage: `linear-gradient(#D4AF3710 2px, transparent 2px), linear-gradient(90deg, #D4AF3710 2px, transparent 2px)`,
          backgroundSize: '80px 80px'
        }} />
      </motion.div>

      {/* 2. THE DRAGGABLE CORE */}
      <motion.div
        drag
        dragConstraints={containerRef}
        dragElastic={0}
        dragMomentum={false}
        onDragStart={handleDragStart}
        onDrag={handleDrag}
        onDragEnd={handleDragEnd}
        style={{ 
          x: dragX, 
          y: dragY, 
          rotateX, 
          rotateY, 
          transformStyle: "preserve-3d" 
        }}
        className="relative w-[280px] h-[280px] sm:w-[340px] sm:h-[340px] cube-scaling"
      >
        {/* LIGHT CORE UPDATED TO GREEN/GOLD */}
        <motion.div 
          animate={{ scale: [1, 1.1, 1], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 3, repeat: Infinity }}
          className="absolute inset-0 bg-gradient-to-tr from-[#10b981] to-[#D4AF37] rounded-full blur-[80px] sm:blur-[120px] -z-10" 
        />

        {cubeFaces.map((face, i) => (
          <motion.div
            key={i}
            onMouseEnter={() => setActiveFace(face.name)}
            onPointerDown={(e) => {
              e.stopPropagation();
            }}
            onPointerUp={(e) => {
              handleFaceClick(face, e);
            }}
            style={{ 
              transform: face.pos, 
              transformStyle: "preserve-3d",
              backfaceVisibility: 'visible',
            }}
            className="absolute inset-0 border border-[#D4AF37]/20 bg-[#020d08]/90 backdrop-blur-xl flex flex-col items-center justify-center p-6 sm:p-10 group shadow-[inset_0_0_50px_rgba(16,185,129,0.05)] hover:border-[#D4AF37]/60 transition-all cursor-pointer select-none"
          >
            <div className="absolute top-4 left-6 font-mono text-[8px] text-[#D4AF37] opacity-60">
              RS.MART_{face.name.toUpperCase()} // 0{i+1}
            </div>

            <motion.div 
              style={{ transform: "translateZ(120px)", color: face.color }}
              className="drop-shadow-[0_0_20px_rgba(255,255,255,0.2)] group-hover:scale-110 transition-transform pointer-events-none"
            >
              {React.cloneElement(face.icon, { size: 50, strokeWidth: 1, className: "sm:w-[70px] sm:h-[70px]" })}
            </motion.div>

            <motion.h3 
              style={{ transform: "translateZ(60px)" }}
              className="text-xl sm:text-3xl font-thin tracking-[0.3em] uppercase mt-4 sm:mt-6 group-hover:text-[#D4AF37] transition-colors pointer-events-none text-white"
            >
              {face.name}
            </motion.h3>

            <motion.p
              style={{ transform: "translateZ(40px)" }}
              className="text-[10px] sm:text-xs text-white/50 mt-2 text-center font-light tracking-wider pointer-events-none hidden sm:block"
            >
              {face.description}
            </motion.p>

            <motion.div
              style={{ transform: "translateZ(30px)" }}
              className="absolute bottom-4 sm:bottom-6 text-[8px] sm:text-[10px] text-[#10b981] font-bold opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
            >
              ▸ CLICK TO EXPLORE
            </motion.div>

            <motion.div 
              animate={{ top: ['0%', '100%', '0%'] }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              className="absolute left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#10b981]/40 to-transparent opacity-20 pointer-events-none"
            />
          </motion.div>
        ))}
      </motion.div>

      {/* 3. AUGMENTED HUD */}
      <div className="absolute inset-0 pointer-events-none p-6 sm:p-12 flex flex-col justify-between overflow-hidden">
        <div className="flex justify-between items-start">
          <div className="space-y-1 sm:space-y-2">
            <h1 className="text-xl sm:text-3xl font-black italic tracking-tighter text-white">RS.MART <span className="text-[#D4AF37]">PUSAD</span></h1>
            <div className="h-[1px] w-full bg-gradient-to-r from-[#10b981] via-[#D4AF37] to-transparent" />
            <p className="text-[7px] sm:text-[9px] font-mono text-[#10b981] opacity-70">PREMIUM_GIFTS // EST_ESTABLISHED_QUALITY</p>
          </div>

          <div className="text-right space-y-4 hidden sm:block">
            <div className="inline-block px-4 py-2 border border-[#D4AF37]/20 rounded-sm bg-black/40">
              <p className="text-[8px] uppercase tracking-widest text-white/40 mb-1">Vector Velocity</p>
              <div className="font-mono text-xs text-[#D4AF37]">
                ΔX: {dragX.get().toFixed(0)} <br/>
                ΔY: {dragY.get().toFixed(0)}
              </div>
            </div>
          </div>
        </div>

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-20 select-none pointer-events-none">
          <AnimatePresence mode="wait">
            <motion.h2 
              key={activeFace}
              initial={{ scale: 0.8, opacity: 0, filter: 'blur(20px)' }}
              animate={{ scale: 1, opacity: 0.03, filter: 'blur(0px)' }}
              exit={{ scale: 1.2, opacity: 0, filter: 'blur(20px)' }}
              transition={{ duration: 1 }}
              className="text-[40vw] sm:text-[30vw] font-black italic uppercase leading-none text-[#10b981]"
            >
              {activeFace}
            </motion.h2>
          </AnimatePresence>
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-center sm:items-end gap-6 sm:gap-0">
          <div className="max-w-xs space-y-4">
             <div className="flex items-center gap-3 sm:gap-4">
                <div className="w-8 h-8 sm:w-12 sm:h-12 rounded-full border border-[#D4AF37] flex items-center justify-center animate-spin-slow">
                   <div className="w-1 h-1 sm:w-2 sm:h-2 bg-[#10b981] rounded-full shadow-[0_0_10px_#10b981]" />
                </div>
                <p className="text-[8px] sm:text-[10px] tracking-[0.2em] sm:tracking-[0.3em] leading-relaxed uppercase text-white/60">
                  Drag to rotate • Click to explore
                </p>
             </div>
          </div>

          <motion.button 
            whileHover={{ scale: 1.05, letterSpacing: '0.6em', backgroundColor: 'rgba(212,175,55,0.1)' }}
            whileTap={{ scale: 0.95 }}
            onClick={(e) => {
              e.stopPropagation();
              if (selectedFace || cubeFaces[0]) {
                setSelectedFace(selectedFace || cubeFaces[0]);
                setShowInfo(true);
              }
            }}
            className="pointer-events-auto px-8 py-4 sm:px-12 sm:py-6 bg-transparent border border-[#D4AF37]/30 text-[8px] sm:text-[10px] font-bold uppercase tracking-[0.4em] backdrop-blur-md text-[#D4AF37] hover:border-[#D4AF37] transition-all"
          >
            Visit Store
          </motion.button>
        </div>
      </div>

      {/* 4. INFORMATION PANEL OVERLAY */}
      <AnimatePresence>
        {showInfo && selectedFace && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-[#020d08]/95 backdrop-blur-2xl z-50 flex items-center justify-center p-4 sm:p-8"
            onClick={() => setShowInfo(false)}
          >
            <motion.div
              initial={{ scale: 0.8, y: 50 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.8, y: 50 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-2xl w-full border-2 border-[#D4AF37]/30 bg-black/80 backdrop-blur-xl p-6 sm:p-10 pointer-events-auto overflow-y-auto max-h-[90vh]"
              style={{
                boxShadow: '0 0 100px rgba(16, 185, 129, 0.1), inset 0 0 100px rgba(212, 175, 55, 0.05)'
              }}
            >
              <div className="flex items-start justify-between mb-6 sm:mb-8">
                <div className="flex items-center gap-4 sm:gap-6">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    style={{ color: selectedFace.color }}
                    className="drop-shadow-[0_0_15px_rgba(255,255,255,0.3)] flex-shrink-0"
                  >
                    {React.cloneElement(selectedFace.icon, { size: 40, strokeWidth: 1.5, className: "sm:w-[60px] sm:h-[60px]" })}
                  </motion.div>
                  <div>
                    <h2 className="text-xl sm:text-4xl font-black text-white tracking-wider uppercase">
                      {selectedFace.title}
                    </h2>
                    <p className="text-[10px] sm:text-sm text-[#10b981] mt-1 sm:mt-2 tracking-wide font-medium">
                      {selectedFace.description}
                    </p>
                  </div>
                </div>
                
                <motion.button
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  onClick={() => setShowInfo(false)}
                  className="text-xl sm:text-2xl text-white/40 hover:text-[#D4AF37] transition-colors"
                >
                  ✕
                </motion.button>
              </div>

              <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mb-6 sm:mb-8 opacity-50" />

              <div className="space-y-3 sm:space-y-4 max-h-[40vh] sm:max-h-[50vh] overflow-y-auto pr-2 custom-scrollbar">
                {selectedFace.details.map((detail, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 border border-white/5 bg-white/5 hover:bg-[#10b981]/10 hover:border-[#10b981]/30 transition-all group"
                  >
                    <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-[#D4AF37] rounded-full group-hover:scale-150 transition-transform flex-shrink-0" />
                    <p className="text-xs sm:text-sm text-white/80 tracking-wide group-hover:text-white transition-colors">
                      {detail}
                    </p>
                  </motion.div>
                ))}
              </div>

              <div className="mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-white/10">
                <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                  <p className="text-[8px] sm:text-xs text-white/40 font-mono">
                    RS.MART_PUSAD // SECTION_{selectedFace.name.toUpperCase()}
                  </p>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full sm:w-auto px-6 py-2 sm:px-8 sm:py-3 bg-gradient-to-r from-[#D4AF37] to-[#B8860B] text-black font-bold text-[10px] sm:text-xs uppercase tracking-wider transition-colors"
                  >
                    Explore Collection
                  </motion.button>
                </div>
              </div>

              {/* CORNER DECORATIONS */}
              <div className="absolute top-2 left-2 w-4 h-4 sm:w-6 sm:h-6 border-l-2 border-t-2 border-[#D4AF37]/30" />
              <div className="absolute top-2 right-2 w-4 h-4 sm:w-6 sm:h-6 border-r-2 border-t-2 border-[#D4AF37]/30" />
              <div className="absolute bottom-2 left-2 w-4 h-4 sm:w-6 sm:h-6 border-l-2 border-b-2 border-[#D4AF37]/30" />
              <div className="absolute bottom-2 right-2 w-4 h-4 sm:w-6 sm:h-6 border-r-2 border-b-2 border-[#D4AF37]/30" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @keyframes spin-slow { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        .animate-spin-slow { animation: spin-slow 8s linear infinite; }
        body { background: #020d08; margin: 0; touch-action: none; overflow: hidden; }
        
        @media (max-width: 640px) {
          .cube-scaling { transform: scale(0.85); }
        }

        @media (max-width: 400px) {
          .cube-scaling { transform: scale(0.7); }
        }

        .custom-scrollbar::-webkit-scrollbar { width: 4px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: rgba(255, 255, 255, 0.05); }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: #D4AF37; border-radius: 3px; }
      `}</style>
    </div>
  );
};

export default HyperKineticCube;