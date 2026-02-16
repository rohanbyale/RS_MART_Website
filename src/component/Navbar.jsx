import React from 'react';
import { motion, LayoutGroup } from 'framer-motion';
import { useNavigate } from 'react-router-dom'; // 1. Import useNavigate
import { 
  Watch, Gem, Gift, Dumbbell, Baby, LayoutGrid 
} from 'lucide-react';

const RSNavbar = ({ activeTab = "all", onTabChange }) => {
  const navigate = useNavigate(); // 2. Initialize navigate

  const menuItems = [
    { id: 'all', name: "Product Home", icon: <LayoutGrid size={18}/>, path: "/products" },
    { id: 'watches', name: "Watches", icon: <Watch size={18}/>, path: "/watch" },
    { id: 'jewelry', name: "Jewelry", icon: <Gem size={18}/>, path: "/gold" },
    { id: 'sports', name: "Sports", icon: <Dumbbell size={18}/>, path: "/sports" },
    { id: 'toys', name: "Toys", icon: <Baby size={18}/>, path: "/toys" },
    
  ];

  const handlePress = (e, item) => {
    e.preventDefault(); 
    
    // Move the gold bar immediately
    if (onTabChange) onTabChange(item.id);

    // 3. Navigate instantly without reloading the browser
    navigate(item.path); 
  };

  return (
    <nav className="w-full bg-white/95 backdrop-blur-md border-b border-slate-200 sticky z-[40] overflow-hidden" style={{ top: '72px' }}>
      <LayoutGroup>
        <div className="flex items-center justify-start md:justify-center gap-8 md:gap-16 px-6 md:px-12 py-4 md:py-6 overflow-x-auto no-scrollbar scroll-smooth">
          {menuItems.map((item) => {
            const isActive = activeTab === item.id;
            
            return (
              <a 
                key={item.id} 
                href={item.path}
                onClick={(e) => handlePress(e, item)}
                className={`relative flex flex-col items-center gap-2 text-[10px] md:text-[11px] uppercase tracking-[0.2em] font-black flex-shrink-0 transition-all duration-300 outline-none select-none ${
                  isActive ? "text-[#B8860B]" : "text-slate-400 hover:text-slate-900"
                }`}
              >
                <motion.div 
                  animate={isActive ? { scale: 1.15, y: -2 } : { scale: 1, y: 0 }}
                  className={`transition-colors duration-300 ${isActive ? "text-[#B8860B]" : ""}`}
                >
                  {item.icon}
                </motion.div>

                <span className={`whitespace-nowrap transition-all duration-300 ${isActive ? "font-black" : "font-bold"}`}>
                  {item.name}
                </span>
                
                {isActive && (
                  <motion.div 
                    layoutId="activeTabUnderline"
                    className="absolute -bottom-[17px] md:-bottom-[25px] w-full h-[3.5px] bg-[#B8860B] rounded-t-full shadow-[0_-2px_8px_rgba(184,134,11,0.2)]"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
              </a>
            );
          })}
        </div>
      </LayoutGroup>
      <style dangerouslySetInnerHTML={{ __html: `.no-scrollbar::-webkit-scrollbar { display: none; } .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }` }} />
    </nav>
  );
};

export default RSNavbar;