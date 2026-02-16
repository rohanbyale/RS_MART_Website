import React from 'react'
import WatchHero from './WatchHero'
import Watch from './Watch'
import Navbar from '../Navbar'
import PhilosophyBar from '../Philosopy'
const HomeWatch = () => {
  return (
    <div>
        <Navbar />
        <WatchHero />
        <Watch />
        <PhilosophyBar />
    </div>
  )
}

export default HomeWatch