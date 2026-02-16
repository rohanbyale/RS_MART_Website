import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const LuxuryGiftHero = () => {
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const imageScale = useTransform(scrollYProgress, [0, 0.4], [1, 1.1]);
  const imageOpacity = useTransform(scrollYProgress, [0, 0.4, 0.5], [1, 1, 0]);
  const imageY = useTransform(scrollYProgress, [0, 0.5], ["0%", "-10%"]);
  
  const contentOpacity = useTransform(scrollYProgress, [0.4, 0.6], [0, 1]);
  const contentY = useTransform(scrollYProgress, [0.4, 0.6], ["40px", "0px"]);

  const colors = {
    cyprus: "#004643",
    gold: "#D4AF37",
    cloudWhite: "#FAFAFA",
  };

  return (
    <div 
      ref={containerRef}
      style={{ 
        backgroundColor: "#000",
        minHeight: '300vh', 
        position: 'relative'
      }}
    >
      <div style={{ position: 'sticky', top: 0, height: '100vh', overflow: 'hidden' }}>
        
        {/* --- STAGE 1: INTRO BRANDING --- */}
        <motion.div 
          style={{ 
            position: 'absolute',
            inset: 0,
            zIndex: 10,
            scale: imageScale,
            opacity: imageOpacity,
            y: imageY,
            pointerEvents: scrollYProgress.get() > 0.45 ? 'none' : 'auto' 
          }}
        >
          <img 
            src="https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?q=80&w=2000" 
            alt="RS Mart Exclusive"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
          <div style={{
            position: 'absolute',
            inset: 0,
            background: 'radial-gradient(circle, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.8) 100%)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '20px'
          }}>
            <motion.h2 style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: 'clamp(2.5rem, 10vw, 8rem)',
              color: colors.gold,
              letterSpacing: 'clamp(4px, 1.5vw, 12px)',
              textTransform: 'uppercase',
              textAlign: 'center',
              margin: 0
            }}>
              RS MART
            </motion.h2>
            <p style={{ color: '#fff', letterSpacing: '4px', fontSize: 'clamp(0.5rem, 1.5vw, 0.7rem)', opacity: 0.6, marginTop: '10px' }}>
              PURVEYORS OF LUXURY
            </p>
          </div>
        </motion.div>

        {/* --- STAGE 2: PRODUCT SHOWCASE --- */}
        <motion.div style={{ opacity: contentOpacity, y: contentY, height: '100%' }}>
          <div style={{ 
            backgroundColor: "#000",
            height: '100vh', 
            color: colors.cloudWhite, 
            fontFamily: "'Inter', sans-serif",
            position: 'relative',
            overflowY: 'auto',
            overflowX: 'hidden'
          }}>
            <style>
              {`
                @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,600;1,300&family=Inter:wght@300;400;600&display=swap');
                
                .hero-grid {
                  display: grid;
                  grid-template-columns: 1fr;
                  min-height: 100vh;
                  padding: 20px 8%; /* Increased side padding to compress center content */
                  align-items: center;
                  gap: 20px;
                  position: relative;
                  z-index: 2;
                }

                @media (min-width: 1024px) {
                  .hero-grid {
                    grid-template-columns: 1fr 1fr;
                    padding: 80px 8%;
                    gap: 60px;
                  }
                }

                .cards-grid {
                  display: grid;
                  grid-template-columns: repeat(2, 1fr);
                  gap: 10px; /* Tighter gap */
                  width: 100%;
                  max-width: 450px; /* Prevents images from getting too wide on tablets */
                  margin: 0 auto;
                }

                @media (max-width: 480px) {
                  .hero-title { font-size: 2.1rem !important; margin-bottom: 10px !important; }
                  .hero-grid { padding-top: 50px; padding-bottom: 20px; gap: 15px; }
                  .content-left p { margin-bottom: 15px !important; }
                }
              `}
            </style>

            <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, #000, transparent, #000)', zIndex: 1 }} />
              <video autoPlay loop muted playsInline style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.4 }}>
                <source src="https://www.pexels.com/download/video/34840685/" type="video/mp4" />
              </video>
            </div>

            <section className="hero-grid font-serif">
              <motion.div className="content-left" style={{ zIndex: 5 }}>
                <h1 className="hero-title uppercase font-serif" style={{
                  fontSize: 'clamp(2.5rem, 5vw, 6rem)',
                  lineHeight: '1.1', fontWeight: '300', marginBottom: '20px', textAlign: 'inherit'
                }}>
                  the art of <br />
                  <span style={{ fontStyle: 'italic', fontWeight: '400', color: colors.gold }}>giving</span>
                </h1>
                
                <p style={{ fontSize: 'clamp(0.8rem, 1.2vw, 1rem)', lineHeight: '1.5', marginBottom: '25px', maxWidth: '400px', opacity: 0.7 }}>
                  Bespoke hampers designed for the extraordinary.
                </p>

                <motion.button
                  whileHover={{ scale: 1.05, backgroundColor: colors.gold, color: "#000" }}
                  whileTap={{ scale: 0.95 }}
                  style={{
                    background: 'transparent', border: `1px solid ${colors.gold}`,
                    color: colors.cloudWhite, padding: '10px 25px', borderRadius: '50px', 
                    fontSize: '0.65rem', letterSpacing: '2px', textTransform: 'uppercase', fontWeight: '600'
                  }}
                >
                  Shop Now
                </motion.button>
              </motion.div>

              <div className="cards-grid">
                <ProductCard img="https://i.pinimg.com/736x/37/67/d4/3767d40366f3ca81f1fe7620e6ec0ce7.jpg" title="Royal Teddy" delay={0.1} colors={colors} />
                <ProductCard img="https://i.pinimg.com/736x/07/ab/2f/07ab2fe4d85e7102165b25fec8d4a173.jpg" title="Curated" delay={0.2} colors={colors} />
                <ProductCard img="https://images.unsplash.com/photo-1513201099705-a9746e1e201f?q=80&w=800" title="Custom" delay={0.3} colors={colors} isPromo />
                <ProductCard img="https://i.pinimg.com/1200x/fa/c2/a2/fac2a2a0ecb55c04fe630ad38c0e28e3.jpg" title="Watches" delay={0.4} colors={colors} />
              </div>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

const ProductCard = ({ img, title, delay, colors, isPromo = false }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay }}
    style={{
      position: 'relative', 
      borderRadius: '12px', 
      overflow: 'hidden',
      height: 'clamp(120px, 18vh, 200px)', // Reduced height to fit more images in view
      width: '100%', // Controlled by grid columns
      cursor: 'pointer',
      border: '1px solid rgba(255,255,255,0.08)',
      backgroundColor: '#111'
    }}
  >
    <img 
      src={img} 
      alt={title} 
      style={{ 
        width: '100%', 
        height: '100%', 
        objectFit: 'cover', 
        opacity: isPromo ? 0.5 : 1
      }} 
    />
    <div style={{
      position: 'absolute', 
      inset: 0,
      background: `linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 50%)`,
      display: 'flex',
      alignItems: 'flex-end',
      padding: '8px'
    }}>
      <span style={{
        fontSize: '0.55rem', 
        letterSpacing: '1px', 
        fontWeight: '700', 
        textTransform: 'uppercase',
        color: isPromo ? colors.gold : '#fff'
      }}>
        {title}
      </span>
    </div>
  </motion.div>
);

export default LuxuryGiftHero;