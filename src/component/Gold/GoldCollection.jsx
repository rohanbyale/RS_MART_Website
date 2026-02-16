import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, MoveRight, Diamond, ArrowUpRight, Sparkles } from 'lucide-react';

const LuminaJewelry = () => {
  const collections = [
    { id: 1, brand: 'Atelier RS', name: 'Astral Bloom Ring', type: 'High Jewelry', img: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&q=80&w=400' },
    { id: 2, brand: 'Lumina', name: 'Luna Pearl Drop', type: 'Earrings', img: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&q=80&w=400' },
    { id: 3, brand: 'Heritage', name: 'Solaris Cuff', type: 'Bracelets', img: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&q=80&w=400' },
    { id: 4, brand: 'Elysian', name: 'Emerald Vow', type: 'Bespoke', img: 'https://i.pinimg.com/736x/ec/72/be/ec72befcbc01c3a262837c16b7aa9301.jpg' },
    { id: 5, brand: 'Orion', name: 'Stellar Chain', type: 'Necklaces', img: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&q=80&w=400' },
  ];

  return (
    /* New Palette: Midnight Navy (#0F172A), Slate (#1E293B), Rose Gold (#E2A792) */
    <div className="bg-[#0F172A] text-[#F8FAFC] min-h-screen font-serif selection:bg-[#E2A792]/30 overflow-x-hidden">
      
      {/* Soft Shimmer Overlay */}
      <div 
        className="fixed top-0 left-0 w-full h-full opacity-[0.15] pointer-events-none" 
        style={{ backgroundImage: `radial-gradient(#E2A792 0.5px, transparent 0.5px)`, backgroundSize: '50px 50px' }} 
      />

      <div className="max-w-7xl mx-auto px-4 md:px-8 py-12 relative z-10">
        
        {/* --- HERO SECTION --- */}
        <section className="mb-20 lg:mb-32 mt-4 lg:mt-12">
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[10px] tracking-[0.5em] text-[#E2A792] mb-6 uppercase font-bold flex items-center gap-2"
          >
            <Diamond size={14} /> Established 1994 • Private Atelier
          </motion.p>
          
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
            <div className="flex-1 space-y-8 text-center lg:text-left">
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-light leading-tight lg:leading-[0.9] tracking-tighter">
                Refined <span className="italic text-[#E2A792]">Artistry</span> for the Modern Era.
              </h1>
              <p className="text-slate-400 text-base md:text-lg max-w-md mx-auto lg:mx-0 leading-relaxed border-l-0 lg:border-l border-[#E2A792]/40 lg:pl-6 font-sans">
                Curating rare gemstones and bespoke metalwork. Every piece is a testament to the quiet luxury of high craftsmanship.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6 sm:gap-8">
                <button className="flex items-center gap-4 group">
                  <div className="w-14 h-14 rounded-full border border-[#E2A792]/30 flex items-center justify-center bg-transparent group-hover:bg-[#E2A792] transition-all duration-500">
                    <Sparkles className="text-[#E2A792] group-hover:text-[#0F172A]" />
                  </div>
                  <span className="text-lg font-light tracking-widest uppercase">The Archive</span>
                </button>
                <div className="hidden sm:flex items-center">
                   <div className="h-[1px] w-20 bg-gradient-to-r from-[#E2A792] to-transparent" />
                   <ArrowRight className="text-[#E2A792] -ml-2" />
                </div>
              </div>
            </div>
            
            {/* Responsive Hero Image */}
            <div className="w-full lg:flex-1 flex justify-center bg-[#1E293B] p-2 md:p-3 rounded-t-full border border-[#E2A792]/20 shadow-2xl relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0F172A]/80 pointer-events-none" />
              <img 
                src="https://i.pinimg.com/736x/17/8f/0d/178f0daa7a42ddaba8a1dcb2a929dca9.jpg" 
                alt="Rose Gold Collection" 
                className="w-full h-[400px] md:h-[600px] object-cover rounded-t-full opacity-90"
              />
            </div>
          </div>
        </section>

        <hr className="border-[#E2A792]/10 mb-16" />

        {/* --- PRODUCT GRID --- */}
        <section>
          <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-12 gap-4">
            <div className="text-center md:text-left">
              <p className="text-[10px] tracking-[0.4em] text-[#E2A792]/60 uppercase font-bold mb-2 font-sans">Handpicked Selection</p>
              <h2 className="text-3xl md:text-4xl font-light italic">Masterpiece Gallery</h2>
            </div>
            <button className="text-[10px] uppercase tracking-widest font-bold border-b border-[#E2A792] pb-1 hover:text-[#E2A792] transition-colors font-sans">
              View All 2026 Pieces
            </button>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 font-sans">
            
            {/* Themed Info Block */}
            <div className="border border-[#E2A792]/20 rounded-xl p-8 flex flex-col justify-between min-h-[350px] relative bg-[#1E293B]/40">
              <h3 className="text-3xl font-light leading-tight text-[#E2A792] uppercase tracking-tighter">Bespoke<br/>Heritage<br/>Service</h3>
              <div className="flex justify-between items-center mt-auto">
                <span className="text-[10px] font-bold tracking-widest uppercase text-slate-500 italic">GIA Certified</span>
                <div className="w-10 h-10 rounded-full border border-[#E2A792]/40 flex items-center justify-center cursor-pointer hover:bg-[#E2A792] hover:text-[#0F172A] transition-all">
                  <ArrowRight size={18} />
                </div>
              </div>
            </div>

            {collections.slice(0, 3).map((item) => (
              <JewelryCard key={item.id} item={item} />
            ))}

            {/* Accent Block */}
            <div className="rounded-xl p-8 bg-[#E2A792] flex flex-col justify-between min-h-[350px]">
              <h3 className="text-3xl font-black leading-none uppercase text-[#0F172A] tracking-tighter">Artisan<br/>Booking</h3>
              <div className="flex justify-between items-center mt-auto">
                <span className="text-[#0F172A] text-[10px] font-bold tracking-[0.2em] uppercase">Private Consultation</span>
                <div className="w-8 h-8 rounded-full bg-[#0F172A] flex items-center justify-center">
                  <div className="w-1.5 h-1.5 bg-[#E2A792] rounded-full animate-pulse" />
                </div>
              </div>
            </div>

            {collections.slice(3).map((item) => (
              <JewelryCard key={item.id} item={item} />
            ))}

            {/* Circular Logo/CTA */}
            <div className="flex items-center justify-center p-4">
              <div className="relative">
                <div className="absolute inset-0 bg-[#E2A792]/5 blur-3xl rounded-full" />
                <div className="relative w-40 h-40 border border-[#E2A792]/20 rounded-full flex items-center justify-center">
                  <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full animate-spin-slow">
                    <path id="circlePath" d="M 50, 50 m -35, 0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0" fill="transparent" />
                    <text className="text-[7px] uppercase tracking-[3.5px] fill-[#E2A792]/50 font-medium">
                      <textPath xlinkHref="#circlePath">Sustainable Luxury • Bespoke Craft •</textPath>
                    </text>
                  </svg>
                  <div className="w-14 h-14 bg-transparent border border-[#E2A792] rounded-full flex items-center justify-center text-[#E2A792] hover:bg-[#E2A792] hover:text-[#0F172A] transition-all cursor-pointer">
                    <MoveRight size={20} />
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>
      </div>

      <style jsx>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 15s linear infinite;
        }
      `}</style>
    </div>
  );
};

const JewelryCard = ({ item }) => (
  <div className="border border-[#E2A792]/10 rounded-xl p-5 bg-[#1E293B]/30 flex flex-col group hover:border-[#E2A792]/40 transition-all duration-500 shadow-xl">
    <div className="mb-4 flex justify-between items-start">
      <div>
        <h4 className="font-light text-base tracking-widest uppercase text-[#E2A792]">{item.brand}</h4>
        <p className="text-[9px] text-slate-500 uppercase tracking-widest font-bold font-sans">{item.name}</p>
      </div>
      <div className="p-1.5 rounded-full border border-[#E2A792]/10 group-hover:bg-[#E2A792]/10 transition-colors">
        <ArrowUpRight size={14} className="text-[#E2A792]" />
      </div>
    </div>
    
    <div className="flex-grow flex items-center justify-center py-4 overflow-hidden rounded-lg">
      <img 
        src={item.img} 
        alt={item.name} 
        className="h-44 w-full object-cover grayscale-[0.3] group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700" 
      />
    </div>
    
    <div className="flex justify-between items-center pt-4 border-t border-[#E2A792]/10">
      <span className="text-[9px] text-[#E2A792] font-bold uppercase tracking-[0.2em] font-sans">{item.type}</span>
      <div className="w-1.5 h-1.5 bg-[#E2A792] rounded-full" />
    </div>
  </div>
);

export default LuminaJewelry;