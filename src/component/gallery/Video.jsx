import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence, useInView, useScroll, useTransform } from 'framer-motion';
import { X, Play, Sparkles, ArrowUpRight } from 'lucide-react';

const AutoPlayVideo = ({ video, setSelectedVideo, index }) => {
  const containerRef = useRef(null);
  const videoRef = useRef(null);
  const isInView = useInView(containerRef, { amount: 0.4 });
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  useEffect(() => {
    if (isInView) {
      videoRef.current?.play().catch(() => {});
    } else {
      videoRef.current?.pause();
    }
  }, [isInView]);

  return (
    <motion.div 
      ref={containerRef}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      viewport={{ once: true }}
      // FIXED HEIGHT: h-[450px] md:h-[550px] ensures every card is identical
      className="relative w-full h-[450px] md:h-[550px] overflow-hidden group cursor-pointer rounded-[2rem] md:rounded-[3rem] bg-[#004643]/10 border border-white/5"
      onClick={() => setSelectedVideo(video)}
    >
      <motion.div style={{ y, height: "120%", top: "-10%" }} className="absolute inset-0 w-full">
        <video 
          ref={videoRef}
          src={video.url}
          muted loop playsInline
          className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-700"
        />
      </motion.div>

      <div className="absolute inset-0 bg-gradient-to-t from-[#010F0E]/80 via-transparent to-transparent opacity-60" />

      <div className="absolute inset-0 p-8 md:p-10 flex flex-col justify-between z-20">
        <div className="flex justify-between items-start">
          <div className="px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-xl border border-white/10 text-[10px] text-[#D4AF37] tracking-[0.3em] font-bold uppercase">
            {video.cat}
          </div>
          <ArrowUpRight className="text-white/40 group-hover:text-white transition-colors" size={24} />
        </div>

        <div className="space-y-3">
          <h3 className="text-3xl md:text-4xl font-serif text-white tracking-tight">
            {video.title}
          </h3>
          <div className="flex items-center gap-3 opacity-60 group-hover:opacity-100 transition-opacity">
             <div className="h-px w-6 bg-[#D4AF37]" />
             <span className="text-[9px] text-[#D4AF37] uppercase tracking-[0.4em]">Play Film</span>
          </div>
        </div>
      </div>

      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-16 h-16 rounded-full bg-[#D4AF37] transition-all duration-500 flex items-center justify-center scale-0 group-hover:scale-100 text-black shadow-2xl">
          <Play size={24} fill="currentColor" />
        </div>
      </div>
    </motion.div>
  );
};

const HighEndCinemaGallery = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => setMousePos({ x: e.clientX, y: e.clientY });
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const videos = [
    { id: 1, title: "Golden Archive", cat: "Interior", url: "https://www.pexels.com/download/video/31757673/" },
    { id: 2, title: "The Atrium", cat: "Design", url: "https://www.pexels.com/download/video/6328383/" },
    { id: 3, title: "Luxe Decor", cat: "Vibe", url: "https://www.pexels.com/download/video/6099389/" },
    { id: 4, title: "Royal Suite", cat: "Exclusive", url: "https://www.pexels.com/download/video/30765045/" },
  ];

  return (
    <div className="min-h-screen bg-[#010F0E] py-20 px-4 md:px-12 relative overflow-hidden">
      
      <motion.div 
        animate={{ x: mousePos.x - 400, y: mousePos.y - 400 }}
        transition={{ type: "tween", ease: "backOut", duration: 0.8 }}
        className="fixed inset-0 w-[800px] h-[800px] rounded-full bg-[#004643]/10 blur-[140px] pointer-events-none z-0"
      />

      <header className="max-w-screen-2xl mx-auto mb-16 relative z-10 text-center md:text-left">
        <div className="flex flex-col md:flex-row items-center md:items-end justify-between border-b border-white/10 pb-12">
          <div className="overflow-hidden">
            <motion.h1 
              initial={{ y: "100%" }} animate={{ y: 0 }} transition={{ duration: 1, ease: "circOut" }}
              className="text-7xl md:text-[10rem] font-serif text-white tracking-tighter leading-none"
            >
              Films<span className="text-[#D4AF37]">.</span>
            </motion.h1>
          </div>
          <div className="flex items-center gap-4 text-[#D4AF37] mt-8 md:mt-0">
             <Sparkles size={20} className="animate-pulse" />
             <p className="text-[10px] uppercase tracking-[0.6em] font-bold opacity-70">Archive 2026</p>
          </div>
        </div>
      </header>

      {/* SIMPLE UNIFORM GRID: 2 columns on desktop, 1 on mobile */}
      <div className="max-w-screen-2xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 relative z-10">
        {videos.map((video, index) => (
          <AutoPlayVideo key={video.id} video={video} index={index} setSelectedVideo={setSelectedVideo} />
        ))}
      </div>

      <AnimatePresence>
        {selectedVideo && (
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-2xl flex items-center justify-center p-4 md:p-12"
          >
            <button onClick={() => setSelectedVideo(null)} className="absolute top-8 right-8 z-[110] text-white/40 hover:text-[#D4AF37] transition-colors">
              <X size={40} strokeWidth={1} />
            </button>
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}
              className="w-full max-w-6xl aspect-video relative shadow-2xl rounded-3xl overflow-hidden border border-white/10 bg-black"
            >
              <video autoPlay controls className="w-full h-full object-contain" src={selectedVideo.url} />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <footer className="mt-32 flex flex-col items-center opacity-20 relative z-10">
        <div className="w-px h-20 bg-gradient-to-b from-[#D4AF37] to-transparent mb-6" />
        <p className="text-[10px] uppercase tracking-[1em] text-white">The End</p>
      </footer>
    </div>
  );
};

export default HighEndCinemaGallery;