import React from 'react'
import Banner from '../components/Banner/Banner'
import Collections from '../components/New-collections/Collections'
import Catolog from '../components/Catolog/Catolog'

function Home() {
  return (
    <div className='container'>
      <Banner/>
      <Collections/>
      <Catolog/>
    </div>
  )
}

export default Home
