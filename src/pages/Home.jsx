import React from 'react'
import Banner from '../components/Banner/Banner'
import Collections from '../components/New-collections/Collections'
import Catolog from '../components/Catolog/Catolog'
import Frameii from '../components/Frame.ii/Frame.ii'
import Sub from '../components/Sub/Sub'

function Home() {
  return (
    <div className='container'>
      <Banner/>
      <Collections/>
      <Catolog/>
      <Frameii/>
      <Sub/>
    </div>
  )
}

export default Home
