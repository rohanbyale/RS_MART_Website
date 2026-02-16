import React from 'react';
import { motion } from 'framer-motion';

const OfferMarquee = () => {
  const colors = {
    gold: "#D4AF37",         
    goldLight: "#f3d981",    
    cyprus: "#004643",       
    deepCoal: "#0D0D0D",     
    rose: "#fb7185",
    teal: "#2dd4bf"          
  };

  const offerText = "LIMITED TIME OFFER: GET 10% OFF YOUR FIRST ORDER";
  
  const giftImgs = [
    "/tedy.png",
    "/35932d425845ff5d408db4e719b01a8b-removebg-preview.png",
    "/38bddd8c4f8179f0e29a8ccf3c5d963c-removebg-preview.png"
  ];

  return (
    <div style={{
      width: '100%',
      backgroundColor: colors.deepCoal,
      padding: '10px 0',
      borderBottom: `1px solid ${colors.gold}22`,
      borderTop: `1px solid ${colors.gold}22`,
      overflow: 'hidden',
      display: 'flex',
      position: 'relative',
      zIndex: 10,
      /* Updated Mask: Fades to transparent on the far left/right to remove white corners */
      maskImage: 'linear-gradient(to right, rgba(0,0,0,0), rgba(0,0,0,1) 15%, rgba(0,0,0,1) 85%, rgba(0,0,0,0))',
      WebkitMaskImage: 'linear-gradient(to right, rgba(0,0,0,0), rgba(0,0,0,1) 15%, rgba(0,0,0,1) 85%, rgba(0,0,0,0))',
    }}>
      
      {/* Background Animated Particles */}
      <motion.div 
        animate={{ opacity: [0.2, 0.5, 0.2] }}
        transition={{ duration: 4, repeat: Infinity }}
        style={{
          position: 'absolute',
          inset: 0,
          background: `radial-gradient(circle at 50% 50%, ${colors.cyprus}44 0%, transparent 100%)`,
          pointerEvents: 'none'
        }}
      />

      <motion.div
        style={{
          display: 'flex',
          whiteSpace: 'nowrap',
          alignItems: 'center',
        }}
        animate={{
          x: ["0%", "-50%"],
        }}
        transition={{
          ease: "linear",
          duration: 18, 
          repeat: Infinity,
        }}
      >
        {[...Array(10)].map((_, i) => (
          <div key={i} style={{ display: 'flex', alignItems: 'center' }}>
            
            {/* 1. Neon Shimmer Text */}
            <motion.span 
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: '0.7rem',
                fontWeight: '900',
                letterSpacing: '3px',
                textTransform: 'uppercase',
                display: 'flex',
                gap: '4px'
              }}
            >
              {offerText.split(" ").map((word, idx) => (
                <motion.span
                  key={idx}
                  animate={{ 
                    color: [ "#FFF", colors.goldLight, colors.teal, "#FFF"],
                    textShadow: [
                      `0 0 0px transparent`,
                      `0 0 8px ${colors.gold}66`,
                      `0 0 0px transparent`
                    ]
                  }}
                  transition={{ 
                    duration: 3, 
                    repeat: Infinity, 
                    delay: (i * 0.5) + (idx * 0.1) 
                  }}
                >
                  {word}
                </motion.span>
              ))}
            </motion.span>

            {/* 2. Pulsing Glow Divider */}
            <motion.div
              animate={{ 
                scale: [1, 1.4, 1],
                opacity: [0.5, 1, 0.5]
              }}
              transition={{ duration: 2, repeat: Infinity }}
              style={{ 
                color: colors.gold, 
                fontSize: '1.2rem', 
                margin: '0 30px',
                filter: `drop-shadow(0 0 5px ${colors.gold})`
              }}
            >
              ✦
            </motion.div>

            {/* 3. Luxury Image Frame with Rotating Border */}
            <div style={{ position: 'relative', marginRight: '25px' }}>
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                style={{
                  position: 'absolute',
                  inset: -2,
                  borderRadius: '8px',
                  background: `conic-gradient(from 0deg, ${colors.gold}, ${colors.rose}, ${colors.teal}, ${colors.gold})`,
                  opacity: 0.6
                }}
              />
              <div style={{
                width: '36px',
                height: '36px',
                backgroundColor: colors.deepCoal,
                borderRadius: '7px',
                position: 'relative',
                zIndex: 2,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                overflow: 'hidden',
                padding: '2px'
              }}>
                <img 
                  src={giftImgs[i % giftImgs.length]} 
                  alt="Premium Gift"
                  style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                />
              </div>
            </div>

            {/* 4. Glassmorphism RS Badge */}
            <motion.div 
              whileHover={{ scale: 1.2 }}
              style={{
                width: '28px',
                height: '28px',
                borderRadius: '50%',
                background: `linear-gradient(135deg, ${colors.cyprus}, #000)`,
                border: `1px solid ${colors.gold}88`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginRight: '50px',
                boxShadow: `0 0 15px ${colors.cyprus}`,
                flexShrink: 0
              }}
            >
               <span style={{ 
                 color: colors.gold, 
                 fontSize: '0.6rem', 
                 fontWeight: 'black',
                 textShadow: `0 0 5px ${colors.gold}aa` 
               }}>RS</span>
            </motion.div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default OfferMarquee;