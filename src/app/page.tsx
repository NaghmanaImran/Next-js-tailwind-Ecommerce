import React from 'react'
import Navbar from './components/Navbar'
import Carsoule from './components/Carsoule'
import Progeresor from './components/Progeresor'
import Banner from './components/Banner'
import ProductList from './components/Productlist'

import Offer from './components/Offer'
import Card from './components/Card'
import Reservation from './components/Reservation'
import Footer from './components/Footer'
import Menu from './components/Menuitems'




const App = () => {
  return (
    <div className="bg-red-800 min-h-screen text-white">
      <Navbar/>
      <Carsoule/>
      <Progeresor/>
      <Banner/>
      <ProductList/>
      
      <Menu/>   
      <Offer/>
      <Card/>
      <Reservation/>
      <Footer/>
    </div>
    
  )
}

export default App
