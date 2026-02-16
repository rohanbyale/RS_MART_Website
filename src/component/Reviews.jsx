import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const Reviews = () => {
  // Brand Colors
  const CYPRUS = "#004643"; 
  const CLOUD_WHITE = "#FAFAFA"; 
  const ACCENT_BLUE = "#6290C8"; 
  const GOLD = "#D4AF37"; // Premium Golden Text

  const reviewData = [
    {
      id: 1,
      name: "randhir singh",
      date: "04 December 2025",
      rating: 5,
      text: "Exceptional service and high-quality collection. Highly recommended!",
      img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=100"
    },
    {
      id: 2,
      name: "DUKARE SHUBAHM AND G",
      date: "21 June 2025",
      rating: 4,
      text: "Best trending shop in ukd. Always find the latest styles here.",
      img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=100"
    },
    {
      id: 3,
      name: "Aryan Sharma",
      date: "15 January 2026",
      rating: 5,
      text: "Great experience with the watch collection. The staff is very helpful.",
      img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=100"
    }
  ];

  return (
    <section
    id='reviews'
    className="relative py-16 overflow-hidden" style={{ backgroundColor: CLOUD_WHITE }}>
      
      {/* Background Decor */}
      <div 
        className="absolute -top-24 -right-24 w-96 h-96 opacity-5 pointer-events-none rounded-full blur-3xl"
        style={{ background: CYPRUS }} 
      />

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Header Block */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-5xl md:text-6xl font-serif mb-4" style={{ color: CYPRUS }}>Reviews</h2>
          
          <div className="flex flex-col items-center gap-2">
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} fill={i < 4 ? GOLD : "none"} stroke={GOLD} size={20} />
              ))}
            </div>
            <div className="flex items-center gap-2 opacity-70">
              <span className="text-[10px] uppercase tracking-widest font-bold" style={{ color: CYPRUS }}>
                5 Reviews • Powered by
              </span>
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" 
                alt="Google" 
                className="h-4 brightness-90"
              />
            </div>
          </div>
        </motion.div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto mb-12">
          {reviewData.map((review, index) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ y: -10 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
              className="p-8 rounded-2xl shadow-2xl flex flex-col h-full group transition-all duration-500"
              style={{ backgroundColor: CYPRUS }}
            >
              <Quote className="mb-4 opacity-20 transition-opacity group-hover:opacity-40" size={40} style={{ color: GOLD }} />
              
              <p className="leading-relaxed italic mb-8 flex-grow text-lg" style={{ color: GOLD }}>
                "{review.text}"
              </p>

              <div className="flex items-center gap-4 mt-auto pt-6 border-t border-white/10">
                <img 
                  src={review.img} 
                  className="w-12 h-12 rounded-full object-cover border-2 transition-transform duration-500 group-hover:scale-110" 
                  style={{ borderColor: GOLD }}
                  alt={review.name} 
                />
                <div>
                  <h4 className="text-sm font-bold capitalize tracking-wide" style={{ color: GOLD }}>{review.name}</h4>
                  <p className="text-[10px] uppercase font-medium opacity-60 text-white">{review.date}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-3 rounded-full border font-bold text-[10px] tracking-[0.2em] uppercase transition-all shadow-md hover:shadow-lg"
            style={{ borderColor: ACCENT_BLUE, color: ACCENT_BLUE }}
          >
            Add Review
          </motion.button>
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-3 rounded-full text-white font-bold text-[10px] tracking-[0.2em] uppercase shadow-lg transition-all"
            style={{ backgroundColor: ACCENT_BLUE }}
          >
            All Reviews
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default Reviews;