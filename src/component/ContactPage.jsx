import React from 'react';
import { motion } from 'framer-motion';
import { 
  MapPin, Mail, Phone, Send, 
  Instagram, Facebook, Youtube, 
  MessageCircle, Sparkles,
  ArrowRight, Globe
} from 'lucide-react';

const ContactSocialPage = () => {
  const CYPRUS = "#004643";
  const GOLD = "#D4AF37";
  const CLOUD_WHITE = "#FAFAFA";

  // --- EDIT YOUR DATA HERE ---
  const contactData = {
    phone: "+918459980171", // Your WhatsApp/Calling Number
    email: "luplenchwar@gmail.com",
    address: "Main Road Kapad Line, Pusad",
    mapsUrl: "https://goo.gl/maps/yourlink", // Add your real Google Maps link here
    whatsappMessage: "Hello RS Mart! I would like to inquire about your services." // Pre-filled text
  };

  const socialLinks = [
    { 
      name: "Instagram", 
      handle: "@rsmart_pusad", 
      url: "https://www.instagram.com/r_s_mart_pusad?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==", 
      icon: <Instagram size={20} />, 
      color: "#E1306C",
      desc: "Daily updates"
    },
    { 
      name: "WhatsApp", 
      handle: "Chat Now", 
      // This creates the link: https://wa.me/number?text=message
      url: `https://wa.me/${contactData.phone.replace('+', '')}?text=${encodeURIComponent(contactData.whatsappMessage)}`, 
      icon: <MessageCircle size={20} />, 
      color: "#25D366",
      desc: "Instant inquiries"
    },
    { 
      name: "Facebook", 
      handle: "RS Mart", 
      url: "https://facebook.com/rsmart", 
      icon: <Facebook size={20} />, 
      color: "#1877F2",
      desc: "Community events"
    },
    { 
      name: "YouTube", 
      handle: "Gallery", 
      url: "https://youtube.com/@rsmart", 
      icon: <Youtube size={20} />, 
      color: "#FF0000",
      desc: "Showcases"
    }
  ];

  return (
    <div className="min-h-screen py-12 md:py-24 px-4 md:px-6 relative overflow-hidden" style={{ backgroundColor: CLOUD_WHITE }}>
      
      {/* Background Ambient Glow */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0">
        <div className="absolute top-[-5%] right-[-10%] w-[300px] md:w-[500px] h-[300px] md:h-[500px] rounded-full blur-[80px] md:blur-[120px] opacity-[0.04]" style={{ backgroundColor: GOLD }} />
        <div className="absolute bottom-[-5%] left-[-10%] w-[300px] md:w-[500px] h-[300px] md:h-[500px] rounded-full blur-[80px] md:blur-[120px] opacity-[0.06]" style={{ backgroundColor: CYPRUS }} />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12 md:mb-20"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white shadow-sm border border-stone-100 mb-6">
            <Sparkles size={12} style={{ color: GOLD }} />
            <span className="text-[8px] md:text-[9px] uppercase tracking-[0.3em] font-black text-stone-400">Connection Hub</span>
          </div>
          
          <h2 className="text-5xl md:text-8xl font-serif mb-4 tracking-tighter" style={{ color: CYPRUS }}>
            Reach <span className="italic font-light text-stone-300">Out.</span>
          </h2>
          <div className="h-[1px] w-16 bg-[#D4AF37] mx-auto opacity-50" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8">
          
          {/* Left: Contact Identity Card */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5"
          >
            <div className="p-8 md:p-12 rounded-[2.5rem] md:rounded-[3.5rem] bg-[#004643] text-white shadow-2xl relative overflow-hidden group h-full flex flex-col justify-between">
              <div className="absolute -top-10 -right-10 opacity-10 group-hover:rotate-12 transition-transform duration-1000">
                <Globe size={220} strokeWidth={1} />
              </div>

              <div className="relative z-10">
                <h3 className="text-2xl md:text-3xl font-serif mb-8 md:mb-12">Boutique <br/><span style={{ color: GOLD }}>Concierge</span></h3>
                
                <div className="space-y-6 md:space-y-10">
                  <a href={contactData.mapsUrl} target="_blank" rel="noopener noreferrer" className="flex gap-4 md:gap-6 items-start group/link">
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl bg-white/10 flex items-center justify-center shrink-0 group-hover/link:bg-white/20 transition-colors">
                      <MapPin size={18} style={{ color: GOLD }} />
                    </div>
                    <div>
                      <p className="text-[9px] uppercase tracking-widest text-white/40 font-bold mb-1">Visit Us</p>
                      <p className="text-base md:text-lg font-medium leading-snug underline-offset-4 group-hover/link:underline">{contactData.address}</p>
                    </div>
                  </a>

                  <a href={`mailto:${contactData.email}`} className="flex gap-4 md:gap-6 items-start group/link">
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl bg-white/10 flex items-center justify-center shrink-0 group-hover/link:bg-white/20 transition-colors">
                      <Mail size={18} style={{ color: GOLD }} />
                    </div>
                    <div className="flex-1">
                      <p className="text-[9px] uppercase tracking-widest text-white/40 font-bold mb-1">Inquiries</p>
                      <p className="text-base md:text-lg font-medium break-all group-hover/link:text-[#D4AF37] transition-colors">{contactData.email}</p>
                    </div>
                  </a>
                </div>
              </div>

              <div className="relative z-10 mt-10 md:mt-16 space-y-3">
                {/* Instant Call Action */}
                <a 
                  href={`tel:${contactData.phone}`}
                  className="w-full py-4 rounded-xl bg-[#D4AF37] text-[#004643] font-black text-[10px] tracking-widest uppercase flex items-center justify-center gap-2 active:scale-95 transition-transform cursor-pointer shadow-lg"
                >
                  <Phone size={14} /> Instant Call
                </a>
                <a 
                  href={`mailto:${contactData.email}?subject=Inquiry`}
                  className="w-full py-4 rounded-xl border border-white/20 text-white font-bold text-[10px] tracking-widest uppercase active:bg-white/10 transition-colors cursor-pointer flex items-center justify-center"
                >
                  Send Message
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right: Social Grid */}
          <div className="lg:col-span-7 grid grid-cols-2 gap-4 md:gap-6">
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.name}
                href={social.url}
                target="_blank" 
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-5 md:p-8 rounded-[1.8rem] md:rounded-[2.5rem] bg-white border border-stone-100 shadow-sm flex flex-col justify-between group active:scale-95 transition-all hover:border-[#D4AF37]/30 hover:shadow-md cursor-pointer"
              >
                <div>
                  <div className="flex justify-between items-start mb-6 md:mb-10">
                    <div 
                      className="w-10 h-10 md:w-14 md:h-14 rounded-xl md:rounded-[1.25rem] flex items-center justify-center"
                      style={{ backgroundColor: `${social.color}10`, color: social.color }}
                    >
                      {social.icon}
                    </div>
                    <ArrowRight size={16} className="text-stone-300 md:group-hover:translate-x-1 transition-transform" />
                  </div>
                  <h4 className="text-base md:text-xl font-bold text-stone-800 mb-1">{social.name}</h4>
                  <p className="text-[10px] md:text-xs font-bold text-[#D4AF37] mb-3">{social.handle}</p>
                </div>
                <p className="hidden md:block text-[11px] text-stone-400 font-medium leading-relaxed italic border-t border-stone-50 pt-4">
                  {social.desc}
                </p>
              </motion.a>
            ))}
            
            {/* Branding Statement Tile */}
            <div className="col-span-2 p-6 md:p-10 rounded-[1.8rem] md:rounded-[2.5rem] bg-stone-50 border border-dashed border-stone-200 flex flex-col items-center justify-center text-center">
              <p className="text-[8px] md:text-[10px] uppercase tracking-[0.3em] font-black text-stone-400">
                Join the RS Mart Community
              </p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-16 md:mt-24 text-center">
          <p className="text-[8px] font-black uppercase tracking-[1em] text-stone-300">EST. 2026</p>
        </div>
      </div>
    </div>
  );
};

export default ContactSocialPage;