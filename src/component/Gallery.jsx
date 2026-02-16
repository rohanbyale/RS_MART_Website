import React from 'react';
import { motion } from 'framer-motion';

const AnimatedGallery = () => {
  const colors = {
    cyprus: "#004643",
    gold: "#D4AF37",
    cloudWhite: "#FAFAFA",
  };

  const galleryItems = [
    { 
      id: 1, 
      title: "Royal Teddy", 
      subtitle: "Handcrafted Heritage",
      size: "md:col-span-2 md:row-span-2", 
      img: "https://i.pinimg.com/1200x/8a/65/40/8a6540b00eaa2094f4307e75c5b9d6e8.jpg",
      hoverImg: "https://i.pinimg.com/736x/d8/88/fc/d888fc5d9f46b980e686d04ada26db41.jpg" // Close up teddy
    },
    { 
      id: 2, 
      title: "Vintage Racer", 
      subtitle: "Executive Desk Toy",
      size: "md:col-span-1 md:row-span-1", 
      img: "https://i.pinimg.com/736x/07/10/04/0710040b91f06172033f1f0d097cdf2c.jpg",
      hoverImg: "https://i.pinimg.com/736x/39/5f/be/395fbeecb502171ebe2b9acb846f5276.jpg" // Blue toy car
    },
    { 
      id: 3, 
      title: "Gold Chrono", 
      subtitle: "Timeless Precision",
      size: "md:col-span-1 md:row-span-2", 
      img: "https://i.pinimg.com/736x/88/6f/69/886f6923e49fd149de34c3fba1ffb094.jpg",
      hoverImg: "https://images.unsplash.com/photo-1614164185128-e4ec99c436d7?q=80&w=800" // Leather watch
    },
    { 
      id: 4, 
      title: "Luminous Gems", 
      subtitle: "Fine Jewelry",
      size: "md:col-span-1 md:row-span-1", 
      img: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=800",
      hoverImg: "https://i.pinimg.com/736x/35/0c/da/350cda2651166e6be2ca05cdb9fd587b.jpg" // Diamond ring
    },
    { 
      id: 5, 
      title: "Celebration Kit", 
      subtitle: "Birthday Essentials",
      size: "md:col-span-1 md:row-span-1", 
      img: "https://i.pinimg.com/736x/83/56/96/835696e427acb405bb87457bf4ad93aa.jpg",
      hoverImg: "https://i.pinimg.com/1200x/5e/ef/f8/5eeff844df1173651a6624643d3a3e0d.jpg" // Colorful confetti/balloons
    },
    { 
      id: 6, 
      title: "Grand Function", 
      subtitle: "Ceremonial Hampers",
      size: "md:col-span-1 md:row-span-1", 
      img: "https://images.unsplash.com/photo-1513201099705-a9746e1e201f?q=80&w=800",
      hoverImg: "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?q=80&w=800" // Wrapped gift boxes
    },
  ];

  return (
    <section
    id='gallery'
    className="py-12 px-6 md:px-20 relative overflow-hidden" style={{ backgroundColor: colors.cloudWhite }}>
      
      {/* Background Decorative Text */}
      <div className="absolute top-10 right-[-5%] opacity-[0.03] select-none pointer-events-none">
        <h2 className="text-[20vw] font-serif leading-none" style={{ color: colors.cyprus }}>RS MART</h2>
      </div>

      <div className="max-w-screen-2xl mx-auto relative z-10">
        
        {/* Header Section */}
        <header className="flex flex-col md:flex-row justify-between items-baseline mb-12 gap-8">
          <div className="relative">
            <motion.div 
              initial={{ width: 0 }}
              whileInView={{ width: "40px" }}
              className="h-[2px] mb-4"
              style={{ backgroundColor: colors.gold }}
            />
            <motion.p 
              className="text-[10px] uppercase tracking-[0.5em] font-bold mb-2"
              style={{ color: colors.gold }}
            >
              Exquisite Selection
            </motion.p>
            <motion.h2 
              className="text-5xl md:text-7xl font-serif leading-[0.9] tracking-tighter"
              style={{ color: colors.cyprus }}
            >
              The Gift <br /> 
              <span className="italic font-light opacity-60">Gallery.</span>
            </motion.h2>
          </div>

          <motion.div className="md:text-right">
            <p className="text-xs font-light text-stone-500 max-w-[250px] leading-relaxed border-l-2 md:border-l-0 md:border-r-2 pr-0 md:pr-4 pl-4 md:pl-0" style={{ borderColor: colors.gold }}>
              Discover our dual-perspective archive. Hover over any piece to see its finer details.
            </p>
          </motion.div>
        </header>

        {/* Bento-Style Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-4 auto-rows-[250px] gap-4">
          {galleryItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05, duration: 0.5 }}
              className={`relative group overflow-hidden rounded-sm cursor-pointer ${item.size}`}
            >
              {/* Primary Image (Visible by default) */}
              <motion.div 
                className="absolute inset-0 w-full h-full z-0"
                whileHover={{ scale: 1.1 }} 
                transition={{ duration: 0.8 }}
              >
                <img 
                  src={item.img} 
                  alt={item.title} 
                  className="w-full h-full object-cover group-hover:opacity-0 transition-opacity duration-500 ease-in-out"
                />
              </motion.div>

              {/* Secondary Image (Visible on Hover) */}
              <motion.div 
                className="absolute inset-0 w-full h-full z-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.8 }}
              >
                <img 
                  src={item.hoverImg} 
                  alt={`${item.title} detail`} 
                  className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-700"
                />
              </motion.div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#004643]/90 via-transparent to-transparent opacity-70 group-hover:opacity-100 transition-opacity duration-500 z-10" />

              {/* Text Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-6 z-20">
                <p className="text-[8px] uppercase tracking-[0.3em] font-bold mb-1" style={{ color: colors.gold }}>
                  {item.subtitle}
                </p>
                <h3 className="text-white font-serif text-2xl leading-none">
                  {item.title}
                </h3>
              </div>

              {/* Frame Accent */}
              <div 
                className="absolute top-4 right-4 h-8 w-8 border-t border-r opacity-0 group-hover:opacity-40 transition-all duration-500 z-20" 
                style={{ borderColor: colors.gold }}
              />
            </motion.div>
          ))}
        </div>

        {/* Compact Footer Link */}
        <motion.div className="mt-10 flex justify-center">
          <button className="flex flex-col items-center gap-2 group">
            <span className="text-[9px] font-bold uppercase tracking-[0.4em]" style={{ color: colors.cyprus }}>Explore All Gifts</span>
            <motion.div 
              className="h-[1px] w-12 bg-gold" 
              whileHover={{ width: 60 }}
              style={{ backgroundColor: colors.gold }}
            />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default AnimatedGallery;