import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Clock, Navigation } from 'lucide-react';

const MapPage = () => {
  const CYPRUS = "#004643";
  const GOLD = "#D4AF37";
  const CLOUD_WHITE = "#FAFAFA";

  // Verified Real-Time Data for RS Mart
  const storeInfo = {
    name: "RS Mart",
    address: "Main Road, Kapad Line, Pusad, Maharashtra 445204",
    // Encoded Google Maps Embed URL for the specific Place ID
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14981.826647240361!2d77.5760408!3d19.9111457!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd975d67a179a9b%3A0xf65c2d3fce198c99!2sRS%20Mart!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin",
    hours: [
      { day: "Monday - Sunday", time: "10:00 AM - 08:30 PM" }
    ]
  };

  return (
    <section 
    id='location'
    className="py-12 px-6" style={{ backgroundColor: CLOUD_WHITE }}>
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10 text-center lg:text-left"
        >
          <h2 className="text-4xl md:text-6xl font-serif mb-4" style={{ color: CYPRUS }}>
            Visit Our Store <br /> <span className="italic font-light text-slate-400 text-3xl md:text-4xl">Pusad, Maharashtra</span>
          </h2>
          <div className="h-1 w-20 mx-auto lg:mx-0" style={{ backgroundColor: GOLD }} />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Information Sidebar */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-4 flex flex-col gap-6"
          >
            {/* Real-Time Status & Location */}
            <div className="p-6 rounded-3xl bg-white shadow-lg border border-black/5">
              <div className="flex gap-4 items-start mb-6">
                <div className="p-3 rounded-xl" style={{ backgroundColor: `${CYPRUS}10`, color: CYPRUS }}>
                  <MapPin size={22} />
                </div>
                <div>
                  <h4 className="text-[10px] uppercase tracking-[0.2em] font-bold opacity-40 mb-1">Location</h4>
                  <p className="text-lg font-serif leading-snug" style={{ color: CYPRUS }}>{storeInfo.address}</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="p-3 rounded-xl" style={{ backgroundColor: `${CYPRUS}10`, color: CYPRUS }}>
                  <Clock size={22} />
                </div>
                <div className="w-full">
                  <h4 className="text-[10px] uppercase tracking-[0.2em] font-bold opacity-40 mb-1">Opening Hours</h4>
                  {storeInfo.hours.map((item, i) => (
                    <div key={i} className="flex justify-between items-center text-sm">
                      <span className="font-semibold" style={{ color: CYPRUS }}>{item.day}</span>
                      <span className="opacity-60">{item.time}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Direct Action Button */}
            <motion.a 
              href={`https://www.google.com/maps/dir/?api=1&destination=RS+Mart+Pusad`}
              target="_blank"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="mt-auto py-5 rounded-2xl flex items-center justify-center gap-3 text-white font-bold text-xs tracking-widest uppercase shadow-xl transition-all"
              style={{ backgroundColor: CYPRUS }}
            >
              Get Real-Time Directions <Navigation size={16} />
            </motion.a>
          </motion.div>

          {/* Interactive Live Map */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-8 h-[450px] lg:h-full min-h-[400px] rounded-[32px] overflow-hidden shadow-2xl border-4 border-white relative bg-slate-200"
          >
            <iframe
              title="RS Mart Live Location"
              src={storeInfo.mapEmbedUrl}
              className="w-full h-full border-0"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default MapPage;