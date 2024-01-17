import React from 'react'
import { Helmet } from 'react-helmet-async'
import FetchSection from '../../Components/HomeSections/FetchSection/index'
import ShopWithUs from '../../Components/HomeSections/ShopWithUs'
import LeaderShip from '../../Components/HomeSections/LeaderShipSection'

const Home = () => {
  return (
   <>
    <Helmet>
  <title>
    Home Page
  </title>
</Helmet>
    <main>
      <ShopWithUs/>
      <FetchSection/>
      <LeaderShip/>
    </main>
   </>
  )
}

export default Home