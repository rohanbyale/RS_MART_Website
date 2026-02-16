import React from 'react'
import Abouthero from '../component/about/Abouthero'
import Heritage from '../component/about/Heritage'
import Craftman from '../component/about/Craftman'
import GiftShopExpertise from '../component/about/Experties'
import AboutM from '../component/about/AboutM'
import Signature from '../component/about/Signature'
import PhilosophyBar from '../component/Philosopy'
const MainAbout = () => {
  return (
    <div>
        <Abouthero />
      <AboutM />
        <Craftman />
          <GiftShopExpertise />
          <Heritage />
          <Signature />
        <PhilosophyBar />
    </div>
  )
}

export default MainAbout