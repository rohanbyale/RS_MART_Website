import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Clock, Sun, Moon, Coffee, Sparkles, DoorOpen, DoorClosed, MapPin } from 'lucide-react';

const TimingPage = () => {
  const colors = {
    cyprus: "#004643",
    gold: "#D4AF37",
    roseGold: "#E7AC93",
    cloudWhite: "#FAFAFA",
    red: "#E63946"
  };

  const [isOpen, setIsOpen] = useState(false);
  const [currentDayName, setCurrentDayName] = useState("");
  const [weekDates, setWeekDates] = useState([]);
  const [currentTime, setCurrentTime] = useState(new Date());

  const schedule = [
    { day: "Sun", time: "10:00 - 20:30", icon: <Sun size={14} /> },
    { day: "Mon", time: "10:00 - 20:30", icon: <Clock size={14} /> },
    { day: "Tue", time: "10:00 - 20:30", icon: <Coffee size={14} /> },
    { day: "Wed", time: "10:00 - 20:30", icon: <Clock size={14} /> },
    { day: "Thu", time: "10:00 - 20:30", icon: <Clock size={14} /> },
    { day: "Fri", time: "10:00 - 20:30", icon: <Clock size={14} /> },
    { day: "Sat", time: "10:00 - 20:30", icon: <Moon size={14} /> },
  ];

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const now = new Date();
    setCurrentDayName(days[now.getDay()]);

    const currentHour = now.getHours();
    const currentMin = now.getMinutes();
    const totalMins = currentHour * 60 + currentMin;
    const openTime = 10 * 60; 
    const closeTime = 20 * 60 + 30; 

    setIsOpen(totalMins >= openTime && totalMins < closeTime);

    const dates = days.map((_, index) => {
      const date = new Date(now.getFullYear(), now.getMonth(), now.getDate() - now.getDay() + index);
      return date.getDate().toString().padStart(2, '0');
    });
    setWeekDates(dates);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="min-h-screen py-12 px-6 lg:px-24 overflow-hidden flex items-center justify-center relative" style={{ backgroundColor: colors.cloudWhite }}>
      
      {/* --- ORIGINAL WATCH SVG (WITH ENHANCED COLORS) --- */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-0">
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5 }}
          className="relative w-[350px] h-[350px] md:w-[600px] md:h-[600px]"
        >
          {/* Outer Watch Case Ring - Now Gold */}
          <div className="absolute inset-0 border-[2px] rounded-full opacity-20" style={{ borderColor: colors.gold }} />
          
          {/* Main Gear - Original SVG Logic with Gold Stroke */}
          <motion.svg 
            animate={{ rotate: 360 }}
            transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
            viewBox="0 0 100 100" className="absolute inset-0 p-8 md:p-12 opacity-30"
          >
            <circle cx="50" cy="50" r="40" fill="none" stroke={colors.gold} strokeWidth="0.5" strokeDasharray="2 2" />
            {[...Array(12)].map((_, i) => (
              <rect key={i} x="49.5" y="5" width="1" height="10" fill={colors.cyprus} transform={`rotate(${i * 30} 50 50)`} />
            ))}
          </motion.svg>

          {/* Inner Escapement Gear (Heartbeat) - Original Movement */}
          <motion.div 
            animate={{ rotate: [0, 15, 0, -15, 0], scale: [1, 1.05, 1] }}
            transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 md:w-32 md:h-32 flex items-center justify-center"
          >
            <div className="w-full h-full border border-stone-300 rounded-full flex items-center justify-center bg-white/10 backdrop-blur-sm">
                <div className="w-[1px] h-full bg-stone-400 absolute opacity-30" />
                <div className="h-[1px] w-full bg-stone-400 absolute opacity-30" />
                <div className="w-4 h-4 rounded-full border-2 bg-white shadow-lg" style={{ borderColor: colors.gold }} />
            </div>
          </motion.div>

          {/* Floating Mechanical Sparks - Colorful Gold */}
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 rounded-full shadow-[0_0_8px_#D4AF37]"
              style={{ backgroundColor: colors.gold, left: '50%', top: '50%' }}
              animate={{ 
                x: [0, (Math.random() - 0.5) * 400],
                y: [0, (Math.random() - 0.5) * 400],
                opacity: [0, 0.5, 0],
                scale: [0, 1.5, 0]
              }}
              transition={{ duration: 4, repeat: Infinity, delay: i * 0.7 }}
            />
          ))}
        </motion.div>
      </div>

      {/* --- UI CONTENT --- */}
      <div className="relative z-10 w-full max-w-7xl flex flex-col lg:flex-row items-center justify-between gap-12">
        
        {/* LEFT: STATUS BOARD */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          className="w-full lg:w-[45%] flex flex-col items-center lg:items-start text-center lg:text-left"
        >
          <div className="mb-6 inline-flex items-center gap-3 px-4 py-2 rounded-full border border-stone-200 bg-white shadow-lg">
              <span className={`relative flex h-2 w-2`}>
                <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${isOpen ? 'bg-emerald-400' : 'bg-red-400'}`}></span>
                <span className={`relative inline-flex rounded-full h-2 w-2 ${isOpen ? 'bg-emerald-500' : 'bg-red-500'}`}></span>
              </span>
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-stone-500">Real-time Status</span>
          </div>

          <h1 className="text-6xl md:text-8xl font-serif leading-[0.9] mb-6 text-[#004643] tracking-tight">
            {isOpen ? "Shop is" : "Currently"} <br />
            <span className="italic font-light bg-clip-text text-transparent bg-gradient-to-r from-[#D4AF37] to-[#E7AC93]">
              {isOpen ? "Open Now" : "Closed"}
            </span>
          </h1>

          <p className="text-stone-600 text-sm md:text-base mb-10 font-medium leading-relaxed max-w-sm">
            {isOpen 
              ? "We are currently welcoming guests at our Pusad boutique. Visit us for an exclusive curation experience."
              : "Our studio is resting. We will reopen tomorrow morning at 10:00 AM to assist you with your luxury needs."}
          </p>

          <div className="flex items-center gap-8 bg-[#004643] p-6 rounded-[2rem] shadow-2xl shadow-[#004643]/30 text-white border border-white/10">
              <div className="pr-8 border-r border-white/10 text-center lg:text-left">
                  <p className="text-[10px] uppercase tracking-widest text-white/50 font-bold mb-1">Local Time</p>
                  <p className="text-3xl font-mono font-bold tracking-tighter">
                    {currentTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </p>
              </div>
              {isOpen ? <DoorOpen size={40} className="text-[#D4AF37]" /> : <DoorClosed size={40} className="text-white/20" />}
          </div>
        </motion.div>

        {/* RIGHT: SCHEDULE CARD */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          className="w-full lg:w-[35%] max-w-md"
        >
          <div className="bg-white/80 backdrop-blur-xl p-8 rounded-[3rem] shadow-[0_50px_100px_rgba(0,0,0,0.06)] border border-white">
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-3">
                <Sparkles size={16} className="text-[#D4AF37]" />
                <h3 className="font-serif text-2xl text-[#004643]">Weekly Hours</h3>
              </div>
              <MapPin size={18} className="text-stone-300" />
            </div>

            <div className="space-y-2">
              {schedule.map((item, index) => {
                const isToday = item.day === currentDayName.substring(0, 3);
                const displayDate = weekDates[index] || "--";
                
                return (
                  <div
                    key={item.day}
                    className={`flex items-center justify-between p-4 rounded-2xl transition-all duration-500 ${
                      isToday 
                      ? 'bg-[#004643] text-white shadow-xl scale-[1.05]' 
                      : 'text-[#004643] opacity-60 hover:opacity-100 hover:bg-stone-50'
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <span className={`text-[11px] font-bold w-6 ${isToday ? 'text-[#D4AF37]' : 'text-stone-300'}`}>
                        {displayDate}
                      </span>
                      <span className="text-sm font-bold tracking-widest uppercase">{item.day}</span>
                    </div>

                    <div className="flex items-center gap-3">
                      <span className={`text-xs font-bold font-mono ${isToday ? 'text-white' : 'text-stone-400'}`}>
                        {item.time.replace('20:30', '08:30 PM').replace('10:00', '10:00 AM')}
                      </span>
                      {isToday && <div className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] animate-pulse" />}
                    </div>
                  </div>
                );
              })}
            </div>
            
            <p className="text-center mt-8 text-[9px] uppercase tracking-[0.4em] text-stone-400 font-bold">
              Main Road, Kapad Line, Pusad
            </p>
          </div>
        </motion.div>
      </div>

      {/* FOOTER */}
      <div className="absolute bottom-8 left-0 right-0 flex flex-col items-center opacity-30 pointer-events-none">
        <div className="w-px h-10 bg-[#004643] mb-4" />
        <p className="text-[8px] font-black uppercase tracking-[1.2em] text-[#004643]">RSmart Studio</p>
      </div>
    </section>
  );
};

export default TimingPage;