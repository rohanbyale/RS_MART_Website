import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, MoveRight, Zap, ArrowUpRight, Activity } from 'lucide-react';

const EliteSportsStore = () => {
  const products = [
    { id: 1, brand: 'AeroPeak', name: 'Velocity Shell', type: 'Performance', img: 'https://i.pinimg.com/736x/e8/c2/34/e8c2344098671e12327d238fba506c9c.jpg' },
    { id: 2, brand: 'Endure', name: 'Knit Runner V2', type: 'Footwear', img: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=400' },
    { id: 3, brand: 'CoreX', name: 'Thermal Base', type: 'Compression', img: 'https://i.pinimg.com/1200x/25/c8/4d/25c84db08d52f6c414482db97115f0ea.jpg' },
    { id: 4, brand: 'Apex', name: 'Ultra-Lite Shorts', type: 'Training', img: 'https://i.pinimg.com/736x/ba/59/a7/ba59a7bce1b424977c0d5f8fc1c435d6.jpg' },
    { id: 5, brand: 'Titanium', name: 'Carbon Frame Pack', type: 'Accessories', img: 'https://i.pinimg.com/1200x/9a/03/32/9a0332422c001121d7431c4817e62e4a.jpg' },
  ];

  return (
    <div className="bg-[#0A0C10] text-[#FCFBFA] min-h-screen font-sans selection:bg-[#CCFF00]/30 overflow-hidden">
      
      {/* Dynamic Grid Overlay */}
      <div 
        className="fixed top-0 left-0 w-full h-full opacity-[0.05] pointer-events-none" 
        style={{ backgroundImage: `radial-gradient(#CCFF00 0.5px, transparent 0.5px)`, backgroundSize: '30px 30px' }} 
      />

      <div className="max-w-7xl mx-auto px-6 py-12 relative z-10">
        
        {/* --- HERO SECTION --- */}
        <section className="mb-24">
          <p className="text-[10px] tracking-[0.4em] text-[#CCFF00] mb-8 uppercase font-bold flex items-center gap-2">
            <Zap size={12} /> High Performance Equipment
          </p>
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="flex-1 space-y-8">
              <h1 className="text-6xl lg:text-8xl font-black leading-[0.9] tracking-tighter uppercase italic">
                Beyond <span className="text-[#CCFF00]">Physical</span> Limits.
              </h1>
              <p className="text-slate-400 text-lg max-w-md leading-relaxed border-l-2 border-[#CCFF00] pl-6">
                Engineered for the elite. Our 2026 collection merges biometric data with aerospace textiles for ultimate speed.
              </p>
              
              <div className="flex items-center gap-8">
                <button className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-full border border-white/10 flex items-center justify-center bg-[#CCFF00]">
                    <Activity className="text-[#0A0C10]" />
                  </div>
                  <span className="text-xl font-bold italic uppercase tracking-tighter">Enter The Arena</span>
                </button>
                <div className="flex items-center">
                   <div className="h-[1px] w-24 bg-gradient-to-r from-[#CCFF00] to-transparent" />
                   <ArrowRight className="text-[#CCFF00] -ml-2" />
                </div>
              </div>
            </div>
            
            <div className="flex-1 flex justify-center bg-[#151921] p-4 rounded-[3rem] border border-white/5 shadow-2xl relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-tr from-[#CCFF00]/10 to-transparent pointer-events-none" />
              <img 
                src="https://i.pinimg.com/736x/f4/1b/45/f41b4571327d16e3a173aeb1a655b21d.jpg" 
                alt="Elite Athlete" 
                className="w-full h-[500px] object-cover rounded-[2.5rem]"
              />
            </div>
          </div>
        </section>

        <hr className="border-white/5 mb-16" />

        {/* --- PRODUCT GRID --- */}
        <section>
          <div className="flex justify-between items-end mb-10">
            <div>
              <p className="text-[10px] tracking-[0.3em] text-slate-500 uppercase font-bold mb-2">Technical Gear</p>
              <h2 className="text-4xl font-black italic uppercase">New Arrivals</h2>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            <div className="bg-[#CCFF00] rounded-[2rem] p-8 flex flex-col justify-between min-h-[380px] relative">
              <h3 className="text-5xl font-black italic leading-[0.85] text-[#0A0C10] uppercase">The<br/>Speed<br/>Lab</h3>
              <div className="flex justify-between items-center mt-auto">
                <span className="bg-[#0A0C10] text-[#CCFF00] px-4 py-1.5 rounded-full text-[10px] font-bold tracking-widest uppercase italic">Drop 01/26</span>
                <div className="w-10 h-10 rounded-full bg-[#0A0C10] flex items-center justify-center">
                  <ArrowRight size={20} className="text-[#CCFF00]" />
                </div>
              </div>
            </div>

            {products.slice(0, 3).map((item) => (
              <ProductCard key={item.id} item={item} />
            ))}

            <div className="border border-white/10 rounded-[2rem] p-8 bg-[#151921] flex flex-col justify-between min-h-[380px]">
              <h3 className="text-4xl font-black italic leading-none uppercase">Endurance<br/>System</h3>
              <div className="flex justify-between items-center mt-auto">
                <span className="text-slate-500 text-[10px] font-bold tracking-[0.3em] uppercase">Core Collection</span>
                <div className="w-8 h-8 rounded-full border border-[#CCFF00]/30 flex items-center justify-center">
                  <div className="w-2 h-2 bg-[#CCFF00] rounded-full" />
                </div>
              </div>
            </div>

            {products.slice(3).map((item) => (
              <ProductCard key={item.id} item={item} />
            ))}

            <div className="flex items-center justify-center p-8">
              <div className="relative">
                <div className="absolute inset-0 bg-[#CCFF00]/10 blur-3xl rounded-full" />
                <div className="relative w-40 h-40 border border-white/10 rounded-full flex items-center justify-center">
                  <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full animate-spin-slow">
                    <path id="circlePath" d="M 50, 50 m -38, 0 a 38,38 0 1,1 76,0 a 38,38 0 1,1 -76,0" fill="transparent" />
                    <text className="text-[7.5px] uppercase tracking-[3px] fill-slate-400 font-black">
                      <textPath xlinkHref="#circlePath">Elite Performance • 100% Breathable • Pro Grade Gear •</textPath>
                    </text>
                  </svg>
                  <div className="w-16 h-16 bg-[#CCFF00] rounded-full flex items-center justify-center text-[#0A0C10]">
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
          animation: spin-slow 12s linear infinite;
        }
      `}</style>
    </div>
  );
};

const ProductCard = ({ item }) => (
  <div className="border border-white/5 rounded-[2rem] p-6 bg-[#151921] flex flex-col shadow-xl">
    <div className="mb-6 flex justify-between items-start">
      <div>
        <h4 className="font-black italic text-xl tracking-tighter uppercase text-[#CCFF00]">{item.brand}</h4>
        <p className="text-[10px] text-slate-500 uppercase tracking-widest font-bold">{item.name}</p>
      </div>
      <div className="p-2 rounded-xl bg-[#0A0C10] border border-white/5">
        <ArrowUpRight size={14} className="text-[#CCFF00]" />
      </div>
    </div>
    
    <div className="flex-grow flex items-center justify-center py-6">
      <img 
        src={item.img} 
        alt={item.name} 
        className="h-48 w-full object-cover rounded-2xl" 
      />
    </div>
    
    <div className="flex justify-between items-center pt-4 border-t border-white/5">
      <span className="text-[9px] text-[#CCFF00] font-black uppercase tracking-[0.2em]">{item.type}</span>
      <div className="w-2 h-2 bg-[#CCFF00] rounded-full" />
    </div>
  </div>
);

export default EliteSportsStore;