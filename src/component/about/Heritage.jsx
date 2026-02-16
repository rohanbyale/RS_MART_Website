import React from 'react';
import { motion } from 'framer-motion';
import { Diamond, History, Users, Award, ArrowUpRight } from 'lucide-react';

const AboutPillars = () => {
  const pillars = [
    {
      icon: <History className="w-7 h-7" />,
      title: "50+ Year Legacy",
      description: "Founded in 1970, we've stood the test of time, evolving from a local boutique to Pusad's hallmark of trust.",
      color: "from-blue-500 to-cyan-400", // Legacy Blue
      glow: "group-hover:shadow-blue-500/20"
    },
    {
      icon: <Diamond className="w-7 h-7" />,
      title: "Uncompromising Quality",
      description: "Every diamond and gold piece undergoes rigorous certification to ensure it meet global purity standards.",
      color: "from-amber-400 to-orange-500", // Gold/Quality
      glow: "group-hover:shadow-amber-500/20"
    },
    {
      icon: <Users className="w-7 h-7" />,
      title: "Community First",
      description: "We don't just sell jewelry; we celebrate milestones with the families that have trusted us for generations.",
      color: "from-rose-400 to-pink-600", // Community/Heart
      glow: "group-hover:shadow-rose-500/20"
    },
    {
      icon: <Award className="w-7 h-7" />,
      title: "Master Craftsmanship",
      description: "Our artisans blend traditional Indian techniques with modern design to create timeless masterpieces.",
      color: "from-emerald-400 to-teal-600", // Craft/Nature
      glow: "group-hover:shadow-emerald-500/20"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { duration: 0.8, ease: "easeOut" } 
    }
  };

  return (
    <section className="py-25 lg:py-33 bg-[#FAFAFA] relative overflow-hidden">
      {/* VIBRANT Abstract background shapes */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-gradient-to-br from-[#D4AF37]/20 to-orange-300/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-gradient-to-tr from-[#004643]/10 to-emerald-400/20 rounded-full blur-3xl animate-pulse" />

      <div className="container mx-auto px-5 lg:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          
          {/* Left Side: Header */}
          <div className="w-full lg:w-1/3 lg:sticky lg:top-40 self-start">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="h-px w-8 bg-gradient-to-r from-[#D4AF37] to-orange-500" />
                <span className="text-[#D4AF37] text-xs font-bold uppercase tracking-widest">Our Essence</span>
              </div>
              <h2 className="text-4xl md:text-6xl font-serif text-[#004643] leading-[1.1] mb-8">
                The Pillars of Our <span className="bg-gradient-to-r from-[#D4AF37] to-orange-500 bg-clip-text text-transparent italic block lg:inline">Excellence</span>
              </h2>
              <p className="text-stone-600 text-lg leading-relaxed max-w-md">
                Rooted in heritage, driven by purity. Our four fundamental truths guide every masterpiece we create.
              </p>
            </motion.div>
          </div>

          {/* Right Side: Animated Grid */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="w-full lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8"
          >
            {pillars.map((pillar, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{ y: -8 }}
                className={`group relative p-8 lg:p-10 bg-white border border-stone-200/60 rounded-3xl shadow-sm hover:shadow-2xl transition-all duration-500 ${pillar.glow}`}
              >
                {/* Hover Reveal Corner Icon */}
                <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity text-[#D4AF37]">
                  <ArrowUpRight size={20} />
                </div>

                {/* COLORFUL ICON BOX */}
                <div className={`w-14 h-14 bg-gradient-to-br ${pillar.color} text-white rounded-2xl flex items-center justify-center mb-8 transform group-hover:rotate-[10deg] transition-transform duration-500 shadow-lg`}>
                  {pillar.icon}
                </div>

                <h3 className="text-2xl font-serif text-[#004643] mb-4 group-hover:bg-gradient-to-r group-hover:from-[#004643] group-hover:to-[#D4AF37] group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                  {pillar.title}
                </h3>
                
                <p className="text-stone-500 leading-relaxed text-sm md:text-base">
                  {pillar.description}
                </p>

                {/* Bottom Border Glow Effect */}
                <div className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[3px] bg-gradient-to-r ${pillar.color} group-hover:w-1/2 transition-all duration-500 rounded-full`} />
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Improved Stats Bar with Gradient Border */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-24 lg:mt-32 p-[1px] bg-gradient-to-r from-transparent via-[#D4AF37]/30 to-transparent rounded-[2rem]"
        >
          <div className="p-8 lg:p-12 bg-white rounded-[2rem] shadow-xl shadow-stone-200/40">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4 divide-x-0 lg:divide-x divide-stone-100">
              {[
                { label: "Established", value: "1970", color: "text-blue-500" },
                { label: "Families Served", value: "50k+", color: "text-rose-500" },
                { label: "Purity Grade", value: "24 Karat", color: "text-amber-500" },
                { label: "Location", value: "Pusad, IN", color: "text-emerald-500" }
              ].map((stat, i) => (
                <div key={i} className="px-4 text-center">
                  <p className={`text-[10px] lg:text-[11px] uppercase tracking-[0.3em] ${stat.color} font-bold mb-2`}>
                    {stat.label}
                  </p>
                  <p className="text-2xl lg:text-4xl font-serif text-[#004643]">
                    {stat.value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutPillars;