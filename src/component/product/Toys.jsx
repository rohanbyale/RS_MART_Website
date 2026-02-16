import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, MoveRight, Rocket, ArrowUpRight, Sparkles, Ghost } from 'lucide-react';

const WonderToyStore = () => {
  const products = [
    { id: 1, brand: 'RoboBuddy', name: 'Alpha-7 Bot', type: 'STEM Toys', img: 'https://images.unsplash.com/photo-1546776310-eef45dd6d63c?auto=format&fit=crop&q=80&w=400' },
    { id: 2, brand: 'PlushieCo', name: 'Cloud Teddy', type: 'Soft Toys', img: 'https://i.pinimg.com/1200x/c7/6d/ec/c76decf15428872e6930b4d8e85afbbf.jpg' },
    { id: 3, brand: 'SpeedWay', name: 'Neon Racer', type: 'Vehicles', img: 'https://images.unsplash.com/photo-1581235720704-06d3acfcb36f?auto=format&fit=crop&q=80&w=400' },
    { id: 4, brand: 'BrainBox', name: 'Magnetic Tiles', type: 'Building', img: 'https://i.pinimg.com/736x/55/36/9e/55369e1ff3be12a9d3d0d8142e438a1a.jpg' },
    { id: 5, brand: 'Galactic', name: 'Stellar Projector', type: 'Discovery', img: 'https://images.unsplash.com/photo-1534073828943-f801091bb18c?auto=format&fit=crop&q=80&w=400' },
  ];

  return (
    /* Background: Electric Indigo with Playful Accents */
    <div className="bg-[#1A1A40] text-[#FFFFFF] min-h-screen font-sans selection:bg-[#FF2E63]/30 overflow-hidden">
      
      {/* Playful Floating Pattern Overlay */}
      <div 
        className="fixed top-0 left-0 w-full h-full opacity-[0.07] pointer-events-none" 
        style={{ backgroundImage: `radial-gradient(#FF2E63 1px, transparent 1px)`, backgroundSize: '40px 40px' }} 
      />

      <div className="max-w-7xl mx-auto px-6 py-12 relative z-10">
        
        {/* --- HERO SECTION --- */}
        <section className="mb-24">
          <p className="text-[10px] tracking-[0.4em] text-[#00D1FF] mb-8 uppercase font-extrabold flex items-center gap-2">
            <Rocket size={14} className="animate-bounce" /> The Imagination Station
          </p>
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="flex-1 space-y-8">
              <h1 className="text-6xl lg:text-8xl font-black leading-[0.9] tracking-tight uppercase">
                Dream <span className="text-[#FF2E63]">Bigger</span> Play Harder.
              </h1>
              <p className="text-indigo-200 text-lg max-w-md leading-relaxed border-l-4 border-[#00D1FF] pl-6">
                Unlock a world of wonder. From robotic best friends to intergalactic building sets, we curate the future of playtime.
              </p>
              
              <div className="flex items-center gap-8">
                <button className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-[1.5rem] bg-[#FF2E63] flex items-center justify-center rotate-3">
                    <Sparkles className="text-white" />
                  </div>
                  <span className="text-xl font-black uppercase tracking-tight">Explore the Vault</span>
                </button>
                <div className="flex items-center">
                   <div className="h-[2px] w-24 bg-gradient-to-r from-[#00D1FF] to-transparent" />
                   <ArrowRight className="text-[#00D1FF] -ml-2" />
                </div>
              </div>
            </div>
            
            <div className="flex-1 flex justify-center bg-[#242461] p-6 rounded-[4rem] border-4 border-[#00D1FF]/20 shadow-2xl relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-tr from-[#FF2E63]/10 to-transparent pointer-events-none" />
              <img 
                src="https://images.unsplash.com/photo-1558060370-d644479cb6f7?auto=format&fit=crop&q=80&w=800" 
                alt="Toy Collection" 
                className="w-full h-[500px] object-cover rounded-[3rem]"
              />
            </div>
          </div>
        </section>

        <hr className="border-white/10 mb-16" />

        {/* --- PRODUCT GRID --- */}
        <section>
          <div className="flex justify-between items-end mb-10">
            <div>
              <p className="text-[10px] tracking-[0.3em] text-indigo-300 uppercase font-bold mb-2">Curated Fun</p>
              <h2 className="text-4xl font-black uppercase">Wonder Picks</h2>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Arrival Block 1 */}
            <div className="bg-[#00D1FF] rounded-[3rem] p-8 flex flex-col justify-between min-h-[380px] relative -rotate-1">
              <h3 className="text-5xl font-black leading-[0.85] text-[#1A1A40] uppercase">The<br/>Toy<br/>Box</h3>
              <div className="flex justify-between items-center mt-auto">
                <span className="bg-[#1A1A40] text-[#00D1FF] px-4 py-1.5 rounded-full text-[10px] font-bold tracking-widest uppercase">New Batch</span>
                <div className="w-10 h-10 rounded-full bg-[#1A1A40] flex items-center justify-center">
                  <Ghost size={20} className="text-white" />
                </div>
              </div>
            </div>

            {products.slice(0, 3).map((item) => (
              <ProductCard key={item.id} item={item} />
            ))}

            {/* Arrival Block 2 */}
            <div className="border-4 border-dashed border-[#FF2E63]/30 rounded-[3rem] p-8 bg-[#242461] flex flex-col justify-between min-h-[380px]">
              <h3 className="text-4xl font-black leading-none uppercase">Build<br/>Your Own</h3>
              <div className="flex justify-between items-center mt-auto">
                <span className="text-[#FF2E63] text-[10px] font-bold tracking-[0.3em] uppercase">DIY Sets</span>
                <div className="w-8 h-8 rounded-full border-2 border-[#00D1FF] flex items-center justify-center">
                  <div className="w-2 h-2 bg-[#00D1FF] rounded-full animate-pulse" />
                </div>
              </div>
            </div>

            {products.slice(3).map((item) => (
              <ProductCard key={item.id} item={item} />
            ))}

            {/* Circular CTA */}
            <div className="flex items-center justify-center p-8">
              <div className="relative">
                <div className="absolute inset-0 bg-[#FF2E63]/20 blur-3xl rounded-full" />
                <div className="relative w-40 h-40 border-2 border-[#00D1FF]/40 rounded-full flex items-center justify-center">
                  <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full animate-spin-slow">
                    <path id="circlePath" d="M 50, 50 m -38, 0 a 38,38 0 1,1 76,0 a 38,38 0 1,1 -76,0" fill="transparent" />
                    <text className="text-[8px] uppercase tracking-[2px] fill-indigo-200 font-black">
                      <textPath xlinkHref="#circlePath">Infinite Fun • Creative Play • Safety First • Quality Toys •</textPath>
                    </text>
                  </svg>
                  <div className="w-16 h-16 bg-[#FF2E63] rounded-[1.5rem] flex items-center justify-center text-white -rotate-6">
                    <MoveRight />
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

const ProductCard = ({ item }) => (
  <div className="border-2 border-white/5 rounded-[3rem] p-6 bg-[#242461] flex flex-col shadow-xl">
    <div className="mb-6 flex justify-between items-start">
      <div>
        <h4 className="font-black text-xl tracking-tight uppercase text-[#00D1FF]">{item.brand}</h4>
        <p className="text-[10px] text-indigo-300 uppercase tracking-widest font-bold">{item.name}</p>
      </div>
      <div className="p-2 rounded-xl bg-[#1A1A40] border border-white/10">
        <ArrowUpRight size={14} className="text-[#FF2E63]" />
      </div>
    </div>
    
    <div className="flex-grow flex items-center justify-center py-6">
      <img 
        src={item.img} 
        alt={item.name} 
        className="h-44 w-full object-contain rounded-2xl drop-shadow-[0_10px_10px_rgba(0,0,0,0.5)]" 
      />
    </div>
    
    <div className="flex justify-between items-center pt-4 border-t border-white/5">
      <span className="text-[9px] text-[#FF2E63] font-black uppercase tracking-[0.2em]">{item.type}</span>
      <div className="w-3 h-3 bg-[#00D1FF] rounded-sm rotate-45" />
    </div>
  </div>
);

export default WonderToyStore;