import React from 'react'
import GoldHero from './GoldHero'
import Shop from './Shop'
import GoldCollection from './GoldCollection'
import NewGold from './NewGold'
import Promise from './Promise'
import Navbar from '../Navbar'
import PhilosophyBar from '../Philosopy'
const GoldHome = () => {
  return (
    <div>
      <Navbar />
        <GoldHero />
    
        <GoldCollection />
            <Shop />
        <NewGold />
        <Promise />
        <PhilosophyBar />
    </div>
  )
}

export default GoldHome