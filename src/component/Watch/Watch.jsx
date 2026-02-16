import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, MoveRight, Zap, ArrowUpRight, Play } from 'lucide-react';

const HeritageWatchStore = () => {
  const products = [
    { id: 1, brand: 'Breitling', name: 'Heritage Chrono', type: 'Watches', img: 'https://images.unsplash.com/photo-1524592094714-0f0654e20314?auto=format&fit=crop&q=80&w=400' },
    { id: 2, brand: 'Timex', name: 'Legacy Expedition', type: 'Watches', img: 'https://images.unsplash.com/photo-1542496658-e33a6d0d50f6?auto=format&fit=crop&q=80&w=400' },
    { id: 3, brand: 'Matte Works', name: 'Autumn Minimal', type: 'Watches', img: 'https://i.pinimg.com/736x/42/a3/48/42a348bf818a6a851b71507044d75646.jpg' },
    { id: 4, brand: 'Breitling', name: 'Night Edition', type: 'Watches', img: 'https://images.unsplash.com/photo-1614164185128-e4ec99c436d7?auto=format&fit=crop&q=80&w=400' },
    { id: 5, brand: 'Mata9666889', name: 'Titanium Gold', type: 'Watches', img: 'https://i.pinimg.com/1200x/81/75/6c/81756cc2f251cf3557061a9e8b495a6a.jpg' },
  ];

  return (
    /* Background matches the Heritage Emerald and Gold Dust theme */
    <div className="bg-[#002B29] text-[#FCFBFA] min-h-screen font-sans selection:bg-[#D4AF37]/30 overflow-hidden">
      
      {/* Background Texture */}
      <div 
        className="fixed top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none" 
        style={{ backgroundImage: `url('https://www.transparenttextures.com/patterns/gold-dust.png')` }} 
      />

      <div className="max-w-7xl mx-auto px-6 py-12 relative z-10">
        
        {/* --- HERO SECTION --- */}
        <section className="mb-24">
          <p className="text-[10px] tracking-[0.3em] text-[#D4AF37] mb-8 uppercase font-bold">Heritage Hero Section</p>
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="flex-1 space-y-8">
              <h1 className="text-5xl lg:text-7xl font-serif leading-[1.1] tracking-tight">
                <span className="text-[#D4AF37]">Discover</span> The Assortment Of Exquisite Watches.
              </h1>
              <p className="text-stone-400 text-lg max-w-md leading-relaxed">
                Exclusive range of designer wrist watches for men & women online, crafted with generational trust.
              </p>
              
              <div className="flex items-center gap-8">
                <button className="flex items-center gap-4 group">
                  <div className="w-14 h-14 rounded-full border-2 border-[#D4AF37] flex items-center justify-center group-hover:bg-[#D4AF37] transition-all">
                    <div className="w-3 h-3 bg-[#D4AF37] group-hover:bg-[#002B29] rounded-sm" />
                  </div>
                  <span className="text-xl font-medium tracking-tight">Discover</span>
                </button>
                <div className="flex items-center">
                   <div className="h-[2px] w-32 bg-gradient-to-r from-[#D4AF37] to-transparent" />
                   <ArrowRight className="text-[#D4AF37] -ml-2" />
                </div>
              </div>
            </div>
            
            <div className="flex-1 flex justify-center bg-[#003835] p-12 rounded-[2rem] border border-white/5 shadow-2xl relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-tr from-[#D4AF37]/5 to-transparent pointer-events-none" />
              <img 
                src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=800" 
                alt="Main Watch" 
                className="w-full max-w-sm object-contain transform group-hover:scale-105 transition-transform duration-1000"
              />
            </div>
          </div>
        </section>

        <hr className="border-[#D4AF37]/10 mb-16" />

        {/* --- PRODUCT GRID --- */}
        <section>
          <p className="text-[10px] tracking-[0.3em] text-stone-500 mb-10 uppercase font-bold">Curated Product Grid</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Arrival Block 1 */}
            <div className="border border-[#D4AF37]/20 rounded-[2rem] p-8 bg-[#003835] flex flex-col justify-between min-h-[380px] group overflow-hidden relative">
              <h3 className="text-4xl font-serif italic leading-none text-[#D4AF37]">New<br/>Legacy<br/>Series</h3>
              <div className="flex justify-between items-center mt-auto z-10">
                <span className="bg-[#D4AF37]/10 border border-[#D4AF37]/20 text-[#D4AF37] px-4 py-1.5 rounded-full text-[10px] font-bold tracking-widest uppercase">Limited Access</span>
                <div className="w-8 h-8 rounded-full border border-[#D4AF37] flex items-center justify-center animate-pulse">
                  <div className="w-2 h-2 bg-[#D4AF37] rounded-full" />
                </div>
              </div>
            </div>

            {products.slice(0, 3).map((item) => (
              <ProductCard key={item.id} item={item} />
            ))}

            {/* Arrival Block 2 */}
            <div className="border border-white/5 rounded-[2rem] p-8 bg-[#003835]/40 flex flex-col justify-between min-h-[380px]">
              <h3 className="text-4xl font-serif leading-none">Purity<br/>& Precision</h3>
              <div className="flex justify-between items-center mt-auto">
                <span className="text-[#D4AF37] text-[10px] font-bold tracking-[0.3em] uppercase">Autumn Story</span>
                <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center">
                  <div className="w-2 h-2 bg-white/20 rounded-full" />
                </div>
              </div>
            </div>

            {products.slice(3).map((item) => (
              <ProductCard key={item.id} item={item} />
            ))}

            {/* Circular CTA */}
            <div className="flex items-center justify-center p-8">
              <div className="relative group cursor-pointer">
                <div className="absolute inset-0 bg-[#D4AF37]/10 blur-2xl rounded-full group-hover:bg-[#D4AF37]/20 transition-all" />
                <div className="relative w-40 h-40 border border-[#D4AF37]/20 rounded-full flex items-center justify-center">
                  <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full animate-spin-slow">
                    <path id="circlePath" d="M 50, 50 m -38, 0 a 38,38 0 1,1 76,0 a 38,38 0 1,1 -76,0" fill="transparent" />
                    <text className="text-[7px] uppercase tracking-[3px] fill-[#D4AF37] font-bold">
                      <textPath xlinkHref="#circlePath">Premium Archive Access • Since 1970 • Heritage Quality •</textPath>
                    </text>
                  </svg>
                  <div className="w-16 h-16 bg-[#D4AF37] rounded-full flex items-center justify-center text-[#002B29] group-hover:scale-110 transition-transform">
                    <MoveRight className="transform -rotate-45" />
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
  <motion.div 
    whileHover={{ y: -10 }}
    className="border border-white/5 rounded-[2rem] p-6 bg-[#003835] hover:border-[#D4AF37]/30 transition-all duration-500 flex flex-col group shadow-xl"
  >
    <div className="mb-6 flex justify-between items-start">
      <div>
        <h4 className="font-serif text-xl tracking-tight text-stone-100 group-hover:text-[#D4AF37] transition-colors">{item.brand}</h4>
        <p className="text-[10px] text-stone-500 uppercase tracking-widest font-bold">{item.name}</p>
      </div>
      <div className="p-2 rounded-full bg-[#002B29] border border-white/5">
        <ArrowUpRight size={14} className="text-stone-600 group-hover:text-[#D4AF37] transition-colors" />
      </div>
    </div>
    
    <div className="flex-grow flex items-center justify-center py-6">
      <img 
        src={item.img} 
        alt={item.name} 
        className="h-44 object-contain drop-shadow-2xl transform group-hover:scale-105 transition-transform duration-700" 
      />
    </div>
    
    <div className="flex justify-between items-center pt-4 border-t border-white/5">
      <span className="text-[9px] text-[#D4AF37] font-bold uppercase tracking-[0.2em]">{item.type}</span>
      <div className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] opacity-0 group-hover:opacity-100 transition-opacity" />
    </div>
  </motion.div>
);

export default HeritageWatchStore;