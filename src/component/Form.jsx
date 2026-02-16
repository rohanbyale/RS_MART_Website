import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const ContactSection = () => {
  const CYPRUS = "#004643";
  const CLOUD_WHITE = "#FAFAFA";
  const GOLD = "#D4AF37";

  return (
    <section className="min-h-screen flex items-center justify-center py-20 px-6" style={{ backgroundColor: CLOUD_WHITE }}>
      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 shadow-2xl rounded-3xl overflow-hidden">
        
        {/* Left Side: Contact Information */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="p-12 md:p-20 text-white flex flex-col justify-between"
          style={{ backgroundColor: CYPRUS }}
        >
          <div>
            <h2 className="text-4xl md:text-5xl font-serif mb-8" style={{ color: GOLD }}>
              Visit Our <br /> <span className="italic font-light opacity-90 text-white">Boutique.</span>
            </h2>
            <p className="text-white/70 mb-12 max-w-sm leading-relaxed">
              Experience our curated collection of luxury timepieces and toys in person. We are ready to cater to all your needs.
            </p>

            <div className="space-y-8">
              <div className="flex items-center gap-6 group">
                <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-[#004643] transition-all">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest opacity-50">Location</p>
                  <p className="font-medium">Main Road, Pusad, Maharashtra</p>
                </div>
              </div>

              <div className="flex items-center gap-6 group">
                <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-[#004643] transition-all">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest opacity-50">Call Us</p>
                  <p className="font-medium">+91 00000 00000</p>
                </div>
              </div>

              <div className="flex items-center gap-6 group">
                <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-[#004643] transition-all">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest opacity-50">Email</p>
                  <p className="font-medium">hello@rsmart.com</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16 pt-8 border-t border-white/10 flex gap-6">
            <span className="text-xs uppercase tracking-tighter opacity-40">Follow Us</span>
            <div className="flex gap-4 text-xs font-bold uppercase tracking-widest" style={{ color: GOLD }}>
              <span>Instagram</span>
              <span>Facebook</span>
            </div>
          </div>
        </motion.div>

        {/* Right Side: Animated Form */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="bg-white p-12 md:p-20"
        >
          <form className="space-y-10">
            <div className="relative">
              <input 
                type="text" 
                placeholder="Your Name"
                className="w-full bg-transparent border-b py-4 outline-none transition-all focus:border-black placeholder:text-slate-300 text-lg"
                style={{ borderColor: `${CYPRUS}22` }}
              />
            </div>

            <div className="relative">
              <input 
                type="email" 
                placeholder="Email Address"
                className="w-full bg-transparent border-b py-4 outline-none transition-all focus:border-black placeholder:text-slate-300 text-lg"
                style={{ borderColor: `${CYPRUS}22` }}
              />
            </div>

            <div className="relative">
              <select 
                className="w-full bg-transparent border-b py-4 outline-none transition-all focus:border-black text-slate-400 text-lg appearance-none"
                style={{ borderColor: `${CYPRUS}22` }}
              >
                <option>Inquiry about Watches</option>
                <option>Inquiry about Toys</option>
                <option>General Message</option>
              </select>
            </div>

            <div className="relative">
              <textarea 
                rows="4"
                placeholder="How can we help?"
                className="w-full bg-transparent border-b py-4 outline-none transition-all focus:border-black placeholder:text-slate-300 text-lg resize-none"
                style={{ borderColor: `${CYPRUS}22` }}
              ></textarea>
            </div>

            <motion.button 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full py-5 rounded-full text-white font-bold tracking-widest uppercase text-xs flex items-center justify-center gap-3 shadow-xl transition-all"
              style={{ backgroundColor: CYPRUS }}
            >
              Send Message <Send size={14} />
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;