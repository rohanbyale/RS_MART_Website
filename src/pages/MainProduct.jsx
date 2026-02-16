import React from 'react'
import ProductHero from '../component/product/ProductHero'
import ProductPage from '../component/product/ProductPage'
import Two from '../component/product/Two'
import NewArrivals from '../component/product/NewArrical'
import Sale from '../component/product/Sale'
// import OfferPage from '../component/Offer'
import WhyChooseUS from '../component/product/WhyChooseUS'
import List from '../component/product/List'
const MainProduct = () => {
  return (
    <div>
      
      <ProductHero />

 
      <ProductPage />
      <Sale />
    
      <NewArrivals />
  <List />
         <Two />
      <WhyChooseUS />
        {/* <OfferPage /> */}

    </div>
  )
}

export default MainProduct