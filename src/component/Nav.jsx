import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from 'framer-motion';
import { FaFacebookF, FaInstagram, FaXTwitter, FaBars, FaXmark } from 'react-icons/fa6';

const LuxuryNavbar = () => {
  const [isNavVisible, setIsNavVisible] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { scrollYProgress } = useScroll();

  // Show/Hide navbar based on scroll position
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (latest > 0.05) setIsNavVisible(true);
    else setIsNavVisible(false);
  });

  const navLinks = [
    { name: 'Home', path: '/' },
      { name: 'Products', path: '/products' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'About US', path: '/about' },
  
    { name: 'Contact', path: '/contact' },
  ];

  // Animation Variants
  const navVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } 
    }
  };

  const menuVariants = {
    closed: { x: "100%", transition: { duration: 0.5, ease: [0.32, 0, 0.67, 0] } },
    opened: { x: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } }
  };

  const linkVariants = {
    closed: { opacity: 0, x: 20 },
    opened: i => ({
      opacity: 1,
      x: 0,
      transition: { delay: 0.1 + i * 0.1, duration: 0.5 }
    })
  };

  return (
    <>
      <motion.nav
        variants={navVariants}
        initial="hidden"
        animate={isNavVisible ? "visible" : "hidden"}
        className="fixed top-0 left-0 w-full h-20 z-[1000] flex items-center justify-between px-[5%] shadow-sm"
        style={{
          backgroundColor: 'rgba(250, 250, 250, 0.85)',
          backdropFilter: 'blur(12px)',
          borderBottom: '1px solid rgba(0, 0, 0, 0.05)'
        }}
      >
        {/* Brand Logo - Uses Link */}
        <Link to="/">
          <motion.div whileHover={{ scale: 1.05 }} className="cursor-pointer">
            <img 
              src="https://speedy.uenicdn.com/68a248ea-d52d-4a6c-a6be-7098b45a5035/n400_240a/image/upload/v1581932118/business/68a248ea-d52d-4a6c-a6be-7098b45a5035/000001jpg.jpg" 
              alt="RS Mart" 
              className="h-12 w-auto"
            />
          </motion.div>
        </Link>

        {/* Desktop Links - Uses NavLink for automatic active styling */}
        <div className="hidden lg:flex items-center gap-9">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) => 
                `relative py-2 text-[11px] font-bold tracking-[0.2em] uppercase transition-colors duration-300 ${
                  isActive ? 'text-[#D4AF37]' : 'text-[#1a1a1a] hover:text-[#D4AF37]'
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {link.name}
                  {isActive && (
                    <motion.div
                      layoutId="navUnderline"
                      className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#D4AF37]"
                    />
                  )}
                </>
              )}
            </NavLink>
          ))}
        </div>

        {/* Action Icons & Mobile Toggle */}
        <div className="flex items-center gap-6">
          <div className="hidden md:flex gap-4 text-[#1a1a1a]">
            {[FaInstagram, FaFacebookF, FaXTwitter].map((Icon, idx) => (
              <motion.a 
                key={idx} 
                href="#" 
                whileHover={{ y: -3, color: '#D4AF37' }}
                className="text-lg transition-colors"
              >
                <Icon />
              </motion.a>
            ))}
          </div>
          
          <motion.button 
            whileTap={{ scale: 0.9 }}
            className="lg:hidden text-2xl" 
            onClick={() => setMobileMenuOpen(true)}
          >
            <FaBars />
          </motion.button>
        </div>
      </motion.nav>

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Dark Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/40 z-[1100] backdrop-blur-sm"
            />
            
            <motion.div
              variants={menuVariants}
              initial="closed"
              animate="opened"
              exit="closed"
              className="fixed top-0 right-0 w-[85%] max-w-[360px] h-screen bg-[#fafafa] z-[1200] p-10 flex flex-col"
            >
              <div className="flex justify-end mb-12">
                <FaXmark 
                  onClick={() => setMobileMenuOpen(false)} 
                  className="text-3xl cursor-pointer hover:text-[#D4AF37] transition-colors" 
                />
              </div>

              <div className="flex flex-col gap-6">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.path}
                    custom={i}
                    variants={linkVariants}
                  >
                    <NavLink
                      to={link.path}
                      onClick={() => setMobileMenuOpen(false)}
                      className={({ isActive }) => 
                        `text-3xl font-serif italic tracking-wide transition-all ${
                          isActive ? 'text-[#D4AF37] pl-4' : 'text-[#1a1a1a]'
                        }`
                      }
                    >
                      {link.name}
                    </NavLink>
                  </motion.div>
                ))}
              </div>

              {/* Mobile Sidebar Footer */}
              <div className="mt-auto pt-10 border-t border-stone-200">
                <p className="text-[10px] tracking-[0.3em] text-stone-400 mb-6 uppercase font-bold">Follow Our Journey</p>
                <div className="flex gap-6 text-xl">
                  <FaInstagram className="hover:text-[#D4AF37]" /> 
                  <FaFacebookF className="hover:text-[#D4AF37]" /> 
                  <FaXTwitter className="hover:text-[#D4AF37]" />
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default LuxuryNavbar;