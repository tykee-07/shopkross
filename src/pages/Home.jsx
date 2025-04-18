import React from 'react'
import Banner from '../components/Banner/Banner'
import Collections from '../components/New-collections/Collections'
import Catolog from '../components/Catolog/Catolog'
import Frameii from '../components/Frame.ii/Frame.ii'

function Home() {
  return (
    <div className='container'>
      <Banner/>
      <Collections/>
      <Catolog/>
      <Frameii/>
    </div>
  )
}

export default Home
