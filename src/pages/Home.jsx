

import React from 'react'
import HeroSection from '../component/Hero'

import OfferMarquee from '../component/OfferMarquee'
import About from '../component/About'
import Watches from '../component/Watches'
import Toys from '../component/Toys.jsx'
import AnimatedGallery from '../component/Gallery.jsx'
import Amenities from '../component/Amenities.jsx'
import Product from '../component/Product.jsx'
import Reviews from '../component/Reviews.jsx'
import Form from '../component/Form.jsx'
import Map from '../component/Map.jsx'
import Timing from '../component/Timing.jsx'
import ContactPage from '../component/ContactPage.jsx'
import Footer from '../component/Footer'
import Nav from '../component/Nav.jsx'
import Partners from '../component/Partners.jsx'
import PhilosophyBar from '../component/Philosopy.jsx'
import Offer from '../component/Offer.jsx'
import KineticProductPage from '../component/Kproduct.jsx'
import Two from '../component/product/Two.jsx'
import List from '../component/product/List.jsx'
const App = () => {
  return (
    <div>


      <HeroSection />
      {/* <KineticProductPage /> */}
      <OfferMarquee />

      <Offer />
      <Watches />
      <Partners />
      <Toys />
      <About />
      <Product />
      <List />
      <AnimatedGallery />
      
      <Timing />
      <Map />

      <Amenities />

      <Reviews />




      <PhilosophyBar />


    </div>
  )
}

export default App