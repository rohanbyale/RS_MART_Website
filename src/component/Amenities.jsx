import React from 'react';
import { motion } from 'framer-motion';
import { Users, CreditCard, Bike } from 'lucide-react'; 

const Amenities = () => {
  const colors = {
    cyprus: "#222F30",
    gold: "#D4AF37",
    lightCard: "#F6F6F6", 
    thirdCard: "#F8E6A0", // New custom color for the 3rd card (Champagne/Muted Gold)
  };

  const amenityList = [
    { 
      id: 1, 
      icon: <Users size={80} strokeWidth={0.5} />, 
      tag: "CHILDREN FRIENDLY",
      title: "Good for children", 
      desc: "A safe, family-friendly environment designed to welcome all ages.",
      isDark: true
    },
    { 
      id: 2, 
      icon: <CreditCard size={80} strokeWidth={0.5} />, 
      tag: "SECURE TRANSACTIONS",
      title: "Secure Payments", 
      desc: "Seamless transactions with all major digital and card payments.",
      isDark: false
    },
    { 
      id: 3, 
      icon: <Bike size={80} strokeWidth={0.5} />, 
      tag: "CONVENIENT COMMUTE",
      title: "Bike Parking", 
      desc: "Dedicated and secure parking available for your daily commute.",
      isDark: false,
      customColor: colors.thirdCard // Applied specifically to the 3rd item
    },
  ];

  return (
    <section id='amenities' className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        
        {/* Centered Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 flex flex-col items-center text-center"
        >
          <h2 className="text-6xl md:text-7xl font-serif tracking-tighter text-[#222F30] mb-4">
            Amenities.
          </h2>
          {/* Centered Accent Line */}
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: "60px" }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
            className="h-[2px]" 
            style={{ backgroundColor: colors.gold }}
          />
        </motion.div>

        {/* Amenity Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {amenityList.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="group"
            >
              <div 
                className={`relative h-[400px] p-10 rounded-[24px] flex flex-col justify-between transition-all duration-700 ease-out shadow-sm hover:shadow-2xl hover:-translate-y-3 overflow-hidden`}
                // LOGIC: Use customColor if exists, else fallback to isDark logic
                style={{ backgroundColor: item.customColor ? item.customColor : (item.isDark ? colors.cyprus : colors.lightCard) }}
              >
                {/* Visual Impact: Icon */}
                <div className={`transition-all duration-700 group-hover:scale-105 ${item.isDark ? 'text-white/80' : 'text-stone-300'}`}>
                  {item.icon}
                </div>

                {/* Text Content */}
                <div className="relative z-10">
                  <span className={`text-[9px] font-bold tracking-[0.4em] block mb-2 ${item.isDark ? 'text-white/30' : 'text-[#D4AF37]'}`}>
                    {item.tag}
                  </span>
                  <h3 className={`text-3xl font-serif mb-4 leading-tight ${item.isDark ? 'text-white' : 'text-[#222F30]'}`}>
                    {item.title}
                  </h3>
                  <p className={`text-sm leading-relaxed font-light max-w-[280px] ${item.isDark ? 'text-white/50' : 'text-stone-500'}`}>
                    {item.desc}
                  </p>
                </div>

                {/* Refined Bottom Bar */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-20 h-1 rounded-t-full transition-all duration-500 group-hover:w-32 group-hover:h-1.5"
                  style={{ backgroundColor: colors.gold }}
                />

                {/* Subtle Light leak for Dark Card only */}
                {item.isDark && (
                  <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white/5 blur-[80px] rounded-full pointer-events-none" />
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Amenities;