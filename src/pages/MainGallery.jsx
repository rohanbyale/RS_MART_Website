import React from 'react'
import GalleryHero from '../component/gallery/GalleryHero'
import GalleryGrid from '../component/gallery/GalleryGrid'
import FinalCTA from '../component/gallery/FinalCta'
import Video from '../component/gallery/Video'
import HeroVideo from '../component/gallery/HeroVideo'
import PhilosophyBar from '../component/Philosopy'

const MainGallery = () => {
  return (
    <div>
      <GalleryHero />
      <GalleryGrid />
      <HeroVideo />
      <Video />
      <FinalCTA />
      <PhilosophyBar />
    </div>
  )
}

export default MainGallery