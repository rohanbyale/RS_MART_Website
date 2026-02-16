import React from 'react'
import ContactHero from '../component/contact/ContactHero'
import Timing from '../component/Timing'
import Form from '../component/Form'
import Map from '../component/Map'
import Social from '../component/ContactPage'
import PhilosophyBar from '../component/Philosopy'
import ThreeContact from '../component/contact/ThreeContact'
const MainContact = () => {
  return (
    <div>
      <ContactHero />
      <Timing />
     
      <Map />
         <Form />
         <Social />
         {/* <ThreeContact /> */}
         <PhilosophyBar />
    </div>
  )
}

export default MainContact