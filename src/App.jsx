import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

// Layout Components
import Nav from './component/Nav';
import Footer from './component/Footer';

// Main Pages
import Home from './pages/Home';
import MainGallery from './pages/MainGallery';
import MainProduct from './pages/MainProduct';
import MainContact from './pages/MainContact';
import MainAbout from './pages/MainAbout';

// Dedicated Category Pages
import HomeWatch from './component/Watch/HomeWatch';
import GoldHome from './component/Gold/GoldHome';
import Secondproduct from './component/product/SportsHome'
import Toys from './component/product/Toyshome'

/**
 * SCROLL TO TOP COMPONENT
 * This component listens for location changes and resets the window scroll
 * to (0, 0) immediately before the new page renders.
 */
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const AppContent = () => {
  const location = useLocation();

  return (
    <div className="bg-[#FAFAFA] min-h-screen flex flex-col">
      {/* ScrollToTop must be placed inside the Router context */}
      <ScrollToTop />
      
      <Nav />
      
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            {/* Standard Routes */}
            <Route path="/" element={<Home />} />
            <Route path="/gallery" element={<MainGallery />} />
            <Route path="/products" element={<MainProduct />} />
            <Route path="/contact" element={<MainContact />} />
            <Route path="/about" element={<MainAbout />} />

            {/* Individual Category Redirects */}
            <Route path="/watch" element={<HomeWatch />} />
            <Route path="/gold" element={<GoldHome />} />
            <Route path="/sports" element={<Secondproduct />} />
            <Route path="/toys" element={<Toys />} />
          </Routes>
        </AnimatePresence>
      </main>

      <Footer />
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  );
};

export default App;