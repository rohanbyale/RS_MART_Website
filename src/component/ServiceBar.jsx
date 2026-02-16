import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Truck, RefreshCw, PenTool, Sparkle } from 'lucide-react';

const ServiceBar = () => {
  const CYPRUS = "#004643";
  const GOLD = "#D4AF37";

  const services = [
    { 
      title: "Certified Purity", 
      desc: "BIS Hallmarked Gold & GIA Diamonds", 
      icon: <ShieldCheck strokeWidth={1.2} /> 
    },
    { 
      title: "Bespoke Design", 
      desc: "Jewelry tailored to your unique story", 
      icon: <PenTool strokeWidth={1.2} /> 
    },
    { 
      title: "Secure Delivery", 
      desc: "Insured door-to-door shipping", 
      icon: <Truck strokeWidth={1.2} /> 
    },
    { 
      title: "Lifetime Trust", 
      desc: "Transparent buyback & upgrade policies", 
      icon: <RefreshCw strokeWidth={1.2} /> 
    },
  ];

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Background Decorative Element */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 opacity-[0.03] pointer-events-none">
        <Sparkle size={400} color={CYPRUS} />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 border border-stone-100 rounded-[2rem] overflow-hidden shadow-2xl shadow-stone-200/50">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              viewport={{ once: true }}
              className="group relative p-10 bg-white border-r last:border-r-0 border-stone-100 hover:bg-[#fafafa] transition-all duration-500"
            >
              {/* Icon with Floating Effect */}
              <motion.div 
                whileHover={{ rotateY: 180 }}
                transition={{ duration: 0.6 }}
                className="mb-8 w-12 h-12 flex items-center justify-center rounded-full bg-stone-50 text-stone-400 group-hover:bg-[#004643] group-hover:text-[#D4AF37] transition-all duration-500 shadow-sm"
              >
                {React.cloneElement(service.icon, { size: 22 })}
              </motion.div>
              
              <h3 className="text-xs font-bold uppercase tracking-[0.2em] mb-3 transition-colors duration-500" style={{ color: CYPRUS }}>
                {service.title}
              </h3>
              
              <p className="text-[11px] text-stone-400 leading-relaxed font-medium uppercase tracking-wider opacity-80 group-hover:opacity-100">
                {service.desc}
              </p>

              {/* Luxury Progress Border (Bottom) */}
              <div className="absolute bottom-0 left-0 w-full h-[3px] bg-transparent overflow-hidden">
                <motion.div 
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "0%" }}
                  transition={{ duration: 0.5, ease: "circOut" }}
                  className="w-full h-full"
                  style={{ backgroundColor: GOLD }}
                />
              </div>

              {/* Subtle Numbering */}
              <span className="absolute top-6 right-8 text-[40px] font-serif opacity-[0.03] select-none group-hover:opacity-[0.08] transition-opacity">
                0{index + 1}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceBar;